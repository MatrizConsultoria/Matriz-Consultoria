import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Sparkles } from "lucide-react";
import before from "@/assets/before-amateur.jpg";
import after from "@/assets/after-premium.jpg";

export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const move = (clientX: number) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, x)));
  };

  return (
    <section id="transformacao" className="relative px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <h2 className="font-serif text-4xl font-bold leading-tight md:text-5xl">
            A diferença entre <span className="text-gradient-red italic">amador</span> e{" "}
            <span className="text-gradient-red italic">premium</span>.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Direção de imagem aplicada à sua marca. Arraste o controle para ver a transformação.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          ref={ref}
          className="relative aspect-[4/5] w-full select-none overflow-hidden rounded-2xl border border-border shadow-card md:aspect-[16/10]"
          onMouseMove={(e) => dragging.current && move(e.clientX)}
          onMouseDown={(e) => { dragging.current = true; move(e.clientX); }}
          onMouseUp={() => (dragging.current = false)}
          onMouseLeave={() => (dragging.current = false)}
          onTouchMove={(e) => move(e.touches[0].clientX)}
        >
          <img
            src={after}
            alt="Foto premium tratada com direção editorial"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          >
            <img
              src={before}
              alt="Foto amadora original"
              className="h-full w-full object-cover object-bottom"
              loading="lazy"
            />
          </div>

          <div
            className="pointer-events-none absolute left-4 top-4 rounded-md bg-background/80 px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground backdrop-blur transition-opacity duration-300"
            style={{ opacity: Math.max(0, Math.min(1, (pos - 5) / 15)) }}
          >
            Antes
          </div>
          <div
            className="pointer-events-none absolute right-4 top-4 rounded-md bg-primary px-3 py-1 text-xs uppercase tracking-widest text-primary-foreground transition-opacity duration-300"
            style={{ opacity: Math.max(0, Math.min(1, (95 - pos) / 15)) }}
          >
            Depois
          </div>

          <div
            className="absolute inset-y-0 w-0.5 bg-primary shadow-glow"
            style={{ left: `${pos}%` }}
          >
            <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-glow-strong">
              <span className="text-lg">⇆</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
