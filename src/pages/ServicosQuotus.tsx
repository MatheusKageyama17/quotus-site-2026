import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import loungeImg from "@/assets/quotus-lounge-real.jpg";
import produtosImg from "@/assets/quotus-produtos-hero.jpg";
import {
  Receipt,
  Plane,
  DollarSign,
  Car,
  TrendingUp,
  Handshake,
  GitMerge,
  Globe,
  HeartPulse,
  Landmark,
  Scale,
  Building2,
  BarChart3,
  Home,
  ShieldCheck,
  Layers,
  Gavel,
  FolderOpen,
} from "lucide-react";

const produtos = [
  { label: "ANTECIPAÇÃO DE RECEBÍVEIS", icon: Receipt },
  { label: "CÂMBIO PARA VIAJAR", icon: Plane },
  { label: "ENVIO DA REMESSA DE DÓLAR", icon: DollarSign },
  { label: "FINANCIAMENTO VEICULAR", icon: Car },
  { label: "INVESTIMENTOS BRASIL", icon: TrendingUp },
  { label: "INTERMEDIAÇÃO DE NEGÓCIO", icon: Handshake },
  { label: "M&A (Fusões e Aquisições)", icon: GitMerge },
  { label: "OFFSHORE/CONTA INTERNACIONAL", icon: Globe },
  { label: "PLANOS DE SAÚDE", icon: HeartPulse },
  { label: "PLANEJAMENTO PATRIMONIAL", icon: Landmark },
  { label: "GOVERNANÇA CORPORATIVA", icon: Scale },
  { label: "INTERMEDIAÇÃO IMOBILIÁRIA", icon: Building2 },
  { label: "ANÁLISE DE VIABILIDADE EMPRESARIAL", icon: BarChart3 },
  { label: "CRÉDITO IMOBILIÁRIO", icon: Home },
  { label: "SEGUROS", icon: ShieldCheck },
  { label: "HOLDING", icon: Layers },
  { label: "RECUPERAÇÃO JUDICIAL", icon: Gavel },
  { label: "FCO/ PROJETOS", icon: FolderOpen },
];

const ServicosQuotus = () => {
  const produtosRef = useRef(null);
  const produtosInView = useInView(produtosRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero with lounge background + white card overlay */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${loungeImg})` }}
        />
        <div className="absolute inset-0 bg-foreground/30" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 bg-background/95 backdrop-blur-sm rounded-lg shadow-xl max-w-3xl mx-6 p-10 sm:p-14 text-center"
        >
          <h1 className="text-3xl sm:text-5xl font-display font-normal text-foreground mb-6">
            Experiência Quotus Investimentos
          </h1>
          <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed">
            O Grupo Quotus tem o orgulho de servir seus clientes com total dedicação e excelência, auxiliando indivíduos e famílias a atingirem suas metas financeiras por meio de soluções cuidadosamente elaboradas para cada cliente. Para nós, é um privilégio oferecer soluções personalizadas que atendem às suas necessidades únicas.
          </p>
        </motion.div>
      </section>

      {/* Produtos Section */}
      <section className="py-20 bg-background" ref={produtosRef}>
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={produtosInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-display font-normal text-foreground mb-12"
          >
            PRODUTOS
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={produtosInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src={produtosImg}
                alt="Produtos Quotus Investimentos"
                className="w-full rounded shadow-lg"
              />
            </motion.div>

            {/* Products list */}
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
              {produtos.map((produto, i) => {
                const Icon = produto.icon;
                return (
                  <motion.div
                    key={produto.label}
                    initial={{ opacity: 0, x: 10 }}
                    animate={produtosInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
                    className="flex items-center gap-3 py-2"
                  >
                    <Icon className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="font-display text-sm font-normal text-foreground">
                      {produto.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-navy text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl sm:text-3xl font-display font-normal text-primary-foreground mb-8">
              Conheça a nossa experiência Quotus
            </h3>
            <a
              href="https://forms.gle/z5QQPmup7owknPC96"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 border-2 border-primary-foreground text-primary-foreground font-body font-semibold text-sm tracking-widest uppercase rounded hover:bg-primary-foreground hover:text-foreground transition-all duration-300"
            >
              Agende uma visita
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicosQuotus;
