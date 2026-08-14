import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, Phone, MapPin, Clock, ArrowRight, Scissors, MessageCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import heroImage from "../assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kapper Andalucia — Herenkapsalon in de Schilderswijk" },
      { name: "description", content: "Kapper Andalucia in het hart van de Schilderswijk, Den Haag. Twee ervaren barbers. Loop binnen of bel 06 24311013." },
      { property: "og:title", content: "Kapper Andalucia — Herenkapsalon in de Schilderswijk" },
      { property: "og:description", content: "Kapper Andalucia in het hart van de Schilderswijk, Den Haag. Twee ervaren barbers. Loop binnen of bel 06 24311013." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const reviews = [
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
];

function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-cream px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 rounded-full bg-sand px-3 py-1 text-xs font-semibold uppercase tracking-wider text-terracotta">
                <Scissors className="h-3.5 w-3.5" />
                Herenkapsalon Den Haag
              </div>
              <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Kapper Andalucia in het hart van de Schilderswijk
              </h1>
              <p className="mt-6 max-w-lg text-lg text-muted-foreground">
                Al jaren een vertrouwd adres in de wijk. Twee ervaren barbers, eerlijke prijzen en altijd tijd voor een goed gesprek.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="rounded-full bg-green-500 text-white hover:bg-green-600">
                  <a href="https://wa.me/31624311013?text=Hallo%2C%20ik%20wil%20graag%20een%20afspraak%20maken%20bij%20Kapsalon%20Andalucia" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    App voor afspraak
                  </a>
                </Button>
                <Button asChild size="lg" className="rounded-full bg-terracotta text-primary-foreground hover:bg-terracotta-dark">
                  <a href="tel:0624311013">
                    <Phone className="mr-2 h-5 w-5" />
                    Bel 06 24311013
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full border-terracotta text-terracotta hover:bg-terracotta/5">
                  <Link to="/diensten">
                    Bekijk prijzen
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-terracotta text-terracotta" />
                  <span className="font-semibold text-foreground">4,6</span>
                  <span>(46 reviews)</span>
                </div>
                <span className="hidden sm:inline">•</span>
                <span className="hidden sm:inline">Geen afspraak nodig</span>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img
                  src={heroImage}
                  alt="Interieur van Kapsalon Andalucia"
                  width={1200}
                  height={900}
                  className="rounded-2xl shadow-2xl shadow-terracotta/10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Wat we doen</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Van klassiek knippen tot een verzorgde baard. Voor jong en oud, altijd met aandacht.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {servicePreviews.map((service) => (
              <div
                key={service.title}
                className="group rounded-2xl bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-terracotta/10 text-terracotta">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
                <p className="mt-4 text-lg font-semibold text-terracotta">{service.price}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline" className="rounded-full border-terracotta text-terracotta hover:bg-terracotta/5">
              <Link to="/diensten">Bekijk alle prijzen</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-bark px-4 py-16 text-cream sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-1 rounded-full bg-cream/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cream/90">
              <Star className="h-3.5 w-3.5 fill-copper text-copper" />
              4,6 sterren — 46 reviews
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Wat klanten zeggen</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {reviews.map((review, index) => (
              <blockquote
                key={index}
                className="rounded-2xl bg-cream/5 p-6 backdrop-blur-sm"
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

      {/* Location / CTA */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="rounded-3xl bg-sand p-8 sm:p-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Kom langs in de wijk
              </h2>
              <p className="mt-4 text-muted-foreground">
                We zitten midden in de Schilderswijk, makkelijk bereikbaar. Geen afspraak nodig, loop gewoon binnen.
              </p>

              <ul className="mt-8 space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-terracotta/10 text-terracotta">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Adres</p>
                    <p className="text-muted-foreground">Hobbemastraat 97, 2526 JG Den Haag</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-terracotta/10 text-terracotta">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Telefoon</p>
                    <p className="text-muted-foreground">
                      <a href="tel:0624311013" className="hover:text-terracotta">06 24311013</a>
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-terracotta/10 text-terracotta">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Openingstijden</p>
                    <p className="text-muted-foreground">
                      Di–vr: 09:00 – 18:30
                      <br />
                      Za: 09:00 – 17:00
                      <br />
                      Ma & zo: gesloten
                    </p>
                  </div>
                </li>
              </ul>

              <div className="mt-8">
                <Button asChild size="lg" className="rounded-full bg-terracotta text-primary-foreground hover:bg-terracotta-dark">
                  <a href="https://maps.google.com/?q=Hobbemastraat+97+2526+JG+Den+Haag" target="_blank" rel="noopener noreferrer">
                    <MapPin className="mr-2 h-5 w-5" />
                    Routebeschrijving
                  </a>
                </Button>
              </div>
            </div>

            <div className="rounded-3xl bg-sand p-8 sm:p-12">
              <h3 className="text-2xl font-bold tracking-tight text-foreground">Waarom Andalucia?</h3>
              <ul className="mt-6 space-y-4">
                {uspItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-terracotta" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const servicePreviews = [
  {
    title: "Heren knippen",
    description: "Klassiek of modern model, inclusief wassen en styling.",
    price: "€20",
    icon: Scissors,
  },
  {
    title: "Kinderen (tot 12 jaar)",
    description: "Geduld en ervaring voor de kleinste klanten.",
    price: "€15",
    icon: Scissors,
  },
  {
    title: "Knippen + baard",
    description: "Het complete pakket: haar en baard in één beurt.",
    price: "€27",
    icon: Scissors,
  },
];

const uspItems = [
  "Twee ervaren barbers met passie voor het vak",
  "Eerlijke prijzen zonder gedoe",
  "Geen afspraak nodig: loop binnen",
  "Warme, buurtse sfeer in de Schilderswijk",
  "Geopend van dinsdag tot en met zaterdag",
];
