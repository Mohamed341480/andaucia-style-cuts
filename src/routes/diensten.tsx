import { createFileRoute } from "@tanstack/react-router";
import { Scissors, ArrowRight, Phone, MessageCircle } from "lucide-react";
import { Button } from "../components/ui/button";

export const Route = createFileRoute("/diensten")({
  head: () => ({
    meta: [
      { title: "Diensten & Prijzen — Kapsalon Andalucia" },
      { name: "description", content: "Bekijk de diensten en prijzen van Kapsalon Andalucia in de Schilderswijk. Knippen, baard trimmen, kinderen en meer." },
      { property: "og:title", content: "Diensten & Prijzen — Kapsalon Andalucia" },
      { property: "og:description", content: "Bekijk de diensten en prijzen van Kapsalon Andalucia in de Schilderswijk. Knippen, baard trimmen, kinderen en meer." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    title: "Heren knippen",
    description: "Wassen, knippen en stylen. Klassiek of modern, afgestemd op jouw haartype en wensen.",
    price: "€20",
  },
  {
    title: "Kinderen (tot 12 jaar)",
    description: "Geduldig knippen voor de jonge klanten. Een frisse look voor een scherpe prijs.",
    price: "€15",
  },
  {
    title: "Knippen + baard",
    description: "Het complete pakket: haar en baard in één beurt. Voor een verzorgde, frisse look.",
    price: "€27",
  },
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-cream px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Diensten & prijzen
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Eerlijke prijzen voor kwaliteitsknippen. Geen verrassingen aan de kassa.
          </p>
        </div>
      </section>

      {/* Price list */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="group flex flex-col gap-2 rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-terracotta/10 text-terracotta">
                    <Scissors className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                </div>
                <div className="mt-2 flex items-center justify-between sm:mt-0 sm:flex-col sm:items-end sm:gap-1">
                  <span className="text-2xl font-bold text-terracotta">{service.price}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-bark p-8 text-cream">
            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-xl font-bold">Direct een afspraak maken?</h3>
                <p className="mt-1 text-sm text-cream/70">App ons via WhatsApp of bel ons. We reageren zo snel mogelijk.</p>
              </div>
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <Button asChild className="rounded-full bg-green-500 text-white hover:bg-green-600">
                  <a href="https://wa.me/31624311013?text=Hallo%2C%20ik%20wil%20graag%20een%20afspraak%20maken%20bij%20Kapsalon%20Andalucia" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp
                  </a>
                </Button>
                <Button asChild className="rounded-full bg-terracotta text-primary-foreground hover:bg-terracotta-dark">
                  <a href="tel:0624311013">
                    <Phone className="mr-2 h-4 w-4" />
                    06 24311013
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>
              *Prijzen zijn vast. Alleen contante betaling of per pin mogelijk.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sand px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Klaar voor een frisse look?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Je hoeft geen afspraak te maken. Loop binnen of bel voor de wachttijd.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-full bg-green-500 text-white hover:bg-green-600">
              <a href="https://wa.me/31624311013?text=Hallo%2C%20ik%20wil%20graag%20een%20afspraak%20maken%20bij%20Kapsalon%20Andalucia" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                App voor afspraak
              </a>
            </Button>
            <Button asChild size="lg" className="rounded-full bg-terracotta text-primary-foreground hover:bg-terracotta-dark">
              <a href="tel:0624311013">
                <Phone className="mr-2 h-5 w-5" />
                Bel nu
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-terracotta text-terracotta hover:bg-terracotta/5">
              <a href="https://maps.google.com/?q=Hobbemastraat+97+2526+JG+Den+Haag" target="_blank" rel="noopener noreferrer">
                Routebeschrijving
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
