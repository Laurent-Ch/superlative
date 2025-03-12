import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="min-h-screen min-w-screen bg-main-color flex flex-col justify-around items-center text-black">
        <div className="hero__container flex flex-row justify-center">
          <Image
            src="/heroBanner.svg"
            alt="Superlative logo"
            className="w-[90vw] h-auto"
            width={0}
            height={0}
            sizes="90vw"
          />
        </div>
        <div className="tagline___container tracking-widest font-semibold text-2xl">
          <div className="flex justify-between">
            <p>Si le super</p>
            <p>est relatif,</p>
          </div>
          <p>Superlative sait ce qu&apos;il aime.</p>
        </div>
      </div>
    </>
  );
}
