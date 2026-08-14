import { createFileRoute } from "@tanstack/react-router";
import { Camera, Phone, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import heroImage from "../assets/hero.jpg";
import teamImage from "../assets/team.jpg";
import cutImage from "../assets/cut.jpg";
import interiorImage from "../assets/interior.jpg";
import toolsImage from "../assets/tools.jpg";

export const Route = createFileRoute("/fotos")({
  head: () => ({
    meta: [
      { title: "Foto's — Kapsalon Andalucia" },
      { name: "description", content: "Bekijk foto's van Kapsalon Andalucia in de Schilderswijk. Het interieur, het team en ons werk." },
      { property: "og:title", content: "Foto's — Kapsalon Andalucia" },
      { property: "og:description", content: "Bekijk foto's van Kapsalon Andalucia in de Schilderswijk. Het interieur, het team en ons werk." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PhotosPage,
});

const photos = [
  {
    src: heroImage,
    alt: "Interieur van Kapsalon Andalucia met klassieke barbierstoel",
    caption: "De zaak",
  },
  {
    src: teamImage,
    alt: "Het team van Kapsalon Andalucia",
    caption: "Het team",
  },
  {
    src: cutImage,
    alt: "Strakke fade knipbeurt bij Kapsalon Andalucia",
    caption: "Ons werk",
  },
  {
    src: interiorImage,
    alt: "Ruim zicht op de barbershop met meerdere stoelen",
    caption: "Sfeerimpressie",
  },
  {
    src: toolsImage,
    alt: "Professionele kappersgereedschap op een houten werkblad",
    caption: "Gereedschap",
  },
];

function PhotosPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-cream px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-sand px-3 py-1 text-xs font-semibold uppercase tracking-wider text-terracotta">
            <Camera className="h-3.5 w-3.5" />
            Impressie
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Foto's van Andalucia
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Een kijkje in de zaak, het team en het werk dat we dagelijks doen.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {photos.map((photo, index) => (
              <figure
                key={index}
                className="group overflow-hidden rounded-2xl bg-card shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <figcaption className="p-4 text-sm font-medium text-muted-foreground">
                  {photo.caption}
                </figcaption>
              </figure>
            ))}
          </div>

          {/* Extra CTA */}
          <div className="mt-16 rounded-3xl bg-sand p-8 text-center sm:p-12">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Zelf ervaren?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Kom langs in de Schilderswijk. Geen afspraak nodig.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-full bg-terracotta text-primary-foreground hover:bg-terracotta-dark">
                <a href="tel:0624311013">
                  <Phone className="mr-2 h-5 w-5" />
                  Bel 06 24311013
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
        </div>
      </section>
    </div>
  );
}
