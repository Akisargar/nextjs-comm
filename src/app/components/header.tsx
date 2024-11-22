import { Button } from "./ui/button"
import Image from "next/image"
import Logo from "./img/next-js.svg"

export function Header() {
  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <Image src={Logo} alt="Next.js Logo" width={40} height={40} />
        <span className="text-xl font-bold">Next.js Community Day</span>
        <span className="text-green-500 font-bold">PUNE</span>
        <span className="text-gray-400">2025</span>
      </div>
      <nav className="space-x-4 text-sm">
        <a href="#" className="hover:text-green-500">About</a>
        <a href="#" className="hover:text-green-500">Speakers</a>
        <a href="#" className="hover:text-green-500">Sponsors</a>
        <a href="#" className="hover:text-green-500">Team</a>
        <a href="#" className="hover:text-green-500">Agenda</a>
        <a href="#" className="hover:text-green-500">Tickets</a>
      </nav>
      <Button className="bg-green-500 hover:bg-green-600 text-white">Register Now</Button>
    </header>
  )
}
