import Image from "next/image"

interface Sponsor {
  name: string
  logo: string
  tier: "title" | "platinum" | "gold" | "silver" | "bronze"
}

const sponsors: Sponsor[] = [
  { name: "Next.js", logo: "/img/next-js.svg?height=100&width=200", tier: "title" },
  { name: "IBM", logo: "/placeholder.svg?height=80&width=160", tier: "platinum" },
  { name: "Google", logo: "/placeholder.svg?height=80&width=160", tier: "platinum" },
  { name: "AMD", logo: "/placeholder.svg?height=60&width=120", tier: "gold" },
  { name: "Oracle", logo: "/placeholder.svg?height=60&width=120", tier: "gold" },
  { name: "SAP", logo: "/placeholder.svg?height=50&width=100", tier: "silver" },
  { name: "NVIDIA", logo: "/placeholder.svg?height=50&width=100", tier: "silver" },
  { name: "HP", logo: "/placeholder.svg?height=40&width=80", tier: "bronze" },
  { name: "Intel", logo: "/placeholder.svg?height=40&width=80", tier: "bronze" },
]

export function Sponsors() {
  return (
    <section className="bg-gray-800 text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Sponsors</h2>
        <div className="space-y-12">
          {["title", "platinum", "gold", "silver", "bronze"].map((tier) => (
            <div key={tier}>
              <h3 className="text-2xl font-semibold text-center mb-6 capitalize">{tier} Sponsors</h3>
              <div className="flex flex-wrap justify-center items-center gap-8">
                {sponsors
                  .filter((sponsor) => sponsor.tier === tier)
                  .map((sponsor) => (
                    <div key={sponsor.name} className="text-center">
                      <Image src={sponsor.logo} alt={`${sponsor.name} logo`} width={200} height={100} className="mx-auto" />
                      <p className="mt-2 text-sm">{sponsor.name}</p>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
