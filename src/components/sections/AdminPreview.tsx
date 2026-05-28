import { CalendarDays, LayoutDashboard, Ticket, TrendingUp, Users } from "lucide-react";
import {
  SectionEyebrow,
  SectionHeading,
  SectionLead,
} from "./EventSearch";

const STATS = [
  { label: "Events live", value: "24", delta: "+3 this wk", Icon: CalendarDays },
  { label: "Tickets sold", value: "12,840", delta: "+8.2%", Icon: Ticket },
  { label: "Revenue", value: "£412k", delta: "+11.4%", Icon: TrendingUp },
  { label: "Active users", value: "5,217", delta: "+204", Icon: Users },
];

const ORDERS = [
  { id: "ORD-10421", event: "Coldplay — Wembley", qty: 3, total: "£210.50", status: "Paid" },
  { id: "ORD-10420", event: "Arsenal vs Man City", qty: 2, total: "£98.00", status: "Paid" },
  { id: "ORD-10419", event: "Hamilton — West End", qty: 4, total: "£174.00", status: "Refund" },
  { id: "ORD-10418", event: "Coldplay — Wembley", qty: 1, total: "£74.50", status: "Paid" },
  { id: "ORD-10417", event: "Comedy Night · Soho", qty: 2, total: "£42.00", status: "Pending" },
];

export default function AdminPreview() {
  return (
    <section
      id="admin"
      className="border-t border-border-light bg-surface-muted/40"
    >
      <div className="mx-auto w-full max-w-7xl scroll-mt-20 px-4 py-20 md:px-6 md:py-28">
        <SectionEyebrow>04 · Admin</SectionEyebrow>
        <SectionHeading>Admin · Overview</SectionHeading>
        <SectionLead>
          Lightweight admin for operators: monitor sales, manage events, and
          review recent orders.
        </SectionLead>

        <div
          className="mt-10 overflow-hidden rounded-2xl border border-border-light bg-surface"
          style={{ boxShadow: "var(--shadow-subtle)" }}
        >
          <div className="flex items-center justify-between border-b border-border-light px-5 py-4 md:px-8">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-surface-muted text-text-primary">
                <LayoutDashboard size={14} strokeWidth={1.75} aria-hidden="true" />
              </span>
              <span className="text-body font-semibold text-text-primary">
                Dashboard
              </span>
              <span
                className="ml-2 hidden text-caption text-text-muted sm:inline"
                style={{ fontFamily: "var(--font-geist-mono)" }}
              >
                /admin
              </span>
            </div>
            <span
              className="rounded-full bg-success/10 px-2.5 py-1 text-caption font-medium text-success"
              style={{ fontFamily: "var(--font-geist-mono)" }}
            >
              All systems normal
            </span>
          </div>

          <div className="grid grid-cols-2 gap-px bg-border-light lg:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="bg-surface p-5">
                <div className="flex items-center justify-between">
                  <p
                    className="text-caption uppercase tracking-[0.12em] text-text-muted"
                    style={{ fontFamily: "var(--font-geist-mono)" }}
                  >
                    {s.label}
                  </p>
                  <s.Icon size={14} strokeWidth={1.75} aria-hidden="true" className="text-text-muted" />
                </div>
                <p className="mt-2 text-[24px] font-semibold leading-none text-text-primary md:text-[28px]">
                  {s.value}
                </p>
                <p className="mt-1 text-caption text-success">{s.delta}</p>
              </div>
            ))}
          </div>

          <div className="border-t border-border-light px-5 py-5 md:px-8 md:py-6">
            <div className="flex items-center justify-between">
              <h3 className="text-body font-semibold text-text-primary">
                Recent orders
              </h3>
              <a
                href="#"
                className="text-caption font-medium text-accent transition-opacity hover:opacity-80"
              >
                View all →
              </a>
            </div>

            <div className="mt-3 -mx-5 overflow-x-auto md:-mx-8">
              <table className="w-full min-w-[560px] border-collapse text-body">
                <thead>
                  <tr
                    className="text-caption uppercase tracking-[0.12em] text-text-muted"
                    style={{ fontFamily: "var(--font-geist-mono)" }}
                  >
                    <th className="px-5 py-2 text-left font-medium md:px-8">Order</th>
                    <th className="px-5 py-2 text-left font-medium">Event</th>
                    <th className="px-5 py-2 text-right font-medium">Qty</th>
                    <th className="px-5 py-2 text-right font-medium">Total</th>
                    <th className="px-5 py-2 text-right font-medium md:px-8">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {ORDERS.map((o) => (
                    <tr key={o.id} className="border-t border-border-light">
                      <td
                        className="px-5 py-3 text-text-secondary md:px-8"
                        style={{ fontFamily: "var(--font-geist-mono)" }}
                      >
                        {o.id}
                      </td>
                      <td className="px-5 py-3 text-text-primary">{o.event}</td>
                      <td className="px-5 py-3 text-right text-text-secondary">
                        {o.qty}
                      </td>
                      <td className="px-5 py-3 text-right font-medium text-text-primary">
                        {o.total}
                      </td>
                      <td className="px-5 py-3 text-right md:px-8">
                        <StatusPill status={o.status} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatusPill({ status }: { status: string }) {
  const cls =
    status === "Paid"
      ? "bg-success/10 text-success"
      : status === "Refund"
        ? "bg-danger/10 text-danger"
        : "bg-text-muted/15 text-text-secondary";
  return (
    <span
      className={
        "inline-flex rounded-full px-2.5 py-0.5 text-caption font-medium " +
        cls
      }
      style={{ fontFamily: "var(--font-geist-mono)" }}
    >
      {status}
    </span>
  );
}
