import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Services } from "@/components/Services";
import { AISection } from "@/components/AISection";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Matriz Consultoria — Infraestrutura digital para marcas sérias" },
      {
        name: "description",
        content:
          "Matriz Consultoria estrutura a base digital da sua empresa: Google Meu Negócio, WhatsApp Business, Landing Pages e Direção de Imagem editorial.",
      },
      { property: "og:title", content: "Matriz Consultoria" },
      {
        property: "og:description",
        content:
          "Infraestrutura digital premium: SEO local, WhatsApp Business, Landing Pages e Engenharia de Imagem para empresas que buscam autoridade.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <BeforeAfter />
      <AISection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
