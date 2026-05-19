import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Calendar } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Contato', href: '#contato' }
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-black/5 py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="relative z-10">
              <h1
                className={`text-[1.85rem] lg:text-[2.15rem] leading-none tracking-[-0.035em] transition-all duration-300 ${
                  scrolled ? "text-[#1f1f1f]" : "text-[#1f1f1f]"
                }`}
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 500,
                }}
              >
                MJ Studio{" "}
                
                <span className="italic text-[#8b7e6f] font-[400]">
                  Beauty
                </span>
              </h1>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative text-[14px] font-medium tracking-[0.02em] text-[#6f675e] hover:text-[#2d2a26] transition-all duration-300 group"
                >
                  {link.label}

                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#b8965a] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-5">
              
              <a
                href="tel:81993918154"
                className="group flex items-center gap-3 text-[#6f675e] hover:text-[#2d2a26] transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-full bg-[#f3ede6] flex items-center justify-center group-hover:bg-[#c9a869]/20 transition-all duration-300">
                  <Phone className="w-4 h-4" />
                </div>

                <div className="flex flex-col leading-none">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-[#9b8f81] font-medium mb-1">
                    Contato
                  </span>

                  <span className="text-[14px] font-medium tracking-[0.02em]">
                    (81) 99391-8154
                  </span>
                </div>
              </a>

              <a
                href="https://wa.me/5581993918154?text=Olá! Gostaria de agendar uma consulta no MJ Studio Beauty."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2d2a26] text-[#faf8f5] px-7 py-3 rounded-full text-[14px] font-medium tracking-[0.02em] hover:bg-[#3d3832] transition-all duration-300 hover:shadow-xl hover:shadow-black/10 flex items-center gap-2 hover:scale-[1.02]"
              >
                <Calendar className="w-4 h-4" />
                Agendar
              </a>

            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden relative z-10 w-10 h-10 flex items-center justify-center"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#1a1a1a]" />
              ) : (
                <Menu className="w-6 h-6 text-[#1a1a1a]" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden bg-white"
          >
            <div className="flex flex-col h-full pt-24 pb-8 px-6">
              <nav className="flex-1 flex flex-col gap-6">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl font-light text-[#1a1a1a] hover:text-[#666] transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <div className="space-y-4 pt-8 border-t border-[#e5e5e5]">
                <a
                  href="tel:81993918154"
                  className="flex items-center gap-3 text-[#666] hover:text-[#1a1a1a] transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-light">(81) 99391-8154</span>
                </a>

                <a
                  href="https://wa.me/5581993918154?text=Olá! Gostaria de agendar uma consulta no MJ Studio Beauty."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex bg-[#1a1a1a] text-white px-6 py-4 rounded-full text-sm font-light tracking-wide hover:bg-[#2a2a2a] transition-colors items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 opacity-80" />
                  Agendar Consulta
                </a>
              </div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
