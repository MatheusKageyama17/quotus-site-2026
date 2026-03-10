import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import quotusSafraBranco from "@/assets/quotus-safra-branco.png";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-gradient-navy text-primary-foreground" ref={ref}>
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-body text-sm text-primary-foreground/70 mb-4">Quotus Investimentos | Safra Invest</p>
          <h3 className="text-2xl sm:text-3xl font-display font-normal text-primary-foreground mb-4">
            Conheça o nosso espaço Quotus Investimentos!
          </h3>
          <p className="font-body text-primary-foreground/80 mb-2">Profissionais experientes</p>
          <p className="font-body text-primary-foreground/80 mb-10">para investidores exigentes</p>
          <a
            href="https://forms.gle/z5QQPmup7owknPC96"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 border-2 border-primary-foreground text-primary-foreground font-body font-semibold text-sm tracking-widest uppercase rounded hover:bg-primary-foreground hover:text-foreground transition-all duration-300"
          >
            Agendar visita
          </a>
          <div className="mt-12">
            <img src={quotusSafraBranco} alt="Quotus Investimentos | Safra Invest" className="h-10 mx-auto object-contain" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
