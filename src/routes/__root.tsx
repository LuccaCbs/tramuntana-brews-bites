import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-tramuntana-blue px-4 text-tramuntana-cream">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-7xl font-bold">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Página no encontrada</h2>
        <p className="mt-2 text-sm text-tramuntana-cream/70">
          La página que buscas no existe o ha sido movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-tramuntana-gold px-6 py-3 text-sm font-bold uppercase tracking-widest text-tramuntana-blue transition-colors hover:bg-tramuntana-cream"
          >
            Volver al inicio
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
    <div className="flex min-h-screen items-center justify-center bg-tramuntana-blue px-4 text-tramuntana-cream">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-xl font-semibold tracking-tight">
          Esta página no cargó
        </h1>
        <p className="mt-2 text-sm text-tramuntana-cream/70">
          Algo salió mal por nuestra parte. Puedes intentar refrescar o volver al inicio.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center bg-tramuntana-gold px-4 py-2 text-sm font-bold uppercase tracking-widest text-tramuntana-blue transition-colors hover:bg-tramuntana-cream"
          >
            Intentar de nuevo
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center border border-tramuntana-cream/30 bg-transparent px-4 py-2 text-sm font-bold uppercase tracking-widest text-tramuntana-cream transition-colors hover:bg-tramuntana-cream hover:text-tramuntana-blue"
          >
            Ir al inicio
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
      { title: "Tramuntana Beer House — Cerveza, Rock & Cocina en Inca" },
      {
        name: "description",
        content:
          "Cervecería Tramuntana en Inca, Mallorca. Cervezas artesanales belgas, españolas e internacionales, ambiente rockero, milanesas, tapas argentinas, billar y máquina recreativa.",
      },
      {
        property: "og:title",
        content: "Tramuntana Beer House — Cerveza, Rock & Cocina en Inca",
      },
      {
        property: "og:description",
        content:
          "Cervecería Tramuntana en Inca, Mallorca. Cervezas artesanales belgas, españolas e internacionales, ambiente rockero, milanesas, tapas argentinas, billar y máquina recreativa.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@tramuntanabeerhouse" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&family=Libre+Baskerville:wght@400;700&display=swap",
      },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
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

function Header() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-tramuntana-gold/20 bg-tramuntana-blue/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-tramuntana-gold font-serif text-lg font-bold text-tramuntana-blue">
            T
          </div>
          <span className="font-serif text-xl font-bold uppercase tracking-wider text-tramuntana-gold">
            Tramuntana
          </span>
        </Link>
        <div className="hidden items-center gap-8 text-sm font-semibold uppercase tracking-widest md:flex">
          <Link
            to="/"
            activeProps={{ className: "text-tramuntana-gold" }}
            className="text-tramuntana-cream transition-colors hover:text-tramuntana-gold"
          >
            Inicio
          </Link>
          <Link
            to="/menu"
            activeProps={{ className: "text-tramuntana-gold" }}
            className="text-tramuntana-cream transition-colors hover:text-tramuntana-gold"
          >
            Carta
          </Link>
          <Link
            to="/"
            hash="contacto"
            className="text-tramuntana-cream transition-colors hover:text-tramuntana-gold"
          >
            Contacto
          </Link>
        </div>
        <a
          href="tel:+34666999044"
          className="bg-tramuntana-gold px-4 py-2 text-xs font-bold uppercase tracking-widest text-tramuntana-blue transition-colors hover:bg-tramuntana-cream md:px-6"
        >
          Reservar
        </a>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer id="contacto" className="bg-black py-20 text-tramuntana-cream">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h4 className="mb-6 font-serif text-2xl text-tramuntana-gold">Visítanos</h4>
            <address className="not-italic space-y-2 text-tramuntana-cream/70">
              <p>Avinguda del General Luque 266</p>
              <p>07300 Inca, Mallorca</p>
              <p className="mt-4">
                Tel:{" "}
                <a href="tel:+34666999044" className="hover:text-tramuntana-gold">
                  +34 666 99 90 44
                </a>
              </p>
            </address>
          </div>
          <div>
            <h4 className="mb-6 font-serif text-2xl text-tramuntana-gold">Horarios</h4>
            <ul className="space-y-2 text-tramuntana-cream/70">
              <li className="flex justify-between">
                <span>Lun - Jue</span>
                <span>18:00 - 01:00</span>
              </li>
              <li className="flex justify-between">
                <span>Vie - Sáb</span>
                <span>18:00 - 03:00</span>
              </li>
              <li className="flex justify-between">
                <span>Domingo</span>
                <span>Cerrado</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-6 font-serif text-2xl text-tramuntana-gold">Social</h4>
            <div className="flex gap-6">
              <a
                href="https://www.instagram.com/tramuntanabeerhouse/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-tramuntana-gold"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/tramuntanabeerhouse/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-tramuntana-gold"
              >
                Facebook
              </a>
            </div>
            <p className="mt-8 text-xs text-tramuntana-cream/40">
              © {new Date().getFullYear()} Tramuntana Beer House. Inca, Mallorca.
            </p>
          </div>
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
      <Outlet />
      <Footer />
    </QueryClientProvider>
  );
}
