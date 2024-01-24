import RotatingButton from "../components/RotatingButton";

export default function Error() {
  return (
    <div className="flex flex-col h-screen w-screen bg-black text-white overflow-y-hidden my-auto ">
      <div className="flex flex-col m-auto gap-8">
        <p className="text-center w-full text-8xl font-bold my-auto mb-0">
          404
        </p>
        <RotatingButton title="Home" to={"https://notaroomba.dev"} />
      </div>
    </div>
  );
}
