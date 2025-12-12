# WebDep - Profesionálne portfólio web

Moderný, rýchly a profesionálny portfólio web pre webového freelancera. Postavený na Next.js 14, TypeScript, TailwindCSS a Supabase.

## 🚀 Funkcie

- ✨ Moderný dizajn s tmavým režimom
- 🎨 Plynulé animácie s Framer Motion
- 📱 Plne responzívny dizajn
- 🎯 SEO optimalizované
- 📝 Multi-step kontaktný formulár
- 💾 Ukladanie leadov do Supabase
- 📧 Email notifikácie cez Resend
- 🛡️ Ochrana proti spamu (honeypot, rate limiting)
- ♿ Prístupnosť (a11y)
- 🎬 Video hero s fallback

## 📋 Požiadavky

- Node.js 18+ 
- npm alebo yarn
- Supabase účet
- Resend účet (pre email notifikácie)

## 🛠️ Inštalácia

1. **Klonujte repozitár alebo stiahnite súbory**

```bash
cd webdep.sk
```

2. **Inštalujte závislosti**

```bash
npm install
```

3. **Nastavte environment premenné**

Skopírujte `.env.example` do `.env.local` a vyplňte hodnoty:

```bash
cp .env.example .env.local
```

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
RESEND_API_KEY=your_resend_api_key
ADMIN_EMAIL=your_admin_email@example.com
```

4. **Nastavte Supabase**

- Vytvorte nový projekt na [supabase.com](https://supabase.com)
- V SQL editore spustite `supabase-schema.sql`
- Skopírujte URL a anon key do `.env.local`

5. **Nastavte Resend**

- Vytvorte účet na [resend.com](https://resend.com)
- Vytvorte API kľúč
- Skopírujte kľúč do `.env.local`

6. **Spustite development server**

```bash
npm run dev
```

Otvorte [http://localhost:3000](http://localhost:3000) v prehliadači.

## 📦 Deploy na Vercel

1. **Pushnite kód na GitHub**

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin your-repo-url
git push -u origin main
```

2. **Importujte projekt do Vercel**

- Choďte na [vercel.com](https://vercel.com)
- Kliknite na "New Project"
- Importujte váš GitHub repozitár
- Pridajte environment premenné z `.env.local`
- Kliknite "Deploy"

3. **Aktualizujte URL v súboroch**

Po deploymente aktualizujte:
- `app/sitemap.ts` - zmeňte `baseUrl` na vašu doménu
- `app/robots.ts` - zmeňte sitemap URL

## 🗄️ Supabase Setup

### Vytvorenie tabuľky

1. Otvorte Supabase Dashboard
2. Choďte do SQL Editor
3. Skopírujte obsah `supabase-schema.sql`
4. Spustite SQL príkaz

### RLS (Row Level Security)

Tabuľka má nastavené RLS politiky:
- `anon` role môže vkladať nové leady
- `service_role` môže čítať všetky leady (pre admin panel)

### Admin prístup k leadom

Pre prístup k leadom cez Supabase Dashboard:
- Použite Service Role key (nie anon key)
- Alebo vytvorte vlastný admin panel

## 📧 Email Setup (Resend)

1. Vytvorte účet na [resend.com](https://resend.com)
2. Vytvorte API kľúč
3. Pridajte doménu (voliteľné, môžete použiť default)
4. Skopírujte API kľúč do `.env.local`

## 🎨 Customizácia

### Farby a téma

Upravte farby v `app/globals.css` - CSS premenné pre dark/light mode.

### Obsah

- **Projekty**: Upravte v `app/portfolio/page.tsx` a `components/sections/featured-projects.tsx`
- **Služby**: Upravte v `app/services/page.tsx`
- **O mne**: Upravte v `app/about/page.tsx`
- **Texty**: Všetky texty sú v komponentoch, jednoducho upraviteľné

### Video Hero

Pridajte video súbor do `public/video/hero.mp4`. Ak video nie je k dispozícii, použije sa fallback gradient.

## 📁 Štruktúra projektu

```
webdep.sk/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── about/             # O mne stránka
│   ├── contact/           # Kontakt stránka
│   ├── portfolio/         # Portfólio stránka
│   ├── services/          # Služby stránka
│   ├── privacy/           # GDPR stránka
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── sitemap.ts         # Sitemap
│   └── robots.ts          # Robots.txt
├── components/
│   ├── sections/          # Sekcie pre home page
│   ├── ui/                # shadcn/ui komponenty
│   ├── navbar.tsx         # Navigácia
│   ├── footer.tsx         # Footer
│   ├── contact-form.tsx    # Multi-step formulár
│   └── theme-provider.tsx  # Theme provider
├── lib/
│   ├── supabase.ts        # Supabase client
│   ├── resend.ts          # Resend client
│   └── utils.ts           # Utility funkcie
├── public/                # Statické súbory
│   └── video/             # Video súbory
├── supabase-schema.sql    # SQL schéma
└── .env.example           # Environment template
```

## 🔒 Bezpečnosť

- ✅ Honeypot field proti spamu
- ✅ Rate limiting (5 requestov/min)
- ✅ GDPR súhlas
- ✅ RLS v Supabase
- ✅ Validácia na klientovi aj serveri

## 🎯 Performance

- ⚡ Next.js 14 App Router
- 🖼️ Image optimization
- 📦 Code splitting
- 🎨 CSS-in-JS s Tailwind
- 🚀 Vercel Edge Network
- 🎬 GPU-accelerated animations (translate3d)
- 📱 Content visibility optimization
- ⚙️ Preload animations (200px margin)
- 🎭 Reduced motion support

### Performance Checklist

Ak sa lag vráti, skontroluj:

1. **Scroll Performance**
   - [ ] Chrome DevTools > Performance > Record scroll
   - [ ] FPS meter (Chrome DevTools > More tools > Rendering > FPS meter)
   - [ ] Skontroluj, či nie sú re-renderi pri scrollovaní (React DevTools Profiler)

2. **Animations**
   - [ ] Všetky animácie používajú `transform` a `opacity` (nie `top/left/width/height`)
   - [ ] `will-change` je len na animovaných elementoch
   - [ ] `translate3d(0, 0, 0)` pre GPU acceleration

3. **IntersectionObserver**
   - [ ] `margin: "200px"` pre prednačítanie animácií
   - [ ] Above-the-fold animácie sa spúšťajú hneď (nie cez IntersectionObserver)

4. **Backdrop Blur**
   - [ ] Obmedzený počet backdrop-blur efektov
   - [ ] Nepoužíva sa na veľkých plochách

5. **Video/Images**
   - [ ] Video má `preload="auto"` a `playsInline`
   - [ ] Obrázky používajú `next/image` s `loading="lazy"`

6. **CSS**
   - [ ] `content-visibility: auto` na ťažkých sekciách
   - [ ] `contain: layout style paint` kde sa dá

### Debug Flag

Vypni animácie pre debugging:
```bash
NEXT_PUBLIC_DISABLE_ANIMATIONS=true npm run dev
```

## 📝 TODO / Vylepšenia

- [ ] Admin dashboard pre leady
- [ ] Analytics integrácia
- [ ] Blog sekcia
- [ ] Newsletter signup
- [ ] A/B testovanie
- [ ] Lighthouse optimalizácie

## 📄 Licencia

Všetky práva vyhradené © 2024 WebDep

## 🤝 Podpora

Pre otázky a podporu kontaktujte: info@webdep.sk

---

Vytvorené s ❤️ pomocou Next.js, TypeScript a TailwindCSS
