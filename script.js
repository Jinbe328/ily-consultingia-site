(function () {
  'use strict';

  /* =====================================================================
     i18n : le français est la source de vérité dans le HTML.
     Au chargement, on capture chaque texte [data-i18n] comme dictionnaire FR,
     puis on applique l'anglais depuis le dictionnaire ci-dessous.
     Une clé absente en EN retombe sur le FR.
     ===================================================================== */
  var STORAGE_KEY = 'ily-lang';
  var fr = {};
  var en = {
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.method': 'Method',
    'nav.case': 'Case studies',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'cta.main': 'Get my AI assessment',
    'cta.how': 'See how it works',

    'hero.label': 'Business × Data × AI',
    'hero.t1': 'AI should save you time.',
    'hero.t2': 'Not give you more work.',
    'hero.sub': 'Ily Consulting helps SMEs identify, automate and measure the processes that can genuinely be improved with artificial intelligence.',
    'chain.1': 'AI assessment',
    'chain.2': 'Automation',
    'chain.3': 'Data',
    'chain.4': 'Steering',
    'panel.title': 'Process mapping',
    'panel.tag': 'AI assessment',
    'panel.r1': 'Weekly reporting',
    'panel.r2': 'Order entry',
    'panel.r3': 'Lead follow-up',
    'panel.r4': 'Contract approval',
    'panel.s1': 'Automatable',
    'panel.s2': 'Partially',
    'panel.s3': 'Stays manual',
    'float.1': 'Fewer repetitive tasks.',
    'float.2': 'More time for what matters.',

    'pb.title': 'How much time does your company lose on tasks that could be automated?',
    'pb.lead': 'These tasks don’t necessarily have to disappear. They need to be analysed to determine which ones can be automated without degrading quality.',
    'pb.1': 'Manual reporting',
    'pb.2': 'Repetitive data entry',
    'pb.3': 'Document processing',
    'pb.4': 'Lead tracking',
    'pb.5': 'Repetitive replies',
    'pb.6': 'Information extraction',
    'pb.7': 'Report creation',
    'pb.8': 'Data consolidation',

    'sv.label': 'Our core services',
    'sv.title': 'Concrete solutions for your business',
    'sv.1.title': 'AI Assessment',
    'sv.1.tag': 'Identify the opportunities before investing.',
    'sv.1.a': 'Process analysis',
    'sv.1.b': 'Identification of repetitive tasks',
    'sv.1.c': 'Automation opportunities',
    'sv.1.d': 'Prioritisation and potential estimate',
    'sv.1.e': 'Roadmap',
    'sv.1.cta': 'Discover the assessment',
    'sv.2.title': 'AI Automation',
    'sv.2.tag': 'Turn an identified opportunity into an operational solution.',
    'sv.2.a': 'Automated workflows',
    'sv.2.b': 'Document processing',
    'sv.2.c': 'AI assistants',
    'sv.2.d': 'CRM automation',
    'sv.2.e': 'Automated reporting',
    'sv.2.f': 'Tool integration',
    'sv.2.cta': 'See what’s possible',
    'sv.3.title': 'Data & Analytics',
    'sv.3.tag': 'Turn your data into decisions.',
    'sv.3.a': 'Dashboards and KPIs',
    'sv.3.b': 'Power BI',
    'sv.3.c': 'Automated reporting',
    'sv.3.d': 'Sales analysis',
    'sv.3.e': 'Forecasts and trends',
    'sv.3.cta': 'Explore Data & Analytics',

    'cs.label': 'Case study — demonstration',
    'cs.title': 'An Ily Consulting project, concretely',
    'cs.lead': 'An illustrative example built to show the approach. It does not correspond to a real client and shows no figures.',
    'cs.badge': 'Case study — demonstration',
    'cs.sector': 'Laboratory / healthcare SME',
    'cs.sit': 'Starting point',
    'cs.s1': 'Several products',
    'cs.s2': 'Scattered sales data',
    'cs.s3': 'No structured CRM',
    'cs.s4': 'Manual reporting',
    'cs.s5': 'Low visibility on performance',
    'cs.p1.t': 'Analysis',
    'cs.p1.d': 'Process mapping and identification of repetitive tasks.',
    'cs.p2.t': 'Solution',
    'cs.p2.d': 'Structured CRM, automated reporting, sales dashboard and internal AI assistant.',
    'cs.p3.t': 'Measurable objectives',
    'cs.o1': 'Reduce time spent on reporting',
    'cs.o2': 'Improve sales visibility',
    'cs.o3': 'Centralise data',
    'cs.o4': 'Speed up specific tasks',
    'cs.o5': 'Improve lead follow-up',

    'mt.label': 'Method',
    'mt.title': 'A structured, pragmatic approach',
    'mt.1.t': 'Understand',
    'mt.1.d': 'We analyse your business and your processes.',
    'mt.2.t': 'Identify',
    'mt.2.d': 'We look for the tasks where AI can genuinely add value.',
    'mt.3.t': 'Prioritise',
    'mt.3.d': 'We rank opportunities by impact, cost, complexity and feasibility.',
    'mt.4.t': 'Build',
    'mt.4.d': 'We develop or integrate the right solution.',
    'mt.5.t': 'Measure',
    'mt.5.d': 'We track the indicators that show whether it worked.',

    'wh.label': 'Why Ily Consulting',
    'wh.title': 'A business-first approach',
    'wh.1': 'Understand the problem before choosing the tool.',
    'wh.2': 'Measure performance and use the data you already have.',
    'wh.3': 'Automate only when it brings real value.',
    'wh.4.tag': 'Measurement',
    'wh.4': 'Define indicators to evaluate the result.',

    'ab.label': 'About',
    'ab.t1': 'I don’t start with the technology.',
    'ab.t2': 'I start with your business problem.',
    'ab.p1': 'Sales experience taught me one thing: a technology has no value if it doesn’t solve a concrete problem.',
    'ab.p2': 'Ily Consulting combines an understanding of business processes, data and artificial intelligence to build solutions that are genuinely useful to companies.',
    'ab.cta': 'More about my background',
    'ab.bio1': 'As a field sales rep in the pharmaceutical sector, I built my first AI tools to solve my own problems: portfolio tracking, reporting, order entry.',
    'ab.bio2': 'That user-side, on-the-ground experience guides every Ily Consulting project: start from the real work, not from the tool.',
    'ab.role': 'Founder, Ily Consulting',
    'ab.loc': 'Oran, Algeria',

    'fq.label': 'FAQ',
    'fq.title': 'Your questions, our answers',
    'fq.q1': 'How long does an AI assessment take?',
    'fq.a1': 'It depends on the size of the company and the number of processes to analyse. It always starts with a 30-minute call, followed by an observation phase of your processes, and ends with a prioritised roadmap. The exact duration is set together during the first call.',
    'fq.q2': 'Do you only work with SMEs?',
    'fq.a2': 'SMEs are our core focus, but the method applies to any organisation with repetitive processes to analyse: practices, independent professionals, or the sales and admin teams of larger companies.',
    'fq.q3': 'Which tools do you use?',
    'fq.a3': 'The ones that fit the need: AI models (Claude, GPT), automation tools (n8n), Power BI for data, and your existing tools (Google Workspace, Excel, CRM, WhatsApp). The tool is chosen after the assessment, never before.',
    'fq.q4': 'How does a project run?',
    'fq.a4': 'In five steps: understand, identify, prioritise, build, measure. We move in short iterations with regular check-ins, so you see the solution evolve instead of waiting for a final delivery.',
    'fq.q5': 'Is training included?',
    'fq.a5': 'Yes. Every delivered solution comes with hands-on onboarding for the teams who use it. A solution nobody uses has no value, so training is part of the project.',
    'fq.q6': 'Can AI be integrated into my current tools?',
    'fq.a6': 'In the vast majority of cases, yes. The goal is to plug into your existing tools (messaging, spreadsheets, CRM, business software) rather than replace them. The assessment checks this precisely before any development.',

    'ct.title': 'Let’s talk about your project.',
    'ct.lead': '30 minutes. No commitment. I help you identify the automation opportunities in your company.',
    'ct.wa': 'Message directly',
    'ct.soon': 'Soon',
    'ct.f.name': 'Name',
    'ct.f.email': 'Work email',
    'ct.f.company': 'Company',
    'ct.f.message': 'Which tasks take up most of your time today?',
    'ct.f.note': 'Reply within 24 business hours. Your information is never shared.',

    'ft.desc': 'AI assessment, automation and data analytics for SMEs. We start with your problem, not with the tool.',
    'ft.loc': 'Oran, Algeria',
    'ft.copy': '© 2026 Ily Consulting. All rights reserved.',
    'ft.founder': 'Founded by Sekouane Islam Imad eddine'
  };

  var i18nNodes = [];

  function captureFrench() {
    i18nNodes = Array.prototype.slice.call(document.querySelectorAll('[data-i18n]'));
    i18nNodes.forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (!(key in fr)) fr[key] = el.textContent;
    });
  }

  function getLang() {
    try { return localStorage.getItem(STORAGE_KEY) || 'fr'; } catch (e) { return 'fr'; }
  }

  function applyLang(lang) {
    var dict = lang === 'en' ? en : fr;
    i18nNodes.forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var text = dict[key] != null ? dict[key] : fr[key];
      if (text != null && el.textContent !== text) el.textContent = text;
    });
    document.documentElement.lang = lang;
    document.querySelectorAll('.lang-option').forEach(function (el) {
      el.classList.toggle('is-active', el.getAttribute('data-lang') === lang);
    });
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* stockage indisponible : on ignore */ }
    // Les réponses FAQ ouvertes doivent se réajuster à la nouvelle hauteur du texte
    document.querySelectorAll('.faq-item.is-open .faq-answer').forEach(function (a) {
      a.style.maxHeight = a.scrollHeight + 'px';
    });
  }

  function initLangToggle() {
    var toggle = document.getElementById('lang-toggle');
    if (!toggle) return;
    toggle.addEventListener('click', function () {
      applyLang(getLang() === 'fr' ? 'en' : 'fr');
    });
  }

  /* ===== Header : état scrollé + lien actif ===== */
  function initHeader() {
    var header = document.getElementById('site-header');
    if (!header) return;
    function onScroll() { header.classList.toggle('is-scrolled', window.scrollY > 8); }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    var links = Array.prototype.slice.call(document.querySelectorAll('.main-nav > a[href^="#"]'));
    var sections = links.map(function (a) { return document.querySelector(a.getAttribute('href')); }).filter(Boolean);
    if (!('IntersectionObserver' in window) || !sections.length) return;

    var current = null;
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) current = entry.target.id;
      });
      links.forEach(function (a) {
        a.classList.toggle('is-active', a.getAttribute('href') === '#' + current);
      });
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });
    sections.forEach(function (s) { spy.observe(s); });
  }

  /* ===== Navigation mobile ===== */
  function initMobileNav() {
    var burger = document.getElementById('nav-burger');
    var nav = document.getElementById('main-nav');
    if (!burger || !nav) return;

    function setOpen(open) {
      nav.classList.toggle('is-open', open);
      burger.classList.toggle('is-open', open);
      burger.setAttribute('aria-expanded', String(open));
      burger.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
      document.body.style.overflow = open ? 'hidden' : '';
    }
    burger.addEventListener('click', function () { setOpen(!nav.classList.contains('is-open')); });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () { setOpen(false); });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) { setOpen(false); burger.focus(); }
    });
    window.matchMedia('(min-width: 1024px)').addEventListener('change', function (e) {
      if (e.matches) setOpen(false);
    });
  }

  /* ===== Reveal au scroll (avec cascade sur les grilles .stagger) ===== */
  function initReveal() {
    var els = document.querySelectorAll('.reveal');
    document.querySelectorAll('.stagger').forEach(function (grid) {
      Array.prototype.forEach.call(grid.children, function (child, i) {
        child.style.setProperty('--i', i);
      });
    });
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
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach(function (el) { observer.observe(el); });
  }

  /* ===== FAQ accordéon ===== */
  function initFaq() {
    var items = document.querySelectorAll('.faq-item');
    items.forEach(function (item) {
      var question = item.querySelector('.faq-question');
      var answer = item.querySelector('.faq-answer');
      if (!question || !answer) return;
      question.addEventListener('click', function () {
        var willOpen = !item.classList.contains('is-open');
        items.forEach(function (other) {
          if (other === item) return;
          other.classList.remove('is-open');
          other.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
          other.querySelector('.faq-answer').style.maxHeight = null;
        });
        item.classList.toggle('is-open', willOpen);
        question.setAttribute('aria-expanded', String(willOpen));
        answer.style.maxHeight = willOpen ? answer.scrollHeight + 'px' : null;
      });
    });
  }

  /* ===== À propos : parcours dépliable ===== */
  function initBio() {
    var toggle = document.getElementById('bio-toggle');
    var more = document.getElementById('bio-more');
    if (!toggle || !more) return;
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      more.hidden = open;
    });
  }

  /* ===== Formulaire : envoi Formspree sans rechargement, avec retour visuel ===== */
  function initForm() {
    var form = document.getElementById('contact-form');
    var status = document.getElementById('form-status');
    if (!form || !status) return;

    var msgs = {
      fr: {
        invalid: 'Merci de remplir les champs obligatoires avec une adresse email valide.',
        sending: 'Envoi en cours…',
        ok: 'Merci, votre demande est bien envoyée. Réponse sous 24h ouvrées.',
        error: 'L’envoi a échoué. Écrivez-nous directement à islem@ily-consultingia.com.'
      },
      en: {
        invalid: 'Please fill in the required fields with a valid email address.',
        sending: 'Sending…',
        ok: 'Thank you, your request has been sent. Reply within 24 business hours.',
        error: 'Sending failed. Email us directly at islem@ily-consultingia.com.'
      }
    };
    function t(key) { return (msgs[getLang()] || msgs.fr)[key]; }
    function setStatus(text, kind) {
      status.textContent = text;
      status.className = 'form-status' + (kind ? ' is-' + kind : '');
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var valid = true;
      form.querySelectorAll('[required]').forEach(function (field) {
        var ok = field.value.trim() !== '' && (field.type !== 'email' || field.checkValidity());
        field.setAttribute('aria-invalid', String(!ok));
        if (!ok) valid = false;
      });
      if (!valid) { setStatus(t('invalid'), 'error'); return; }

      var button = form.querySelector('button[type="submit"]');
      button.disabled = true;
      setStatus(t('sending'), '');

      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      }).then(function (res) {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        form.reset();
        setStatus(t('ok'), 'ok');
      }).catch(function () {
        setStatus(t('error'), 'error');
      }).finally(function () {
        button.disabled = false;
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    captureFrench();
    applyLang(getLang());
    initLangToggle();
    initHeader();
    initMobileNav();
    initReveal();
    initFaq();
    initBio();
    initForm();
  });
})();
