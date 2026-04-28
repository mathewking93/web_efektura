/**
 * Efektura — data projektů
 * Pořadí v poli = pořadí na webu (první = velká karta vlevo).
 */

const projects = [
  {
    id:        '1plus1-vychodni',
    title:     '1+1 Východní',
    sub:       'Rekonstrukce bytu · 2018',
    location:  'Karlovy Vary – Drahovice',
    year:      '2018',
    area:      '38 m²',
    status:    'Realizováno',
    desc:      'Rekonstrukce bytu 1+1 v panelovém domě byla zaměřena na vytvoření prostoru umožňujícího pohodlné přespání návštěv a integraci plnohodnotné koupelny. Nová koupelna vznikla na místě původního umakartového jádra. Kuchyně ve tvaru U kombinuje pracovní, úložné i jídelní funkce. Zvolená paleta světlých barev a materiálů vytváří nadčasový, vzdušný interiér.',
    thumbnail: 'images/projects/1plus1-vychodni/thumb.jpg',
    images: [
      'images/projects/1plus1-vychodni/cover.jpg',
      'images/projects/1plus1-vychodni/detail-01.jpg',
      'images/projects/1plus1-vychodni/detail-02.jpg',
    ]
  },
  {
    id:        'raiffeisenbank-lounge',
    title:     'Raiffeisenbank lounge',
    sub:       'Komerční interiér · 2018',
    location:  'Praha 6 – Letiště Václava Havla',
    year:      '2018',
    area:      '200 m²',
    status:    'Realizováno ve spolupráci s Elan Interior',
    desc:      'Návrh redesignu salonku Letiště Václava Havla pro Raiffeisenbank propojuje eleganci finanční instituce s klidným komfortem cestování. Prostor je rozvržen do zón pro odpočinek, práci i neformální setkání. Modulární sezení inspirované logem banky tvoří dominantu interiéru.',
    thumbnail: 'images/projects/raiffeisenbank-lounge/thumb.jpg',
    images: [
      'images/projects/raiffeisenbank-lounge/cover.jpg',
      'images/projects/raiffeisenbank-lounge/detail-01.jpg',
      'images/projects/raiffeisenbank-lounge/detail-02.jpg',
    ]
  },
  {
    id:        'mezonet-ovenecka',
    title:     'Mezonet Ovenecká',
    sub:       'Rekonstrukce bytu · 2018',
    location:  'Praha 7 – Letná',
    year:      '2018',
    area:      '120 m²',
    status:    'Realizováno ve spolupráci s Elan Interior',
    desc:      'Rekonstrukce mezonetového bytu na Letné kladla důraz na dispozici odpovídající potřebám rodinného bydlení. Návrh sjednocuje velkorysý obytný prostor s kuchyní, jídelnou a návazností na terasu. Interiér využívá přírodní materiály inspirované wellness prostředím.',
    thumbnail: 'images/projects/mezonet-ovenecka/thumb.jpg',
    images: [
      'images/projects/mezonet-ovenecka/cover.jpg',
      'images/projects/mezonet-ovenecka/detail-01.jpg',
      'images/projects/mezonet-ovenecka/detail-02.jpg',
    ]
  },
  {
    id:        'bon-vinohrady',
    title:     'BON Vinohrady',
    sub:       'Komerční interiér · 2019',
    location:  'Praha 2 – Vinohrady',
    year:      '2019',
    area:      '70 m²',
    status:    'Realizováno',
    desc:      'Návrh japonského bistra kombinuje prvky tradiční japonské kultury s moderním street food konceptem. Interiér je inspirován atmosférou japonských ulic — tradiční japonské fasády na stěnách, očištěné cihlové klenby a jednoduché osvětlení žárovkami s papírovými stínidly.',
    thumbnail: 'images/projects/bon-vinohrady/thumb.jpg',
    images: [
      'images/projects/bon-vinohrady/cover.jpg',
      'images/projects/bon-vinohrady/detail-01.jpg',
      'images/projects/bon-vinohrady/detail-02.jpg',
    ]
  },
  {
    id:        'bon-smichov',
    title:     'BON Smíchov',
    sub:       'Komerční interiér · 2020',
    location:  'Praha 5 – Smíchov',
    year:      '2020',
    area:      '165 m²',
    status:    'Realizováno ve spolupráci s Mimosa architekti',
    desc:      'Smíchovská pobočka bistra přenáší atmosféru japonské ulice do vnitřního prostoru prostřednictvím fasád domů reagujících na ruch přilehlé křižovatky. Materiálové řešení kombinuje tmavě mořené dřevo, přírodní povrchy a industriální prvky doplněné o autorskou grafiku.',
    thumbnail: 'images/projects/bon-smichov/thumb.jpg',
    images: [
      'images/projects/bon-smichov/cover.jpg',
      'images/projects/bon-smichov/detail-01.jpg',
      'images/projects/bon-smichov/detail-02.jpg',
    ]
  },
  {
    id:        'vila-klanovice',
    title:     'Vila Klánovice',
    sub:       'Rekonstrukce vily · 2020',
    location:  'Praha 9 – Klánovice',
    year:      '2020',
    area:      '420 m²',
    status:    'Realizováno',
    desc:      'Kompletní rekonstrukce prvorepublikové vily citlivě kombinuje zachování původních hodnot objektu s moderním architektonickým řešením. Dispoziční úpravy propojují dva původně oddělené objekty. Interiér je sjednocen použitím dubového dřeva, černých detailů a světlých tónů.',
    thumbnail: 'images/projects/vila-klanovice/thumb.jpg',
    images: [
      'images/projects/vila-klanovice/cover.jpg',
      'images/projects/vila-klanovice/detail-01.jpg',
      'images/projects/vila-klanovice/detail-02.jpg',
    ]
  },
  {
    id:        'ha-noi-dejvice',
    title:     'Ha Noi Dejvice',
    sub:       'Komerční interiér · 2021',
    location:  'Praha 6 – Dejvice',
    year:      '2021',
    area:      '125 m²',
    status:    'Realizováno',
    desc:      'Redesign interiéru restaurace přináší vizuální a materiálové řešení inspirované tradičními rodinnými recepty a vietnamským street foodem. Interiér je definován kombinací bílé cihly, tmavě šedé stěrky, dřeva a černé oceli, doplněných zlatými akcenty a autorskou grafikou.',
    thumbnail: 'images/projects/ha-noi-dejvice/thumb.jpg',
    images: [
      'images/projects/ha-noi-dejvice/cover.jpg',
      'images/projects/ha-noi-dejvice/detail-01.jpg',
      'images/projects/ha-noi-dejvice/detail-02.jpg',
    ]
  },
];
