import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Landmark, Layers, ShieldCheck, Building2, Scale, BarChart3,
  Gavel, FolderOpen, Handshake, GitMerge, HeartPulse, ArrowRight, CheckCircle,
} from "lucide-react";
import heroImg from "@/assets/quotus-sala-reuniao-real.jpg";

const categorias = [
  {
    titulo: "Planejamento Patrimonial e Sucessório",
    icon: Landmark,
    desc: "Proteja e organize seu patrimônio com estratégias personalizadas de planejamento sucessório e estruturação patrimonial. Garantimos a tranquilidade da sua família e a continuidade do seu legado.",
    servicos: [
      { icon: Landmark, label: "Planejamento Patrimonial", desc: "Estruturação completa do patrimônio com foco em proteção e crescimento sustentável." },
      { icon: Layers, label: "Estrutura Patrimonial / Holding", desc: "Criação de holdings familiares e empresariais para otimização tributária e proteção de ativos." },
    ],
  },
  {
    titulo: "Seguros e Benefícios",
    icon: ShieldCheck,
    desc: "Proteção completa para você, sua família e seu patrimônio. Trabalhamos com as melhores seguradoras do mercado para oferecer coberturas sob medida.",
    servicos: [
      { icon: ShieldCheck, label: "Seguros", desc: "Seguros de vida, patrimonial, empresarial e responsabilidade civil com coberturas personalizadas." },
      { icon: HeartPulse, label: "Planos de Saúde", desc: "Planos de saúde individuais e empresariais com as melhores operadoras do mercado." },
    ],
  },
  {
    titulo: "Imobiliário",
    icon: Building2,
    desc: "Soluções completas para o mercado imobiliário, desde a intermediação de compra e venda até a estruturação de projetos de desenvolvimento.",
    servicos: [
      { icon: Building2, label: "Intermediação Imobiliária", desc: "Assessoria completa na compra, venda e locação de imóveis comerciais e residenciais." },
    ],
  },
  {
    titulo: "Projetos e Soluções Empresariais",
    icon: Scale,
    desc: "Soluções estratégicas para empresas de todos os portes. Da governança corporativa à recuperação judicial, oferecemos expertise para cada desafio empresarial.",
    servicos: [
      { icon: FolderOpen, label: "Estruturação de Projetos", desc: "Desenvolvimento e estruturação de projetos empresariais com análise de viabilidade." },
      { icon: FolderOpen, label: "FCO / Projetos de Financiamento", desc: "Acesso ao Fundo Constitucional do Centro-Oeste e outras linhas de financiamento especiais." },
      { icon: Handshake, label: "Intermediação de Negócios", desc: "Facilitação de negócios e parcerias estratégicas entre empresas." },
      { icon: GitMerge, label: "M&A (Fusões e Aquisições)", desc: "Assessoria completa em processos de fusões, aquisições e reestruturações societárias." },
      { icon: Scale, label: "Governança Corporativa", desc: "Implementação de práticas de governança para fortalecer a gestão e a transparência." },
      { icon: BarChart3, label: "Análise de Viabilidade Empresarial", desc: "Estudos detalhados de viabilidade econômica e financeira para novos empreendimentos." },
      { icon: Gavel, label: "Recuperação Judicial", desc: "Assessoria especializada em processos de recuperação judicial e reestruturação financeira." },
    ],
  },
];

const PlanejamentoPatrimonial = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative py-32 bg-gradient-navy overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${heroImg})` }} />
        <div className="container mx-auto px-6 relative z-10 text-center" ref={heroRef}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
            <h1 className="text-3xl sm:text-5xl font-display font-normal text-primary-foreground mb-6">
              Planejamento Patrimonial
            </h1>
            <p className="font-body text-sm sm:text-lg text-primary-foreground/80 leading-relaxed max-w-3xl mx-auto">
              Proteção, sucessão, seguros e soluções empresariais. Cuidamos do seu patrimônio com a mesma dedicação que você teve para construí-lo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categorias */}
      {categorias.map((cat, catIdx) => {
        const CatIcon = cat.icon;
        const bgClass = catIdx % 2 === 0 ? "bg-background" : "bg-secondary";
        return (
          <section key={cat.titulo} className={`py-24 ${bgClass}`}>
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center">
                    <CatIcon className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-display font-normal text-foreground">{cat.titulo}</h2>
                </div>
                <p className="font-body text-muted-foreground leading-relaxed max-w-3xl">{cat.desc}</p>
              </motion.div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.servicos.map((servico, i) => {
                  const Icon = servico.icon;
                  return (
                    <motion.div
                      key={servico.label}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.08 }}
                      className={`p-6 rounded border border-border ${catIdx % 2 === 0 ? "bg-secondary" : "bg-background"}`}
                    >
                      <Icon className="w-8 h-8 text-primary mb-4" />
                      <h3 className="font-display text-lg text-foreground mb-2">{servico.label}</h3>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">{servico.desc}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="py-20 bg-gradient-navy text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h3 className="text-2xl sm:text-3xl font-display font-normal text-primary-foreground mb-4">
              Proteja o que você construiu
            </h3>
            <p className="font-body text-primary-foreground/70 mb-8 max-w-xl mx-auto">
              Agende uma consultoria para estruturar a proteção e a sucessão do seu patrimônio.
            </p>
            <a
              href="https://forms.gle/z5QQPmup7owknPC96"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4 border-2 border-primary-foreground text-primary-foreground font-body font-semibold text-sm tracking-widest uppercase rounded hover:bg-primary-foreground hover:text-foreground transition-all duration-300"
            >
              Agendar consultoria <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PlanejamentoPatrimonial;
