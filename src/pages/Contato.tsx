import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, MapPin, Mail, Clock, ArrowRight, MessageCircle } from "lucide-react";
import mapaImg from "@/assets/quotus-regiao-atuacao.jpg";

const escritorios = [
  {
    cidade: "Campo Grande - MS",
    endereco: "Avenida Hiroshima, 1059 — Carandá Bosque, Campo Grande - MS, 79032-050",
    telefones: ["(67) 3305-6460", "(67) 99350-5966"],
    email: "contato@quotus.com.br",
  },
  {
    cidade: "Umuarama - PR",
    endereco: "Rua Des. Munhoz de Melo, 3800 — Ed. Centro Comercial, Sala 702",
    telefones: ["(44) 2020-9840", "(49) 99931-8667", "(49) 98803-8963"],
    email: "contato@quotus.com.br",
  },
];

const Contato = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-navy text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="text-3xl sm:text-5xl font-display font-normal text-primary-foreground mb-6">Contato</h1>
            <p className="font-body text-sm sm:text-lg text-primary-foreground/80 leading-relaxed max-w-3xl mx-auto">
              Entre em contato com nossos especialistas. Estamos prontos para atender você em nossos escritórios ou de forma remota.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Escritórios */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-display font-normal text-foreground mb-12 text-center"
          >
            NOSSOS ESCRITÓRIOS
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {escritorios.map((escritorio, i) => (
              <motion.div
                key={escritorio.cidade}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 bg-secondary rounded border border-border"
              >
                <h3 className="font-display text-xl text-foreground mb-6">{escritorio.cidade}</h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="font-body text-sm text-muted-foreground">{escritorio.endereco}</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      {escritorio.telefones.map((tel) => (
                        <a key={tel} href={`tel:${tel.replace(/\D/g, "")}`} className="block font-body text-sm text-foreground hover:text-primary transition-colors">
                          {tel}
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <a href={`mailto:${escritorio.email}`} className="font-body text-sm text-foreground hover:text-primary transition-colors">
                      {escritorio.email}
                    </a>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="font-body text-sm text-muted-foreground">Seg a Sex — 9h às 18h</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mapa de atuação */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-2xl sm:text-3xl font-display font-normal text-foreground mb-8">REGIÃO DE ATUAÇÃO</h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto mb-8">
              A Quotus Investimentos se destaca por sua presença abrangente em Mato Grosso, Mato Grosso do Sul, Paraná, Santa Catarina, além de atuação internacional no Uruguai, EUA (New York e Miami), Panamá e Bahamas.
            </p>
            <img src={mapaImg} alt="Região de atuação da Quotus Investimentos" className="w-full max-w-3xl mx-auto rounded shadow-lg" />
          </motion.div>
        </div>
      </section>

      {/* CTA Abra sua conta */}
      <section className="py-20 bg-gradient-navy text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <MessageCircle className="w-10 h-10 mx-auto mb-6 text-primary-foreground/60" />
            <h3 className="text-2xl sm:text-3xl font-display font-normal text-primary-foreground mb-4">
              Abra sua conta
            </h3>
            <p className="font-body text-primary-foreground/70 mb-8 max-w-xl mx-auto">
              Comece sua jornada com a Quotus Investimentos. Preencha o formulário e um de nossos especialistas entrará em contato.
            </p>
            <a
              href="https://forms.gle/z5QQPmup7owknPC96"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4 border-2 border-primary-foreground text-primary-foreground font-body font-semibold text-sm tracking-widest uppercase rounded hover:bg-primary-foreground hover:text-foreground transition-all duration-300"
            >
              Abra sua conta <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contato;
