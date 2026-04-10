import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import dragonHero from "@/assets/dragon-hero.png";

const roles = ["Head de Vendas", "Dev Fullstack", "Sales Engineer"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentRole.slice(0, text.length + 1));
          if (text.length === currentRole.length) {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          setText(currentRole.slice(0, text.length - 1));
          if (text.length === 0) {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-8 items-center pt-20 relative z-10">
        {/* Left side */}
        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-glass text-sm font-medium text-primary">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Axion Enterprise
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            Victor Manzano
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xl md:text-2xl font-mono"
          >
            <span className="text-gradient-glow">{text}</span>
            <span className="animate-pulse text-primary">|</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex items-center gap-4 mt-2"
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              Ver Projetos
            </a>
            <a
              href="https://wa.me/5511981661214"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-glass flex items-center justify-center hover:bg-primary/20 transition-colors"
              aria-label="WhatsApp"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-green-400">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Right side - Terminal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="terminal-bg rounded-xl border border-border/50 glow-border overflow-hidden"
        >
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border/30">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-4 text-xs font-mono text-muted-foreground">terminal — victor — 80x24</span>
          </div>
          <div className="p-6 font-mono text-sm space-y-4">
            <div>
              <span className="text-green-400">➜ </span>
              <span className="text-glow-cyan">~</span>
              <span className="text-foreground">whoami</span>
            </div>
            <div className="text-muted-foreground ml-4">Victor Manzano</div>
            
            <div>
              <span className="text-green-400">➜ </span>
              <span className="text-glow-cyan">~</span>
              <span className="text-foreground">role</span>
            </div>
            <div className="text-muted-foreground ml-4">Head de Vendas @ AxionEnterprise | Dev Fullstack</div>

            <div>
              <span className="text-green-400">➜ </span>
              <span className="text-glow-cyan">~</span>
              <span className="text-foreground">stack --list</span>
            </div>
            <div className="text-muted-foreground ml-4">React, Node, Python, Windsurf, OpenClaw, Gemini, Cloud</div>

            <div>
              <span className="text-green-400">➜ </span>
              <span className="text-glow-cyan">~</span>
              <span className="text-foreground">status</span>
            </div>
            <div className="ml-4">
              <span className="text-green-400 font-bold">READY </span>
              <span className="text-muted-foreground">Vendas + Código = Crescimento acelerado.</span>
            </div>
            <div className="text-foreground">_</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-muted-foreground"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
