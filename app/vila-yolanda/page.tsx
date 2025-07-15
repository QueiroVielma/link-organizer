"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, MessageCircle, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function VilaYolandaPage() {
  const containerVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      x: -100,
      transition: { duration: 0.3 },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-gray-950 text-white">
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"></div>
      <div className="container mx-auto px-4 py-8 max-w-md relative z-10">
        <motion.div initial="hidden" animate="visible" exit="exit" variants={containerVariants} className="space-y-6">
          {/* Header com botão voltar */}
          <motion.div variants={itemVariants} className="flex items-center gap-4">
            <Button asChild variant="ghost" size="icon" className="text-gray-100 hover:bg-slate-800/50">
              <Link href="/">
                <ArrowLeft className="w-5 h-5" />
              </Link>
            </Button>
            <div>
              <h1 className="text-xl font-bold text-gray-100">Unidade Vila Yolanda</h1>
              <p className="text-gray-400 text-sm">Escolha uma opção</p>
            </div>
          </motion.div>

          {/* Logo */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="w-20 h-20 mx-auto rounded-full overflow-hidden shadow-2xl bg-transparent">
              <img
                src="/copettis-logo.png"
                alt="Copetti's Barbershop Logo"
                className="w-full h-full object-cover scale-110 -m-1"
                style={{
                  mixBlendMode: "screen",
                  filter: "contrast(1.1) brightness(1.1)",
                }}
              />
            </div>
          </motion.div>

          {/* Opções */}
          <motion.div variants={itemVariants} className="space-y-4">
            {/* WhatsApp */}
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                asChild
                className="w-full h-14 bg-gradient-to-r from-slate-800 to-gray-800 hover:from-slate-700 hover:to-gray-700 text-gray-100 border border-slate-600/30 rounded-xl shadow-lg backdrop-blur-sm"
              >
                <a
                  href="https://api.whatsapp.com/send/?phone=5545998227887&text=Ol%C3%A1%21+Gostaria+de+agendar+um+hor%C3%A1rio+na+barbearia.+Pode+me+ajudar%3F&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span className="font-medium">WhatsApp</span>
                </a>
              </Button>
            </motion.div>

            {/* Endereço */}
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                asChild
                className="w-full h-14 bg-gradient-to-r from-gray-800 to-slate-800 hover:from-gray-700 hover:to-slate-700 text-gray-100 border border-slate-600/30 rounded-xl shadow-lg backdrop-blur-sm"
              >
                <a
                  href="https://maps.app.goo.gl/hWCPvz71YM3wbPDi8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3"
                >
                  <MapPin className="w-5 h-5" />
                  <span className="font-medium">Ver Localização</span>
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Informações adicionais */}
          <motion.div
            variants={itemVariants}
            className="bg-slate-900/40 rounded-xl p-4 backdrop-blur-sm border border-slate-700/50"
          >
            <h3 className="font-semibold mb-2 text-gray-100">Informações da Unidade</h3>
            <p className="text-gray-400 text-sm">
              Nossa unidade Vila Yolanda oferece todos os serviços de barbearia com profissionais qualificados.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
