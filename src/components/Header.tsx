import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import quotusSafraLogo from "@/assets/quotus-safra-header.png";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "A Quotus", href: "/sobre-a-quotus" },
  { label: "Investimentos", href: "/investimentos" },
  {
    label: "Crédito e Financiamentos",
    href: "/credito",
    children: [
      { label: "Crédito Imobiliário", href: "/credito/imobiliario" },
      { label: "Crédito Veicular", href: "/credito/veicular" },
      { label: "Consórcios", href: "/credito/consorcios" },
    ],
  },
  { label: "Planejamento Patrimonial", href: "/planejamento-patrimonial" },
  { label: "Insights", href: "/insights" },
  { label: "Especialistas", href: "/especialistas" },
  { label: "Contato", href: "/contato" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-20 px-6">
        <Link to="/" className="flex items-center gap-3">
          <img src={quotusSafraLogo} alt="Quotus Investimentos | Safra Invest" className="h-10 object-contain" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden xl:flex items-center gap-1">
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                ref={dropdownRef}
                onMouseEnter={() => setDropdownOpen(item.label)}
                onMouseLeave={() => setDropdownOpen(null)}
              >
                <button
                  className={`text-sm font-body font-medium tracking-wide px-3 py-2 rounded flex items-center gap-1 transition-colors duration-300 ${
                    location.pathname.startsWith(item.href)
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-primary hover:text-primary-foreground"
                  }`}
                >
                  {item.label}
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                <AnimatePresence>
                  {dropdownOpen === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1 bg-background border border-border rounded shadow-lg min-w-[220px] py-2 z-50"
                    >
                      <Link
                        to={item.href}
                        className="block px-4 py-2 text-sm font-body text-foreground hover:bg-secondary transition-colors"
                        onClick={() => setDropdownOpen(null)}
                      >
                        Todos os Créditos
                      </Link>
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="block px-4 py-2 text-sm font-body text-foreground hover:bg-secondary transition-colors"
                          onClick={() => setDropdownOpen(null)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.href}
                className={`text-sm font-body font-medium tracking-wide px-3 py-2 rounded transition-colors duration-300 ${
                  location.pathname === item.href
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Mobile toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="xl:hidden text-foreground">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-background border-b border-border overflow-hidden"
          >
            <nav className="flex flex-col items-center gap-2 py-6">
              {navItems.map((item) =>
                item.children ? (
                  <div key={item.label} className="w-full text-center">
                    <button
                      onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                      className="text-sm font-body font-medium tracking-wide text-foreground hover:text-accent transition-colors flex items-center gap-1 mx-auto"
                    >
                      {item.label}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform ${mobileExpanded === item.label ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {mobileExpanded === item.label && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="flex flex-col items-center gap-2 py-2">
                            {item.children.map((child) => (
                              <Link
                                key={child.label}
                                to={child.href}
                                onClick={() => setIsOpen(false)}
                                className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-sm font-body font-medium tracking-wide text-foreground hover:text-accent transition-colors"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
