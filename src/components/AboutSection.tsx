import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import seloSafra from "@/assets/selo-safra-original.png";
import heroImg from "@/assets/quotus-fachada.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      {/* Hero "Sobre Nós" */}
      <section id="sobre" className="relative py-32 bg-gradient-navy overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${heroImg})` }}
        />
        <div className="container mx-auto px-6 relative z-10 text-center" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl sm:text-5xl font-display font-normal text-primary-foreground mb-6">
              Quotus Investimentos | Safra Invest
            </h2>
            <p className="font-body text-sm sm:text-lg text-primary-foreground/80 leading-relaxed max-w-3xl mx-auto italic">
              A Quotus Investimentos /Safra Invest faz parte do grupo Banco Safra, líder em serviços financeiros. Combinamos a tradição e solidez de um banco de 200 anos, com uma abordagem personalizada para atender às necessidades únicas de cada cliente. Oferecemos uma variedade de soluções financeiras inovadoras, apoiadas por uma equipe experiente. Seja qual for seu perfil de investimento, estamos aqui para ajudá-lo a alcançar seus objetivos de forma eficaz e confiável.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Selo Safra */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-2xl sm:text-3xl font-display font-normal text-foreground">
                SELO SAFRA DE ESPECIALISTA
              </h2>
              <div className="mt-6 space-y-4">
                <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed">
                  O <strong className="text-foreground">selo SAFRA de especialista</strong> é concedido a um grupo seleto de profissionais do mercado financeiro, é uma validação do histórico profissional e da sua reputação ilibada.
                </p>
                <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed">
                  É uma chancela dada a poucos agentes autônomos escolhidos pelo grupo Safra para representar o segmento Safra Invest, além disso, esse profissional deve ter o certificado da Ancord e ser fiscalizado constantemente pelo Banco Central e CVM.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex justify-center"
            >
              <img src={seloSafra} alt="Selo Safra de Especialista" className="max-w-[300px] w-full object-contain" />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
