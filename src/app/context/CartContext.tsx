'use client';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type CartItem = {
  name: string;
  price: number;
  size: string;
  quantity: number;
  image: string;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (name: string, size: string) => void;
  updateQuantity: (name: string, size: string, quantity: number) => void;
  total: number;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('cart');
    if (saved) setCart(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: CartItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.name === item.name && i.size === item.size);
      if (existing) {
        return prev.map(i => i.name === item.name && i.size === item.size ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, item];
    });
  };

  const removeFromCart = (name: string, size: string) => {
    setCart(prev => prev.filter(i => !(i.name === name && i.size === size)));
  };

  const updateQuantity = (name: string, size: string, quantity: number) => {
    if (quantity < 1) { removeFromCart(name, size); return; }
    setCart(prev => prev.map(i => i.name === name && i.size === size ? { ...i, quantity } : i));
  };

  const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, total }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
