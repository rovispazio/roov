# Public Assets

Questa cartella contiene i file statici che vengono serviti dalla root del sito.

## Favicon

Il file `favicon.svg` è il favicon vettoriale principale.

### Generare le versioni PNG

Per generare tutte le versioni PNG del favicon, usa uno di questi tool online:

1. **RealFaviconGenerator** (raccomandato): https://realfavicongenerator.net/
   - Carica `favicon.svg`
   - Scarica il pacchetto completo
   - Copia i file PNG generati in questa cartella

2. **Favicon.io**: https://favicon.io/favicon-converter/
   - Converti SVG → PNG in multiple sizes

### File necessari (opzionali, ma raccomandati):

- `favicon-16x16.png` - Icona piccola per tab
- `favicon-32x32.png` - Icona standard desktop
- `apple-touch-icon.png` (180x180) - iOS home screen
- `android-chrome-192x192.png` - Android
- `android-chrome-512x512.png` - Android HD

## Social Image

Ricordati di sostituire `YOUR_CLOUDINARY_IMAGE_URL_HERE` in `index.html` con il tuo link Cloudinary dell'immagine social (1200x630px).

Cerca nel file: `index.html` linee 22 e 33.
