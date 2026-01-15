# Guide Utilisateur - Éditer le Contenu du Site

**Pour**: Agathe Vraïmakis
**Site**: agapeo.co
**Interface d'administration**: https://agapeo.co/admin

---

## 📱 Accéder à l'Interface

1. Ouvrir le navigateur (Chrome, Firefox, Safari)
2. Aller sur **https://agapeo.co/admin**
3. Se connecter avec votre email et mot de passe

**Note**: La première fois, vous recevrez un email d'invitation pour créer votre mot de passe.

---

## ✏️ Modifier une Section

### Exemple: Changer le Titre de la Page d'Accueil

1. Dans la barre latérale, cliquer **"Sections du Site"**
2. Cliquer sur **"Hero - Page d'Accueil"**
3. Modifier le champ **"Titre Principal"**
   - Exemple: "Clarifier votre posture professionnelle"
4. Cliquer **"Save"** en haut à droite
5. Cliquer **"Publish"** → **"Publish now"**
6. ✅ **Attendre 1-2 minutes** → Votre site est mis à jour!

### Autres Sections Modifiables

- **Services**: Décrire vos accompagnements, tarifs
- **À Propos**: Votre biographie, parcours, certifications
- **Témoignages**: Ajouter/modifier les témoignages clients
- **FAQ**: Questions et réponses
- **Contact**: Email, téléphone, zone d'intervention

---

## ➕ Ajouter un Témoignage

1. Sections du Site → **Témoignages**
2. Scroller vers la liste **"Témoignages"**
3. Cliquer **"+ Add Témoignages"**
4. Remplir les champs:
   - **Citation**: Le témoignage du client
   - **Auteur**: Nom du client (ou anonymisé)
   - **Fonction**: Poste et entreprise
5. **Save** → **Publish**

### Modifier un Témoignage Existant

1. Témoignages → Cliquer sur le témoignage à modifier
2. Éditer les champs
3. Save → Publish

### Supprimer un Témoignage

1. Témoignages → Cliquer sur le témoignage
2. Cliquer **"Delete entry"** (en bas)
3. Confirmer → Publish

---

## ❓ Ajouter une Question à la FAQ

1. Sections du Site → **FAQ**
2. Scroller vers **"Questions"**
3. Cliquer **"+ Add Questions"**
4. Remplir:
   - **Question**: La question (ex: "Combien coûte un accompagnement ?")
   - **Réponse**: La réponse complète
5. Save → Publish

---

## 🖼️ Uploader une Image

### Changer la Photo Hero (Page d'Accueil)

1. Hero - Page d'Accueil
2. Champ **"Image"** (selon config future)
3. Cliquer sur la zone d'upload
4. Sélectionner l'image depuis votre ordinateur
5. L'image est uploadée automatiquement dans `/images`
6. Save → Publish

**Recommandations images**:
- Format: JPG ou PNG (WebP si disponible)
- Taille: Maximum 500 KB par image
- Dimensions: 400x400 pixels minimum
- Qualité: Bonne résolution, bien éclairée

---

## 🔄 Annuler une Modification

### Si vous venez de Publish et souhaitez revenir en arrière:

**Option 1**: Éditer à nouveau et republier
1. Retourner dans la section
2. Corriger le texte
3. Save → Publish

**Option 2**: Contacter le développeur pour rollback Git
- Indiquer la date/heure de la modification à annuler
- Le développeur restaurera la version précédente

---

## 💾 Save vs Publish

### "Save" (Brouillon)
- Sauvegarde locale dans votre navigateur
- **Non visible** sur le site public
- Permet de travailler en plusieurs fois

### "Publish" (Publication)
- Crée un commit Git
- Déclenche le rebuild du site (1-2 min)
- **Visible** sur le site public
- ✅ C'est cette action qui met à jour le site

**Workflow recommandé**:
1. Modifier plusieurs sections
2. Save régulièrement (brouillon)
3. Publish une seule fois quand tout est prêt

---

## 🚨 Que Faire en Cas de Problème

### Erreur: "Cannot load config"

**Solution**: Rafraîchir la page (F5 ou Cmd+R)

### Erreur: "Failed to save"

**Solution**:
1. Vérifier la connexion internet
2. Vérifier que vous êtes toujours connecté
3. Réessayer après 1 minute

### Les changements ne sont pas visibles après Publish

**Solutions**:
1. Attendre 2-3 minutes (temps de rebuild)
2. Rafraîchir le site public (Cmd+Shift+R ou Ctrl+F5)
3. Vider le cache du navigateur

### Mot de passe oublié

1. Sur la page de login, cliquer **"Forgot password?"**
2. Entrer votre email
3. Suivre les instructions dans l'email reçu

---

## 📞 Support Technique

En cas de problème, contacter le développeur avec:

1. **Screenshot de l'erreur** (Cmd+Shift+4 sur Mac, Win+Shift+S sur Windows)
2. **Action effectuée**: "J'ai essayé de modifier Services et publier"
3. **Navigateur**: Chrome, Firefox, Safari, etc.

---

## ✅ Checklist Avant de Publish

Avant de cliquer "Publish", vérifier:

- [ ] Le texte est relu (pas de fautes)
- [ ] Les liens fonctionnent (ex: #contact)
- [ ] Les emails/téléphones sont corrects
- [ ] Les images sont de bonne qualité
- [ ] Le message est clair et professionnel

---

## 🎯 Bonnes Pratiques

### Fréquence de Mise à Jour

- **Témoignages**: Ajouter au fur et à mesure (1 nouveau/mois)
- **FAQ**: Mettre à jour quand questions récurrentes
- **Services/Tarifs**: Réviser 1-2 fois/an
- **À Propos**: Mettre à jour avec nouvelles certifications

### Ton et Style

- Rester aligné avec l'identité Agapèo
- Éviter le jargon corporate
- Privilégier la clarté et l'authenticité
- Pas de promesses exagérées ("transformation rapide", etc.)

### SEO (Référencement)

- Utiliser des mots-clés naturels: "coach carrière Lyon", "reconversion professionnelle"
- Titres clairs et descriptifs
- Pas de "keyword stuffing" (répétition excessive)

---

## 📚 Ressources

- [Vidéo démo](lien-vers-video-loom) *(à créer)*
- Contact développeur: [email]
- Documentation Netlify CMS: https://www.netlifycms.org/docs/

---

**Version**: 1.0 - Janvier 2026
**Dernière mise à jour**: 2026-01-14
