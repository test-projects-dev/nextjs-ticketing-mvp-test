import GithubMark from "@/components/icons/GithubMark";

const REPO_URL = "https://github.com/mykhail-druz/nextjs-ticketing-mvp-test";
const LIVE_URL = "https://nextjs-ticketing-mvp-test.vercel.app";

export default function Footer() {
  return (
    <footer className="border-t border-border-light">
      <div
        className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row md:px-6"
        style={{ fontFamily: "var(--font-geist-mono)" }}
      >
        <p className="text-caption text-text-muted">
          Next.js · TypeScript · Tailwind · Vercel
        </p>

        <div className="flex items-center gap-4 text-caption text-text-muted">
          <a
            href={LIVE_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-text-primary"
          >
            <span
              className="inline-block h-1.5 w-1.5 rounded-full bg-success"
              aria-hidden="true"
            />
            Live deployment
          </a>
          <a
            href={REPO_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-text-primary"
          >
            <GithubMark size={12} />
            Source code
          </a>
        </div>
      </div>
    </footer>
  );
}
