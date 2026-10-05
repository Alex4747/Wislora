import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import * as Haptics from 'expo-haptics';
import { Preferences, WishlistItem } from '../types/wishlist';
import { defaultPreferences, getItems, getPreferences, saveItems, savePreferences } from '../storage/wishlist';

type ContextValue = { items: WishlistItem[]; prefs: Preferences; ready: boolean; upsert: (item: WishlistItem) => Promise<void>; remove: (id: string) => Promise<void>; updatePrefs: (next: Preferences) => Promise<void>; togglePurchased: (id: string) => Promise<void>; ping: () => void };
const Context = createContext<ContextValue | null>(null);
export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<WishlistItem[]>([]); const [prefs, setPrefs] = useState(defaultPreferences); const [ready, setReady] = useState(false);
  useEffect(() => { Promise.all([getItems(), getPreferences()]).then(([stored, settings]) => { setItems(stored); setPrefs(settings); }).catch(() => {}).finally(() => setReady(true)); }, []);
  const ping = useCallback(() => { if (prefs.haptics) void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {}); }, [prefs.haptics]);
  const persist = useCallback(async (next: WishlistItem[]) => { setItems(next); await saveItems(next); }, []);
  const upsert = useCallback(async (item: WishlistItem) => { const next = items.some(existing => existing.id === item.id) ? items.map(existing => existing.id === item.id ? item : existing) : [item, ...items]; await persist(next); }, [items, persist]);
  const remove = useCallback(async (id: string) => { await persist(items.filter(item => item.id !== id)); }, [items, persist]);
  const updatePrefs = useCallback(async (next: Preferences) => { setPrefs(next); await savePreferences(next); }, []);
  const togglePurchased = useCallback(async (id: string) => { await persist(items.map(item => item.id === id ? { ...item, purchased: !item.purchased, updatedAt: new Date().toISOString() } : item)); }, [items, persist]);
  const value = useMemo(() => ({ items, prefs, ready, upsert, remove, updatePrefs, togglePurchased, ping }), [items, prefs, ready, upsert, remove, updatePrefs, togglePurchased, ping]);
  return <Context.Provider value={value}>{children}</Context.Provider>;
}
export function useWishlist() { const context = useContext(Context); if (!context) throw new Error('useWishlist must be used within WishlistProvider'); return context; }
