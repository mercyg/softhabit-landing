import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — SoftHabits",
  description: "Privacy Policy for SoftHabits, an iOS habit-tracking app.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-block mb-12 text-sage hover:text-sage-dark transition-colors"
        >
          ← Back to home
        </Link>

        <h1 className="font-serif text-4xl text-charcoal mb-8">
          Privacy Policy
        </h1>

        <div className="prose prose-lg text-charcoal/80 leading-relaxed space-y-6">
          <p className="text-charcoal/60 text-sm">
            Last updated: [Date]
          </p>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-charcoal">
              Introduction
            </h2>
            <p>
              SoftHabits (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to
              protecting your privacy. This Privacy Policy explains how we collect, use,
              and safeguard your information when you use our mobile application.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-charcoal">
              Information We Collect
            </h2>
            <p>
              [Describe the types of information collected, such as personal data,
              usage data, device information, etc.]
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-charcoal">
              How We Use Your Information
            </h2>
            <p>
              [Describe how the collected information is used]
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-charcoal">
              Data Security
            </h2>
            <p>
              [Describe security measures in place]
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-charcoal">
              Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <a
                href="mailto:hello@studiorehoboth.io"
                className="text-sage hover:text-sage-dark underline"
              >
                hello@studiorehoboth.io
              </a>
              .
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-sage/10">
          <Link
            href="/"
            className="text-sage hover:text-sage-dark transition-colors"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
