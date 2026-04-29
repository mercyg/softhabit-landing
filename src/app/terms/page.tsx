import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use — SoftHabits",
  description: "Terms of Use for SoftHabits, an iOS habit-tracking app.",
};

export default function TermsOfUse() {
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
          Terms of Use
        </h1>

        <div className="prose prose-lg text-charcoal/80 leading-relaxed space-y-6">
          <p className="text-charcoal/60 text-sm">
            Last updated: [Date]
          </p>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-charcoal">
              Agreement to Terms
            </h2>
            <p>
              By accessing or using SoftHabits, you agree to be bound by these
              Terms of Use. If you do not agree to these terms, please do not
              use our application.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-charcoal">
              Use of the Application
            </h2>
            <p>
              [Describe acceptable use of the application]
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-charcoal">
              User Accounts
            </h2>
            <p>
              [Describe account requirements and responsibilities]
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-charcoal">
              Intellectual Property
            </h2>
            <p>
              [Describe intellectual property rights]
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-charcoal">
              Limitation of Liability
            </h2>
            <p>
              [Describe limitations of liability]
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-charcoal">
              Contact Us
            </h2>
            <p>
              If you have any questions about these Terms of Use, please contact us at{" "}
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
