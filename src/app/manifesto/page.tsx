export default function Page() {
  return (
    <div className="min-h-screen bg-main-color">
      <p>Manifesto page</p>
      <div
        id="vision"
        className="w-full min-h-[120vh] flex justify-center items-center border border-red-500"
      >
        Vision
      </div>
      <div
        id="mission"
        className="w-full min-h-[120vh] flex justify-center items-center border border-green-500"
      >
        Mission
      </div>
      <div
        id="values"
        className="w-full min-h-[120vh] flex justify-center items-center border border-blue-500"
      >
        Values
      </div>
    </div>
  );
}
