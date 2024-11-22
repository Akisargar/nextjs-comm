import Image from "next/image";

export function Speakers() {
  const speakers = {
    1: {
      name: "Speaker 1",
      title: "Keynote Speaker",
      description: "Expert in AI and Technology - Speaker 1",
      image: "/placeholder1.svg"
    },
    2: {
      name: "Speaker 2",
      title: "Guest Speaker 2",
      description: "Expert in AI and Technology - Speaker 2",
      image: "/placeholder2.svg"
    },
    3: {
      name: "Speaker 3",
      title: "Guest Speaker 3",
      description: "Expert in AI and Technology - Speaker 3",
      image: "/placeholder3.svg"
    },
    4: {
      name: "Speaker 4",
      title: "Guest Speaker 4",
      description: "Expert in AI and Technology - Speaker 4",
      image: "/placeholder4.svg"
    },
    5: {
      name: "Speaker 5",
      title: "Guest Speaker 5",
      description: "Expert in AI and Technology - Speaker 5",
      image: "/placeholder5.svg"
    },
    6: {
      name: "Speaker 6",
      title: "Guest Speaker 6",
      description: "Expert in AI and Technology - Speaker 6",
      image: "/placeholder6.svg"
    },
    7: {
      name: "Speaker 7",
      title: "Guest Speaker 7",
      description: "Expert in AI and Technology - Speaker 7",
      image: "/placeholder7.svg"
    },
    8: {
      name: "Speaker 8",
      title: "Guest Speaker 8",
      description: "Expert in AI and Technology - Speaker 8",
      image: "/placeholder8.svg"
    },
    9: {
      name: "Speaker 9",
      title: "Guest Speaker 9",
      description: "Expert in AI and Technology - Speaker 9",
      image: "/placeholder9.svg"
    },
    10: {
      name: "Speaker 10",
      title: "Guest Speaker 10",
      description: "Expert in AI and Technology - Speaker 10",
      image: "/placeholder10.svg"
    },
    11: {
      name: "Speaker 11",
      title: "Guest Speaker 11",
      description: "Expert in AI and Technology - Speaker 11",
      image: "/placeholder11.svg"
    },
    12: {
      name: "Speaker 12",
      title: "Guest Speaker 12",
      description: "Expert in AI and Technology - Speaker 12",
      image: "/placeholder12.svg"
    }
  };

  return (
    <>
      <section className="bg-gray-900 text-white py-8 container mx-auto border-b border-primary">
        <h2 className="text-3xl font-bold text-center text-heading">Our Speakers</h2>
      </section>
      <section className="bg-gray-900 text-white container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Object.values(speakers).map((speaker, index) => (
            <div key={index} className="border-l border-b border-primary">
              <div className="text-center p-2 py-4 m-4 rounded-lg">
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  width={200}
                  height={200}
                  className="rounded-lg mx-auto mb-4"
                />
                <h3 className="font-semibold text-lg">{speaker.name}</h3>
                <p className="text-green-500">{speaker.title}</p>
                <p className="text-xs text-gray-400 mt-2">{speaker.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
