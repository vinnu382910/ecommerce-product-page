"use client"

import { useEffect, useState } from "react"
import { Hero } from "@/components/hero"
import { ProductGrid } from "@/components/product-grid"
import { Footer } from "@/components/footer"
import { getProducts } from "@/lib/services/product-service"
import type { Product } from "@/lib/types"

export default function Home() {
  const [products, setProducts] = useState<Product[]>([])
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    getProducts().then(setProducts)
  }, [])

  useEffect(() => {
    const handleSearch = (e: CustomEvent) => {
      setSearchQuery(e.detail)
    }
    window.addEventListener("search-products" as any, handleSearch)
    return () => window.removeEventListener("search-products" as any, handleSearch)
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <Hero />
        {products.length > 0 ? (
          <ProductGrid initialProducts={products} searchQuery={searchQuery} />
        ) : (
          <div className="container py-8">Loading products...</div>
        )}
      </main>
      <Footer />
    </div>
  )
}
