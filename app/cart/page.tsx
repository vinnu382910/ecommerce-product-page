"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useCart } from "@/lib/context/cart-context"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Minus, Plus, Trash2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CartPage() {
  const {
    items,
    removeFromCart,
    updateQuantity,
    toggleSelection,
    toggleSelectAll,
    selectedTotal,
    selectedCount,
    allSelected,
  } = useCart()

  if (items.length === 0) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 bg-[#F9FAFB]">
          <div className="container px-4 py-16 text-center">
            <h1 className="mb-4 text-3xl font-bold text-[#1E3A4F]">Your Cart is Empty</h1>
            <p className="mb-8 text-[#6B7280]">Add some products to get started!</p>
            <Link href="/">
              <Button className="bg-[#E87654] text-white hover:bg-[#D66543]">Continue Shopping</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-[#F9FAFB]">
        <div className="container px-4 py-8">
          <h1 className="mb-8 text-3xl font-bold text-[#1E3A4F]">Shopping Cart</h1>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="mb-4 flex items-center gap-3 rounded-lg bg-white p-4">
                <Checkbox checked={allSelected} onCheckedChange={toggleSelectAll} id="select-all" />
                <label htmlFor="select-all" className="cursor-pointer text-sm font-medium text-[#1E3A4F]">
                  Select All ({items.length} items)
                </label>
              </div>

              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.product.id} className="rounded-lg bg-white p-4">
                    <div className="flex gap-4">
                      <Checkbox
                        checked={item.selected}
                        onCheckedChange={() => toggleSelection(item.product.id)}
                        id={`select-${item.product.id}`}
                      />
                      <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-gray-100">
                        <Image
                          src={item.product.image || "/placeholder.svg"}
                          alt={item.product.title}
                          fill
                          className="object-contain p-2"
                        />
                      </div>
                      <div className="flex flex-1 flex-col justify-between">
                        <div>
                          <h3 className="mb-1 font-semibold text-[#1E3A4F]">{item.product.title}</h3>
                          <p className="text-sm text-[#6B7280]">{item.product.category}</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Button
                              size="icon"
                              variant="outline"
                              className="h-8 w-8 bg-transparent"
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="w-12 text-center font-medium">{item.quantity}</span>
                            <Button
                              size="icon"
                              variant="outline"
                              className="h-8 w-8 bg-transparent"
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="text-lg font-bold text-[#E87654]">
                              ${(item.product.price * item.quantity).toFixed(2)}
                            </span>
                            <Button
                              size="icon"
                              variant="ghost"
                              className="h-8 w-8 text-red-500 hover:bg-red-50 hover:text-red-600"
                              onClick={() => removeFromCart(item.product.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-20 rounded-lg bg-white p-6">
                <h2 className="mb-4 text-xl font-bold text-[#1E3A4F]">Order Summary</h2>
                <div className="mb-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#6B7280]">Selected Items:</span>
                    <span className="font-medium text-[#1E3A4F]">{selectedCount}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#6B7280]">Subtotal:</span>
                    <span className="font-medium text-[#1E3A4F]">${selectedTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#6B7280]">Shipping:</span>
                    <span className="font-medium text-[#1E3A4F]">{selectedTotal > 0 ? "$10.00" : "$0.00"}</span>
                  </div>
                </div>
                <div className="mb-6 border-t pt-4">
                  <div className="flex justify-between">
                    <span className="text-lg font-bold text-[#1E3A4F]">Total:</span>
                    <span className="text-xl font-bold text-[#E87654]">
                      ${selectedTotal > 0 ? (selectedTotal + 10).toFixed(2) : "0.00"}
                    </span>
                  </div>
                </div>
                <Button
                  className="w-full bg-[#E87654] text-white hover:bg-[#D66543]"
                  size="lg"
                  disabled={selectedCount === 0}
                >
                  Checkout ({selectedCount} items)
                </Button>
                <Link href="/">
                  <Button variant="outline" className="mt-3 w-full bg-transparent" size="lg">
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
