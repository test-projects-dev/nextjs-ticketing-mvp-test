import { Check, CreditCard, Lock, ShieldCheck } from "lucide-react";
import {
  SectionEyebrow,
  SectionHeading,
  SectionLead,
} from "./EventSearch";

const STEPS = [
  { label: "Cart", done: true },
  { label: "Payment", done: false, active: true },
  { label: "Confirmation", done: false },
];

export default function CheckoutFlow() {
  return (
    <section
      id="checkout"
      className="mx-auto w-full max-w-7xl scroll-mt-20 px-4 py-20 md:px-6 md:py-28"
    >
      <SectionEyebrow>03 · Checkout</SectionEyebrow>
      <SectionHeading>Secure checkout</SectionHeading>
      <SectionLead>
        Three-step flow with cart, payment, and confirmation. Payments are
        processed via Stripe in production.
      </SectionLead>

      <ol className="mt-10 grid grid-cols-3 gap-2 md:gap-4">
        {STEPS.map((step, i) => (
          <li key={step.label} className="flex items-center gap-3">
            <span
              className={
                "inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-caption font-semibold " +
                (step.done
                  ? "bg-success text-white"
                  : step.active
                    ? "bg-accent text-accent-fg"
                    : "border border-border-light bg-surface text-text-muted")
              }
              style={{ fontFamily: "var(--font-geist-mono)" }}
            >
              {step.done ? (
                <Check size={14} strokeWidth={2.5} aria-hidden="true" />
              ) : (
                i + 1
              )}
            </span>
            <div className="min-w-0">
              <p
                className="text-caption uppercase tracking-[0.12em] text-text-muted"
                style={{ fontFamily: "var(--font-geist-mono)" }}
              >
                Step {i + 1}
              </p>
              <p
                className={
                  "truncate text-body font-medium " +
                  (step.active || step.done
                    ? "text-text-primary"
                    : "text-text-muted")
                }
              >
                {step.label}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div
          className="rounded-2xl border border-border-light bg-surface p-6 md:p-8"
          style={{ boxShadow: "var(--shadow-subtle)" }}
        >
          <div className="flex items-center gap-2">
            <CreditCard size={16} strokeWidth={1.75} aria-hidden="true" className="text-text-primary" />
            <h3 className="text-body font-semibold text-text-primary md:text-[16px]">
              Payment details
            </h3>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FormField label="Cardholder name" className="sm:col-span-2">
              <input
                readOnly
                value="Jane Hopper"
                className="w-full bg-transparent text-body text-text-primary focus:outline-none"
              />
            </FormField>
            <FormField label="Card number" className="sm:col-span-2">
              <input
                readOnly
                value="4242 4242 4242 4242"
                className="w-full bg-transparent text-body text-text-primary focus:outline-none"
                style={{ fontFamily: "var(--font-geist-mono)" }}
              />
            </FormField>
            <FormField label="Expiry">
              <input
                readOnly
                value="08 / 28"
                className="w-full bg-transparent text-body text-text-primary focus:outline-none"
                style={{ fontFamily: "var(--font-geist-mono)" }}
              />
            </FormField>
            <FormField label="CVC">
              <input
                readOnly
                value="•••"
                className="w-full bg-transparent text-body text-text-primary focus:outline-none"
                style={{ fontFamily: "var(--font-geist-mono)" }}
              />
            </FormField>
          </div>

          <button
            type="button"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-body font-medium text-accent-fg transition-colors hover:bg-accent-hover sm:w-auto"
            style={{ boxShadow: "var(--shadow-subtle)" }}
          >
            <Lock size={14} strokeWidth={1.75} aria-hidden="true" />
            Pay £210.50
          </button>

          <p
            className="mt-4 text-caption text-text-muted"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            Demo only — no real payment is processed.
          </p>
        </div>

        <aside
          className="flex flex-col rounded-2xl border border-border-light bg-surface p-6"
          style={{ boxShadow: "var(--shadow-subtle)" }}
        >
          <h3 className="text-body font-semibold text-text-primary md:text-[16px]">
            Your order
          </h3>
          <ul className="mt-4 space-y-1.5 border-t border-border-light pt-4 text-body text-text-secondary">
            <li className="flex justify-between">
              <span>3 × Standing C</span>
              <span className="font-medium text-text-primary">£204.00</span>
            </li>
            <li className="flex justify-between">
              <span>Booking fee</span>
              <span>£6.50</span>
            </li>
            <li className="flex justify-between border-t border-border-light pt-3 font-semibold text-text-primary">
              <span>Total</span>
              <span>£210.50</span>
            </li>
          </ul>
          <div className="mt-5 flex items-start gap-2 rounded-lg bg-surface-muted p-3 text-caption text-text-secondary">
            <ShieldCheck
              size={14}
              strokeWidth={1.75}
              aria-hidden="true"
              className="mt-[1px] shrink-0 text-success"
            />
            <p>
              Encrypted end-to-end. Cards processed by Stripe. We never store
              full card numbers.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}

function FormField({
  label,
  className,
  children,
}: {
  label: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={"block " + (className ?? "")}>
      <span
        className="block text-caption uppercase tracking-[0.12em] text-text-muted"
        style={{ fontFamily: "var(--font-geist-mono)" }}
      >
        {label}
      </span>
      <div className="mt-1.5 rounded-xl border border-border-light bg-cloud-canvas px-3 py-2.5">
        {children}
      </div>
    </label>
  );
}
