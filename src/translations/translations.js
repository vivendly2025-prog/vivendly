import { legalTranslations } from './legalTranslations'

export const translations = {
  en: {
    hero: {
      headline: "Build Your E-Commerce Empire ",
      headlineHighlight: "In Few Minutes",
      subheadline: "AI-powered platform that creates, optimizes, and scales your Shopify store automatically - from winning product selection to viral marketing campaigns",
      ctaPrimary: "Generate My Shop",
      ctaSecondary: "Watch Demo (2min)",
      trustBar: {
        products: "2M+ Products",
        suppliers: "7K+ Suppliers",
        adSpy: "Real-time Ad Spy",
        creative: "AI Creative Studio"
      },
      poweredBy: "Powered by Shopify",
      shopifyPartner: "Official Shopify Partner",
      dashboardCta: "Start Now"
    },
    features: {
      title: "Everything You Need to ",
      titleHighlight: "Dominate E-Commerce",
      subtitle: "8 powerful tools in one platform to build, scale, and automate your online business",
      items: [
        {
          title: "Instant Store Creation",
          description: "Generate Shopify-powered stores with AI in under 5 minutes. No coding, design, or technical setup required. Just connect your Shopify account and launch."
        },
        {
          title: "2M+ Product Catalog",
          description: "Access trending products from 7,000+ verified suppliers worldwide. Filter by category, profit margin, shipping time, and real-time demand metrics."
        },
        {
          title: "Winner Product Algorithm",
          description: "Our AI analyzes millions of products daily to identify trending items before they saturate the market. Get ahead of the competition with data-driven product selection."
        },
        {
          title: "7K+ Verified Suppliers",
          description: "Connect with 7,000+ vetted suppliers. View detailed ratings, customer reviews, delivery times, and production capabilities before partnering."
        },
        {
          title: "6-Month Ad History",
          description: "Access complete advertising history from the last 6 months across Facebook, Instagram & TikTok. Analyze what worked, when, and why to replicate success."
        },
        {
          title: "Launch Campaigns Instantly",
          description: "Create and deploy advertising campaigns to Facebook, Instagram & TikTok directly from Vivendly. Manage all your marketing from one dashboard."
        },
        {
          title: "Real-Time Ad Spy",
          description: "Monitor active advertising campaigns on Facebook, Instagram & TikTok in real-time. See what's working for competitors right now and adapt instantly."
        },
        {
          title: "AI Creative Studio",
          description: "Generate up to 120-second product videos with AI actors speaking about your products. Create stunning product visuals from simple prompts in seconds."
        }
      ]
    },
    visualDemo: {
      title: "See Vivendly in Action",
      subtitle: "Create your store, import your product and get your AI video creatives",
      items: [
        {
          label: "Create your store instantly",
          description: "Launch your Shopify-powered store in under 5 minutes with AI. No coding or design skills required.",
          video: "/video/yourshop.mp4"
        },
        {
          label: "Get your Winner product",
          description: "Discover high-converting products before your competitors with our AI-powered algorithm analyzing millions of data points in real-time.",
          image: "/images/winner_product.png"
        },
        {
          label: "AI-Powered Creatives",
          description: "Generate professional product videos and visuals with AI in seconds",
          video: "/video/iavideo.mp4"
        }
      ]
    },
    socialProof: {
      title: "Trusted by 5,000+ E-Commerce Entrepreneurs Worldwide",
      metrics: [
        { value: "5,000+", label: "Active Users" },
        { value: "$1M+", label: "Revenue Generated" },
        { value: "2M+", label: "Product Catalog" },
        { value: "99.8%", label: "Platform Uptime" }
      ],
      testimonials: [
        {
          name: "Sarah Mitchell",
          title: "E-commerce Founder",
          quote: "I went from idea to first sale in 48 hours with Vivendly. The AI creative hub alone saved me $5,000 in video production costs.",
          rating: 5
        },
        {
          name: "Marcus Chen",
          title: "Dropshipping Expert",
          quote: "The ad spy feature is insane. I can see exactly what my competitors are running in real-time and adapt my strategy instantly.",
          rating: 5
        },
        {
          name: "Elena Rodriguez",
          title: "Multi-Store Owner",
          quote: "Managing 7 stores used to take me 60 hours a week. Now it takes 10. Vivendly's automation is a game-changer.",
          rating: 5
        }
      ]
    },
    winnerProducts: {
      title: "Find Your Winning Product Among Thousands",
      description: "Our unique algorithm analyzes the market in real-time to identify trending products before your competitors. Access thousands of products selected by AI.",
      cta: "Discover Winning Products",
      badge: "Real-Time Analysis"
    },
    reviews: {
      title: "Loved by Thousands of Entrepreneurs",
      subtitle: "See what our community has to say",
      items: [
        { name: "Sarah Chen", title: "Dropshipping Expert", quote: "Vivendly transformed my business. I went from $2K to $50K/month in 3 months!", rating: 5, verified: true },
        { name: "Marcus Rodriguez", title: "Store Owner", quote: "The AI creative studio alone is worth 10x the price. Incredible tool!", rating: 5, verified: true },
        { name: "Emma Thompson", title: "E-commerce Consultant", quote: "Best investment I've made. My clients are seeing 300% ROI consistently.", rating: 5, verified: true },
        { name: "David Kim", title: "Multi-Store Owner", quote: "Managing 5 stores has never been easier. Vivendly is a game-changer.", rating: 5, verified: true },
        { name: "Lisa Anderson", title: "Fashion Brand", quote: "The product research tool found me 3 winning products in my first week!", rating: 5, verified: true },
        { name: "James Wilson", title: "Tech Entrepreneur", quote: "Finally, an all-in-one solution that actually works. No more juggling 10 tools.", rating: 5, verified: true },
        { name: "Sophie Martin", title: "Beauty Store", quote: "The ad spy feature is insane. I can see exactly what's working for competitors.", rating: 5, verified: true },
        { name: "Alex Turner", title: "Fitness Products", quote: "From zero to $100K in 6 months. Vivendly made it possible.", rating: 5, verified: true },
        { name: "Maria Garcia", title: "Home Decor", quote: "The supplier network is gold. Found reliable partners in days, not months.", rating: 5, verified: true },
        { name: "Ryan O'Connor", title: "Electronics Store", quote: "AI videos generate 5x more engagement than my old content. Unbelievable!", rating: 5, verified: true },
        { name: "Nina Patel", title: "Jewelry Brand", quote: "Vivendly's automation saved me 40 hours per week. I can finally scale!", rating: 5, verified: true },
        { name: "Tom Bradley", title: "Sports Equipment", quote: "The real-time ad spy caught a trend before it exploded. Made $80K in 2 weeks.", rating: 5, verified: true },
        { name: "Isabella Costa", title: "Kids Products", quote: "Best platform for beginners. Launched my first store in 48 hours!", rating: 5, verified: true },
        { name: "Chris Hansen", title: "Pet Supplies", quote: "The winner product algorithm is scary accurate. 8/10 products were hits!", rating: 5, verified: true },
        { name: "Yuki Tanaka", title: "Gadgets Store", quote: "Vivendly handles everything. I just focus on growing my brand now.", rating: 5, verified: true },
        { name: "Oliver Schmidt", title: "Outdoor Gear", quote: "ROI in first month. The platform pays for itself 20x over.", rating: 5, verified: true },
        { name: "Priya Sharma", title: "Cosmetics", quote: "The AI creative studio creates better ads than my $5K agency. Insane value!", rating: 5, verified: true },
        { name: "Lucas Silva", title: "Accessories", quote: "From side hustle to full-time income in 4 months. Thank you Vivendly!", rating: 5, verified: true },
        { name: "Zoe Williams", title: "Sustainable Products", quote: "Found my niche and scaled to $30K/month. The tools are incredible.", rating: 5, verified: true },
        { name: "Ahmed Hassan", title: "Luxury Goods", quote: "Vivendly's data insights helped me avoid $50K in bad inventory. Priceless!", rating: 5, verified: true },
        { name: "Chloe Dubois", title: "Baby Products", quote: "The platform is so intuitive. No tech skills needed. Just results!", rating: 5, verified: true },
        { name: "Max Müller", title: "Tools & Hardware", quote: "Competitor analysis feature alone is worth the subscription. Pure gold!", rating: 5, verified: true }
      ]
    },
    adSpy: {
      badge: "Live Now",
      title: "Real-Time Ad Spy",
      subtitle: "Monitor active advertising campaigns on Facebook, Instagram & TikTok in real-time",
      description: "See what's working for competitors right now and adapt instantly. Track millions of ads, analyze performance metrics, and discover winning strategies before everyone else.",
      cta: "Start Spying on Ads",
      stats: [
        { value: "100K+", label: "Ads Tracked" },
        { value: "Real-Time", label: "Updates" },
        { value: "3 Platforms", label: "Monitored" }
      ]
    },
    ugcCreator: {
      title: "Create Product Presentation Videos with AI Actors!",
      subtitle: "Transform your products into engaging video content in 3 simple steps",
      steps: [
        {
          number: "1",
          title: "Import Your Image",
          description: "Upload your product photo or paste a URL",
          image: "/images/yourproduct.png"
        },
        {
          number: "2",
          title: "Describe Your Video",
          description: "Tell our AI what you want the actor to say and do",
          image: "/images/prompt.png"
        },
        {
          number: "3",
          title: "Download the Result",
          description: "Get your professional UGC video in minutes",
          video: "/video/videogenerate.mp4"
        }
      ],
      cta: "Try Now"
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "How does the free trial work?",
          answer: "You get 3 days of free trial to test all Vivendly features. During this period, you receive credits to use AI features like product generation, AI video creation, and winning product selection. No credit card required to start."
        },
        {
          question: "How does the automatic Shopify store creation work?",
          answer: "When you sign up, Vivendly automatically generates a complete Shopify store for you. The store is created on Shopify's platform with all necessary configurations, ready to sell in minutes."
        },
        {
          question: "What are credits and how do they work?",
          answer: "Credits are used for AI-powered features like product generation, AI video creation, and winning product selection. You receive credits during your trial and with your subscription. Each AI action consumes a specific number of credits."
        },
        {
          question: "How does the winning product selection work?",
          answer: "When you select a winning product, it costs credits to guarantee exclusivity - you'll be the only one on the platform using that product. Our algorithm then finds new winning products to replace the one you claimed, ensuring a constant supply of opportunities."
        },
        {
          question: "What's included in my subscription?",
          answer: "Your subscription includes: unlimited Ad Spy access (Facebook, Instagram, TikTok), complete store management, unlimited product integration, access to 2M+ products catalog, 7K+ verified suppliers, and all platform features. AI features (video generation, product selection) use credits."
        },
        {
          question: "Do I need technical skills to use Vivendly?",
          answer: "No technical skills required. Vivendly handles everything automatically - from store creation to product integration. Our AI does the technical work, you focus on growing your business."
        },
        {
          question: "Can I manage multiple stores?",
          answer: "Yes! Vivendly allows you to create and manage multiple Shopify stores from a single dashboard. Monitor sales, inventory, and campaigns across all your stores in one place."
        },
        {
          question: "Can I cancel anytime?",
          answer: "Yes, cancel your subscription anytime from your dashboard. No long-term commitment required. Your Shopify store remains yours even after cancellation."
        }
      ]
    },
    finalCTA: {
      headline: "Ready to Build Your E-Commerce Empire?",
      subheadline: "Join 5,000+ entrepreneurs using AI to scale their online business",
      cta: "Start Your Free Trial",
      microcopy: "✓ No credit card required • ✓ 14-day free trial • ✓ Cancel anytime",
      urgency: "🔥 127 users signed up this week"
    },
    footer: {
      description: "Transform your e-commerce vision into reality with AI-driven automation. From product discovery to viral campaigns, we handle the complexity while you focus on growth.",
      navigation: {
        title: "Navigation",
        howItWorks: "How It Works",
        allFeatures: "All Features",
        adSpy: "Ad Spy",
        aiCreatives: "AI-Powered Creatives",
        faq: "FAQ"
      },
      links: {
        title: "Links",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        support: "Contact Support"
      },
      social: {
        title: "Social"
      },
      copyright: "2025 Vivendly. All rights reserved.",
      poweredBy: "Powered by Shopify"
    },
    privacyPolicy: {
      title: "Privacy Policy",
      lastUpdated: "Last updated: November 10, 2025",
      introduction: {
        title: "Introduction",
        content: "At Adcolor AI (operating as Vivendly), we are committed to protecting your privacy and handling your personal data with the utmost care and transparency. This Privacy Policy explains how we collect, use, store, and protect your information in compliance with the General Data Protection Regulation (GDPR) and other applicable data protection laws."
      },
      dataCollection: {
        title: "Information We Collect",
        intro: "We collect the following types of information:",
        items: [
          { title: "Account Information", description: "Name, email address, and password when you create an account" },
          { title: "Business Information", description: "Company name, Shopify store details, and business preferences" },
          { title: "Usage Data", description: "Information about how you use our platform, including features accessed and actions taken" },
          { title: "Technical Data", description: "IP address, browser type, device information, and cookies" }
        ]
      },
      dataUsage: {
        title: "How We Use Your Data",
        intro: "We use your personal data for the following purposes:",
        items: [
          "To provide and maintain our services",
          "To improve and optimize our platform",
          "To communicate with you about updates, features, and support",
          "To analyze usage patterns and enhance user experience",
          "To comply with legal obligations and prevent fraud"
        ]
      },
      cookies: {
        title: "Cookies and Analytics",
        content: "We use Google Analytics to collect anonymous usage data and improve our services. These cookies help us understand how visitors interact with our website, allowing us to enhance functionality and user experience. You can disable cookies in your browser settings, though this may affect certain features of our platform."
      },
      gdpr: {
        title: "Your Rights Under GDPR",
        content: "As a data subject under GDPR, you have the following rights:",
        rights: [
          "Right to access your personal data",
          "Right to rectification of inaccurate data",
          "Right to erasure (right to be forgotten)",
          "Right to restrict processing",
          "Right to data portability",
          "Right to object to processing",
          "Right to withdraw consent at any time"
        ]
      },
      dataSecurity: {
        title: "Data Security",
        content: "We implement industry-standard security measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction. Our platform is hosted on Vercel, which provides enterprise-grade security infrastructure. All data transmissions are encrypted using SSL/TLS protocols."
      },
      contact: {
        title: "Contact Us",
        content: "If you have any questions about this Privacy Policy or wish to exercise your data protection rights, please contact us at:"
      },
      company: {
        title: "Company Information",
        name: "Company Name",
        license: "License Number",
        hosting: "Hosting Provider"
      }
    },
    termsOfService: {
      title: "Terms of Service",
      lastUpdated: "Last updated: November 10, 2025",
      introduction: {
        title: "Agreement to Terms",
        content: "By accessing and using Vivendly (operated by Adcolor AI), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services."
      },
      services: {
        title: "Description of Services",
        content: "Vivendly provides an AI-powered e-commerce automation platform that includes product sourcing, store creation, ad spy tools, creative generation, and marketing campaign management. Our services are designed to help entrepreneurs build and scale their online businesses."
      },
      subscription: {
        title: "Subscription and Payment",
        content: "Access to Vivendly requires a paid subscription. Subscription fees are billed on a recurring basis (monthly or annually) and are non-refundable except as specified in our refund policy. You are responsible for maintaining accurate payment information."
      },
      refund: {
        title: "Refund Policy",
        subscription: "We offer a 7-day money-back guarantee for subscription fees. If you are not satisfied with our service within the first 7 days of your subscription, you may request a full refund by contacting our support team.",
        important: "Important",
        credits: "Credits that have been purchased and used are non-refundable. Only unused subscription fees within the 7-day period are eligible for refund."
      },
      userResponsibilities: {
        title: "User Responsibilities",
        items: [
          "You must provide accurate and complete information when creating an account",
          "You are responsible for maintaining the confidentiality of your account credentials",
          "You agree not to use our services for any illegal or unauthorized purposes",
          "You will not attempt to interfere with or disrupt our platform's functionality",
          "You are responsible for all activities that occur under your account"
        ]
      },
      intellectualProperty: {
        title: "Intellectual Property",
        content: "All content, features, and functionality of Vivendly, including but not limited to software, text, graphics, logos, and trademarks, are the exclusive property of Adcolor AI and are protected by international copyright, trademark, and other intellectual property laws."
      },
      limitation: {
        title: "Limitation of Liability",
        content: "Vivendly is provided 'as is' without warranties of any kind. We are not liable for any indirect, incidental, special, or consequential damages arising from your use of our services. Our total liability shall not exceed the amount you paid for the service in the past 12 months."
      },
      termination: {
        title: "Termination",
        content: "We reserve the right to suspend or terminate your account at any time for violation of these Terms of Service or for any other reason at our sole discretion. Upon termination, your right to use our services will immediately cease."
      },
      changes: {
        title: "Changes to Terms",
        content: "We reserve the right to modify these Terms of Service at any time. We will notify users of any material changes via email or through our platform. Continued use of our services after changes constitutes acceptance of the modified terms."
      },
      contact: {
        title: "Contact Information",
        content: "For any questions, concerns, or issues regarding these Terms of Service, please contact us at:"
      },
      company: {
        title: "Company Information",
        name: "Company Name",
        license: "License Number",
        hosting: "Hosting Provider"
      }
    }
  },
  fr: {
    hero: {
      headline: "Créez Votre Empire E-Commerce ",
      headlineHighlight: "En Quelques Minutes",
      subheadline: "Plateforme IA qui crée, optimise et fait grandir votre boutique Shopify automatiquement - de la sélection produits gagnants aux campagnes marketing virales",
      ctaPrimary: "Générer Ma Boutique",
      ctaSecondary: "Voir la Démo (2min)",
      trustBar: {
        products: "2M+ Produits",
        suppliers: "7K+ Fournisseurs",
        adSpy: "Espion Pub Temps Réel",
        creative: "Studio Créatif IA"
      },
      poweredBy: "Propulsé par Shopify",
      shopifyPartner: "Partenaire Officiel Shopify",
      dashboardCta: "Commencer"
    },
    features: {
      title: "Tout Ce Dont Vous Avez Besoin Pour ",
      titleHighlight: "Dominer L'E-Commerce",
      subtitle: "8 outils puissants en une plateforme pour construire, scaler et automatiser votre business",
      items: [
        {
          title: "Création Instantanée",
          description: "Générez des boutiques Shopify avec l'IA en moins de 5 minutes. Sans code, design ou configuration technique. Connectez simplement votre compte Shopify et lancez."
        },
        {
          title: "Catalogue 2M+ Produits",
          description: "Accédez aux produits tendance de 7000+ fournisseurs vérifiés. Filtres par catégorie, marge, délai livraison et métriques de demande temps réel."
        },
        {
          title: "Algorithme Produits Gagnants",
          description: "Algorithme IA identifie les produits haute-conversion avant vos concurrents. Mise à jour temps réel."
        },
        {
          title: "7K+ Fournisseurs Vérifiés",
          description: "Connectez-vous à 7000+ fournisseurs vérifiés. Notes, avis clients, délais livraison détaillés."
        },
        {
          title: "Historique Pubs 6 Mois",
          description: "Accédez à l'historique complet des 6 derniers mois sur Facebook, Instagram & TikTok. Analysez ce qui a marché."
        },
        {
          title: "Lancez Campagnes Instantanément",
          description: "Créez et déployez des campagnes sur Facebook, Instagram & TikTok directement depuis Vivendly."
        },
        {
          title: "Espion Pubs Temps Réel",
          description: "Surveillez les campagnes actives sur Facebook, Instagram & TikTok en temps réel. Voyez ce qui marche maintenant."
        },
        {
          title: "Studio Créatif IA",
          description: "Générez des vidéos jusqu'à 120 secondes avec acteurs IA. Créez des visuels produits époustouflants en secondes."
        }
      ]
    },
    visualDemo: {
      title: "Vivendly En Action",
      subtitle: "Créez votre boutique, importez votre produit et obtenez vos créatifs vidéo IA",
      items: [
        {
          label: "Créez votre boutique instantanément",
          description: "Lancez votre boutique Shopify en moins de 5 minutes avec l'IA. Aucune compétence en code ou design requise.",
          video: "/video/yourshop.mp4"
        },
        {
          label: "Obtenez votre produit gagnant",
          description: "Découvrez les produits à forte conversion avant vos concurrents grâce à notre algorithme IA analysant des millions de données en temps réel.",
          image: "/images/winner_product.png"
        },
        {
          label: "Créatifs Propulsés par IA",
          description: "Générez des vidéos et visuels professionnels avec l'IA en secondes",
          video: "/video/iavideo.mp4"
        }
      ]
    },
    socialProof: {
      title: "Approuvé par 5000+ Entrepreneurs E-Commerce dans le Monde",
      metrics: [
        { value: "5,000+", label: "Utilisateurs Actifs" },
        { value: "$1M+", label: "Revenus Générés" },
        { value: "2M+", label: "Catalogue Produits" },
        { value: "99.8%", label: "Disponibilité" }
      ],
      testimonials: [
        {
          name: "Sarah Mitchell",
          title: "Fondatrice E-commerce",
          quote: "Je suis passée d'idée à première vente en 48h avec Vivendly. Le studio IA m'a économisé 5000$ en production vidéo.",
          rating: 5
        },
        {
          name: "Marcus Chen",
          title: "Expert Dropshipping",
          quote: "La fonction espion pub est dingue. Je vois exactement ce que font mes concurrents en temps réel.",
          rating: 5
        },
        {
          name: "Elena Rodriguez",
          title: "Propriétaire Multi-Boutiques",
          quote: "Gérer 7 boutiques me prenait 60h/semaine. Maintenant 10h. L'automatisation Vivendly change tout.",
          rating: 5
        }
      ]
    },
    winnerProducts: {
      title: "Trouvez Votre Produit Gagnant Parmi Des Milliers",
      description: "Notre algorithme unique analyse le marché en temps réel pour identifier les produits tendance avant vos concurrents. Accédez à des milliers de produits sélectionnés par IA.",
      cta: "Découvrir les Produits Gagnants",
      badge: "Analyse Temps Réel"
    },
    reviews: {
      title: "Aimé par des Milliers d'Entrepreneurs",
      subtitle: "Découvrez ce que notre communauté en dit",
      items: [
        { name: "Sarah Chen", title: "Experte Dropshipping", quote: "Vivendly a transformé mon business. Je suis passée de 2K€ à 50K€/mois en 3 mois!", rating: 5, verified: true },
        { name: "Marcus Rodriguez", title: "Propriétaire Boutique", quote: "Le studio créatif IA vaut à lui seul 10x le prix. Outil incroyable!", rating: 5, verified: true },
        { name: "Emma Thompson", title: "Consultante E-commerce", quote: "Meilleur investissement. Mes clients voient un ROI de 300% constamment.", rating: 5, verified: true },
        { name: "David Kim", title: "Multi-Boutiques", quote: "Gérer 5 boutiques n'a jamais été aussi facile. Vivendly change la donne.", rating: 5, verified: true },
        { name: "Lisa Anderson", title: "Marque Mode", quote: "L'outil de recherche m'a trouvé 3 produits gagnants la première semaine!", rating: 5, verified: true },
        { name: "James Wilson", title: "Entrepreneur Tech", quote: "Enfin une solution tout-en-un qui fonctionne. Plus besoin de 10 outils.", rating: 5, verified: true },
        { name: "Sophie Martin", title: "Boutique Beauté", quote: "L'espion pub est dingue. Je vois exactement ce qui marche chez les concurrents.", rating: 5, verified: true },
        { name: "Alex Turner", title: "Produits Fitness", quote: "De zéro à 100K€ en 6 mois. Vivendly l'a rendu possible.", rating: 5, verified: true },
        { name: "Maria Garcia", title: "Déco Maison", quote: "Le réseau fournisseurs est en or. Trouvé des partenaires fiables en jours.", rating: 5, verified: true },
        { name: "Ryan O'Connor", title: "Boutique Électronique", quote: "Les vidéos IA génèrent 5x plus d'engagement. Incroyable!", rating: 5, verified: true },
        { name: "Nina Patel", title: "Marque Bijoux", quote: "L'automatisation m'a fait gagner 40h/semaine. Je peux enfin scaler!", rating: 5, verified: true },
        { name: "Tom Bradley", title: "Équipement Sport", quote: "L'espion pub a capté une tendance avant l'explosion. 80K€ en 2 semaines.", rating: 5, verified: true },
        { name: "Isabella Costa", title: "Produits Enfants", quote: "Meilleure plateforme pour débutants. Lancé ma boutique en 48h!", rating: 5, verified: true },
        { name: "Chris Hansen", title: "Animalerie", quote: "L'algo produits gagnants est d'une précision folle. 8/10 produits étaient des hits!", rating: 5, verified: true },
        { name: "Yuki Tanaka", title: "Boutique Gadgets", quote: "Vivendly gère tout. Je me concentre juste sur ma marque maintenant.", rating: 5, verified: true },
        { name: "Oliver Schmidt", title: "Équipement Outdoor", quote: "ROI dès le premier mois. La plateforme se rembourse 20x.", rating: 5, verified: true },
        { name: "Priya Sharma", title: "Cosmétiques", quote: "Le studio IA crée de meilleures pubs que mon agence à 5K€. Valeur insensée!", rating: 5, verified: true },
        { name: "Lucas Silva", title: "Accessoires", quote: "De side hustle à revenu temps plein en 4 mois. Merci Vivendly!", rating: 5, verified: true },
        { name: "Zoe Williams", title: "Produits Durables", quote: "Trouvé ma niche et scalé à 30K€/mois. Les outils sont incroyables.", rating: 5, verified: true },
        { name: "Ahmed Hassan", title: "Produits Luxe", quote: "Les insights m'ont évité 50K€ de mauvais stock. Inestimable!", rating: 5, verified: true },
        { name: "Chloe Dubois", title: "Produits Bébé", quote: "La plateforme est si intuitive. Pas besoin de compétences tech. Que des résultats!", rating: 5, verified: true },
        { name: "Max Müller", title: "Outils & Bricolage", quote: "L'analyse concurrence vaut à elle seule l'abonnement. De l'or pur!", rating: 5, verified: true }
      ]
    },
    adSpy: {
      badge: "En Direct",
      title: "Espion Pub Temps Réel",
      subtitle: "Surveille les campagnes publicitaires actives sur Facebook, Instagram & TikTok en temps réel",
      description: "Vois ce qui fonctionne chez tes concurrents maintenant et adapte-toi instantanément. Traque des millions de pubs, analyse les métriques de performance et découvre les stratégies gagnantes avant tout le monde.",
      cta: "Espionner les Pubs",
      stats: [
        { value: "100K+", label: "Pubs Suivies" },
        { value: "Temps Réel", label: "Mises à Jour" },
        { value: "3 Plateformes", label: "Surveillées" }
      ]
    },
    ugcCreator: {
      title: "Créer tes vidéos de présentation produits avec des acteurs IA !",
      subtitle: "Transforme tes produits en contenu vidéo engageant en 3 étapes simples",
      steps: [
        {
          number: "1",
          title: "Importe ton image",
          description: "Télécharge ta photo produit ou colle une URL",
          image: "/images/yourproduct.png"
        },
        {
          number: "2",
          title: "Décris la vidéo que tu souhaites créer",
          description: "Dis à notre IA ce que tu veux que l'acteur dise et fasse",
          image: "/images/prompt.png"
        },
        {
          number: "3",
          title: "Télécharge le résultat",
          description: "Obtiens ta vidéo UGC professionnelle en quelques minutes",
          video: "/video/videogenerate.mp4"
        }
      ],
      cta: "Essayer Maintenant"
    },
    faq: {
      title: "Questions Fréquentes",
      items: [
        {
          question: "Comment fonctionne l'essai gratuit ?",
          answer: "Tu obtiens 3 jours d'essai gratuit pour tester toutes les fonctionnalités Vivendly. Durant cette période, tu reçois des crédits pour utiliser les fonctions IA comme la génération de produits, création vidéo IA et sélection de produits gagnants. Aucune carte bancaire requise."
        },
        {
          question: "Comment fonctionne la création automatique de boutique Shopify ?",
          answer: "Lors de ton inscription, Vivendly génère automatiquement une boutique Shopify complète pour toi. La boutique est créée sur la plateforme Shopify avec toutes les configurations nécessaires, prête à vendre en quelques minutes."
        },
        {
          question: "Qu'est-ce que les crédits et comment fonctionnent-ils ?",
          answer: "Les crédits sont utilisés pour les fonctionnalités IA comme la génération de produits, création vidéo IA et sélection de produits gagnants. Tu reçois des crédits durant ton essai et avec ton abonnement. Chaque action IA consomme un nombre spécifique de crédits."
        },
        {
          question: "Comment fonctionne la sélection de produits gagnants ?",
          answer: "Quand tu sélectionnes un produit gagnant, ça coûte des crédits pour garantir l'exclusivité - tu seras le seul sur la plateforme à utiliser ce produit. Notre algorithme trouve ensuite de nouveaux produits gagnants pour remplacer celui que tu as réclamé, assurant un approvisionnement constant d'opportunités."
        },
        {
          question: "Qu'est-ce qui est inclus dans mon abonnement ?",
          answer: "Ton abonnement inclut : accès illimité Ad Spy (Facebook, Instagram, TikTok), gestion complète de boutique, intégration produits illimitée, accès au catalogue 2M+ produits, 7K+ fournisseurs vérifiés, et toutes les fonctionnalités plateforme. Les fonctions IA (génération vidéo, sélection produits) utilisent des crédits."
        },
        {
          question: "Ai-je besoin de compétences techniques ?",
          answer: "Aucune compétence technique requise. Vivendly gère tout automatiquement - de la création de boutique à l'intégration produits. Notre IA fait le travail technique, tu te concentres sur la croissance de ton business."
        },
        {
          question: "Puis-je gérer plusieurs boutiques ?",
          answer: "Oui ! Vivendly te permet de créer et gérer plusieurs boutiques Shopify depuis un seul tableau de bord. Surveille ventes, inventaire et campagnes de toutes tes boutiques en un seul endroit."
        },
        {
          question: "Puis-je annuler à tout moment ?",
          answer: "Oui, annule ton abonnement à tout moment depuis ton tableau de bord. Aucun engagement long terme requis. Ta boutique Shopify reste la tienne même après annulation."
        }
      ]
    },
    finalCTA: {
      headline: "Prêt à Construire Votre Empire E-Commerce ?",
      subheadline: "Rejoignez 5000+ entrepreneurs utilisant l'IA pour scaler leur business",
      cta: "Démarrer Votre Essai Gratuit",
      microcopy: "✓ Aucune carte bancaire • ✓ Essai 14 jours • ✓ Annulez à tout moment",
      urgency: "🔥 127 utilisateurs inscrits cette semaine"
    },
    footer: {
      description: "Transformez votre vision e-commerce en réalité avec l'automatisation IA. De la découverte produits aux campagnes virales, nous gérons la complexité pendant que vous vous concentrez sur la croissance.",
      navigation: {
        title: "Navigation",
        howItWorks: "Comment Ça Marche",
        allFeatures: "Toutes les Fonctionnalités",
        adSpy: "Espion Pub",
        aiCreatives: "Créatifs IA",
        faq: "FAQ"
      },
      links: {
        title: "Liens",
        privacy: "Politique Confidentialité",
        terms: "Conditions",
        support: "Support"
      },
      social: {
        title: "Social"
      },
      copyright: "© 2025 Vivendly. Tous droits réservés.",
      poweredBy: "Propulsé par Shopify"
    },
    ...legalTranslations.fr
  },
  es: {
    hero: {
      headline: "Construye Tu Imperio E-Commerce ",
      headlineHighlight: "En Pocos Minutos",
      subheadline: "Plataforma con IA que crea, optimiza y escala tu tienda Shopify automáticamente - desde la selección de productos ganadores hasta campañas de marketing virales",
      ctaPrimary: "Generar Mi Tienda",
      ctaSecondary: "Ver Demo (2min)",
      trustBar: {
        products: "2M+ Productos",
        suppliers: "7K+ Proveedores",
        adSpy: "Espía de Anuncios en Vivo",
        creative: "Estudio Creativo IA"
      },
      poweredBy: "Impulsado por Shopify",
      shopifyPartner: "Socio Oficial de Shopify",
      dashboardCta: "Comenzar"
    },
    features: {
      title: "Todo Lo Que Necesitas Para ",
      titleHighlight: "Dominar E-Commerce",
      subtitle: "8 herramientas poderosas en una plataforma para construir, escalar y automatizar tu negocio",
      items: [
        {
          title: "Creación Instantánea",
          description: "Genera tiendas Shopify con IA en menos de 5 minutos. Sin código, diseño o configuración técnica. Solo conecta tu cuenta Shopify y lanza."
        },
        {
          title: "Catálogo 2M+ Productos",
          description: "Accede a productos de tendencia de 7000+ proveedores verificados. Filtra por categoría, margen, tiempo de envío y métricas de demanda en tiempo real."
        },
        {
          title: "Algoritmo de Productos Ganadores",
          description: "Algoritmo IA identifica productos de alta conversión antes que tus competidores. Actualización en tiempo real."
        },
        {
          title: "7K+ Proveedores Verificados",
          description: "Conéctate con 7000+ proveedores verificados. Calificaciones, reseñas, tiempos de entrega detallados."
        },
        {
          title: "Historial de Anuncios 6 Meses",
          description: "Accede al historial completo de los últimos 6 meses en Facebook, Instagram & TikTok. Analiza qué funcionó."
        },
        {
          title: "Lanza Campañas Instantáneamente",
          description: "Crea y despliega campañas en Facebook, Instagram & TikTok directamente desde Vivendly."
        },
        {
          title: "Espía de Anuncios en Vivo",
          description: "Monitorea campañas activas en Facebook, Instagram & TikTok en tiempo real. Ve qué funciona ahora."
        },
        {
          title: "Estudio Creativo IA",
          description: "Genera videos de hasta 120 segundos con actores IA. Crea visuales de productos impresionantes en segundos."
        }
      ]
    },
    visualDemo: {
      title: "Vivendly En Acción",
      subtitle: "Crea tu tienda, importa tu producto y obtén tus creativos de video IA",
      items: [
        {
          label: "Crea tu tienda instantáneamente",
          description: "Lanza tu tienda Shopify en menos de 5 minutos con IA. No se requieren habilidades de código o diseño.",
          video: "/video/yourshop.mp4"
        },
        {
          label: "Obtén tu producto ganador",
          description: "Descubre productos de alta conversión antes que tus competidores con nuestro algoritmo IA que analiza millones de datos en tiempo real.",
          image: "/images/winner_product.png"
        },
        {
          label: "Creativos Impulsados por IA",
          description: "Genera videos y visuales profesionales con IA en segundos",
          video: "/video/iavideo.mp4"
        }
      ]
    },
    socialProof: {
      title: "Confiado por 5000+ Emprendedores E-Commerce en el Mundo",
      metrics: [
        { value: "5,000+", label: "Usuarios Activos" },
        { value: "$1M+", label: "Ingresos Generados" },
        { value: "2M+", label: "Catálogo de Productos" },
        { value: "99.8%", label: "Tiempo Activo" }
      ],
      testimonials: [
        {
          name: "Sarah Mitchell",
          title: "Fundadora E-commerce",
          quote: "Pasé de la idea a la primera venta en 48 horas con Vivendly. El estudio IA me ahorró $5,000 en producción de video.",
          rating: 5
        },
        {
          name: "Marcus Chen",
          title: "Experto Dropshipping",
          quote: "La función de espía de anuncios es increíble. Veo exactamente lo que hacen mis competidores en tiempo real.",
          rating: 5
        },
        {
          name: "Elena Rodriguez",
          title: "Propietaria Multi-Tiendas",
          quote: "Gestionar 7 tiendas me tomaba 60h por semana. Ahora 10h. La automatización de Vivendly cambia todo.",
          rating: 5
        }
      ]
    },
    winnerProducts: {
      title: "Encuentra Tu Producto Ganador Entre Miles",
      description: "Nuestro algoritmo único analiza el mercado en tiempo real para identificar productos tendencia antes que tus competidores. Accede a miles de productos seleccionados por IA.",
      cta: "Descubrir Productos Ganadores",
      badge: "Análisis Tiempo Real"
    },
    reviews: {
      title: "Amado por Miles de Emprendedores",
      subtitle: "Mira lo que dice nuestra comunidad",
      items: [
        { name: "Sarah Chen", title: "Experta Dropshipping", quote: "¡Vivendly transformó mi negocio. Pasé de $2K a $50K/mes en 3 meses!", rating: 5, verified: true },
        { name: "Marcus Rodriguez", title: "Dueño Tienda", quote: "¡El estudio creativo IA vale 10x el precio por sí solo. Herramienta increíble!", rating: 5, verified: true },
        { name: "Emma Thompson", title: "Consultora E-commerce", quote: "Mejor inversión. Mis clientes ven 300% ROI constantemente.", rating: 5, verified: true },
        { name: "David Kim", title: "Multi-Tiendas", quote: "Gestionar 5 tiendas nunca fue tan fácil. Vivendly es revolucionario.", rating: 5, verified: true },
        { name: "Lisa Anderson", title: "Marca Moda", quote: "¡La herramienta encontró 3 productos ganadores en mi primera semana!", rating: 5, verified: true },
        { name: "James Wilson", title: "Emprendedor Tech", quote: "Finalmente una solución todo-en-uno que funciona. No más 10 herramientas.", rating: 5, verified: true },
        { name: "Sophie Martin", title: "Tienda Belleza", quote: "El espía de anuncios es increíble. Veo exactamente qué funciona para competidores.", rating: 5, verified: true },
        { name: "Alex Turner", title: "Productos Fitness", quote: "De cero a $100K en 6 meses. Vivendly lo hizo posible.", rating: 5, verified: true },
        { name: "Maria Garcia", title: "Decoración Hogar", quote: "La red de proveedores es oro. Encontré socios confiables en días.", rating: 5, verified: true },
        { name: "Ryan O'Connor", title: "Tienda Electrónica", quote: "¡Los videos IA generan 5x más engagement. Increíble!", rating: 5, verified: true },
        { name: "Nina Patel", title: "Marca Joyería", quote: "La automatización me ahorró 40h/semana. ¡Finalmente puedo escalar!", rating: 5, verified: true },
        { name: "Tom Bradley", title: "Equipo Deportivo", quote: "El espía captó una tendencia antes de explotar. $80K en 2 semanas.", rating: 5, verified: true },
        { name: "Isabella Costa", title: "Productos Niños", quote: "¡Mejor plataforma para principiantes. Lancé mi tienda en 48h!", rating: 5, verified: true },
        { name: "Chris Hansen", title: "Mascotas", quote: "El algoritmo de productos ganadores es preciso. ¡8/10 productos fueron éxitos!", rating: 5, verified: true },
        { name: "Yuki Tanaka", title: "Tienda Gadgets", quote: "Vivendly maneja todo. Solo me enfoco en mi marca ahora.", rating: 5, verified: true },
        { name: "Oliver Schmidt", title: "Equipo Outdoor", quote: "ROI en primer mes. La plataforma se paga 20x.", rating: 5, verified: true },
        { name: "Priya Sharma", title: "Cosméticos", quote: "¡El estudio IA crea mejores anuncios que mi agencia de $5K. Valor insano!", rating: 5, verified: true },
        { name: "Lucas Silva", title: "Accesorios", quote: "De proyecto paralelo a ingreso tiempo completo en 4 meses. ¡Gracias Vivendly!", rating: 5, verified: true },
        { name: "Zoe Williams", title: "Productos Sostenibles", quote: "Encontré mi nicho y escalé a $30K/mes. Las herramientas son increíbles.", rating: 5, verified: true },
        { name: "Ahmed Hassan", title: "Productos Lujo", quote: "¡Los insights me evitaron $50K en mal inventario. Invaluable!", rating: 5, verified: true },
        { name: "Chloe Dubois", title: "Productos Bebé", quote: "La plataforma es tan intuitiva. No se necesitan habilidades técnicas. ¡Solo resultados!", rating: 5, verified: true },
        { name: "Max Müller", title: "Herramientas", quote: "¡El análisis de competencia vale la suscripción por sí solo. Oro puro!", rating: 5, verified: true }
      ]
    },
    adSpy: {
      badge: "En Vivo",
      title: "Espía de Anuncios en Tiempo Real",
      subtitle: "Monitorea campañas publicitarias activas en Facebook, Instagram & TikTok en tiempo real",
      description: "Ve qué funciona para tus competidores ahora y adáptate instantáneamente. Rastrea millones de anuncios, analiza métricas de rendimiento y descubre estrategias ganadoras antes que todos.",
      cta: "Espiar Anuncios",
      stats: [
        { value: "100K+", label: "Anuncios Rastreados" },
        { value: "Tiempo Real", label: "Actualizaciones" },
        { value: "3 Plataformas", label: "Monitoreadas" }
      ]
    },
    ugcCreator: {
      title: "¡Crea tus videos de presentación de productos con actores IA!",
      subtitle: "Transforma tus productos en contenido de video atractivo en 3 simples pasos",
      steps: [
        {
          number: "1",
          title: "Importa tu imagen",
          description: "Sube tu foto del producto o pega una URL",
          image: "/images/yourproduct.png"
        },
        {
          number: "2",
          title: "Describe el video que deseas crear",
          description: "Dile a nuestra IA qué quieres que el actor diga y haga",
          image: "/images/prompt.png"
        },
        {
          number: "3",
          title: "Descarga el resultado",
          description: "Obtén tu video UGC profesional en minutos",
          video: "/video/videogenerate.mp4"
        }
      ],
      cta: "Probar Ahora"
    },
    faq: {
      title: "Preguntas Frecuentes",
      items: [
        {
          question: "¿Cómo funciona la prueba gratuita?",
          answer: "Obtienes 3 días de prueba gratuita para probar todas las funciones de Vivendly. Durante este período, recibes créditos para usar funciones IA como generación de productos, creación de videos IA y selección de productos ganadores. No se requiere tarjeta de crédito."
        },
        {
          question: "¿Cómo funciona la creación automática de tienda Shopify?",
          answer: "Al registrarte, Vivendly genera automáticamente una tienda Shopify completa para ti. La tienda se crea en la plataforma Shopify con todas las configuraciones necesarias, lista para vender en minutos."
        },
        {
          question: "¿Qué son los créditos y cómo funcionan?",
          answer: "Los créditos se usan para funciones IA como generación de productos, creación de videos IA y selección de productos ganadores. Recibes créditos durante tu prueba y con tu suscripción. Cada acción IA consume un número específico de créditos."
        },
        {
          question: "¿Cómo funciona la selección de productos ganadores?",
          answer: "Cuando seleccionas un producto ganador, cuesta créditos para garantizar exclusividad - serás el único en la plataforma usando ese producto. Nuestro algoritmo luego encuentra nuevos productos ganadores para reemplazar el que reclamaste, asegurando un suministro constante de oportunidades."
        },
        {
          question: "¿Qué está incluido en mi suscripción?",
          answer: "Tu suscripción incluye: acceso ilimitado Ad Spy (Facebook, Instagram, TikTok), gestión completa de tienda, integración ilimitada de productos, acceso al catálogo de 2M+ productos, 7K+ proveedores verificados, y todas las funciones de la plataforma. Las funciones IA (generación de video, selección de productos) usan créditos."
        },
        {
          question: "¿Necesito habilidades técnicas?",
          answer: "No se requieren habilidades técnicas. Vivendly maneja todo automáticamente - desde la creación de tienda hasta la integración de productos. Nuestra IA hace el trabajo técnico, tú te enfocas en hacer crecer tu negocio."
        },
        {
          question: "¿Puedo gestionar múltiples tiendas?",
          answer: "¡Sí! Vivendly te permite crear y gestionar múltiples tiendas Shopify desde un solo panel. Monitorea ventas, inventario y campañas de todas tus tiendas en un solo lugar."
        },
        {
          question: "¿Puedo cancelar en cualquier momento?",
          answer: "Sí, cancela tu suscripción en cualquier momento desde tu panel. No se requiere compromiso a largo plazo. Tu tienda Shopify sigue siendo tuya incluso después de la cancelación."
        }
      ]
    },
    finalCTA: {
      headline: "¿Listo para Construir Tu Imperio E-Commerce?",
      subheadline: "Únete a 5000+ emprendedores usando IA para escalar su negocio",
      cta: "Iniciar Tu Prueba Gratuita",
      microcopy: "✓ Sin tarjeta de crédito • ✓ Prueba 14 días • ✓ Cancela en cualquier momento",
      urgency: "🔥 127 usuarios registrados esta semana"
    },
    footer: {
      description: "Transforma tu visión e-commerce en realidad con automatización IA. Desde el descubrimiento de productos hasta campañas virales, manejamos la complejidad mientras te enfocas en el crecimiento.",
      navigation: {
        title: "Navegación",
        howItWorks: "Cómo Funciona",
        allFeatures: "Todas las Funciones",
        adSpy: "Espía de Anuncios",
        aiCreatives: "Creativos IA",
        faq: "FAQ"
      },
      links: {
        title: "Enlaces",
        privacy: "Política Privacidad",
        terms: "Términos",
        support: "Soporte"
      },
      social: {
        title: "Social"
      },
      copyright: "© 2025 Vivendly. Todos los derechos reservados.",
      poweredBy: "Impulsado por Shopify"
    },
    ...legalTranslations.es
  }
}
