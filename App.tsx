
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { HeroArchitecture, BlueprintScene } from './components/ArchitectureScene';
import { FeatureGrid, TimelineSection, ChatBotPreview, OriginFlipCard } from './components/ServiceComponents';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Menu, X, MessageSquare, QrCode, Calendar, Info, ShieldCheck, Zap, Layers, Users, Maximize2 } from 'lucide-react';
import logo from './logo.png';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white text-kaa-navy selection:bg-kaa-gold selection:text-white font-sans">

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg tracking-wider leading-none text-kaa-navy">高雄市建築師公會官方LINE</span>
              <span className="text-[10px] tracking-[0.2em] text-kaa-slate font-bold">OFFICIAL LINE SERVICE</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-kaa-navy">
            <a href="#origin" onClick={scrollToSection('origin')} className="hover:text-kaa-gold transition-colors cursor-pointer uppercase">服務緣起</a>
            <a href="#features" onClick={scrollToSection('features')} className="hover:text-kaa-gold transition-colors cursor-pointer uppercase">六大功能</a>
            <a href="#bot" onClick={scrollToSection('bot')} className="hover:text-kaa-gold transition-colors cursor-pointer uppercase">智能助手</a>
            <a href="#planning" onClick={scrollToSection('planning')} className="hover:text-kaa-gold transition-colors cursor-pointer uppercase">時程規劃</a>
            <a
              href="#join"
              onClick={scrollToSection('join')}
              className="px-5 py-2 line-gradient text-white rounded-md hover:opacity-90 transition-all shadow-sm cursor-pointer flex items-center gap-2"
            >
              <MessageSquare size={16} /> 立即加入
            </a>
          </div>

          <button className="md:hidden text-kaa-navy p-2" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8 text-xl font-serif animate-fade-in">
          <a href="#origin" onClick={scrollToSection('origin')} className="hover:text-kaa-gold uppercase">服務緣起</a>
          <a href="#features" onClick={scrollToSection('features')} className="hover:text-kaa-gold uppercase">六大功能</a>
          <a href="#bot" onClick={scrollToSection('bot')} className="hover:text-kaa-gold uppercase">智能助手</a>
          <a href="#planning" onClick={scrollToSection('planning')} className="hover:text-kaa-gold uppercase">時程規劃</a>
          <a href="#join" onClick={scrollToSection('join')} className="px-8 py-3 line-gradient text-white rounded-md shadow-lg">立即加入 LINE</a>
          <button onClick={() => setMenuOpen(false)} className="mt-4 text-kaa-slate text-sm flex items-center gap-2"><X size={16} /> 關閉選單</button>
        </div>
      )}

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-300 via-gray-100 to-white">

        {/* Animated Flowing Light Background */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Atmospheric Blobs - Enhanced Visibility */}
          <motion.div
            className="absolute -top-[10%] -left-[10%] w-[70vw] h-[70vw] bg-yellow-400/20 rounded-full blur-[80px]"
            animate={{ x: [0, 100, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-[10%] -right-[10%] w-[70vw] h-[70vw] bg-blue-400/20 rounded-full blur-[80px]"
            animate={{ x: [0, -100, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
          {/* Flowing Light Beam - Enhanced Visibility */}
          <motion.div
            className="absolute inset-y-0 w-[60%] bg-gradient-to-r from-transparent via-white/80 to-transparent skew-x-[-25deg] blur-2xl"
            initial={{ x: '-150%', opacity: 0.7 }}
            animate={{ x: '150%' }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear", repeatDelay: 0.5 }}
          />
          {/* Secondary Golden Beam for richness */}
          <motion.div
            className="absolute inset-y-0 w-[40%] bg-gradient-to-r from-transparent via-yellow-100/40 to-transparent skew-x-[-15deg] blur-xl"
            initial={{ x: '-150%' }}
            animate={{ x: '150%' }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 2, repeatDelay: 1 }}
          />
        </div>

        <HeroArchitecture />
        <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-transparent via-white/10 to-white" />

        <div className="relative z-10 container mx-auto px-6 text-center text-kaa-navy">
          <div className="inline-block mb-4 px-4 py-1 border border-kaa-navy/20 text-kaa-navy text-xs tracking-[0.3em] uppercase font-bold rounded-sm backdrop-blur-md bg-white/50">
            Digital Transformation 2026
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 drop-shadow-sm">
            <span className="block md:inline">智慧公會</span>
            <span className="block md:inline my-2 md:my-0">·</span>
            <span className="block md:inline text-kaa-gold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-300" style={{ textShadow: 'none' }}>官方LINE</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-2xl text-kaa-slate font-light leading-relaxed mb-8">
            打破空間與時間限制，高雄市建築師公會官方 LINE 服務正式啟動。為會員打造最即時、最便利的會務數位門戶。
          </p>

          <div className="flex justify-center mb-12">
            <a
              href="#join"
              onClick={scrollToSection('join')}
              className="px-8 py-3 bg-kaa-navy text-white rounded-md font-bold text-lg shadow-lg hover:bg-gray-800 transition-all flex items-center justify-center gap-3 transform hover:scale-105"
            >
              <MessageSquare size={20} /> 立即加入
            </a>
          </div>

          <div className="flex justify-center">
            <a href="#origin" onClick={scrollToSection('origin')} className="group flex flex-col items-center gap-2 text-sm font-medium text-kaa-slate hover:text-kaa-navy transition-colors cursor-pointer">
              <span className="tracking-[0.2em]">向下探索</span>
              <span className="p-3 border border-kaa-navy/10 rounded-full group-hover:border-kaa-gold transition-colors bg-white/50 backdrop-blur-sm">
                <ArrowDown size={20} />
              </span>
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Origin Section */}
        <section id="origin" className="py-32 bg-white">
          <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-5 flex flex-col">
              <div className="inline-block mb-3 text-xs font-bold tracking-widest text-kaa-gold uppercase">Origin & Vision</div>
              <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight text-kaa-navy">
                <span className="block text-2xl md:text-3xl font-bold mb-2">
                  WHY WE NEED<br />
                  <span className="text-sm md:text-base tracking-[0.3em] font-normal block mt-1">OFFICIAL LINE</span>
                </span>
                為什麼我們需要<br /><span className="text-kaa-gold">官方 LINE</span> 而非群組？
              </h2>
              <div className="w-24 h-1.5 bg-kaa-gold mb-8"></div>

              {/* Mobile Only: Introductory Text */}
              <div className="block md:hidden mb-10 space-y-6 text-lg text-kaa-slate leading-relaxed">
                <p className="font-serif text-2xl text-kaa-navy font-medium italic">
                  「擺脫洗版困擾，讓公會服務回歸專業與精準。」
                </p>
                <p>
                  過去我們依賴 LINE 群組進行溝通，雖然方便，卻也帶來了訊息紛雜、重要公告容易被覆蓋、以及隱私權無法保障等問題。官方 LINE 服務的建置，正是為了解決這些溝通挑戰。
                </p>
              </div>

              {/* Image Section with Flip Card */}
              <div className="relative rounded-lg shadow-2xl overflow-visible">
                <OriginFlipCard isFlipped={isFlipped} onFlip={() => setIsFlipped(!isFlipped)} />
                <div className="mt-4 p-4 bg-kaa-cream rounded-sm border-l-2 border-kaa-gold text-kaa-slate text-xs italic">
                  提示：點擊上方圖片，體驗從傳統群組到官方智慧服務的翻轉進化。
                </div>
              </div>
            </div>

            <div className="md:col-span-7 flex flex-col h-full pt-4">
              {/* Desktop Only: Introductory Text */}
              <div className="hidden md:block mb-10 space-y-6 text-lg text-kaa-slate leading-relaxed">
                <p className="font-serif text-2xl text-kaa-navy font-medium italic">
                  「擺脫洗版困擾，讓公會服務回歸專業與精準。」
                </p>
                <p>
                  過去我們依賴 LINE 群組進行溝通，雖然方便，卻也帶來了訊息紛雜、重要公告容易被覆蓋、以及隱私權無法保障等問題。官方 LINE 服務的建置，正是為了解決這些溝通挑戰。
                </p>
              </div>

              <div className="w-full h-px bg-gray-100 mb-8 hidden md:block"></div>

              <div className="mt-auto">
                <AnimatePresence mode="wait">
                  {!isFlipped ? (
                    <motion.div
                      key="group"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.5 }}
                      className="space-y-6"
                    >
                      <div className="flex items-center gap-4 text-kaa-slate mb-6">
                        <div className="p-3 bg-gray-100 rounded-full"><Users size={32} /></div>
                        <h3 className="font-serif text-3xl font-bold text-kaa-navy">一般 LINE 群組</h3>
                      </div>
                      <p className="text-kaa-slate text-lg">傳統通訊方式的侷限性：</p>
                      <ul className="space-y-6 text-kaa-navy">
                        <li className="flex items-start gap-3">
                          <span className="mt-1.5 w-2 h-2 rounded-full bg-gray-400 shrink-0"></span>
                          <div>
                            <strong className="block text-xl">訊息洗版嚴重</strong>
                            <span className="text-kaa-slate">重要會務公告常被日常閒聊覆蓋，導致會員漏掉重要資訊。</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-1.5 w-2 h-2 rounded-full bg-gray-400 shrink-0"></span>
                          <div>
                            <strong className="block text-xl">隱私權缺乏保障</strong>
                            <span className="text-kaa-slate">所有成員皆可看到彼此的個資與發言，對於專業諮詢並不理想。</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-1.5 w-2 h-2 rounded-full bg-gray-400 shrink-0"></span>
                          <div>
                            <strong className="block text-xl">缺乏系統化整合</strong>
                            <span className="text-kaa-slate">無法串接公會數據庫，所有問題皆需依賴人工手動回覆。</span>
                          </div>
                        </li>
                      </ul>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="official"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.5 }}
                      className="space-y-6"
                    >
                      <div className="flex items-center gap-4 text-kaa-navy mb-6">
                        <div className="p-3 bg-kaa-gold text-white rounded-full shadow-lg"><Zap size={32} className="text-kaa-navy" /></div>
                        <h3 className="font-serif text-3xl font-bold">官方 LINE 服務</h3>
                      </div>
                      <p className="text-kaa-slate text-lg font-medium">數位轉型帶來的全面升級：</p>
                      <ul className="space-y-6">
                        <li className="flex items-start gap-3">
                          <span className="mt-1.5 w-2 h-2 rounded-full bg-kaa-gold shrink-0"></span>
                          <div>
                            <strong className="block text-xl text-kaa-navy">分眾推播技術</strong>
                            <span className="text-kaa-slate">依據會員需求分類訊息，確保您只收到與您執業相關的精準資訊。</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-1.5 w-2 h-2 rounded-full bg-kaa-gold shrink-0"></span>
                          <div>
                            <strong className="block text-xl text-kaa-navy">一對一保密諮詢</strong>
                            <span className="text-kaa-slate">建立與公會的專屬對話窗口，諮詢過程完全保密，維護專業尊嚴。</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-1.5 w-2 h-2 rounded-full bg-kaa-gold shrink-0"></span>
                          <div>
                            <strong className="block text-xl text-kaa-navy">24/7 AI 智慧助理</strong>
                            <span className="text-kaa-slate">隨時查詢法規、積分與表單，即刻獲得解答，服務不打烊。</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-1.5 w-2 h-2 rounded-full bg-kaa-gold shrink-0"></span>
                          <div>
                            <strong className="block text-xl text-kaa-navy">整合會務系統</strong>
                            <span className="text-kaa-slate">串連線上報名、繳費與圖書預約，手機就是您的行動事務所。</span>
                          </div>
                        </li>
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-32 bg-kaa-cream text-kaa-navy overflow-hidden relative">
          <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-multiply">
            <BlueprintScene />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <div className="inline-block mb-3 text-xs font-bold tracking-widest text-kaa-gold uppercase">Core Functions</div>
              <h2 className="font-serif text-4xl md:text-6xl mb-6">六大核心服務功能</h2>
              <p className="text-kaa-slate max-w-2xl mx-auto text-lg">
                針對建築師日常需求量身訂製，整合公會所有核心業務至單一數位入口。
              </p>
            </div>
            <FeatureGrid />
          </div>
        </section>

        {/* Bot Section */}
        <section id="bot" className="py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="order-2 lg:order-1">
                <ChatBotPreview />
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-kaa-cream text-kaa-gold text-xs font-bold tracking-widest uppercase rounded-sm mb-6 border border-kaa-gold/30">
                  AI ASSISTANT
                </div>
                <h2 className="font-serif text-4xl md:text-5xl mb-8 text-kaa-navy">24/7 LINE機器人</h2>
                <p className="text-lg text-kaa-slate mb-8 leading-relaxed">
                  不再需要等待上班時間撥打電話。公會 LINE 整合了強大的自動回覆機器人，能針對常見問題提供即時回覆。
                </p>
                <div className="space-y-6">
                  {[
                    {
                      name: "會務與會員服務",
                      style: "bg-blue-50 text-blue-700 border-blue-100",
                      tagStyle: "bg-blue-100 text-blue-800 hover:bg-blue-200",
                      keywords: ["會員輪值", "會員名錄", "委員會", "理監事", "建築師", "社團", "建築師委任"]
                    },
                    {
                      name: "財務相關",
                      style: "bg-emerald-50 text-emerald-700 border-emerald-100",
                      tagStyle: "bg-emerald-100 text-emerald-800 hover:bg-emerald-200",
                      keywords: ["收費標準", "匯款", "繳費", "本月退款", "報價", "酬金", "合約"]
                    },
                    {
                      name: "教育與活動",
                      style: "bg-orange-50 text-orange-700 border-orange-100",
                      tagStyle: "bg-orange-100 text-orange-800 hover:bg-orange-200",
                      keywords: ["專業進階課程", "活動行事曆", "積分", "金質獎", "仁和賞"]
                    },
                    {
                      name: "法規與實務",
                      style: "bg-rose-50 text-rose-700 border-rose-100",
                      tagStyle: "bg-rose-100 text-rose-800 hover:bg-rose-200",
                      keywords: ["法規訊息", "綠建築", "危老", "建管", "鑑定委託", "業務申辦", "招標公告", "招標疑義", "大林蒲"]
                    },
                    {
                      name: "資訊與聯絡",
                      style: "bg-violet-50 text-violet-700 border-violet-100",
                      tagStyle: "bg-violet-100 text-violet-800 hover:bg-violet-200",
                      keywords: ["電話", "網站首頁", "地圖", "大東", "最新消息", "下載", "Default"]
                    },
                    {
                      name: "社群媒體",
                      style: "bg-pink-50 text-pink-700 border-pink-100",
                      tagStyle: "bg-pink-100 text-pink-800 hover:bg-pink-200",
                      keywords: ["FACEBOOK", "INSTGRAM", "Youtube"]
                    }
                  ].map((category, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row sm:items-start gap-3">
                      <div className={`shrink-0 px-3 py-1.5 rounded-md text-sm font-bold border ${category.style} sm:w-32 text-center`}>
                        {category.name}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {category.keywords.map((keyword, kIdx) => (
                          <span key={kIdx} className={`px-3 py-1.5 text-sm rounded-full transition-all duration-200 hover:scale-125 cursor-default ${category.tagStyle}`}>
                            #{keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Planning Section */}
        <section id="planning" className="py-32 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <div className="inline-block mb-3 text-xs font-bold tracking-widest text-kaa-gold uppercase">Roadmap</div>
              <h2 className="font-serif text-4xl md:text-5xl mb-6 text-kaa-navy">製作方法與未來規劃</h2>
              <p className="text-lg text-kaa-slate leading-relaxed">
                公會官方 LINE 採取分階段開發模式，確保系統穩定並持續根據會員反饋優化。
              </p>
            </div>
            <TimelineSection />
          </div>
        </section>

        {/* Call to Action */}
        <section id="join" className="py-32 bg-white border-t border-gray-100">
          <div className="container mx-auto px-6">
            <div className="bg-kaa-gold rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
              <div className="md:w-1/2 p-12 md:p-20 flex flex-col justify-center text-kaa-navy">
                <h2 className="font-serif text-4xl md:text-5xl mb-6">現在就加入公會<br />官方 LINE</h2>
                <p className="text-kaa-navy/80 text-lg mb-10 leading-relaxed font-medium">
                  掌握最新建築脈動，體驗最便捷的數位會務服務。<br />
                  公會與您一同邁向智慧建築新視界。
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="https://lin.ee/Y2TbPdj" target="_blank" rel="noopener noreferrer">
                    <img src="https://scdn.line-apps.com/n/line_add_friends/btn/zh-Hant.png" alt="加入好友" height="36" className="h-[36px]" />
                  </a>
                  <div className="flex items-center gap-4 text-kaa-navy/60 text-2xl italic font-bold">
                    <span>或搜尋 ID: @kaa.org</span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 bg-white/20 p-12 flex flex-col items-center justify-center border-l border-white/10">
                <div className="bg-white p-6 rounded-2xl shadow-xl mb-6">
                  <div className="w-48 h-48 bg-white flex items-center justify-center p-2">
                    <img
                      src="https://qr-official.line.me/gs/M_536fdiax_BW.png?oat_content=qr"
                      alt="LINE QR Code"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <span className="text-kaa-navy font-bold tracking-widest uppercase text-xl">掃描 QR Code 加入</span>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer className="bg-gray-50 text-kaa-slate py-20 border-t border-gray-200">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <a href="https://www.kaa.org.tw/" target="_blank" rel="noopener noreferrer" className="text-kaa-navy font-serif font-bold text-3xl mb-4 flex items-center justify-center md:justify-start gap-3 hover:opacity-80 transition-opacity">
              <img src={logo} alt="Logo" className="w-8 h-8 object-contain" />
              高雄市建築師公會
            </a>
            <p className="text-sm max-w-md">807高雄市三民區博愛一路366號23樓<br />Tel: 07 323 7248</p>
          </div>
          <div className="flex gap-8 text-sm text-kaa-slate/80 font-medium">
          </div>
        </div>
        <div className="text-center mt-16 pt-8 border-t border-gray-200 text-[10px] tracking-widest text-kaa-slate/40 uppercase">
          © 2026 KAOHSIUNG ASSOCIATION OF ARCHITECTS. DIGITAL TRANSFORMATION PROJECT.
        </div>
      </footer>
    </div>
  );
};

export default App;
