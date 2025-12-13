"use client"

import Image from "next/image"
import { Star, Eye, Info, ShoppingCart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useCart } from "@/lib/context/cart-context"
import { useToast } from "@/hooks/use-toast"

interface ProductCardProps {
  product: {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: {
      rate: number
      count: number
    }
  }
  badge?: "New" | "Sale"
}

export function ProductCard({ product, badge }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const { addToCart } = useCart()
  const { toast } = useToast()

  const handleAddToCart = () => {
    addToCart(product)
    toast({
      title: "Added to cart",
      description: `${product.title.substring(0, 30)}... has been added to your cart.`,
    })
  }

  return (
    <Card
      className="group overflow-hidden transition-all hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0">
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          {badge && (
            <span
              className={`absolute left-3 top-3 z-10 rounded-full px-3 py-1 text-xs font-semibold text-white ${
                badge === "New" ? "bg-[#E87654]" : "bg-red-500"
              }`}
            >
              {badge}
            </span>
          )}
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.title}
            fill
            className="object-contain p-6 transition-transform duration-300 group-hover:scale-105"
          />
          {isHovered && (
            <div className="absolute inset-0 flex items-center justify-center gap-2 bg-black/10 opacity-0 transition-opacity group-hover:opacity-100">
              <Button size="icon" className="h-10 w-10 rounded-full bg-white text-gray-700 hover:bg-gray-100">
                <Eye className="h-5 w-5" />
                <span className="sr-only">Quick view</span>
              </Button>
              <Button size="icon" className="h-10 w-10 rounded-full bg-white text-gray-700 hover:bg-gray-100">
                <Info className="h-5 w-5" />
                <span className="sr-only">Product info</span>
              </Button>
            </div>
          )}
        </div>

        <div className="p-4">
          <div className="mb-2 flex items-start justify-between gap-2">
            <h3 className="line-clamp-2 text-sm font-semibold text-[#1E3A4F]">{product.title}</h3>
            <div className="flex shrink-0 items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-xs font-medium text-[#6B7280]">{product.rating.rate.toFixed(1)}</span>
            </div>
          </div>

          <p className="mb-3 line-clamp-2 text-xs text-[#6B7280]">{product.description}</p>

          <div className="flex items-center justify-between gap-2">
            <div className="flex flex-col">
              <span className="text-lg font-bold text-[#E87654]">${product.price.toFixed(2)}</span>
              {badge === "Sale" && (
                <span className="text-sm text-[#6B7280] line-through">${(product.price * 1.3).toFixed(2)}</span>
              )}
            </div>
            <Button onClick={handleAddToCart} size="sm" className="bg-[#E87654] text-white hover:bg-[#D66543]">
              <ShoppingCart className="mr-1 h-4 w-4" />
              Add
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
