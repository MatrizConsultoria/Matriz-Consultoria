import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5543999582476?text=Quero%20um%20diagn%C3%B3stico%20gratuito";

export function FinalCTA() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden px-6 py-28 lg:py-40"
      style={{
        background:
          "linear-gradient(135deg, oklch(0 0 0) 0%, oklch(0.12 0.08 25) 60%, oklch(0.28 0.18 25) 100%)",
      }}
    >
      <div className="absolute inset-0 -z-0 opacity-30 [background:radial-gradient(circle_at_30%_50%,oklch(0.58_0.23_25_/_0.4),transparent_60%)]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto max-w-4xl text-center"
      >
        <p className="mb-4 text-xs uppercase tracking-widest text-primary">Próximo passo</p>
        <h2 className="font-serif text-4xl font-bold leading-[1.1] md:text-6xl">
          Pronto para estruturar o{" "}
          <span className="italic">faturamento da sua empresa?</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-foreground/70">
          Em 30 minutos, mapeamos os pontos cegos da sua presença digital — sem custo, sem compromisso.
        </p>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-10 inline-flex items-center gap-3 rounded-lg bg-primary px-10 py-5 text-base font-semibold text-primary-foreground shadow-glow transition-smooth hover:bg-primary-glow hover:shadow-glow-strong md:text-lg"
        >
          <MessageCircle size={22} />
          Solicitar Diagnóstico Gratuito
        </a>

        <p className="mt-6 text-xs text-foreground/50">
          Resposta em até 1 hora útil • Atendimento humano
        </p>
      </motion.div>
    </section>
  );
}
