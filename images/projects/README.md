# Správa projektů — images/projects/

Každý projekt má vlastní podsložku pojmenovanou bez diakritiky a mezer.

## Struktura složky projektu

```
nazev-projektu/
├── thumb.jpg        ← náhled v gridu na webu
├── cover.jpg        ← hlavní fotka v lightboxu
├── detail-01.jpg    ← galerie v lightboxu
├── detail-02.jpg
└── detail-03.jpg    ← (přidat kolik je potřeba)
```

## Doporučené rozměry a velikosti

| Soubor       | Rozměr         | Kvalita | Max. velikost |
|--------------|----------------|---------|---------------|
| thumb.jpg    | 800 × 533 px   | 80 %    | 120 kB        |
| cover.jpg    | 1600 × 1200 px | 82 %    | 400 kB        |
| detail-*.jpg | 1600 × 1200 px | 82 %    | 350 kB        |

Poměr stran thumb = 3:2, cover a detaily = 4:3.

## Přidání nového projektu

1. Vytvořit složku:  images/projects/nazev-projektu/
2. Vložit fotky dle tabulky výše
3. Otevřít soubor:   js/projects.js
4. Zkopírovat jeden z existujících objektů, upravit údaje, přidat na konec pole
5. Uložit — projekt se ihned objeví na webu

## Nástroje pro úpravu fotek

- **Squoosh** (zdarma, v prohlížeči): https://squoosh.app
- **ImageOptim** (Mac, zdarma): https://imageoptim.com
- **GIMP** (zdarma, Windows/Mac/Linux)
