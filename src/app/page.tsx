import { Header } from "./components/header"
import { Hero } from "./components/hero"
import { About } from "./components/about"
import { Speakers } from "./components/speakers"
import { Team } from "./components/team"
import { Sponsors } from "./components/sponsors"
import { Agenda } from "./components/agenda"
import { Footer } from "./components/footer"

export default function Page() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Speakers />
        <Team />
        <Sponsors />
        <Agenda />
      </main>
      <Footer />
    </div>
  )
}

