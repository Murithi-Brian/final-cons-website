import { Target, Eye, Heart } from "lucide-react"

export function WhoWeAreSection() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Who We Are</h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                FAFS is an impact enterprise committed to transforming food systems into fair, inclusive, and
                sustainable ecosystems where everyone — from producers and workers to consumers and communities —
                equitably participates and meaningfully benefits.
              </p>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="flex gap-4 p-6 rounded-lg bg-green-50 border border-green-100">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary">
                <Eye className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Our Vision</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Food systems where fairness, resilience, and shared prosperity are the norm for all people and the
                  planet.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 rounded-lg bg-green-50 border border-green-100">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary">
                <Target className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Our Mission</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  To catalyze the transition toward just and regenerative agri-food systems by removing structural
                  barriers, empowering underserved actors, and promoting environmental stewardship.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 rounded-lg bg-green-50 border border-green-100">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary">
                <Heart className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Our Values</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Fairness, Inclusivity, Systems-thinking, Integrity, and Sustainability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
