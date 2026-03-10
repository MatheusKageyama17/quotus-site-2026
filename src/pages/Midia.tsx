import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Play, Newspaper, Mic, Tv, ArrowRight } from "lucide-react";

const aparicoes = [
  {
    tipo: "Entrevista",
    icon: Tv,
    titulo: "Quotus Investimentos: o cenário de investimentos no Centro-Oeste",
    fonte: "TV Morena / Globo",
    data: "Março 2025",
    desc: "Nossos especialistas analisam o crescimento do mercado financeiro no Centro-Oeste e as oportunidades para investidores da região.",
  },
  {
    tipo: "Podcast",
    icon: Mic,
    titulo: "Planejamento patrimonial para o agronegócio",
    fonte: "AgroCast MS",
    data: "Fevereiro 2025",
    desc: "Participação especial sobre estratégias de proteção patrimonial e sucessão para produtores rurais e empresários do agronegócio.",
  },
  {
    tipo: "Matéria",
    icon: Newspaper,
    titulo: "Os desafios do mercado financeiro em 2025",
    fonte: "Correio do Estado",
    data: "Janeiro 2025",
    desc: "Análise sobre os principais desafios e oportunidades do mercado financeiro brasileiro no novo ano.",
  },
  {
    tipo: "Entrevista",
    icon: Tv,
    titulo: "Crescimento da Quotus no Paraná",
    fonte: "RPC Umuarama",
    data: "Dezembro 2024",
    desc: "Entrevista sobre a expansão da Quotus Investimentos na região noroeste do Paraná e o atendimento personalizado ao cliente.",
  },
  {
    tipo: "Podcast",
    icon: Mic,
    titulo: "Investimentos offshore: diversificação global",
    fonte: "Safra Talks",
    data: "Novembro 2024",
    desc: "Conversa sobre como diversificar investimentos internacionalmente através da plataforma Safra Invest.",
  },
  {
    tipo: "Matéria",
    icon: Newspaper,
    titulo: "Banco Safra amplia atuação no Centro-Oeste através de agentes autônomos",
    fonte: "Valor Econômico",
    data: "Outubro 2024",
    desc: "Reportagem sobre a estratégia do Banco Safra de expandir sua presença regional através de escritórios como a Quotus.",
  },
];

const Midia = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-navy text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="text-3xl sm:text-5xl font-display font-normal text-primary-foreground mb-6">Quotus na Mídia</h1>
            <p className="font-body text-sm sm:text-lg text-primary-foreground/80 leading-relaxed max-w-3xl mx-auto">
              Acompanhe nossas participações em entrevistas, podcasts e matérias especializadas sobre o mercado financeiro.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Aparições */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="space-y-8">
            {aparicoes.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.titulo}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="group grid lg:grid-cols-[auto_1fr] gap-6 p-6 bg-secondary rounded border border-border hover:border-primary transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="lg:hidden">
                      <span className="font-body text-xs uppercase tracking-widest text-muted-foreground">{item.tipo} • {item.data}</span>
                    </div>
                  </div>
                  <div>
                    <span className="hidden lg:block font-body text-xs uppercase tracking-widest text-muted-foreground mb-2">{item.tipo} • {item.data}</span>
                    <h3 className="font-display text-xl text-foreground mb-2">{item.titulo}</h3>
                    <p className="font-body text-sm text-primary mb-2">{item.fonte}</p>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Midia;
