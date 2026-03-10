import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { TrendingUp, Globe, DollarSign, ArrowRight, BarChart3, ShieldCheck, Landmark, Plane } from "lucide-react";
import officeImg from "@/assets/quotus-sala-operacoes.jpg";
import heroImg from "@/assets/quotus-escritorio-servicos.jpg";

const servicosInvestimentos = [
  {
    icon: TrendingUp,
    title: "Investimentos Brasil",
    desc: "Renda fixa, renda variável, fundos de investimento, previdência privada e muito mais. Nossa equipe de especialistas certificados analisa o cenário econômico e monta carteiras personalizadas de acordo com o seu perfil de investidor e objetivos financeiros.",
    items: ["Renda Fixa e Títulos Públicos", "Ações e Renda Variável", "Fundos de Investimento", "Previdência Privada", "COE e Produtos Estruturados"],
  },
  {
    icon: Globe,
    title: "Offshore / Conta Internacional",
    desc: "Diversifique seu patrimônio globalmente com contas internacionais e estruturas offshore. Oferecemos acesso a mercados internacionais com a segurança e expertise do Grupo Safra, presente em mais de 29 países.",
    items: ["Abertura de conta internacional", "Investimentos em mercados globais", "Estruturação offshore", "Proteção cambial", "Acesso a fundos internacionais"],
  },
  {
    icon: DollarSign,
    title: "Remessas Internacionais",
    desc: "Envie e receba valores do exterior com agilidade, segurança e as melhores taxas do mercado. Nosso time cuida de toda a operação de câmbio para que sua remessa seja processada com eficiência.",
    items: ["Envio e recebimento de dólares", "Transferências internacionais", "Operações de câmbio comercial", "Suporte documental completo"],
  },
  {
    icon: Plane,
    title: "Câmbio",
    desc: "Operações de câmbio para viagens, negócios e investimentos internacionais. Taxas competitivas e atendimento personalizado para todas as suas necessidades em moeda estrangeira.",
    items: ["Câmbio para viagens", "Câmbio comercial", "Hedge cambial", "Moedas diversas"],
  },
];

const Investimentos = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const servicosRef = useRef(null);
  const servicosInView = useInView(servicosRef, { once: true, margin: "-80px" });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative py-32 bg-gradient-navy overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${heroImg})` }} />
        <div className="container mx-auto px-6 relative z-10 text-center" ref={heroRef}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
            <h1 className="text-3xl sm:text-5xl font-display font-normal text-primary-foreground mb-6">
              Investimentos e Internacional
            </h1>
            <p className="font-body text-sm sm:text-lg text-primary-foreground/80 leading-relaxed max-w-3xl mx-auto">
              Soluções completas para investir no Brasil e no exterior. Nossos especialistas certificados trabalham para maximizar seus resultados com segurança e estratégia personalizada.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Números */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { valor: "180+", label: "Anos de história do Grupo Safra" },
              { valor: "29", label: "Países com presença global" },
              { valor: "R$ 1,8 tri", label: "Recursos sob gestão" },
              { valor: "4º", label: "Maior banco privado do Brasil" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <p className="text-3xl sm:text-4xl font-display font-normal text-primary mb-2">{item.valor}</p>
                <p className="font-body text-sm text-muted-foreground">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços detalhados */}
      <section className="py-24 bg-background" ref={servicosRef}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={servicosInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-display font-normal text-foreground mb-4">NOSSAS SOLUÇÕES EM INVESTIMENTOS</h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              Cada solução é pensada para atender às necessidades específicas do seu perfil e momento de vida.
            </p>
          </motion.div>

          <div className="space-y-20">
            {servicosInvestimentos.map((servico, i) => {
              const Icon = servico.icon;
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={servico.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6 }}
                  id={servico.title.toLowerCase().includes("offshore") ? "offshore" : servico.title.toLowerCase().includes("câmbio") ? "cambio" : undefined}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? "lg:direction-rtl" : ""}`}
                >
                  <div className={!isEven ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-display font-normal text-foreground">{servico.title}</h3>
                    </div>
                    <p className="font-body text-muted-foreground leading-relaxed mb-6">{servico.desc}</p>
                    <ul className="space-y-2">
                      {servico.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 font-body text-sm text-foreground">
                          <ArrowRight className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`bg-secondary rounded-lg p-8 ${!isEven ? "lg:order-1" : ""}`}>
                    <div className="flex items-center gap-4 mb-4">
                      <BarChart3 className="w-8 h-8 text-primary/40" />
                      <ShieldCheck className="w-8 h-8 text-primary/40" />
                      <Landmark className="w-8 h-8 text-primary/40" />
                    </div>
                    <p className="font-body text-sm text-muted-foreground italic">
                      "Profissionais experientes, para investidores exigentes. Nosso compromisso atravessa gerações."
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-navy text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h3 className="text-2xl sm:text-3xl font-display font-normal text-primary-foreground mb-4">
              Comece a investir com a Quotus
            </h3>
            <p className="font-body text-primary-foreground/70 mb-8 max-w-xl mx-auto">
              Agende uma reunião com nossos especialistas e descubra as melhores oportunidades para o seu perfil.
            </p>
            <a
              href="https://forms.gle/z5QQPmup7owknPC96"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4 border-2 border-primary-foreground text-primary-foreground font-body font-semibold text-sm tracking-widest uppercase rounded hover:bg-primary-foreground hover:text-foreground transition-all duration-300"
            >
              Fale com um especialista <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Investimentos;
