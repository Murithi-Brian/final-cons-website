import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { Scale, Users, Leaf, Handshake } from "lucide-react"

export const metadata: Metadata = {
  title: "What We Do",
  description:
    "Discover FAFS programs: Food System Justice, Empowerment Programs, Green & Resilient Practices, and Collaborative System Transformation.",
}

const programs = [
  {
    id: "food-system-justice",
    title: "Food System Justice",
    icon: Scale,
    description: "Support equitable systems ensuring fairness and value for actors.",
    image: "/african-farmers-market-fair-trade-agricultural-jus.jpg",
  },
  {
    id: "empowerment-programs",
    title: "Empowerment Programs",
    icon: Users,
    description:
      "Facilitate disadvantaged groups through training, linkages, and mentorship among other enabling interventions.",
    image: "/african-women-farmers-training-workshop-agricultur.jpg",
  },
  {
    id: "green-resilient-practices",
    title: "Green & Resilient Practices",
    icon: Leaf,
    description: "Advocate for regenerative and circular food systems.",
    image: "/sustainable-organic-farming-africa-agroforestry-gr.jpg",
  },
  {
    id: "collaborative-transformation",
    title: "Collaborative System Transformation",
    icon: Handshake,
    description: "Partner across sectors to address systemic food challenges.",
    image: "/diverse-stakeholders-meeting-partnership-collabora.jpg",
  },
]

export default function WhatWeDoPage() {
  return (
    <>
      <PageHeader
        title="What We Do"
        description="Our work spans four interconnected areas that together drive comprehensive food system transformation."
      />

      <div className="py-16 sm:py-24">
        {programs.map((program, index) => (
          <section key={program.id} id={program.id} className={`py-16 ${index % 2 === 0 ? "bg-white" : "bg-earth-50"}`}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div
                className={`grid gap-12 lg:grid-cols-2 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                    <program.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h2 className="mt-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    {program.title}
                  </h2>
                  <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{program.description}</p>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <img
                    src={program.image || "/placeholder.svg"}
                    alt={program.title}
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Summary CTA */}
      <section className="py-16 sm:py-24 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to Make an Impact?</h2>
          <p className="mt-4 text-lg text-green-100 max-w-2xl mx-auto">
            Whether you're a farmer, organization, or supporter, there are many ways to get involved with our programs
            and contribute to food system transformation.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-medium text-primary hover:bg-green-50 transition-colors"
          >
            Get Involved
          </a>
        </div>
      </section>
    </>
  )
}
