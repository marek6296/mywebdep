# Ako pridať obrázky do Hero sekcie

## Krok 1: Uložte obrázky do správneho adresára

Obrázky musíte uložiť do:
```
/public/images/
```

## Krok 2: Názvy súborov

Obrázky musia mať presne tieto názvy:
- `laptop-tech.jpg` - Obrázok laptopu s holografickými dátovými vizualizáciami
- `planet-tech.jpg` - Obrázok planéty s modrými prstencami

## Krok 3: Formát a veľkosť

- **Formát**: JPG, PNG alebo WebP
- **Laptop obrázok**: Odporúčaná veľkosť min. 800x600px (aspect ratio 4:3)
- **Planéta obrázok**: Odporúčaná veľkosť min. 1200x1200px (aspect ratio 1:1)

## Krok 4: Optimalizácia

Pre lepšiu performance odporúčam:
- Komprimovať obrázky (napr. pomocou TinyPNG alebo ImageOptim)
- Použiť WebP formát pre lepšiu kompresiu
- Veľkosť súboru by mala byť pod 500KB

## Krok 5: Overenie

Po pridaní obrázkov:
1. Reštartujte dev server (`npm run dev`)
2. Obnovte stránku v prehliadači
3. Obrázky by sa mali zobraziť automaticky

## Aktuálny stav

Adresár `/public/images/` existuje, ale obrázky ešte nie sú pridané.
Kým obrázky nepridáte, zobrazí sa animovaný placeholder.

