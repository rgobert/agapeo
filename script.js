/**
 * Site Web d'Agathe Vraïmakis - Coach Carrière Agapèo
 * JavaScript principal pour les interactions et animations
 */

'use strict';

// Configuration
const CONFIG = {
    NAVBAR_HEIGHT: 70,
    ANIMATION_DURATION: 2000,
    FORM_SUBMIT_DELAY: 2000
};

// Utilitaires
const Utils = {
    /**
     * Valide une adresse email
     * @param {string} email - L'email à valider
     * @returns {boolean} - True si valide
     */
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    },

    /**
     * Sanitise une chaîne de caractères
     * @param {string} str - La chaîne à nettoyer
     * @returns {string} - Chaîne nettoyée
     */
    sanitizeString(str) {
        return str.trim().replace(/[<>]/g, '');
    },

    /**
     * Débounce une fonction
     * @param {Function} func - Fonction à débouncer
     * @param {number} wait - Délai en ms
     * @returns {Function} - Fonction débouncée
     */
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
};

// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialiser tous les modules
    ThemeModule.init();      // ⭐ Charger le thème en premier
    NavigationModule.init();
    FormModule.init();
    AnimationModule.init();
    FAQModule.init();
    FooterModule.init();
});

// Module Navigation
const NavigationModule = {
    init() {
        this.initMobileMenu();
        this.initSmoothScroll();
    },

    initMobileMenu() {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        if (!hamburger || !navMenu) return;

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    },

    initSmoothScroll() {
        const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - CONFIG.NAVBAR_HEIGHT;
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                    
                    // Fermer le menu mobile
                    this.closeMobileMenu();
                }
            });
        });
    },

    closeMobileMenu() {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        if (hamburger && navMenu && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
};

// Module Formulaire
const FormModule = {
    init() {
        const contactForm = document.querySelector('.contact-form');
        if (!contactForm) return;

        contactForm.addEventListener('submit', (e) => this.handleSubmit(e));
    },

    handleSubmit(e) {
        e.preventDefault();
        
        const form = e.target;
        const formData = this.getFormData(form);
        
        // Validation
        if (!this.validateForm(formData)) return;
        
        // Simulation d'envoi sécurisé
        this.simulateSubmit(form, formData);
    },

    getFormData(form) {
        const inputs = form.querySelectorAll('input, textarea');
        const data = {};
        
        inputs.forEach(input => {
            if (input.name) {
                data[input.name] = Utils.sanitizeString(input.value);
            }
        });
        
        return data;
    },

    validateForm(data) {
        const { name, email, message } = data;
        
        if (!name || !email || !message) {
            this.showError('Veuillez remplir tous les champs obligatoires.');
            return false;
        }
        
        if (!Utils.isValidEmail(email)) {
            this.showError('Veuillez entrer une adresse email valide.');
            return false;
        }
        
        return true;
    },

    showError(message) {
        // Utiliser une notification moins intrusive qu'alert()
        console.warn('Erreur de validation:', message);
        // TODO: Remplacer par une notification toast
        alert(message);
    },

    simulateSubmit(form, data) {
        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        // État de chargement
        submitButton.textContent = 'Envoi en cours...';
        submitButton.disabled = true;
        
        // Simulation sécurisée
        setTimeout(() => {
            console.log('Données du formulaire (sécurisées):', data);
            alert('Merci pour votre message ! Je vous répondrai dans les plus brefs délais.');
            
            form.reset();
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }, CONFIG.FORM_SUBMIT_DELAY);
    }
};

// Module Animations
const AnimationModule = {
    init() {
        this.initScrollAnimations();
    },

    initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    
                    // Animation du compteur si présent
                    const counter = entry.target.querySelector('.counter');
                    if (counter && !counter.dataset.animated) {
                        this.animateCounter(counter);
                        counter.dataset.animated = 'true';
                    }
                }
            });
        }, observerOptions);

        // Observer tous les éléments avec animation
        const animateElements = document.querySelectorAll('.animate-on-scroll');
        animateElements.forEach(el => observer.observe(el));
    },

    animateCounter(element) {
        const target = parseInt(element.getAttribute('data-target'), 10);
        if (isNaN(target)) return;

        const duration = CONFIG.ANIMATION_DURATION;
        const start = performance.now();
        
        const updateCounter = (currentTime) => {
            const elapsed = currentTime - start;
            const progress = Math.min(elapsed / duration, 1);
            
            // Fonction d'easing naturelle
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const current = Math.floor(easeOutQuart * target);
            
            element.textContent = current;
            
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        };
        
        requestAnimationFrame(updateCounter);
    }
};

// Module FAQ
const FAQModule = {
    init() {
        const faqItems = document.querySelectorAll('.faq-item');
        if (!faqItems.length) return;

        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            if (!question) return;

            question.addEventListener('click', () => {
                this.toggleFAQ(item, faqItems);
            });
        });
    },

    toggleFAQ(currentItem, allItems) {
        // Fermer tous les autres items
        allItems.forEach(item => {
            if (item !== currentItem) {
                item.classList.remove('active');
            }
        });
        
        // Toggle l'item actuel
        currentItem.classList.toggle('active');
    }
};

// Module Footer
const FooterModule = {
    init() {
        this.updateYear();
    },

    updateYear() {
        const currentYear = new Date().getFullYear();
        const footerText = document.querySelector('.footer p');
        
        if (footerText) {
            footerText.textContent = footerText.textContent.replace(/\d{4}/, currentYear);
        }
    }
};

// ========================================
// MODULE THÈME - MODE SOMBRE
// ========================================
const ThemeModule = {
    STORAGE_KEY: 'theme-preference',
    
    init() {
        this.loadTheme();
        this.attachEventListeners();
        this.updateIcon();
    },
    
    /**
     * Charge le thème depuis localStorage ou détecte les préférences système
     */
    loadTheme() {
        const savedTheme = localStorage.getItem(this.STORAGE_KEY);
        
        if (savedTheme) {
            document.documentElement.setAttribute('data-theme', savedTheme);
        } else {
            // Détecte les préférences système
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            const theme = prefersDark ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', theme);
        }
    },
    
    /**
     * Change le thème actuel
     */
    toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem(this.STORAGE_KEY, newTheme);
        
        this.updateIcon();
    },
    
    /**
     * Met à jour l'icône du bouton selon le thème actuel
     */
    updateIcon() {
        const themeIcon = document.querySelector('.theme-icon');
        if (!themeIcon) return;
        
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const isDark = currentTheme === 'dark';
        
        themeIcon.textContent = isDark ? '☀️' : '🌙';
        
        const themeToggle = document.querySelector('.theme-toggle');
        if (themeToggle) {
            themeToggle.setAttribute('aria-label', 
                isDark ? 'Activer le mode clair' : 'Activer le mode sombre'
            );
        }
    },
    
    /**
     * Attache les événements
     */
    attachEventListeners() {
        const themeToggle = document.querySelector('.theme-toggle');
        
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }
        
        // Écoute les changements de préférences système
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            const savedTheme = localStorage.getItem(this.STORAGE_KEY);
            if (!savedTheme) {
                const newTheme = e.matches ? 'dark' : 'light';
                document.documentElement.setAttribute('data-theme', newTheme);
                this.updateIcon();
            }
        });
    }
};
