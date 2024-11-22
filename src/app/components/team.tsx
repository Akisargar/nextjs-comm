import Image from "next/image"

interface TeamMember {
  name: string
  role: string
  description: string
  image: string
}

const teamMembers: TeamMember[] = [
  {
    name: "Mike Chambers",
    role: "Keynote Speaker",
    description: "AI Specialist Developer Advocate at AWS",
    image: "/placeholder.svg?height=200&width=200"
  },
  {
    name: "Mike Chambers",
    role: "Keynote Speaker",
    description: "AI Specialist Developer Advocate at AWS",
    image: "/placeholder.svg?height=200&width=200"
  }
]

const coreTeamMembers: TeamMember[] = Array(8).fill({
  name: "Mike Chambers",
  role: "Keynote Speaker",
  description: "AI Specialist Developer Advocate at AWS",
  image: "/placeholder.svg?height=200&width=200"
})

export function Team() {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-heading border-y border-primary p-8">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex items-center space-x-4">
              <Image src={member.image} alt={member.name} width={100} height={100} className="rounded-full" />
              <div>
                <h3 className="font-semibold text-xl">{member.name}</h3>
                <p className="text-green-500">{member.role}</p>
                <p className="text-sm text-gray-400">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
        <h3 className="text-2xl font-bold text-center text-heading border-y border-primary p-8">Our Core Team</h3>
        <div className="grid grid-cols-2 md:grid-cols-4">
          {coreTeamMembers.map((member, index) => (
            <div key={index} className="border-l border-b border-primary p-2 py-4">
              <div className="text-center m-4">
                <Image src={member.image} alt={member.name} width={200} height={200} className="rounded-lg mx-auto mb-4" />
                <h4 className="font-semibold">{member.name}</h4>
                <p className="text-green-500 text-sm">{member.role}</p>
                <p className="text-xs text-gray-400 mt-2">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
