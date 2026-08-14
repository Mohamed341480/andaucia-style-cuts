import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Phone, MapPin, Clock, Menu, X, MessageCircle } from "lucide-react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Button } from "../components/ui/button";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Pagina niet gevonden</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Deze pagina bestaat niet of is verplaatst.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Terug naar home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Deze pagina kon niet laden
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Er is iets misgegaan. Probeer het opnieuw of ga terug naar home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Opnieuw proberen
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Kapsalon Andalucia" },
      { name: "description", content: "Kapper Andalucia in het hart van de Schilderswijk, Den Haag. Herenkapsalon aan de Hobbemastraat 97. Loop binnen of bel 06 24311013." },
      { name: "author", content: "Kapsalon Andalucia" },
      { property: "og:title", content: "Kapsalon Andalucia" },
      { property: "og:description", content: "Kapper Andalucia in het hart van de Schilderswijk, Den Haag. Herenkapsalon aan de Hobbemastraat 97." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="nl">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

const navItems = [
  { to: "/" as const, label: "Home" },
  { to: "/diensten" as const, label: "Diensten" },
  { to: "/over-ons" as const, label: "Over ons" },
  { to: "/fotos" as const, label: "Foto's" },
  { to: "/contact" as const, label: "Contact" },
];

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
            Andalucia
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "text-foreground" }}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://wa.me/31624311013?text=Hallo%2C%20ik%20wil%20graag%20een%20afspraak%20maken%20bij%20Kapsalon%20Andalucia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-foreground hover:text-green-600"
            aria-label="WhatsApp"
          >
            WhatsApp
          </a>
          <a
            href="tel:0624311013"
            className="text-sm font-medium text-foreground hover:text-terracotta"
          >
            06 24311013
          </a>
          <Button asChild size="sm" className="rounded-full bg-green-500 text-white hover:bg-green-600">
            <a href="https://wa.me/31624311013?text=Hallo%2C%20ik%20wil%20graag%20een%20afspraak%20maken%20bij%20Kapsalon%20Andalucia" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-1.5 h-4 w-4" />
              App ons
            </a>
          </Button>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-md md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Menu sluiten" : "Menu openen"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeProps={{ className: "bg-accent text-foreground" }}
                className="rounded-md px-3 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3 border-t border-border pt-4">
            <a
              href="https://wa.me/31624311013?text=Hallo%2C%20ik%20wil%20graag%20een%20afspraak%20maken%20bij%20Kapsalon%20Andalucia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-600"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp afspraak
            </a>
            <a
              href="tel:0624311013"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-terracotta px-4 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-terracotta-dark"
            >
              <Phone className="h-4 w-4" />
              06 24311013
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-bark text-cream">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-bold tracking-tight">Kapsalon Andalucia</h3>
            <p className="mt-3 text-sm text-cream/70">
              Kwaliteit en gezelligheid in het hart van de Schilderswijk. Al jaren het vertrouwde adres voor heren in Den Haag.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-cream/90">Snelmenu</h4>
            <ul className="mt-4 space-y-2">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-cream/70 transition-colors hover:text-cream"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-cream/90">Contact</h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2 text-sm text-cream/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-copper" />
                Hobbemastraat 97
                <br />
                2526 JG Den Haag
              </li>
              <li className="flex items-center gap-2 text-sm text-cream/70">
                <Phone className="h-4 w-4 shrink-0 text-copper" />
                <a href="tel:0624311013" className="hover:text-cream">06 24311013</a>
              </li>
              <li className="flex items-start gap-2 text-sm text-cream/70">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-copper" />
                <span>
                  Ma: gesloten
                  <br />
                  Di – vr: 09:00 – 18:30
                  <br />
                  Za: 09:00 – 17:00
                  <br />
                  Zo: gesloten
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-cream/10 pt-6 text-center">
          <p className="text-xs text-cream/50">
            © {new Date().getFullYear()} Kapsalon Andalucia. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <a
        href="https://wa.me/31624311013?text=Hallo%2C%20ik%20wil%20graag%20een%20afspraak%20maken%20bij%20Kapsalon%20Andalucia"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center gap-2 rounded-full bg-green-500 px-4 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:bg-green-600"
        aria-label="Maak een afspraak via WhatsApp"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="hidden sm:inline">Afspraak via WhatsApp</span>
      </a>
    </QueryClientProvider>
  );
}
