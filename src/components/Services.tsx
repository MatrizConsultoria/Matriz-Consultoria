import { motion } from "framer-motion";
import { MapPin, MessageSquare, Code2, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: MapPin,
    title: "Geolocalização Estratégica",
    desc: "SEO local de alta performance no Google Maps. Sua empresa encontrada por clientes prontos para contratar — em qualquer segmento, comércio ou prestação de serviço.",
    bullets: ["Perfil otimizado para conversão", "Posts e fotos profissionais", "Gestão de avaliações e autoridade"],
  },
  {
    icon: MessageSquare,
    title: "Otimização de Fluxo de Vendas",
    desc: "WhatsApp Business estruturado para empresas que precisam de agilidade: catálogo, automações e jornada de atendimento desenhada para fechar mais negócios.",
    bullets: ["Catálogo profissional", "Automações e respostas rápidas", "Funis e etiquetas de venda"],
  },
  {
    icon: Code2,
    title: "Credibilidade e Conversão",
    desc: "Landing pages em código puro para negócios B2B e B2C. Performance máxima, design premium e arquitetura focada em transformar visitas em receita.",
    bullets: ["Código limpo (sem builders)", "100/100 PageSpeed", "Design sob medida"],
  },
];

export function Services() {
  return (
    <section id="servicos" className="relative border-y border-border bg-card/30 px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-3xl"
        >
          <p className="mb-3 text-xs uppercase tracking-widest text-primary">Serviços</p>
          <h2 className="font-serif text-4xl font-bold leading-tight md:text-5xl">
            Três pilares para uma{" "}
            <span className="text-gradient-red italic">base digital sólida.</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative flex flex-col rounded-2xl border border-border bg-background p-8 transition-smooth hover:border-primary/50 hover:shadow-glow"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary transition-smooth group-hover:scale-110">
                <s.icon size={22} />
              </div>
              <h3 className="font-serif text-2xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <ul className="mt-6 space-y-2 border-t border-border pt-6 text-sm text-foreground/80">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-primary" /> {b}
                  </li>
                ))}
              </ul>
              <ArrowUpRight
                size={18}
                className="absolute right-6 top-6 text-muted-foreground transition-smooth group-hover:text-primary group-hover:rotate-12"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
