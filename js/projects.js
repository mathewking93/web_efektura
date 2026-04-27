/**
 * Efektura — data projektů
 * ─────────────────────────────────────────────────────────────
 * Každý projekt je objekt v poli `projects`.
 * Pořadí v poli = pořadí na webu (první objekt = velká karta vlevo).
 *
 * JAK PŘIDAT NOVÝ PROJEKT:
 * 1. Přidat fotky do:  images/projects/nazev-projektu/
 *    Potřebné soubory: thumb.jpg, cover.jpg, detail-01.jpg, ...
 * 2. Zkopírovat jeden objekt níže, vyplnit údaje, přidat na konec pole
 * 3. Uložit soubor — projekt se ihned objeví na webu
 *
 * POLE OBJEKTU:
 *   id        — identifikátor (bez diakritiky, bez mezer, jen a-z a pomlčky)
 *   title     — název projektu
 *   sub       — podnadpis (typ · kategorie · rok)
 *   location  — lokalita
 *   year      — rok dokončení
 *   area      — plocha (včetně jednotky)
 *   status    — stav projektu
 *   desc      — popis (1–3 věty)
 *   thumbnail — cesta k thumb.jpg
 *   images    — pole cest k fotkám v lightboxu (cover první, pak detaily)
 */

const projects = [
  {
    id:        'vila-sazava',
    title:     'Vila na Sázavě',
    sub:       'Rodinný dům · Novostavba · 2023',
    location:  'Středočeský kraj',
    year:      '2023',
    area:      '285 m²',
    status:    'Realizováno',
    desc:      'Novostavba rodinné vily pro čtyřčlennou rodinu na svažitém pozemku u Sázavy. Dům reaguje na reliéf terénu — je zapuštěn do svahu, otevírá se k jihu a těží z výhledu na řeku. Konstrukční systém je kombinací železobetonu a dřeva.',
    thumbnail: 'images/projects/vila-sazava/thumb.jpg',
    images: [
      'images/projects/vila-sazava/cover.jpg',
      'images/projects/vila-sazava/detail-01.jpg',
      'images/projects/vila-sazava/detail-02.jpg',
    ]
  },
  {
    id:        'byt-vinohrady',
    title:     'Byt na Vinohradech',
    sub:       'Bytový interiér · Rekonstrukce · 2022',
    location:  'Praha 2',
    year:      '2022',
    area:      '98 m²',
    status:    'Realizováno',
    desc:      'Kompletní rekonstrukce cihlového bytu z 30. let v historické zástavbě Vinohrad. Zachování původních prvků — kazetové stropy, parkety, historická okna — v kombinaci se současným interiérovým řešením.',
    thumbnail: 'images/projects/byt-vinohrady/thumb.jpg',
    images: [
      'images/projects/byt-vinohrady/cover.jpg',
      'images/projects/byt-vinohrady/detail-01.jpg',
      'images/projects/byt-vinohrady/detail-02.jpg',
    ]
  },
  {
    id:        'studio-k',
    title:     'Studio K',
    sub:       'Kanceláře · Interiér · 2022',
    location:  'Praha 7',
    year:      '2022',
    area:      '210 m²',
    status:    'Realizováno',
    desc:      'Kancelářský prostor pro kreativní agenturu v průmyslovém objektu v Holešovicích. Otevřený layout s akusticky řešenými pracovními ostrovy a zasedačkami. Industriální charakter budovy byl záměrně zachován.',
    thumbnail: 'images/projects/studio-k/thumb.jpg',
    images: [
      'images/projects/studio-k/cover.jpg',
      'images/projects/studio-k/detail-01.jpg',
      'images/projects/studio-k/detail-02.jpg',
    ]
  },
  {
    id:        'chalupa-sumava',
    title:     'Chalupa na Šumavě',
    sub:       'Rekonstrukce · Venkovská usedlost · 2021',
    location:  'Plzeňský kraj',
    year:      '2021',
    area:      '160 m²',
    status:    'Realizováno',
    desc:      'Citlivá rekonstrukce šumavské chalupy ze 18. století. Zachování původní hmotové skladby a materiálové paměti stavby při výrazném zlepšení tepelného komfortu a moderním vybavení interiéru.',
    thumbnail: 'images/projects/chalupa-sumava/thumb.jpg',
    images: [
      'images/projects/chalupa-sumava/cover.jpg',
      'images/projects/chalupa-sumava/detail-01.jpg',
      'images/projects/chalupa-sumava/detail-02.jpg',
    ]
  },
];
