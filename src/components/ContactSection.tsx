import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contato" className="py-20 bg-gradient-navy text-primary-foreground">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h3 className="font-body text-lg font-normal text-primary-foreground mb-4">Campo Grande - MS</h3>
            <p className="font-body text-sm text-primary-foreground/80 underline">(67) 3305-6460</p>
            <p className="font-body text-sm text-primary-foreground/80 underline">(67) 99350-5966</p>
            <div className="mt-6">
              <h3 className="font-body text-lg font-normal text-primary-foreground mb-4">Umuarama - PR</h3>
              <p className="font-body text-sm text-primary-foreground/80 underline">(44) 2020-9840</p>
              <p className="font-body text-sm text-primary-foreground/80 underline">(49) 99931-8667</p>
              <p className="font-body text-sm text-primary-foreground/80 underline">(49) 98803-8963</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <h3 className="font-body text-lg font-normal text-primary-foreground underline mb-4">Campo Grande - MS</h3>
            <p className="font-body text-sm text-primary-foreground/80">
              Avenida Hiroshima 1059, Carandá Bosque - Campo Grande - MS, 79032-050
            </p>
            <div className="mt-6">
              <h3 className="font-body text-lg font-normal text-primary-foreground underline mb-4">Umuarama - PR</h3>
              <p className="font-body text-sm text-primary-foreground/80">
                Rua Des. Munhoz de Melo, 3800 Ed. Centro Comercial, Sala 702
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
