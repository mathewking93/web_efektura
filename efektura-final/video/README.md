# Hero showreel — video/

## Požadované soubory

```
video/
├── showreel.mp4       ← primární formát
├── showreel.webm      ← záloha pro starší prohlížeče
└── hero-poster.jpg    ← statický náhled (načte se před videem)
```

Názvy souborů musí být přesně takto — jsou natvrdo v kódu index.html.

## Technické požadavky

| Parametr    | Hodnota                              |
|-------------|--------------------------------------|
| Rozlišení   | 1920 × 1080 px (stačí 1280 × 720)   |
| Délka       | 20–40 sekund                         |
| Smyčka      | plynulá — začátek = konec záběru     |
| Velikost    | MP4 do 8 MB, WebM do 6 MB           |
| FPS         | 24 nebo 25                           |
| Zvuk        | může být — web ho výchozně ztlumí   |

## Komprese

**HandBrake** (zdarma, Windows/Mac/Linux — doporučeno):
→ Preset: Web → Gmail Large 3 Minutes 720p30
→ Stáhnout: https://handbrake.fr

**FFmpeg** (příkaz v terminálu):
```
# MP4
ffmpeg -i vstup.mp4 -vcodec h264 -acodec aac -crf 23 -preset slow -movflags +faststart showreel.mp4

# WebM
ffmpeg -i vstup.mp4 -c:v libvpx-vp9 -crf 33 -b:v 0 -an showreel.webm
```

## Hero poster

První nebo nejsilnější záběr showreelu jako statický JPG.
- Rozměr: 1920 × 1080 px
- Kvalita: 85 %
- Max. velikost: 300 kB

## Jak vložit video do webu

V souboru index.html najít komentář `<!-- JAKUB: Sem vložit vlastní showreel video -->` a nahradit `<img>` tagem za:

```html
<video autoplay muted loop playsinline poster="video/hero-poster.jpg">
  <source src="video/showreel.mp4"  type="video/mp4">
  <source src="video/showreel.webm" type="video/webm">
</video>
```
