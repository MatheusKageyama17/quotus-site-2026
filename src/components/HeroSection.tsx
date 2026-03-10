import { motion } from "framer-motion";
import heroBg from "@/assets/quotus-detalhe-mesa.png";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-[80vh] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-foreground/40" />

      <div className="relative container mx-auto px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="text-lg sm:text-xl font-body font-normal text-primary-foreground max-w-xl mb-10 leading-relaxed">
            Profissionais experientes, para investidores exigentes. Somos reconhecidos por cuidar do cliente e de sua família, com um compromisso que atravessa gerações.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              href="https://forms.gle/z5QQPmup7owknPC96"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 border-2 border-primary-foreground text-primary-foreground font-body font-semibold text-sm tracking-widest uppercase rounded hover:bg-primary-foreground hover:text-foreground transition-all duration-300 text-center"
            >
              Abra sua conta
            </a>
          </div>
        </motion.div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-16 max-w-lg"
        >
          <p className="font-body font-bold text-primary-foreground text-lg leading-relaxed">
            "Nossos clientes nos conhecem há várias gerações. A filosofia deles é a mesma que a nossa: investir com segurança e cuidar do futuro."
          </p>
          <footer className="mt-3 font-body text-sm text-primary-foreground/80 tracking-wider">
            Joseph Safra (1938–2020)
          </footer>
        </motion.blockquote>
      </div>
    </section>
  );
};

export default HeroSection;
