import { createFileRoute } from "@tanstack/react-router";
import { Star, Phone, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import teamImage from "../assets/team.jpg";

export const Route = createFileRoute("/over-ons")({
  head: () => ({
    meta: [
      { title: "Over Ons — Kapsalon Andalucia" },
      { name: "description", content: "Leer het team van Kapsalon Andalucia kennen. Twee ervaren barbers in het hart van de Schilderswijk, Den Haag." },
      { property: "og:title", content: "Over Ons — Kapsalon Andalucia" },
      { property: "og:description", content: "Leer het team van Kapsalon Andalucia kennen. Twee ervaren barbers in het hart van de Schilderswijk, Den Haag." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    title: "Ervaring",
    description: "Twee ervaren kappers die weten wat ze doen. Van klassieke knippen tot moderne fades.",
  },
  {
    title: "Aandacht",
    description: "We nemen de tijd voor elke klant. Jouw wensen staan centraal, of je nu komt voor een snelle trim of een complete make-over.",
  },
  {
    title: "Gezelligheid",
    description: "Andalucia is meer dan een kapsalon. Het is een plek waar je even kunt ontspannen en een praatje kunt maken.",
  },
  {
    title: "Eerlijke prijs",
    description: "Kwaliteit hoeft niet duur te zijn. Bij ons krijg je een strak kapsel voor een eerlijke prijs.",
  },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-cream px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Over Kapsalon Andalucia
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Wij zijn een Marokkaanse herenkapsalon in het hart van de Schilderswijk. Al jaren knippen we mannen uit de buurt en ver daarbuiten. Met twee ervaren barbers, een warme sfeer en eerlijke prijzen.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                Je hoeft geen afspraak te maken. Loop gewoon binnen, drink een kopje koffie of muntthee, en laat je verzorgen.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="rounded-full bg-terracotta text-primary-foreground hover:bg-terracotta-dark">
                  <a href="tel:0624311013">
                    <Phone className="mr-2 h-5 w-5" />
                    Bel 06 24311013
                  </a>
                </Button>
              </div>
            </div>
            <div>
              <img
                src={teamImage}
                alt="Het team van Kapsalon Andalucia"
                width={1200}
                height={800}
                loading="lazy"
                className="rounded-2xl shadow-xl shadow-terracotta/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Waarom klanten terugkomen</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="rounded-2xl bg-card p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-bark px-4 py-16 text-cream sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Gewaardeerd in de buurt</h2>
              <p className="mt-2 text-cream/70">
                4,6 sterren op basis van 46 Google reviews.
              </p>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-cream/10 px-4 py-2">
              <Star className="h-5 w-5 fill-copper text-copper" />
              <span className="font-bold text-cream">4,6</span>
              <span className="text-sm text-cream/70">(46 reviews)</span>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                text: "Alle twee Kapper met goeie ervaring behandeld met liefde en respect.",
                author: "Naresh Ghirao",
              },
              {
                text: "Altijd volle bak omdat het uitstekende heren kappers zijn.",
                author: "Issa Hoornweg",
              },
              {
                text: "Je hoeft geen afspraak te maken maar soms kan het even duren.",
                author: "C Indolia",
              },
            ].map((review, index) => (
              <blockquote
                key={index}
                className="rounded-2xl bg-cream/5 p-6"
              >
                <div className="flex gap-1 text-copper">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-cream/90">"{review.text}"</p>
                <footer className="mt-4 text-sm font-semibold text-cream/70">— {review.author}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Kom de sfeer zelf ervaren
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            We zijn er van dinsdag tot en met zaterdag. Zien we je binnenkort?
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
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
