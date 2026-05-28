import {
  Database,
  LayoutDashboard,
  Monitor,
  ServerCog,
  ShieldCheck,
  Wallet,
} from "lucide-react";
import {
  SectionEyebrow,
  SectionHeading,
  SectionLead,
} from "./EventSearch";

const NODES = [
  {
    label: "Frontend",
    sub: "Next.js · React",
    Icon: Monitor,
    accent: true,
  },
  {
    label: "API Routes",
    sub: "Next.js · Edge / Node",
    Icon: ServerCog,
    accent: true,
  },
  {
    label: "Supplier API",
    sub: "Inventory · availability",
    Icon: Database,
  },
  {
    label: "Payments",
    sub: "Stripe · webhooks",
    Icon: Wallet,
  },
  {
    label: "Admin",
    sub: "Ops · reporting",
    Icon: LayoutDashboard,
  },
];

export default function Architecture() {
  return (
    <section
      id="architecture"
      className="mx-auto w-full max-w-7xl scroll-mt-20 px-4 py-20 md:px-6 md:py-28"
    >
      <SectionEyebrow>05 · Architecture</SectionEyebrow>
      <SectionHeading>MVP architecture</SectionHeading>
      <SectionLead>
        Thin Next.js frontend talks to internal API routes that orchestrate the
        supplier inventory, the payments provider, and the admin surface.
      </SectionLead>

      <div
        className="relative mt-10 rounded-2xl border border-border-light bg-surface p-6 md:p-10"
        style={{ boxShadow: "var(--shadow-subtle)" }}
      >
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {NODES.map((n) => (
            <li
              key={n.label}
              className={
                "flex items-center gap-3 rounded-xl border p-4 " +
                (n.accent
                  ? "border-accent/40 bg-accent-soft"
                  : "border-border-light bg-cloud-canvas")
              }
            >
              <span
                className={
                  "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg " +
                  (n.accent
                    ? "bg-accent text-accent-fg"
                    : "bg-surface text-text-primary border border-border-light")
                }
              >
                <n.Icon size={16} strokeWidth={1.75} aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="truncate text-body font-semibold text-text-primary">
                  {n.label}
                </p>
                <p
                  className="truncate text-caption text-text-secondary"
                  style={{ fontFamily: "var(--font-geist-mono)" }}
                >
                  {n.sub}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <p
          className="mt-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-caption text-text-muted"
          style={{ fontFamily: "var(--font-geist-mono)" }}
        >
          <span>Frontend</span>
          <Arrow />
          <span>API Routes</span>
          <Arrow />
          <span>Supplier · Payments · Admin</span>
        </p>

        <div className="mt-8 grid grid-cols-1 gap-3 border-t border-border-light pt-6 sm:grid-cols-3">
          <Pill icon={<ShieldCheck size={12} strokeWidth={1.75} aria-hidden="true" />}>
            Auth · sessions · roles
          </Pill>
          <Pill icon={<Database size={12} strokeWidth={1.75} aria-hidden="true" />}>
            Postgres · Redis cache
          </Pill>
          <Pill icon={<ServerCog size={12} strokeWidth={1.75} aria-hidden="true" />}>
            Background workers · webhooks
          </Pill>
        </div>
      </div>
    </section>
  );
}

function Arrow() {
  return (
    <span aria-hidden="true" className="text-text-muted">
      →
    </span>
  );
}

function Pill({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <p className="inline-flex items-center gap-2 rounded-lg bg-surface-muted px-3 py-2 text-caption text-text-secondary">
      <span className="text-text-muted">{icon}</span>
      {children}
    </p>
  );
}
