import FadeInSection from "./FadeInSection";

export default function FinalCTA() {
  return (
    <section className="px-6 py-24 lg:py-32">
      <div className="max-w-2xl mx-auto text-center">
        <FadeInSection>
          <p className="font-serif italic text-3xl sm:text-4xl lg:text-5xl text-charcoal leading-relaxed mb-12">
            soft habits.
            <br />
            lasting change.
          </p>
        </FadeInSection>

        <FadeInSection>
          <span className="inline-block px-5 py-2.5 bg-sage text-white text-sm font-medium rounded-full">
            Launching soon on iOS
          </span>
        </FadeInSection>
      </div>
    </section>
  );
}
