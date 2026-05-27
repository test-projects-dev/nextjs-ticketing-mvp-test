import { ArrowRight, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col">
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 md:px-6 md:py-5">
        <a
          href="#"
          className="inline-flex items-center gap-2 text-body font-medium text-text-primary"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M9 1.5 17 16H1L9 1.5Z" />
          </svg>
          <span>Next.js MVP</span>
        </a>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-1.5 text-body font-medium text-text-secondary transition-colors hover:text-text-primary"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 .5C5.73.5.66 5.57.66 11.84c0 5.02 3.25 9.27 7.76 10.77.57.1.78-.25.78-.55v-2.13c-3.16.69-3.82-1.36-3.82-1.36-.52-1.31-1.27-1.66-1.27-1.66-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.72-1.53-2.52-.29-5.18-1.26-5.18-5.62 0-1.24.44-2.25 1.16-3.05-.12-.29-.5-1.45.11-3.02 0 0 .96-.31 3.14 1.16.91-.25 1.89-.38 2.86-.39.97.01 1.95.14 2.86.39 2.18-1.47 3.14-1.16 3.14-1.16.61 1.57.23 2.73.11 3.02.72.8 1.16 1.81 1.16 3.05 0 4.37-2.67 5.33-5.21 5.61.41.36.78 1.06.78 2.14v3.17c0 .31.21.66.79.55 4.5-1.5 7.75-5.75 7.75-10.77C23.34 5.57 18.27.5 12 .5Z" />
          </svg>
          <span>GitHub</span>
        </a>
      </header>

      <main className="flex flex-1 items-center justify-center px-4">
        <div className="flex flex-col items-center text-center">
          <span
            className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-border-light px-2.5 py-1 text-caption font-medium text-text-secondary"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            <Sparkles size={12} strokeWidth={1.5} aria-hidden="true" />
            v1.0.0
          </span>

          <h1
            className="text-balance text-heading-lg font-semibold leading-[1.17] text-text-primary md:text-[40px] lg:text-display-lg"
            style={{ letterSpacing: "-0.72px" }}
          >
            Hello World
          </h1>

          <h2
            className="mt-2 text-heading font-medium leading-tight text-text-secondary md:text-[28px] lg:text-heading-lg"
            style={{ letterSpacing: "-0.65px" }}
          >
            Next.js MVP Starter
          </h2>

          <p
            className="mx-auto mt-6 max-w-md text-body leading-[1.56] text-text-muted"
            style={{ letterSpacing: "-0.32px" }}
          >
            Built with Next.js, TypeScript, and Tailwind CSS.
          </p>

          <a
            href="#"
            className="mt-10 inline-flex cursor-pointer items-center gap-2 rounded-full bg-button-bg px-5 py-3 text-body font-medium text-button-fg transition-[background-color,opacity] hover:bg-button-bg-hover hover:opacity-90"
            style={{ boxShadow: "var(--shadow-subtle)" }}
          >
            Get started
            <ArrowRight size={14} strokeWidth={1.5} aria-hidden="true" />
          </a>
        </div>
      </main>

      <footer
        className="px-4 pt-12 pb-8 text-center text-caption text-text-muted md:pb-12"
        style={{ fontFamily: "var(--font-geist-mono)" }}
      >
        Next.js · TypeScript · Tailwind · Vercel
      </footer>
    </div>
  );
}
