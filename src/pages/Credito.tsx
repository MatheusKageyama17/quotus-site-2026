import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Home, Car, Handshake, Receipt, ArrowRight, CheckCircle } from "lucide-react";
import heroImg from "@/assets/quotus-escritorio-servicos.jpg";

const creditoServicos = [
  {
    id: "imobiliario",
    icon: Home,
    title: "Crédito Imobiliário",
    desc: "Realize o sonho da casa própria ou expanda seu portfólio imobiliário com as melhores condições do mercado. Através do Banco Safra, oferecemos taxas diferenciadas, prazos flexíveis e um processo ágil de aprovação.",
    diferenciais: [
      "Taxas a partir de 9,49% a.a. + TR",
      "Financiamento de até 80% do imóvel",
      "Prazo de até 35 anos para pagamento",
      "Uso do FGTS para amortização",
      "Assessoria completa na documentação",
      "Análise de crédito em até 48h",
    ],
  },
  {
    id: "veicular",
    icon: Car,
    title: "Financiamento Veicular",
    desc: "Financie seu veículo novo ou seminovo com condições exclusivas. O Banco Safra oferece taxas competitivas e parcelas que cabem no seu orçamento, com aprovação rápida e processo simplificado.",
    diferenciais: [
      "Taxas competitivas do mercado",
      "Financiamento de até 100% do veículo",
      "Prazo de até 60 meses",
      "Aprovação em até 24 horas",
      "Refinanciamento disponível",
      "Veículos novos e seminovos",
    ],
  },
  {
    id: "recebiveis",
    icon: Receipt,
    title: "Antecipação de Recebíveis",
    desc: "Antecipe seus recebíveis e melhore o fluxo de caixa da sua empresa. Solução ideal para empresários que precisam de capital de giro de forma rápida e segura, com taxas competitivas e processo descomplicado.",
    diferenciais: [
      "Taxas diferenciadas para clientes Safra",
      "Análise rápida de crédito",
      "Antecipação de duplicatas e cheques",
      "Cartões de crédito e débito",
      "Contratos e notas fiscais",
      "Liberação em até 24 horas",
    ],
  },
  {
    id: "consorcios",
    icon: Handshake,
    title: "Consórcios",
    desc: "Planejamento inteligente para aquisição de bens. Com o consórcio Safra, você programa a compra do seu imóvel, veículo ou bem de alto valor com parcelas que se adequam ao seu planejamento financeiro.",
    diferenciais: [
      "Sem juros — apenas taxa de administração",
      "Consórcio imobiliário, veicular e de serviços",
      "Possibilidade de lance para antecipação",
      "Uso do FGTS em consórcios imobiliários",
      "Cartas de crédito de diversos valores",
      "Grupos com contemplação mensal",
    ],
  },
];

const Credito = () => {
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
              Crédito e Financiamentos
            </h1>
            <p className="font-body text-sm sm:text-lg text-primary-foreground/80 leading-relaxed max-w-3xl mx-auto">
              Soluções de crédito com as melhores condições do mercado, respaldadas pela solidez do Banco Safra. Do imóvel ao veículo, do consórcio à antecipação de recebíveis.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 space-y-24">
          {creditoServicos.map((servico, i) => {
            const Icon = servico.icon;
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={servico.id}
                id={servico.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-24"
              >
                <div className={`grid lg:grid-cols-2 gap-12 items-start`}>
                  <div className={!isEven ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-display font-normal text-foreground">{servico.title}</h2>
                    </div>
                    <p className="font-body text-muted-foreground leading-relaxed mb-8">{servico.desc}</p>
                    <a
                      href="https://forms.gle/z5QQPmup7owknPC96"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-body font-semibold text-sm tracking-wide rounded hover:bg-primary/90 transition-all"
                    >
                      Solicitar simulação <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>

                  <div className={`bg-secondary rounded-lg p-8 ${!isEven ? "lg:order-1" : ""}`}>
                    <h4 className="font-display text-lg text-foreground mb-6">Diferenciais</h4>
                    <ul className="space-y-3">
                      {servico.diferenciais.map((item) => (
                        <li key={item} className="flex items-start gap-3 font-body text-sm text-foreground">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {i < creditoServicos.length - 1 && <div className="mt-24 border-t border-border" />}
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-navy text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h3 className="text-2xl sm:text-3xl font-display font-normal text-primary-foreground mb-4">
              Encontre a melhor solução de crédito
            </h3>
            <p className="font-body text-primary-foreground/70 mb-8 max-w-xl mx-auto">
              Nossos especialistas analisam seu perfil e encontram as condições ideais para o seu momento.
            </p>
            <a
              href="https://forms.gle/z5QQPmup7owknPC96"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4 border-2 border-primary-foreground text-primary-foreground font-body font-semibold text-sm tracking-widest uppercase rounded hover:bg-primary-foreground hover:text-foreground transition-all duration-300"
            >
              Simular agora <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Credito;
