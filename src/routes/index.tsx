import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  Calculator,
  FileText,
  Users,
  Scale,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  MessageCircle,
  Share2,
} from "lucide-react";
import { useState } from "react";
import heroImage from "@/assets/hero-accounting.jpg";
import ogImageAsset from "@/assets/og-image.jpg.asset.json";
import ogImage800Asset from "@/assets/og-image-800.jpg.asset.json";
import ogImageSquareAsset from "@/assets/og-image-square.jpg.asset.json";
import { BrandLogo } from "@/components/brand-logo";
import { ShareButtons } from "@/components/share-buttons";

const SITE_URL = "https://id-preview--a728b6d1-fda0-467a-87d6-c9bef83d986a.lovable.app";
const OG_IMAGE_URL = `${SITE_URL}${ogImageAsset.url}`;
const OG_IMAGE_800_URL = `${SITE_URL}${ogImage800Asset.url}`;
const OG_IMAGE_SQUARE_URL = `${SITE_URL}${ogImageSquareAsset.url}`;
const OG_IMAGE_ALT = "Estudio Ambrosini — Contadores Públicos en Mendoza";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title:
          "Estudio Ambrosini — Contadores Públicos en Mendoza | Impuestos, Sueldos y Asesoramiento",
      },
      {
        name: "description",
        content:
          "Estudio contable en Mendoza desde 1992. Impuestos, contabilidad, liquidación de sueldos, asesoramiento a pymes y juicios ARCA. Atención personalizada.",
      },
      {
        name: "keywords",
        content:
          "contador Mendoza, estudio contable Mendoza, impuestos, monotributo, liquidación de sueldos, juicios ARCA, asesoramiento fiscal",
      },
      { property: "og:title", content: "Estudio Ambrosini — Contadores Públicos en Mendoza" },
      {
        property: "og:description",
        content:
          "Más de 30 años acompañando empresas, profesionales y familias de Mendoza. Impuestos, contabilidad, sueldos y asesoramiento integral.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:locale", content: "es_AR" },
      { property: "og:site_name", content: "Estudio Ambrosini. Contadores Públicos." },
      { property: "og:image", content: OG_IMAGE_URL },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: OG_IMAGE_ALT },
      { property: "og:image", content: OG_IMAGE_800_URL },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:width", content: "800" },
      { property: "og:image:height", content: "418" },
      { property: "og:image:alt", content: OG_IMAGE_ALT },
      { property: "og:image", content: OG_IMAGE_SQUARE_URL },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:width", content: "600" },
      { property: "og:image:height", content: "600" },
      { property: "og:image:alt", content: OG_IMAGE_ALT },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Estudio Ambrosini — Contadores Públicos en Mendoza",
      },
      {
        name: "twitter:description",
        content:
          "Impuestos, contabilidad, sueldos y asesoramiento integral en Mendoza desde 1992.",
      },
      { name: "twitter:image", content: OG_IMAGE_URL },
      { name: "twitter:image:alt", content: OG_IMAGE_ALT },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AccountingService",
          name: "Estudio Ambrosini. Contadores Públicos.",
          description:
            "Estudio contable en Mendoza especializado en impuestos, contabilidad, liquidación de sueldos, asesoramiento a pymes y juicios ARCA.",
          foundingDate: "1992",
          areaServed: { "@type": "AdministrativeArea", name: "Mendoza, Argentina" },
          address: {
            "@type": "PostalAddress",
            streetAddress: "Rioja 791, 1º piso, Oficinas 2 y 3",
            addressLocality: "Ciudad de Mendoza",
            addressRegion: "Mendoza",
            addressCountry: "AR",
          },
          telephone: "+54-261-429-5645",
          email: "martin@estudioambrosini.net",
          geo: { "@type": "GeoCoordinates", latitude: -32.894339, longitude: -68.8360198 },
        }),
      },
    ],
  }),
});


const navLinks = [
  { label: "Servicios", href: "/#servicios" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/#contacto" },
];

const services = [
  {
    icon: FileText,
    title: "Impuestos",
    description:
      "Asesoramiento integral en Impuestos a las Ganancias, Bienes Personales, IVA y tasas municipales. Declaraciones juradas precisas y en tiempo.",
  },
  {
    icon: Calculator,
    title: "Contabilidad",
    description:
      "Registración contable mensual, estados contables, balances generales y análisis de la situación financiera de tu empresa.",
  },
  {
    icon: Users,
    title: "Liquidación de Sueldos",
    description:
      "Liquidación de sueldos y jornales, altas y bajas de personal, emisión de recibos y gestión completa ante ART y sindicatos.",
  },
  {
    icon: TrendingUp,
    title: "Asesoramiento Financiero",
    description:
      "Planificación fiscal y financiera para potenciar el crecimiento de tu negocio, optimizando costos y cumplimiento normativo.",
  },
  {
    icon: Scale,
    title: "Juicios ARCA",
    description:
      "Defensa y representación en juicios ante ARCA (ex AFIP). Reconocimiento de deuda, planes de facilidades de pago y regularización.",
  },
];

const reasons = [
  "Más de 20 años de experiencia contable",
  "Atención personalizada para cada cliente",
  "Cumplimiento actualizado con normativa vigente",
  "Respuesta ágil y comunicación clara",
];

export function Index() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:h-24 sm:px-6 lg:px-8">
          <a href="/" className="flex min-w-0 shrink items-center" aria-label="Estudio Ambrosini - Contadores Públicos">
            <BrandLogo className="h-10 w-auto max-w-[220px] object-contain sm:h-12 sm:max-w-[280px] lg:h-14" />
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-emerald"
              >
                {link.label}
              </a>
            ))}
            <Button asChild className="bg-emerald text-primary-foreground hover:bg-emerald-dark">
              <a href="#contacto">Agendar consulta</a>
            </Button>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileOpen ? (
              <X className="h-6 w-6 text-emerald-dark" />
            ) : (
              <Menu className="h-6 w-6 text-emerald-dark" />
            )}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-border/50 bg-background px-4 py-4 md:hidden">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-foreground/80 transition-colors hover:text-emerald"
                >
                  {link.label}
                </a>
              ))}
              <Button asChild className="w-full bg-emerald text-primary-foreground hover:bg-emerald-dark">
                <a href="#contacto" onClick={() => setMobileOpen(false)}>
                  Agendar consulta
                </a>
              </Button>
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col items-start text-left">
              <span className="eyebrow mb-4 inline-flex items-center rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-emerald-dark">
                Estudio contable integral
              </span>
              <h1 className="heading-xl text-balance text-emerald-dark">
                Tu tranquilidad impositiva empieza aquí.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Brindamos soluciones contables, impositivas y laborales para
                empresas, profesionales y emprendedores. Claridad, precisión y
                un trato cercano en cada gestión.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  size="lg"
                  asChild
                  className="bg-emerald font-heading text-primary-foreground hover:bg-emerald-dark"
                >
                  <a href="#contacto">
                    Hablar con un contador
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-emerald-dark/20 font-heading text-emerald-dark hover:bg-emerald-dark/5"
                >
                  <a href="#servicios">Ver servicios</a>
                </Button>
              </div>
              <div className="mt-10 flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-gold" />
                <span>Consulta inicial sin compromiso</span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-8 -right-8 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
              <div className="absolute -bottom-8 -left-8 h-72 w-72 rounded-full bg-emerald/10 blur-3xl" />
              <img
                src={heroImage}
                alt="Escritorio profesional con documentos financieros, calculadora y laptop"
                width={1344}
                height={896}
                className="relative z-10 w-full rounded-2xl shadow-xl"
              />
            </div>
          </div>

          {/* Hero grid highlights */}
          <div className="mx-auto mt-16 grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-border bg-card/80 p-5 backdrop-blur-sm">
              <p className="eyebrow text-emerald">Desde</p>
              <p className="mt-1 font-heading text-3xl font-semibold tracking-tight text-emerald-dark">1992</p>
              <p className="mt-1 text-sm text-muted-foreground">Acompañando empresas y familias de Mendoza.</p>
            </div>
            <div className="rounded-xl border border-border bg-card/80 p-5 backdrop-blur-sm">
              <p className="eyebrow text-emerald">Equipo</p>
              <p className="mt-1 font-heading text-3xl font-semibold tracking-tight text-emerald-dark">5 profesionales</p>
              <p className="mt-1 text-sm text-muted-foreground">Contadores públicos matriculados y especialistas.</p>
            </div>
            <div className="rounded-xl border border-border bg-card/80 p-5 backdrop-blur-sm">
              <p className="eyebrow text-emerald">Atención</p>
              <p className="mt-1 font-heading text-3xl font-semibold tracking-tight text-emerald-dark">Personalizada</p>
              <p className="mt-1 text-sm text-muted-foreground">Trato cercano y respuesta ágil para cada cliente.</p>
            </div>
            <div className="rounded-xl border border-border bg-card/80 p-5 backdrop-blur-sm">
              <p className="eyebrow text-emerald">Especialización</p>
              <p className="mt-1 font-heading text-3xl font-semibold tracking-tight text-emerald-dark">+30 años</p>
              <p className="mt-1 text-sm text-muted-foreground">De experiencia en impuestos, contabilidad y laboral.</p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="servicios" className="bg-cream-deep/50 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <span className="eyebrow text-emerald">Servicios</span>
              <h2 className="heading-lg mt-3 text-balance text-emerald-dark">
                Todo lo que tu negocio necesita en un solo lugar.
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Desde la contabilidad diaria hasta la defensa ante organismos de
                control, acompañamos cada etapa de tu crecimiento.
              </p>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="group flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-emerald/10 text-emerald">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="heading-md text-emerald-dark">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-muted-foreground">
                    {service.description}
                  </p>
                  <a
                    href="#contacto"
                    className="mt-5 inline-flex items-center text-sm font-bold text-emerald transition-colors group-hover:text-emerald-dark"
                  >
                    Consultar
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="nosotros" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <div className="order-2 lg:order-1">
                <div className="rounded-2xl bg-emerald-dark p-8 text-cream sm:p-10">
                  <blockquote className="font-heading text-xl font-medium leading-relaxed sm:text-2xl">
                    “Nuestro compromiso es transformar la complejidad de los
                    números en decisiones claras para tu negocio.”
                  </blockquote>
                  <p className="mt-6 text-sm font-medium opacity-80">
                    — Estudio Ambrosini. Contadores Públicos.
                  </p>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <span className="eyebrow text-emerald">Nosotros</span>
                <h2 className="heading-lg mt-3 text-balance text-emerald-dark">
                  Experiencia que genera confianza.
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Somos un equipo de contadores públicos matriculados con
                  amplia trayectoria asesorando a empresas de distintos
                  rubros y tamaños. Trabajamos con herramientas actualizadas y
                  un enfoque proactivo para anticipar problemas y
                  oportunidades.
                </p>

                <ul className="mt-8 space-y-4">
                  {reasons.map((reason) => (
                    <li key={reason} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                      <span className="text-foreground">{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contacto" className="gradient-emerald px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <span className="eyebrow text-gold">Contacto</span>
                <h2 className="heading-lg mt-3 text-balance text-cream">
                  Hablemos de tu situación contable.
                </h2>
                <p className="mt-4 text-lg text-cream/80">
                  Agendá una consulta inicial gratuita y recibí un diagnóstico
                  claro sobre cómo podemos ayudarte.
                </p>

                <div className="mt-8 space-y-4">
                  <a
                    href="https://wa.me/542616550577"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-cream/90 transition-colors hover:text-cream"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10">
                      <MessageCircle className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-sm text-cream/60">WhatsApp</p>
                      <p className="font-medium">+54 9 261 655-0577</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-4 text-cream/90">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10">
                      <Phone className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-sm text-cream/60">Teléfono fijo</p>
                      <p className="font-medium">261-4295645</p>
                    </div>
                  </div>
                  <a
                    href="mailto:martin@estudioambrosini.net"
                    className="flex items-center gap-4 text-cream/90 transition-colors hover:text-cream"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10">
                      <Mail className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-sm text-cream/60">Email</p>
                      <p className="font-medium">martin@estudioambrosini.net</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-4 text-cream/90">
                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cream/10">
                      <MapPin className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-sm text-cream/60">Dirección</p>
                      <p className="font-medium">
                        Rioja 791, 1º piso — Oficinas 2 y 3, Ciudad, Mendoza
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 overflow-hidden rounded-2xl border border-cream/20 shadow-lg">
                  <iframe
                    title="Ubicación del Estudio Ambrosini"
                    src="https://www.google.com/maps?q=Estudio+Ambrosini,+Rioja+791,+Mendoza&z=17&output=embed"
                    width="100%"
                    height="260"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="block w-full"
                  />
                </div>
              </div>

              <div className="rounded-2xl bg-cream p-6 shadow-xl sm:p-8">
                <form className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-1 block text-sm font-medium text-emerald-dark"
                      >
                        Nombre
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Tu nombre"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-1 block text-sm font-medium text-emerald-dark"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="tu@email.com"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-1 block text-sm font-medium text-emerald-dark"
                    >
                      Asunto
                    </label>
                    <input
                      id="subject"
                      type="text"
                      placeholder="¿En qué podemos ayudarte?"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1 block text-sm font-medium text-emerald-dark"
                    >
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Contanos brevemente sobre tu consulta..."
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-emerald font-heading text-primary-foreground hover:bg-emerald-dark"
                  >
                    Enviar consulta
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    Respondemos en menos de 24 horas hábiles.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Compartir */}
      <section className="border-y border-border bg-cream-deep/30 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald/10 text-emerald">
              <Share2 className="h-5 w-5" />
            </div>
            <div>
              <p className="font-heading text-base font-semibold text-emerald-dark">
                ¿Te resultó útil? Compartí esta página
              </p>
              <p className="text-sm text-muted-foreground">
                Ayudá a otros a conocer el Estudio Ambrosini.
              </p>
            </div>
          </div>
          <ShareButtons
            siteUrl={SITE_URL}
            title="Estudio Ambrosini — Contadores Públicos en Mendoza"
            description="Más de 30 años acompañando empresas, profesionales y familias de Mendoza."
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
          <span className="font-heading text-xl font-semibold leading-none text-emerald-dark">
            Estudio Ambrosini<span className="text-gold">.</span>
            <span className="block text-xs font-medium tracking-wide text-emerald-dark/80">
              Contadores Públicos
            </span>
          </span>
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-emerald"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Estudio Ambrosini. Contadores Públicos. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
