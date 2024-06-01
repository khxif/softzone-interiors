import dynamic from "next/dynamic";

const Particle = dynamic(() => import("../Particle"), {
  ssr: false,
});

export default function HomeSection1() {
  return (
    <section className="relative h-[80vh] px-4 md:px-0 overflow-hidden w-full py-28 ">
      <div className="relative mx-auto flex h-full max-w-7xl flex-col items-start justify-center space-y-4">
        <h1 className="text-center text-xl font-bold text-green-600 md:text-2xl">
          Experience-Led, Digital-First
        </h1>
        <p className="md:max-w-md">
          Experience design has been at the core of Pico&apos;s solutions for
          over 50 years, delivering effective engagement across almost every
          imaginable industry and both business and consumer audiences. We
          believe the present and future of experiential marketing are fuelled
          by innovative experiences and digital intelligence that support
          marketing efficacy across all channels for brands, and integrated,
          personalised experience for their audiences.
        </p>
        <Particle />
      </div>
    </section>
  );
}
