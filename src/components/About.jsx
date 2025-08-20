import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Shield, Star, Users, Clock, Award } from 'lucide-react'

export default function About() {
  const stats = [
    { number: '500+', label: 'Passeios Realizados', icon: Star },
    { number: '200+', label: 'Pets Felizes', icon: Heart },
    { number: '100%', label: 'Satisfação', icon: Award },
    { number: '3+', label: 'Anos de Experiência', icon: Clock }
  ]

  const values = [
    {
      icon: Heart,
      title: 'Amor pelos Animais',
      description: 'Nossa paixão pelos pets é o que nos move. Cada cão é tratado com carinho especial e atenção individualizada.'
    },
    {
      icon: Shield,
      title: 'Segurança Primeiro',
      description: 'Priorizamos a segurança em todos os momentos. Cada passeio é planejado considerando o bem-estar do seu pet.'
    },
    {
      icon: Users,
      title: 'Equipe Qualificada',
      description: 'Nossa equipe é formada por profissionais apaixonados e qualificados no cuidado com animais.'
    }
  ]

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-gray-50 to-white">
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
            className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 rounded-full px-4 py-2 mb-6"
          >
            <Heart className="h-5 w-5" />
            <span className="font-medium">Sobre Nós</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Cuidamos do seu Pet com
            <span className="gradient-text block">Dedicação Total</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A Doghero Trips nasceu do amor pelos animais e da vontade de proporcionar 
            momentos únicos de diversão e exercício para os pets. Somos uma empresa 
            especializada em passeios caninos que prioriza o bem-estar, segurança e 
            felicidade dos nossos clientes de quatro patas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Nossa Missão
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Proporcionar experiências únicas e seguras para pets, promovendo sua 
                saúde física e mental através de passeios planejados e atividades 
                especializadas. Nosso compromisso é com a felicidade dos animais e 
                a tranquilidade dos tutores.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Acreditamos que cada pet merece atenção personalizada e cuidados especiais. 
                Por isso, cada passeio é único e adaptado às necessidades específicas do 
                seu companheiro canino.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {values.map((value, index) => {
                const IconComponent = value.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">
                        {value.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 3, 0]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative z-10"
            >
              <div className="bg-gradient-to-br from-primary-500 to-accent-500 rounded-3xl p-8 text-white shadow-2xl">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">Por que nos escolher?</h3>
                  <ul className="space-y-4">
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>Profissionais capacitados e apaixonados</span>
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>Atenção personalizada para cada pet</span>
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7, duration: 0.6 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>Segurança e diversão garantidas</span>
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9, duration: 0.6 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>Horários flexíveis e planejamento personalizado</span>
                    </motion.li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <IconComponent className="h-8 w-8 text-white" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2"
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}