import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Briefcase, Users, TrendingUp, Award, Send } from "lucide-react";
import quotusSafraBranco from "@/assets/quotus-safra-branco.png";
import escritorio from "@/assets/quotus-escritorio-servicos.jpg";

const benefits = [
  {
    icon: Briefcase,
    title: "Carreira no Mercado Financeiro",
    description: "Oportunidade de atuar em uma das mais respeitadas empresas do setor de investimentos no Brasil.",
  },
  {
    icon: Users,
    title: "Equipe de Alto Nível",
    description: "Trabalhe ao lado de profissionais certificados e reconhecidos pelo mercado.",
  },
  {
    icon: TrendingUp,
    title: "Crescimento Profissional",
    description: "Desenvolvimento contínuo com acesso a treinamentos e certificações do Banco Safra.",
  },
  {
    icon: Award,
    title: "Selo Safra de Especialista",
    description: "Possibilidade de conquistar o selo de especialista, uma chancela concedida a poucos profissionais selecionados.",
  },
];

const openPositions = [
  {
    title: "Assessor de Investimentos",
    location: "Campo Grande - MS / Umuarama - PR",
    type: "Tempo integral",
    description: "Buscamos profissionais com certificação Ancord para atuar na assessoria de investimentos junto a clientes de alta renda.",
  },
  {
    title: "Analista Financeiro",
    location: "Campo Grande - MS",
    type: "Tempo integral",
    description: "Vaga para analista com experiência em análise de mercado e produtos financeiros.",
  },
  {
    title: "Assistente Administrativo",
    location: "Umuarama - PR",
    type: "Tempo integral",
    description: "Oportunidade para profissional organizado e proativo para suporte às operações do escritório.",
  },
];

const TrabalheConosco = () => {
  const benefitsRef = useRef(null);
  const positionsRef = useRef(null);
  const benefitsInView = useInView(benefitsRef, { once: true, margin: "-100px" });
  const positionsInView = useInView(positionsRef, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", position: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:kerolain@quotus.com.br?subject=Candidatura - ${formData.position || 'Trabalhe Conosco'}&body=Nome: ${formData.name}%0AEmail: ${formData.email}%0ATelefone: ${formData.phone}%0AVaga: ${formData.position}%0AMensagem: ${formData.message}`;
    window.open(mailtoLink);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${escritorio})` }} />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="relative container mx-auto px-6 pt-32 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-normal text-primary-foreground mb-6">
              Trabalhe Conosco
            </h1>
            <p className="text-lg font-body text-primary-foreground/80 max-w-2xl mx-auto">
              Faça parte de uma equipe que transforma o mercado financeiro com excelência, dedicação e compromisso com o futuro dos nossos clientes.
            </p>
            <img src={quotusSafraBranco} alt="Quotus Investimentos" className="h-8 mx-auto mt-8 object-contain" />
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-secondary" ref={benefitsRef}>
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl font-display font-normal text-foreground text-center mb-12"
          >
            Por que trabalhar na Quotus?
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 bg-card rounded border border-border hover:shadow-lg transition-all duration-300"
              >
                <benefit.icon className="w-10 h-10 text-accent mb-4" />
                <h3 className="font-display text-lg font-normal text-foreground mb-2">{benefit.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-background" ref={positionsRef}>
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={positionsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl font-display font-normal text-foreground text-center mb-12"
          >
            Vagas Abertas
          </motion.h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {openPositions.map((position, i) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 20 }}
                animate={positionsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="p-6 bg-card rounded border border-border hover:border-accent/30 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <h3 className="font-display text-xl font-normal text-foreground">{position.title}</h3>
                  <span className="font-body text-xs text-accent font-semibold uppercase tracking-wider mt-1 sm:mt-0">{position.type}</span>
                </div>
                <p className="font-body text-sm text-muted-foreground mb-2">{position.location}</p>
                <p className="font-body text-sm text-muted-foreground">{position.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-gradient-navy text-primary-foreground">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-display font-normal text-primary-foreground text-center mb-4">
            Envie seu currículo
          </h2>
          <p className="font-body text-primary-foreground/70 text-center mb-12 max-w-xl mx-auto">
            Interessado em fazer parte da nossa equipe? Preencha o formulário abaixo ou envie seu currículo para kerolain@quotus.com.br
          </p>

          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Nome completo"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded font-body text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary-foreground/50"
              />
              <input
                type="email"
                placeholder="E-mail"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded font-body text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary-foreground/50"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <input
                type="tel"
                placeholder="Telefone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded font-body text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary-foreground/50"
              />
              <select
                value={formData.position}
                onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded font-body text-sm text-primary-foreground focus:outline-none focus:border-primary-foreground/50"
              >
                <option value="" className="text-foreground">Selecione a vaga</option>
                {openPositions.map(p => (
                  <option key={p.title} value={p.title} className="text-foreground">{p.title}</option>
                ))}
                <option value="Outra" className="text-foreground">Outra</option>
              </select>
            </div>
            <textarea
              placeholder="Mensagem (opcional)"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded font-body text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary-foreground/50 resize-none"
            />
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-10 py-4 border-2 border-primary-foreground text-primary-foreground font-body font-semibold text-sm tracking-widest uppercase rounded hover:bg-primary-foreground hover:text-foreground transition-all duration-300"
              >
                <Send className="w-4 h-4" />
                Enviar candidatura
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TrabalheConosco;
