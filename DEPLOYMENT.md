# 🚀 Deployment Guide - WebDep Portfolio

## Rýchly štart

### 1. Lokálne spustenie

```bash
# Inštalácia závislostí
npm install

# Vytvorenie .env.local súboru
cp .env.example .env.local

# Spustenie dev servera
npm run dev
```

### 2. Nastavenie Supabase

1. Vytvorte účet na [supabase.com](https://supabase.com)
2. Vytvorte nový projekt
3. Choďte do **SQL Editor**
4. Skopírujte obsah `supabase-schema.sql` a spustite
5. V **Settings > API** skopírujte:
   - Project URL → `NEXT_PUBLIC_SUPABASE_URL`
   - anon public key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### 3. Nastavenie Resend (Email)

1. Vytvorte účet na [resend.com](https://resend.com)
2. Vytvorte API kľúč v **API Keys**
3. Skopírujte kľúč do `RESEND_API_KEY` v `.env.local`
4. Nastavte `ADMIN_EMAIL` na vašu emailovú adresu

### 4. Deploy na Vercel

#### A) Cez GitHub

1. Pushnite kód na GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin your-repo-url
git push -u origin main
```

2. Na [vercel.com](https://vercel.com):
   - Kliknite "New Project"
   - Importujte GitHub repozitár
   - Pridajte environment premenné:
     - `NEXT_PUBLIC_SUPABASE_URL`
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
     - `RESEND_API_KEY`
     - `ADMIN_EMAIL`
   - Kliknite "Deploy"

#### B) Cez Vercel CLI

```bash
npm i -g vercel
vercel
# Postupujte podľa inštrukcií
```

### 5. Po deploymente

1. Aktualizujte URL v súboroch:
   - `app/sitemap.ts` - zmeňte `baseUrl` na vašu doménu
   - `app/robots.ts` - zmeňte sitemap URL

2. Pridajte vlastnú doménu v Vercel Settings

3. Nastavte DNS záznamy

## 📝 Dôležité poznámky

### Video Hero

Pridajte video súbor do `public/video/hero.mp4`. Ak video nie je k dispozícii, použije sa fallback gradient.

### Customizácia obsahu

- **Projekty**: Upravte v `app/portfolio/page.tsx`
- **Služby**: Upravte v `app/services/page.tsx`
- **O mne**: Upravte v `app/about/page.tsx`
- **Kontaktné údaje**: Upravte v `app/contact/page.tsx`

### Prístup k leadom

Leady sa ukladajú do Supabase tabuľky `leads`. Pre prístup:

1. **Cez Supabase Dashboard**:
   - Použite Service Role key (nie anon key)
   - Alebo vytvorte vlastný admin panel

2. **Cez SQL**:
```sql
SELECT * FROM leads ORDER BY created_at DESC;
```

### Bezpečnosť

- ✅ Honeypot field proti spamu
- ✅ Rate limiting (5 requestov/min)
- ✅ GDPR súhlas
- ✅ RLS v Supabase
- ✅ Validácia na klientovi aj serveri

## 🐛 Riešenie problémov

### Build error: Missing Supabase variables

Pridajte placeholder hodnoty do `.env.local` alebo nastavte v Vercel.

### Email nefunguje

Skontrolujte:
- `RESEND_API_KEY` je správne nastavený
- `ADMIN_EMAIL` je platná emailová adresa
- Resend API kľúč má správne oprávnenia

### Formulár nefunguje

Skontrolujte:
- Supabase URL a key sú správne
- Tabuľka `leads` existuje
- RLS politiky sú nastavené správne

## 📞 Podpora

Pre otázky: info@webdep.sk

