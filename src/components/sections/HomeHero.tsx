export default function HomeHero() {
  return (
    <video
      id="background-video"
      autoPlay
      loop
      muted
      poster="/bg.mp4"
      className="h-screen w-full object-cover"
    >
      <source src="/bg.mp4" type="video/mp4" />
    </video>
  );
}
