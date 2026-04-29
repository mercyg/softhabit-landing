import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-6 py-12 lg:py-16 border-t border-sage/10">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Left: Brand info */}
          <div className="space-y-3">
            <p className="text-charcoal/70">
              A{" "}
              <a
                href="https://studiorehoboth.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sage hover:text-sage-dark transition-colors underline underline-offset-2"
              >
                Studio Rehoboth
              </a>{" "}
              product
            </p>
            <p className="text-sm text-charcoal/50">
              © 2026 Studio Rehoboth LLC
            </p>
          </div>

          {/* Middle: Links */}
          <div className="flex flex-wrap gap-6 text-sm">
            <Link
              href="/privacy"
              className="text-charcoal/60 hover:text-sage transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-charcoal/60 hover:text-sage transition-colors"
            >
              Terms of Use
            </Link>
            <a
              href="mailto:hello@studiorehoboth.io"
              className="text-charcoal/60 hover:text-sage transition-colors"
            >
              hello@studiorehoboth.io
            </a>
          </div>

          {/* Right: Social links */}
          <div className="flex gap-4">
            <a
              href="#"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center text-sage hover:bg-sage hover:text-white transition-colors"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="TikTok"
              className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center text-sage hover:bg-sage hover:text-white transition-colors"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
