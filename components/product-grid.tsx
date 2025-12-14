"use client"

import { useState, useMemo } from "react"
import { SlidersHorizontal } from "lucide-react"
import { Sidebar } from "@/components/sidebar"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import type { Product, FilterState } from "@/lib/types"
import { filterProducts } from "@/lib/utils/product-utils"

interface ProductGridProps {
  initialProducts: Product[]
  searchQuery?: string
}

export function ProductGrid({ initialProducts, searchQuery = "" }: ProductGridProps) {
  const [filters, setFilters] = useState<FilterState>({
    category: "all",
    priceRange: [0, 1000],
    sortBy: "featured",
    searchQuery: searchQuery,
  })
  const [visibleCount, setVisibleCount] = useState(6)
  const [showFilters, setShowFilters] = useState(true)

  useMemo(() => {
    setFilters((prev) => ({ ...prev, searchQuery }))
  }, [searchQuery])

  const filteredProducts = useMemo(() => {
    return filterProducts(initialProducts, filters)
  }, [initialProducts, filters])

  const visibleProducts = filteredProducts.slice(0, visibleCount)
  const hasMore = visibleCount < filteredProducts.length

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 6, filteredProducts.length))
  }

  return (
    <section className="bg-[#F9FAFB] py-8 md:py-12">
      <div className="container px-4">
        <div className="mb-4 flex items-center justify-between lg:hidden">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2"
          >
            <SlidersHorizontal className="h-4 w-4" />
            {showFilters ? "Hide Filters" : "Show Filters"}
          </Button>
          <p className="text-sm text-[#6B7280]">
            {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
          </p>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          <div className={`${showFilters ? "block" : "hidden"} lg:block`}>
            <Sidebar filters={filters} onFiltersChange={setFilters} isVisible={showFilters} />
          </div>

          <div className="flex-1">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {visibleProducts.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  badge={index === 0 && filters.category === "all" ? "New" : index === 3 ? "Sale" : undefined}
                />
              ))}
            </div>

            {visibleProducts.length === 0 && (
              <div className="py-12 text-center">
                <p className="text-lg text-[#6B7280]">No products found matching your filters.</p>
                {(filters.searchQuery ||
                  filters.category !== "all" ||
                  filters.priceRange[0] > 0 ||
                  filters.priceRange[1] < 1000) && (
                  <Button
                    onClick={() =>
                      setFilters({
                        category: "all",
                        priceRange: [0, 1000],
                        sortBy: "featured",
                        searchQuery: "",
                      })
                    }
                    variant="outline"
                    className="mt-4"
                  >
                    Clear All Filters
                  </Button>
                )}
              </div>
            )}

            {hasMore && (
              <div className="mt-8 flex justify-center">
                <Button
                  onClick={handleLoadMore}
                  size="lg"
                  className="rounded-full bg-[#E87654] px-8 py-6 text-base font-medium text-white hover:bg-[#D66543]"
                >
                  Load More Products
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
