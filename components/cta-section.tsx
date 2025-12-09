import { Button } from "@/components/ui/button"
import { Mail, ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-16 sm:py-24 bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Join the Transformation</h2>
          <p className="mt-4 text-lg text-green-100 max-w-2xl mx-auto">
            Be part of the movement for fair, sustainable, and just agri-food systems. Together, we can create lasting
            change for communities across Africa.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-green-50">
              <a href="mailto:info@agrifoodsystems.com">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 hover:text-white bg-transparent"
            >
              <a href="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
