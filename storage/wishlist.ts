import AsyncStorage from '@react-native-async-storage/async-storage';
import { Preferences, WishlistItem } from '../types/wishlist';
import { demoItems } from './demo';

const ITEMS_KEY = 'wishlist.items.v1';
const PREFS_KEY = 'wishlist.preferences.v1';
export const defaultPreferences: Preferences = { appearance: 'System', currency: 'UAH', haptics: true, notifications: false };
export async function getItems(): Promise<WishlistItem[]> { const raw = await AsyncStorage.getItem(ITEMS_KEY); if (raw) return JSON.parse(raw) as WishlistItem[]; await AsyncStorage.setItem(ITEMS_KEY, JSON.stringify(demoItems)); return demoItems; }
export async function saveItems(items: WishlistItem[]): Promise<void> { await AsyncStorage.setItem(ITEMS_KEY, JSON.stringify(items)); }
export async function getPreferences(): Promise<Preferences> { const raw = await AsyncStorage.getItem(PREFS_KEY); return raw ? { ...defaultPreferences, ...JSON.parse(raw) as Partial<Preferences> } : defaultPreferences; }
export async function savePreferences(prefs: Preferences): Promise<void> { await AsyncStorage.setItem(PREFS_KEY, JSON.stringify(prefs)); }
