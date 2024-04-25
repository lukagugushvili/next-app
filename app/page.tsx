import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="h-screen flex flex-col justify-center items-center gap-y-10">
        <h1 className="text-6xl text-gray-100">Hello!</h1>
        <h3 className="text-5xl text-gray-300">
          Are you ready to play{" "}
          <span className=" text-gray-400">ნამიოკობანა?</span>
        </h3>
        <Link className="btn btn-accent btn-outline" href="/game">
          Click It
        </Link>
      </div>
    </main>
  );
}
