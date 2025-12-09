import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { Tractor, Users, GraduationCap, Home, Handshake } from "lucide-react"

export const metadata: Metadata = {
  title: "Who We Serve",
  description:
    "FAFS collaborates with government, civil society, and private sector partners to build equitable and inclusive agri-food systems.",
}

const communities = [
  {
    title: "Smallholder Farmers",
    icon: Tractor,
    description:
      "Small-scale farmers who form the backbone of Africa's food production but often lack access to markets, resources, and fair prices for their produce.",
    challenges: [
      "Limited access to quality inputs and technology",
      "Unfair market conditions and price volatility",
      "Lack of storage and processing facilities",
      "Climate change impacts on yields",
    ],
  },
  {
    title: "Women in Agriculture",
    icon: Users,
    description:
      "Women who contribute significantly to food production but face gender-based barriers to resources, land ownership, and decision-making power.",
    challenges: [
      "Unequal access to land and property rights",
      "Limited access to credit and financial services",
      "Heavy workload with unpaid care responsibilities",
      "Underrepresentation in leadership positions",
    ],
  },
  {
    title: "Youth",
    icon: GraduationCap,
    description:
      "Young people seeking opportunities in agriculture and food systems who need skills, resources, and support to build sustainable livelihoods.",
    challenges: [
      "Lack of interest due to perception of farming",
      "Limited access to land and startup capital",
      "Insufficient training and mentorship",
      "Migration to urban areas for employment",
    ],
  },
  {
    title: "Rural Communities",
    icon: Home,
    description:
      "Communities in rural areas who depend on agriculture for their livelihoods but face infrastructure gaps and limited access to services.",
    challenges: [
      "Poor road and transport infrastructure",
      "Limited access to information and technology",
      "Inadequate healthcare and education",
      "Lack of clean water and energy",
    ],
  },
]

const systemicBarriers = [
  {
    title: "Market Inequities",
    description:
      "Unfair trading practices, lack of market information, and exploitation by middlemen that reduce farmer incomes.",
  },
  {
    title: "Policy Gaps",
    description:
      "Insufficient policies protecting smallholder rights and inadequate implementation of existing supportive policies.",
  },
  {
    title: "Climate Vulnerability",
    description:
      "Increasing droughts, floods, and unpredictable weather patterns that threaten agricultural productivity.",
  },
  {
    title: "Resource Access",
    description:
      "Limited access to quality seeds, fertilizers, water, credit, and technology needed for productive farming.",
  },
  {
    title: "Knowledge Gaps",
    description: "Lack of agricultural extension services and training on sustainable and climate-smart practices.",
  },
  {
    title: "Infrastructure Deficits",
    description: "Poor roads, storage facilities, and processing infrastructure that lead to post-harvest losses.",
  },
]

const intersectingFactors = ["Gender", "Age", "Income", "Location", "Disability", "Health", "Education", "Ethnicity"]

export default function WhoWeServePage() {
  return (
    <>
      <PageHeader
        title="Who We Serve"
        description="Building equitable and inclusive agri-food systems through collaborative partnerships."
      />

      {/* Main Content - Updated to official content */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                <Handshake className="h-7 w-7 text-primary" />
              </div>
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Our Collaborative Approach
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We collaborate with government, civil society, and private sector partners to build equitable and
                  inclusive agri-food systems by addressing systemic barriers affecting underserved populations.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/diverse-stakeholders-meeting-agriculture-food-syst.jpg"
                alt="FAFS collaborative partnerships"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Intersecting Factors - Updated to official content */}
      <section className="py-16 sm:py-24 bg-earth-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex justify-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                <Users className="h-7 w-7 text-primary" />
              </div>
            </div>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Addressing Systemic Barriers
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We work to address systemic barriers affecting underserved populations across intersecting factors.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {intersectingFactors.map((factor) => (
              <div
                key={factor}
                className="bg-white rounded-lg p-6 text-center border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-foreground">{factor}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Partners</h2>
            <p className="mt-4 text-muted-foreground">
              We work with diverse stakeholders across the food system ecosystem.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            <div className="bg-earth-50 rounded-lg p-8 text-center border border-border">
              <h3 className="text-xl font-semibold text-foreground">Government</h3>
              <p className="mt-3 text-muted-foreground">
                Partnering with government agencies to shape policies and programs that support equitable food systems.
              </p>
            </div>
            <div className="bg-earth-50 rounded-lg p-8 text-center border border-border">
              <h3 className="text-xl font-semibold text-foreground">Civil Society</h3>
              <p className="mt-3 text-muted-foreground">
                Collaborating with NGOs, community organizations, and advocacy groups to amplify impact.
              </p>
            </div>
            <div className="bg-earth-50 rounded-lg p-8 text-center border border-border">
              <h3 className="text-xl font-semibold text-foreground">Private Sector</h3>
              <p className="mt-3 text-muted-foreground">
                Engaging businesses to create sustainable value chains and market opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-green-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Partner With Us</h2>
          <p className="mt-4 text-lg text-green-100 max-w-2xl mx-auto">
            Join us in building equitable and inclusive agri-food systems. Together, we can address systemic barriers
            and create lasting change.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-medium text-primary hover:bg-green-50 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </>
  )
}
