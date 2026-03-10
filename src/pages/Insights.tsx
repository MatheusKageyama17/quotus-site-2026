import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText, TrendingUp, Landmark, Wheat, Globe, ShieldCheck, ArrowRight } from "lucide-react";

const artigos = [
  {
    tag: "Análise de Mercado",
    icon: TrendingUp,
    titulo: "Selic em 2026: Copom deve iniciar cortes em março",
    resumo: "Com a Selic no maior patamar em 20 anos, o mercado projeta ciclo de cortes a partir de março. Entenda o impacto em financiamentos e como proteger seus investimentos.",
    data: "Março 2026",
    link: "https://www.nsctotal.com.br/noticias/selic-2026-projecoes-copom-marco",
  },
  {
    tag: "Patrimônio",
    icon: Landmark,
    titulo: "Planejamento sucessório: guia para proteger e transferir seu patrimônio",
    resumo: "Entenda a importância do planejamento sucessório e como estruturar a proteção do seu patrimônio para as próximas gerações com segurança jurídica.",
    data: "Fevereiro 2026",
    link: "https://www.nordinvestimentos.com.br/blog/planejamento-sucessorio/",
  },
  {
    tag: "Agronegócio",
    icon: Wheat,
    titulo: "Agronegócio brasileiro fecha 2025 com recorde em exportações",
    resumo: "O setor representou quase metade das vendas totais do Brasil para o exterior, com US$ 169 bilhões em exportações. Conheça as oportunidades de investimento.",
    data: "Janeiro 2026",
    link: "https://www.gov.br/agricultura/pt-br/assuntos/noticias/agronegocio-brasileiro-fecha-2025-com-recorde-em-exportacoes-de-us-169-bilhoes-e-superavit-de-us-149-07-bilhoes",
  },
  {
    tag: "Internacional",
    icon: Globe,
    titulo: "Investir no exterior não é mais oportunismo, mas pilar estratégico",
    resumo: "A diversificação geográfica é fundamental para uma carteira robusta. Entenda como a alocação internacional se tornou essencial para investidores brasileiros.",
    data: "Novembro 2025",
    link: "https://www.infomoney.com.br/advisor/investir-no-exterior-nao-e-mais-oportunismo-mas-pilar-estrategico-de-longo-prazo/",
  },
  {
    tag: "Seguros",
    icon: ShieldCheck,
    titulo: "Nova lei cria o Sistema de Proteção Patrimonial Mutualista",
    resumo: "A reforma histórica nos seguros privados trouxe novas possibilidades para proteção patrimonial. Saiba o que muda e como se beneficiar.",
    data: "Julho 2025",
    link: "https://www.conjur.com.br/2025-jul-19/reforma-historica-do-sistema-nacional-de-seguros-privados-a-criacao-do-sistema-de-protecao-patrimonial-mutualista/",
  },
  {
    tag: "Crédito",
    icon: FileText,
    titulo: "Crédito imobiliário em alta: o momento de financiar em 2026",
    resumo: "Com expectativa de queda nos juros, o crédito imobiliário ganha fôlego. Veja as tendências do mercado e como aproveitar as melhores condições.",
    data: "Janeiro 2026",
    link: "https://investidor10.com.br/noticias/vai-comprar-imovel-em-2026-credito-imobiliario-em-alta-pode-finalmente-ajudar-118249/",
  },
];

const Insights = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-navy text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="text-3xl sm:text-5xl font-display font-normal text-primary-foreground mb-6">Insights</h1>
            <p className="font-body text-sm sm:text-lg text-primary-foreground/80 leading-relaxed max-w-3xl mx-auto">
              Artigos, análises e conteúdos sobre mercado, patrimônio e investimentos preparados pelos especialistas da Quotus.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Artigos */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {artigos.map((artigo, i) => {
              const Icon = artigo.icon;
              return (
              <a
                  key={artigo.titulo}
                  href={artigo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                <motion.article
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group p-6 bg-secondary rounded border border-border hover:border-primary hover:shadow-lg transition-all duration-300 cursor-pointer h-full"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Icon className="w-4 h-4 text-primary" />
                    <span className="font-body text-xs uppercase tracking-widest text-muted-foreground">{artigo.tag}</span>
                  </div>
                  <h3 className="font-display text-lg text-foreground mb-3 leading-snug">{artigo.titulo}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">{artigo.resumo}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-body text-xs text-muted-foreground">{artigo.data}</span>
                    <span className="font-body text-sm font-semibold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                      Ler mais <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </motion.article>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-6 text-center">
          <p className="font-body text-muted-foreground mb-6">
            Quer receber nossos insights diretamente no seu e-mail?
          </p>
          <a
            href="https://forms.gle/z5QQPmup7owknPC96"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-body font-semibold text-sm tracking-wide rounded hover:bg-primary/90 transition-all"
          >
            Cadastre-se <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Insights;
