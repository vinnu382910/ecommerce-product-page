import type { Product } from "@/lib/types"
import { mockProducts } from "@/lib/data/mock-products"

const API_URL = "https://fakestoreapi.com/products"

export async function getProducts(): Promise<Product[]> {
  try {
    const response = await fetch(API_URL, {
      next: { revalidate: 3600 },
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      },
    })

    if (!response.ok) {
      console.log("[v0] API returned status:", response.status, "- Using fallback data")
      return mockProducts
    }

    const products: Product[] = await response.json()
    return products
  } catch (error) {
    console.log("[v0] API fetch failed - Using fallback data")
    return mockProducts
  }
}
