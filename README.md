# ROOV - Cultural Movement

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Una landing page ad alto impatto per **ROOV**, un movimento culturale esclusivo dedicato a esperienze di musica elettronica in location storiche e suggestive.

## Panoramica

ROOV è un'esperienza culturale privata "invitation only" che combina musica elettronica di qualità con location storiche uniche. Questa landing page presenta il movimento, la sua filosofia e gli eventi organizzati attraverso un design moderno e minimalista.

### Caratteristiche Principali

- **Design Minimalista**: Tema scuro con palette monocromatica ed elementi viola elettrico
- **Animazioni Fluide**: Scroll reveal animations e transizioni smooth
- **Responsive Design**: Ottimizzato per ogni dispositivo, da mobile a desktop
- **Navigazione Intuitiva**: Menu fisso con scroll smooth tra le sezioni
- **Mappa Interattiva**: Visualizzazione delle location degli eventi
- **Timeline Visuale**: Sequenza temporale degli eventi futuri

## Stack Tecnologico

- **Framework**: [React 19](https://react.dev/) con TypeScript
- **Build Tool**: [Vite](https://vitejs.dev/) per sviluppo e build veloce
- **Styling**: [TailwindCSS](https://tailwindcss.com/) via CDN
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: Syne (headings) e Manrope (body) da Google Fonts

## Struttura del Progetto

```
roov/
├── components/          # Componenti React
│   ├── About.tsx       # Sezione manifesto
│   ├── Benefits.tsx    # Vantaggi dell'esperienza
│   ├── BookingModal.tsx # Modal di prenotazione
│   ├── Events.tsx      # Lista eventi/location
│   ├── FAQ.tsx         # Domande frequenti
│   ├── Footer.tsx      # Footer con informazioni
│   ├── Hero.tsx        # Sezione hero iniziale
│   ├── InteractiveMap.tsx # Mappa territori
│   ├── Testimonials.tsx   # Recensioni membri
│   └── Timeline.tsx    # Timeline eventi
├── App.tsx             # Componente principale
├── index.tsx           # Entry point React
├── index.html          # Template HTML
├── types.ts            # TypeScript types
├── metadata.json       # Metadata progetto
├── vite.config.ts      # Configurazione Vite
├── tsconfig.json       # Configurazione TypeScript
└── package.json        # Dipendenze e scripts

```

## Installazione e Setup

### Prerequisiti

- **Node.js** (versione 18 o superiore)
- **npm** o **yarn**

### Installazione

1. **Clona il repository**
   ```bash
   git clone https://github.com/rovispazio/roov.git
   cd roov
   ```

2. **Installa le dipendenze**
   ```bash
   npm install
   ```

3. **Avvia il server di sviluppo**
   ```bash
   npm run dev
   ```

4. **Apri il browser**

   L'applicazione sarà disponibile su `http://localhost:5173`

## Scripts Disponibili

```bash
# Avvia server di sviluppo
npm run dev

# Build per produzione
npm run build

# Preview build di produzione
npm run preview
```

## Sezioni della Landing Page

### 1. Hero
Sezione iniziale immersiva con video di sfondo e call-to-action principale.

### 2. Manifesto (About)
Presentazione della filosofia e missione di ROOV.

### 3. Sequence (Timeline)
Timeline visuale con i prossimi eventi e date importanti.

### 4. Locations (Events)
Galleria delle location storiche che ospitano gli eventi.

### 5. Territory (Interactive Map)
Mappa interattiva che mostra le aree geografiche degli eventi.

### 6. Benefits
Vantaggi esclusivi riservati ai membri della community.

### 7. Footer
Informazioni di contatto e link ai social media.

## Personalizzazione

### Colori

I colori del tema sono definiti nella configurazione TailwindCSS in [index.html](index.html):

```javascript
colors: {
  'roov-black': '#000000',
  'roov-gray': '#1a1a1a',
  'roov-accent': '#6d28d9',  // Viola elettrico
  'roov-text': '#e5e5e5',
}
```

### Typography

- **Heading Font**: Syne (Google Fonts)
- **Body Font**: Manrope (Google Fonts)

### Animazioni

Le animazioni sono gestite tramite:
- Intersection Observer API per scroll reveal
- TailwindCSS keyframes personalizzate
- Transizioni CSS smooth

## Build e Deployment

### Build per Produzione

```bash
npm run build
```

I file ottimizzati saranno generati nella cartella `dist/`.

### Deployment

Il progetto può essere deployato su qualsiasi piattaforma di hosting statico:

- [Vercel](https://vercel.com/)
- [Netlify](https://netlify.com/)
- [GitHub Pages](https://pages.github.com/)
- [Cloudflare Pages](https://pages.cloudflare.com/)

## Contribuire

Questo è un progetto privato per ROOV. Per suggerimenti o modifiche, contattare il team di sviluppo.

## Licenza

Copyright © 2025 ROOV. Tutti i diritti riservati.

## Contatti

- **Website**: [In fase di lancio]
- **Repository**: [https://github.com/rovispazio/roov](https://github.com/rovispazio/roov)

---

Made with ♪ by the ROOV team
