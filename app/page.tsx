"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Instagram, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

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
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-gray-950 text-white">
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"></div>
      <div className="container mx-auto px-4 py-8 max-w-md relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-6"
        >
          {/* Logo e Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <div className="w-24 h-24 mx-auto rounded-full overflow-hidden shadow-2xl bg-transparent">
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
            <div>
              <h1 className="text-2xl font-bold text-gray-100">
                Copetti's barbershop
              </h1>
              <p className="text-gray-400 text-sm mt-2">
                ✂️ Mais que uma barbearia, um lugar de transformação.
              </p>
            </div>
          </motion.div>

          {/* Links Principais */}
          <motion.div variants={itemVariants} className="space-y-4">
            {/* Instagram */}
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                asChild
                className="w-full h-14 bg-gradient-to-r from-purple-800 to-pink-800 hover:from-purple-700 hover:to-pink-700 text-white border-0 rounded-xl shadow-lg"
              >
                <a
                  href="https://www.instagram.com/copettisbarbershop/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3"
                >
                  <Instagram className="w-5 h-5" />
                  <span className="font-medium">Instagram</span>
                </a>
              </Button>
            </motion.div>

            {/* Unidade Felipe Wandscheer */}
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                asChild
                className="w-full h-14 bg-gradient-to-r from-gray-800 to-slate-800 hover:from-gray-700 hover:to-slate-700 text-gray-100 border border-slate-600/30 rounded-xl shadow-lg backdrop-blur-sm"
              >
                <Link
                  href="/felipe-wandscheer"
                  className="flex items-center justify-center gap-3"
                >
                  <MapPin className="w-5 h-5" />
                  <span className="font-medium">Unidade Felipe Wandscheer</span>
                </Link>
              </Button>
            </motion.div>

            {/* Unidade Vila Yolanda */}
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                asChild
                className="w-full h-14 bg-gradient-to-r from-slate-800 to-gray-800 hover:from-slate-700 hover:to-gray-700 text-gray-100 border border-slate-600/30 rounded-xl shadow-lg backdrop-blur-sm"
              >
                <Link
                  href="/vila-yolanda"
                  className="flex items-center justify-center gap-3"
                >
                  <MapPin className="w-5 h-5" />
                  <span className="font-medium">Unidade Vila Yolanda</span>
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Footer */}
          <motion.div variants={itemVariants} className="text-center pt-8">
            <p className="text-gray-500 text-xs">
              © 2025 Copetti's Barbershop - Todos os direitos reservados
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
