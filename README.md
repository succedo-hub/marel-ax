# MAREL — Mariehamns Elkonsult AB

Responsiv svensk ensida med Bootstrap 5.3.8 och lokala bilder. Publiceras som statiska resurser i Cloudflare Worker `marel-ax`.

## Utveckling och publicering

- `npm ci`
- `npm run dev`
- `npm run check` kontrollerar Wrangler-konfigurationen och förbereder resurserna utan publicering.
- Push till `main` startar den befintliga Cloudflare Workers Builds-integrationen.
- Deploy-kommandot är fortsatt `npx wrangler deploy`.

Wranglers build-steg kör `npm run build` och kopierar Bootstrap från npm till `public/vendor`. Ingen separat Bootstrap-CDN krävs.

## Innehåll

- `public/index.html`: texter, kontaktuppgifter samt samtliga 14 pågående uppdrag och 37 referenser från det tillhandahållna MAREL-underlaget.
- `public/styles.css`: svartvit formgivning, responsivitet, kartans gråskalefilter och sidfot.
- `public/assets`: tillhandahållen logotyp och porträtt av Daniel.
- `public/site.js`: mobilmeny och årtal.

Google-kartan använder adressen Örnvägen 10, 22150 Jomala, Åland. Kartan laddas från Google med lazy loading; en separat vägbeskrivningslänk finns också.

## Produktion

Webbplatsen är publicerad på https://marel.ax/ sedan 2026-10-01. Domänkopplingarna hanteras i Cloudflare. `workers.dev` är fortsatt aktiverad.

Sökmotorindexering är tillåten. Startsidan anger https://marel.ax/ som canonical-URL och `robots.txt` länkar till `sitemap.xml`.
