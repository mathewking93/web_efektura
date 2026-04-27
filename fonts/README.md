# Lokální fonty — fonts/  (volitelné)

Web aktuálně načítá fonty z Google Fonts CDN — funguje bez souborů v této složce.

Lokální fonty jsou výhodné pokud:
- chcete splnit GDPR bez cookies banneru (Google Fonts loguje IP)
- očekáváte návštěvníky se špatným připojením

## Potřebné soubory (formát woff2)

```
fonts/
├── cormorant-garamond-300.woff2
├── cormorant-garamond-300italic.woff2
├── cormorant-garamond-400.woff2
├── cormorant-garamond-400italic.woff2
├── cormorant-garamond-500.woff2
├── jost-300.woff2
├── jost-400.woff2
└── jost-500.woff2
```

## Jak stáhnout

Použijte https://gwfh.mranftl.com/fonts (Google Webfonts Helper):
1. Vyhledat "Cormorant Garamond" → zaškrtnout: 300, 300 italic, 400, 400 italic, 500 → stáhnout ZIP
2. Vyhledat "Jost" → zaškrtnout: 300, 400, 500 → stáhnout ZIP
3. Rozbalit do této složky

## Aktivace v kódu

V index.html:
1. Smazat nebo zakomentovat řádek s Google Fonts `<link>`
2. Na začátek `<style>` přidat @font-face bloky (viz níže)

```css
@font-face {
  font-family: 'Cormorant Garamond';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url('../fonts/cormorant-garamond-300.woff2') format('woff2');
}
/* … opakovat pro každý soubor … */
```
