import Image from "next/image";
import FadeInSection from "./FadeInSection";

const features = [
  {
    title: "Swipe to track",
    description:
      "Each day, you'll see cards like this. Swipe right for yes, left for no — it's that simple.",
    image: "/screenshots/screen-3.png",
  },
  {
    title: "Gentle daily check-ins",
    description:
      "No streaks or pressure. Just a simple, calming moment to reflect on your progress.",
    image: "/screenshots/screen-5.png",
  },
  {
    title: "Discover your patterns",
    description:
      "See how far you've come with thoughtful visualizations that celebrate small wins.",
    image: "/screenshots/screen-1.png",
  },
];

export default function Features() {
  return (
    <section id="features" className="px-6 py-24 lg:py-32">
      <div className="max-w-6xl mx-auto">
        <FadeInSection>
          <h2 className="font-serif text-3xl sm:text-4xl text-center text-charcoal mb-16 lg:mb-20">
            Built for gentle progress
          </h2>
        </FadeInSection>

        <div className="grid md:grid-cols-3 gap-10 lg:gap-12">
          {features.map((feature, index) => (
            <FadeInSection key={index}>
              <div className="text-center">
                <div className="w-44 mx-auto mb-6">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={176}
                    height={381}
                    className="rounded-[1.5rem] shadow-lg"
                  />
                </div>

                <h3 className="font-serif text-xl text-charcoal mb-3">
                  {feature.title}
                </h3>
                <p className="text-charcoal/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
