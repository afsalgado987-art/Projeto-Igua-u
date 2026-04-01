/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Info, Image as ImageIcon, Mail, Menu, X, FileText, Layers, Building2 } from 'lucide-react';

// --- Components ---

const DiamondMosaic = () => {
  const images = [
    'https://picsum.photos/seed/belfordroxo1/600/600',
    'https://picsum.photos/seed/iguacu1/600/600',
    'https://picsum.photos/seed/rio_de_janeiro1/600/600',
    'https://picsum.photos/seed/urban1/600/600',
    'https://picsum.photos/seed/aerial1/600/600',
    'https://picsum.photos/seed/river1/600/600',
    'https://picsum.photos/seed/community1/600/600',
    'https://picsum.photos/seed/nature1/600/600',
    'https://picsum.photos/seed/project1/600/600',
    'https://picsum.photos/seed/rio2/600/600',
    'https://picsum.photos/seed/rio3/600/600',
    'https://picsum.photos/seed/rio4/600/600',
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-slate-950">
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 opacity-15 bg-cover bg-center bg-no-repeat grayscale"
        style={{ 
          backgroundImage: `url('https://picsum.photos/seed/aerial_view_rio/1920/1080')`,
        }}
      />
      
      {/* Diamond Grid Layer */}
      <div className="absolute inset-0 flex flex-wrap justify-center items-center gap-2 scale-150 rotate-45 opacity-25">
        {Array.from({ length: 36 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              delay: (i % 12) * 0.03, 
              duration: 1.5,
              ease: "easeOut"
            }}
            className="w-32 h-32 overflow-hidden rounded-sm shadow-xl border border-white/20 bg-slate-900"
          >
            <img
              src={images[i % images.length]}
              alt={`Mosaic ${i}`}
              className="w-full h-full object-cover -rotate-45 scale-150 opacity-80"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        ))}
      </div>

      {/* Overlay Gradients for Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-transparent to-slate-950/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-slate-950/80" />
    </div>
  );
};

const TabContent = ({ activeTab }: { activeTab: string }) => {
  switch (activeTab) {
    case 'sobre':
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto p-8 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 text-white shadow-2xl"
        >
          <h2 className="text-4xl font-black mb-8 flex items-center gap-3 tracking-tighter">
            <Info className="w-10 h-10 text-blue-400" /> SOBRE O PROJETO
          </h2>
          
          <div className="space-y-6 text-lg leading-relaxed text-slate-200">
            <p>
              O <span className="text-blue-400 font-bold">Projeto Iguaçu - Belford Roxo</span> tem como objetivo a contratação de empresa especializada para a execução de levantamento de campo, estudo hidráulico, projeto básico, projeto executivo e execução das obras de controle de inundações e recuperação ambiental das bacias dos rios Iguaçu-Botas.
            </p>

            <div className="bg-blue-500/10 border-l-4 border-blue-500 p-6 rounded-r-xl my-8">
              <p className="text-sm uppercase tracking-widest text-blue-400 font-bold mb-2">Investimento 1ª Fase</p>
              <p className="text-3xl font-black text-white">R$ 129.511.507,98</p>
              <p className="text-sm text-slate-400 mt-2">Financiamento pelo <span className="text-white font-semibold">Programa Novo PAC - 1ª seleção</span>.</p>
            </div>

            <p>
              As ações envolvem a <span className="text-white font-semibold">requalificação hidráulica</span> dos rios Iguaçu e Rio Botas, incluindo:
            </p>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {[
                "Reformulação de pontes",
                "Implantação de parques",
                "Praças fluviais",
                "Revegetação das margens"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 bg-white/5 p-3 rounded-lg border border-white/5">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      );
    case 'justificativa':
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto p-8 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 text-white shadow-2xl"
        >
          <h2 className="text-4xl font-black mb-8 flex items-center gap-3 tracking-tighter">
            <FileText className="w-10 h-10 text-amber-400" /> JUSTIFICATIVA
          </h2>
          
          <div className="space-y-6 text-lg leading-relaxed text-slate-200">
            <p>
              O projeto foi estruturado com base no <span className="text-amber-400 font-bold">Plano Diretor do Iguaçu</span>, desenvolvido pela <span className="text-white font-semibold">COPPE/UFRJ</span>, e responde a um histórico de enchentes, perdas humanas e prejuízos materiais na região.
            </p>

            <div className="bg-amber-500/10 border-l-4 border-amber-500 p-6 rounded-r-xl my-8">
              <p className="text-sm uppercase tracking-widest text-amber-400 font-bold mb-2">Contexto Crítico</p>
              <p className="text-xl font-medium text-white italic">
                "As chuvas de 13 de janeiro de 2024 agravaram esse cenário, evidenciando a necessidade de continuidade das obras de complementação e urbanização que foram interrompidas no passado."
              </p>
            </div>

            <p>
              A proposta busca atingir três pilares fundamentais para a região:
            </p>
            
            <div className="grid grid-cols-1 gap-4 mt-4">
              {[
                { title: "Controle de Inundações", desc: "Melhorar a vazão e o manejo das águas pluviais." },
                { title: "Recuperação Ambiental", desc: "Restaurar áreas ambientalmente degradadas ao longo das bacias." },
                { title: "Qualidade de Vida", desc: "Ampliar a segurança e o bem-estar de toda a população local." }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 p-4 rounded-xl border border-white/5 flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0 text-amber-400 font-bold">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{item.title}</h4>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      );
    case 'escopo':
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto p-8 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 text-white shadow-2xl"
        >
          <h2 className="text-4xl font-black mb-8 flex items-center gap-3 tracking-tighter">
            <Layers className="w-10 h-10 text-emerald-400" /> ESCOPO DA FASE 1
          </h2>
          
          <div className="space-y-6 text-lg leading-relaxed text-slate-200">
            <p>
              A <span className="text-emerald-400 font-bold">Fase 1</span> tem como foco principal a melhoria do sistema de macrodrenagem, com intervenções nos <span className="text-white font-semibold">rios Botas e Iguaçu</span>, no trecho entre a divisa com Nova Iguaçu e a fronteira com Duque de Caxias.
            </p>

            <div className="bg-emerald-500/10 border-l-4 border-emerald-500 p-6 rounded-r-xl my-8">
              <h4 className="text-sm uppercase tracking-widest text-emerald-400 font-bold mb-4">Bairros Contemplados</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Xavantes", "Nova Piam", "Vila Maia", "São Bernardo", 
                  "Santa Maria", "Recantus", "Parque São Vicente", 
                  "Capim Melado", "Jardim Santa Marta", "Jardim Brasil", "Lote XV"
                ].map((bairro, i) => (
                  <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-sm border border-white/10">
                    {bairro}
                  </span>
                ))}
              </div>
            </div>

            <p>
              Também está prevista a <span className="text-white font-semibold">urbanização da área do Polder do Outeiro</span>, contribuindo para:
            </p>
            
            <ul className="space-y-3 mt-4">
              {[
                "Controle de inundações",
                "Valorização urbana",
                "Melhoria da qualidade de vida"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">
                    ✓
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      );
    case 'realizacao':
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto p-8 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 text-white shadow-2xl"
        >
          <h2 className="text-4xl font-black mb-12 flex items-center gap-3 tracking-tighter">
            <Building2 className="w-10 h-10 text-sky-400" /> REALIZAÇÃO
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-items-center">
            {[
              { src: 'input_file_5.png', alt: 'Projeto Iguaçu Belford Roxo - RJ' },
              { src: 'input_file_4.png', alt: 'Prefeitura de Belford Roxo' },
              { src: 'input_file_2.png', alt: 'Ministério das Cidades' },
              { src: 'input_file_3.png', alt: 'Novo PAC' },
              { src: 'input_file_0.png', alt: 'Caixa Econômica Federal' },
              { src: 'input_file_1.png', alt: 'Governo Federal Brasil' },
            ].map((logo, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-2xl shadow-lg flex items-center justify-center w-full h-40 overflow-hidden"
              >
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="max-w-full max-h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 p-6 bg-sky-500/10 border border-sky-500/20 rounded-2xl text-center">
            <p className="text-slate-300 text-sm font-medium italic">
              União e colaboração para o desenvolvimento e segurança de Belford Roxo.
            </p>
          </div>
        </motion.div>
      );
    case 'galeria':
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20"
        >
          <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-2">
            <ImageIcon className="w-8 h-8 text-purple-400" /> Galeria de Fotos
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="aspect-square rounded-xl overflow-hidden group relative">
                <img
                  src={`https://picsum.photos/seed/galeria${n}/500/500`}
                  alt={`Galeria ${n}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-medium">
                  Ver Detalhes
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      );
    case 'contato':
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-xl mx-auto p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white"
        >
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <Mail className="w-8 h-8 text-green-400" /> Entre em Contato
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Nome</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Seu nome" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">E-mail</label>
              <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="seu@email.com" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Mensagem</label>
              <textarea className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 h-32 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Como podemos ajudar?"></textarea>
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors">
              Enviar Mensagem
            </button>
          </form>
        </motion.div>
      );
    default:
      return null;
  }
};

export default function App() {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-50 selection:bg-blue-500/30">
      <DiamondMosaic />

      {/* Header / Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center bg-gradient-to-b from-slate-950/80 to-transparent backdrop-blur-sm">
        <motion.h1 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="text-2xl font-black tracking-tighter cursor-pointer"
          onClick={() => setActiveTab(null)}
        >
          PROJETO <span className="text-blue-500">IGUAÇU</span>
        </motion.h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {['sobre', 'justificativa', 'escopo', 'galeria', 'contato', 'realizacao'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-sm font-bold uppercase tracking-widest transition-all hover:text-blue-400 ${
                activeTab === tab ? 'text-blue-500 border-b-2 border-blue-500' : 'text-slate-400'
              }`}
            >
              {tab === 'escopo' ? 'Escopo' : tab === 'realizacao' ? 'Realização' : tab}
            </button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-40 bg-slate-950 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {['sobre', 'justificativa', 'escopo', 'galeria', 'contato', 'realizacao'].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setIsMenuOpen(false);
                }}
                className="text-3xl font-black uppercase tracking-tighter hover:text-blue-500 transition-colors"
              >
                {tab === 'escopo' ? 'Escopo Fase 1' : tab === 'realizacao' ? 'Realização' : tab}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="relative z-10 pt-32 pb-20 px-6 min-h-screen flex flex-col items-center justify-center">
        <AnimatePresence mode="wait">
          {!activeTab ? (
            <motion.div
              key="hero"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -50 }}
              className="text-center space-y-12"
            >
              <div className="space-y-6">
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="flex flex-col items-center gap-2"
                >
                  <motion.h2
                    initial={{ scale: 0.8, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 1.5, 
                      ease: [0.16, 1, 0.3, 1],
                      delay: 0.2
                    }}
                    className="text-5xl md:text-8xl font-black tracking-tighter leading-none text-center"
                  >
                    PROJETO <span className="text-blue-500">IGUAÇU</span>
                  </motion.h2>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="flex flex-col items-center"
                  >
                    <p className="text-2xl md:text-4xl font-bold text-slate-300 tracking-tight">
                      Belford Roxo
                    </p>
                    <motion.p 
                      initial={{ opacity: 0, letterSpacing: "0.5em" }}
                      animate={{ opacity: 1, letterSpacing: "0.2em" }}
                      transition={{ delay: 1.2, duration: 1.5 }}
                      className="text-xl md:text-2xl font-medium text-blue-400/80 uppercase"
                    >
                      Rio de Janeiro
                    </motion.p>
                  </motion.div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="flex flex-wrap justify-center gap-6"
              >
                <button
                  onClick={() => setActiveTab('sobre')}
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-lg shadow-blue-500/20"
                >
                  Conhecer Projeto
                </button>
                <button
                  onClick={() => setActiveTab('galeria')}
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full font-bold text-lg transition-all hover:scale-105 border border-white/10"
                >
                  Ver Galeria
                </button>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full"
            >
              <TabContent activeTab={activeTab} />
              <div className="mt-12 text-center">
                <button
                  onClick={() => setActiveTab(null)}
                  className="text-slate-500 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest"
                >
                  ← Voltar ao Início
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 text-center text-slate-600 text-xs font-medium tracking-widest uppercase">
        © 2026 Projeto Iguaçu • Belford Roxo, RJ
      </footer>
    </div>
  );
}
