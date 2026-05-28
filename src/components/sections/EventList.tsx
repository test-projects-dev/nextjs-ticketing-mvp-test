import { ArrowRight, Calendar, MapPin, Music, Theater, Trophy } from "lucide-react";

type EventItem = {
  title: string;
  venue: string;
  city: string;
  date: string;
  priceFrom: string;
  tag: string;
  Icon: typeof Music;
  gradient: string;
};

const EVENTS: EventItem[] = [
  {
    title: "Coldplay — Music of the Spheres",
    venue: "Wembley Stadium",
    city: "London",
    date: "Sat · 14 Jun · 19:30",
    priceFrom: "£68",
    tag: "Concert",
    Icon: Music,
    gradient:
      "linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)",
  },
  {
    title: "Arsenal vs. Manchester City",
    venue: "Emirates Stadium",
    city: "London",
    date: "Sun · 22 Jun · 16:00",
    priceFrom: "£45",
    tag: "Sports",
    Icon: Trophy,
    gradient:
      "linear-gradient(135deg, #0ea5e9 0%, #1e40af 60%, #0f172a 100%)",
  },
  {
    title: "Hamilton — West End",
    venue: "Victoria Palace Theatre",
    city: "London",
    date: "Fri · 28 Jun · 20:00",
    priceFrom: "£39",
    tag: "Theatre",
    Icon: Theater,
    gradient:
      "linear-gradient(135deg, #f59e0b 0%, #ef4444 60%, #7c2d12 100%)",
  },
];

export default function EventList() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 pt-10 pb-20 md:px-6 md:pb-28">
      <div className="flex items-end justify-between gap-4">
        <p className="text-body text-text-secondary">
          <span className="font-medium text-text-primary">3 events</span>{" "}
          matched your search
        </p>
        <a
          href="#seats"
          className="hidden text-body font-medium text-accent transition-opacity hover:opacity-80 sm:inline-flex"
        >
          View all →
        </a>
      </div>

      <ul className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {EVENTS.map((e) => (
          <EventCard key={e.title} event={e} />
        ))}
      </ul>
    </section>
  );
}

function EventCard({ event }: { event: EventItem }) {
  const { Icon } = event;
  return (
    <li
      className="group flex flex-col overflow-hidden rounded-2xl border border-border-light bg-surface transition-shadow hover:shadow-lg"
      style={{ boxShadow: "var(--shadow-subtle)" }}
    >
      <div
        className="relative flex aspect-[16/10] items-end justify-between p-4 text-white"
        style={{ background: event.gradient }}
      >
        <span
          className="inline-flex items-center gap-1.5 rounded-full bg-black/30 px-2.5 py-1 text-caption font-medium backdrop-blur"
          style={{ fontFamily: "var(--font-geist-mono)" }}
        >
          {event.tag}
        </span>
        <Icon
          size={56}
          strokeWidth={1.25}
          aria-hidden="true"
          className="opacity-90"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-body font-semibold leading-snug text-text-primary md:text-[16px]">
          {event.title}
        </h3>

        <dl className="mt-3 space-y-1.5 text-caption text-text-secondary">
          <div className="flex items-center gap-2">
            <MapPin size={12} strokeWidth={1.75} aria-hidden="true" />
            <span>
              {event.venue} · {event.city}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={12} strokeWidth={1.75} aria-hidden="true" />
            <span>{event.date}</span>
          </div>
        </dl>

        <div className="mt-5 flex items-center justify-between border-t border-border-light pt-4">
          <div>
            <p className="text-caption text-text-muted">From</p>
            <p className="text-body font-semibold text-text-primary">
              {event.priceFrom}
            </p>
          </div>
          <a
            href="#seats"
            className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3.5 py-1.5 text-caption font-medium text-accent-fg transition-colors hover:bg-accent-hover"
          >
            Select tickets
            <ArrowRight size={12} strokeWidth={1.75} aria-hidden="true" />
          </a>
        </div>
      </div>
    </li>
  );
}
