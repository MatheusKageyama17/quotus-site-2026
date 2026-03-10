import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Award, ShieldCheck, GraduationCap, Users } from "lucide-react";
import heroImg from "@/assets/quotus-sala-profissionais-real.jpg";
import seloSafra from "@/assets/selo-safra-original.png";

const especialistas = [
  {
    nome: "Equipe Campo Grande",
    cargo: "Especialistas em Investimentos",
    certificacoes: ["Ancord", "CPA-20", "CEA"],
    descricao: "Profissionais certificados com ampla experiência no mercado financeiro, dedicados a construir carteiras personalizadas para cada perfil de investidor.",
  },
  {
    nome: "Equipe Umuarama",
    cargo: "Especialistas em Investimentos",
    certificacoes: ["Ancord", "CPA-20", "CFP"],
    descricao: "Time especializado em atendimento personalizado, com foco no agronegócio e no planejamento patrimonial familiar.",
  },
  {
    nome: "Assessoria Empresarial",
    cargo: "Consultores de Soluções Corporativas",
    certificacoes: ["Ancord", "CGA"],
    descricao: "Consultores com expertise em governança corporativa, M&A e estruturação de projetos para empresas de todos os portes.",
  },
];

const diferenciais = [
  { icon: Award, label: "Selo Safra de Especialista", desc: "Reconhecimento exclusivo concedido a um seleto grupo de profissionais pelo Grupo Safra." },
  { icon: ShieldCheck, label: "Fiscalização CVM e Banco Central", desc: "Todos os profissionais são regulados e fiscalizados pelos órgãos competentes." },
  { icon: GraduationCap, label: "Certificações de Mercado", desc: "Equipe com certificações Ancord, CPA-20, CEA, CFP e CGA." },
  { icon: Users, label: "Atendimento Personalizado", desc: "Cada cliente é atendido por um especialista dedicado que conhece seu perfil e objetivos." },
];

const Especialistas = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative py-32 bg-gradient-navy overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${heroImg})` }} />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="text-3xl sm:text-5xl font-display font-normal text-primary-foreground mb-6">
              Nossos Especialistas
            </h1>
            <p className="font-body text-sm sm:text-lg text-primary-foreground/80 leading-relaxed max-w-3xl mx-auto">
              Profissionais experientes e certificados, escolhidos pelo Grupo Safra para oferecer o melhor atendimento em investimentos e planejamento financeiro.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Selo Safra */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <h2 className="text-2xl sm:text-3xl font-display font-normal text-foreground mb-6">
                SELO SAFRA DE ESPECIALISTA
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                O <strong className="text-foreground">selo SAFRA de especialista</strong> é concedido a um grupo seleto de profissionais do mercado financeiro, é uma validação do histórico profissional e da sua reputação ilibada.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                É uma chancela dada a poucos agentes autônomos escolhidos pelo grupo Safra para representar o segmento Safra Invest, além disso, esse profissional deve ter o certificado da Ancord e ser fiscalizado constantemente pelo Banco Central e CVM.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="flex justify-center">
              <img src={seloSafra} alt="Selo Safra de Especialista" className="max-w-[280px] w-full object-contain" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-display font-normal text-foreground mb-12 text-center"
          >
            POR QUE NOSSOS ESPECIALISTAS?
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {diferenciais.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-6 bg-secondary rounded border border-border text-center"
                >
                  <Icon className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="font-display text-base text-foreground mb-2">{item.label}</h3>
                  <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Equipes */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-display font-normal text-foreground mb-12 text-center"
          >
            NOSSAS EQUIPES
          </motion.h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {especialistas.map((esp, i) => (
              <motion.div
                key={esp.nome}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-background rounded border border-border p-8"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl text-foreground text-center mb-1">{esp.nome}</h3>
                <p className="font-body text-sm text-primary text-center mb-4">{esp.cargo}</p>
                <p className="font-body text-sm text-muted-foreground text-center mb-6">{esp.descricao}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {esp.certificacoes.map((cert) => (
                    <span key={cert} className="px-3 py-1 bg-primary/10 text-primary font-body text-xs rounded-full">{cert}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-navy text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h3 className="text-2xl sm:text-3xl font-display font-normal text-primary-foreground mb-4">
              Converse com um especialista
            </h3>
            <p className="font-body text-primary-foreground/70 mb-8 max-w-xl mx-auto">
              Agende uma reunião e conheça o profissional ideal para cuidar do seu patrimônio.
            </p>
            <a
              href="https://forms.gle/z5QQPmup7owknPC96"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4 border-2 border-primary-foreground text-primary-foreground font-body font-semibold text-sm tracking-widest uppercase rounded hover:bg-primary-foreground hover:text-foreground transition-all duration-300"
            >
              Agendar reunião <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Especialistas;
