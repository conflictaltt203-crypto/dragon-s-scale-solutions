import { motion } from "framer-motion";

const skills = [
  {
    title: "Vendas & Growth",
    description: "Estratégias de aquisição, gestão de pipeline e otimização de funis para receita previsível.",
  },
  {
    title: "Full-Stack Development",
    description: "React, Node.js, TypeScript, Python e arquiteturas cloud modernas.",
  },
  {
    title: "IA & Automação",
    description: "Windsurf, OpenClaw, Gemini e ferramentas de IA para automatizar processos.",
  },
  {
    title: "Visão de Produto",
    description: "Transformo ideias em operações reais com foco em ROI e escalabilidade.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-8"
        >
          Sobre Mim
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground text-lg leading-relaxed mb-12 max-w-3xl"
        >
          Sou Victor Manzano, Head de Vendas e Dev Fullstack na Axion Enterprise. Especialista em estruturar e escalar operações comerciais de alta performance, liderando estratégias de aquisição, gestão de pipeline e otimização de funis para gerar receita previsível e sustentável. Uno essa visão comercial à engenharia de software e à inteligência artificial, dominando stacks modernas e ferramentas como Windsurf, OpenClaw, Gemini e arquiteturas cloud para automatizar processos de vendas, acelerar ciclos de fechamento e entregar soluções técnicas com foco em resultados reais e crescimento acelerado.
        </motion.p>

        <div className="grid sm:grid-cols-2 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              className="bg-glass rounded-xl p-6 glow-border hover:border-primary/40 transition-colors"
            >
              <h3 className="text-lg font-semibold mb-2 text-gradient-primary inline-block">{skill.title}</h3>
              <p className="text-muted-foreground text-sm">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
