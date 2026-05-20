import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

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
    { label: 'Informações', href: '#informacoes' }
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
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{
                type: 'spring',
                damping: 30,
                stiffness: 260
              }}
              className="fixed top-0 right-0 h-full w-[88%] max-w-[360px] bg-[#faf8f5]/98 backdrop-blur-2xl z-50 lg:hidden border-l border-[#d9d3cb]/50 shadow-2xl"
            >
              
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-6 border-b border-[#d9d3cb]/40">
                <h2 className="text-[28px] font-light tracking-tight text-[#2d2a26]">
                  MJ Studio{" "}
                  <span className="italic text-[#b89b6a] font-normal">
                    Beauty
                  </span>
                </h2>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#2d2a26]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Links */}
              <div className="flex flex-col px-6 py-8">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();

                      if (link.href === '#') {
                        window.scrollTo({
                          top: 0,
                          behavior: 'smooth',
                        });
                      } else {
                        const targetId = link.href.replace('#', '');
                        const element = document.getElementById(targetId);

                        if (element) {
                          element.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start',
                          });
                        }
                      }

                      setTimeout(() => {
                        setMobileMenuOpen(false);
                      }, 150);
                    }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                    className="group flex items-center justify-between py-5 border-b border-[#e7e1d8]/60 text-[#2d2a26] hover:text-[#b89b6a] transition-all duration-300"
                  >
                    <span className="text-[22px] font-light tracking-tight">
                      {link.label}
                    </span>

                    <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-[#b89b6a]">
                      →
                    </span>
                  </motion.a>
                ))}
              </div>

              {/* Bottom */}
              <div className="absolute bottom-0 left-0 w-full p-6 border-t border-[#d9d3cb]/40 bg-white/40 backdrop-blur-xl">
                
                {/* Contact + Social */}
                <div className="mt-6 pt-5 border-t border-[#e7e1d8]/70">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#8b7e6f] mb-3">
                    Contato
                  </p>

                  <div className="flex items-center justify-between">
                    
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#c9a869]/15 flex items-center justify-center">
                        <Phone className="w-4 h-4 text-[#c9a869]" />
                      </div>

                      <div>
                        <p className="text-sm font-medium text-[#2d2a26]">
                          (81) 99391-8154
                        </p>

                        <p className="text-xs text-[#8b7e6f]">
                          Atendimento via WhatsApp
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <a
                        href="https://www.instagram.com/mj_studiobeauty/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#2d2a26] hover:bg-[#c9a869] hover:text-white transition-all duration-300"
                      >
                        <FaInstagram className="w-4 h-4" />
                      </a>

                      <a
                        href="https://wa.me/5581993918154"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#2d2a26] hover:bg-[#25D366] hover:text-white transition-all duration-300"
                      >
                        <FaWhatsapp className="w-4 h-4" />
                      </a>
                    </div>

                  </div>
                </div>
              </div> 
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}