export default function IsometricPage({ url }: { url: string }) {
  return (
    <div className="hover:outline-white outline-black outline hover:shadow-2xl cursor-pointer shadow-white_smoke transition-all duration-400 aspect-video h-96 ">
      <iframe
        src={url}
        seamless
        className="aspect-video h-96 pointer-events-none relative"
      ></iframe>
    </div>
  );
}
