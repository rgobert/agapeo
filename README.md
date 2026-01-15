# Site Agathe Vraïmakis - Coach Carrière Agapèo

Site web professionnel pour **Agathe Vraïmakis**, coach carrière certifiée ICF à Lyon, fondatrice d'**Agapèo**.

## À propos

Landing page moderne et responsive développée en **HTML5, CSS3 et JavaScript vanilla** (aucune dépendance externe).

**Spécialisation** : Accompagnement de managers et professionnels expérimentés en transition de carrière, avec focus sur la clarification de posture professionnelle.

## Technologies

- **HTML5** : Structure sémantique et accessible
- **CSS3** : Design minimaliste avec système de thème (mode clair/sombre)
- **JavaScript Vanilla** : Architecture modulaire sans framework
- **Google Fonts** : Typographie Inter
- **Schema.org** : Données structurées pour le SEO

## Fonctionnalités Principales

- Design responsive (mobile/desktop)
- Mode sombre/clair avec détection des préférences système
- **Gestion de contenu (CMS)** : Interface Netlify CMS pour édition autonome
- Animations fluides au scroll (IntersectionObserver)
- Navigation mobile avec menu hamburger
- FAQ interactive
- Formulaire de contact sécurisé
- SEO optimisé (local Lyon)
- Accessibilité WCAG 2.1

## Installation & Développement

```bash
# Ouvrir directement dans le navigateur
open index.html

# OU utiliser un serveur local
python3 -m http.server 8000
# Puis ouvrir http://localhost:8000
```

**Aucun build process** - le site fonctionne directement dans le navigateur.

## Éditer le Contenu

Le site utilise **Netlify CMS** pour permettre l'édition du contenu sans toucher au code.

### Accès Admin

1. Aller sur **https://agapeo.co/admin** (ou URL Netlify)
2. Se connecter avec Netlify Identity
3. Éditer les sections : Hero, Services, À Propos, Témoignages, FAQ, Contact
4. Publier → Le site se met à jour automatiquement (1-2 min)

**Guide complet** : Voir [docs/guide-utilisateur-agathe.md](docs/guide-utilisateur-agathe.md)

### Pour les Développeurs

- Fichiers markdown : `content/*.md` (avec frontmatter YAML)
- Configuration CMS : `admin/config.yml`
- Script build : `scripts/build-html-from-content.js`

## Structure du Projet

```
/
├── index.html              # Page principale
├── styles.css              # Styles avec variables CSS
├── script.js               # Modules JavaScript
├── admin/                  # Netlify CMS
│   ├── index.html         # Interface admin
│   └── config.yml         # Configuration collections
├── content/               # Contenu markdown
│   ├── hero.md
│   ├── services.md
│   ├── about.md
│   ├── testimonials.md
│   ├── faq.md
│   └── contact.md
├── scripts/               # Build scripts
│   └── build-html-from-content.js
├── docs/                  # Guides
│   ├── netlify-setup.md
│   └── guide-utilisateur-agathe.md
├── images/                # Assets images
├── CLAUDE.md              # Documentation complète
├── TODO.md                # Liste des tâches
├── Journal.md             # Historique des modifications
└── README.md              # Ce fichier
```

## Documentation

- **[CLAUDE.md](CLAUDE.md)** : Documentation technique complète, architecture, guidelines
- **[TODO.md](TODO.md)** : Liste des tâches et améliorations futures
- **[Journal.md](Journal.md)** : Historique détaillé des versions

## Déploiement

Site statique compatible avec :
- **GitHub Pages**
- **Netlify**
- **Vercel**
- Tout hébergement de fichiers statiques

## Licence & Contact

Développé pour **Agapèo** - Agathe Vraïmakis
- Site : [À configurer]
- LinkedIn : [Profil Agathe Vraïmakis]

---

📚 **Voir [CLAUDE.md](CLAUDE.md) pour la documentation technique complète**
