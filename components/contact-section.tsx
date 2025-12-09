import { ContactForm } from "@/components/contact-form"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "info@agrifoodsystems.com",
    href: "mailto:info@agrifoodsystems.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+254 722 680 888",
    href: "tel:+254722680888",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kenya, East Africa",
    href: null,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon - Fri: 8:00 AM - 5:00 PM EAT",
    href: null,
  },
]

export function ContactSection() {
  return (
    <>
      {/* Section Header */}
      <div className="bg-primary py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">Contact Us</h1>
          <p className="mt-4 text-base sm:text-lg text-green-100 max-w-2xl mx-auto">
            We'd love to hear from you. Reach out to learn more about our work or explore partnership opportunities.
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground">Get in Touch</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Whether you're interested in partnering with us, learning more about our programs, or joining our
                mission, we're here to help. Reach out using any of the methods below.
              </p>

              <div className="mt-8 space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-100">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">{item.label}</h3>
                      {item.href ? (
                        <a href={item.href} className="mt-1 text-muted-foreground hover:text-primary transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-muted-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="mt-10">
                <img
                  src="/map-of-kenya-east-africa-location-pin.jpg"
                  alt="FAFS Location"
                  className="rounded-lg w-full h-auto border border-border"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-earth-50 rounded-lg p-6 sm:p-8 border border-border">
              <h2 className="text-2xl font-bold tracking-tight text-foreground">Send Us a Message</h2>
              <p className="mt-2 text-muted-foreground">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 sm:py-24 bg-green-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Join the Movement</h2>
          <p className="mt-4 text-lg text-green-100 max-w-2xl mx-auto">
            Together, we can transform food systems to be more just, sustainable, and community-centered. Let's create
            lasting change for Africa's farmers and communities.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@agrifoodsystems.com"
              className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-medium text-primary hover:bg-green-50 transition-colors"
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Us Directly
            </a>
            <a
              href="tel:+254722680888"
              className="inline-flex items-center justify-center rounded-md border border-white px-6 py-3 text-base font-medium text-white hover:bg-white/10 transition-colors"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Us
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
