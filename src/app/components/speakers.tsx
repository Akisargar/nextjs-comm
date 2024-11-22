import Image from "next/image"

export function Speakers() {
  const speakers = Array(12).fill({
    name: "Mike Chambers",
    title: "Keynote Speaker",
    description: "AI Specialist Developer Advocate at AWS",
    image: "/placeholder.svg"
  })

  return (
    <section className="bg-gray-900 text-white p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Our Speakers</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {speakers.map((speaker, index) => (
          <div key={index} className="text-center bg-gray-800 p-4 rounded-lg">
            <Image src={speaker.image} alt={speaker.name} width={200} height={200} className="rounded-lg mx-auto mb-4" />
            <h3 className="font-semibold text-lg">{speaker.name}</h3>
            <p className="text-green-500">{speaker.title}</p>
            <p className="text-xs text-gray-400 mt-2">{speaker.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
