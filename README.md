# Vivendly Landing Page

Landing page moderne et convertible pour Vivendly - Plateforme d'automatisation e-commerce propulsée par l'IA.

## 🚀 Technologies

- **React 18** - Framework UI
- **Vite** - Build tool ultra-rapide
- **Lucide React** - Icônes modernes et élégantes
- **CSS Modules** - Styling modulaire

## 🎨 Caractéristiques

- ✅ Design moderne inspiré de Framer
- ✅ Multilingue (EN, FR, ES)
- ✅ Animations fluides et performantes
- ✅ 100% Responsive (Mobile, Tablet, Desktop)
- ✅ Optimisé pour la conversion
- ✅ Accessibilité WCAG AA
- ✅ Performance optimale (< 3s load time)

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Builder pour la production
npm run build

# Prévisualiser le build de production
npm run preview
```

## 🎨 Palette de Couleurs

- **Principal**: `#6271d9`
- **Secondaires**: `#707ddd`, `#838fe1`, `#929ce4`, `#9fa9e7`
- **Accent**: `#fac0cf` (utilisé avec parcimonie)
- **Texte**: `#1a1a1a` (titres), `#4a4a4a` (corps)
- **Fond**: `#ffffff`, `#F9FAFB`

## 📁 Structure du Projet

```
src/
├── components/          # Composants React
│   ├── Hero.jsx
│   ├── Features.jsx
│   ├── VisualDemo.jsx
│   ├── SocialProof.jsx
│   ├── FAQ.jsx
│   ├── FinalCTA.jsx
│   ├── Footer.jsx
│   └── LanguageSwitcher.jsx
├── context/            # Context API
│   └── LanguageContext.jsx
├── translations/       # Fichiers de traduction
│   └── translations.js
├── App.jsx            # Composant principal
├── main.jsx           # Point d'entrée
└── index.css          # Styles globaux
```

## 🌍 Multilingue

Le système multilingue utilise React Context. Pour ajouter une nouvelle langue:

1. Ajoutez les traductions dans `src/translations/translations.js`
2. Ajoutez le bouton de langue dans `LanguageSwitcher.jsx`

## 🎯 Sections de la Landing Page

1. **Hero** - Section principale avec CTA
2. **Features** - 8 fonctionnalités principales
3. **Visual Demo** - Démonstration visuelle du produit
4. **Social Proof** - Témoignages et métriques
5. **FAQ** - Questions fréquentes
6. **Final CTA** - Appel à l'action final
7. **Footer** - Liens et informations

## 📱 Responsive Breakpoints

- **Desktop**: > 1200px
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px

## 🔧 Personnalisation

### Modifier les couleurs

Éditez les variables CSS dans les fichiers `.css` de chaque composant.

### Ajouter des images

Placez vos images dans `public/images/` et référencez-les avec `/images/nom-fichier.ext`

### Modifier le contenu

Éditez les traductions dans `src/translations/translations.js`

## 🚀 Déploiement

Le projet peut être déployé sur:
- Vercel
- Netlify
- GitHub Pages
- Tout hébergeur supportant les sites statiques

```bash
npm run build
# Le dossier 'dist' contient les fichiers à déployer
```

## 📝 Notes

- Les placeholders pour les screenshots sont des divs avec des gradients
- Les icônes utilisent Lucide React (remplaçant moderne de Feather Icons)
- Le logo est situé dans `public/images/logo.png`
- Toutes les animations sont optimisées pour la performance

## 🎯 Optimisations de Conversion

- Friction réduite (pas de carte bancaire requise)
- Urgence sociale (nombre d'inscriptions)
- Preuve sociale (témoignages, métriques)
- CTAs clairs et visibles
- Microcopy rassurant

## 📄 Licence

© 2025 Vivendly. Tous droits réservés.
# Vivendly
