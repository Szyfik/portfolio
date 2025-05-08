# Portfolio Website

Profesjonalna strona portfolio z responsywnym designem, ciemnym/jasnym motywem i automatycznym wdrażaniem na GitHub Pages.

## Funkcje

- Responsywny design
- Ciemny/jasny motyw
- Płynne przewijanie
- Animacje przy przewijaniu
- Filtrowanie projektów
- Formularz kontaktowy z walidacją
- Optymalizacja SEO
- Automatyczne wdrażanie na GitHub Pages

## Technologie

- HTML5
- CSS3
- JavaScript (ES6+)
- GitHub Actions
- Node.js

## Instalacja

1. Sklonuj repozytorium:
```bash
git clone https://github.com/szyfik/portfolio.git
cd portfolio
```

2. Zainstaluj zależności:
```bash
npm install
```

3. Uruchom serwer deweloperski:
```bash
npm start
```

## Budowanie

Aby zbudować projekt do wdrożenia:

```bash
npm run build
```

Zostanie utworzony katalog `dist` z zoptymalizowanymi plikami.

## Wdrażanie

Projekt jest automatycznie wdrażany na GitHub Pages po każdym pushu do gałęzi `main`. Konfiguracja wdrażania znajduje się w pliku `.github/workflows/deploy.yml`.

## Struktura projektu

```
portfolio/
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── images/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── index.html
├── about.html
├── services.html
├── portfolio.html
├── contact.html
├── package.json
└── README.md
```

## Licencja

MIT 