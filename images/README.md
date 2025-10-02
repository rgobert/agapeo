# 📸 Images Guide - Agathe Vraïmakis

## Images Actuelles

### **agathe-hero.jpg** (65KB)
- **Usage** : Section Hero (première impression)
- **Dimensions** : 320x320px (optimisé pour display)
- **Alt text** : "Agathe Vraïmakis, coach carrière certifiée ICF à Lyon, spécialisée en reconversion professionnelle"
- **Loading** : Eager (visible immédiatement)
- **Description** : Portrait professionnel avec top rouge/corail

### **agathe-about.jpg** (62KB)
- **Usage** : Section À propos
- **Dimensions** : 420x420px (optimisé pour display)
- **Alt text** : "Portrait d'Agathe Vraïmakis, coach professionnelle Agapèo, sourire bienveillant"
- **Loading** : Lazy (charge au scroll)
- **Description** : Portrait plus décontracté et personnel

### **agapeo-logo.png** (7KB)
- **Usage** : Logo dans navigation et footer
- **Format** : PNG (transparence nécessaire)

---

## 🎯 Optimisations Appliquées

### **1. Attributs HTML5**
- ✅ `width` et `height` : Prévient les layout shifts (CLS)
- ✅ `alt` descriptif : Accessibilité et SEO
- ✅ `loading="lazy"` : Performance (sauf hero)

### **2. Dimensions Optimisées**
- Hero : 320x320px (match CSS)
- About : 420x420px (match CSS)
- Prévient le redimensionnement navigateur

### **3. Compression**
- Images déjà optimisées à ~65KB chacune
- Bon équilibre qualité/performance

---

## 📊 Performance

### **Avant**
- Hero image : 65KB
- About image : 62KB
- **Total** : 127KB

### **Recommandations Futures**
- [ ] Convertir en WebP (-30% de taille)
- [ ] Générer versions responsive (srcset)
- [ ] Optimiser avec ImageOptim/TinyPNG
- [ ] CDN pour serving optimal

---

## 🔄 Pour Mettre à Jour les Images

### **Option A : Remplacer fichiers**
```bash
# Garder les mêmes noms pour éviter de modifier le HTML
cp nouvelle-photo-hero.jpg agathe-hero.jpg
cp nouvelle-photo-about.jpg agathe-about.jpg
```

### **Option B : Optimiser existantes**
```bash
# Avec ImageMagick
convert agathe-hero.jpg -resize 320x320^ -quality 85 agathe-hero-optimized.jpg

# Avec cwebp (WebP)
cwebp -q 85 agathe-hero.jpg -o agathe-hero.webp
```

---

## 🎨 Guidelines Photos

### **Qualité**
- ✅ Haute résolution (min 320x320 pour hero, 420x420 pour about)
- ✅ Bonne luminosité
- ✅ Fond neutre ou cohérent avec brand
- ✅ Expression professionnelle mais accessible

### **Couleurs**
- ✅ Préférer vêtements rouges/corail (match brand Agapèo)
- ✅ Contraste suffisant pour les deux thèmes (clair/sombre)

### **Format**
- JPG pour photos (bon compromis)
- WebP pour version moderne (optionnel)
- PNG pour logos uniquement

---

## 📝 Alt Text Best Practices

### **Hero Photo**
```html
alt="Agathe Vraïmakis, coach carrière certifiée ICF à Lyon, 
     spécialisée en reconversion professionnelle"
```
✅ Nom + rôle + localisation + spécialité

### **About Photo**
```html
alt="Portrait d'Agathe Vraïmakis, coach professionnelle Agapèo, 
     sourire bienveillant"
```
✅ Description de l'image + contexte émotionnel

---

## 🚀 Prochaines Étapes (Optionnel)

1. **Ajouter WebP avec fallback**
```html
<picture>
  <source srcset="images/agathe-hero.webp" type="image/webp">
  <img src="images/agathe-hero.jpg" alt="...">
</picture>
```

2. **Responsive images**
```html
<img srcset="images/agathe-hero-small.jpg 320w,
             images/agathe-hero-medium.jpg 640w,
             images/agathe-hero-large.jpg 1280w"
     sizes="(max-width: 768px) 320px, 420px"
     src="images/agathe-hero.jpg" alt="...">
```

3. **Preload hero image** (si critique)
```html
<link rel="preload" as="image" href="images/agathe-hero.jpg">
```

---

**Images intégrées avec succès !** ✅
**Optimisations de base appliquées** ✅
**Documentation complète** ✅
