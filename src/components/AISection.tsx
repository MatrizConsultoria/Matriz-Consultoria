import { motion } from "framer-motion";
import { Wand2, Layers, Zap } from "lucide-react";

const features = [
  { icon: Wand2, title: "Tratamento Premium", desc: "Direção editorial treinada em fotografia premium e padrão corporativo de alta autoridade." },
  { icon: Layers, title: "Padrão de Marca", desc: "Consistência visual em todos os canais e pontos de contato." },
  { icon: Zap, title: "Entrega Rápida", desc: "Ativos visuais profissionais prontos em poucos dias." },
];

export function AISection() {
  return (
    <section id="curadoria" className="relative overflow-hidden px-6 py-24 lg:py-32">
      <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-serif text-4xl font-bold leading-tight md:text-5xl">
            Curadoria Visual para empresas que querem{" "}
            <span className="text-gradient-red italic">parecer grandes.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Elevamos o valor percebido de qualquer ativo visual, transformando fotos comuns em
            imagens de alta autoridade — escritórios, produtos, equipes e ambientes com padrão
            editorial, sem estúdio e sem fricção.
          </p>

          <div className="mt-10 space-y-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="flex items-start gap-4 rounded-xl border border-border bg-card/50 p-4 transition-smooth hover:border-primary/40"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <f.icon size={18} />
                </div>
                <div>
                  <h3 className="font-sans text-base font-semibold">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative hidden lg:block"
        >
          <div className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-gradient-cta p-8 shadow-card">
            <div className="absolute inset-8 flex items-end gap-2">
              {[18, 24, 22, 32, 38, 36, 48, 56, 62, 74, 86, 100].map((v, i, arr) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${v}%` }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className={`flex-1 rounded-t-sm ${
                    i === arr.length - 1
                      ? "bg-primary shadow-glow"
                      : i >= arr.length - 3
                        ? "bg-primary/70"
                        : "bg-primary/25"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
