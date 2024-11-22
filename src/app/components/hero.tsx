import { Button } from "./ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <section className="bg-gray-900 text-white p-8 flex justify-between items-center">
      <div className="max-w-xl">
        <h1 className="text-4xl font-bold mb-4">Next.js Community Day Pune 2025</h1>
        <p className="mb-6 text-gray-400">
          Join the vibrant Next.js Community for a dynamic day of learning, collaboration, and connection. 
          Dive into workshops, tech talks, and networking to evolve your skills and insights.
        </p>
        <Button className="bg-green-500 hover:bg-green-600 text-white">Register Now</Button>
        <p className="mt-4 text-sm text-gray-400">Mark your calendar: It all begins on Saturday, January 4th, 2025</p>
      </div>
      <div className="bg-gray-800 p-6 rounded-lg">
        <Image src="/placeholder.svg" alt="Next.js Community Day Logo" width={300} height={200} />
        <p className="text-center mt-4 text-xl font-semibold">Saturday, 4th January 2025</p>
      </div>
    </section>
  )
}
