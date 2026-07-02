import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  BookOpen,
  Building2,
  Handshake,
  HeartHandshake,
  Lock,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import logoAsset from "@/assets/ea-logo.png.asset.json";

export const Route = createFileRoute("/nosotros")({
  head: () => ({
    meta: [
      { title: "Sobre Nosotros — Estudio Ambrosini. Contadores Públicos." },
      {
        name: "description",
        content:
          "Conocé la historia del Estudio Ambrosini, fundado en 1992 por Ricardo Ambrosini. Equipo de contadores públicos matriculados en Mendoza, con más de 30 años de trayectoria.",
      },
      { property: "og:title", content: "Sobre Nosotros — Estudio Ambrosini" },
      {
        property: "og:description",
        content:
          "Más de 30 años acompañando empresas, profesionales y emprendedores en Mendoza con compromiso, ética y actualización permanente.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: SobreNosotros,
});

const team = [
  {
    name: "Ricardo Ambrosini",
    role: "Contador Público — Socio Fundador",
    bio: "Fundador del estudio en 1992. Más de tres décadas asesorando a empresas y familias de Mendoza, con una mirada estratégica y humana de la profesión.",
  },
  {
    name: "Martín Ambrosini",
    role: "Contador Público — Socio",
    bio: "Se incorporó al estudio en 2011. Continúa la tradición familiar con foco en planificación fiscal, impuestos y acompañamiento integral a pymes.",
  },
  {
    name: "Eli Angelili",
    role: "Contadora — Área Sueldos",
    bio: "Parte del equipo desde 2008. Responsable de la liquidación de sueldos y jornales, y de la gestión laboral y previsional de nuestros clientes.",
  },
  {
    name: "Eliana Weinstein",
    role: "Contadora — Área Sueldos",
    bio: "Se incorporó al estudio en 2025 para reforzar el área de liquidación de sueldos y acompañar el crecimiento del equipo.",
  },
  {
    name: "Leandro Escudero",
    role: "Contador Público",
    bio: "Integra el área contable e impositiva del estudio, con dedicación al análisis, la registración y las declaraciones juradas de cada cliente.",
  },
];

const values = [
  {
    icon: Handshake,
    title: "Compromiso",
    description:
      "Cada cliente es una prioridad. Nos involucramos con su realidad para ofrecer soluciones a medida.",
  },
  {
    icon: ShieldCheck,
    title: "Ética",
    description:
      "Trabajamos con integridad, honestidad y responsabilidad profesional en cada decisión que tomamos.",
  },
  {
    icon: Lock,
    title: "Confidencialidad",
    description:
      "Resguardamos la información de nuestros clientes con la máxima reserva y cuidado.",
  },
  {
    icon: HeartHandshake,
    title: "Cercanía",
    description:
      "Un trato humano y directo, con canales abiertos para consultas y acompañamiento constante.",
  },
  {
    icon: Sparkles,
    title: "Actualización permanente",
    description:
      "Formación continua para responder con precisión a un entorno normativo en constante cambio.",
  },
];

const certifications = [
  {
    icon: Award,
    title: "Consejo Profesional de Ciencias Económicas de Mendoza",
    description:
      "Nuestros contadores están matriculados en el CPCE de Mendoza, cumpliendo con los estándares profesionales exigidos.",
  },
  {
    icon: BookOpen,
    title: "Capacitación con Estudio Diez (Buenos Aires)",
    description:
      "Formación permanente en normativa impositiva, laboral y contable de la mano de uno de los referentes del país.",
  },
  {
    icon: Building2,
    title: "Trayectoria en Mendoza desde 1992",
    description:
      "Más de 30 años atendiendo a empresas, profesionales y familias de la provincia.",
  },
];

function SobreNosotros() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center" aria-label="Estudio Ambrosini - Inicio">
            <img
              src={logoAsset.url}
              alt="Estudio Ambrosini. Contadores Públicos."
              className="h-10 w-auto sm:h-12"
              width={1000}
              height={520}
            />
          </Link>
          <Button asChild variant="ghost" className="text-emerald-dark hover:bg-emerald-dark/5">
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al inicio
            </Link>
          </Button>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="px-4 pt-16 pb-12 sm:px-6 lg:px-8 lg:pt-24">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-sm font-medium text-emerald-dark">
              Sobre Nosotros
            </span>
            <h1 className="heading-xl mt-4 text-balance text-emerald-dark">
              Más de 30 años transformando números en decisiones.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Somos un estudio contable familiar de Mendoza que crece junto a
              sus clientes desde 1992. Combinamos experiencia, cercanía y
              actualización constante para acompañar cada etapa de tu negocio.
            </p>
          </div>
        </section>

        {/* Historia */}
        <section className="bg-cream-deep/50 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <span className="text-sm font-semibold uppercase tracking-wider text-emerald">
                Nuestra Historia
              </span>
              <h2 className="heading-lg mt-2 text-balance text-emerald-dark">
                Desde 1992 al servicio de nuestros clientes.
              </h2>
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground lg:col-span-3">
              <p>
                El Estudio Ambrosini nació en <strong className="text-emerald-dark">1992</strong>{" "}
                de la mano de su fundador,{" "}
                <strong className="text-emerald-dark">Ricardo Ambrosini</strong>, quien decidió
                poner su experiencia profesional al servicio de las empresas,
                profesionales y familias de Mendoza.
              </p>
              <p>
                En esos primeros años, el estudio funcionó como un proyecto
                familiar. Susana, madre de Martín, colaboraba activamente en
                las tareas del día a día junto a otra persona de confianza,
                sentando las bases del trato cercano y personalizado que
                todavía hoy nos define.
              </p>
              <p>
                En <strong className="text-emerald-dark">2008</strong> se incorporó{" "}
                <strong className="text-emerald-dark">Eli Angelili</strong> al área de
                liquidación de sueldos, permitiendo ofrecer a los clientes un
                servicio laboral completo y especializado.
              </p>
              <p>
                Poco después, en <strong className="text-emerald-dark">2011</strong>, se sumó al
                equipo <strong className="text-emerald-dark">Martín Ambrosini</strong> como
                contador público, dando continuidad a la mirada profesional del
                estudio y ampliando los servicios de asesoramiento impositivo y
                contable.
              </p>
              <p>
                En <strong className="text-emerald-dark">2025</strong> se incorporó{" "}
                <strong className="text-emerald-dark">Eliana Weinstein</strong> al área de
                sueldos, reforzando el equipo y acompañando el crecimiento del
                estudio.
              </p>
              <p>
                Hoy, más de tres décadas después, seguimos creciendo con el
                mismo espíritu: acompañar a cada cliente con compromiso,
                claridad y una visión estratégica de largo plazo.
              </p>
            </div>
          </div>
        </section>

        {/* Equipo */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-emerald">
                Nuestro Equipo
              </span>
              <h2 className="heading-lg mt-2 text-balance text-emerald-dark">
                Profesionales que hacen la diferencia.
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Un equipo consolidado, con años de trabajo compartido y una
                misma vocación de servicio.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="rounded-xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-emerald/10 font-heading text-lg font-bold text-emerald-dark">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join("")}
                    </div>
                    <div>
                      <h3 className="heading-md text-emerald-dark">{member.name}</h3>
                      <p className="text-sm font-medium text-emerald">{member.role}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-muted-foreground">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className="bg-cream-deep/50 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-emerald">
                Nuestros Valores
              </span>
              <h2 className="heading-lg mt-2 text-balance text-emerald-dark">
                Los principios que guían nuestro trabajo.
              </h2>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-emerald/10 text-emerald">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="heading-md text-emerald-dark">{value.title}</h3>
                  <p className="mt-3 text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certificaciones */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-emerald">
                Certificaciones y Formación
              </span>
              <h2 className="heading-lg mt-2 text-balance text-emerald-dark">
                Respaldo profesional y actualización continua.
              </h2>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="flex flex-col rounded-xl border border-gold/30 bg-gold/5 p-6"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gold/20 text-emerald-dark">
                    <cert.icon className="h-6 w-6" />
                  </div>
                  <h3 className="heading-md text-emerald-dark">{cert.title}</h3>
                  <p className="mt-3 text-muted-foreground">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="gradient-emerald px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="heading-lg text-balance text-cream">
              ¿Querés que trabajemos juntos?
            </h2>
            <p className="mt-4 text-lg text-cream/80">
              Escribinos y coordinemos una primera charla sin compromiso.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild className="bg-gold text-emerald-dark hover:bg-gold/90">
                <Link to="/" hash="contacto">
                  Ir a contacto
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-cream/40 bg-transparent text-cream hover:bg-cream/10 hover:text-cream"
              >
                <Link to="/">Volver al inicio</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-background px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
          <span className="font-heading text-xl font-semibold leading-none text-emerald-dark">
            Estudio Ambrosini<span className="text-gold">.</span>
            <span className="block text-xs font-medium tracking-wide text-emerald-dark/80">
              Contadores Públicos
            </span>
          </span>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Estudio Ambrosini. Contadores Públicos. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
