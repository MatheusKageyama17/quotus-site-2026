import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  TrendingUp,
  Home,
  Car,
  Handshake,
  DollarSign,
  ShieldCheck,
  ArrowRight,
  Play,
  FileText,
  Phone,
} from "lucide-react";
import heroBg from "@/assets/quotus-detalhe-mesa.png";
import quotusFachada from "@/assets/quotus-fachada.jpg";

const solucoes = [
  { icon: TrendingUp, label: "Investimentos", desc: "Investimentos Brasil, câmbio, offshore e remessas internacionais", href: "/investimentos" },
  { icon: Home, label: "Crédito Imobiliário", desc: "As melhores taxas do mercado", href: "/credito#imobiliario" },
  { icon: Car, label: "Crédito Veicular", desc: "Financiamento e refinanciamento", href: "/credito#veicular" },
  { icon: Handshake, label: "Consórcios", desc: "Planejamento inteligente", href: "/credito#consorcios" },
  { icon: ShieldCheck, label: "Planejamento Patrimonial", desc: "Proteção, sucessão, seguros e holding", href: "/planejamento-patrimonial" },
];

const midiaDestaques = [
  { tipo: "Entrevista", titulo: "Quotus no cenário de investimentos do Centro-Oeste", fonte: "TV Morena" },
  { tipo: "Podcast", titulo: "Planejamento patrimonial para o agronegócio", fonte: "AgroCast" },
  { tipo: "Matéria", titulo: "Os desafios do mercado financeiro em 2025", fonte: "Correio do Estado" },
];

const Index = () => {
  const solucoesRef = useRef(null);
  const sobreRef = useRef(null);
  const midiaRef = useRef(null);
  const insightsRef = useRef(null);
  const contatoRef = useRef(null);

  const solucoesInView = useInView(solucoesRef, { once: true, margin: "-80px" });
  const sobreInView = useInView(sobreRef, { once: true, margin: "-80px" });
  const midiaInView = useInView(midiaRef, { once: true, margin: "-80px" });
  const insightsInView = useInView(insightsRef, { once: true, margin: "-80px" });
  const contatoInView = useInView(contatoRef, { once: true, margin: "-80px" });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ── Hero ── */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroBg})` }} />
        <div className="absolute inset-0 bg-foreground/50" />
        <div className="relative container mx-auto px-6 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <h1 className="text-3xl sm:text-5xl font-display font-normal text-primary-foreground leading-tight mb-6">
              Profissionais experientes, para investidores exigentes.
            </h1>
            <p className="text-lg font-body text-primary-foreground/90 mb-10 leading-relaxed max-w-xl">
              Somos reconhecidos por cuidar do cliente e de sua família, com um compromisso que atravessa gerações.
            </p>
            <a
              href="https://forms.gle/z5QQPmup7owknPC96"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary-foreground text-primary-foreground font-body font-semibold text-sm tracking-widest uppercase rounded hover:bg-primary-foreground hover:text-foreground transition-all duration-300"
            >
              Fale com um especialista
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Soluções Financeiras ── */}
      <section className="py-24 bg-secondary" ref={solucoesRef}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={solucoesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-display font-normal text-foreground mb-4">
              NOSSAS SOLUÇÕES
            </h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              Conheça as soluções financeiras que preparamos para atender às suas necessidades.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {solucoes.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                animate={solucoesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  to={item.href}
                  className="group block p-8 bg-background rounded border border-border hover:border-primary hover:shadow-lg transition-all duration-300"
                >
                  <item.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-display text-lg text-foreground mb-2">{item.label}</h3>
                  <p className="font-body text-sm text-muted-foreground mb-4">{item.desc}</p>
                  <span className="font-body text-sm font-semibold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                    Saiba mais <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sobre a Quotus (resumo) ── */}
      <section className="py-24 bg-background" ref={sobreRef}>
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={sobreInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl sm:text-4xl font-display font-normal text-foreground mb-6">
                QUEM SOMOS
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                A Quotus Investimentos, parceira do Safra Invest, combina a tradição e solidez de um banco com mais de 180 anos de história com uma abordagem personalizada para cada cliente.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-8">
                Nossa equipe de especialistas certificados atua em diversas regiões do Brasil e no exterior, oferecendo soluções financeiras inovadoras e adaptadas ao seu perfil.
              </p>
              <Link
                to="/sobre-a-quotus"
                className="inline-flex items-center gap-2 font-body font-semibold text-sm text-primary hover:gap-3 transition-all"
              >
                Conheça nossa história <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={sobreInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <img
                src={quotusFachada}
                alt="Escritório Quotus Investimentos"
                className="w-full rounded shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Quotus na Mídia ── */}
      <section className="py-24 bg-gradient-navy text-primary-foreground" ref={midiaRef}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={midiaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-display font-normal text-primary-foreground mb-4">
              QUOTUS NA MÍDIA
            </h2>
            <p className="font-body text-primary-foreground/70">
              Nossas participações em entrevistas, podcasts e matérias especializadas.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {midiaDestaques.map((item, i) => (
              <motion.div
                key={item.titulo}
                initial={{ opacity: 0, y: 30 }}
                animate={midiaInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 border border-primary-foreground/20 rounded"
              >
                <span className="inline-flex items-center gap-1 font-body text-xs uppercase tracking-widest text-primary-foreground/60 mb-3">
                  <Play className="w-3 h-3" /> {item.tipo}
                </span>
                <h3 className="font-display text-lg text-primary-foreground mb-2">{item.titulo}</h3>
                <p className="font-body text-sm text-primary-foreground/60">{item.fonte}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/midia"
              className="inline-flex items-center gap-2 px-8 py-3 border border-primary-foreground/40 text-primary-foreground font-body font-medium text-sm tracking-wide rounded hover:bg-primary-foreground/10 transition-all"
            >
              Ver todas as publicações <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Insights ── */}
      <section className="py-24 bg-secondary" ref={insightsRef}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={insightsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-display font-normal text-foreground mb-4">
              INSIGHTS
            </h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              Artigos, análises e conteúdos sobre mercado, patrimônio e investimentos.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { titulo: "Perspectivas do mercado para 2025", tag: "Análise" },
              { titulo: "Como proteger seu patrimônio familiar", tag: "Patrimônio" },
              { titulo: "Oportunidades no agronegócio", tag: "Investimentos" },
            ].map((item, i) => (
              <motion.div
                key={item.titulo}
                initial={{ opacity: 0, y: 30 }}
                animate={insightsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 bg-background rounded border border-border hover:shadow-md transition-shadow"
              >
                <span className="inline-flex items-center gap-1 font-body text-xs uppercase tracking-widest text-muted-foreground mb-3">
                  <FileText className="w-3 h-3" /> {item.tag}
                </span>
                <h3 className="font-display text-lg text-foreground mb-4">{item.titulo}</h3>
                <span className="font-body text-sm font-semibold text-primary flex items-center gap-1">
                  Ler mais <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-body font-medium text-sm tracking-wide rounded hover:bg-primary/90 transition-all"
            >
              Ver todos os insights <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Contato / CTA Final ── */}
      <section className="py-24 bg-gradient-navy text-primary-foreground" ref={contatoRef}>
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={contatoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <Phone className="w-10 h-10 mx-auto mb-6 text-primary-foreground/60" />
            <h2 className="text-3xl sm:text-4xl font-display font-normal text-primary-foreground mb-4">
              Fale com um especialista
            </h2>
            <p className="font-body text-primary-foreground/80 mb-10 leading-relaxed">
              Nossa equipe está pronta para entender suas necessidades e apresentar as melhores soluções para o seu patrimônio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://forms.gle/z5QQPmup7owknPC96"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary-foreground text-primary-foreground font-body font-semibold text-sm tracking-widest uppercase rounded hover:bg-primary-foreground hover:text-foreground transition-all duration-300"
              >
                Agendar reunião
              </a>
              <Link
                to="/contato"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-primary-foreground/40 text-primary-foreground font-body font-medium text-sm tracking-wide rounded hover:bg-primary-foreground/10 transition-all"
              >
                Ver contatos <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
