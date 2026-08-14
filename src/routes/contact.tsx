import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Clock, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "../components/ui/button";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Locatie — Kapsalon Andalucia" },
      { name: "description", content: "Bezoek Kapsalon Andalucia aan de Hobbemastraat 97 in de Schilderswijk, Den Haag. Bel 06 24311013." },
      { property: "og:title", content: "Contact & Locatie — Kapsalon Andalucia" },
      { property: "og:description", content: "Bezoek Kapsalon Andalucia aan de Hobbemastraat 97 in de Schilderswijk, Den Haag. Bel 06 24311013." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ContactPage,
});

const openingHours = [
  { day: "Maandag", time: "Gesloten" },
  { day: "Dinsdag", time: "09:00 – 18:30" },
  { day: "Woensdag", time: "09:00 – 18:30" },
  { day: "Donderdag", time: "09:00 – 18:30" },
  { day: "Vrijdag", time: "09:00 – 18:30" },
  { day: "Zaterdag", time: "09:00 – 17:00" },
  { day: "Zondag", time: "Gesloten" },
];

function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-cream px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Contact & locatie
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Bezoek ons in de Schilderswijk. Geen afspraak nodig, loop gewoon binnen.
          </p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Info */}
            <div className="space-y-6">
              <div className="rounded-2xl bg-card p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-terracotta/10 text-terracotta">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-foreground">Adres</h2>
                    <p className="mt-1 text-muted-foreground">
                      Hobbemastraat 97
                      <br />
                      2526 JG Den Haag
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">Schilderswijk</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-card p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-500/10 text-green-600">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-foreground">WhatsApp</h2>
                    <p className="mt-1 text-muted-foreground">
                      <a
                        href="https://wa.me/31624311013?text=Hallo%2C%20ik%20wil%20graag%20een%20afspraak%20maken%20bij%20Kapsalon%20Andalucia"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-semibold text-green-600 hover:text-green-700"
                      >
                        Stuur een appje
                      </a>
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">Maak direct een afspraak via WhatsApp.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-card p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-terracotta/10 text-terracotta">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-foreground">Telefoon</h2>
                    <p className="mt-1 text-muted-foreground">
                      <a href="tel:0624311013" className="text-lg font-semibold text-terracotta hover:text-terracotta-dark">
                        06 24311013
                      </a>
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">Bel voor de wachttijd of gewoon om te vragen of we open zijn.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-card p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-terracotta/10 text-terracotta">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div className="w-full">
                    <h2 className="text-xl font-semibold text-foreground">Openingstijden</h2>
                    <table className="mt-3 w-full text-sm">
                      <tbody className="divide-y divide-border">
                        {openingHours.map((item) => (
                          <tr key={item.day} className={item.time === "Gesloten" ? "text-muted-foreground" : ""}>
                            <td className="py-2 font-medium text-foreground">{item.day}</td>
                            <td className="py-2 text-right text-muted-foreground">{item.time}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-bark p-6 text-cream">
                <h3 className="text-lg font-semibold">Direct contact?</h3>
                <p className="mt-2 text-sm text-cream/70">
                  Geen afspraak nodig. Bel of kom langs wanneer het jou uitkomt.
                </p>
                <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                  <Button asChild className="rounded-full bg-terracotta text-primary-foreground hover:bg-terracotta-dark">
                    <a href="tel:0624311013">
                      <Phone className="mr-2 h-4 w-4" />
                      06 24311013
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="rounded-full border-cream/30 text-cream hover:bg-cream/10">
                    <a href="https://maps.google.com/?q=Hobbemastraat+97+2526+JG+Den+Haag" target="_blank" rel="noopener noreferrer">
                      Routebeschrijving
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="rounded-3xl bg-sand p-6 lg:p-10">
              <h2 className="mb-4 text-xl font-semibold text-foreground">Route</h2>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-cream shadow-sm">
                <iframe
                  title="Locatie Kapsalon Andalucia"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2453.1234567890123!2d4.3056!3d52.0701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDA0JzEyLjQiTiA0wrAxOCczNC4xIkU!5e0!3m2!1snl!2snl!4v1234567890123!5m2!1snl!2snl"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full"
                />
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Hobbemastraat 97 is goed bereikbaar met het openbaar vervoer en de auto.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
