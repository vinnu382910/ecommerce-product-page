"use client"

import { SlidersHorizontal } from "lucide-react"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import type { FilterState, FilterCategory } from "@/lib/types"

interface SidebarProps {
  filters: FilterState
  onFiltersChange: (filters: FilterState) => void
  isVisible?: boolean
}

export function Sidebar({ filters, onFiltersChange, isVisible = true }: SidebarProps) {
  const handleCategoryChange = (category: FilterCategory) => {
    onFiltersChange({ ...filters, category })
  }

  const handleSortChange = (sortBy: FilterState["sortBy"]) => {
    onFiltersChange({ ...filters, sortBy })
  }

  const handlePriceRangeChange = (value: number[]) => {
    onFiltersChange({ ...filters, priceRange: [value[0], value[1]] })
  }

  if (!isVisible) {
    return null
  }

  return (
    <aside className="w-full lg:w-64 lg:shrink-0">
      <div className="rounded-lg bg-white p-6">
        <div className="mb-6 flex items-center gap-2">
          <SlidersHorizontal className="h-5 w-5 text-[#E87654]" />
          <h2 className="text-lg font-semibold text-[#1E3A4F]">Filters</h2>
        </div>

        <div className="space-y-6">
          <div>
            <RadioGroup
              value={filters.category}
              onValueChange={(value) => handleCategoryChange(value as FilterCategory)}
            >
              <div className="flex items-center space-x-2 rounded-lg p-2 hover:bg-gray-50">
                <RadioGroupItem value="all" id="all" className="border-[#E87654] text-[#E87654]" />
                <Label htmlFor="all" className="flex-1 cursor-pointer text-sm font-medium text-[#1E3A4F]">
                  All Products
                </Label>
              </div>
              <div className="flex items-center space-x-2 rounded-lg p-2 hover:bg-gray-50">
                <RadioGroupItem value="men's clothing" id="mens" />
                <Label htmlFor="mens" className="flex-1 cursor-pointer text-sm text-[#6B7280]">
                  Men's Clothing
                </Label>
              </div>
              <div className="flex items-center space-x-2 rounded-lg p-2 hover:bg-gray-50">
                <RadioGroupItem value="women's clothing" id="womens" />
                <Label htmlFor="womens" className="flex-1 cursor-pointer text-sm text-[#6B7280]">
                  Women's Clothing
                </Label>
              </div>
              <div className="flex items-center space-x-2 rounded-lg p-2 hover:bg-gray-50">
                <RadioGroupItem value="jewelery" id="jewelery" />
                <Label htmlFor="jewelery" className="flex-1 cursor-pointer text-sm text-[#6B7280]">
                  Jewelery
                </Label>
              </div>
              <div className="flex items-center space-x-2 rounded-lg p-2 hover:bg-gray-50">
                <RadioGroupItem value="electronics" id="electronics" />
                <Label htmlFor="electronics" className="flex-1 cursor-pointer text-sm text-[#6B7280]">
                  Electronics
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="border-t pt-6">
            <h3 className="mb-4 text-base font-semibold text-[#1E3A4F]">Price Range</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-[#6B7280]">${filters.priceRange[0]}</span>
                <span className="text-[#6B7280]">
                  ${filters.priceRange[1] >= 1000 ? "1000+" : filters.priceRange[1]}
                </span>
              </div>
              <Slider
                value={filters.priceRange}
                onValueChange={handlePriceRangeChange}
                min={0}
                max={1000}
                step={10}
                className="w-full"
              />
              <div className="flex items-center justify-between text-xs text-[#6B7280]">
                <span>$0</span>
                <span>$1000+</span>
              </div>
            </div>
          </div>

          <div className="border-t pt-6">
            <h3 className="mb-3 text-base font-semibold text-[#1E3A4F]">Sort By</h3>
            <Select value={filters.sortBy} onValueChange={(value) => handleSortChange(value as FilterState["sortBy"])}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </aside>
  )
}
