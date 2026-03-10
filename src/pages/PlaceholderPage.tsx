import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface PlaceholderPageProps {
  title: string;
  description: string;
}

const PlaceholderPage = ({ title, description }: PlaceholderPageProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="pt-32 pb-24 bg-gradient-navy text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-3xl sm:text-5xl font-display font-normal text-primary-foreground mb-4">
            {title}
          </h1>
          <p className="font-body text-primary-foreground/70 max-w-2xl mx-auto">{description}</p>
        </div>
      </section>
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <p className="font-body text-muted-foreground mb-8">
            Em breve, conteúdo completo estará disponível nesta página.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-body font-semibold text-sm text-primary hover:gap-3 transition-all"
          >
            Voltar à Home <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PlaceholderPage;
