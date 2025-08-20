import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Navigation, Heart, Send, CheckCircle, AlertCircle } from 'lucide-react'
import ReCAPTCHA from 'react-google-recaptcha'

export default function Contact() {
  const recaptchaRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState({
    message: '',
    isError: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ message: '', isError: false })

    try {
      const token = await recaptchaRef.current.executeAsync()
      
      const payload = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        recipientEmail: 'ffbrunoff@yahoo.com.br',
        token: token
      }

      const response = await fetch('https://qotdxwocbcoirjlqjkjhq.supabase.co/functions/v1/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      })

      if (response.ok) {
        setStatus({
          message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
          isError: false
        })
        setFormData({ name: '', email: '', message: '' })
      } else {
        throw new Error('Erro ao enviar mensagem')
      }
    } catch (error) {
      setStatus({
        message: 'Erro ao enviar mensagem. Tente novamente ou entre em contato por telefone.',
        isError: true
      })
    } finally {
      setIsSubmitting(false)
      recaptchaRef.current.reset()
    }
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'ffbrunoff@yahoo.com.br',
      link: 'mailto:ffbrunoff@yahoo.com.br'
    },
    {
      icon: Phone,
      title: 'Telefone',
      value: 'Entre em contato via formulário',
      link: null
    },
    {
      icon: Navigation,
      title: 'Localização',
      value: 'Atendemos toda a região',
      link: null
    }
  ]

  const benefits = [
    'Resposta rápida em até 24 horas',
    'Orçamento personalizado gratuito',
    'Primeira consulta sem compromisso',
    'Flexibilidade de horários',
    'Profissionais qualificados',
    'Segurança total garantida'
  ]

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-gray-50 to-white">
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
            <span className="font-medium">Entre em Contato</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Vamos Cuidar do seu
            <span className="gradient-text block">Melhor Amigo</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Entre em contato conosco e descubra como podemos proporcionar momentos 
            especiais e seguros para seu pet. Estamos prontos para atender você!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Fale Conosco
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Estamos aqui para esclarecer suas dúvidas e criar o plano perfeito 
                para seu pet. Entre em contato e vamos conversar sobre como podemos 
                ajudar seu companheiro a ter momentos ainda mais felizes.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {info.title}
                      </h4>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-primary-600 hover:text-primary-700 transition-colors duration-200"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-gray-600">{info.value}</span>
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8"
            >
              <h4 className="text-2xl font-bold text-gray-900 mb-6">
                Por que nos escolher?
              </h4>
              <div className="grid gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-6 h-6 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Envie sua Mensagem
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="Seu nome completo"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="seu@email.com"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Conte-nos sobre seu pet e como podemos ajudar..."
                  />
                </motion.div>

                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={`flex items-center space-x-2 p-4 rounded-lg ${
                      status.isError 
                        ? 'bg-red-50 text-red-700 border border-red-200' 
                        : 'bg-green-50 text-green-700 border border-green-200'
                    }`}
                  >
                    {status.isError ? (
                      <AlertCircle className="h-5 w-5" />
                    ) : (
                      <CheckCircle className="h-5 w-5" />
                    )}
                    <span>{status.message}</span>
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Enviar Mensagem</span>
                    </>
                  )}
                </motion.button>
              </form>

              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6Lc7xpsrAAAAAKh0I1boee2JN1oO8iF_yd0ihl79"
                size="invisible"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}