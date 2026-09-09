import { createFileRoute } from "@tanstack/react-router";

import milanesaImage from "../assets/milanesa.jpg";
import nachosImage from "../assets/nachos.jpg";
import tapasImage from "../assets/tapas.jpg";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Carta — Tramuntana Beer House" },
      {
        name: "description",
        content:
          "Descubre la carta de Tramuntana Beer House: cervezas artesanales de grifo y botella, milanesas, Nacho Patagonia, tapas argentinas y más en Inca, Mallorca.",
      },
      {
        property: "og:title",
        content: "Carta — Tramuntana Beer House",
      },
      {
        property: "og:description",
        content:
          "Cervezas artesanales de grifo y botella, milanesas, Nacho Patagonia, tapas argentinas y más en Inca, Mallorca.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  return (
    <main className="min-h-screen bg-tramuntana-blue pb-24 pt-32 text-tramuntana-cream">
      <div className="mx-auto max-w-5xl px-6">
        <header className="mb-20 text-center">
          <span className="mb-4 block text-sm font-bold uppercase tracking-[0.3em] text-tramuntana-gold">
            Bebe. Come. Rockea.
          </span>
          <h1 className="font-serif text-6xl md:text-7xl">La Carta</h1>
        </header>

        {/* Draft beers */}
        <MenuSection title="Cervezas de Grifo" id="grifo">
          <MenuItem
            name="Tramuntana Lager"
            description="Nuestra artesana de la casa. Fresca, ligera y fácil de beber."
            price="4,00€"
            tags={["Casa", "4.8% ABV"]}
          />
          <MenuItem
            name="Punk IPA — BrewDog"
            description="La clásica rebelde. Cítrica, tropical y con el amargor justo."
            price="5,50€"
            tags={["Escocia", "5.4% ABV"]}
          />
          <MenuItem
            name="Gulden Draak 9000"
            description="Cuádruple belga, potente, maltosa y compleja. Para paladares serios."
            price="6,50€"
            tags={["Bélgica", "10.5% ABV"]}
          />
          <MenuItem
            name="La Quince Rebellion"
            description="American Pale Ale española. Tropical, crujiente y con carácter."
            price="6,80€"
            tags={["España", "5.5% ABV"]}
          />
        </MenuSection>

        {/* Bottled beers */}
        <MenuSection title="Cervezas de Botella">
          <MenuItem
            name="Chimay Blue"
            description="Cerveza trapense belga oscura. Notas de frutos secos y caramelo."
            price="7,00€"
            tags={["Bélgica", "33cl", "9% ABV"]}
          />
          <MenuItem
            name="Delirium Tremens"
            description="Rubia belga fuerte, especiada y con final seco."
            price="6,50€"
            tags={["Bélgica", "33cl", "8.5% ABV"]}
          />
          <MenuItem
            name="Estrella Galicia Especial"
            description="La rubia del norte, suave y equilibrada."
            price="3,50€"
            tags={["España", "33cl", "5.5% ABV"]}
          />
          <MenuItem
            name="Mahou Maestra"
            description="Doble lager malteada, cuerpo medio y final amargo."
            price="4,00€"
            tags={["España", "33cl", "7.5% ABV"]}
          />
        </MenuSection>

        {/* Featured dishes */}
        <MenuSection title="Platos Estrella">
          <div className="grid gap-8 md:grid-cols-3">
            <DishCard
              image={milanesaImage}
              title="Milanesa de la Casa"
              price="14,00€"
              description="Crujiente milanesa de ternera con patatas fritas caseras."
              alt="Milanesa con patatas fritas"
            />
            <DishCard
              image={nachosImage}
              title="Nacho Patagonia"
              price="11,00€"
              description="Carne desmechada, queso fundido, jalapeños, guacamole y pico de gallo."
              alt="Nacho Patagonia con guacamole"
            />
            <DishCard
              image={tapasImage}
              title="Mix de Tapas Argentinas"
              price="18,00€"
              description="Empanadas, chorizo, aceitunas y chimichurri para compartir."
              alt="Tabla de tapas argentinas"
            />
          </div>
        </MenuSection>

        {/* Food */}
        <MenuSection title="De la Cocina">
          <MenuItem
            name="Milanesa Napolitana"
            description="Con jamón, mozzarella y salsa de tomate casera. Acompañada de patatas fritas."
            price="14,50€"
          />
          <MenuItem
            name="Milanesa Patagonia"
            description="Con mozzarella, rodajas de tomate y chimichurri."
            price="15,00€"
          />
          <MenuItem
            name="Patatas Alioli Rock"
            description="Corte casero con nuestro alioli secreto ahumado."
            price="6,50€"
          />
          <MenuItem
            name="Bravas Tramuntana"
            description="Patatas caseras con salsa brava picante y alioli."
            price="7,00€"
          />
          <MenuItem
            name="Hamburguesa Beer House"
            description="Carne de vacuno, cheddar, bacon, cebolla caramelizada y salsa BBQ casera."
            price="13,50€"
          />
        </MenuSection>

        <p className="mt-16 text-center text-sm text-tramuntana-cream/50">
          * Los precios y la disponibilidad de cervezas pueden variar. Consulta en barra las últimas novedades de grifo.
        </p>
      </div>
    </main>
  );
}

function MenuSection({
  title,
  children,
  id,
}: {
  title: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="mb-24">
      <div className="mb-12 flex items-center gap-4">
        <h2 className="font-serif text-3xl italic text-tramuntana-gold">{title}</h2>
        <div className="h-px flex-1 bg-tramuntana-gold/30" />
      </div>
      {children}
    </section>
  );
}

function MenuItem({
  name,
  description,
  price,
  tags,
}: {
  name: string;
  description: string;
  price: string;
  tags?: string[];
}) {
  return (
    <div className="group flex items-start justify-between gap-4 border-b border-white/10 py-6 first:pt-0">
      <div>
        <h3 className="text-lg font-bold text-tramuntana-cream transition-colors group-hover:text-tramuntana-gold">
          {name}
        </h3>
        <p className="mt-1 max-w-xl text-sm text-tramuntana-cream/60">{description}</p>
        {tags && (
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="border border-tramuntana-gold/30 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-tramuntana-gold/80"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      <span className="shrink-0 font-bold text-tramuntana-gold">{price}</span>
    </div>
  );
}

function DishCard({
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
      <div className="p-5">
        <div className="mb-2 flex items-start justify-between">
          <h3 className="text-lg font-bold">{title}</h3>
          <span className="font-bold text-tramuntana-gold">{price}</span>
        </div>
        <p className="text-sm text-tramuntana-cream/60">{description}</p>
      </div>
    </div>
  );
}
