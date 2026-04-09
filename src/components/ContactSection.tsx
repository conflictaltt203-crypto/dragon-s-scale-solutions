import { motion } from "framer-motion";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(`Olá Victor! Me chamo ${formData.name}. ${formData.message}`);
    window.open(`https://wa.me/5511981661214?text=${msg}`, "_blank");
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          Vamos Conversar?
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-muted-foreground">
              Tem uma ideia de projeto ou quer apenas bater um papo? Sinta-se à vontade para entrar em contato.
            </p>
            <div className="space-y-4">
              <div className="bg-glass rounded-xl p-4">
                <h4 className="text-sm font-semibold text-primary mb-1">Email</h4>
                <a href="mailto:manzasmail3@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
                  manzasmail3@gmail.com
                </a>
              </div>
              <div className="bg-glass rounded-xl p-4">
                <h4 className="text-sm font-semibold text-primary mb-1">WhatsApp</h4>
                <a
                  href="https://wa.me/5511981661214"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  (11) 98166-1214
                </a>
              </div>
              <div className="bg-glass rounded-xl p-4">
                <h4 className="text-sm font-semibold text-primary mb-1">Localização</h4>
                <span className="text-muted-foreground">São Paulo, Brasil</span>
              </div>
            </div>

            {/* Terminal easter egg */}
            <div className="terminal-bg rounded-xl border border-border/30 p-4 font-mono text-sm">
              <span className="text-muted-foreground">$ echo "</span>
              <span className="text-foreground">Vamos construir algo incrível juntos!</span>
              <span className="text-muted-foreground">"</span>
              <div className="text-green-400 mt-1">Vamos construir algo incrível juntos!</div>
              <div className="text-foreground mt-1">_</div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <label className="text-sm font-medium text-muted-foreground mb-1.5 block">Nome</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground mb-1.5 block">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground mb-1.5 block">Mensagem</label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              Enviar via WhatsApp
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
