import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

export default function Home() {
  return (
    <div>
      <div className="h-screen w-screen flex flex-col items-center justify-center relative">
        <Image src={logo} alt="logo" width={100} height={100} />
        
        <h2 className="text-7xl mx-auto text-center font-bold text-transparent bg-clip-text bg-gradient-to-br from-black to-zinc-400 mt-5">
          Real Feedbacks. <br />Zero Barriers.
        </h2>
        
        <p className="mt-8 max-w-xl text-center text-pretty font-medium text-zinc-700 leading-tight text-xl">
          People hold back honest feedback due to fear or hassle: Our platform makes sharing simple, safe, and anonymous.
        </p>

        <Link 
          href="/register-user" 
          className="mt-10 bg-gradient-to-tl from-black to-zinc-500 hover:bg-gradient-to-br transition-all duration-1000 px-4 py-4 text-white font-semibold rounded-2xl"
        >
          Start Collecting Reviews
        </Link>

        {/* Floating Feedback Cards */}
        {/* Top Left */}
        <div className="absolute bg-white shadow-sm font-semibold px-2 py-2 rounded-lg top-6 left-6 rotate-[-10deg] transition-all duration-300 hover:-translate-x-2 hover:-translate-y-2">
          <p className="text-xl">It was too spicy 🌶️</p>
        </div>
        <div className="absolute bg-white shadow-sm font-semibold px-2 py-2 rounded-lg top-14 left-20 rotate-[7deg] transition-all duration-300 hover:translate-x-2 hover:-translate-y-1">
          <p className="text-xl">🔥 My mouth is burning!</p>
        </div>
        <div className="absolute bg-white shadow-sm font-semibold px-2 py-2 rounded-lg top-24 left-10 rotate-[-12deg] transition-all duration-300 hover:-translate-y-2 hover:translate-x-1">
          <p className="text-xl">Screamed for water 💧</p>
        </div>

        {/* Top Right */}
        <div className="absolute bg-white shadow-sm font-semibold px-2 py-2 rounded-lg top-8 right-6 rotate-[11deg] transition-all duration-300 hover:translate-y-2 hover:-translate-x-1">
          <p className="text-xl">🌶️🔥 Features don't always work!</p>
        </div>
        <div className="absolute bg-white shadow-sm font-semibold px-2 py-2 rounded-lg top-20 right-20 rotate-[-6deg] transition-all duration-300 hover:translate-x-2 hover:translate-y-1">
          <p className="text-xl">I wasn’t ready for this 😵</p>
        </div>
        <div className="absolute bg-white shadow-sm font-semibold px-2 py-2 rounded-lg top-36 right-10 rotate-[9deg] transition-all duration-300 hover:-translate-y-2 hover:translate-x-2">
          <p className="text-xl">Very bad UX</p>
        </div>

        {/* Bottom Left */}
        <div className="absolute bg-white shadow-sm font-semibold px-2 py-2 rounded-lg bottom-12 left-6 rotate-[13deg] transition-all duration-300 hover:translate-x-2 hover:-translate-y-1">
          <p className="text-xl">Not Value for Money</p>
        </div>
        <div className="absolute bg-white shadow-sm font-semibold px-2 py-2 rounded-lg bottom-20 left-24 rotate-[-7deg] transition-all duration-300 hover:-translate-y-1 hover:-translate-x-2">
          <p className="text-xl">Support Executives are rude</p>
        </div>
        <div className="absolute bg-white shadow-sm font-semibold px-2 py-2 rounded-lg bottom-32 left-10 rotate-[15deg] transition-all duration-300 hover:translate-x-2 hover:translate-y-2">
          <p className="text-xl">Bad Ambience!</p>
        </div>

        {/* Bottom Right */}
        <div className="absolute bg-white shadow-sm font-semibold px-2 py-2 rounded-lg bottom-10 right-8 rotate-[6deg] transition-all duration-300 hover:translate-y-2 hover:-translate-x-2">
          <p className="text-xl">I cried 🥵</p>
        </div>
        <div className="absolute bg-white shadow-sm font-semibold px-2 py-2 rounded-lg bottom-28 right-14 rotate-[-10deg] transition-all duration-300 hover:translate-x-2 hover:-translate-y-2">
          <p className="text-xl">Was not at all hygenic</p>
        </div>
        <div className="absolute bg-white shadow-sm font-semibold px-2 py-2 rounded-lg bottom-36 right-6 rotate-[12deg] transition-all duration-300 hover:-translate-x-2 hover:-translate-y-1">
          <p className="text-xl">Too late deliveries</p>
        </div>

        {/* Side Cards */}
        <div className="absolute bg-white shadow-sm font-semibold px-2 py-2 rounded-lg top-1/4 left-[2%] rotate-[-8deg] transition-all duration-300 hover:translate-x-1 hover:-translate-y-2">
          <p className="text-xl">Unexpectedly 🔥</p>
        </div>
        <div className="absolute bg-white shadow-sm font-semibold px-2 py-2 rounded-lg bottom-1/4 right-[3%] rotate-[6deg] transition-all duration-300 hover:-translate-x-1 hover:-translate-y-2">
          <p className="text-xl">What was that heat!? 😵‍💫</p>
        </div>

        {/* Diagonal Corner Cards */}
        <div className="absolute bg-white shadow-sm font-semibold px-2 py-2 rounded-lg top-[5%] right-[5%] rotate-[15deg] transition-all duration-300 hover:translate-x-2 hover:-translate-y-2">
          <p className="text-xl">A literal fireball 🌶️</p>
        </div>
        <div className="absolute bg-white shadow-sm font-semibold px-2 py-2 rounded-lg bottom-[5%] left-[5%] rotate-[-15deg] transition-all duration-300 hover:-translate-x-2 hover:translate-y-1">
          <p className="text-xl">🔥 Not again!</p>
        </div>

        {/* Off-Center Cards */}
        <div className="absolute bg-white shadow-sm font-semibold px-2 py-2 rounded-lg top-[35%] left-[10%] rotate-[6deg] transition-all duration-300 hover:translate-y-2 hover:translate-x-2">
          <p className="text-xl">Never felt this heat 😳</p>
        </div>
        <div className="absolute bg-white shadow-sm font-semibold px-2 py-2 rounded-lg top-[60%] right-[8%] rotate-[-6deg] transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2">
          <p className="text-xl">🔥 That escalated fast</p>
        </div>
      </div>
    </div>
  );
}
