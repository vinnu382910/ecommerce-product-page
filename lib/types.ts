export interface Product {
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

export type FilterCategory = "all" | "men's clothing" | "women's clothing" | "jewelery" | "electronics"

export interface FilterState {
  category: FilterCategory
  priceRange: [number, number]
  sortBy: "featured" | "price-low" | "price-high" | "rating"
  searchQuery: string
}

export interface CartItem {
  product: Product
  quantity: number
  selected: boolean
}

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
  timestamp: string
}
