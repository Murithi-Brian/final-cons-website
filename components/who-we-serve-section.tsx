import { Handshake, Users } from "lucide-react"

const intersectingFactors = ["Gender", "Age", "Income", "Location", "Disability", "Health", "Education", "Ethnicity"]

export function WhoWeServeSection() {
  return (
    <>
      {/* Section Header */}
      <div className="bg-primary py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">Who We Serve</h1>
          <p className="mt-4 text-base sm:text-lg text-green-100 max-w-2xl mx-auto">
            Building equitable and inclusive agri-food systems through collaborative partnerships.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 sm:py-24 bg-white">
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
      </div>

      {/* Intersecting Factors */}
      <div className="py-16 sm:py-24 bg-earth-50">
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

          <div className="mt-12 grid gap-4 grid-cols-2 sm:grid-cols-4">
            {intersectingFactors.map((factor) => (
              <div
                key={factor}
                className="bg-white rounded-lg p-4 sm:p-6 text-center border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-foreground text-sm sm:text-base">{factor}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Partners</h2>
            <p className="mt-4 text-muted-foreground">
              We work with diverse stakeholders across the food system ecosystem.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:gap-8 sm:grid-cols-3">
            <div className="bg-earth-50 rounded-lg p-6 sm:p-8 text-center border border-border">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground">Government</h3>
              <p className="mt-3 text-sm sm:text-base text-muted-foreground">
                Partnering with government agencies to shape policies and programs that support equitable food systems.
              </p>
            </div>
            <div className="bg-earth-50 rounded-lg p-6 sm:p-8 text-center border border-border">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground">Civil Society</h3>
              <p className="mt-3 text-sm sm:text-base text-muted-foreground">
                Collaborating with NGOs, community organizations, and advocacy groups to amplify impact.
              </p>
            </div>
            <div className="bg-earth-50 rounded-lg p-6 sm:p-8 text-center border border-border">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground">Private Sector</h3>
              <p className="mt-3 text-sm sm:text-base text-muted-foreground">
                Engaging businesses to create sustainable value chains and market opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
