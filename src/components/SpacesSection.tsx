import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import salaOperacoes from "@/assets/quotus-sala-operacoes.jpg";
import escritorio from "@/assets/quotus-escritorio-servicos.jpg";
import office from "@/assets/quotus-office.jpg";
import recepcao from "@/assets/quotus-recepcao-real.jpg";
import lounge from "@/assets/quotus-lounge-real.jpg";
import salaReuniao from "@/assets/quotus-sala-reuniao-real.jpg";
import salaProfissionais from "@/assets/quotus-sala-profissionais-real.jpg";
import fazendaChurrascada from "@/assets/quotus-fazenda-churrascada.jpg";
import terrasGolfe from "@/assets/quotus-terras-golfe.jpg";
import salaVipSafra from "@/assets/quotus-sala-vip-safra.jpg";

type SpaceItem = {
  image: string | null;
  video: string | null;
  title: string;
  description: string;
};

const spaces: SpaceItem[] = [
  {
    image: recepcao,
    video: null,
    title: "Recepção Quotus Investimentos",
    description:
      "A nossa recepção é um reflexo da identidade da nossa empresa. Com um design acolhedor e profissional, criamos um ambiente que inspira confiança e respeito.",
  },
  {
    image: salaOperacoes,
    video: null,
    title: "Sala de Operações Quotus Investimentos",
    description:
      "Este espaço é mais do que um ambiente; é um centro de comando projetado para liderança estratégica e excelência operacional.",
  },
  {
    image: lounge,
    video: null,
    title: "Lounge Quotus Investimentos",
    description:
      "Cada decisão de investimento é tomada com transparência, comunicação aberta e na construção de relacionamentos sólidos com nossos clientes. Nossa vocação é cuidar de todos os nossos clientes, trazendo um atendimento 360º.",
  },
  {
    image: salaReuniao,
    video: null,
    title: "Sala de Reunião Quotus Investimentos",
    description:
      "A Sala de reunião foi cuidadosamente projetada para proporcionar um ambiente sofisticado e profissional. Equipada com tecnologia de ponta e design pensado para facilitar a colaboração, é o ambiente ideal para discussões produtivas e decisões estratégicas. Nossa sala de reunião é o palco onde o sucesso é planejado e alcançado.",
  },
  {
    image: salaProfissionais,
    video: null,
    title: "Sala dos Profissionais Quotus Investimentos",
    description:
      "Sala dos profissionais da Quotus Investimentos, onde a expertise se une à inovação para apresentar estratégias sólidas e personalizadas aos nossos clientes.",
  },
  {
    image: null,
    video: "https://vid.cdn-website.com/89a83228/videos/fBdqQRUQACynT6nXhI6v_WhatsApp+Video+2024-09-06+at+16.48.15-v.mp4",
    title: "Galeria Mara Dolzan",
    description:
      "A Galeria Mara Dolzan é um espaço dedicado à arte contemporânea, onde talento e criatividade se encontram em exposições cuidadosamente curadas.",
  },
  {
    image: fazendaChurrascada,
    video: null,
    title: "Restaurante Fazenda Churrascada",
    description:
      "O Fazenda Churrascada é um restaurante de referência, especializado em cortes nobres e preparado para oferecer uma experiência gastronômica única, com um ambiente rústico e sofisticado. No segundo andar, a Quotus Investimentos dispõe de uma sala de reuniões exclusiva, proporcionando um espaço reservado e elegante para atender seus clientes com discrição e conforto.",
  },
  {
    image: terrasGolfe,
    video: null,
    title: "Terras do Golfe",
    description:
      "O Terras do Golfe é um condomínio de luxo que combina exclusividade, conforto e uma infraestrutura diferenciada, incluindo um campo de golfe de 9 buracos, único em Mato Grosso do Sul. Nesse ambiente privilegiado, a Quotus Investimentos oferece uma sala exclusiva para atendimento, proporcionando aos clientes um espaço elegante e reservado, ideal para encontros e negociações com discrição e sofisticação.",
  },
  {
    image: salaVipSafra,
    video: null,
    title: "Sala VIP Banco Safra (Aeroporto de Guarulhos)",
    description:
      "A Sala VIP do Banco Safra no Aeroporto de Guarulhos oferece uma experiência de conforto e exclusividade para clientes de alta renda. Com um ambiente sofisticado e serviços personalizados, a sala proporciona um espaço tranquilo e elegante para relaxar e se preparar antes dos voos, refletindo o compromisso do banco com a excelência no atendimento.",
  },
];

const VideoPlayer = ({ src }: { src: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-80px" });

  useEffect(() => {
    if (isInView && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [isInView]);

  return (
    <div ref={containerRef} className="w-full rounded shadow-lg overflow-hidden">
      <video
        ref={videoRef}
        src={src}
        controls
        muted
        playsInline
        loop
        preload="metadata"
        className="w-full"
        poster="https://irp.cdn-website.com/89a83228/dms3rep/multi/fBdqQRUQACynT6nXhI6v_WhatsApp+Video+2024-09-06+at+16.48.15.v2.0000000.jpg"
      />
    </div>
  );
};

const SpacesSection = () => {
  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-normal text-foreground">
            Conheça os nossos espaços
          </h2>
          <p className="mt-4 font-body text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore nosso ambiente acolhedor e profissional na Quotus Investimentos. Descubra um lugar onde inovação, expertise e conforto se encontram. Venha nos visitar e descubra como nossa sede reflete nosso compromisso com a excelência em serviços financeiros. Estamos ansiosos para recebê-lo!
          </p>
        </motion.div>

        <div className="space-y-20">
          {spaces.map((space, i) => {
            const hasMedia = space.image || space.video;
            return (
              <motion.div
                key={space.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className={`grid ${hasMedia ? "lg:grid-cols-2" : "lg:grid-cols-1 max-w-3xl mx-auto"} gap-10 items-center`}
              >
                {hasMedia && (
                  <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                    {space.video ? (
                      <VideoPlayer src={space.video} />
                    ) : space.image ? (
                      <img
                        src={space.image}
                        alt={space.title}
                        className="w-full rounded shadow-lg"
                      />
                    ) : null}
                  </div>
                )}
                <div className={hasMedia && i % 2 !== 0 ? "lg:order-1" : ""}>
                  <h3 className="text-xl sm:text-2xl font-display font-normal text-foreground mb-4">
                    {space.title}
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {space.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SpacesSection;
