import Image from "next/image";
import logo from "@/assets/sepupus-logo-no-background.png";
import logoNoBackground from "@/assets/MacBook Air - 1.png";
export default function Home() {
  return (
    <div className="relative font-sans  flex justify-center items-center h-screen flex-col px-5">
      <div className="fixed inset-0 -z-10 left-0 w-full h-full">
        <img
          src={logoNoBackground.src}
          alt="Next.js logo"
          width={180}
          height={38}
          className="w-full h-full object-cover"
        />
      </div>
      <Image src={logo} alt="Next.js logo" width={700} height={300} priority />
      <div>
        <p className="text-lg lg:text-4xl font-bold text-amber-950">
          Delicious is impressive
        </p>
      </div>
    </div>
  );
}
