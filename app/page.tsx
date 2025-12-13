import { Suspense } from "react"
import { Hero } from "@/components/hero"
import { ProductGrid } from "@/components/product-grid"
import { Footer } from "@/components/footer"
import { getProducts } from "@/lib/services/product-service"

export const metadata = {
  title: "Lumina Store - Discover Our Products | Premium Modern Lifestyle Goods",
  description:
    "Browse our latest collection of premium goods designed for the modern lifestyle. Shop bags, accessories, footwear and more at Lumina Store.",
  keywords: "lumina store, premium goods, modern lifestyle, bags, accessories, footwear, online shopping",
  openGraph: {
    title: "Lumina Store - Discover Our Products",
    description: "Browse our latest collection of premium goods designed for the modern lifestyle.",
    type: "website",
  },
}

export default async function Home() {
  const products = await getProducts()

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <Hero />
        <Suspense fallback={<div className="container py-8">Loading products...</div>}>
          <ProductGrid initialProducts={products} />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
