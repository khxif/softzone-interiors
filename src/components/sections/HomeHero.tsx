export default function HomeHero() {
  return (
    <div className="bg">
      <video
        id="background-video"
        autoPlay
        loop
        muted
        poster="/bg.mp4"
        className="w-full object-cover"
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
