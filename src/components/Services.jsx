import React from 'react'
import { motion } from 'framer-motion'
import { Dog, Heart, Clock, Shield, Star, Navigation } from 'lucide-react'

export default function Services() {
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

  const services = [
    {
      icon: Dog,
      title: 'Passeios Individuais',
      description: 'Passeios personalizados com atenção exclusiva para seu pet, respeitando seu ritmo e necessidades específicas.',
      features: ['Atenção individualizada', 'Duração flexível', 'Relatório do passeio', 'Fotos incluídas'],
      price: 'A partir de R$ 45',
      popular: false
    },
    {
      icon: Heart,
      title: 'Passeios em Grupo',
      description: 'Socialização supervisionada com outros cães, promovendo interação social saudável e diversão em grupo.',
      features: ['Máximo 4 cães', 'Socialização supervisionada', 'Exercícios em grupo', 'Cuidado especializado'],
      price: 'A partir de R$ 35',
      popular: true
    },
    {
      icon: Navigation,
      title: 'Aventuras Especiais',
      description: 'Passeios temáticos e aventuras em locais especiais, como praias, parques e trilhas adequadas para cães.',
      features: ['Locais especiais', 'Aventuras temáticas', 'Equipamentos incluídos', 'Experiência única'],
      price: 'A partir de R$ 80',
      popular: false
    },
    {
      icon: Clock,
      title: 'Pet Sitting',
      description: 'Cuidados especializados na sua casa, garantindo que seu pet fique confortável em seu ambiente familiar.',
      features: ['Cuidado domiciliar', 'Horários flexíveis', 'Relatórios detalhados', 'Emergência 24h'],
      price: 'A partir de R$ 60',
      popular: false
    },
    {
      icon: Shield,
      title: 'Cuidados Especiais',
      description: 'Atenção especializada para pets idosos, filhotes ou com necessidades especiais de saúde e comportamento.',
      features: ['Cuidados médicos', 'Medicação assistida', 'Monitoramento especial', 'Profissionais qualificados'],
      price: 'A partir de R$ 70',
      popular: false
    },
    {
      icon: Star,
      title: 'Pacotes Premium',
      description: 'Planos mensais com desconto especial, incluindo múltiplos serviços e acompanhamento personalizado.',
      features: ['Múltiplos serviços', 'Desconto especial', 'Acompanhamento mensal', 'Prioridade no agendamento'],
      price: 'A partir de R$ 300/mês',
      popular: false
    }
  ]

  const benefits = [
    'Profissionais qualificados e apaixonados por animais',
    'Seguro total para seu pet durante os passeios',
    'Relatórios detalhados com fotos de cada passeio',
    'Flexibilidade de horários para sua conveniência',
    'Atendimento personalizado para cada necessidade',
    'Emergência veterinária 24 horas disponível'
  ]

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-accent-100 text-accent-700 rounded-full px-4 py-2 mb-6"
          >
            <Star className="h-5 w-5" />
            <span className="font-medium">Nossos Serviços</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Serviços Especializados
            <span className="gradient-text block">para seu Melhor Amigo</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos uma variedade completa de serviços para garantir que seu pet 
            tenha a melhor experiência possível, com segurança, diversão e muito carinho.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className={`relative card hover:scale-105 ${
                  service.popular ? 'border-2 border-accent-400 shadow-xl' : ''
                }`}
              >
                {service.popular && (
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-accent-500 to-accent-600 text-white px-4 py-1 rounded-full text-sm font-semibold"
                  >
                    Mais Popular
                  </motion.div>
                )}

                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className={`w-16 h-16 ${
                    service.popular 
                      ? 'bg-gradient-to-br from-accent-500 to-accent-600' 
                      : 'bg-gradient-to-br from-primary-500 to-primary-600'
                  } rounded-xl flex items-center justify-center mb-6`}
                >
                  <IconComponent className="h-8 w-8 text-white" />
                </motion.div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + featureIndex * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <div className="text-3xl font-bold text-gray-900 mb-6">
                    {service.price}
                  </div>
                  
                  <motion.button
                    onClick={() => scrollToSection('contact')}
                    className={`w-full ${
                      service.popular ? 'btn-accent' : 'btn-primary'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Agendar Agora
                  </motion.button>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl p-8 lg:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Por que escolher nossos serviços?
              </h3>
              <div className="grid gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-700 leading-relaxed">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="bg-white rounded-2xl p-8 shadow-2xl"
              >
                <div className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <Heart className="h-10 w-10 text-white" />
                  </motion.div>
                  
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">
                    Agende seu primeiro passeio
                  </h4>
                  
                  <p className="text-gray-600 mb-6">
                    Entre em contato conosco e descubra como podemos cuidar do seu pet 
                    com todo amor e profissionalismo que ele merece.
                  </p>
                  
                  <motion.button
                    onClick={() => scrollToSection('contact')}
                    className="btn-primary text-lg px-8 py-4"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Entrar em Contato
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}