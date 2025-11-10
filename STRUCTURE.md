# Structure du Projet Vivendly Landing Page

```
vivendly-landing/
│
├── public/
│   └── images/
│       └── logo.png                    # Logo Vivendly
│
├── src/
│   ├── components/                     # Composants React
│   │   ├── Hero.jsx                    # Section Hero avec CTA
│   │   ├── Hero.css
│   │   ├── Features.jsx                # Grille de 8 fonctionnalités
│   │   ├── Features.css
│   │   ├── VisualDemo.jsx              # Démonstration visuelle
│   │   ├── VisualDemo.css
│   │   ├── SocialProof.jsx             # Témoignages et métriques
│   │   ├── SocialProof.css
│   │   ├── FAQ.jsx                     # Questions fréquentes
│   │   ├── FAQ.css
│   │   ├── FinalCTA.jsx                # Appel à l'action final
│   │   ├── FinalCTA.css
│   │   ├── Footer.jsx                  # Pied de page
│   │   ├── Footer.css
│   │   ├── LanguageSwitcher.jsx        # Sélecteur de langue
│   │   └── LanguageSwitcher.css
│   │
│   ├── context/
│   │   └── LanguageContext.jsx         # Context pour multilingue
│   │
│   ├── translations/
│   │   └── translations.js             # Traductions EN/FR/ES
│   │
│   ├── App.jsx                         # Composant principal
│   ├── main.jsx                        # Point d'entrée React
│   └── index.css                       # Styles globaux
│
├── index.html                          # HTML principal
├── vite.config.js                      # Configuration Vite
├── package.json                        # Dépendances npm
├── .gitignore                          # Fichiers à ignorer
├── README.md                           # Documentation principale
├── GUIDE.md                            # Guide d'utilisation détaillé
└── STRUCTURE.md                        # Ce fichier

# Anciens fichiers (sauvegardés)
├── index-old.html                      # Ancienne version HTML monolithique
```

## 📋 Description des composants

### Hero.jsx
- Logo Vivendly
- Titre principal multilingue
- Sous-titre
- 2 boutons CTA (Primary + Secondary)
- Trust bar avec 4 métriques
- Mockup animé du dashboard
- Badge "Powered by Shopify"

### Features.jsx
- Titre de section
- Grille responsive de 8 cartes
- Icônes Lucide pour chaque feature
- Animations au scroll (Intersection Observer)
- Hover effects

### VisualDemo.jsx
- 3 mockups avec gradients de couleurs
- Labels et descriptions
- Animation float
- Layout responsive

### SocialProof.jsx
- 4 cartes de métriques
- 3 témoignages clients
- Avatars colorés
- Notation 5 étoiles
- Background gris clair

### FAQ.jsx
- Accordéon interactif
- 4 questions/réponses
- Icône chevron animée
- Hover effects

### FinalCTA.jsx
- Titre et sous-titre
- Bouton CTA large
- Microcopy rassurant
- Badge d'urgence sociale
- Background avec shapes flottantes

### Footer.jsx
- Logo (version blanche)
- 3 colonnes de contenu
- Liens sociaux (Twitter, LinkedIn, Facebook)
- Sélecteur de langue
- Copyright et "Powered by Shopify"

### LanguageSwitcher.jsx
- Position fixe en haut à droite
- 3 boutons (EN, FR, ES)
- Style pill moderne
- Backdrop blur effect

## 🎨 Styles

Chaque composant a son propre fichier CSS pour:
- Faciliter la maintenance
- Éviter les conflits de styles
- Permettre le lazy loading
- Garder le code organisé

### index.css
Contient:
- Reset CSS
- Animations globales (@keyframes)
- Classes utilitaires
- Styles de base (body, html)
- Focus states pour l'accessibilité

## 🌍 Système multilingue

### LanguageContext.jsx
- Utilise React Context API
- Stocke la langue dans localStorage
- Fournit `language` et `changeLanguage()`

### translations.js
Structure:
```javascript
{
  en: { hero: {...}, features: {...}, ... },
  fr: { hero: {...}, features: {...}, ... },
  es: { hero: {...}, features: {...}, ... }
}
```

## 🔧 Configuration

### vite.config.js
- Plugin React
- Port 3000
- Auto-open browser

### package.json
Dépendances:
- react: ^18.2.0
- react-dom: ^18.2.0
- lucide-react: ^0.294.0
- vite: ^5.0.8
- @vitejs/plugin-react: ^4.2.1

## 📱 Responsive

### Breakpoints
```css
Desktop:  > 1200px
Tablet:   768px - 1199px
Mobile:   < 768px
```

### Adaptations mobiles
- Grid → Single column
- Font sizes réduits
- Padding/margin ajustés
- Boutons pleine largeur
- Trust bar centré
- Shapes flottantes cachées

## 🎯 Animations

### Types d'animations
1. **fadeInUp**: Entrée des éléments au scroll
2. **float**: Flottement des mockups
3. **hover**: Transformations au survol
4. **rotate**: Rotation de l'icône FAQ

### Performance
- GPU-accelerated (transform, opacity)
- Intersection Observer pour scroll
- CSS transitions (cubic-bezier)
- Pas de jQuery ou librairies lourdes

## 🚀 Build & Deploy

### Development
```bash
npm run dev
# → http://localhost:3000
```

### Production
```bash
npm run build
# → dossier dist/
```

### Fichiers générés
```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── logo-[hash].png
```

## 📦 Dépendances

### Production
- **react**: Framework UI
- **react-dom**: Rendu React
- **lucide-react**: Icônes modernes

### Development
- **vite**: Build tool
- **@vitejs/plugin-react**: Plugin React pour Vite
- **@types/react**: Types TypeScript (optionnel)

## 🎨 Design Tokens

### Couleurs
```css
--primary: #6271d9
--secondary-1: #707ddd
--secondary-2: #838fe1
--secondary-3: #929ce4
--secondary-4: #9fa9e7
--accent: #fac0cf
--text-dark: #1a1a1a
--text-medium: #4a4a4a
--text-light: #6b7280
--bg-white: #ffffff
--bg-gray: #F9FAFB
--border: #e5e7eb
```

### Espacements
```css
--spacing-xs: 8px
--spacing-sm: 16px
--spacing-md: 24px
--spacing-lg: 32px
--spacing-xl: 60px
--spacing-2xl: 100px
```

### Border Radius
```css
--radius-sm: 8px
--radius-md: 12px
--radius-lg: 16px
--radius-full: 50px
```

## 🔍 SEO

### Meta tags inclus
- Title
- Description
- Open Graph (og:title, og:description, og:url)
- Twitter Card
- Viewport
- Charset

### À ajouter
- og:image (screenshot de la landing)
- Canonical URL
- Structured data (JSON-LD)
- Sitemap.xml
- robots.txt

## ♿ Accessibilité

### Implémenté
- ✅ Semantic HTML (header, main, section, footer)
- ✅ ARIA labels sur boutons
- ✅ Focus visible (outline)
- ✅ Contraste couleurs (WCAG AA)
- ✅ Navigation clavier
- ✅ Alt text sur images

### À tester
- Screen readers (VoiceOver, NVDA)
- Keyboard navigation complète
- Color contrast analyzer

## 📊 Performance Checklist

- ✅ CSS inline (pas de fichiers externes)
- ✅ Minimal JavaScript
- ✅ Pas de jQuery ou librairies lourdes
- ✅ Animations GPU-accelerated
- ✅ Lazy loading (Intersection Observer)
- ✅ Font-display: swap
- ⏳ Image optimization (à faire)
- ⏳ Code splitting (si nécessaire)
- ⏳ Service Worker (optionnel)

---

**Structure créée le**: 8 novembre 2025
**Version**: 1.0.0
