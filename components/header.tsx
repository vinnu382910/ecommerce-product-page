"use client"

import Link from "next/link"
import { Search, ShoppingCart, Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useCart } from "@/lib/context/cart-context"

interface HeaderProps {
  searchQuery?: string
  onSearchChange?: (query: string) => void
}

export function Header({ searchQuery = "", onSearchChange }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const { totalItems } = useCart()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-[#E87654]" />
            <span className="text-lg font-semibold text-[#1E3A4F]">Lumina Store</span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            <Link href="/" className="text-sm font-medium text-[#1E3A4F] hover:text-[#E87654]">
              Shop
            </Link>
            <Link href="/account" className="text-sm font-medium text-[#1E3A4F] hover:text-[#E87654]">
              Account
            </Link>
            <Link href="/contact" className="text-sm font-medium text-[#1E3A4F] hover:text-[#E87654]">
              Contact Us
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-2 md:flex">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6B7280]" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => onSearchChange?.(e.target.value)}
                className="h-9 w-64 pl-9 pr-4"
              />
            </div>
          </div>

          <Button variant="ghost" size="icon" className="h-9 w-9 md:hidden" onClick={() => setSearchOpen(!searchOpen)}>
            <Search className="h-5 w-5 text-[#6B7280]" />
            <span className="sr-only">Search</span>
          </Button>

          <Link href="/cart">
            <Button variant="ghost" size="icon" className="relative h-9 w-9">
              <ShoppingCart className="h-5 w-5 text-[#6B7280]" />
              {totalItems > 0 && (
                <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#E87654] text-[10px] font-bold text-white">
                  {totalItems > 9 ? "9+" : totalItems}
                </span>
              )}
              <span className="sr-only">Shopping cart</span>
            </Button>
          </Link>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {searchOpen && (
        <div className="border-t bg-white p-4 md:hidden">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6B7280]" />
            <Input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => onSearchChange?.(e.target.value)}
              className="w-full pl-9 pr-4"
              autoFocus
            />
          </div>
        </div>
      )}

      {mobileMenuOpen && (
        <nav className="border-t bg-white p-4 md:hidden">
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="text-sm font-medium text-[#1E3A4F] hover:text-[#E87654]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              href="/account"
              className="text-sm font-medium text-[#1E3A4F] hover:text-[#E87654]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Account
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-[#1E3A4F] hover:text-[#E87654]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
