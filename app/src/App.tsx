import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GrainOverlay from '@/components/GrainOverlay';
import ScrollSection from '@/sections/ScrollSection';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const introRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadFonts = async () => {
      try {
        await import('@chinese-fonts/lxgwwenkai/dist/LXGWWenKai-Regular/result.css');
        await import('@chinese-fonts/ysyrxk/dist/slideyouran-Regular2_0/result.css');
        
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&family=Noto+Serif+SC:wght@400;700;900&family=Zhi+Mang+Xing&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);

        if (document.fonts) {
          await document.fonts.ready;
        }
        
        setTimeout(() => setFontsLoaded(true), 300);
      } catch (e) {
        console.warn('Font loading failed, using fallback', e);
        setFontsLoaded(true);
      }
    };

    loadFonts();

    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!fontsLoaded || !introRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.intro-title',
        { opacity: 0, y: 60, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 2, ease: 'power3.out', delay: 0.3 }
      );

      gsap.fromTo(
        '.intro-poem-line',
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.3, ease: 'power2.out', delay: 1.0 }
      );

      gsap.fromTo(
        '.intro-season-dots',
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', delay: 1.8 }
      );

      gsap.fromTo(
        '.intro-scroll-hint',
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: 'power2.out', delay: 2.2 }
      );

      // Fade out intro on scroll
      ScrollTrigger.create({
        trigger: introRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.set(introRef.current, {
            opacity: 1 - progress,
            scale: 1 - progress * 0.05,
            filter: `blur(${progress * 8}px)`,
          });
        },
      });
    }, introRef);

    return () => ctx.revert();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return (
      <div className="fixed inset-0 bg-[#141414] flex items-center justify-center">
        <div className="text-center">
          <div className="font-calligraphy text-4xl text-[#F7F5F0]/80 mb-4 animate-pulse-glow">
            龙鳞卷
          </div>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#D12920] to-transparent mx-auto" />
          <p className="font-wenkai text-sm text-[#F7F5F0]/40 mt-4 tracking-widest">
            墨香氤氲，正在研墨...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-[#141414] min-h-screen">
      <GrainOverlay />

      <main className="relative">
        {/* Intro Section */}
        <div ref={introRef} className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
          <div className="absolute inset-0 ink-wash-gradient" />
          
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-white/20 animate-float-slow"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 8}s`,
                  animationDuration: `${6 + Math.random() * 6}s`,
                }}
              />
            ))}
          </div>

          {/* Main title */}
          <div className="intro-title relative z-10 text-center px-6 opacity-0">
            <h1 className="font-calligraphy text-[14vw] md:text-[9vw] leading-none text-[#F7F5F0] text-shadow-glow mb-3">
              二十四节气
            </h1>
            <p className="font-wenkai text-base md:text-xl text-[#F7F5F0]/50 tracking-[0.6em] mb-16">
              龙鳞卷 · 四时轮回
            </p>
          </div>

          {/* 节气歌 — 整齐两行，不重复 */}
          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto space-y-3">
            <p className="intro-poem-line font-serif-title text-xl md:text-2xl lg:text-3xl text-[#F7F5F0]/70 tracking-[0.15em] opacity-0">
              春雨惊春清谷天，夏满芒夏暑相连
            </p>
            <p className="intro-poem-line font-serif-title text-xl md:text-2xl lg:text-3xl text-[#F7F5F0]/70 tracking-[0.15em] opacity-0">
              秋处露秋寒霜降，冬雪雪冬小大寒
            </p>
          </div>

          {/* 四季入口点 */}
          <div className="intro-season-dots relative z-10 mt-12 flex items-center gap-6 md:gap-10 opacity-0">
            {[
              { name: '春', color: '#A8BF8F', sub: '立春 · 雨水 · 惊蛰 · 春分 · 清明 · 谷雨' },
              { name: '夏', color: '#CB523E', sub: '立夏 · 小满 · 芒种 · 夏至 · 小暑 · 大暑' },
              { name: '秋', color: '#BF9C46', sub: '立秋 · 处暑 · 白露 · 秋分 · 寒露 · 霜降' },
              { name: '冬', color: '#8BA3C7', sub: '立冬 · 小雪 · 大雪 · 冬至 · 小寒 · 大寒' },
            ].map((s) => (
              <div key={s.name} className="group flex flex-col items-center gap-2 cursor-default">
                <div
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-calligraphy text-lg md:text-xl text-[#141414] transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundColor: s.color }}
                >
                  {s.name}
                </div>
                <span className="font-wenkai text-[10px] md:text-xs text-[#F7F5F0]/0 group-hover:text-[#F7F5F0]/40 transition-all duration-300 max-w-[80px] text-center leading-tight">
                  {s.sub}
                </span>
              </div>
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="intro-scroll-hint absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-0">
            <span className="font-wenkai text-xs text-[#F7F5F0]/40 tracking-widest">
              向下滚动展开长卷
            </span>
            <div className="w-px h-12 bg-gradient-to-b from-[#F7F5F0]/40 to-transparent" />
          </div>
        </div>

        {/* Scroll Section */}
        <ScrollSection />
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-16 text-center bg-[#141414]">
        <div className="font-calligraphy text-3xl text-[#F7F5F0]/20 mb-4">
          二十四节气
        </div>
        <p className="font-wenkai text-sm text-[#F7F5F0]/30 tracking-wider">
          龙鳞卷 · 四时轮回 · 一年好景君须记
        </p>
        <div className="mt-8 flex justify-center gap-2">
          {['春', '夏', '秋', '冬'].map((s) => (
            <span
              key={s}
              className="font-serif-title text-xs text-[#F7F5F0]/20 w-8 h-8 flex items-center justify-center rounded-full border border-[#F7F5F0]/10"
            >
              {s}
            </span>
          ))}
        </div>
      </footer>
    </div>
  );
}

export default App;
