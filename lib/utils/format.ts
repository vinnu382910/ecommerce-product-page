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
