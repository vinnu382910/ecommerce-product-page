import type { Product, FilterState } from "@/lib/types"

export function filterProducts(products: Product[], filters: FilterState): Product[] {
  let filtered = [...products]

  if (filters.searchQuery) {
    const query = filters.searchQuery.toLowerCase()
    filtered = filtered.filter(
      (p) =>
        p.title.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query),
    )
  }

  if (filters.category !== "all") {
    filtered = filtered.filter((p) => p.category === filters.category)
  }

  filtered = filtered.filter((p) => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1])

  switch (filters.sortBy) {
    case "price-low":
      filtered.sort((a, b) => a.price - b.price)
      break
    case "price-high":
      filtered.sort((a, b) => b.price - a.price)
      break
    case "rating":
      filtered.sort((a, b) => b.rating.rate - a.rating.rate)
      break
    default:
      break
  }

  return filtered
}

export function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`
}

export function formatRating(rating: number): string {
  return rating.toFixed(1)
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + "..."
}

export function getCategoryLabel(category: string): string {
  const labels: Record<string, string> = {
    "men's clothing": "Bags",
    "women's clothing": "Bags",
    jewelery: "Accessories",
    electronics: "Footwear",
  }
  return labels[category] || category
}
