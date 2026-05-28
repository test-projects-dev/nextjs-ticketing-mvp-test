import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import EventSearch from "@/components/sections/EventSearch";
import EventList from "@/components/sections/EventList";
import SeatSelection from "@/components/sections/SeatSelection";
import CheckoutFlow from "@/components/sections/CheckoutFlow";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <EventSearch />
        <EventList />
        <SeatSelection />
        <CheckoutFlow />
      </main>
      <Footer />
    </div>
  );
}
