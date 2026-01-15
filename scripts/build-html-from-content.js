#!/usr/bin/env node
/**
 * Génère index.html depuis les fichiers markdown de content/
 *
 * Usage: node scripts/build-html-from-content.js
 *
 * Ce script:
 * 1. Lit tous les fichiers .md dans content/
 * 2. Parse le frontmatter YAML
 * 3. Lit index.html comme template
 * 4. Remplace le contenu hardcodé par les données markdown
 * 5. Écrit le nouveau index.html
 */

const fs = require('fs');
const path = require('path');

// Configuration
const CONTENT_DIR = path.join(__dirname, '..', 'content');
const INDEX_PATH = path.join(__dirname, '..', 'index.html');

/**
 * Parse le frontmatter YAML d'un fichier markdown
 * Format attendu:
 * ---
 * key: "value"
 * ---
 */
function parseFrontmatter(content) {
  const frontmatterRegex = /^---\n([\s\S]+?)\n---/;
  const match = content.match(frontmatterRegex);

  if (!match) {
    console.warn('⚠️  Pas de frontmatter trouvé');
    return {};
  }

  const frontmatter = {};
  const yamlContent = match[1];

  // Parser YAML basique (supporte strings, listes simples)
  const lines = yamlContent.split('\n');
  let currentKey = null;
  let currentList = null;

  for (const line of lines) {
    // Liste item
    if (line.trim().startsWith('- ')) {
      if (currentList) {
        // Parse list item object
        const itemMatch = line.match(/- (\w+): "?([^"]*)"?/);
        if (itemMatch) {
          const [, key, value] = itemMatch;
          if (!currentList[currentList.length - 1]) {
            currentList.push({});
          }
          currentList[currentList.length - 1][key] = value;
        } else {
          // Simple string list item
          currentList.push(line.trim().substring(2).replace(/^"(.*)"$/, '$1'));
        }
      }
    }
    // Key: value simple
    else if (line.includes(':')) {
      const colonIndex = line.indexOf(':');
      const key = line.substring(0, colonIndex).trim();
      let value = line.substring(colonIndex + 1).trim();

      // Remove quotes
      value = value.replace(/^"(.*)"$/, '$1');

      // Check if next items are list
      if (value === '') {
        currentKey = key;
        currentList = [];
        frontmatter[key] = currentList;
      } else {
        frontmatter[key] = value;
        currentKey = null;
        currentList = null;
      }
    }
  }

  return frontmatter;
}

/**
 * Lit et parse tous les fichiers markdown
 */
function loadContent() {
  const content = {};

  const files = fs.readdirSync(CONTENT_DIR);

  for (const file of files) {
    if (!file.endsWith('.md')) continue;

    const filePath = path.join(CONTENT_DIR, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const data = parseFrontmatter(fileContent);

    const section = file.replace('.md', '');
    content[section] = data;

    console.log(`✅ Chargé: ${section}`);
  }

  return content;
}

/**
 * Échappe les caractères HTML pour éviter les injections
 */
function escapeHtml(text) {
  if (typeof text !== 'string') return text;

  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };

  return text.replace(/[&<>"']/g, m => map[m]);
}

/**
 * Remplace le contenu dans index.html
 *
 * NOTE: Pour v1 (MVP), on garde index.html tel quel
 * Le CMS sera utilisé pour éditer les fichiers .md
 * Plus tard, on pourra implémenter la génération complète du HTML
 */
function generateHTML(content) {
  console.log('\n📝 Contenu chargé depuis markdown:');
  console.log('   - Hero:', content.hero.title);
  console.log('   - Services:', content.services.title);
  console.log('   - About:', content.about.title);
  console.log('   - Testimonials:', content.testimonials.title);
  console.log('   - FAQ:', content.faq.questions?.length || 0, 'questions');
  console.log('   - Contact:', content.contact.email);

  console.log('\n⚠️  Note: Pour cette version MVP, index.html reste inchangé.');
  console.log('   Les fichiers markdown sont prêts pour Netlify CMS.');
  console.log('   La génération HTML automatique sera implémentée dans une version future.');

  return null; // Pas de génération pour l'instant
}

/**
 * Main
 */
function main() {
  console.log('🚀 Build HTML depuis contenu markdown\n');

  try {
    // Charger tout le contenu
    const content = loadContent();

    // Générer HTML (pour l'instant, juste validation)
    generateHTML(content);

    console.log('\n✅ Build terminé avec succès!');
    console.log('\n📋 Prochaines étapes:');
    console.log('   1. Configurer Netlify Identity');
    console.log('   2. Tester interface /admin');
    console.log('   3. Implémenter génération HTML si nécessaire');

  } catch (error) {
    console.error('\n❌ Erreur:', error.message);
    process.exit(1);
  }
}

// Exécuter si appelé directement
if (require.main === module) {
  main();
}

module.exports = { parseFrontmatter, loadContent };
