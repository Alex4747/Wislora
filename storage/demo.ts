import { WishlistItem } from '../types/wishlist';

const now = new Date().toISOString();
export const demoItems: WishlistItem[] = [
  { id: 'demo-airpods', title: 'AirPods Pro', price: 10999, currency: 'UAH', category: 'Electronics', priority: 'High', note: 'For long walks and focus time.', purchased: false, createdAt: now, updatedAt: now },
  { id: 'demo-sneakers', title: 'Everyday sneakers', price: 4200, currency: 'UAH', category: 'Shoes', priority: 'Medium', note: 'A comfy pair for spring.', purchased: false, createdAt: now, updatedAt: now },
  { id: 'demo-backpack', title: 'Weekend backpack', price: 2850, currency: 'UAH', category: 'Travel', priority: 'Low', note: 'Room for a book and a camera.', purchased: false, createdAt: now, updatedAt: now },
  { id: 'demo-game', title: 'A new adventure', price: 1799, currency: 'UAH', category: 'Gaming', priority: 'Medium', purchased: false, createdAt: now, updatedAt: now }
];
