"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import type { Product, CartItem } from "@/lib/types"

interface CartContextType {
  items: CartItem[]
  addToCart: (product: Product) => void
  removeFromCart: (productId: number) => void
  updateQuantity: (productId: number, quantity: number) => void
  toggleSelection: (productId: number) => void
  toggleSelectAll: () => void
  clearCart: () => void
  totalItems: number
  selectedTotal: number
  selectedCount: number
  allSelected: boolean
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("lumina-cart")
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart))
      } catch (error) {
        console.error("Failed to load cart:", error)
      }
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("lumina-cart", JSON.stringify(items))
  }, [items])

  const addToCart = (product: Product) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id)
      if (existing) {
        return prev.map((item) => (item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
      }
      return [...prev, { product, quantity: 1, selected: true }]
    })
  }

  const removeFromCart = (productId: number) => {
    setItems((prev) => prev.filter((item) => item.product.id !== productId))
  }

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity < 1) return
    setItems((prev) => prev.map((item) => (item.product.id === productId ? { ...item, quantity } : item)))
  }

  const toggleSelection = (productId: number) => {
    setItems((prev) =>
      prev.map((item) => (item.product.id === productId ? { ...item, selected: !item.selected } : item)),
    )
  }

  const toggleSelectAll = () => {
    const allSelected = items.every((item) => item.selected)
    setItems((prev) => prev.map((item) => ({ ...item, selected: !allSelected })))
  }

  const clearCart = () => {
    setItems([])
  }

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const selectedTotal = items
    .filter((item) => item.selected)
    .reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  const selectedCount = items.filter((item) => item.selected).length
  const allSelected = items.length > 0 && items.every((item) => item.selected)

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        toggleSelection,
        toggleSelectAll,
        clearCart,
        totalItems,
        selectedTotal,
        selectedCount,
        allSelected,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within CartProvider")
  }
  return context
}
