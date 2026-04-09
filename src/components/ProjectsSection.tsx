import { motion } from "framer-motion";

const projects = [
  {
    title: "AXION PAY",
    description: "Gateway com UX premium, checkout otimizado e monitoramento operacional em tempo real para Pix e Cartão.",
    image: "https://devbarreto.axionenterprise.cloud/assets/axion-pay-prod.png",
    demo: "https://pay.axionenterprise.cloud/",
    tags: ["Node.js", "React", "Vite", "Motion Design", "Analytics"],
  },
  {
    title: "AXION IA PANEL",
    description: "Centro de controle para copilotos, prompts e saúde operacional de IA com fluxo completo de administração.",
    image: "https://devbarreto.axionenterprise.cloud/assets/axion-ai-prod.png",
    demo: "https://ai.axionenterprise.cloud/",
    tags: ["React", "TypeScript", "Framer Motion", "Express", "Control Plane"],
  },
  {
    title: "AXION FLOW",
    description: "Plataforma de growth orientada por IA com estrutura de campanha, copy, automação e governança de funil.",
    image: "https://devbarreto.axionenterprise.cloud/assets/axion-flow-prod.png",
    demo: "https://flow.axionenterprise.cloud/",
    tags: ["React", "Vite", "Framer Motion", "Express", "CRM Automation"],
  },
  {
    title: "AXION DATA",
    description: "Landing e área de produto para intelligence data API, com rotas separadas, copy comercial e acesso administrativo.",
    image: "https://devbarreto.axionenterprise.cloud/assets/axion-data-prod.png",
    demo: "https://data.axionenterprise.cloud/",
    tags: ["Express", "Static Landing", "Motion CSS", "Auth", "API Health"],
  },
  {
    title: "AXION DEV",
    description: "Landing premium para squads de software com home, login e catálogo de produtos para download e operação.",
    image: "https://devbarreto.axionenterprise.cloud/assets/axion-pay-main.png",
    demo: "https://dev.axionenterprise.cloud/",
    tags: ["React", "Framer Motion", "Express", "Lead API", "SEO"],
  },
  {
    title: "AXION PDV SYSTEM",
    description: "Sistema de PDV desktop com foco em velocidade operacional, fluxo de pedidos e padrão visual para loja real.",
    image: "https://devbarreto.axionenterprise.cloud/assets/anne-tom.png",
    demo: "https://pdv.axionenterprise.cloud/",
    tags: ["Electron", "React", "Node.js", "Observabilidade", "UX Operacional"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Meus Projetos
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground mb-12"
        >
          Projetos recentes que demonstram habilidades técnicas e criativas.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              className="bg-glass rounded-xl overflow-hidden group hover:border-primary/40 transition-all"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  Ver Demo
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
