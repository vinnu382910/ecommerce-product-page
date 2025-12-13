"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Bot, ShoppingBag, Heart, Star, TrendingUp } from "lucide-react"

export default function AccountPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-[#F9FAFB]">
        <div className="container px-4 py-12">
          <div className="mx-auto max-w-4xl">
            {/* Bot User Profile */}
            <Card className="mb-8 overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-[#E87654] to-[#D66543] p-8 text-white">
                  <div className="flex items-center gap-4">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white">
                      <Bot className="h-10 w-10 text-[#E87654]" />
                    </div>
                    <div>
                      <h1 className="text-3xl font-bold">Welcome, Guest!</h1>
                      <p className="mt-1 text-white/90">Demo Account - Lumina Store Member</p>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="mb-6">
                    <h2 className="mb-2 text-xl font-bold text-[#1E3A4F]">Hello there!</h2>
                    <p className="leading-relaxed text-[#6B7280]">
                      Welcome to Lumina Store! This is a demo account showcasing our e-commerce platform. Explore our
                      premium collection of products, add items to your cart, and experience seamless shopping. While
                      this is a demonstration, all features are fully functional including real-time cart management,
                      product filtering, and dynamic pricing.
                    </p>
                  </div>

                  <div className="rounded-lg bg-[#F9FAFB] p-6">
                    <h3 className="mb-4 font-semibold text-[#1E3A4F]">Account Details</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-[#6B7280]">Email:</span>
                        <span className="font-medium text-[#1E3A4F]">demo@luminastore.com</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#6B7280]">Member Since:</span>
                        <span className="font-medium text-[#1E3A4F]">January 2024</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#6B7280]">Account Type:</span>
                        <span className="font-medium text-[#1E3A4F]">Demo User</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Features Grid */}
            <div className="mb-8">
              <h2 className="mb-6 text-2xl font-bold text-[#1E3A4F]">Platform Features</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="transition-shadow hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#E87654]/10">
                      <ShoppingBag className="h-6 w-6 text-[#E87654]" />
                    </div>
                    <h3 className="mb-2 font-semibold text-[#1E3A4F]">Smart Shopping Cart</h3>
                    <p className="text-sm leading-relaxed text-[#6B7280]">
                      Add products, adjust quantities, select specific items for checkout, and see real-time price
                      updates. Your cart persists across sessions.
                    </p>
                  </CardContent>
                </Card>

                <Card className="transition-shadow hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#E87654]/10">
                      <TrendingUp className="h-6 w-6 text-[#E87654]" />
                    </div>
                    <h3 className="mb-2 font-semibold text-[#1E3A4F]">Advanced Filtering</h3>
                    <p className="text-sm leading-relaxed text-[#6B7280]">
                      Filter products by category, adjust price ranges with an interactive slider, and sort by price or
                      ratings for the perfect match.
                    </p>
                  </CardContent>
                </Card>

                <Card className="transition-shadow hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#E87654]/10">
                      <Star className="h-6 w-6 text-[#E87654]" />
                    </div>
                    <h3 className="mb-2 font-semibold text-[#1E3A4F]">Real Product Data</h3>
                    <p className="text-sm leading-relaxed text-[#6B7280]">
                      Browse authentic products from the FakeStore API with real images, descriptions, prices, and
                      customer ratings.
                    </p>
                  </CardContent>
                </Card>

                <Card className="transition-shadow hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#E87654]/10">
                      <Heart className="h-6 w-6 text-[#E87654]" />
                    </div>
                    <h3 className="mb-2 font-semibold text-[#1E3A4F]">Modern UI/UX</h3>
                    <p className="text-sm leading-relaxed text-[#6B7280]">
                      Enjoy a beautifully designed, fully responsive interface with smooth animations and intuitive
                      interactions on all devices.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Welcome Message */}
            <Card className="border-[#E87654] bg-gradient-to-r from-[#E87654]/5 to-transparent">
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-bold text-[#1E3A4F]">Ready to Explore?</h3>
                <p className="leading-relaxed text-[#6B7280]">
                  Start shopping and experience all the features of Lumina Store. Add products to your cart, test the
                  filters, and see how everything works together seamlessly. If you have any questions, visit our
                  contact page!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
