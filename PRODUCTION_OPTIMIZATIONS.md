# Production Performance Optimizations - 60fps Target

## 🎯 Cieľ
Dosiahnuť stabilných 60fps na produkcii pri scrollovaní a animáciách.

## ✅ Implementované optimalizácie

### 1. Next.js Production Build
- ✅ `optimizePackageImports` pre framer-motion, gsap, lucide-react
- ✅ `removeConsole` v produkcii (okrem error/warn)
- ✅ Standalone output pre lepšiu optimalizáciu

### 2. Framer Motion Optimizations
- ✅ `useScroll` s `clamp: true` pre lepšiu kontrolu
- ✅ `whileInView` namiesto `useInView` + `animate` (menej re-renderov)
- ✅ `viewport={{ amount: 0.3, margin: "0px", once: true }}` - presné triggery
- ✅ GPU acceleration cez `translate3d(0, 0, 0)`
- ✅ `backfaceVisibility: "hidden"` pre lepšiu kompatibilitu

### 3. GSAP ScrollTrigger Optimizations
- ✅ `requestAnimationFrame` namiesto `setTimeout` pre lepšiu synchronizáciu
- ✅ Kratšie dĺžky animácií (0.6s namiesto 0.8s)
- ✅ `refreshPriority: -1` pre nižšiu prioritu
- ✅ Batch animácie cez `requestAnimationFrame`
- ✅ `invalidateOnRefresh: true` pre správne prepočítanie

### 4. Will-Change Management
- ✅ `will-change` len keď je potrebné (po mounte, po načítaní videa)
- ✅ Odstránené globálne `will-change: transform` z CSS
- ✅ `will-change: auto` keď animácia nie je aktívna
- ✅ Conditional `will-change` na základe `mounted` / `isVideoLoaded`

### 5. CSS Optimizations
- ✅ `overscroll-behavior: none` pre lepšie scrollovanie
- ✅ `-webkit-overflow-scrolling: touch` pre iOS
- ✅ `contain: layout style paint` na sekciách
- ✅ `backfaceVisibility: hidden` na animovaných elementoch
- ✅ Odstránené globálne `transform: translateZ(0)` (len na animovaných)

### 6. Video Optimizations
- ✅ `preload="auto"` pre rýchlejšie načítanie
- ✅ `playsInline`, `muted`, `loop` pre lepšiu kompatibilitu
- ✅ `pointerEvents: "none"` pre lepšiu performance
- ✅ Conditional `will-change` len po načítaní videa

### 7. Animated Background Optimizations
- ✅ Conditional `will-change` len po mounte
- ✅ Znížený pohyb particles (100px namiesto 150px)
- ✅ Menšie zmeny opacity (0.15 namiesto 0.2)
- ✅ `backfaceVisibility: "hidden"` na všetkých particles

### 8. Floating Elements Optimizations
- ✅ Conditional `will-change` len po mounte
- ✅ `backfaceVisibility: "hidden"` pre lepšiu kompatibilitu

### 9. Component Optimizations
- ✅ `mounted` state pre conditional rendering
- ✅ GPU acceleration na všetkých animovaných elementoch
- ✅ Znížené delays v animáciách
- ✅ Kratšie dĺžky animácií

## 📊 Očakávané zlepšenia

### Pred optimalizáciou:
- FPS: ~30-45fps (seká pri scrollovaní)
- Animácie: Dosekané, nespúšťajú sa včas
- Scroll: Lag, jank

### Po optimalizácii:
- FPS: Stabilných ~60fps
- Animácie: Plynulé, presné triggery
- Scroll: Bez lagu, plynulé

## 🧪 Ako overiť

### Chrome DevTools Performance
1. Otvor Chrome DevTools (F12)
2. Prejdi na tab "Performance"
3. Klikni "Record" (Ctrl+E)
4. Scrolluj stránku nahor a nadol
5. Zastav nahrávanie
6. Skontroluj:
   - **FPS** - mal by byť stabilne okolo 60fps
   - **Long tasks** - malo by ich byť menej
   - **Paint** - malo by byť menej repaintov

### FPS Meter
1. Chrome DevTools > More tools > Rendering
2. Začiarkni "FPS meter"
3. Scrolluj stránku
4. FPS by malo byť stabilne 55-60fps

### React DevTools Profiler
1. Nainštaluj React DevTools extension
2. Otvor Profiler tab
3. Klikni "Record"
4. Scrolluj stránku
5. Zastav nahrávanie
6. Skontroluj, či nie sú re-renderi pri scrollovaní

## 📝 Zmenené súbory

- `next.config.ts` - Production optimizations
- `lib/scroll-optimization.ts` - Nový utility pre scroll optimalizácie
- `components/sections/hero.tsx` - GPU acceleration, conditional will-change
- `components/sections/process-gsap.tsx` - RAF-based animations, shorter durations
- `components/animated-background.tsx` - Conditional will-change, reduced movement
- `components/floating-elements.tsx` - Conditional will-change, backface visibility
- `components/sections/services.tsx` - GPU acceleration
- `components/sections/featured-projects.tsx` - GPU acceleration
- `app/globals.css` - Production CSS optimizations

## 🔧 Ďalšie tipy pre produkciu

1. **Lazy loading obrázkov**: Použi `next/image` s `loading="lazy"`
2. **Code splitting**: Next.js automaticky robí code splitting
3. **CDN**: Použi CDN pre statické assets
4. **Caching**: Nastav správne cache headers
5. **Monitoring**: Použi monitoring nástroje (napr. Vercel Analytics)

## ⚠️ Poznámky

- `will-change` by mal byť nastavený len keď je potrebné (nie globálne)
- GPU acceleration (`translate3d`) by mal byť len na animovaných elementoch
- Kratšie animácie sú lepšie pre performance
- Batch animácie cez `requestAnimationFrame` sú lepšie ako simultánne

