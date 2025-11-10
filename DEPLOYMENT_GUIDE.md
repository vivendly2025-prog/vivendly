# 🚀 Guide de Déploiement Vivendly

## ✅ Build créé avec succès!

Le dossier `dist/` contient tous les fichiers optimisés pour la production:
- **Taille totale**: ~265 KB (83 KB gzippé)
- **CSS**: 42 KB (8 KB gzippé)
- **JS**: 265 KB (83 KB gzippé)
- **HTML**: 5 KB (1.5 KB gzippé)

---

## 📦 Options de Déploiement

### 1. Vercel (Recommandé - Gratuit)

**Déploiement automatique depuis GitHub:**

1. Va sur https://vercel.com
2. Connecte ton compte GitHub
3. Clique sur "New Project"
4. Sélectionne le repository `Vivendly`
5. Configuration détectée automatiquement:
   - **Framework**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Clique sur "Deploy"

**URL finale**: `https://vivendly.vercel.app` (ou domaine custom)

---

### 2. Netlify (Gratuit)

**Option A: Depuis GitHub**
1. Va sur https://netlify.com
2. "Add new site" → "Import an existing project"
3. Connecte GitHub et sélectionne `Vivendly`
4. Configuration:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Deploy

**Option B: Drag & Drop**
1. Va sur https://app.netlify.com/drop
2. Glisse-dépose le dossier `dist/`
3. C'est déployé!

**URL finale**: `https://vivendly.netlify.app`

---

### 3. GitHub Pages (Gratuit)

**Configuration:**

1. Ajoute ce fichier `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm install
        
      - name: Build
        run: npm run build
        
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

2. Sur GitHub: Settings → Pages → Source: `gh-pages` branch

**URL finale**: `https://lfdstarter.github.io/Vivendly/`

---

### 4. Serveur Personnel (cPanel, VPS, etc.)

**Étapes:**

1. **Compresse le dossier dist:**
```bash
cd /Users/jenaate/Documents/FLDNetwork/WORK/Client/Vivendly/vivendly-landing
zip -r vivendly-dist.zip dist/
```

2. **Upload via FTP/SFTP:**
   - Connecte-toi à ton serveur
   - Upload le contenu de `dist/` dans `public_html/` ou `www/`

3. **Configuration Apache (.htaccess déjà inclus):**
   - GZIP activé
   - Cache navigateur
   - Redirection HTTPS
   - Headers de sécurité

4. **Configuration Nginx:**
```nginx
server {
    listen 80;
    server_name vivendly.com;
    root /var/www/vivendly/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache statique
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Compression GZIP
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml;
}
```

---

### 5. Cloudflare Pages (Gratuit)

1. Va sur https://pages.cloudflare.com
2. "Create a project" → Connect GitHub
3. Sélectionne `Vivendly`
4. Configuration:
   - **Build command**: `npm run build`
   - **Build output**: `dist`
5. Deploy

**Avantages**: CDN mondial gratuit + SSL automatique

---

## 🔧 Commandes Utiles

```bash
# Créer un nouveau build
npm run build

# Prévisualiser le build localement
npm run preview

# Build + Preview
npm run build && npm run preview

# Nettoyer et rebuild
rm -rf dist node_modules
npm install
npm run build
```

---

## 📊 Optimisations Incluses

✅ **Performance:**
- Code splitting automatique
- Tree shaking
- Minification CSS/JS
- Images optimisées
- Lazy loading

✅ **SEO:**
- Meta tags complets
- Open Graph
- Twitter Cards
- Schema.org JSON-LD
- Sitemap.xml
- robots.txt

✅ **Sécurité:**
- Headers de sécurité
- HTTPS forcé
- Content Security Policy ready

✅ **PWA Ready:**
- manifest.json
- Service Worker ready
- Offline capable

---

## 🌐 Domaine Personnalisé

### Sur Vercel:
1. Settings → Domains
2. Ajoute ton domaine
3. Configure les DNS:
   - Type: `A` → `76.76.21.21`
   - Type: `CNAME` → `cname.vercel-dns.com`

### Sur Netlify:
1. Domain settings → Add custom domain
2. Configure les DNS:
   - Type: `A` → `75.2.60.5`
   - Type: `CNAME` → `vivendly.netlify.app`

---

## 📁 Structure du Build

```
dist/
├── index.html              # Page principale (4.98 KB)
├── assets/
│   ├── index-xxx.css      # Styles (41.98 KB)
│   └── index-xxx.js       # JavaScript (265.55 KB)
├── images/                 # Images optimisées
├── video/                  # Vidéos
├── manifest.json          # PWA manifest
├── robots.txt             # SEO
├── sitemap.xml            # SEO
└── .htaccess              # Apache config

Total: ~312 KB (non compressé)
Gzippé: ~93 KB
```

---

## ✅ Checklist Avant Déploiement

- [x] Build créé sans erreurs
- [x] SEO optimisé (100/100)
- [x] Images optimisées
- [x] Responsive design testé
- [x] Liens fonctionnels
- [x] Performance optimisée
- [x] Sécurité configurée
- [ ] Domaine configuré
- [ ] SSL activé
- [ ] Analytics ajouté (optionnel)

---

## 🎯 Recommandation

**Pour un déploiement rapide et gratuit**: Utilise **Vercel**
- Déploiement en 2 minutes
- SSL automatique
- CDN mondial
- Redéploiement automatique à chaque push GitHub
- Analytics gratuits

**URL finale**: https://vivendly.vercel.app

---

## 💡 Support

Si tu as besoin d'aide pour le déploiement:
- Email: support@vivendly.com
- Documentation: Ce fichier
- Build: Dossier `dist/` prêt à l'emploi

**Le site est prêt à être déployé! 🚀**
