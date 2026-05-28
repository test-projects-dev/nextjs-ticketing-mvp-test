import { Ticket } from "lucide-react";
import GithubMark from "@/components/icons/GithubMark";

const REPO_URL = "https://github.com/mykhail-druz/nextjs-ticketing-mvp-test";
const LIVE_URL = "https://nextjs-ticketing-mvp-test.vercel.app";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-border-light bg-cloud-canvas/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 md:px-6 md:py-4">
        <a
          href="#top"
          className="inline-flex items-center gap-2 text-body font-medium text-text-primary"
        >
          <span
            aria-hidden="true"
            className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-accent text-accent-fg"
          >
            <Ticket size={14} strokeWidth={2} />
          </span>
          <span>Ticketing MVP</span>
        </a>

        <nav className="hidden items-center gap-6 text-body text-text-secondary md:flex">
          <a className="transition-colors hover:text-text-primary" href="#events">
            Events
          </a>
          <a className="transition-colors hover:text-text-primary" href="#seats">
            Seats
          </a>
          <a className="transition-colors hover:text-text-primary" href="#checkout">
            Checkout
          </a>
          <a className="transition-colors hover:text-text-primary" href="#admin">
            Admin
          </a>
          <a className="transition-colors hover:text-text-primary" href="#architecture">
            Architecture
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={LIVE_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="hidden items-center gap-1.5 rounded-full border border-border-light px-2.5 py-1 text-caption font-medium text-text-secondary transition-colors hover:text-text-primary sm:inline-flex"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-success" aria-hidden="true" />
            Live
          </a>
          <a
            href={REPO_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1.5 rounded-full border border-border-light px-3 py-1.5 text-body font-medium text-text-secondary transition-colors hover:text-text-primary"
          >
            <GithubMark size={14} />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </div>
      </div>
    </header>
  );
}
