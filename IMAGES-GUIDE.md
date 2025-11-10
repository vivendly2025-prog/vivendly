# 📸 Guide d'ajout des images - Vivendly Landing Page

## 🎯 Images à ajouter

Voici les emplacements où vous devez ajouter vos vraies images/screenshots:

### 1. Hero Section - Dashboard Mockup
**Fichier**: `src/components/Hero.jsx`

**Emplacement actuel**:
```jsx
<div className="mockup-placeholder">
  {/* Placeholder for dashboard screenshot */}
</div>
```

**Comment remplacer**:
```jsx
<div className="mockup-placeholder">
  <img 
    src="/images/dashboard-main.png" 
    alt="Vivendly Dashboard - Manage your e-commerce stores"
    className="dashboard-image"
  />
</div>
```

**Ajoutez ce CSS dans `Hero.css`**:
```css
.dashboard-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
}
```

**Recommandations**:
- Taille: 1200x800px minimum
- Format: PNG ou WebP
- Poids: < 500KB (optimisé)
- Contenu: Screenshot du dashboard principal

---

### 2. Visual Demo - 3 Mockups

**Fichier**: `src/components/VisualDemo.jsx`

**Emplacement actuel**:
```jsx
<div 
  className="demo-mockup"
  style={{ background: gradients[index] }}
>
  {/* Placeholder for actual screenshots */}
</div>
```

**Comment remplacer**:
```jsx
<div className="demo-mockup">
  <img 
    src={`/images/demo-${index + 1}.png`}
    alt={item.label}
    className="demo-image"
  />
</div>
```

**Ajoutez ce CSS dans `VisualDemo.css`**:
```css
.demo-mockup {
  position: relative;
  overflow: hidden;
}

.demo-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
  transition: transform 0.3s ease;
}

.demo-card:hover .demo-image {
  transform: scale(1.05);
}
```

**Images nécessaires**:
1. `/images/demo-1.png` - Dashboard de gestion des boutiques
2. `/images/demo-2.png` - Interface de sélection de produits
3. `/images/demo-3.png` - Studio créatif IA

**Recommandations**:
- Taille: 800x600px minimum
- Format: PNG ou WebP
- Poids: < 300KB chacune
- Style: Screenshots réels de l'interface

---

## 📁 Structure des images

```
public/
└── images/
    ├── logo.png                 ✅ Déjà présent
    ├── dashboard-main.png       ⏳ À ajouter
    ├── demo-1.png              ⏳ À ajouter
    ├── demo-2.png              ⏳ À ajouter
    ├── demo-3.png              ⏳ À ajouter
    ├── og-image.png            ⏳ À ajouter (SEO)
    └── favicon.ico             ⏳ À ajouter (optionnel)
```

## 🎨 Optimisation des images

### Avant d'ajouter vos images

1. **Redimensionner**
   - Utilisez les dimensions recommandées
   - Pas besoin de 4K pour le web

2. **Compresser**
   - Outils en ligne: TinyPNG, Squoosh, ImageOptim
   - Objectif: Réduire de 50-70% sans perte visible

3. **Format**
   - PNG: Pour screenshots avec texte
   - WebP: Meilleur compression (moderne)
   - JPG: Pour photos (pas recommandé pour UI)

### Outils recommandés

**En ligne**:
- https://tinypng.com (PNG/JPG)
- https://squoosh.app (tous formats)
- https://imagecompressor.com

**Desktop**:
- ImageOptim (Mac)
- FileOptimizer (Windows)
- GIMP (tous OS)

## 🚀 Méthode rapide

### 1. Prendre les screenshots

**Dashboard principal**:
```
1. Ouvrez votre dashboard Vivendly
2. Zoomez à 100%
3. Screenshot (Cmd+Shift+4 sur Mac)
4. Sauvegardez comme "dashboard-main.png"
```

**Demos**:
```
1. Screenshot de la page de gestion des boutiques → demo-1.png
2. Screenshot de la sélection de produits → demo-2.png
3. Screenshot du studio créatif → demo-3.png
```

### 2. Optimiser

```bash
# Avec TinyPNG (en ligne)
1. Allez sur https://tinypng.com
2. Glissez-déposez vos images
3. Téléchargez les versions optimisées
```

### 3. Ajouter au projet

```bash
# Placez les images dans le dossier
public/images/

# Structure finale:
public/images/
├── logo.png
├── dashboard-main.png
├── demo-1.png
├── demo-2.png
└── demo-3.png
```

### 4. Mettre à jour le code

Suivez les exemples de code ci-dessus pour chaque section.

## 🎯 Images SEO (optionnel mais recommandé)

### Open Graph Image

**Créer une image OG**:
- Taille: 1200x630px
- Format: PNG ou JPG
- Contenu: Logo + Tagline + Screenshot

**Ajouter dans `index.html`**:
```html
<meta property="og:image" content="/images/og-image.png" />
<meta name="twitter:image" content="/images/og-image.png" />
```

### Favicon

**Créer un favicon**:
- Taille: 32x32px ou 64x64px
- Format: ICO ou PNG
- Contenu: Logo simplifié

**Ajouter dans `index.html`**:
```html
<link rel="icon" type="image/png" href="/images/favicon.png" />
```

## 📱 Images responsives (avancé)

### Utiliser srcset pour différentes tailles

```jsx
<img 
  src="/images/dashboard-main.png"
  srcSet="
    /images/dashboard-main-small.png 600w,
    /images/dashboard-main-medium.png 1200w,
    /images/dashboard-main-large.png 1800w
  "
  sizes="(max-width: 768px) 600px, (max-width: 1200px) 1200px, 1800px"
  alt="Dashboard"
/>
```

### Utiliser WebP avec fallback

```jsx
<picture>
  <source srcSet="/images/dashboard-main.webp" type="image/webp" />
  <source srcSet="/images/dashboard-main.png" type="image/png" />
  <img src="/images/dashboard-main.png" alt="Dashboard" />
</picture>
```

## 🎨 Effets visuels sur les images

### Effet hover zoom

```css
.demo-mockup {
  overflow: hidden;
}

.demo-image {
  transition: transform 0.3s ease;
}

.demo-card:hover .demo-image {
  transform: scale(1.05);
}
```

### Effet de chargement (skeleton)

```css
.mockup-placeholder {
  background: linear-gradient(
    90deg,
    #f0f0f0 25%,
    #e0e0e0 50%,
    #f0f0f0 75%
  );
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

### Ombre portée

```css
.dashboard-image {
  box-shadow: 0 20px 60px rgba(98, 113, 217, 0.25);
}
```

## ⚡ Lazy Loading

### Pour les images below the fold

```jsx
<img 
  src="/images/demo-1.png"
  alt="Demo"
  loading="lazy"  // Lazy loading natif
/>
```

### Avec Intersection Observer (avancé)

```jsx
import { useEffect, useRef, useState } from 'react'

function LazyImage({ src, alt }) {
  const [isLoaded, setIsLoaded] = useState(false)
  const imgRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsLoaded(true)
        observer.disconnect()
      }
    })

    observer.observe(imgRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <img 
      ref={imgRef}
      src={isLoaded ? src : '/images/placeholder.png'}
      alt={alt}
    />
  )
}
```

## 🎯 Checklist finale

Avant de mettre en production:

- [ ] Toutes les images sont optimisées (< 500KB)
- [ ] Les images ont des alt text descriptifs
- [ ] Les images sont dans le bon format (PNG/WebP)
- [ ] Les images sont responsive
- [ ] Lazy loading activé pour images below fold
- [ ] Open Graph image ajoutée
- [ ] Favicon ajouté
- [ ] Images testées sur mobile
- [ ] Images testées sur différents navigateurs

## 🔍 Tester les images

### Performance
```bash
# Lighthouse audit
1. Ouvrez Chrome DevTools (F12)
2. Onglet "Lighthouse"
3. Cliquez "Generate report"
4. Vérifiez "Performance" et "Best Practices"
```

### Responsive
```bash
# Chrome DevTools
1. Ouvrez DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Testez différentes tailles d'écran
```

### Accessibilité
```bash
# Vérifiez les alt text
1. Inspectez l'élément image
2. Vérifiez l'attribut alt
3. Assurez-vous qu'il est descriptif
```

## 💡 Conseils pro

1. **Nommage des fichiers**
   - Utilisez des noms descriptifs: `dashboard-main.png` ✅
   - Évitez: `image1.png`, `screenshot.png` ❌

2. **Versions multiples**
   - Gardez les originaux haute résolution
   - Créez des versions optimisées pour le web
   - Utilisez un dossier `originals/` pour les sources

3. **Cohérence visuelle**
   - Même style de screenshots (thème clair/sombre)
   - Même niveau de zoom
   - Même qualité d'image

4. **Mise à jour régulière**
   - Mettez à jour les screenshots quand l'UI change
   - Gardez les images à jour avec les features

## 📚 Ressources

**Optimisation**:
- https://tinypng.com
- https://squoosh.app
- https://imageoptim.com

**Formats modernes**:
- WebP: https://developers.google.com/speed/webp
- AVIF: https://jakearchibald.com/2020/avif-has-landed/

**Outils de screenshot**:
- Mac: Cmd+Shift+4
- Windows: Win+Shift+S
- Chrome Extension: Awesome Screenshot

---

**Prêt à ajouter vos images? Suivez ce guide étape par étape! 📸**
