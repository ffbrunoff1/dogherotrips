import React from 'react'
import { motion } from 'framer-motion'
import { Dog, Heart, Mail, Navigation } from 'lucide-react'

export default function Footer() {
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

  const footerLinks = [
    {
      title: 'Navegação',
      links: [
        { label: 'Início', action: () => scrollToSection('hero') },
        { label: 'Sobre', action: () => scrollToSection('about') },
        { label: 'Serviços', action: () => scrollToSection('services') },
        { label: 'Contato', action: () => scrollToSection('contact') }
      ]
    },
    {
      title: 'Serviços',
      links: [
        { label: 'Passeios Individuais', action: () => scrollToSection('services') },
        { label: 'Passeios em Grupo', action: () => scrollToSection('services') },
        { label: 'Aventuras Especiais', action: () => scrollToSection('services') },
        { label: 'Pet Sitting', action: () => scrollToSection('services') }
      ]
    },
    {
      title: 'Contato',
      links: [
        { label: 'ffbrunoff@yahoo.com.br', action: () => window.open('mailto:ffbrunoff@yahoo.com.br') },
        { label: 'Agendar Passeio', action: () => scrollToSection('contact') },
        { label: 'Emergência', action: () => scrollToSection('contact') },
        { label: 'Suporte', action: () => scrollToSection('contact') }
      ]
    }
  ]

  const features = [
    { icon: Heart, text: 'Amor pelos Pets' },
    { icon: Navigation, text: 'Aventuras Seguras' },
    { icon: Mail, text: 'Suporte 24h' }
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-primary-900 text-white pb-20">
      <div className="container-max">
        <div className="grid lg:grid-cols-4 gap-12 section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <motion.div 
              className="flex items-center space-x-3 mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="p-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl">
                <Dog className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Doghero Trips</h3>
                <p className="text-sm text-gray-300">Aventuras Caninas</p>
              </div>
            </motion.div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Proporcionamos experiências únicas e seguras para seu melhor amigo, 
              com todo carinho e profissionalismo que ele merece.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                      <IconComponent className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-300">{feature.text}</span>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {footerLinks.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: sectionIndex * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold mb-6 text-white">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={linkIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: sectionIndex * 0.2 + linkIndex * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <button
                      onClick={link.action}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-left hover:translate-x-2 transform transition-transform"
                    >
                      {link.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-gray-300 text-center md:text-left"
            >
              <p>&copy; 2024 Doghero Trips. Todos os direitos reservados.</p>
              <p className="text-sm mt-1">
                Criado com <em className="text-accent-400 font-semibold">
                  <a href="https://papum.ai" target="_blank" rel="noopener noreferrer" className="hover:text-accent-300 transition-colors duration-200">
                    Papum
                  </a>
                </em>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center space-x-6"
            >
              <motion.button
                onClick={() => scrollToSection('hero')}
                className="text-gray-300 hover:text-white transition-colors duration-200"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Voltar ao Topo
              </motion.button>
              
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:from-primary-600 hover:to-accent-600 hover:shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Fale Conosco
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500/20 to-accent-500/20 backdrop-blur-sm rounded-full px-6 py-3 border border-primary-500/30">
            <Heart className="h-5 w-5 text-accent-400" />
            <span className="text-gray-300">
              Cuidando do seu pet com amor desde 2021
            </span>
            <Heart className="h-5 w-5 text-accent-400" />
          </div>
        </motion.div>
      </div>
    </footer>
  )
}