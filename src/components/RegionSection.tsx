import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import regiaoImg from "@/assets/quotus-mapa-atuacao.jpg";

const regions = [
  "Mato Grosso",
  "Mato Grosso do Sul",
  "Paraná",
  "Santa Catarina",
  "Uruguai",
  "EUA — New York e Miami",
  "Panamá",
  "Bahamas",
];

const RegionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="atuacao" className="py-20 bg-background">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-normal text-foreground">
            REGIÃO DE ATUAÇÃO
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed mb-8">
              A Quotus Investimentos se destaca por sua presença abrangente e atendimento exclusivo em diversas regiões. Nossa atuação global e regional garante soluções financeiras de excelência, adaptadas às necessidades específicas de cada mercado.
            </p>

            <ul className="space-y-3">
              {regions.map((region, i) => (
                <motion.li
                  key={region}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  className="flex items-center gap-3 font-body text-foreground"
                >
                  <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  {region}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <img src={regiaoImg} alt="Quotus Investimentos - Região de Atuação" className="w-full rounded shadow-lg" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RegionSection;
