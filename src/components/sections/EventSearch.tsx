import { Calendar, MapPin, Search } from "lucide-react";

const CATEGORIES = ["All", "Concerts", "Sports", "Theatre", "Comedy", "Festivals"];

export default function EventSearch() {
  return (
    <section
      id="events"
      className="mx-auto w-full max-w-7xl scroll-mt-20 px-4 pt-16 md:px-6 md:pt-24"
    >
      <SectionEyebrow>01 · Discover</SectionEyebrow>
      <SectionHeading>Find an event</SectionHeading>
      <SectionLead>
        Search by keyword, city, or date. Filter by category. Powered by an
        upstream supplier API in production.
      </SectionLead>

      <div
        role="search"
        aria-label="Event search"
        className="mt-8 grid grid-cols-1 gap-2 rounded-2xl border border-border-light bg-surface p-2 md:grid-cols-[1.4fr_1fr_1fr_auto]"
        style={{ boxShadow: "var(--shadow-subtle)" }}
      >
        <Field icon={<Search size={14} strokeWidth={1.75} aria-hidden="true" />}>
          <input
            type="text"
            placeholder="Search artists, teams, shows…"
            defaultValue="Coldplay"
            className="w-full bg-transparent text-body text-text-primary placeholder:text-text-muted focus:outline-none"
          />
        </Field>
        <Field icon={<MapPin size={14} strokeWidth={1.75} aria-hidden="true" />}>
          <select
            defaultValue="London"
            className="w-full appearance-none bg-transparent text-body text-text-primary focus:outline-none"
          >
            <option>Any city</option>
            <option>London</option>
            <option>Manchester</option>
            <option>Berlin</option>
            <option>Amsterdam</option>
          </select>
        </Field>
        <Field icon={<Calendar size={14} strokeWidth={1.75} aria-hidden="true" />}>
          <select
            defaultValue="Next 30 days"
            className="w-full appearance-none bg-transparent text-body text-text-primary focus:outline-none"
          >
            <option>Any date</option>
            <option>This week</option>
            <option>Next 30 days</option>
            <option>Next 3 months</option>
          </select>
        </Field>
        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-body font-medium text-accent-fg transition-colors hover:bg-accent-hover"
        >
          <Search size={14} strokeWidth={1.75} aria-hidden="true" />
          Search
        </button>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {CATEGORIES.map((c, i) => (
          <span
            key={c}
            className={
              i === 1
                ? "rounded-full bg-text-primary px-3 py-1 text-caption font-medium text-cloud-canvas"
                : "rounded-full border border-border-light bg-surface px-3 py-1 text-caption font-medium text-text-secondary"
            }
          >
            {c}
          </span>
        ))}
      </div>
    </section>
  );
}

function Field({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <label className="flex items-center gap-2 rounded-xl border border-border-light bg-cloud-canvas px-3 py-2.5 transition-colors focus-within:border-accent">
      <span className="text-text-muted" aria-hidden="true">
        {icon}
      </span>
      {children}
    </label>
  );
}

export function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-caption font-medium uppercase tracking-[0.12em] text-accent"
      style={{ fontFamily: "var(--font-geist-mono)" }}
    >
      {children}
    </p>
  );
}

export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="mt-2 text-[28px] font-semibold leading-tight text-text-primary md:text-[36px]"
      style={{ letterSpacing: "-0.6px" }}
    >
      {children}
    </h2>
  );
}

export function SectionLead({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-3 max-w-2xl text-body leading-[1.6] text-text-muted">
      {children}
    </p>
  );
}
