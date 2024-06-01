import Image from "next/image";

export default function HomeSection2() {
  return (
    <section className="bg-black relative flex flex-col md:flex-row items-center md:space-x-6 px-4">
      <Image
        src="/world-map.png"
        alt="map"
        width={1000}
        height={500}
        priority
        className=""
      />

      <div className="flex flex-col space-y-4">
        <h1 className="text-green-600 text-xl md:text-2xl">We are global</h1>
        <p>
          The Pico Group is a world-wide network of agencies in 36 cities across
          the world, each providing local understanding to a global approach to
          activating brands. For over 50 years Pico has leveraged the platforms
          of its agencies and the expertise of the best people to become one of
          the most effective global, independent, agency networks in the world.
        </p>
      </div>
    </section>
  );
}
