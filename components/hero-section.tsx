import { Button } from "@/components/ui/button"
import { ArrowRight, Leaf } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-green-900 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 md:py-28 lg:px-8 lg:py-36">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-4 sm:mb-6">
            <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white">
              <Leaf className="h-5 w-5 sm:h-7 sm:w-7 text-primary" />
            </div>
            <span className="text-lg sm:text-xl font-semibold">FAFS</span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-balance">
            Fair Agri-Food Systems
          </h1>

          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-relaxed text-green-100 max-w-2xl text-pretty">
            An impact enterprise committed to transforming food systems into fair, inclusive, and sustainable ecosystems
            where everyone — from producers and workers to consumers and communities — equitably participates and
            meaningfully benefits.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-green-50 w-full sm:w-auto">
              <a href="#about">
                Learn About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 hover:text-white bg-transparent w-full sm:w-auto"
            >
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
