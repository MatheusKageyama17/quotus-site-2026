import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import ServicosQuotus from "./pages/ServicosQuotus";
import SobreNos from "./pages/SobreNos";
import TrabalheConosco from "./pages/TrabalheConosco";
import Investimentos from "./pages/Investimentos";
import Credito from "./pages/Credito";
import CreditoImobiliario from "./pages/CreditoImobiliario";
import CreditoVeicular from "./pages/CreditoVeicular";
import Consorcios from "./pages/Consorcios";
import PlanejamentoPatrimonial from "./pages/PlanejamentoPatrimonial";
import Especialistas from "./pages/Especialistas";
import Insights from "./pages/Insights";
import Midia from "./pages/Midia";
import Contato from "./pages/Contato";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sobre-a-quotus" element={<SobreNos />} />
          <Route path="/investimentos" element={<Investimentos />} />
          <Route path="/credito" element={<Credito />} />
          <Route path="/credito/imobiliario" element={<CreditoImobiliario />} />
          <Route path="/credito/veicular" element={<CreditoVeicular />} />
          <Route path="/credito/consorcios" element={<Consorcios />} />
          <Route path="/especialistas" element={<Especialistas />} />
          <Route path="/planejamento-patrimonial" element={<PlanejamentoPatrimonial />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/midia" element={<Midia />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/servicos" element={<ServicosQuotus />} />
          <Route path="/sobre-nos" element={<SobreNos />} />
          <Route path="/trabalhe-conosco" element={<TrabalheConosco />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
