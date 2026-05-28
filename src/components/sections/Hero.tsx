import { ArrowRight, Sparkles } from "lucide-react";
import GithubMark from "@/components/icons/GithubMark";

const REPO_URL = "https://github.com/mykhail-druz/nextjs-ticketing-mvp-test";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border-light"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px]"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 0%, color-mix(in oklab, var(--color-accent) 18%, transparent) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center px-4 py-20 text-center md:px-6 md:py-28">
        <span
          className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-border-light bg-surface px-2.5 py-1 text-caption font-medium text-text-secondary"
          style={{ fontFamily: "var(--font-geist-mono)" }}
        >
          <Sparkles size={12} strokeWidth={1.5} aria-hidden="true" />
          Event Ticketing MVP · Preview v1.0
        </span>

        <h1
          className="text-balance text-heading-lg font-semibold leading-[1.05] text-text-primary md:text-[56px] lg:text-[72px]"
          style={{ letterSpacing: "-1.2px" }}
        >
          Hello World
        </h1>

        <h2
          className="mt-3 text-heading font-medium leading-tight text-text-secondary md:text-[28px] lg:text-heading-lg"
          style={{ letterSpacing: "-0.65px" }}
        >
          Event Ticketing MVP — Preview
        </h2>

        <p
          className="mx-auto mt-6 max-w-xl text-balance text-body leading-[1.6] text-text-muted md:text-[15px]"
          style={{ letterSpacing: "-0.2px" }}
        >
          A static preview of the upcoming ticketing platform: event discovery,
          seat selection, checkout, and admin — built on Next.js, TypeScript,
          and Tailwind CSS.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#events"
            className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-accent px-5 py-3 text-body font-medium text-accent-fg transition-colors hover:bg-accent-hover"
            style={{ boxShadow: "var(--shadow-subtle)" }}
          >
            Browse demo events
            <ArrowRight size={14} strokeWidth={1.75} aria-hidden="true" />
          </a>
          <a
            href={REPO_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-border-light bg-surface px-5 py-3 text-body font-medium text-text-primary transition-colors hover:bg-surface-muted"
          >
            <GithubMark size={14} />
            View on GitHub
          </a>
        </div>

        <dl
          className="mt-12 grid w-full max-w-2xl grid-cols-2 gap-3 text-left sm:grid-cols-4"
          style={{ fontFamily: "var(--font-geist-mono)" }}
        >
          {[
            { k: "Stack", v: "Next.js 16" },
            { k: "Language", v: "TypeScript" },
            { k: "Styling", v: "Tailwind v4" },
            { k: "Deploy", v: "Vercel" },
          ].map((item) => (
            <div
              key={item.k}
              className="rounded-lg border border-border-light bg-surface px-3 py-2.5"
            >
              <dt className="text-caption text-text-muted">{item.k}</dt>
              <dd className="mt-0.5 text-body font-medium text-text-primary">
                {item.v}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
