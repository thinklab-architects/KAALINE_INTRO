
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, Search, Send, Smartphone, RefreshCw, Calendar, School, Share2, CircleDollarSign, X, ArrowRight, ChevronRight, RotateCw } from 'lucide-react';
import traditionalGroupImg from '../傳統LINE群組.png';
import officialServiceImg from '../官方LINE服務.png';
import newsIcon from '../ICON/最新消息.jpg';
import regulationsIcon from '../ICON/法規資訊.jpg';
import refundIcon from '../ICON/本月退款.jpg';
import eventsIcon from '../ICON/活動訊息.jpg';
import coursesIcon from '../ICON/研討活動.jpg';
import socialIcon from '../ICON/社交媒體.jpg';
import logo from '../logo.png';

interface OriginFlipCardProps {
  isFlipped: boolean;
  onFlip: () => void;
}

export const OriginFlipCard: React.FC<OriginFlipCardProps> = ({ isFlipped, onFlip }) => {
  return (
    <div
      className="relative w-full aspect-[4/3] perspective-1000 group cursor-pointer"
      onClick={onFlip}
    >
      <motion.div
        className="w-full h-full relative preserve-3d"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* Front side: Traditional/Messy */}
        <div className="absolute inset-0 backface-hidden rounded-lg overflow-hidden shadow-2xl">
          <img
            src={traditionalGroupImg}
            alt="Traditional Messy Group"
            className="w-full h-full object-cover"
          />

        </div>

        {/* Back side: Modern/Official */}
        <div className="absolute inset-0 backface-hidden rounded-lg overflow-hidden shadow-2xl rotate-y-180">
          <img
            src={officialServiceImg}
            alt="Official Digital Service"
            className="w-full h-full object-cover"
          />

        </div>

      </motion.div >
    </div >
  );
};

export const FeatureGrid: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);
  const [isModalFlipped, setIsModalFlipped] = useState(false);

  const openFeature = (index: number) => {
    setSelectedFeature(index);
    setIsModalFlipped(false);
  };

  const features = [
    {
      title: "最新消息",
      icon: newsIcon,
      desc: "即時掌握公會公告與業界動態",
      details: "透過官方 LINE NEWS，您將第一時間收到公會發布的最新公告、會議通知以及建築業界的重要動態。",
      link: "https://thinklab-architects.github.io/news/",
      images: {
        front: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=1200",
        back: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&q=80&w=1200"
      }
    },
    {
      title: "法規資訊",
      icon: regulationsIcon,
      desc: "建築法規數據庫快速檢索",
      details: "整合全國與高雄市在地建築法規新消息。輸入關鍵字即可快速檢索相關法規資訊。提供手機版最佳化閱讀體驗。",
      link: "https://thinklab-architects.github.io/line-code/",
      images: {
        front: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=1200",
        back: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200"
      }
    },
    {
      title: "查詢退費",
      icon: refundIcon,
      desc: "線上查詢掛號與退費進度",
      details: "輸入案件掛號號碼，即可即時查詢案件審查進度與退費辦理情形。省去電話詢問的等待時間，隨時隨地掌握案件流向，提升事務所行政效率。",
      link: "",
      images: {
        front: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200",
        back: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=1200"
      }
    },
    {
      title: "活動訊息",
      icon: eventsIcon,
      desc: "公會活動與講座行事曆",
      details: "公會舉辦的各類參訪活動、會員聯誼等行程一目了然。確保您不錯過任何精彩活動，讓您的行程安排更加從容。",
      link: "https://thinklab-architects.github.io/line-event/",
      images: {
        front: "https://images.unsplash.com/photo-1540317580384-e5d43867caa6?auto=format&fit=crop&q=80&w=1200",
        back: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1200"
      }
    },
    {
      title: "研討課程",
      icon: coursesIcon,
      desc: "專業進修課程報名與紀錄",
      details: "瀏覽最新的專業進修課程資訊，並可直接連結線上報名。方便隨時查看最新課程的積分。",
      link: "https://thinklab-architects.github.io/line-courses/",
      images: {
        front: "https://images.unsplash.com/photo-1524178232363-1fb2b075b955?auto=format&fit=crop&q=80&w=1200",
        back: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1200"
      }
    },
    {
      title: "社交媒體",
      icon: socialIcon,
      desc: "連結公會 Facebook 與 YouTube",
      details: "匯集公會所有的社群媒體頻道。可以與其他會員進行線上互動。建立更緊密的專業社群網絡，分享執業心得，並獲取第一手的活動花絮。",
      link: "https://thinklab-architects.github.io/line-social/",
      images: {
        front: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1200",
        back: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&q=80&w=1200"
      }
    }
  ];

  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
        {features.map((f, i) => (
          <div key={i} className="flex justify-center w-full">
            <motion.div
              whileHover={{ y: -5 }}
              onClick={() => openFeature(i)}
              className="w-full lg:w-[75%] aspect-[4/3] flex flex-col items-center justify-center bg-kaa-gold rounded-sm group hover:bg-yellow-400 transition-all duration-300 p-2 md:p-6 text-kaa-navy shadow-sm cursor-pointer relative"
            >
              <div className="mb-2 md:mb-3">
                <img src={f.icon as string} alt={f.title} className="w-10 h-10 md:w-14 md:h-14 object-contain rounded-full shadow-sm" />
              </div>
              <h3 className="font-serif text-base md:text-xl font-bold tracking-widest text-center mb-1 md:mb-2">{f.title}</h3>
              <p className="text-center font-medium opacity-80 text-[10px] md:text-xs leading-relaxed max-w-full md:max-w-[90%] line-clamp-2 md:line-clamp-none">
                {f.desc}
              </p>
              <div className="absolute bottom-1 right-1 md:bottom-3 md:right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-0 translate-x-2">
                <ArrowRight size={14} className="text-kaa-navy/50 md:w-4 md:h-4" />
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedFeature !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedFeature(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-gray-900/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 30 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-full max-w-6xl h-[80vh] rounded-xl shadow-2xl overflow-hidden relative flex flex-col md:flex-row"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedFeature(null)}
                className="absolute top-6 right-6 p-2 bg-white/80 hover:bg-white rounded-full transition-colors text-kaa-navy z-20 shadow-md backdrop-blur-sm"
              >
                <X size={24} />
              </button>

              {/* Left Column: Text Content */}
              <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center bg-white overflow-y-auto relative order-2 md:order-1">
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-kaa-gold/10 text-kaa-navy/70 text-xs font-bold tracking-widest uppercase rounded-sm mb-4 border border-kaa-gold/20">
                    Feature .0{selectedFeature + 1}
                  </div>
                  <h3 className="text-4xl md:text-5xl font-serif font-bold text-kaa-navy mb-6 flex items-center gap-4">
                    <img src={features[selectedFeature].icon as string} alt={features[selectedFeature].title} className="w-16 h-16 object-contain rounded-full shadow-md" />
                    {features[selectedFeature].title}
                  </h3>
                  <div className="w-20 h-1 bg-kaa-gold mb-8"></div>
                  <p className="text-xl text-kaa-slate font-medium mb-4 leading-relaxed">
                    {features[selectedFeature].desc}
                  </p>
                </div>

                <div className="space-y-6">
                  <p className="text-base md:text-lg text-gray-600 leading-8 text-justify">
                    {features[selectedFeature].details}
                  </p>

                  <div className="pt-6">
                    <a
                      href={features[selectedFeature].link || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-8 py-3 bg-kaa-navy text-white font-bold uppercase tracking-wider text-sm rounded-sm hover:bg-kaa-gold hover:text-kaa-navy transition-all shadow-lg group"
                    >
                      ENTER <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Flip Image */}
              <div
                className="w-full md:w-1/2 relative h-48 md:h-auto order-1 md:order-2 bg-gray-100 perspective-1000 group cursor-pointer"
                onClick={() => setIsModalFlipped(!isModalFlipped)}
              >
                <motion.div
                  className="w-full h-full relative preserve-3d"
                  initial={false}
                  animate={{ rotateY: isModalFlipped ? 180 : 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  {/* Front Side */}
                  <div className="absolute inset-0 backface-hidden">
                    <div className="absolute inset-0 bg-kaa-navy/10 z-10 mix-blend-multiply"></div>
                    <img
                      src={features[selectedFeature].images.front}
                      alt={features[selectedFeature].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent z-10 md:hidden"></div>
                    <div className="absolute bottom-8 right-8 z-20 flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/40 text-white group-hover:bg-white/30 transition-all">
                      <RotateCw size={16} className="animate-spin-slow" />
                      <span className="text-xs font-bold tracking-widest uppercase">點擊翻轉</span>
                    </div>
                  </div>

                  {/* Back Side */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 bg-kaa-navy">
                    <div className="absolute inset-0 bg-kaa-gold/10 z-10 mix-blend-overlay"></div>
                    <img
                      src={features[selectedFeature].images.back}
                      alt={`${features[selectedFeature].title} Details`}
                      className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute bottom-8 right-8 z-20 flex items-center gap-2 bg-kaa-gold/80 backdrop-blur-sm px-4 py-2 rounded-full text-kaa-navy shadow-lg">
                      <RotateCw size={16} />
                      <span className="text-xs font-bold tracking-widest uppercase">返回正面</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export const TimelineSection: React.FC = () => {
  const steps = [
    { phase: "第一階段", title: "基礎平台建立", date: "2026 Q1", items: ["官方帳號認證", "基礎選單架設", "會務公告串接"] },
    { phase: "第二階段", title: "互動服務上線", date: "2026 Q2", items: ["講習報名系統", "積分即時查詢", "自動回覆機器人"] },
    { phase: "第三階段", title: "深度會員整合", date: "2026 Q3-Q4", items: ["線上金流繳費", "數位證書核發", "AI 法規助手"] }
  ];

  return (
    <div className="relative">
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-kaa-gold/30 -translate-x-1/2 hidden md:block"></div>

      <div className="space-y-16">
        {steps.map((s, i) => (
          <div key={i} className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
            <div className="flex-1 w-full">
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`p-8 bg-white rounded-sm relative transition-shadow duration-500 ${i === 0 ? 'shadow-[0_0_40px_rgba(250,204,21,0.5)] border-2 border-kaa-gold ring-4 ring-kaa-gold/10' : 'shadow-xl border border-gray-100'}`}
              >
                {/* WE ARE HERE Indicator for the first card */}
                {i === 0 && (
                  <div className="absolute -top-12 right-4 flex flex-col items-center animate-bounce z-20">
                    <div className="bg-kaa-gold text-kaa-navy px-4 py-1.5 rounded-full shadow-lg border border-white flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                      </span>
                      <span className="text-xs font-bold tracking-widest uppercase">We are here</span>
                    </div>
                    <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-kaa-gold -mt-[1px]"></div>
                  </div>
                )}

                <div className="absolute top-4 right-4 text-base font-bold text-kaa-gold font-mono">{s.date}</div>
                <div className="text-kaa-gold font-bold text-lg mb-2 uppercase tracking-widest">{s.phase}</div>
                <h3 className="font-serif text-3xl text-kaa-navy mb-6">{s.title}</h3>
                <ul className="space-y-2">
                  {s.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-kaa-slate text-lg italic">
                      <div className="w-1 h-1 bg-kaa-gold"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <div className="relative z-10 w-16 h-16 bg-white border-4 border-kaa-gold rounded-full flex items-center justify-center text-kaa-navy text-xl font-bold shadow-lg">
              {i + 1}
            </div>

            <div className="flex-1 hidden md:block"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const ChatBotPreview: React.FC = () => {
  const [messages, setMessages] = useState([
    { role: 'bot', text: '我是社團法人高雄市建築師公會。\n感謝您加入好友😉' },
    { role: 'user', text: '理監事' },
    { role: 'bot', text: '有關第十七屆"理監事"相關資訊請參考以下網址\nhttps://www.kaa.org.tw/aboutkaa03.php' }
  ]);

  return (
    <div className="max-w-md mx-auto bg-gray-100 rounded-[3rem] p-4 shadow-2xl border-[8px] border-white">
      <div className="bg-white rounded-[2rem] overflow-hidden flex flex-col h-[500px] border border-gray-200">
        <div className="bg-kaa-gold p-6 flex items-center gap-3">
          <div className="w-8 h-8 bg-white text-kaa-navy rounded-full flex items-center justify-center font-bold">高</div>
          <div className="flex flex-col">
            <span className="text-kaa-navy text-sm font-bold">社團法人高雄市建築師公會</span>
            <span className="text-kaa-navy/60 text-[10px] flex items-center gap-1">● 在線上</span>
          </div>
        </div>

        <div className="flex-1 p-4 space-y-4 overflow-y-auto bg-gray-50">
          {messages.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start items-end gap-2'}`}
            >
              {m.role === 'bot' && (
                <img src={logo} alt="Bot Avatar" className="w-8 h-8 rounded-full mb-1 shadow-sm bg-white" />
              )}
              <div className={`max-w-[80%] p-3 rounded-2xl text-sm whitespace-pre-wrap ${m.role === 'user' ? 'bg-kaa-navy text-white rounded-tr-none' : 'bg-white border border-gray-200 text-kaa-slate rounded-tl-none shadow-sm'}`}>
                {m.text.split(/(https?:\/\/[^\s]+)/g).map((part, i) =>
                  part.match(/https?:\/\/[^\s]+/) ?
                    <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="text-kaa-gold underline hover:text-yellow-600 break-all">{part}</a> :
                    part
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="p-4 border-t border-gray-100 flex items-center gap-2">
          <div className="flex-1 h-10 bg-gray-100 rounded-full px-4 flex items-center text-xs text-kaa-slate italic">
            請輸入您的問題...
          </div>
          <div className="w-10 h-10 bg-kaa-gold rounded-full flex items-center justify-center text-kaa-navy">
            <Send size={16} />
          </div>
        </div>
      </div>
    </div>
  );
}
