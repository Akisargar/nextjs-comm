import { Button } from "./ui/button";
import Image from "next/image";
import Background from "./img/hero-background.svg";
import Logo from "./img/next-js.svg";
import CardImage from "./img/card-top.svg";
import { relative } from "path";
export function Hero() {
  return (
    <section className="bg-gray-900 text-white p-8 flex flex-wrap justify-around items-center relative gap-12">
      <Image
        src={Background}
        alt="Next.js Community Day Logo absolute"
        style={{
          position: "absolute",
          width: "100%",
          maxWidth: "872.4px",
          paddingTop: "5px",
        }}
      />
      <div style={{ maxWidth: "523px", zIndex: "9" }}>
        <h1 className="text-5xl font-semibold mb-4">
          Next.js Community Day Pune 2025
        </h1>
        <p className="mb-6 text-lg text-white">
          Join the vibrant Next.js Community for a dynamic day of learning,
          collaboration, and connection. Dive into workshops, tech talks, and
          networking to evolve your skills and insights.
        </p>
        <Button className="bg-custom-blur-blue hover:bg-custom-green text-white w-full mt-24">
          Register Now
        </Button>
        <p className="mt-4 text-lg text-white">
          Mark your calendar: It all begins on Saturday,
          <span className="text-para-green"> January 4th, 2025</span>
        </p>
      </div>
      <div
        className=" p-24 rounded-lg relative"
        style={{
          width: "100%",
          maxWidth: "806px",
          backgroundColor: "#0F161C",
          zIndex: "9",
          border: "2px solid #2C3437",
        }}
      >
        <Image
          src={CardImage}
          alt="Next.js Community Day Logo"
          className="absolute top-0 right-0"
          width={57}
        />
        <div className="flex flex-col items-center">
          <Image src={Logo} alt="Next.js Community Day Logo" width={150} />
          <h1 className="text-5xl  my-4 font-semibold text-center">
            {" "}
            <span className="text-para-green">Community</span> Day
          </h1>
          <div className="flex items-center justify-center w-full">
            <div className="line"></div>
            <h1 style={{ fontSize: "44px", fontWeight: "700" }}>PUNE</h1>
            <div className="line"></div>
          </div>
        </div>
        <p
          className="text-center mt-4 arctic-lichen-green"
          style={{ fontSize: "35px", fontWeight: "600" }}
        >
          Saturday, 4th January 2025
        </p>
      </div>
    </section>
  );
}
