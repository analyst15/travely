import { Globe, ShieldCheck, Headphones, Tag } from "lucide-react"

const features = [
  {
    title: "75+ Destinations",
    description:
      "Venture into remarkable locations spanning every corner of the globe",
    icon: Globe,
  },
  {
    title: "Verified & Protected",
    description:
      "Journey confidently with our comprehensive protection program",
    icon: ShieldCheck,
  },
  {
    title: "Always Available",
    description:
      "Expert guidance and assistance accessible around the clock",
    icon: Headphones,
  },
  {
    title: "Unbeatable Value",
    description:
      "Premium experiences at exceptional rates with member-only perks",
    icon: Tag,
  },
]

export function OurPurpose() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature, index) => {
            const Icon = feature.icon

            return (
              <div
                key={index}
                className="relative flex items-start gap-4 rounded-xl border bg-background p-6 shadow-sm transition hover:shadow-md hover:-translate-y-1"
              >
                {/* Left accent line */}
                <div className="absolute h-full w-1 bg-green-500 rounded-l-xl left-0 top-0 hidden sm:block" />

                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-green-600">
                  <Icon className="h-6 w-6" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {feature.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}