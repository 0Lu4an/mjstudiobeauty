import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PremiumButton } from './components/PremiumButton';
import { LocationMap } from './components/LocationMap';
import { Navbar } from './components/Navbar';
import { ScrollToTop } from './components/ScrollToTop';
//import { Preloader } from './components/Preloader';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { Sparkles, Star, Award, Calendar, Heart, Mail, MapPin, Phone, Clock } from 'lucide-react';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';

export default function App() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const services = [
    {
      title: 'Micropigmentação',
      description: 'Técnicas avançadas para sobrancelhas, lábios e olhos com resultado natural e duradouro',
      icon: Sparkles,
      image: 'https://images.unsplash.com/photo-1621691553102-66d4ecdb1be2?w=800&q=80'
    },
    {
      title: 'Design de Sobrancelhas',
      description: 'Modelagem personalizada que valoriza sua expressão e harmonia facial',
      icon: Star,
      image: 'https://images.unsplash.com/photo-1634052970539-224813476367?w=800&q=80'
    },
    {
      title: 'Lash Lifting',
      description: 'Curvatura natural dos cílios com efeito volumoso e duradouro',
      icon: Award,
      image: 'https://images.unsplash.com/photo-1653640869615-e9878a2c8344?w=800&q=80'
    }
  ];

  const testimonials = [
    {
      name: 'Maria Clara',
      text: 'Sério, eu amei demais o resultado. Minhas sobrancelhas ficaram perfeitas.',
      rating: 5
    },

    {
      name: 'Mariana',
      text: 'Atendimento maravilhoso e um cuidado enorme em cada detalhe. Já quero voltar de novo.',
      rating: 5
    },

    {
      name: 'Jully Costa',
      text: 'Ficou muito mais natural do que eu imaginava. Todo mundo elogiou quando eu cheguei em casa kkkkk',
      rating: 5
    }
  ];

  return (
    <>
      {/* <Preloader /> */}
      <div className="min-h-screen bg-[#fafafa] antialiased">
        <Navbar />
        <ScrollToTop />
        <WhatsAppFloat />

      {/* Hero Section - Editorial Layout */}
      <motion.section
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#f8f8f8] via-white to-[#faf9f7]"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #1a1a1a 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 w-full relative z-10 py-20 lg:py-0">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content - Asymmetric */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:pr-12"
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="inline-block mb-6"
              >
                <span className="text-xs tracking-[0.3em] uppercase text-[#888] font-light">Premium Beauty Studio</span>
              </motion.div>

              <h1 className="text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] tracking-tight mb-8">
                <span className="block font-extralight text-[#1a1a1a]">MJ Studio</span>
                <span className="block font-light italic text-[#666] mt-2">Beauty</span>
              </h1>

              <p className="text-base lg:text-lg text-[#666] font-light leading-relaxed mb-10 max-w-lg">
                Onde técnica refinada encontra arte premium.
                <span className="block mt-4">Especialistas em micropigmentação e design de sobrancelhas de alta performance.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <a href="#contato">
                  <PremiumButton variant="primary">
                    Agendar Consulta
                  </PremiumButton>
                </a>
                <a href="#servicos">
                  <PremiumButton variant="ghost">
                    Nossos Serviços
                  </PremiumButton>
                </a>
              </div>

              {/* Stats - Refinado */}
              <div className="grid grid-cols-3 gap-6 lg:gap-8 pt-12 lg:pt-16 border-t border-[#e5e5e5]">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <div className="text-2xl lg:text-3xl font-light mb-2">500+</div>
                  <div className="text-[10px] lg:text-xs tracking-wide uppercase text-[#888]">Clientes</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  <div className="text-2xl lg:text-3xl font-light mb-2">8+</div>
                  <div className="text-[10px] lg:text-xs tracking-wide uppercase text-[#888]">Anos</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  <div className="text-2xl lg:text-3xl font-light mb-2">100%</div>
                  <div className="text-[10px] lg:text-xs tracking-wide uppercase text-[#888]">Satisfação</div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Image - Editorial Style */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative lg:block hidden"
            >
              <div className="relative aspect-[3/4] max-h-[70vh] rounded-sm overflow-hidden shadow-2xl shadow-black/10">
                <img
                  src="https://images.unsplash.com/photo-1776482127816-98d2245d22a6?w=1200&q=90"
                  alt="MJ Studio Interior"
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              {/* Floating Badge - Refinado */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute -bottom-6 -left-6 bg-white p-6 lg:p-8 rounded-sm shadow-2xl shadow-black/10 backdrop-blur-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#fafafa] flex items-center justify-center">
                    <Award className="w-5 h-5 lg:w-6 lg:h-6 text-[#1a1a1a]" />
                  </div>
                  <div>
                    <div className="font-light text-sm">Certificado</div>
                    <div className="text-xs text-[#888] tracking-wide">Premium Quality</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services - Asymmetric Grid */}
      <section id="servicos" className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-16 lg:mb-20">
            <div className="lg:col-span-5">
              <span className="text-xs tracking-[0.3em] uppercase text-[#888] font-light">Serviços Premium</span>
              <h2 className="text-4xl lg:text-5xl font-light mt-6 leading-tight">
                Excelência em <br />
                <span className="italic text-[#666]">cada detalhe</span>
              </h2>
            </div>
            <div className="lg:col-span-7 flex items-end">
              <p className="text-base lg:text-lg text-[#666] font-light leading-relaxed max-w-xl">
                Combinamos técnica avançada, produtos premium e atendimento personalizado para resultados que superam expectativas.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/5] rounded-sm overflow-hidden mb-6 shadow-lg shadow-black/5 group-hover:shadow-xl group-hover:shadow-black/10 transition-shadow duration-500">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="absolute bottom-6 left-6 right-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <button className="w-full bg-white text-[#1a1a1a] px-6 py-3 rounded-full text-sm font-light tracking-wide hover:bg-[#f8f8f8] transition-colors duration-300">
                      Saiba Mais →
                    </button>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#fafafa] flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#1a1a1a] transition-colors duration-300">
                    <service.icon className="w-5 h-5 text-[#1a1a1a] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-lg lg:text-xl font-light mb-2">{service.title}</h3>
                    <p className="text-sm text-[#666] font-light leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section - Masonry Style */}
      <section id="portfolio" className="py-20 lg:py-28 bg-[#fafafa]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 lg:mb-20">
            <span className="text-xs tracking-[0.3em] uppercase text-[#888] font-light">Portfolio</span>
            <h2 className="text-4xl lg:text-5xl font-light mt-6">Nosso Trabalho</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="col-span-2 row-span-2"
            >
              <div className="relative aspect-square rounded-sm overflow-hidden group cursor-pointer shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10 transition-shadow duration-500">
                <img
                  src="https://images.unsplash.com/photo-1759262151080-e05ba1c6294f?w=800&q=80"
                  alt="Portfolio - Resultado de micropigmentação premium"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="aspect-square"
            >
              <div className="relative h-full rounded-sm overflow-hidden group cursor-pointer shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10 transition-shadow duration-500">
                <img
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80"
                  alt="Portfolio - Design de sobrancelhas"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="aspect-square"
            >
              <div className="relative h-full rounded-sm overflow-hidden group cursor-pointer shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10 transition-shadow duration-500">
                <img
                  src="https://images.unsplash.com/photo-1630595271375-5073a6c0638b?w=600&q=80"
                  alt="Portfolio - Ambiente premium do studio"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="aspect-square"
            >
              <div className="relative h-full rounded-sm overflow-hidden group cursor-pointer shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10 transition-shadow duration-500">
                <img
                  src="https://images.unsplash.com/photo-1635073912661-d55add03c6e6?w=600&q=80"
                  alt="Portfolio - Tratamentos de beleza"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="aspect-square"
            >
              <div className="relative h-full rounded-sm overflow-hidden group cursor-pointer shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10 transition-shadow duration-500">
                <img
                  src="https://images.unsplash.com/photo-1544161558-d5fa96ee28c6?w=600&q=80"
                  alt="Portfolio - Produtos premium"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials - Premium Cards */}
      <section id="depoimentos" className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          <div className="text-center mb-16 lg:mb-20">
            <span className="text-xs tracking-[0.3em] uppercase text-[#888] font-light">
              Depoimentos
            </span>

            <h2 className="text-4xl lg:text-5xl font-light mt-6">
              O que dizem sobre nós
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="
                  bg-[#fcfcfc]
                  p-8 lg:p-10
                  rounded-[28px]
                  relative
                  border border-[#f1f1f1]
                  transition-all duration-500
                  hover:-translate-y-1
                  hover:shadow-[0_10px_40px_rgba(0,0,0,0.04)]
                "
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-black text-black"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-[#777] font-light leading-[1.9] mb-10 italic text-[15px]">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div>
                  <div className="text-[#1a1a1a] text-sm font-normal">
                    {testimonial.name}
                  </div>

                  <div className="text-[#999] text-xs mt-1 tracking-wide">
                    Cliente Premium
                  </div>
                </div>

                {/* Quote */}
                <div className="absolute top-8 right-8 text-5xl text-black opacity-[0.03] font-serif">
                  "
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="contato" className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <LocationMap />
        </div>
      </section>

      {/* CTA Section - Premium */}
      <section className="py-20 lg:py-24 bg-[#1a1a1a] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs tracking-[0.3em] uppercase text-white/60 font-light">Experiência Premium</span>
            <h2 className="text-4xl lg:text-5xl font-light mt-6 mb-6 lg:mb-8 leading-tight">
              Agende sua transformação
            </h2>
            <p className="text-base lg:text-lg text-white/70 font-light leading-relaxed mb-10 lg:mb-12 max-w-2xl mx-auto">
              Reserve seu horário e descubra o que é receber um atendimento verdadeiramente exclusivo e personalizado.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5581993918154?text=Olá! Gostaria de agendar um horário no MJ Studio Beauty."
                target="_blank"
                rel="noopener noreferrer"
              >
                <PremiumButton variant="secondary">
                  <Calendar className="w-4 h-4" />
                  Agendar Agora
                </PremiumButton>
              </a>

              <a
                href="https://wa.me/5581993918154?text=Olá! Gostaria de mais informações sobre os serviços."
                target="_blank"
                rel="noopener noreferrer"
              >
                <PremiumButton variant="ghost">
                  <Phone className="w-4 h-4" />
                  Entre em Contato
                </PremiumButton>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer - Sophisticated */}
      <footer className="bg-[#fafafa] border-t border-[#e5e5e5]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12 lg:mb-16">
            <div className="lg:col-span-2">
              <h3 className="text-2xl lg:text-3xl font-light mb-4">MJ Studio Beauty</h3>
              <p className="text-sm text-[#666] font-light leading-relaxed max-w-md mb-6">
                Premium beauty studio especializado em micropigmentação e design de sobrancelhas. Excelência, técnica e arte.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/mj_studiobeauty/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-[#e5e5e5] flex items-center justify-center hover:border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-all duration-300"
                >
                  <FaInstagram className="w-4 h-4" />
                </a>

                <a
                  href="https://www.facebook.com/mjstudiobeauty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-[#e5e5e5] flex items-center justify-center hover:border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-all duration-300"
                >
                  <FaFacebookF className="w-4 h-4" />
                </a>

                <a
                  href="mailto:contato@mjstudio.com"
                  className="w-10 h-10 rounded-full border border-[#e5e5e5] flex items-center justify-center hover:border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-all duration-300"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-xs lg:text-sm tracking-wide uppercase mb-6 text-[#888] font-light">Serviços</h4>
              <ul className="space-y-3 text-sm font-light text-[#666]">
                <li><a href="#" className="hover:text-[#1a1a1a] transition-colors duration-300">Micropigmentação</a></li>
                <li><a href="#" className="hover:text-[#1a1a1a] transition-colors duration-300">Design de Sobrancelhas</a></li>
                <li><a href="#" className="hover:text-[#1a1a1a] transition-colors duration-300">Lash Lifting</a></li>
                <li><a href="#" className="hover:text-[#1a1a1a] transition-colors duration-300">Consultoria</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs lg:text-sm tracking-wide uppercase mb-6 text-[#888] font-light">Contato</h4>
              <ul className="space-y-3 text-sm font-light text-[#666]">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>R. Getúlio Vargas - Centro<br />Joaquim Nabuco - PE</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>(81) 99391-8154</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 lg:pt-8 border-t border-[#e5e5e5] flex flex-col lg:flex-row justify-between items-center gap-4 text-xs text-[#888]">
            <p>© 2026 MJ Studio Beauty. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#1a1a1a] transition-colors duration-300">Política de Privacidade</a>
              <a href="#" className="hover:text-[#1a1a1a] transition-colors duration-300">Termos de Uso</a>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
}
