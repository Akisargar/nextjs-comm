import { Button } from "./ui/button"

interface AgendaItem {
  time: string
  track?: string
  title: string
  description: string
}

const agendaItems: AgendaItem[] = [
  { time: "9:00 AM - 9:30 AM", title: "Check-In & Networking", description: "Get Ready For An Exciting Day With Registration And A Chance To Network With Fellow Next.js Enthusiasts And Industry Experts Over Coffee." },
  { time: "9:30 AM - 10:15 AM", title: "Opening Keynote", description: "The Future of Next.js - Kick-off With An Inspiring Keynote On The Latest Next.js Advancements, Trends, And Community Goals For The Year." },
  { time: "10:30 AM - 11:15 AM", track: "Track 1", title: "Scaling With Next.js Microservices", description: "A Practical Guide On Designing Scalable Microservices With Next.js, Covering Architecture, Best Practices, And Case Studies." },
  { time: "10:30 AM - 11:15 AM", track: "Track 2", title: "Next.js For Beginners", description: "Perfect For Newcomers, This Session Explores Core Next.js Concepts, Tooling, And How To Get Started With Projects." },
  { time: "10:30 AM - 11:15 AM", track: "Track 3", title: "Securing Next.js Applications", description: "Dive Into Essential Security Practices For Next.js, Focusing On Common Vulnerabilities, Mitigation, And Security Protocols." },
  { time: "11:15 AM - 11:30 AM", title: "Coffee Break", description: "Refresh And Connect With Peers." },
  { time: "11:30 AM - 12:15 PM", track: "Track 1", title: "Real-Time Data With Next.js", description: "Learn How To Handle Real-Time Data With Next.js, Covering WebSockets, Streams, And Practical Applications For IoT Devices." },
  { time: "11:30 AM - 12:15 PM", track: "Track 2", title: "Building APIs With Next.js", description: "A Hands-On Approach To Creating RESTful APIs In Next.js, Discussing Routing, Data Validation, And Authentication." },
  { time: "11:30 AM - 12:15 PM", track: "Track 3", title: "Next.js And Serverless Architecture", description: "Explore Serverless Next.js Functions On Platforms Like AWS Lambda, With Insights Into Scaling And Cost Optimization." },
  { time: "12:15 PM - 1:15 PM", title: "Lunch Break", description: "Enjoy A Break With Delicious Food And Networking Opportunities." },
  { time: "1:15 PM - 2:15 PM", track: "Track 1", title: "Performance Optimization in Next.js", description: "Tackle Performance Bottlenecks In Next.js Applications With Techniques For Memory Management, Async Optimization, And Code Profiling." },
  { time: "1:15 PM - 2:15 PM", track: "Track 2", title: "Introduction To Next.js Testing", description: "A Beginner-Friendly Session On Testing Next.js Apps, Covering Unit Tests, Integration Tests, And Tools Like Jest And Chai." },
  { time: "1:15 PM - 2:15 PM", track: "Track 3", title: "Deploying Next.js Apps To Production", description: "Learn The Steps To Deploy Next.js Apps In A Production Environment, With Tips On CI/CD, Monitoring, And Scaling." },
  { time: "2:15 PM - 3:00 PM", title: "Panel Discussion (Main Hall)", description: "Industry Experts Discuss Current Trends, Community Challenges, And The Future Of Next.js." },
  { time: "3:00 PM - 3:15 PM", title: "Afternoon Break", description: "Grab A Quick Refreshment And Prepare For The Last Sessions Of The Day." },
  { time: "3:15 PM - 4:00 PM", track: "Track 1", title: "Next.js In Machine Learning", description: "An Exploratory Session On Using Next.js For Machine Learning, Focusing On Libraries, Frameworks, And Real-World Applications." },
  { time: "3:15 PM - 4:00 PM", track: "Track 2", title: "Understanding Next.js Streams", description: "Uncover The Power Of Next.js Streams For Handling Large Files And Efficient Data Processing." },
  { time: "3:15 PM - 4:00 PM", track: "Track 3", title: "Using GraphQL With Next.js", description: "Learn How To Integrate GraphQL Into Your Next.js Apps, Covering Query Building, Data Fetching, And Performance Benefits." },
  { time: "4:15 PM - 5:00 PM", title: "Closing Keynote & Community Announcements", description: "Energizing The Next.js Community - Wrap Up With Insights, Upcoming Community Initiatives, And A Thank You To All Contributors." },
]

export function Agenda() {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Agenda</h2>
        <div className="space-y-8">
          {agendaItems.map((item, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg">
              <div className="flex flex-wrap justify-between items-start mb-2">
                <span className="text-green-500 font-semibold">{item.time}</span>
                {item.track && <span className="text-gray-400">{item.track}</span>}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Tickets</h2>
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <h3 className="text-2xl font-semibold mb-4">Reserve Your Spot At Next.js Community 2025</h3>
            <p className="text-gray-400 mb-6">Join Fellow Developers And Enthusiasts For A Full Day Of Networking, Learning, And Exciting Announcements From Industry Leaders. Secure Your Ticket Now To Be Part Of This Next.js-Focused Journey!</p>
            <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg">Register Now</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
