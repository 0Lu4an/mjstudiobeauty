import { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { ScrollToTop } from './components/ScrollToTop';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { Preloader } from './components/Preloader';
import { Sparkles, Award, Heart, Star, MapPin, Phone, Mail, Clock, Calendar } from 'lucide-react';
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import {
  ftprincipal,
  fthenna,
  ftmaquiagem,
  ftspalabial,
  ftportfolio1,
  ftportfolio2,
  ftportfolio3,
  ftportfolio4,
  ftportfolio5
} from './assets';

export default function App() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const services = [
    {
      icon: Sparkles,
      title: 'Design com Henna',
      description: 'Técnica avançada para sobrancelhas com resultado natural e duradouro',
      image: fthenna
    },
    {
      icon: Award,
      title: 'Maquiagem Profissional',
      description: 'Modelagem personalizada que valoriza sua expressão facial única',
      image: ftmaquiagem
    },
    {
      icon: Heart,
      title: 'Spa labial',
      description: 'Tratamento revitalizante para lábios com resultado imediato e duradouro',
      image: ftspalabial
    }
  ];

  const portfolio = [
    { id: 1, image: ftportfolio1, span: 'col-span-2 row-span-2' },
    { id: 2, image: ftportfolio2, span: '' },
    { id: 3, image: ftportfolio3, span: '' },
    { id: 4, image: ftportfolio4, span: '' },
    { id: 5, image: ftportfolio5, span: '', position: 'object-[center_15%]' }
  ];

  const testimonials = [
    {
      name: 'Meire Ellen',
      text: 'Sério, eu amei demais o resultado. Minhas sobrancelhas ficaram perfeitas.',
      rating: 5
    },
    {
      name: 'Jaíne Carla',
      text: 'Atendimento maravilhoso e um cuidado enorme em cada detalhe. Já quero voltar de novo.',
      rating: 5
    },
    {
      name: 'Mari Azevedo',
      text: 'Ficou muito mais natural do que eu imaginava. Todo mundo elogiou quando eu cheguei em casa kkkkk',
      rating: 5
    }
  ];

  return (
    <>
      <Preloader />
      <div className="min-h-screen bg-[#faf8f5] antialiased">
        <Navbar />
        <ScrollToTop />
        <WhatsAppFloat />

        {/* Hero Section */}
        <section className="relative min-h-screen md:min-h-[850px] lg:min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#faf8f5] via-[#f5f3f0] to-[#f0ede8]">
          {/* Subtle Texture */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, #2d2a26 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }} />
          </div>

          <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:py-0">
            <div className="grid lg:grid-cols-[0.9fr_0.8fr] gap-10 lg:gap-16 xl:gap-24 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{ y: heroY, opacity: heroOpacity }}
                className="text-center lg:text-left"
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="inline-flex items-center gap-2 mb-6 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#c9a869]" />
                  <span className="text-[11px] lg:text-xs tracking-[0.2em] uppercase text-[#6b6256] font-medium">
                    Premium Beauty Studio
                  </span>
                </motion.div>

                <h1 className="text-[3rem] sm:text-[3.25rem] lg:text-[4rem] xl:text-[5rem] leading-[0.95] tracking-tight mb-6 lg:mb-7">
                  <span className="block font-light text-[#2d2a26]">MJ Studio</span>
                  <span className="block font-normal italic text-[#8b7e6f] mt-1">Beauty</span>
                </h1>

                <p className="text-[15px] lg:text-base xl:text-lg text-[#6b6256] font-normal leading-relaxed mb-9 lg:mb-11 max-w-md mx-auto lg:mx-0">
                  Onde técnica refinada encontra arte premium. Especialista em design de sobrancelhas e maquiagem.
                </p>

                <div className="flex flex-col sm:flex-row gap-3.5 justify-center lg:justify-start mb-12 lg:mb-0">
                  <a
                    href="https://wa.me/5581993918154?text=Olá! Gostaria de agendar um horário no MJ Studio Beauty."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group hidden lg:block"
                  >
                    <button className="relative overflow-hidden w-full sm:w-auto bg-[#2d2a26] text-[#faf8f5] px-8 py-3.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 hover:shadow-2xl hover:shadow-black/30 flex items-center justify-center gap-2 hover:scale-[1.03] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:-translate-x-[200%] hover:before:translate-x-[200%] before:transition-transform before:duration-1000">
                      <Calendar className="w-[17px] h-[17px] relative z-10" />

                      <span className="relative z-10">
                        Agendar Consulta
                      </span>

                      <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 relative z-10">
                        →
                      </span>
                    </button>
                  </a>
                  <a href="#servicos" className="hidden lg:block">
                    <button className="w-full sm:w-auto bg-white/80 backdrop-blur-sm text-[#2d2a26] border border-[#d9d3cb] px-8 py-3.5 rounded-full text-sm font-medium tracking-wide hover:border-[#c9a869] hover:bg-white hover:shadow-lg hover:shadow-[#c9a869]/10 transition-all duration-300">
                      Nossos Serviços
                    </button>
                  </a>
                </div>

                
                {/* MOBILE IMAGE */}
                <div className="lg:hidden mt-8 flex flex-col items-center gap-4">

                  <div className="relative w-full max-w-[280px] rounded-[28px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)]">

                    <img
                      src={ftprincipal}
                      alt="MJ Studio Beauty"
                      className="w-full h-[250px] object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#2d2a26]/35 via-transparent to-transparent" />

                    <div className="absolute bottom-4 left-4 right-4 backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl px-4 py-3">
                      <p className="text-white text-[11px] font-medium text-center">
                        Beleza, elegância e autoestima em cada detalhe.
                      </p>
                    </div>

                  </div>

                  {/* BOTÃO MOBILE */}
                  <a
                    href="https://wa.me/5581993918154?text=Olá! Gostaria de agendar um horário no MJ Studio Beauty."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full max-w-[300px]"
                  >
                    <button className="w-full bg-[#2d2a26] text-white py-4 rounded-full text-sm font-medium shadow-[0_20px_60px_rgba(0,0,0,0.12)] flex items-center justify-center gap-2 hover:scale-[1.02] hover:bg-[#3a342e] transition-all duration-300">

                      <Calendar className="w-4 h-4" />

                      Agendar Consulta

                    </button>
                  </a>

                </div>

                {/* Estatísticas - escondido no mobile */}
                <div className="hidden lg:grid grid-cols-3 gap-8 mt-14 pt-10 border-t border-[#d9d3cb]/60">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <div className="text-3xl xl:text-4xl font-light text-[#2d2a26] mb-2">100+</div>
                    <div className="text-[11px] tracking-wider uppercase text-[#8b7e6f] font-medium">Clientes</div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                  >
                    <div className="text-3xl xl:text-4xl font-light text-[#2d2a26] mb-2">2+</div>
                    <div className="text-[11px] tracking-wider uppercase text-[#8b7e6f] font-medium">Anos</div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                  >
                    <div className="text-3xl xl:text-4xl font-light text-[#2d2a26] mb-2">100%</div>
                    <div className="text-[11px] tracking-wider uppercase text-[#8b7e6f] font-medium">Satisfação</div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Right Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="relative hidden lg:block"
              >
                <div className="relative aspect-[0.82/1] max-h-[720px] rounded-[24px] overflow-hidden shadow-2xl shadow-black/10">
                  <img
                    src={ftprincipal}
                    alt="MJ Studio Beauty Interior"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2d2a26]/30 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-[#c9a869]/5" />
                </div>

                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="absolute -bottom-5 -left-5 bg-gradient-to-br from-white to-[#faf8f5] p-6 rounded-lg shadow-2xl shadow-black/15 border border-white/60"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#c9a869]/20 to-[#c9a869]/10 flex items-center justify-center">
                      <Award className="w-5 h-5 text-[#c9a869]" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-[#2d2a26]">Certificado</div>
                      <div className="text-xs text-[#8b7e6f] tracking-wide">Premium Quality</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="servicos"
          className="scroll-mt-28 lg:scroll-mt-36 py-14 lg:py-24 bg-gradient-to-b from-white to-[#faf8f5]"
        >
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            {/* Header */}
            <div className="text-center mb-10 lg:mb-16">
              <div className="inline-flex items-center gap-2 mb-4 bg-[#c9a869]/10 px-4 py-2 rounded-full">
                <div className="w-1.5 h-1.5 rounded-full bg-[#c9a869]" />
                <span className="text-[11px] lg:text-xs tracking-[0.2em] uppercase text-[#8b7e6f] font-medium">
                  Serviços Premium
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-light mt-5 text-[#2d2a26] leading-tight">
                Excelência em cada detalhe
              </h2>
              <p className="text-sm lg:text-base text-[#6b6256] font-normal mt-4 max-w-2xl mx-auto leading-relaxed">
                Combinamos técnica avançada, produtos premium e atendimento personalizado
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="relative aspect-square lg:aspect-[4/5] rounded-lg overflow-hidden mb-3 shadow-xl shadow-black/10 group-hover:shadow-2xl group-hover:shadow-black/20 transition-all duration-500">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[#c9a869]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#c9a869]/20 to-[#c9a869]/10 flex items-center justify-center flex-shrink-0 group-hover:from-[#c9a869] group-hover:to-[#b8985a] transition-all duration-300 shadow-md shadow-[#c9a869]/10">
                      <service.icon className="w-[22px] h-[22px] text-[#c9a869] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="text-base lg:text-lg font-medium mb-1.5 text-[#2d2a26]">{service.title}</h3>
                      <p className="text-[13px] lg:text-sm text-[#6b6256] font-normal leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section
          id="portfolio"
          className="scroll-mt-28 lg:scroll-mt-36 py-14 lg:py-24 bg-[#faf8f5]"
        >
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="text-center mb-7 lg:mb-16">
              <div className="inline-flex items-center gap-2 mb-4 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full">
                <div className="w-1.5 h-1.5 rounded-full bg-[#c9a869]" />
                <span className="text-[11px] lg:text-xs tracking-[0.2em] uppercase text-[#8b7e6f] font-medium">
                  Portfolio
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-light mt-5 text-[#2d2a26] leading-tight">
                Meu Trabalho
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
              {portfolio.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`${item.span} aspect-square group cursor-pointer`}
                >
                  <div className="relative h-full rounded-lg overflow-hidden shadow-xl shadow-black/10 hover:shadow-2xl hover:shadow-black/20 transition-shadow duration-500">
                    <img
                      src={item.image}
                      alt={`Portfolio ${item.id}`}
                      loading="lazy"
                      className={`w-full h-full object-cover ${item.position || 'object-center'} transition-transform duration-700 group-hover:scale-[1.02]`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2d2a26]/30 via-transparent to-transparent" />
                    <div className="absolute inset-0 bg-[#c9a869]/0 group-hover:bg-[#c9a869]/10 transition-colors duration-500" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          id="depoimentos"
          className="scroll-mt-28 lg:scroll-mt-36 py-14 lg:py-24 bg-gradient-to-b from-white to-[#faf8f5]"
        >
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="text-center mb-10 lg:mb-16">
              <div className="inline-flex items-center gap-2 mb-4 bg-[#c9a869]/10 px-4 py-2 rounded-full">
                <div className="w-1.5 h-1.5 rounded-full bg-[#c9a869]" />
                <span className="text-[11px] lg:text-xs tracking-[0.2em] uppercase text-[#8b7e6f] font-medium">
                  Depoimentos
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-light mt-5 text-[#2d2a26] leading-tight">
                O que dizem sobre nós
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-white to-[#faf8f5] p-5 lg:p-8 rounded-[22px] relative group hover:shadow-2xl hover:shadow-black/10 transition-all duration-500 border border-[#d9d3cb]/40 hover:-translate-y-1"
                >
                  <div className="flex gap-0.5 mb-5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#c9a869] text-[#c9a869]" />
                    ))}
                  </div>

                  <p className="text-[#6b6256] font-normal leading-relaxed mb-6 text-[13px] lg:text-sm">
                    "{testimonial.text}"
                  </p>

                  <div className="font-normal text-sm">
                    <div className="text-[#2d2a26] font-medium">{testimonial.name}</div>
                    <div className="text-[#8b7e6f] text-xs mt-0.5">Cliente Premium</div>
                  </div>

                  <div className="absolute top-6 right-6 text-5xl text-[#c9a869] opacity-10 font-serif">
                    "
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section
          id="informacoes"
          className="scroll-mt-28 lg:scroll-mt-36 py-14 lg:py-24 bg-[#faf8f5]"
        >
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-[32px] p-6 lg:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-[#efe8de]"
              >
                <div className="flex justify-center lg:justify-start">
                  <div className="inline-flex items-center gap-2 mb-4 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#c9a869]" />
                    <span className="text-[11px] lg:text-xs tracking-[0.2em] uppercase text-[#8b7e6f] font-medium">
                      Informações
                    </span>
                  </div>
                </div>
                <h2 className="text-[2rem] lg:text-4xl xl:text-5xl font-light mt-5 mb-10 text-[#2d2a26] leading-tight">
                  Visite nosso Studio
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#c9a869]/20 to-[#c9a869]/10 flex items-center justify-center flex-shrink-0 group-hover:from-[#c9a869] group-hover:to-[#b8985a] transition-all duration-300 shadow-md shadow-[#c9a869]/10">
                      <MapPin className="w-5 h-5 text-[#c9a869] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <div className="text-xs tracking-wide uppercase text-[#8b7e6f] mb-2 font-medium">Endereço</div>
                      <div className="font-normal leading-relaxed text-sm text-[#2d2a26]">
                        R. Getúlio Vargas - <br />
                        R. Getúlio Vargas - Centro
                        Joaquim Nabuco - PE<br />
                        CEP 55535-000
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#c9a869]/20 to-[#c9a869]/10 flex items-center justify-center flex-shrink-0 group-hover:from-[#c9a869] group-hover:to-[#b8985a] transition-all duration-300 shadow-md shadow-[#c9a869]/10">
                      <Clock className="w-5 h-5 text-[#c9a869] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <div className="text-xs tracking-wide uppercase text-[#8b7e6f] mb-2 font-medium">Horário</div>
                      <div className="font-normal leading-relaxed text-sm text-[#2d2a26]">
                        Seg - Sex: 9h às 19h<br />
                        Sábado: 9h às 15h<br />
                        Domingo: Fechado
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#c9a869]/20 to-[#c9a869]/10 flex items-center justify-center flex-shrink-0 group-hover:from-[#c9a869] group-hover:to-[#b8985a] transition-all duration-300 shadow-md shadow-[#c9a869]/10">
                      <Phone className="w-5 h-5 text-[#c9a869] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <div className="text-xs tracking-wide uppercase text-[#8b7e6f] mb-2 font-medium">Contato</div>
                      <div className="font-normal leading-relaxed text-sm text-[#2d2a26]">
                        (81) 99391-8154<br />
                        @mj_studiobeauty
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-[#d9d3cb]/60 flex justify-center">
                  <a
                    href="https://wa.me/5581993918154"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-3.5 rounded-full hover:bg-[#20BA5A] transition-all duration-300 hover:shadow-xl hover:shadow-[#25D366]/30 text-sm font-medium tracking-wide hover:scale-[1.02]"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    Agendar via WhatsApp
                  </a>
                </div>
              </motion.div>

              {/* Map */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative aspect-[4/3] lg:aspect-square rounded-lg overflow-hidden shadow-2xl shadow-black/15 group border-4 border-white"
              >
                <iframe
                  src="https://www.google.com/maps?q=-8.628201,-35.526542&hl=pt-BR&z=18&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale group-hover:grayscale-0 transition-all duration-500 rounded-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2d2a26]/10 via-transparent to-transparent pointer-events-none" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-10 bg-gradient-to-br from-[#2d2a26] to-[#3d3832] text-[#faf8f5]">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-12 lg:py-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
              <div className="lg:col-span-2">
                <h3 className="text-[1.9rem] lg:text-3xl font-light mb-4">
                  MJ Studio <span className="italic text-[#c9a869]">Beauty</span>
                </h3>
                <p className="text-[13px] text-[#d9d3cb] font-normal leading-relaxed max-w-md mb-6">                  Premium beauty studio especializado em maquiagem e design de sobrancelhas.
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://www.instagram.com/mj_studiobeauty/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-[#c9a869] hover:scale-110 transition-all duration-300"
                  >
                    <FaInstagram className="w-4 h-4" />
                  </a>

                  <a
                    href="https://wa.me/5581993918154"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-[#c9a869] hover:scale-110 transition-all duration-300"
                  >
                    <FaWhatsapp className="w-4 h-4" />
                  </a>

                </div>
              </div>

              <div>
                <h4 className="text-xs tracking-wide uppercase mb-6 text-[#c9a869] font-medium">Serviços</h4>
                <ul className="space-y-3 text-[13px] font-normal text-[#d9d3cb]">
                  <li><a href="#servicos" className="hover:text-[#c9a869] transition-colors duration-300">Maquiagem</a></li>
                  <li><a href="#servicos" className="hover:text-[#c9a869] transition-colors duration-300">Design com Henna</a></li>
                  <li><a href="#servicos" className="hover:text-[#c9a869] transition-colors duration-300">Spa labial</a></li>
                  <li><a href="#informacoes" className="hover:text-[#c9a869] transition-colors duration-300">Consultoria</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-xs tracking-wide uppercase mb-6 text-[#c9a869] font-medium">Contato</h4>
                <ul className="space-y-3 text-[13px] font-normal text-[#d9d3cb]">
                  <li className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#c9a869]" />
                    <span>R. Getúlio Vargas - Centro<br />Joaquim Nabuco - PE</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="w-4 h-4 flex-shrink-0 text-[#c9a869]" />
                    <span>(81) 99391-8154</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 flex flex-col lg:flex-row items-center justify-between gap-4 text-xs text-[#d9d3cb]">
              
              <p>
                © {new Date().getFullYear()} MJ Studio Beauty. Todos os direitos reservados.
              </p>

              <p className="text-[#d9d3cb] text-xs text-center font-light">
                by{" "}
                <a
                  href="https://www.instagram.com/seccolab/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#c9a869] font-medium hover:text-[#e0bc78] transition-colors duration-300"
                >
                  Secco
                </a>
              </p>
              
              <div className="flex gap-4 text-[11px]">
                <a
                  href="#"
                  className="hover:text-[#c9a869] transition-colors duration-300"
                >
                  Política de Privacidade
                </a>

                <a
                  href="#"
                  className="hover:text-[#c9a869] transition-colors duration-300"
                >
                  Termos de Uso
                </a>
              </div>

            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
