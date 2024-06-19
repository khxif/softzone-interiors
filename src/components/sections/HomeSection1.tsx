import dynamic from "next/dynamic";

const Particle = dynamic(() => import("../Particle"), {
  ssr: false,
});

export default function HomeSection1() {
  return (
    <section className="relative h-[80vh] px-4 md:px-0 overflow-hidden w-full py-28 ">
      <div className="relative mx-auto flex h-full max-w-7xl flex-col items-start justify-center space-y-4">
        <h1 className="text-center text-xl font-bold text-green-600 md:text-2xl">
          About us
        </h1>
        <p className="md:max-w-md">
          For us at SoftZone, designing environments that uplift, soothe, and
          delight comes naturally. We collaborate closely with you to fully
          understand your requirements and preferences, and then our team of
          skilled designers and artisans creates custom solutions that go above
          and beyond. In every project, we are your dependable partner since we
          are dedicated to quality, innovation, and client satisfaction.
        </p>
        <Particle />
      </div>
    </section>
  );
}
