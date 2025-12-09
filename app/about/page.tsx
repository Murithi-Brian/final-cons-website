import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { CoreValues } from "@/components/core-values"
import { Eye, Target, HelpCircle, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about FAFS - Fair Agri-Food Systems, our vision, mission, and core values driving food system transformation.",
}

const whyFafs = [
  "Holistic approach",
  "Justice-first orientation",
  "Inclusive design",
  "Scalable impact",
  "Collaborative partnerships",
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Us"
        description="Learn about our organization, vision, mission, and the values that drive our work."
      />

      {/* Who We Are - Updated to official content */}
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
            <div className="relative">
              <img
                src="/african-farmers-working-together-in-sustainable-gr.jpg"
                alt="FAFS community farming"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission - Updated to official content */}
      <section className="py-16 sm:py-24 bg-earth-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-border">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                <Eye className="h-7 w-7 text-primary" />
              </div>
              <h2 className="mt-6 text-2xl font-bold text-foreground">Our Vision</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Food systems where fairness, resilience, and shared prosperity are the norm for all people and the
                planet.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-border">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <h2 className="mt-6 text-2xl font-bold text-foreground">Our Mission</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                To catalyze the transition toward just and regenerative agri-food systems by removing structural
                barriers, empowering underserved actors, and promoting environmental stewardship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <CoreValues />

      {/* Why FAFS - Updated to official content */}
      <section className="py-16 sm:py-24 bg-green-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white">
                <HelpCircle className="h-7 w-7 text-primary" />
              </div>
              <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">Why FAFS?</h2>
              <div className="mt-6 space-y-4 text-green-100 leading-relaxed">
                <p>
                  FAFS stands out through our unique combination of approaches that drive meaningful, lasting change in
                  agri-food systems.
                </p>
                <ul className="mt-6 space-y-3">
                  {whyFafs.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-300 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="relative">
              <img
                src="/african-community-gathering-discussing-sustainable.jpg"
                alt="FAFS community engagement"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
