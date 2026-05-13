import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24">
      <div
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/70 via-background/90 to-background" />
      <div className="absolute inset-0 -z-10 bg-gradient-hero" />

      <div className="mx-auto max-w-5xl px-6 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-balance font-serif text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl"
        >
          Sua marca com{" "}
          <span className="text-gradient-red italic">o valor que ela realmente merece.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-8 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl"
        >
          Para o empresário que busca solidez digital: estruturamos a base que sustenta autoridade,
          escala e faturamento — do Google ao WhatsApp, do design à conversão.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#contato"
            className="group inline-flex items-center gap-2 rounded-md bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-smooth hover:shadow-glow-strong hover:bg-primary-glow"
          >
            Solicitar Diagnóstico Gratuito
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#servicos"
            className="text-sm font-medium text-muted-foreground transition-smooth hover:text-foreground"
          >
            Ver serviços →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
