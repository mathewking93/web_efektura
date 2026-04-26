# Efektura — web Jakuba Strejce

Portfolio architektonického studia Efektura.

---

## Struktura složek

```
efektura/
│
├── index.html                  ← celý web (HTML + CSS + JS)
├── robots.txt                  ← instrukce pro vyhledávače
├── sitemap.xml                 ← mapa webu (aktualizovat po změnách)
├── .htaccess                   ← nastavení serveru (HTTPS, cache, komprese)
│
├── css/
│   └── main.css                ← zatím prázdný, CSS je v index.html
│
├── js/
│   └── projects.js             ← DATA PROJEKTŮ — sem přidávat nové projekty
│
├── fonts/                      ← lokální fonty (volitelné, viz README uvnitř)
│
├── images/
│   ├── hero/                   ← fotka pozadí (fallback pokud není video)
│   ├── about/                  ← portrét Jakuba (portrait.jpg)
│   ├── og/                     ← Open Graph obrázek pro sdílení
│   └── projects/
│       ├── README.md           ← návod jak přidávat projekty
│       ├── vila-sazava/
│       ├── byt-vinohrady/
│       ├── studio-k/
│       └── chalupa-sumava/
│
├── video/
│   ├── README.md               ← návod pro showreel video
│   ├── showreel.mp4            ← (sem vložit video)
│   ├── showreel.webm           ← (sem vložit video)
│   └── hero-poster.jpg         ← (statický náhled videa)
│
└── icons/
    ├── README.md               ← návod pro favicon
    ├── favicon.svg
    ├── favicon-32.png
    ├── favicon-16.png
    ├── apple-touch-icon.png
    └── og-image.jpg
```

---

## Časté úkoly

### Přidat nový projekt
→ Viz `images/projects/README.md`

### Vložit showreel video
→ Viz `video/README.md`

### Přidat favicon
→ Viz `icons/README.md`

### Aktualizovat kontaktní údaje
→ Otevřít `index.html`, vyhledat sekci `<!-- KONTAKT -->`, upravit hodnoty

### Aktualizovat text „O mně"
→ Otevřít `index.html`, vyhledat sekci `<!-- O MNĚ -->`, upravit text

---

## Nahrání na webhosting

1. Připojit se přes FTP (FileZilla nebo správce souborů v ovládacím panelu hostingu)
2. Nahrát **celý obsah této složky** do kořenového adresáře webu (zpravidla `public_html/` nebo `www/`)
3. Ověřit na https://www.efektura.cz

---

## Doména a hosting

- Doména: efektura.cz
- Hosting: (doplnit)
- FTP přihlašovací údaje: (uložit bezpečně, nesdílet)
