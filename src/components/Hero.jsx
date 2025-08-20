import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Star, Award, Navigation } from 'lucide-react'

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  const features = [
    { icon: Heart, text: 'Carinho e Dedicação' },
    { icon: Star, text: 'Experiência Única' },
    { icon: Award, text: 'Qualidade Garantida' },
    { icon: Navigation, text: 'Aventuras Seguras' }
  ]

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600"></div>
      
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/4 right-20 w-32 h-32 bg-accent-400/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-primary-300/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-16 h-16 bg-white/10 rounded-full blur-lg"></div>
      </div>

      <div className="relative z-10 container-max section-padding text-center text-white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left lg:pr-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
            >
              <Heart className="h-5 w-5 text-accent-300" />
              <span className="text-sm font-medium">Cuidado Especializado</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Aventuras
              <span className="block gradient-text text-accent-300">
                Inesquecíveis
              </span>
              para seu Pet
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed"
            >
              Proporcionamos passeios únicos e seguros para seu melhor amigo. 
              Cada aventura é planejada com carinho e dedicação para garantir 
              momentos especiais e felizes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="btn-accent text-lg px-10 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Agendar Agora
              </motion.button>
              
              <motion.button
                onClick={() => scrollToSection('about')}
                className="btn-secondary bg-white/20 border-white/30 text-white hover:bg-white hover:text-primary-600 text-lg px-10 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Saiba Mais
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                    className="flex items-center space-x-3 text-white/90"
                  >
                    <div className="p-2 bg-white/20 rounded-lg">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <span className="font-medium">{feature.text}</span>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative z-10"
            >
              <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8">
                <div className="bg-white rounded-2xl p-6 shadow-2xl">
                  <div className="text-center text-gray-800">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1, duration: 0.5 }}
                      className="w-24 h-24 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full mx-auto mb-4 flex items-center justify-center"
                    >
                      <Heart className="h-12 w-12 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-2">100% Amor</h3>
                    <p className="text-gray-600">Cuidado dedicado em cada passeio</p>
                    
                    <div className="flex justify-center space-x-1 mt-4">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1.2 + i * 0.1 }}
                        >
                          <Star className="h-5 w-5 text-yellow-400 fill-current" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center cursor-pointer"
          onClick={() => scrollToSection('about')}
        >
          <span className="text-sm mb-2">Descubra mais</span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/70 rounded-full mt-2"
            ></motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}