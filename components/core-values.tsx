import { Scale, Users, Network, Shield, Leaf } from "lucide-react"

const values = [
  {
    name: "Fairness",
    description: "Equitable opportunities and value distribution",
    icon: Scale,
  },
  {
    name: "Inclusivity",
    description: "Meaningful participation by disadvantaged groups",
    icon: Users,
  },
  {
    name: "Systems-thinking",
    description: "Interconnected, holistic impact approach",
    icon: Network,
  },
  {
    name: "Integrity",
    description: "Ethical and transparent operations",
    icon: Shield,
  },
  {
    name: "Sustainability",
    description: "Climate-smart, regenerative practices",
    icon: Leaf,
  },
]

export function CoreValues() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Core Values</h2>
          <p className="mt-4 text-muted-foreground">
            These values guide everything we do and how we work with communities and partners.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {values.map((value) => (
            <div key={value.name} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <value.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">{value.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
