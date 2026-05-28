"use client";

import { useState } from "react";
import { ArrowRight, MapPin } from "lucide-react";
import {
  SectionEyebrow,
  SectionHeading,
  SectionLead,
} from "./EventSearch";

const ROWS = ["A", "B", "C", "D", "E", "F"];
const COLS = 10;

const INITIAL_SELECTED = ["C5", "C6", "C7"];
const SOLD = new Set([
  "A2", "A3", "A4", "A8",
  "B1", "B7",
  "D2", "D9", "D10",
  "E5", "E6",
  "F1", "F2", "F9",
]);

const SEAT_PRICE = 68;
const FEE = 6.5;

export default function SeatSelection() {
  const [selected, setSelected] = useState<string[]>(INITIAL_SELECTED);

  const toggle = (id: string) => {
    if (SOLD.has(id)) return;
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const subtotal = selected.length * SEAT_PRICE;
  const total = selected.length === 0 ? 0 : subtotal + FEE;
  const sortedSelected = [...selected].sort();

  return (
    <section
      id="seats"
      className="border-t border-border-light bg-surface-muted/40"
    >
      <div className="mx-auto w-full max-w-7xl scroll-mt-20 px-4 py-20 md:px-6 md:py-28">
        <SectionEyebrow>02 · Seats</SectionEyebrow>
        <SectionHeading>Pick your seats</SectionHeading>
        <SectionLead>
          Interactive seat map preview. Production will sync availability with
          the supplier API in real time.
        </SectionLead>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[1.5fr_1fr]">
          <div
            className="rounded-2xl border border-border-light bg-surface p-5 md:p-8"
            style={{ boxShadow: "var(--shadow-subtle)" }}
          >
            <div className="mb-8 flex flex-col items-center gap-2">
              <p
                className="text-caption uppercase tracking-[0.18em] text-text-muted"
                style={{ fontFamily: "var(--font-geist-mono)" }}
              >
                Stage
              </p>
              <div className="h-1.5 w-3/4 rounded-full bg-text-primary/15" />
            </div>

            <div className="space-y-2">
              {ROWS.map((row) => (
                <div
                  key={row}
                  className="flex items-center justify-center gap-1.5 md:gap-2"
                >
                  <span
                    className="w-4 text-caption text-text-muted"
                    style={{ fontFamily: "var(--font-geist-mono)" }}
                  >
                    {row}
                  </span>
                  {Array.from({ length: COLS }, (_, i) => {
                    const num = i + 1;
                    const id = `${row}${num}`;
                    const isSold = SOLD.has(id);
                    const isSelected = selected.includes(id);
                    return (
                      <button
                        key={id}
                        type="button"
                        onClick={() => toggle(id)}
                        disabled={isSold}
                        aria-pressed={isSelected}
                        aria-label={`Seat ${id} ${isSold ? "sold" : isSelected ? "selected" : "available"}`}
                        title={`Seat ${id}${isSold ? " — sold" : ""}`}
                        className={
                          "relative h-6 w-6 rounded-md transition-transform md:h-7 md:w-7 " +
                          (isSelected
                            ? "bg-accent ring-1 ring-accent/70 hover:scale-110"
                            : isSold
                              ? "bg-text-primary/25 cursor-not-allowed after:absolute after:inset-0 after:m-auto after:h-3 after:w-px after:rotate-45 after:bg-text-primary/40"
                              : "bg-surface-muted hover:bg-accent-soft border border-border-light hover:scale-110")
                        }
                      />
                    );
                  })}
                </div>
              ))}
            </div>

            <ul
              className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-caption text-text-secondary"
              style={{ fontFamily: "var(--font-geist-mono)" }}
            >
              <li className="inline-flex items-center gap-2">
                <span className="h-3 w-3 rounded-sm border border-border-light bg-surface-muted" />
                Available
              </li>
              <li className="inline-flex items-center gap-2">
                <span className="h-3 w-3 rounded-sm bg-accent" />
                Selected
              </li>
              <li className="inline-flex items-center gap-2">
                <span className="relative h-3 w-3 rounded-sm bg-text-primary/25 after:absolute after:inset-0 after:m-auto after:h-2 after:w-px after:rotate-45 after:bg-text-primary/50" />
                Sold
              </li>
            </ul>
          </div>

          <aside
            className="flex flex-col rounded-2xl border border-border-light bg-surface p-6"
            style={{ boxShadow: "var(--shadow-subtle)" }}
          >
            <div className="flex items-start justify-between">
              <div>
                <p
                  className="text-caption uppercase tracking-[0.12em] text-text-muted"
                  style={{ fontFamily: "var(--font-geist-mono)" }}
                >
                  Order summary
                </p>
                <h3 className="mt-1 text-body font-semibold text-text-primary md:text-[16px]">
                  Coldplay — Music of the Spheres
                </h3>
                <p className="mt-1 inline-flex items-center gap-1.5 text-caption text-text-secondary">
                  <MapPin size={12} strokeWidth={1.75} aria-hidden="true" />
                  Wembley Stadium · Sat 14 Jun
                </p>
              </div>
            </div>

            <div className="mt-6 border-t border-border-light pt-4">
              {sortedSelected.length > 4 && (
                <p
                  className="mb-2 flex items-center justify-between text-caption text-text-muted"
                  style={{ fontFamily: "var(--font-geist-mono)" }}
                >
                  <span>{sortedSelected.length} seats</span>
                  <span>scroll ↓</span>
                </p>
              )}
              <ul className="min-h-[80px] max-h-44 space-y-2 overflow-y-auto pr-1">
                {sortedSelected.length === 0 ? (
                  <li className="text-caption text-text-muted">
                    No seats selected. Tap a seat on the map to add it.
                  </li>
                ) : (
                  sortedSelected.map((id) => (
                    <li
                      key={id}
                      className="flex items-center justify-between text-body"
                    >
                      <span className="text-text-secondary">
                        Row {id[0]} · Seat {id.slice(1)}
                      </span>
                      <span className="font-medium text-text-primary">
                        £{SEAT_PRICE.toFixed(2)}
                      </span>
                    </li>
                  ))
                )}
              </ul>
            </div>

            <dl className="mt-6 space-y-1.5 border-t border-border-light pt-4 text-body">
              <div className="flex justify-between text-text-secondary">
                <dt>Subtotal</dt>
                <dd>£{subtotal.toFixed(2)}</dd>
              </div>
              <div className="flex justify-between text-text-secondary">
                <dt>Booking fee</dt>
                <dd>£{(selected.length === 0 ? 0 : FEE).toFixed(2)}</dd>
              </div>
              <div className="flex justify-between pt-2 text-body font-semibold text-text-primary">
                <dt>Total</dt>
                <dd>£{total.toFixed(2)}</dd>
              </div>
            </dl>

            <a
              href="#checkout"
              aria-disabled={selected.length === 0}
              className={
                "mt-6 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-body font-medium transition-colors " +
                (selected.length === 0
                  ? "pointer-events-none bg-border-light text-text-muted"
                  : "bg-accent text-accent-fg hover:bg-accent-hover")
              }
              style={
                selected.length === 0
                  ? undefined
                  : { boxShadow: "var(--shadow-subtle)" }
              }
            >
              Continue to checkout
              <ArrowRight size={14} strokeWidth={1.75} aria-hidden="true" />
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
