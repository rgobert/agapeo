# TODO - Site Agathe Vraïmakis

## ✅ Complété Récemment

- [x] **[2026-01-14]** Netlify CMS - Phase 1: Setup complet (admin/, content/, config)
- [x] **[2026-01-14]** Netlify CMS - Phase 2: Script build + documentation complète
- [x] **[2026-01-14]** Création 6 fichiers markdown avec frontmatter YAML
- [x] **[2026-01-14]** Guide setup Netlify et guide utilisateur Agathe
- [x] **[2026-01-12]** Finitions professionnelles v1.3.1 - 15 fixes implémentées
- [x] **[2026-01-12]** Phase 1: 4 bugs critiques (mobile menu, variables, accessibilité)
- [x] **[2026-01-12]** Phase 2: 5 systèmes de design standardisés
- [x] **[2026-01-12]** Phase 3: 6 refinements interactions et polish
- [x] **[2026-01-11]** Refonte DA premium - Palette bleu/doré/blanc poudré
- [x] **[2026-01-11]** Adaptation dark mode avec nouvelle palette
- [x] **[2026-01-11]** Validation contraste WCAG AA sur toutes sections

## Priorité Haute

### Netlify CMS - Phases Finales (v1.4.0)

- [ ] **Phase 3: Déploiement Netlify** (30 min)
  - Créer site Netlify depuis GitHub (rgobert/agapeo)
  - Configurer build command: `node scripts/build-html-from-content.js` (optionnel)
  - Activer Netlify Identity (invite only)
  - Activer Git Gateway
  - Configurer DNS custom domain (agapeo.co)
- [ ] **Phase 4: Tests End-to-End** (30 min)
  - Tester accès /admin
  - Éditer chaque collection (Hero, Services, About, Testimonials, FAQ, Contact)
  - Vérifier création commits Git automatiques
  - Vérifier rebuild automatique du site
  - Valider changements visibles sur site public
- [ ] **Phase 5: Formation Cliente** (1h)
  - Inviter Agathe sur Netlify Identity
  - Session walkthrough interface CMS (30-45 min)
  - Démonstration édition + publication
  - Enregistrer vidéo tutoriel (optionnel)
  - Handoff complet
- [ ] **Merge branche feature dans master**
  - Vérifier tous tests passent
  - Merge avec --no-ff
  - Cleanup branche feature
  - Tag version v1.4.0

### Post-Finitions v1.3.1

- [ ] **Test Lighthouse complet** (viser score ≥95 toutes catégories)
  - Performance
  - Accessibility
  - Best Practices
  - SEO
- [ ] **Tester sur différents navigateurs** (Chrome, Firefox, Safari, Edge)
  - Navigation mobile fonctionnelle
  - Theme toggle rotation
  - Button ripple effects
  - Form validation states
- [ ] **Vérifier responsive** sur vrais devices
  - Mobile : 320px - 768px
  - Tablet : 769px - 1024px
  - Desktop : 1025px+
- [ ] **Obtenir feedback client sur DA + finitions**
  - Screenshots avant/après à présenter
  - Valider l'équilibre bleu/doré (40%/20%)
  - Tester interactions (hover, active, focus)

### Optimisations Images & Accessibilité

- [ ] Vérifier que toutes les images sont optimisées (WebP avec fallback)
- [ ] Tester l'accessibilité avec un lecteur d'écran (NVDA/JAWS)
- [ ] Valider le formulaire de contact avec un backend réel

## Priorité Moyenne

- [ ] Créer un profil Google My Business
- [ ] Ajouter sitemap.xml et robots.txt si non présents
- [ ] Optimiser les performances (Lighthouse score >90)
- [ ] Ajouter des articles de blog pour le SEO

## Priorité Basse

### Optimisations Techniques

- [ ] Convertir images en WebP avec `<picture>` fallback
- [ ] Auto-hébergement des polices Google Fonts (performance)
- [ ] Implémenter analytics sans cookies (GoatCounter ou Plausible)

### Fonctionnalités Business

- [ ] Ajouter un système de prise de RDV (Calendly ou custom)
- [ ] Système de newsletter (Mailchimp/Brevo intégration)

## Améliorations Futures (v1.4.0+)

### UX/UI

- [ ] Mode automatique selon l'heure de la journée
- [ ] Animations micro-interactions supplémentaires
- [ ] Ajustements fins palette si feedback client nécessite

### Contenu

- [ ] Section blog intégrée
- [ ] Galerie de témoignages enrichie
- [ ] Page études de cas / success stories

### Technique

- [ ] Version multilingue (FR/EN)
- [ ] PWA (Progressive Web App)
- [ ] Pre-rendering pour SEO

## 🎨 Palette Actuelle (v1.3.0)

**Mode Clair** :
- Blanc poudré : `#FFF2F2` (fond principal)
- Bleu : `#2438B9` (primaire - structure)
- Doré : `#C0A27B` (accents premium)

**Mode Sombre** :
- Noir bleuté : `#0F1419`
- Bleu lumineux : `#5B72E6`
- Doré chaud : `#D4B68F`

## 📝 Notes d'Utilisation

- Ce fichier sert à tracker les tâches du projet entre sessions
- Marquer les tâches complétées avec [x] et date
- Ajouter de nouvelles tâches au fur et à mesure
- **Consulter Journal.md** pour l'historique détaillé des modifications
- **Dernière mise à jour** : 2026-01-14 (Netlify CMS v1.4.0 - Phases 1-2 complétées)
