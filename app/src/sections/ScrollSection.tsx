import { useEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { X } from 'lucide-react';
import { solarTerms, seasonImages, type SolarTerm } from '@/data/solarTerms';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedTerm, setSelectedTerm] = useState<SolarTerm | null>(null);
  const [bgImage, setBgImage] = useState(seasonImages.spring);
  const triggersRef = useRef<ScrollTrigger[]>([]);
  const initializedRef = useRef(false);

  const handleTermClick = useCallback((term: SolarTerm) => {
    setSelectedTerm(term);
  }, []);

  // Robust scroll initialization: waits for fonts, images, and observes resize
  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    let resizeObserver: ResizeObserver | null = null;
    let rafId: number;

    const initScroll = async () => {
      // Wait for fonts to be ready
      if (document.fonts) {
        await document.fonts.ready;
      }
      // Wait two frames for browser to finish layout with real font metrics
      await new Promise((r) => { rafId = requestAnimationFrame(() => requestAnimationFrame(r)); });

      // Force reflow
      void track.offsetHeight;

      // Directly sum each card's rendered width + gap for accuracy
      const cards = track.querySelectorAll('.term-card');
      const gap = 24; // Tailwind gap-6 = 24px
      let trackTotal = 0;
      cards.forEach((card) => {
        trackTotal += (card as HTMLElement).offsetWidth + gap;
      });
      // Extra padding so the last card can fully enter center viewport
      const extra = window.innerWidth * 0.35;
      const totalWidth = trackTotal + extra - window.innerWidth;

      // Kill old triggers
      triggersRef.current.forEach((t) => t.kill());
      triggersRef.current = [];

      const ctx = gsap.context(() => {
        // Main horizontal scroll
        const mainTl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: () => `+=${Math.max(totalWidth, 1000)}`,
            pin: true,
            scrub: 1.2,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            fastScrollEnd: true,
            onUpdate: (self) => {
              const progress = self.progress;
              const newIndex = Math.min(
                Math.floor(progress * solarTerms.length),
                solarTerms.length - 1
              );
              setActiveIndex(newIndex);

              const currentTerm = solarTerms[newIndex];
              if (currentTerm) {
                const newBg = seasonImages[currentTerm.season];
                setBgImage((prev) => (prev !== newBg ? newBg : prev));
              }
            },
          },
        });

        mainTl.to(track, {
          x: -totalWidth,
          ease: 'none',
        });

        if (mainTl.scrollTrigger) {
          triggersRef.current.push(mainTl.scrollTrigger);
        }

        // Card 3D dragon-scale entrance
        cards.forEach((card) => {
          const cardEl = card as HTMLElement;
          const cardIndex = Number(cardEl.dataset.index) || 0;

          const cardTrigger = ScrollTrigger.create({
            trigger: section,
            start: 'top top',
            end: () => `+=${totalWidth}`,
            scrub: 1,
            onUpdate: (self) => {
              const progress = self.progress;
              const cardProgress = progress * solarTerms.length - cardIndex;
              const clamped = Math.max(0, Math.min(1, cardProgress));

              gsap.set(cardEl, {
                rotateY: (1 - clamped) * -12,
                rotateX: (1 - clamped) * 2,
                scale: 0.88 + clamped * 0.12,
                opacity: 0.35 + clamped * 0.65,
                z: clamped * 40,
                transformPerspective: 1200,
                transformOrigin: 'center center',
              });
            },
          });
          triggersRef.current.push(cardTrigger);
        });

        ScrollTrigger.refresh();
        initializedRef.current = true;
      }, section);

      return () => {
        ctx.revert();
      };
    };

    // Init after brief delay then also watch for resize
    const timer = setTimeout(() => {
      initScroll();

      // Re-init on resize when track width changes significantly
      resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          const newWidth = entry.contentRect.width;
          // If width changed by more than 50px, re-init
          if (initializedRef.current && Math.abs(newWidth - (track.dataset.lastWidth ? parseInt(track.dataset.lastWidth) : 0)) > 50) {
            track.dataset.lastWidth = String(newWidth);
            initScroll();
          }
        }
      });
      resizeObserver.observe(track);
    }, 500);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(rafId);
      if (resizeObserver) resizeObserver.disconnect();
      triggersRef.current.forEach((t) => t.kill());
      triggersRef.current = [];
    };
  }, []);

  const activeTerm = solarTerms[activeIndex];
  const accentColor = activeTerm?.colors[0].hex || '#D12920';

  return (
    <div ref={sectionRef} className="relative w-full h-screen overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 will-change-transform"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transition: 'background-image 1.2s ease-in-out',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#141414]/85 via-[#141414]/50 to-[#141414]/85" />
        <div
          className="absolute inset-0 transition-colors duration-1000 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 50% 50%, ${accentColor}12 0%, transparent 70%)`,
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(24)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${(i / 24) * 100}%`,
              top: `${15 + (i % 7) * 10}%`,
              animation: `floatMedium ${5 + (i % 4)}s ease-in-out infinite`,
              animationDelay: `${i * 0.35}s`,
            }}
          >
            <div
              className="w-1.5 h-1.5 rounded-full opacity-30"
              style={{
                backgroundColor: accentColor,
                filter: `blur(${1 + (i % 3)}px)`,
              }}
            />
          </div>
        ))}
      </div>

      {/* Horizontal scroll track */}
      <div
        ref={trackRef}
        className="absolute top-0 left-0 h-full flex items-center gap-6"
        style={{ width: 'max-content', paddingLeft: '12vw', paddingRight: '40vw' }}
      >
        {solarTerms.map((term, index) => (
          <TermCard
            key={term.id}
            term={term}
            index={index}
            isActive={index === activeIndex}
            onClick={() => handleTermClick(term)}
          />
        ))}
      </div>

      {/* UI Overlays */}
      {/* Progress bar */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-48 md:w-64 h-0.5 bg-[#F7F5F0]/10 rounded-full z-10">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{
            width: `${((activeIndex + 1) / solarTerms.length) * 100}%`,
            backgroundColor: accentColor,
          }}
        />
      </div>

      {/* Top left season indicator */}
      <div className="absolute top-6 left-6 flex items-center gap-3 z-10">
        <div
          className="w-2.5 h-2.5 rounded-full"
          style={{ backgroundColor: accentColor, boxShadow: `0 0 12px ${accentColor}60` }}
        />
        <div className="font-serif-title text-base md:text-lg text-[#F7F5F0]/70">
          {activeTerm?.seasonName} · {activeTerm?.month}
        </div>
      </div>

      {/* Bottom right active term */}
      <div className="absolute bottom-6 right-6 text-right z-10">
        <div className="font-calligraphy text-3xl md:text-4xl text-[#F7F5F0]/80">
          {activeTerm?.name}
        </div>
        <div className="font-wenkai text-xs text-[#F7F5F0]/40 mt-1">
          {activeTerm?.pinyin} · {activeTerm?.dateRange}
        </div>
      </div>

      {/* Right side navigation dots */}
      <div className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 flex flex-col gap-1.5 z-10">
        {solarTerms.map((term, i) => (
          <div
            key={term.id}
            className="group relative flex items-center justify-end"
          >
            <span className="font-wenkai text-[10px] text-[#F7F5F0]/0 group-hover:text-[#F7F5F0]/50 transition-all duration-300 absolute right-3 whitespace-nowrap">
              {term.name}
            </span>
            <div
              className="rounded-full transition-all duration-500"
              style={{
                width: i === activeIndex ? 4 : 3,
                height: i === activeIndex ? 20 : 5,
                backgroundColor: i === activeIndex ? accentColor : 'rgba(247,245,240,0.12)',
                opacity: i <= activeIndex ? 1 : 0.3,
              }}
            />
          </div>
        ))}
      </div>

      {/* Detail modal */}
      {selectedTerm && (
        <SolarTermDetail term={selectedTerm} onClose={() => setSelectedTerm(null)} />
      )}
    </div>
  );
}

/* Term Card — 融入ChatGPT方案排版 */
function TermCard({
  term,
  index,
  isActive,
  onClick,
}: {
  term: SolarTerm;
  index: number;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <div
      data-index={index}
      className="term-card relative flex-shrink-0 w-[80vw] sm:w-[55vw] md:w-[42vw] lg:w-[36vw] h-[65vh] md:h-[72vh] cursor-pointer group"
      style={{ transformStyle: 'preserve-3d', perspective: '1200px' }}
      onClick={onClick}
    >
      <div
        className="relative w-full h-full rounded-xl overflow-hidden transition-all duration-700"
        style={{
          boxShadow: isActive
            ? `0 30px 80px -20px ${term.colors[0].hex}50, 0 0 0 1px ${term.colors[0].hex}25`
            : '0 10px 40px -15px rgba(0,0,0,0.4)',
          background: `linear-gradient(135deg, rgba(20,20,20,0.92) 0%, ${term.colors[0].hex}08 50%, rgba(20,20,20,0.95) 100%)`,
          border: `1px solid ${isActive ? term.colors[0].hex + '40' : 'rgba(247,245,240,0.06)'}`,
        }}
      >
        {/* Inner decorative border */}
        <div
          className="absolute inset-2 md:inset-3 border rounded-lg pointer-events-none transition-colors duration-700"
          style={{
            borderColor: isActive ? `${term.colors[0].hex}25` : 'rgba(247,245,240,0.05)',
          }}
        />

        {/* Content */}
        <div className="relative h-full flex flex-col p-6 md:p-8">
          {/* Top: Number + Season badge */}
          <div className="flex justify-between items-start mb-2">
            <div className="flex items-center gap-3">
              <span
                className="font-serif-title text-3xl md:text-4xl leading-none"
                style={{ color: term.colors[0].hex }}
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="flex flex-col">
                <span className="font-wenkai text-[10px] text-[#F7F5F0]/40 tracking-widest">
                  {term.month}
                </span>
                <span className="font-wenkai text-[10px] text-[#F7F5F0]/25">
                  {term.dateRange}
                </span>
              </div>
            </div>
            <div
              className="px-2.5 py-1 rounded-full text-[10px] md:text-xs font-wenkai tracking-wider"
              style={{
                backgroundColor: `${term.colors[0].hex}18`,
                color: term.colors[0].hex,
                border: `1px solid ${term.colors[0].hex}35`,
              }}
            >
              {term.seasonName}
            </div>
          </div>

          {/* Middle: 节气名 + 拼音 */}
          <div className="mt-4 mb-2">
            <h2 className="font-calligraphy text-5xl md:text-6xl lg:text-7xl text-[#F7F5F0] text-shadow-glow leading-none">
              {term.name}
            </h2>
            <p className="font-wenkai text-xs md:text-sm text-[#F7F5F0]/40 tracking-[0.3em] mt-2">
              {term.pinyin}
            </p>
          </div>

          {/* 留白呼吸区 */}
          <div className="flex-1 min-h-[40px]" />

          {/* 节气歌片段 — 小字点缀 */}
          <div className="mb-3">
            <p className="font-wenkai text-xs md:text-sm text-[#F7F5F0]/30 tracking-wider">
              <span style={{ color: term.colors[0].hex, opacity: 0.6 }}>{term.songFragment}</span>
              <span className="mx-1">·</span>
              节气歌
            </p>
          </div>

          {/* 情绪句 — 重点放大（传播核心） */}
          <div className="mb-4">
            <p
              className="font-wenkai text-base md:text-lg lg:text-xl leading-relaxed"
              style={{ color: `${term.colors[0].hex}CC` }}
            >
              {term.emotion}
            </p>
          </div>

          {/* 诗句 */}
          <div className="max-w-sm mb-5">
            <p className="font-wenkai text-sm md:text-base text-[#F7F5F0]/50 leading-relaxed">
              {term.poem.slice(0, 28)}...
            </p>
            <p className="font-wenkai text-xs text-[#F7F5F0]/25 mt-1.5">
              ——{term.dynasty} · {term.poet}
            </p>
          </div>

          {/* Bottom: Colors */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-4 h-px bg-[#F7F5F0]/15" />
              <span className="font-wenkai text-[10px] text-[#F7F5F0]/30 tracking-widest">
                传统色谱
              </span>
            </div>
            <div className="flex gap-2 md:gap-3">
              {term.colors.map((color) => (
                <div key={color.name} className="group/color relative">
                  <div
                    className="w-7 h-7 md:w-9 md:h-9 rounded-full transition-transform duration-500 group-hover/color:scale-110"
                    style={{
                      backgroundColor: color.hex,
                      boxShadow: `0 2px 10px -2px ${color.hex}50`,
                    }}
                  />
                  <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap font-wenkai text-[10px] text-[#F7F5F0]/0 group-hover/color:text-[#F7F5F0]/50 transition-all duration-300">
                    {color.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hover hint */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-black/15">
          <div
            className="px-5 py-2.5 rounded-full font-wenkai text-sm tracking-wider"
            style={{
              backgroundColor: `${term.colors[0].hex}25`,
              color: '#F7F5F0',
              backdropFilter: 'blur(8px)',
              border: `1px solid ${term.colors[0].hex}40`,
            }}
          >
            点击查看详情
          </div>
        </div>
      </div>

      {/* Dragon scale edge glow */}
      <div
        className="absolute -right-3 top-6 bottom-6 w-6 opacity-20 pointer-events-none"
        style={{
          background: `linear-gradient(to right, ${term.colors[0].hex}60, transparent)`,
          filter: 'blur(6px)',
          transform: 'skewY(-4deg)',
        }}
      />
    </div>
  );
}

/* Detail Modal */
function SolarTermDetail({
  term,
  onClose,
}: {
  term: SolarTerm;
  onClose: () => void;
}) {
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const modal = modalRef.current;
    const content = contentRef.current;
    if (!modal || !content) return;

    gsap.fromTo(modal, { opacity: 0 }, { opacity: 1, duration: 0.4, ease: 'power2.out' });
    gsap.fromTo(content, { opacity: 0, y: 40, scale: 0.96 }, { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'power3.out', delay: 0.1 });

    const elements = content.querySelectorAll('.detail-animate');
    gsap.fromTo(elements, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out', delay: 0.3 });
  }, [term]);

  const handleClose = () => {
    const modal = modalRef.current;
    const content = contentRef.current;
    if (!modal || !content) return;

    gsap.to(content, { opacity: 0, y: 30, scale: 0.98, duration: 0.3, ease: 'power2.in' });
    gsap.to(modal, { opacity: 0, duration: 0.3, delay: 0.1, ease: 'power2.in', onComplete: onClose });
  };

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 opacity-0"
      style={{ backgroundColor: 'rgba(14, 14, 14, 0.9)', backdropFilter: 'blur(12px)' }}
      onClick={handleClose}
    >
      <div
        ref={contentRef}
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-xl opacity-0 scrollbar-hide"
        style={{
          background: `linear-gradient(135deg, rgba(20,20,20,0.98) 0%, ${term.colors[0].hex}06 100%)`,
          border: `1px solid ${term.colors[0].hex}25`,
          boxShadow: `0 40px 100px -20px ${term.colors[0].hex}25`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
          style={{ backgroundColor: `${term.colors[0].hex}18` }}
        >
          <X className="w-5 h-5 text-[#F7F5F0]/50" />
        </button>

        <div className="p-6 md:p-10">
          <div className="detail-animate mb-6">
            <div className="flex items-center gap-4 mb-3">
              <span className="font-serif-title text-5xl md:text-6xl" style={{ color: term.colors[0].hex }}>
                {term.name}
              </span>
              <div className="flex flex-col">
                <span className="font-wenkai text-sm text-[#F7F5F0]/40 tracking-wider">{term.pinyin}</span>
                <span className="font-wenkai text-xs text-[#F7F5F0]/25">{term.dateRange} · {term.month}</span>
              </div>
            </div>
            <div className="w-16 h-px" style={{ backgroundColor: term.colors[0].hex }} />
          </div>

          {/* 情绪句 */}
          <div className="detail-animate mb-6">
            <p
              className="font-wenkai text-lg md:text-xl leading-relaxed"
              style={{ color: `${term.colors[0].hex}CC` }}
            >
              {term.emotion}
            </p>
          </div>

          <div className="detail-animate mb-8">
            <h3 className="font-wenkai text-xs text-[#F7F5F0]/30 tracking-widest mb-3 flex items-center gap-2">
              <span className="w-3 h-px bg-[#F7F5F0]/15" />
              传统色谱
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {term.colors.map((color) => (
                <div key={color.name} className="p-3 rounded-lg" style={{ backgroundColor: `${color.hex}10`, border: `1px solid ${color.hex}20` }}>
                  <div className="w-full h-12 rounded-md mb-2" style={{ backgroundColor: color.hex, boxShadow: `0 2px 12px -2px ${color.hex}40` }} />
                  <p className="font-wenkai text-sm text-[#F7F5F0]/70 text-center">{color.name}</p>
                  <p className="font-mono text-[10px] text-[#F7F5F0]/30 text-center mt-1">{color.hex.toUpperCase()}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="detail-animate mb-8">
            <h3 className="font-wenkai text-xs text-[#F7F5F0]/30 tracking-widest mb-3 flex items-center gap-2">
              <span className="w-3 h-px bg-[#F7F5F0]/15" />
              诗词雅韵
            </h3>
            <div className="p-5 md:p-6 rounded-lg" style={{ backgroundColor: `${term.colors[0].hex}06`, border: `1px solid ${term.colors[0].hex}12` }}>
              <p className="font-wenkai text-base md:text-lg text-[#F7F5F0]/80 leading-loose tracking-wide">{term.poem}</p>
              <p className="font-wenkai text-sm text-[#F7F5F0]/40 mt-3">—— {term.dynasty} · {term.poet}</p>
            </div>
          </div>

          <div className="detail-animate grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-wenkai text-xs text-[#F7F5F0]/30 tracking-widest mb-2 flex items-center gap-2">
                <span className="w-3 h-px bg-[#F7F5F0]/15" />
                物候三候
              </h3>
              <p className="font-wenkai text-sm text-[#F7F5F0]/50 leading-relaxed">{term.phenology}</p>
            </div>
            <div>
              <h3 className="font-wenkai text-xs text-[#F7F5F0]/30 tracking-widest mb-2 flex items-center gap-2">
                <span className="w-3 h-px bg-[#F7F5F0]/15" />
                花信风
              </h3>
              <p className="font-wenkai text-sm text-[#F7F5F0]/50 leading-relaxed">{term.flower}</p>
            </div>
          </div>

          <div className="detail-animate mt-6 pt-5 border-t border-[#F7F5F0]/8">
            <p className="font-wenkai text-sm text-[#F7F5F0]/40 leading-relaxed">{term.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
