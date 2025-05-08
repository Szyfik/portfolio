# Portfolio Filipa Szykulskiego

## Opis projektu
To jest moje portfolio, które prezentuje moje umiejętności jako web developera. Strona zawiera informacje o mnie, moje usługi, portfolio projektów oraz formularz kontaktowy.

## Technologie
- HTML5
- CSS3
- JavaScript
- Netlify (hosting i formularze)
- Font Awesome (ikony)
- Google Fonts

## Struktura projektu
```
portfolio/
├── assets/
│   ├── css/
│   │   ├── style.css
│   │   └── dark-mode.css
│   ├── js/
│   │   ├── main.js
│   │   └── dark-mode.js
│   └── images/
│       ├── icons/
│       │   ├── about.svg
│       │   ├── contact.svg
│       │   ├── dark-mode.svg
│       │   ├── email.svg
│       │   ├── github.svg
│       │   ├── home.svg
│       │   ├── light-mode.svg
│       │   ├── linkedin.svg
│       │   ├── location.svg
│       │   ├── menu.svg
│       │   ├── phone.svg
│       │   ├── portfolio.svg
│       │   ├── services.svg
│       │   └── theme.svg
│       └── projects/
├── projects/
│   └── fashion-shop/
│       ├── index.html
│       ├── style.css
│       └── script.js
├── index.html
├── about.html
├── services.html
├── contact.html
└── README.md
```

## Jak stworzyć podobną stronę krok po kroku

### 1. Przygotowanie środowiska
1. Zainstaluj Visual Studio Code
2. Zainstaluj Git
3. Utwórz konto na GitHub
4. Utwórz konto na Netlify

### 2. Konfiguracja Git
```bash
# Konfiguracja użytkownika Git
git config --global user.name "Twoje Imię"
git config --global user.email "twoj@email.com"

# Inicjalizacja repozytorium
git init

# Dodanie plików do śledzenia
git add .

# Pierwszy commit
git commit -m "Inicjalizacja projektu"

# Połączenie z repozytorium GitHub
git remote add origin https://github.com/twoja-nazwa-uzytkownika/nazwa-repozytorium.git
git branch -M main
git push -u origin main
```

### 3. Struktura projektu
1. Utwórz podstawową strukturę katalogów
2. Stwórz pliki HTML dla każdej sekcji
3. Dodaj style CSS
4. Dodaj skrypty JavaScript
5. Dodaj ikony SVG

### 4. Wdrożenie na Netlify
1. Zaloguj się na Netlify
2. Kliknij "New site from Git"
3. Wybierz GitHub jako źródło
4. Wybierz swoje repozytorium
5. Skonfiguruj ustawienia wdrożenia:
   - Branch to deploy: `main`
   - Build command: (zostaw puste)
   - Publish directory: `.`
6. Kliknij "Deploy site"

### 5. Konfiguracja formularza kontaktowego na Netlify
1. W pliku `contact.html` dodaj atrybuty do formularza:
```html
<form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
    <input type="hidden" name="form-name" value="contact">
    <!-- reszta pól formularza -->
</form>
```

2. Dodaj atrybuty `name` do wszystkich pól formularza:
```html
<input type="text" name="name" required>
<input type="email" name="email" required>
<textarea name="message" required></textarea>
```

3. Po wdrożeniu na Netlify:
   - Przejdź do zakładki "Forms" w panelu Netlify
   - Sprawdź czy formularz został wykryty
   - Skonfiguruj powiadomienia email
   - Przetestuj formularz

### 6. Aktualizacja projektu
1. Wprowadź zmiany w kodzie
2. Dodaj zmiany do Git:
```bash
git add .
git commit -m "Opis zmian"
git push origin main
```
3. Netlify automatycznie zaktualizuje stronę

## Funkcjonalności
- Responsywny design
- Tryb ciemny/jasny
- Animacje i przejścia
- Formularz kontaktowy
- Portfolio projektów
- Filtrowanie projektów
- Lazy loading obrazów

## Projekty w portfolio
1. Fashion Shop
   - Nowoczesny sklep internetowy
   - Filtrowanie produktów
   - Koszyk zakupowy
   - Responsywny design

## Historia zmian
1. Inicjalizacja projektu
2. Dodanie podstawowej struktury HTML
3. Stylowanie CSS
4. Implementacja JavaScript
5. Dodanie projektu Fashion Shop
6. Konfiguracja Netlify
7. Dodanie formularza kontaktowego
8. Dodanie ikon SVG

## Przyszłe aktualizacje
- [ ] Dodanie nowych projektów
- [ ] Implementacja bloga
- [ ] Rozszerzenie sekcji portfolio
- [ ] Dodanie animacji
- [ ] Optymalizacja wydajności

## Kontakt
- GitHub: [Szyfik](https://github.com/Szyfik)
- LinkedIn: [Filip Szykulski](https://linkedin.com/in/filip-szykulski)
- Email: kontakt@filipszykulski.pl 