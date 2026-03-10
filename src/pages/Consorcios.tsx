import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Handshake, ArrowRight, CheckCircle } from "lucide-react";
import heroImg from "@/assets/quotus-escritorio-servicos.jpg";

const diferenciais = [
  "Sem juros — apenas taxa de administração",
  "Consórcio imobiliário, veicular e de serviços",
  "Possibilidade de lance para antecipação",
  "Uso do FGTS em consórcios imobiliários",
  "Cartas de crédito de diversos valores",
  "Grupos com contemplação mensal",
];

const tipos = [
  {
    titulo: "Consórcio Imobiliário",
    desc: "Planeje a compra do seu imóvel de forma inteligente, sem juros. Cartas de crédito de R$ 100 mil a R$ 1,5 milhão com prazos de até 200 meses.",
  },
  {
    titulo: "Consórcio Veicular",
    desc: "Adquira seu veículo novo ou seminovo com parcelas acessíveis. Cartas de crédito de R$ 30 mil a R$ 300 mil com contemplação mensal.",
  },
  {
    titulo: "Consórcio de Serviços",
    desc: "Invista em reformas, viagens, educação ou procedimentos estéticos. Cartas de crédito flexíveis para realizar seus projetos.",
  },
];

const Consorcios = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative py-32 bg-gradient-navy overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${heroImg})` }} />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-14 h-14 rounded bg-primary-foreground/10 flex items-center justify-center">
                <Handshake className="w-7 h-7 text-primary-foreground" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-5xl font-display font-normal text-primary-foreground mb-6">
              Consórcios
            </h1>
            <p className="font-body text-sm sm:text-lg text-primary-foreground/80 leading-relaxed max-w-3xl mx-auto">
              Planejamento inteligente para aquisição de bens sem juros, com a segurança e solidez do Banco Safra.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-2xl sm:text-3xl font-display font-normal text-foreground mb-6">
                Conquiste seus objetivos sem juros
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                O consórcio é uma das formas mais inteligentes de adquirir bens de alto valor. Diferente do financiamento tradicional, não há cobrança de juros — apenas uma taxa de administração. Com o consórcio Safra, você programa a compra do seu imóvel, veículo ou serviço com parcelas que se adequam ao seu planejamento financeiro.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-8">
                Nossa equipe de especialistas auxilia na escolha da melhor carta de crédito e estratégia de lances, maximizando suas chances de contemplação e garantindo o melhor custo-benefício.
              </p>
              <a
                href="https://forms.gle/z5QQPmup7owknPC96"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-body font-semibold text-sm tracking-wide rounded hover:bg-primary/90 transition-all"
              >
                Simular consórcio <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
              <div className="bg-secondary rounded-lg p-8">
                <h4 className="font-display text-lg text-foreground mb-6">Diferenciais</h4>
                <ul className="space-y-3">
                  {diferenciais.map((item) => (
                    <li key={item} className="flex items-start gap-3 font-body text-sm text-foreground">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tipos de consórcio */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <h3 className="text-2xl font-display font-normal text-foreground text-center mb-12">Modalidades de consórcio</h3>
          <div className="grid sm:grid-cols-3 gap-8">
            {tipos.map((tipo, i) => (
              <motion.div
                key={tipo.titulo}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-background rounded-lg p-6 border border-border"
              >
                <h4 className="font-display text-foreground mb-3">{tipo.titulo}</h4>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{tipo.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-navy text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h3 className="text-2xl sm:text-3xl font-display font-normal text-primary-foreground mb-4">
              Comece a planejar hoje
            </h3>
            <p className="font-body text-primary-foreground/70 mb-8 max-w-xl mx-auto">
              Fale com nossos especialistas e descubra o consórcio ideal para seus objetivos.
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

export default Consorcios;
