export default function TechBox({ src, name }: { src: string; name: string }) {
  return (
    <div className="bg-white_smoke/20 rounded-xl w-48 h-32 text-white_smoke justify-around py-2 flex flex-col z-20">
      <img src={src} alt={name} className="w-1/2 h-1/2 mx-auto" />
      <p className="text-center text-2xl font-bold">{name}</p>
    </div>
  );
}
