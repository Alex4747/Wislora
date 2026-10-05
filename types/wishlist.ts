export const CATEGORIES = ['Electronics', 'Clothes', 'Shoes', 'Gaming', 'Travel', 'Home', 'Fitness', 'Other'] as const;
export type Category = typeof CATEGORIES[number];
export type Priority = 'Low' | 'Medium' | 'High';
export type WishlistItem = { id: string; title: string; price: number; currency: Currency; category: Category; priority: Priority; imageUri?: string; url?: string; note?: string; purchased: boolean; createdAt: string; updatedAt: string };
export type Currency = 'UAH' | 'USD' | 'EUR';
export type Preferences = { appearance: 'System' | 'Light' | 'Dark'; currency: Currency; haptics: boolean; notifications: boolean };
