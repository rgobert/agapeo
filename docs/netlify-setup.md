# Guide Setup Netlify CMS

## Prérequis

- Compte Netlify (gratuit)
- Repository GitHub: rgobert/agapeo
- Branch principale: master

## Étape 1: Créer Site Netlify

1. Aller sur [netlify.com](https://netlify.com)
2. **New site from Git** → GitHub → sélectionner `rgobert/agapeo`
3. **Build settings**:
   - Build command: `node scripts/build-html-from-content.js` (optionnel pour MVP)
   - Publish directory: `.` (racine du projet)
   - Branch: `master`
4. Cliquer **Deploy site**

## Étape 2: Activer Netlify Identity

1. Dans Netlify Dashboard → **Site settings** → **Identity**
2. Cliquer **Enable Identity**
3. **Registration preferences**:
   - Sélectionner **Invite only** (sécurité)
4. **External providers** (optionnel):
   - Activer **GitHub** pour connexion OAuth
5. Sauvegarder les paramètres

## Étape 3: Activer Git Gateway

1. Dans **Identity** → **Services** → **Git Gateway**
2. Cliquer **Enable Git Gateway**
3. Cela permet au CMS de créer des commits sans donner accès GitHub complet

## Étape 4: Inviter Agathe (Cliente)

1. Aller dans **Identity** → **Invite users**
2. Entrer l'email d'Agathe
3. Elle recevra un email d'invitation
4. Elle pourra:
   - Créer un mot de passe
   - OU se connecter via GitHub (si configuré)

## Étape 5: Tester l'Interface Admin

1. Aller sur `https://[votre-site].netlify.app/admin`
2. Se connecter avec le compte Netlify Identity
3. Vérifier que toutes les sections sont visibles:
   - Hero - Page d'Accueil
   - Services
   - À Propos
   - Témoignages
   - FAQ
   - Contact
4. Essayer d'éditer une section (ex: Hero)
5. **Publish** → Vérifier qu'un commit est créé sur GitHub
6. Attendre le rebuild (~1-2 min)
7. Vérifier que le site public est mis à jour

## Étape 6: Configuration DNS (Production)

Une fois les tests validés:

1. Dans Netlify → **Domain settings**
2. Ajouter domaine custom: `agapeo.co` (ou `www.agapeo.co`)
3. Configurer les DNS records chez le registrar:
   - Type `CNAME` pour `www` → `[site].netlify.app`
   - Type `ALIAS` ou `ANAME` pour apex `agapeo.co` → `[site].netlify.app`
4. Activer **HTTPS** (automatique avec Let's Encrypt)

## Workflow Cliente (Agathe)

### Modifier le Contenu

1. Aller sur `https://agapeo.co/admin` (ou URL Netlify)
2. Login avec email + mot de passe
3. Cliquer sur "Sections du Site"
4. Choisir la section à éditer (ex: "Hero - Page d'Accueil")
5. Modifier les champs (titre, texte, etc.)
6. Cliquer **Save** (brouillon local)
7. Cliquer **Publish** → **Publish now**
8. Attendre 1-2 minutes → Site mis à jour!

### Ajouter un Témoignage

1. Sections du Site → Témoignages
2. Scroll vers liste "Témoignages"
3. Cliquer **+ Add Témoignages**
4. Remplir: Citation, Auteur, Fonction
5. Save → Publish

### Uploader une Image

1. Dans n'importe quel champ image
2. Cliquer icône image (ou zone d'upload)
3. Sélectionner fichier depuis ordinateur
4. Image uploadée dans `/images`
5. Save → Publish

## Troubleshooting

### Erreur: "Cannot access repository"

**Solution**: Vérifier que Git Gateway est activé dans Netlify Identity

### Erreur: "Config not found"

**Solution**: Vérifier que `admin/config.yml` existe et est correctement formaté (YAML valide)

### Build échoue sur Netlify

**Solution**:
1. Vérifier les logs de build dans Netlify Dashboard
2. Tester le script localement: `node scripts/build-html-from-content.js`
3. Vérifier que `node` est disponible dans l'environnement Netlify

### Changements pas visibles après Publish

**Solution**:
1. Vérifier que le commit apparaît sur GitHub
2. Vérifier que le build Netlify s'est terminé (Dashboard → Deploys)
3. Vider le cache du navigateur (Cmd+Shift+R / Ctrl+F5)

## Sécurité

### Cookies

- **Admin (/admin)**: Cookies Netlify Identity (strictement nécessaires, exemptés RGPD)
- **Site public**: Aucun cookie (conforme RGPD)

### Accès

- Interface admin: **Invite only**
- Git commits: Signés par "Netlify CMS" (traçable)
- Rollback: Possible via `git revert` ou interface Netlify

## Coûts

### Netlify Free Tier

- ✅ 100 GB bande passante/mois
- ✅ 300 build minutes/mois
- ✅ 1000 Identity users actifs
- ✅ Git Gateway inclus
- ✅ HTTPS automatique

**Total: 0€/mois** pour ce cas d'usage

### Dépassement (très improbable)

- Si trafic > 100 GB/mois: ~$20/mois (Pro tier)
- Pour ce site: 1-2 GB/mois estimé → largement dans le free tier

## Support

En cas de problème technique, contacter le développeur avec:
1. Screenshot de l'erreur
2. Action effectuée (ex: "J'ai essayé de publier un changement dans Services")
3. Navigateur utilisé (Chrome, Firefox, Safari, etc.)

## Ressources

- [Documentation Netlify CMS](https://www.netlifycms.org/docs/)
- [Netlify Identity](https://docs.netlify.com/visitor-access/identity/)
- [Git Gateway](https://docs.netlify.com/visitor-access/git-gateway/)
