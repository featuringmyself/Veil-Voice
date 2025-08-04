import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

export default function Home() {
  return (
    <div>
      <div className="min-h-screen w-full flex flex-col items-center justify-center relative px-4 py-8 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <Image src={logo} alt="logo" width={80} height={80} className="sm:w-[100px] sm:h-[100px]" />

        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mx-auto text-center font-bold text-transparent bg-clip-text bg-gradient-to-br from-black to-zinc-400 mt-5 leading-tight">
          Real Feedbacks. <br />Zero Barriers.
        </h2>

        <p className="mt-6 sm:mt-8 max-w-sm sm:max-w-xl text-center text-pretty font-medium text-zinc-700 leading-tight text-lg sm:text-xl px-4">
          People hold back honest feedback due to fear or hassle: Our platform makes sharing simple, safe, and anonymous.
        </p>

        {/* Open Source Trust Badge */}
        <div className="mt-6 flex items-center justify-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full">
          <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          <span className="text-sm font-medium text-green-700">100% Open Source</span>
          <span className="text-xs text-green-600">• Transparent & Trustworthy</span>
          <a
            href="https://github.com/featuringmyself/Veil-Voice"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 p-1 hover:bg-green-100 rounded-full transition-colors duration-200"
            aria-label="View source code on GitHub"
          >
            <svg className="w-4 h-4 text-green-600 hover:text-green-700" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>

        <Link
          href="/register-user"
          className="mt-8 sm:mt-10 bg-gradient-to-tl from-black to-zinc-500 hover:bg-gradient-to-br transition-all duration-1000 px-6 py-3 sm:px-4 sm:py-4 text-white font-semibold rounded-2xl text-center"
        >
          Start Collecting Reviews
        </Link>

        {/* Desktop floating feedback cards - positioned around main content */}
        <div className="hidden lg:block">
          {/* Top area cards */}
          <div className="absolute bg-white shadow-sm font-semibold px-2 py-2 rounded-lg top-8 left-8 rotate-[-10deg] transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 opacity-80">
            <p className="text-lg">It was too spicy 🌶️</p>
          </div>
          <div className="absolute bg-white shadow-sm font-semibold px-2 py-2 rounded-lg top-16 left-32 rotate-[7deg] transition-all duration-300 hover:translate-x-1 hover:-translate-y-1 opacity-80">
            <p className="text-lg">🔥 My mouth is burning!</p>
          </div>
          <div className="absolute bg-white shadow-sm font-semibold px-2 py-2 rounded-lg top-8 right-8 rotate-[11deg] transition-all duration-300 hover:translate-y-1 hover:-translate-x-1 opacity-80">
            <p className="text-lg">Features don&apos;t work!</p>
          </div>
          <div className="absolute bg-white shadow-sm font-semibold px-2 py-2 rounded-lg top-20 right-24 rotate-[-6deg] transition-all duration-300 hover:translate-x-1 hover:translate-y-1 opacity-80">
            <p className="text-lg">I wasn&apos;t ready 😵</p>
          </div>

          {/* Side cards - positioned to avoid center content */}
          <div className="absolute bg-white shadow-sm font-semibold px-2 py-2 rounded-lg top-1/3 left-4 rotate-[-8deg] transition-all duration-300 hover:translate-x-1 hover:-translate-y-1 opacity-75">
            <p className="text-lg">Unexpectedly 🔥</p>
          </div>
          <div className="absolute bg-white shadow-sm font-semibold px-2 py-2 rounded-lg top-2/3 right-4 rotate-[6deg] transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 opacity-75">
            <p className="text-lg">What was that heat!? 😵‍💫</p>
          </div>

          {/* Bottom area cards */}
          <div className="absolute bg-white shadow-sm font-semibold px-2 py-2 rounded-lg bottom-8 left-8 rotate-[13deg] transition-all duration-300 hover:translate-x-1 hover:-translate-y-1 opacity-80">
            <p className="text-lg">Not Value for Money</p>
          </div>
          <div className="absolute bg-white shadow-sm font-semibold px-2 py-2 rounded-lg bottom-16 left-32 rotate-[-7deg] transition-all duration-300 hover:-translate-y-1 hover:-translate-x-1 opacity-80">
            <p className="text-lg">Support team is rude</p>
          </div>
          <div className="absolute bg-white shadow-sm font-semibold px-2 py-2 rounded-lg bottom-8 right-8 rotate-[6deg] transition-all duration-300 hover:translate-y-1 hover:-translate-x-1 opacity-80">
            <p className="text-lg">I cried 🥵</p>
          </div>
          <div className="absolute bg-white shadow-sm font-semibold px-2 py-2 rounded-lg bottom-20 right-24 rotate-[-10deg] transition-all duration-300 hover:translate-x-1 hover:-translate-y-1 opacity-80">
            <p className="text-lg">Too late deliveries</p>
          </div>
        </div>

        {/* Extra cards for very large screens */}
        <div className="hidden xl:block">
          <div className="absolute bg-white shadow-sm font-semibold px-2 py-2 rounded-lg top-32 left-16 rotate-[-12deg] transition-all duration-300 hover:-translate-y-1 hover:translate-x-1 opacity-70">
            <p className="text-lg">Screamed for water 💧</p>
          </div>
          <div className="absolute bg-white shadow-sm font-semibold px-2 py-2 rounded-lg top-40 right-16 rotate-[9deg] transition-all duration-300 hover:-translate-y-1 hover:translate-x-1 opacity-70">
            <p className="text-lg">Very bad UX</p>
          </div>
          <div className="absolute bg-white shadow-sm font-semibold px-2 py-2 rounded-lg bottom-32 left-16 rotate-[15deg] transition-all duration-300 hover:translate-x-1 hover:translate-y-1 opacity-70">
            <p className="text-lg">Bad Ambience!</p>
          </div>
          <div className="absolute bg-white shadow-sm font-semibold px-2 py-2 rounded-lg bottom-40 right-16 rotate-[12deg] transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 opacity-70">
            <p className="text-lg">Not hygienic</p>
          </div>
          <div className="absolute bg-white shadow-sm font-semibold px-2 py-2 rounded-lg top-1/2 left-12 rotate-[6deg] transition-all duration-300 hover:translate-y-1 hover:translate-x-1 opacity-65">
            <p className="text-lg">Never felt this heat 😳</p>
          </div>
          <div className="absolute bg-white shadow-sm font-semibold px-2 py-2 rounded-lg top-1/2 right-12 rotate-[-6deg] transition-all duration-300 hover:-translate-y-1 hover:-translate-x-1 opacity-65">
            <p className="text-lg">🔥 That escalated fast</p>
          </div>
        </div>

        {/* Mobile feedback cards - subtle but present */}
        <div className="md:hidden">
          <div className="absolute bg-white shadow-md font-semibold px-3 py-2 rounded-lg top-6 left-4 rotate-[-8deg] transition-all duration-300 opacity-75">
            <p className="text-sm">Too spicy 🌶️</p>
          </div>
          <div className="absolute bg-white shadow-md font-semibold px-3 py-2 rounded-lg top-12 right-4 rotate-[6deg] transition-all duration-300 opacity-75">
            <p className="text-sm">Bad UX</p>
          </div>
          <div className="absolute bg-white shadow-md font-semibold px-3 py-2 rounded-lg bottom-6 left-4 rotate-[10deg] transition-all duration-300 opacity-75">
            <p className="text-sm">Not worth it</p>
          </div>
          <div className="absolute bg-white shadow-md font-semibold px-3 py-2 rounded-lg bottom-12 right-4 rotate-[-5deg] transition-all duration-300 opacity-75">
            <p className="text-sm">I cried 🥵</p>
          </div>
          <div className="absolute bg-white shadow-md font-semibold px-3 py-2 rounded-lg top-1/3 left-2 rotate-[-12deg] transition-all duration-300 opacity-60">
            <p className="text-sm">🔥 Help!</p>
          </div>
          <div className="absolute bg-white shadow-md font-semibold px-3 py-2 rounded-lg bottom-1/3 right-2 rotate-[8deg] transition-all duration-300 opacity-60">
            <p className="text-sm">😵 Wow</p>
          </div>
        </div>

        {/* Medium screens - balanced approach */}
        <div className="hidden md:block lg:hidden">
          <div className="absolute bg-white shadow-sm font-semibold px-2 py-2 rounded-lg top-8 left-6 rotate-[-8deg] transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 opacity-70">
            <p className="text-sm">🌶️ Too spicy</p>
          </div>
          <div className="absolute bg-white shadow-sm font-semibold px-2 py-2 rounded-lg top-16 right-6 rotate-[6deg] transition-all duration-300 hover:translate-x-1 hover:-translate-y-1 opacity-70">
            <p className="text-sm">Bad UX</p>
          </div>
          <div className="absolute bg-white shadow-sm font-semibold px-2 py-2 rounded-lg bottom-8 left-6 rotate-[10deg] transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 opacity-70">
            <p className="text-sm">Not worth it</p>
          </div>
          <div className="absolute bg-white shadow-sm font-semibold px-2 py-2 rounded-lg bottom-16 right-6 rotate-[-5deg] transition-all duration-300 hover:translate-x-1 hover:-translate-y-1 opacity-70">
            <p className="text-sm">😵 Help me</p>
          </div>
        </div>
      </div>
    </div>
  );
}