// Smooth scroll for navigation links
document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        const section = document.querySelector(href);
        
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll animation for content sections
function handleScrollAnimation() {
    const contentSections = document.querySelectorAll('.content-section');
    
    contentSections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;
        
        // Wenn der Bereich sichtbar ist (zwischen Top und Bottom des Viewports)
        if (sectionTop < windowHeight && sectionBottom > 0) {
            section.classList.add('scroll-animate');
        }
    });
}

// Scroll event listener
window.addEventListener('scroll', handleScrollAnimation);

// Initial call on page load
handleScrollAnimation();

// Simple i18n
const translations = {
    de: {
        'btn.what': 'Was ist CHS',
        'btn.who': 'Wer sind wir',
        'btn.app': 'App',
        'heading.what': 'Was ist CHS',
        'heading.who': 'Wer sind wir',
        'heading.app': 'App',
        'what.intro': 'Come Home Safe ist eine Initiative zur Verbesserung der Sicherheit auf dem Weg nach Hause. Wir setzen uns für deine Sicherheit ein und bieten verschiedene Tools und Ressourcen, um dich schnell und sicher nach Hause zu bringen.',
        'what.mission.title': 'Unsere Mission',
        'what.mission.body': 'Wir helfen insbesondere betrunkenen Menschen, schnell und sicher nach Hause zu kommen – ohne Bedenken.',
        'what.offer.title': 'Was wir anbieten',
        'what.offer.body': 'Ob Taxis, Öffis oder zu Fuß. Wir bringen dich sicher nach Hause.',
        'who.intro': 'Wir sind ein Team von engagierten Schüler, die sich der Sicherheit und dem Wohlbefinden unserer Gemeinschaft widmen. Unser Ziel ist es, ein sicheres Umfeld für alle zu schaffen.',
        'who.team.title': 'Unser Team',
        'who.team.body': 'Come Home Safe wurde von Schülern der 2. Klasse der HTL Anichstraße gegründet. Wir wollen mehr Sicherheit im österreichischen – und langfristig weltweiten – Straßenverkehr schaffen.',
        'who.support.title': 'Unterstützer',
        'who.support.body': 'Wir bedanken uns bei SWARCO und der HTL Anichstraße für ihre Unterstützung bei unserem Projekt.',
        'features.map': 'Moderner Routenplaner',
        'features.reliable': 'Zuverlässig',
        'features.fast': 'Schneller Service',
        'features.pay': 'Sichere Bezahlung',
        'app.title': 'Come Home Safe App',
        'app.status': 'Die App ist noch in der Entwicklungsphase und noch nicht verfügbar. Treten Sie für weitere Infos unserem Discord-Kanal bei.',
        'app.discord': 'Join our Discord',
        'footer.brand.title': 'Come Home Safe',
        'footer.brand.text': 'Deine Sicherheit ist unsere Priorität.',
        'footer.contact.title': 'Kontakt',
        'footer.contact.email': 'Email: dadona@tsn.at',
        'footer.contact.address': 'Adresse: Höhere Technische Bundeslehr- und Versuchsanstalt Innsbruck Anichstraße, Anichstraße 26 - 28, 6020 Innsbruck',
        'footer.contact.discord': 'Join our Discord',
        'footer.partner.title': 'Partner',
        'footer.partner.swarco': 'SWARCO',
        'footer.partner.htl': 'CCA - Competence Center HTLBLVA Anichstraße',
        'footer.bottom': '© 2025 Come Home Safe. Alle Rechte vorbehalten.'
    },
    en: {
        'btn.what': 'What is CHS',
        'btn.who': 'Who are we',
        'btn.app': 'App',
        'heading.what': 'What is CHS',
        'heading.who': 'Who are we',
        'heading.app': 'App',
        'what.intro': 'Come Home Safe is an initiative to improve safety on your way home. We focus on your safety and offer tools and resources to get you home quickly and safely.',
        'what.mission.title': 'Our mission',
        'what.mission.body': 'We help people—especially when they are intoxicated—get home quickly and safely, without worries.',
        'what.offer.title': 'What we offer',
        'what.offer.body': 'Whether taxi, public transport, or on foot—we get you home safely.',
        'who.intro': 'We are a team of dedicated students focused on the safety and well-being of our community. Our goal is to create a safe environment for everyone.',
        'who.team.title': 'Our team',
        'who.team.body': 'Come Home Safe was founded by students of the 2nd class at HTL Anichstraße. We aim to improve road safety in Austria and, in the long term, worldwide.',
        'who.support.title': 'Supporters',
        'who.support.body': 'We thank SWARCO and HTL Anichstraße for supporting our project.',
        'features.map': 'Modern route planner',
        'features.reliable': 'Reliable',
        'features.fast': 'Fast service',
        'features.pay': 'Secure payment',
        'app.title': 'Come Home Safe App',
        'app.status': 'The app is in development and not yet available. Join our Discord for updates.',
        'app.discord': 'Join our Discord',
        'footer.brand.title': 'Come Home Safe',
        'footer.brand.text': 'Your safety is our priority.',
        'footer.contact.title': 'Contact',
        'footer.contact.email': 'Email: dadona@tsn.at',
        'footer.contact.address': 'Address: Höhere Technische Bundeslehr- und Versuchsanstalt Innsbruck Anichstraße, Anichstraße 26 - 28, 6020 Innsbruck',
        'footer.contact.discord': 'Join our Discord',
        'footer.partner.title': 'Partners',
        'footer.partner.swarco': 'SWARCO',
        'footer.partner.htl': 'CCA - Competence Center HTLBLVA Anichstraße',
        'footer.bottom': '© 2025 Come Home Safe. All rights reserved.'
    }
};

const LANG_KEY = 'chs_lang';
let currentLang = 'de';

function detectLanguage() {
    const stored = localStorage.getItem(LANG_KEY);
    if (stored && translations[stored]) return stored;
    const lang = (navigator.language || navigator.userLanguage || 'de').toLowerCase();
    if (lang.startsWith('de')) return 'de';
    return 'en';
}

function updateLanguageToggle(lang) {
    const toggle = document.querySelector('.language-toggle');
    if (!toggle) return;
    toggle.querySelectorAll('button[data-lang]').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
}

function applyTranslations(lang) {
    const dict = translations[lang] || translations.de;
    currentLang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (dict[key]) {
            el.textContent = dict[key];
        }
    });
    updateLanguageToggle(lang);
}

function setLanguage(lang) {
    if (!translations[lang]) return;
    localStorage.setItem(LANG_KEY, lang);
    applyTranslations(lang);
}

const languageToggle = document.querySelector('.language-toggle');
if (languageToggle) {
    languageToggle.addEventListener('click', (e) => {
        const btn = e.target.closest('button[data-lang]');
        if (!btn) return;
        setLanguage(btn.dataset.lang);
    });
}

const initialLang = detectLanguage();
applyTranslations(initialLang);






