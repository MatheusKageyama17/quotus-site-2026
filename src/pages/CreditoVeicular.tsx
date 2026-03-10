import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Car, ArrowRight, CheckCircle } from "lucide-react";
import heroImg from "@/assets/quotus-escritorio-servicos.jpg";

const diferenciais = [
  "Taxas competitivas do mercado",
  "Financiamento de até 100% do veículo",
  "Prazo de até 60 meses",
  "Aprovação em até 24 horas",
  "Refinanciamento disponível",
  "Veículos novos e seminovos",
];

const etapas = [
  { titulo: "Escolha o veículo", desc: "Defina o modelo desejado — novo ou seminovo — e nos envie as informações para simulação." },
  { titulo: "Simulação personalizada", desc: "Montamos as melhores condições de financiamento com taxas exclusivas do Banco Safra." },
  { titulo: "Análise e aprovação", desc: "Sua documentação é analisada com agilidade, com retorno em até 24 horas." },
  { titulo: "Liberação do crédito", desc: "Crédito aprovado e liberado para que você adquira seu veículo com total segurança." },
];

const CreditoVeicular = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative py-32 bg-gradient-navy overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${heroImg})` }} />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-14 h-14 rounded bg-primary-foreground/10 flex items-center justify-center">
                <Car className="w-7 h-7 text-primary-foreground" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-5xl font-display font-normal text-primary-foreground mb-6">
              Financiamento Veicular
            </h1>
            <p className="font-body text-sm sm:text-lg text-primary-foreground/80 leading-relaxed max-w-3xl mx-auto">
              Financie seu veículo novo ou seminovo com condições exclusivas e aprovação rápida, com a solidez do Banco Safra.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-2xl sm:text-3xl font-display font-normal text-foreground mb-6">
                Seu veículo com as melhores condições
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                O financiamento veicular através da Quotus Investimentos oferece taxas competitivas e um processo simplificado. Seja para veículos novos ou seminovos, nossa equipe cuida de toda a análise e negociação junto ao Banco Safra para garantir as melhores condições do mercado.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-8">
                Com parcelas que cabem no seu orçamento e aprovação em até 24 horas, você conquista seu veículo de forma rápida e segura, contando com o suporte de especialistas dedicados em cada etapa.
              </p>
              <a
                href="https://forms.gle/z5QQPmup7owknPC96"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-body font-semibold text-sm tracking-wide rounded hover:bg-primary/90 transition-all"
              >
                Solicitar simulação <ArrowRight className="w-4 h-4" />
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

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <h3 className="text-2xl font-display font-normal text-foreground text-center mb-12">Como funciona</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {etapas.map((etapa, i) => (
              <motion.div
                key={etapa.titulo}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display text-lg mx-auto mb-4">
                  {i + 1}
                </div>
                <h4 className="font-display text-foreground mb-2">{etapa.titulo}</h4>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{etapa.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-navy text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h3 className="text-2xl sm:text-3xl font-display font-normal text-primary-foreground mb-4">
              Conquiste seu veículo hoje
            </h3>
            <p className="font-body text-primary-foreground/70 mb-8 max-w-xl mx-auto">
              Fale com nossos especialistas e descubra as melhores condições para financiar seu próximo veículo.
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

export default CreditoVeicular;
