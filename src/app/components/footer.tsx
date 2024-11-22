import { Button } from "./ui/button"
import Image from "next/image"
import Logo from "./img/next-js-community.svg"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Tickets Section */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold mb-4">Tickets</h2>
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl mb-4">Reserve Your Spot At Next.js Community 2025</h3>
            <p className="text-gray-400 mb-6">
              Join Fellow Developers And Enthusiasts For A Full Day Of Networking, 
              Hands-On Sessions, And Exciting From Industry Leaders. Book Your 
              Tickets Now To Be Part Of The Next.js Innovation Journey!
            </p>
            <Button className="bg-green-500 hover:bg-green-600">Register Now</Button>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold mb-8">Any Questions ? Contact Us Now!</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="flex justify-center mb-6">
                <Image
                  src= { Logo }
                  alt="Next.js Community Day Logo"
                  width={150}
                  height={60}
                  className="dark:invert"
                />
              </div>
              <h3 className="text-xl font-semibold text-green-500">PUNE 2025</h3>
            </div>
            <div className="space-y-4 text-gray-400">
              <p>Thanks for joining us At Next.js Community Day Pune 2025! We're Excited To Foster Innovation And Growth Together. Stay Connected! We Look Out For Future Events To Share This Movement Better!</p>
              <div className="space-y-2">
                <p>Call: +91 9876543210</p>
                <p>Email: events@nodejscommunity.in</p>
              </div>
              <a href="#" className="text-green-500 hover:underline">Event Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
