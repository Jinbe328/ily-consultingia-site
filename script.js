(function () {
  'use strict';

  /* ===== Translations ===== */
  var translations = {
    fr: {
      'nav.services': 'Services',
      'nav.methode': 'Méthode',
      'nav.apropos': 'À propos',
      'nav.contact': 'Contact',
      'nav.faq': 'FAQ',
      'nav.cta': 'Échangeons sur votre projet',

      'hero.eyebrow': 'Consultant IA — Oran, Algérie',
      'hero.title': "L'IA appliquée aux vrais problèmes de votre entreprise",
      'hero.subtitle': 'Stratégie, développement et formation. Pour PME et ETI en Algérie, au Maghreb et en Europe.',
      'hero.ctaPrimary': 'Réservez un échange gratuit',
      'hero.ctaSecondary': 'Découvrir nos services',

      'trust.text': 'Basé à Oran, accompagnement d’entreprises en Algérie, au Maghreb et en Europe',
      'trust.placeholder': 'Clients de confiance à venir',

      'services.eyebrow': 'Ce qu’on fait',
      'services.title': 'Nos services',
      'services.lead': 'Deux façons de travailler ensemble, selon là où vous en êtes avec l’IA.',
      'services.conseil.title': 'Conseil',
      'services.conseil.card1.title': 'Audit et diagnostic IA',
      'services.conseil.card1.desc': 'Analyse de votre maturité digitale et identification des opportunités concrètes d’automatisation.',
      'services.conseil.card2.title': 'Développement sur mesure',
      'services.conseil.card2.desc': 'Agents IA et automatisations spécifiques, conçus pour vos process réels, pas des templates génériques.',
      'services.conseil.card3.title': 'Accompagnement stratégique',
      'services.conseil.card3.desc': 'Une feuille de route à 3-6 mois et un accompagnement dans la conduite du changement.',
      'services.conseil.card4.title': 'Data & Analytics',
      'services.conseil.card4.desc': 'Dashboards IA et reporting décisionnel pour piloter votre activité avec des données fiables.',
      'services.formation.title': 'Formation',
      'services.formation.card1.title': 'Initiation',
      'services.formation.card1.desc': 'Vos équipes découvrent l’IA générative (Claude, ChatGPT) et ses premiers usages concrets.',
      'services.formation.card2.title': 'Avancé',
      'services.formation.card2.desc': 'Prompting expert et workflows automatisés pour utilisateurs déjà à l’aise avec l’IA.',
      'services.formation.card3.title': 'Dirigeants',
      'services.formation.card3.desc': 'Comprendre les enjeux stratégiques de l’IA pour la prise de décision, en conférence dédiée.',

      'methode.eyebrow': 'Comment on travaille',
      'methode.title': 'Notre méthode',
      'methode.step1.title': 'Diagnostic',
      'methode.step1.desc': 'On comprend votre business et vos douleurs réelles avant de parler solution.',
      'methode.step2.title': 'Design',
      'methode.step2.desc': 'On conçoit une solution IA taillée sur mesure pour votre contexte.',
      'methode.step3.title': 'Build',
      'methode.step3.desc': 'On développe, on teste, on itère avec vous à chaque étape.',
      'methode.step4.title': 'Measure',
      'methode.step4.desc': 'On mesure les résultats, on ajuste, on scale ce qui fonctionne.',

      'apropos.eyebrow': 'Qui je suis',
      'apropos.title': 'À propos d’Ily Consulting IA',
      'apropos.p1': 'Fondé par Sekouane Islam Imad eddine, Ily Consulting IA accompagne des entreprises algériennes et européennes dans leurs projets d’intelligence artificielle appliquée.',
      'apropos.vision': '« Rendre l’IA accessible et utile pour les entreprises qui veulent des résultats mesurables, sans jargon ni promesses vides. »',
      'apropos.value1': 'Pragmatisme',
      'apropos.value2': 'Transparence',
      'apropos.value3': 'Résultats mesurables',
      'apropos.location': 'Basé à Oran, j’accompagne des clients au Maghreb et en Europe.',

      'faq.eyebrow': 'Questions fréquentes',
      'faq.title': 'FAQ',
      'faq.q1': 'Quels types d’entreprises accompagnez-vous ?',
      'faq.a1': 'Des PME et ETI en Algérie, au Maghreb et en Europe francophone, tous secteurs confondus, dès lors qu’il y a un vrai process à automatiser ou à outiller.',
      'faq.q2': 'Quel est un engagement type ?',
      'faq.a2': 'Ça commence toujours par un échange gratuit de 30 minutes pour cadrer le besoin, puis un audit court avant de démarrer un projet. Durée et livrables varient selon le périmètre, définis ensemble dès le départ.',
      'faq.q3': 'Combien coûte un projet ?',
      'faq.a3': 'Ça dépend entièrement du périmètre. Pas de catalogue de prix figé à ce stade : on en discute lors de l’échange initial, une fois le besoin clair.',
      'faq.q4': 'Où sont stockées les données ?',
      'faq.a4': 'La souveraineté des données est prise au sérieux, en conformité avec la loi 25-11 algérienne sur la protection des données personnelles. L’hébergement est discuté selon le projet et vos contraintes.',
      'faq.q5': 'Comment se déroule un projet du début à la fin ?',
      'faq.a5': 'Diagnostic, design, build, measure : on avance par itérations courtes, avec des points réguliers, plutôt qu’une livraison unique à la fin.',
      'faq.q6': 'Travaillez-vous avec des entreprises hors d’Algérie ?',
      'faq.a6': 'Oui, notamment au Maghreb et en Europe francophone. Les échanges et le travail se font à distance, avec des déplacements possibles selon le projet.',

      'cta.title': 'Prêt à passer de la théorie aux résultats ?',
      'cta.subtitle': 'Discutons de votre projet lors d’un échange gratuit de 30 minutes.',
      'cta.form.name': 'Nom',
      'cta.form.email': 'Email',
      'cta.form.company': 'Entreprise',
      'cta.form.message': 'Message',
      'cta.form.submit': 'Envoyer ma demande',
      'cta.form.note': 'Réponse sous 24h ouvrées.',
      'cta.whatsapp': 'Écrire sur WhatsApp',
      'cta.calendar': 'Prendre RDV directement',
      'cta.soon': 'Bientôt disponible',

      'footer.tagline': 'L’IA appliquée aux vrais problèmes de votre entreprise.',
      'footer.nav': 'Navigation',
      'footer.contact': 'Contact',
      'footer.resources': 'Ressources',
      'footer.blogSoon': 'Blog — à venir',
      'footer.legal': 'Fondé par Sekouane Islam Imad eddine — Oran, Algérie — © 2026 Ily Consulting IA'
    },
    en: {
      'nav.services': 'Services',
      'nav.methode': 'Method',
      'nav.apropos': 'About',
      'nav.contact': 'Contact',
      'nav.faq': 'FAQ',
      'nav.cta': "Let's discuss your project",

      'hero.eyebrow': 'AI Consultant — Oran, Algeria',
      'hero.title': 'AI applied to your business’s real problems',
      'hero.subtitle': 'Strategy, development and training. For SMEs and mid-sized companies in Algeria, the Maghreb and Europe.',
      'hero.ctaPrimary': 'Book a free consultation',
      'hero.ctaSecondary': 'Explore our services',

      'trust.text': 'Based in Oran, supporting businesses across Algeria, the Maghreb and Europe',
      'trust.placeholder': 'Trusted clients coming soon',

      'services.eyebrow': 'What we do',
      'services.title': 'Our services',
      'services.lead': 'Two ways to work together, depending on where you stand with AI.',
      'services.conseil.title': 'Consulting',
      'services.conseil.card1.title': 'AI audit & diagnosis',
      'services.conseil.card1.desc': 'Analysis of your digital maturity and identification of concrete automation opportunities.',
      'services.conseil.card2.title': 'Custom development',
      'services.conseil.card2.desc': 'AI agents and automations built for your real processes, not generic templates.',
      'services.conseil.card3.title': 'Strategic support',
      'services.conseil.card3.desc': 'A 3-6 month roadmap and support through change management.',
      'services.conseil.card4.title': 'Data & Analytics',
      'services.conseil.card4.desc': 'AI dashboards and decision-making reporting to run your business on reliable data.',
      'services.formation.title': 'Training',
      'services.formation.card1.title': 'Introduction',
      'services.formation.card1.desc': 'Your teams discover generative AI (Claude, ChatGPT) and its first concrete uses.',
      'services.formation.card2.title': 'Advanced',
      'services.formation.card2.desc': 'Expert prompting and automated workflows for users already comfortable with AI.',
      'services.formation.card3.title': 'Executives',
      'services.formation.card3.desc': 'Understand the strategic stakes of AI for decision-making, in a dedicated session.',

      'methode.eyebrow': 'How we work',
      'methode.title': 'Our method',
      'methode.step1.title': 'Diagnose',
      'methode.step1.desc': 'We understand your business and its real pain points before talking solutions.',
      'methode.step2.title': 'Design',
      'methode.step2.desc': 'We design an AI solution tailored to your context.',
      'methode.step3.title': 'Build',
      'methode.step3.desc': 'We develop, test and iterate with you at every step.',
      'methode.step4.title': 'Measure',
      'methode.step4.desc': 'We measure results, adjust, and scale what works.',

      'apropos.eyebrow': 'Who I am',
      'apropos.title': 'About Ily Consulting IA',
      'apropos.p1': 'Founded by Sekouane Islam Imad eddine, Ily Consulting IA supports Algerian and European businesses in their applied AI projects.',
      'apropos.vision': '"Making AI accessible and useful for businesses that want measurable results, without jargon or empty promises."',
      'apropos.value1': 'Pragmatism',
      'apropos.value2': 'Transparency',
      'apropos.value3': 'Measurable results',
      'apropos.location': 'Based in Oran, I work with clients across the Maghreb and Europe.',

      'faq.eyebrow': 'Frequently asked questions',
      'faq.title': 'FAQ',
      'faq.q1': 'What kind of businesses do you work with?',
      'faq.a1': 'SMEs and mid-sized companies in Algeria, the Maghreb and French-speaking Europe, any sector, as long as there’s a real process to automate or support.',
      'faq.q2': 'What does a typical engagement look like?',
      'faq.a2': 'It always starts with a free 30-minute call to scope the need, then a short audit before starting a project. Duration and deliverables vary by scope, defined together from the start.',
      'faq.q3': 'How much does a project cost?',
      'faq.a3': 'It fully depends on scope. No fixed price list at this stage: we discuss it during the initial call, once the need is clear.',
      'faq.q4': 'Where is data stored?',
      'faq.a4': 'Data sovereignty is taken seriously, in line with Algeria’s 25-11 personal data protection law. Hosting is discussed per project and your constraints.',
      'faq.q5': 'How does a project run from start to finish?',
      'faq.a5': 'Diagnose, design, build, measure: we move in short iterations, with regular checkpoints, rather than one single delivery at the end.',
      'faq.q6': 'Do you work with companies outside Algeria?',
      'faq.a6': 'Yes, notably in the Maghreb and French-speaking Europe. Work happens remotely, with travel possible depending on the project.',

      'cta.title': 'Ready to move from theory to results?',
      'cta.subtitle': 'Let’s discuss your project during a free 30-minute call.',
      'cta.form.name': 'Name',
      'cta.form.email': 'Email',
      'cta.form.company': 'Company',
      'cta.form.message': 'Message',
      'cta.form.submit': 'Send my request',
      'cta.form.note': 'Response within 24 business hours.',
      'cta.whatsapp': 'Message on WhatsApp',
      'cta.calendar': 'Book directly',
      'cta.soon': 'Coming soon',

      'footer.tagline': 'AI applied to your business’s real problems.',
      'footer.nav': 'Navigation',
      'footer.contact': 'Contact',
      'footer.resources': 'Resources',
      'footer.blogSoon': 'Blog — coming soon',
      'footer.legal': 'Founded by Sekouane Islam Imad eddine — Oran, Algeria — © 2026 Ily Consulting IA'
    }
  };

  var STORAGE_KEY = 'ily-lang';

  function getLang() {
    return localStorage.getItem(STORAGE_KEY) || 'fr';
  }

  function splitIntoWords(el, text) {
    if (!el) return;
    el.innerHTML = '';
    var words = text.split(' ');
    words.forEach(function (word, i) {
      var span = document.createElement('span');
      span.className = 'word';
      span.style.animationDelay = (0.15 + i * 0.06) + 's';
      span.textContent = word;
      el.appendChild(span);
      if (i < words.length - 1) {
        el.appendChild(document.createTextNode(' '));
      }
    });
  }

  function applyLang(lang) {
    var dict = translations[lang] || translations.fr;
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key]) el.textContent = dict[key];
    });

    document.querySelectorAll('[data-i18n-split]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-split');
      var text = dict[key];
      if (text) splitIntoWords(el, text);
    });

    document.querySelectorAll('.lang-option').forEach(function (el) {
      el.classList.toggle('is-active', el.getAttribute('data-lang') === lang);
    });

    localStorage.setItem(STORAGE_KEY, lang);
  }

  /* ===== Header scroll state ===== */
  function initHeaderScroll() {
    var header = document.getElementById('site-header');
    if (!header) return;
    function onScroll() {
      header.classList.toggle('is-scrolled', window.scrollY > 12);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ===== Mobile nav ===== */
  function initMobileNav() {
    var burger = document.getElementById('nav-burger');
    var nav = document.getElementById('main-nav');
    if (!burger || !nav) return;
    burger.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('is-open');
      burger.classList.toggle('is-open', isOpen);
      burger.setAttribute('aria-expanded', String(isOpen));
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        burger.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ===== Reveal on scroll ===== */
  function initReveal() {
    var els = document.querySelectorAll('.reveal, .heading-split');
    if (!('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    // Set --stagger-i custom property on grid children for .reveal elements
    document.querySelectorAll('.service-cards .reveal, .service-cards-3 .reveal, .methode-steps .reveal').forEach(function (el) {
      var index = Array.from(el.parentNode.children).indexOf(el);
      el.style.setProperty('--stagger-i', index);
    });

    els.forEach(function (el) { observer.observe(el); });
  }

  /* ===== FAQ accordion ===== */
  function initFaq() {
    document.querySelectorAll('.faq-item').forEach(function (item) {
      var question = item.querySelector('.faq-question');
      var answer = item.querySelector('.faq-answer');
      question.addEventListener('click', function () {
        var isOpen = item.classList.contains('is-open');
        document.querySelectorAll('.faq-item.is-open').forEach(function (openItem) {
          if (openItem !== item) {
            openItem.classList.remove('is-open');
            openItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
            openItem.querySelector('.faq-answer').style.maxHeight = null;
          }
        });
        item.classList.toggle('is-open', !isOpen);
        question.setAttribute('aria-expanded', String(!isOpen));
        answer.style.maxHeight = !isOpen ? answer.scrollHeight + 'px' : null;
      });
    });
  }

  /* ===== Magnetic buttons ===== */
  function initMagnetic() {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    document.querySelectorAll('.magnetic').forEach(function (btn) {
      btn.addEventListener('mousemove', function (e) {
        var rect = btn.getBoundingClientRect();
        var x = e.clientX - rect.left - rect.width / 2;
        var y = e.clientY - rect.top - rect.height / 2;
        btn.style.setProperty('--magnet-x', (x * 0.12) + 'px');
        btn.style.setProperty('--magnet-y', (y * 0.25) + 'px');
      });
      btn.addEventListener('mouseleave', function () {
        btn.style.removeProperty('--magnet-x');
        btn.style.removeProperty('--magnet-y');
      });
    });
  }

  /* ===== Lang toggle ===== */
  function initLangToggle() {
    var toggle = document.getElementById('lang-toggle');
    if (!toggle) return;
    toggle.addEventListener('click', function () {
      var next = getLang() === 'fr' ? 'en' : 'fr';
      applyLang(next);
    });
  }

  /* ===== Smooth scroll (Lenis) + parallax discret sur le hero ===== */
  function initSmoothScroll() {
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || typeof Lenis === 'undefined') return;

    var lenis = new Lenis({
      duration: 1.1,
      easing: function (t) { return Math.min(1, 1.001 - Math.pow(2, -10 * t)); }
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    var heroVisual = document.querySelector('.hero-visual');
    lenis.on('scroll', function (e) {
      if (!heroVisual) return;
      var offset = Math.min(e.scroll * 0.15, 120);
      heroVisual.style.transform = 'translateY(' + offset + 'px)';
    });

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        var id = link.getAttribute('href');
        if (id.length <= 1) return;
        var target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        lenis.scrollTo(target, { offset: -70 });
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    applyLang(getLang());
    initHeaderScroll();
    initMobileNav();
    initReveal();
    initFaq();
    initMagnetic();
    initLangToggle();
    initSmoothScroll();
  });
})();
