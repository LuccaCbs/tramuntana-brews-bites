import { createFileRoute, Link } from "@tanstack/react-router";

import heroImage from "../assets/hero-pub.jpg";
import beerImage from "../assets/beer-craft.jpg";
import motorcycleImage from "../assets/motorcycle-decor.jpg";
import milanesaImage from "../assets/milanesa.jpg";
import nachosImage from "../assets/nachos.jpg";
import tapasImage from "../assets/tapas.jpg";
import logoAsset from "../assets/tramuntana-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
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
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-tramuntana-blue text-tramuntana-cream">
      {/* Hero Section */}
      <section className="relative flex h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Interior rústico de Tramuntana Beer House con motos y neones"
            className="h-full w-full object-cover opacity-60"
            width={1920}
            height={1080}
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-tramuntana-blue/40 via-transparent to-tramuntana-blue" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <div className="mb-8 flex justify-center">
            <img
              src={logoAsset.url}
              alt="Tramuntana Gastrobar Inca"
              className="h-32 w-auto md:h-40"
              width={200}
              height={200}
            />
          </div>
          <h1 className="mb-6 font-serif text-5xl leading-tight md:text-8xl">
            Rock, Cerveza & <span className="italic text-tramuntana-gold">Pasión</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg font-light tracking-wide text-tramuntana-cream/80 md:text-xl">
            El templo de la cerveza artesanal en Inca. Un refugio rústico donde las motos, el rock y el buen comer se encuentran.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/menu"
              className="bg-tramuntana-gold px-8 py-4 text-center text-sm font-bold uppercase tracking-widest text-tramuntana-blue transition-transform hover:scale-105"
            >
              Explorar La Carta
            </Link>
            <a
              href="tel:+34666999044"
              className="border border-tramuntana-cream/30 px-8 py-4 text-center text-sm font-bold uppercase tracking-widest text-tramuntana-cream transition-all hover:bg-tramuntana-cream hover:text-tramuntana-blue"
            >
              Reservar Mesa
            </a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="bg-tramuntana-cream px-6 py-24 text-tramuntana-blue">
        <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
          <div>
            <h2 className="mb-8 font-serif text-4xl leading-tight md:text-5xl">
              Más que un pub, <br />una declaración.
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-slate-700">
              <p>
                Ubicados en Inca, la Tramuntana pone la cerveza en el centro de todo. Desde variedades belgas clásicas hasta las últimas innovaciones artesanales de España y el mundo.
              </p>
              <p>
                Nuestra decoración rústica, con toques de dragones y motos, crea el ambiente perfecto para disfrutar de una partida de billar o revivir clásicos en nuestra máquina recreativa.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="border-l-4 border-tramuntana-gold pl-4">
                <div className="text-3xl font-bold">+50</div>
                <div className="text-sm font-semibold uppercase tracking-tighter">Etiquetas</div>
              </div>
              <div className="border-l-4 border-tramuntana-gold pl-4">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm font-semibold uppercase tracking-tighter">Rock & Roll</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={beerImage}
              alt="Copa de cerveza artesanal con espuma perfecta"
              className="aspect-[4/5] rounded-sm object-cover"
              width={800}
              height={1000}
              loading="lazy"
            />
            <img
              src={motorcycleImage}
              alt="Detalle de moto vintage en el interior del bar"
              className="mt-12 aspect-[4/5] rounded-sm object-cover"
              width={800}
              height={1000}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Specialties Preview */}
      <section className="bg-tramuntana-blue px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-tramuntana-gold">
              Especialidades
            </span>
            <h2 className="mt-4 font-serif text-5xl">La Carta</h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <SpecialtyCard
              image={milanesaImage}
              title="Milanesa de la Casa"
              price="14€"
              description="Crujiente milanesa acompañada de nuestras famosas patatas fritas caseras."
              alt="Milanesa con patatas fritas"
            />
            <SpecialtyCard
              image={nachosImage}
              title="Nacho Patagonia"
              price="11€"
              description="Nuestra versión estrella con carne, quesos fundidos y toques secretos del chef."
              alt="Nacho Patagonia con guacamole"
            />
            <SpecialtyCard
              image={tapasImage}
              title="Mix de Tapas"
              price="18€"
              description="Selección de delicias argentinas ideales para maridar con una cerveza belga."
              alt="Tabla de tapas argentinas"
            />
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/menu"
              className="border-2 border-tramuntana-gold px-10 py-5 text-sm font-bold uppercase tracking-widest text-tramuntana-gold transition-all hover:bg-tramuntana-gold hover:text-tramuntana-blue"
            >
              Ver Carta Completa
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function SpecialtyCard({
  image,
  title,
  price,
  description,
  alt,
}: {
  image: string;
  title: string;
  price: string;
  description: string;
  alt: string;
}) {
  return (
    <div className="group border border-white/10 bg-white/5 p-1 transition-colors hover:border-tramuntana-gold/50">
      <img
        src={image}
        alt={alt}
        className="aspect-video w-full object-cover transition-opacity group-hover:opacity-80"
        width={800}
        height={600}
        loading="lazy"
      />
      <div className="p-6">
        <div className="mb-2 flex items-start justify-between">
          <h3 className="text-xl font-bold">{title}</h3>
          <span className="font-bold text-tramuntana-gold">{price}</span>
        </div>
        <p className="text-sm text-tramuntana-cream/60">{description}</p>
      </div>
    </div>
  );
}
