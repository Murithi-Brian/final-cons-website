import Link from "next/link"
import { Leaf, Mail, Phone, MapPin } from "lucide-react"

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "What We Do", href: "/what-we-do" },
    { name: "Who We Serve", href: "/who-we-serve" },
    { name: "Contact", href: "/contact" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-green-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand - full width on mobile, span 2 on large screens */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white">
                <Leaf className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <span className="font-semibold text-lg sm:text-xl">FAFS</span>
            </Link>
            <p className="mt-3 sm:mt-4 text-sm text-green-100 max-w-md">
              Fair Agri-Food Systems is dedicated to transforming food systems for justice, sustainability, and
              community empowerment across Africa.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Navigation</h3>
            <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-green-100 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Contact</h3>
            <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
              <li className="flex items-start sm:items-center gap-2 text-sm text-green-100">
                <Mail className="h-4 w-4 mt-0.5 sm:mt-0 flex-shrink-0" />
                <a
                  href="mailto:info@agrifoodsystems.com"
                  className="hover:text-white transition-colors break-all sm:break-normal"
                >
                  info@agrifoodsystems.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-green-100">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+254722680888" className="hover:text-white transition-colors">
                  +254 722 680 888
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-green-100">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>Kenya, East Africa</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 lg:mt-12 border-t border-green-800 pt-6 sm:pt-8">
          <p className="text-center text-xs sm:text-sm text-green-100">
            © {new Date().getFullYear()} FAFS | Fair Agri-Food Systems |{" "}
            <a href="http://www.fairagrifoodsystems.com" className="hover:text-white transition-colors">
              www.fairagrifoodsystems.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
