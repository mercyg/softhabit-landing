import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 py-16 lg:py-24">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
          {/* Left content */}
          <div className="flex-1 mb-12 lg:mb-0">
            {/* Hi greeting */}
            <p className="font-serif italic text-2xl text-charcoal/70 mb-4">
              Hi.
            </p>

            {/* Main heading */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal leading-tight mb-6">
              Welcome to SoftHabits.
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-charcoal/70 leading-relaxed mb-10 max-w-lg">
              A calmer way to build habits, one gentle check-in at a time.
            </p>

            {/* Launch pill */}
            <span className="inline-block px-5 py-2.5 bg-sage text-white text-sm font-medium rounded-full">
              Launching soon on iOS
            </span>
          </div>

          {/* Right: Phone mockup */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative w-64 sm:w-72 lg:w-80">
              <Image
                src="/screenshots/screen-4.png"
                alt="SoftHabits app welcome screen"
                width={320}
                height={693}
                className="rounded-[2.5rem] shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
