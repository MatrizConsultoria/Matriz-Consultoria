import { Instagram, MessageCircle, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <img src={logo} alt="Matriz Consultoria" className="h-14 w-auto md:h-16" />
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Matriz Consultoria. Infraestrutura digital para marcas sérias.
        </p>
        <div className="flex items-center gap-4 text-muted-foreground">
          <a
            href="https://instagram.com/consultoria.matriz"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-smooth hover:text-primary"
            aria-label="Instagram @consultoria.matriz"
          >
            <Instagram size={18} />
          </a>
          <a
            href="https://wa.me/5543999582476"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-smooth hover:text-primary"
            aria-label="WhatsApp 55 43 99958-2476"
          >
            <MessageCircle size={18} />
          </a>
          <a
            href="mailto:matrizconsultoriaof@gmail.com"
            className="transition-smooth hover:text-primary"
            aria-label="Email matrizconsultoriaof@gmail.com"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
