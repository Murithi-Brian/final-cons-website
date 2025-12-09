import Link from "next/link"
import { Scale, Users, Leaf, Handshake, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const programs = [
  {
    title: "Food System Justice",
    description: "Support equitable systems ensuring fairness and value for actors.",
    icon: Scale,
    href: "/what-we-do#food-system-justice",
  },
  {
    title: "Empowerment Programs",
    description:
      "Facilitate disadvantaged groups through training, linkages, and mentorship among other enabling interventions.",
    icon: Users,
    href: "/what-we-do#empowerment-programs",
  },
  {
    title: "Green & Resilient Practices",
    description: "Advocate for regenerative and circular food systems.",
    icon: Leaf,
    href: "/what-we-do#green-resilient-practices",
  },
  {
    title: "Collaborative System Transformation",
    description: "Partner across sectors to address systemic food challenges.",
    icon: Handshake,
    href: "/what-we-do#collaborative-transformation",
  },
]

export function WhatWeDoCards() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-earth-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground md:text-4xl">What We Do</h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground">
            Our work spans four interconnected areas that together drive comprehensive food system transformation.
          </p>
        </div>

        <div className="mt-8 sm:mt-12 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program) => (
            <Card key={program.title} className="group hover:shadow-lg transition-shadow bg-white border-border">
              <CardHeader className="pb-2 sm:pb-4">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-green-100 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <program.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <CardTitle className="text-base sm:text-lg mt-3 sm:mt-4">{program.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-xs sm:text-sm leading-relaxed">{program.description}</CardDescription>
                <Link
                  href={program.href}
                  className="mt-3 sm:mt-4 inline-flex items-center text-xs sm:text-sm font-medium text-primary hover:text-green-700 transition-colors"
                >
                  Learn more
                  <ArrowRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
