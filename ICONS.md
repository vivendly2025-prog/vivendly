# 🎨 Guide des Icônes - Lucide React

## Icônes actuellement utilisées

### Hero Section
```jsx
import { Play, Package, Users, Eye, Sparkles } from 'lucide-react'

<Play size={18} />        // Bouton "Watch Demo"
<Package size={20} />     // 10M+ Products
<Users size={20} />       // 7K+ Suppliers
<Eye size={20} />         // Real-time Ad Spy
<Sparkles size={20} />    // AI Creative Studio
```

### Features Section
```jsx
import { 
  Store,      // Instant Store Creation
  Package,    // 10M+ Product Catalog
  Trophy,     // Winner Product Algorithm
  Sparkles,   // AI Creative Studio
  Eye,        // Real-Time Ad Spy
  Clock,      // 6-Month Ad History
  Rocket,     // Launch Campaigns Instantly
  Users       // 7K+ Verified Suppliers
} from 'lucide-react'

<Store size={36} />
<Package size={36} />
<Trophy size={36} />
// etc...
```

### FAQ Section
```jsx
import { ChevronDown } from 'lucide-react'

<ChevronDown size={24} className="faq-icon" />
```

### Final CTA
```jsx
import { Flame } from 'lucide-react'

<Flame size={16} />  // Urgency indicator
```

### Footer
```jsx
import { Twitter, Linkedin, Facebook } from 'lucide-react'

<Twitter size={20} />
<Linkedin size={20} />
<Facebook size={20} />
```

## Comment utiliser une icône

### 1. Importer l'icône
```jsx
import { NomIcone } from 'lucide-react'
```

### 2. Utiliser dans le JSX
```jsx
<NomIcone 
  size={24}              // Taille en pixels
  color="#6271d9"        // Couleur (optionnel)
  strokeWidth={2}        // Épaisseur du trait (optionnel)
  className="ma-classe"  // Classe CSS (optionnel)
/>
```

### 3. Exemples
```jsx
// Icône simple
<Heart size={20} />

// Icône colorée
<Star size={24} color="#fac0cf" />

// Icône remplie
<Star size={24} fill="#fac0cf" color="#fac0cf" />

// Icône avec classe CSS
<Check size={18} className="icon-success" />
```

## Icônes recommandées pour Vivendly

### E-commerce
```jsx
ShoppingCart, ShoppingBag, Store, Package, Box, 
Truck, CreditCard, DollarSign, Tag, Gift
```

### Business & Analytics
```jsx
TrendingUp, TrendingDown, BarChart, PieChart, 
LineChart, Activity, Target, Zap, Award
```

### Social & Marketing
```jsx
Share2, MessageCircle, ThumbsUp, Heart, Star,
Send, Mail, Bell, Megaphone, Users
```

### Tech & AI
```jsx
Cpu, Zap, Sparkles, Bot, Brain, Code, 
Database, Server, Cloud, Wifi
```

### Actions
```jsx
Play, Pause, Download, Upload, Plus, Minus,
Check, X, ArrowRight, ArrowLeft, Search
```

### UI Elements
```jsx
Menu, X, ChevronDown, ChevronUp, ChevronRight,
ChevronLeft, MoreVertical, MoreHorizontal,
Settings, Filter, Eye, EyeOff
```

### Time & Calendar
```jsx
Clock, Calendar, Timer, Watch, History,
RefreshCw, RotateCw, RotateCcw
```

### Files & Documents
```jsx
File, FileText, Folder, Image, Video,
Download, Upload, Paperclip, Link
```

## Exemples d'utilisation avancée

### Icône avec animation
```jsx
import { Loader } from 'lucide-react'

<Loader 
  size={24} 
  className="animate-spin"  // Animation CSS
/>
```

CSS:
```css
.animate-spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
```

### Icône avec hover effect
```jsx
import { Heart } from 'lucide-react'

<Heart 
  size={24}
  className="icon-heart"
/>
```

CSS:
```css
.icon-heart {
  color: #6b7280;
  transition: all 0.3s ease;
}

.icon-heart:hover {
  color: #fac0cf;
  fill: #fac0cf;
  transform: scale(1.2);
}
```

### Icône dans un bouton
```jsx
import { Download } from 'lucide-react'

<button className="btn-download">
  <Download size={18} />
  <span>Download</span>
</button>
```

CSS:
```css
.btn-download {
  display: flex;
  align-items: center;
  gap: 8px;
}
```

## Toutes les icônes disponibles

Lucide React contient **1000+ icônes**. Voici les catégories:

### Catégories principales
- **Arrows**: ArrowUp, ArrowDown, ArrowLeft, ArrowRight, etc.
- **Brands**: Facebook, Twitter, Instagram, Youtube, etc.
- **Business**: Briefcase, Building, Users, UserPlus, etc.
- **Communication**: Mail, MessageCircle, Phone, Video, etc.
- **Design**: Palette, Pen, Brush, Crop, etc.
- **Development**: Code, Terminal, GitBranch, Github, etc.
- **E-commerce**: ShoppingCart, CreditCard, Package, etc.
- **Files**: File, Folder, FileText, Image, etc.
- **Media**: Play, Pause, Volume, Music, etc.
- **Navigation**: Menu, Home, Search, Settings, etc.
- **Social**: Heart, Star, Share, ThumbsUp, etc.
- **Weather**: Sun, Moon, Cloud, CloudRain, etc.

### Explorer toutes les icônes
Visitez: https://lucide.dev/icons/

## Personnalisation des icônes

### Taille
```jsx
<Icon size={16} />  // Petit
<Icon size={20} />  // Moyen
<Icon size={24} />  // Normal
<Icon size={32} />  // Grand
<Icon size={48} />  // Très grand
```

### Couleur
```jsx
<Icon color="#6271d9" />      // Couleur principale
<Icon color="#fac0cf" />      // Couleur accent
<Icon color="currentColor" /> // Hérite du parent
```

### Épaisseur du trait
```jsx
<Icon strokeWidth={1} />   // Fin
<Icon strokeWidth={2} />   // Normal (défaut)
<Icon strokeWidth={3} />   // Épais
```

### Remplissage
```jsx
<Icon fill="none" />           // Pas de remplissage (défaut)
<Icon fill="currentColor" />   // Rempli avec la couleur
<Icon fill="#6271d9" />        // Rempli avec couleur spécifique
```

## Bonnes pratiques

### ✅ À faire
- Utiliser des tailles cohérentes (16, 20, 24, 32)
- Respecter la palette de couleurs Vivendly
- Ajouter des aria-label pour l'accessibilité
- Utiliser strokeWidth={2} par défaut

### ❌ À éviter
- Mélanger trop de styles d'icônes
- Utiliser des tailles impaires (17, 23, etc.)
- Oublier les aria-label sur les boutons icônes
- Surcharger avec trop d'icônes

## Exemples de remplacement

### Remplacer une icône existante

**Avant:**
```jsx
import { Package } from 'lucide-react'
<Package size={20} />
```

**Après:**
```jsx
import { Box } from 'lucide-react'
<Box size={20} />
```

### Ajouter une nouvelle icône

1. Trouvez l'icône sur https://lucide.dev
2. Importez-la:
```jsx
import { NouvelleIcone } from 'lucide-react'
```
3. Utilisez-la:
```jsx
<NouvelleIcone size={24} color="#6271d9" />
```

## Accessibilité

### Icône décorative
```jsx
<Icon size={20} aria-hidden="true" />
```

### Icône avec signification
```jsx
<Icon size={20} aria-label="Description de l'icône" />
```

### Icône dans un bouton
```jsx
<button aria-label="Fermer">
  <X size={20} />
</button>
```

## Performance

Les icônes Lucide React sont:
- ✅ Légères (SVG optimisés)
- ✅ Tree-shakeable (seules les icônes utilisées sont incluses)
- ✅ Pas de dépendances externes
- ✅ Compatible SSR (Server-Side Rendering)

## Ressources

- **Documentation officielle**: https://lucide.dev
- **GitHub**: https://github.com/lucide-icons/lucide
- **NPM**: https://www.npmjs.com/package/lucide-react
- **Figma Plugin**: Disponible pour designers

---

**Astuce**: Utilisez la recherche sur lucide.dev pour trouver rapidement l'icône parfaite!
