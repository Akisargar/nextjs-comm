export function About() {
    return (
      <section className="bg-gray-900 text-white p-8">
        <h2 className="text-3xl font-bold text-center mb-8">About The Event</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-green-500">Who We Are</h3>
            <h4 className="text-lg font-semibold mb-2">Next.js Community Pune.</h4>
            <p className="text-gray-400 mb-4">
              Welcome to Next.js Community Pune! We are a dynamic and passionate community dedicated to fostering growth and innovation within the Next.js ecosystem. Our group brings together developers with diverse experiences, from beginners to seasoned professionals, all united by our shared enthusiasm for Next.js.
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Regular meetups featuring technical discussions, hands-on workshops, and expert insights.</li>
              <li>Fostering a collaborative environment where members can share knowledge, experiences, and best practices.</li>
              <li>Networking opportunities to connect with industry leaders, local experts, and fellow developers.</li>
              <li>Staying up-to-date with the latest Next.js trends, tools, and technologies.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-green-500">What To Expect From Next.js Community Day?</h3>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Cutting-Edge Knowledge: Stay updated with the latest trends and innovations in Next.js.</li>
              <li>Comprehensive Learning: Workshops, presentations, and hands-on sessions covering a wide range of Next.js topics.</li>
              <li>Networking Galore: Connect with over 1000 Next.js users, developers, and industry experts.</li>
              <li>Expert Insights: Learn from seasoned professionals and thought leaders in the Next.js community.</li>
              <li>Interactive Sessions: Engage in Q&A sessions, panel discussions, and collaborative problem-solving.</li>
              <li>Career Opportunities: Explore job prospects and connect with companies leveraging Next.js.</li>
              <li>Community Building: Be part of a vibrant, supportive community of Next.js enthusiasts.</li>
            </ul>
          </div>
        </div>
      </section>
    )
  }
    