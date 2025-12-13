import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="h-8 w-8 rounded bg-[#E87654]" />
              <span className="text-lg font-semibold text-[#1E3A4F]">Lumina Store</span>
            </div>
            <p className="text-sm text-[#6B7280]">
              Your one-stop destination for premium modern goods. We source the finest materials to bring you quality
              products.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#1E3A4F]">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-[#6B7280] hover:text-[#E87654]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#6B7280] hover:text-[#E87654]">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#6B7280] hover:text-[#E87654]">
                  Store Locations
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#6B7280] hover:text-[#E87654]">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#1E3A4F]">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-[#6B7280] hover:text-[#E87654]">
                  Contact Support
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#6B7280] hover:text-[#E87654]">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#6B7280] hover:text-[#E87654]">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#6B7280] hover:text-[#E87654]">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#1E3A4F]">Connect</h3>
            <div className="mb-4 flex gap-3">
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-[#6B7280] hover:bg-[#E87654] hover:text-white"
              >
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-[#6B7280] hover:bg-[#E87654] hover:text-white"
              >
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-[#6B7280] hover:bg-[#E87654] hover:text-white"
              >
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
            <div>
              <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#1E3A4F]">Payment</h4>
              <div className="flex gap-2">
                <div className="rounded border px-2 py-1 text-xs font-semibold text-[#1E3A4F]">VISA</div>
                <div className="rounded border px-2 py-1 text-xs font-semibold text-[#E87654]">MC</div>
                <div className="rounded border px-2 py-1 text-xs font-semibold text-blue-600">PP</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t pt-8 text-sm text-[#6B7280] md:flex-row">
          <p>© 2025 Lumina Store Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-[#E87654]">
              Privacy
            </Link>
            <Link href="#" className="hover:text-[#E87654]">
              Terms
            </Link>
            <Link href="#" className="hover:text-[#E87654]">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
