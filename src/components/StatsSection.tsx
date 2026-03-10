import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { number: "180", label: "Uma história de", suffix: " anos" },
  { number: "29", label: "Presente em", suffix: " Países" },
  { number: "1,8", label: "Recursos sob gestão", suffix: " Trilhão" },
  { number: "100+", label: "Patrimônio líquido", suffix: " Bilhões" },
];

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="numeros" className="py-20 bg-gradient-navy text-primary-foreground">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-normal text-primary-foreground">
            NÚMEROS DO SAFRA
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="p-6 border border-primary-foreground/20 rounded"
            >
              <p className="text-sm font-display font-normal text-primary-foreground/80 mb-1">{stat.label}</p>
              <p className="text-3xl sm:text-4xl font-display font-normal text-primary-foreground">
                {stat.number}{stat.suffix}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 space-y-4"
        >
          <p className="font-body text-sm sm:text-base text-primary-foreground/80 max-w-3xl leading-relaxed">
            Um dos maiores bancos privados do país, que faz parte de um dos mais relevantes grupos de investimentos do mundo, uma instituição feita de pessoas e de valores.
          </p>
          <p className="font-body text-sm sm:text-base text-primary-foreground/80 max-w-3xl leading-relaxed">
            Números robustos solidificam mais de 180 anos de história, o Grupo J. Safra está presente em mais de 29 países, 163 cidades pelo mundo, soma mais de 1,8 trilhão de reais em recursos de terceiros sob gestão e mais de 100 bilhões de patrimônio líquido, no Brasil é quarto maior banco privado.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
