/* ═══════════════════════════════════════════════════════════
   Divine Touchh — Main JavaScript
   Handles: scroll progress, navbar scroll effect, hamburger menu,
   intersection observer reveal animations, page transitions,
   and 3D card tilt effect.
   ═══════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ── DOM References ──
  const scrollProgress = document.getElementById('scroll-progress');
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  const navBackdrop = document.getElementById('navBackdrop');
  const pageTransition = document.getElementById('pageTransition');

  // ═══════════════════════════════════════════════════════════
  // SCROLL PROGRESS BAR
  // ═══════════════════════════════════════════════════════════
  function updateScrollProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    scrollProgress.style.width = progress + '%';
  }

  // ═══════════════════════════════════════════════════════════
  // NAVBAR FROSTED GLASS ON SCROLL
  // ═══════════════════════════════════════════════════════════
  function handleNavbarScroll() {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  // Combined scroll handler (throttled with rAF)
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateScrollProgress();
        handleNavbarScroll();
        ticking = false;
      });
      ticking = true;
    }
  });

  // ═══════════════════════════════════════════════════════════
  // HAMBURGER MENU (Mobile)
  // ═══════════════════════════════════════════════════════════
  function toggleMenu() {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
    navBackdrop.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
  }

  hamburger.addEventListener('click', toggleMenu);
  navBackdrop.addEventListener('click', toggleMenu);

  // Close menu when a nav link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks.classList.contains('open')) {
        toggleMenu();
      }
    });
  });

  // ═══════════════════════════════════════════════════════════
  // INTERSECTION OBSERVER — Reveal Animations
  // ═══════════════════════════════════════════════════════════
  const revealElements = document.querySelectorAll('.reveal, .reveal-stagger');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Once revealed, stop observing
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // ═══════════════════════════════════════════════════════════
  // PRODUCT CARD STAGGER — Individual card reveal
  // ═══════════════════════════════════════════════════════════
  const productCards = document.querySelectorAll('.product-card');
  
  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add staggered delay based on position in grid
        const card = entry.target;
        const siblings = Array.from(card.parentElement.children);
        const index = siblings.indexOf(card);
        card.style.transitionDelay = (index * 0.1) + 's';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
        cardObserver.unobserve(card);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -30px 0px'
  });

  productCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(40px)';
    card.style.transition = 'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)';
    cardObserver.observe(card);
  });

  // ═══════════════════════════════════════════════════════════
  // 3D TILT EFFECT — Category & Product Cards
  // ═══════════════════════════════════════════════════════════
  const tiltCards = document.querySelectorAll('.category-card, .product-card');

  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Calculate rotation (limited to ±8deg)
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px) scale(1.02)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease';
    });

    card.addEventListener('mouseenter', () => {
      card.style.transition = 'box-shadow 0.5s ease';
    });
  });

  // ═══════════════════════════════════════════════════════════
  // PAGE TRANSITIONS — Fade out / Fade in
  // ═══════════════════════════════════════════════════════════
  // Links with data-page-link attribute or links to other pages
  const pageLinks = document.querySelectorAll('a[data-page-link], a[href="catalogue.html"], a[href="index.html"]');

  pageLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      
      // If it's a same-page anchor, skip transition
      if (href.startsWith('#')) return;

      // Check if it's actually navigating to a different page
      const currentPage = window.location.pathname.split('/').pop() || 'index.html';
      const targetPage = href.split('#')[0];
      
      if (targetPage && targetPage !== currentPage) {
        e.preventDefault();
        pageTransition.classList.add('active');
        
        setTimeout(() => {
          window.location.href = href;
        }, 500);
      }
    });
  });

  // Fade in on page load
  window.addEventListener('pageshow', () => {
    pageTransition.classList.remove('active');
  });

  // Also remove on initial load (for back/forward cache)
  pageTransition.classList.remove('active');

  // ═══════════════════════════════════════════════════════════
  // SMOOTH SCROLL — Handle hash anchors on page load
  // ═══════════════════════════════════════════════════════════
  if (window.location.hash) {
    // Small delay to allow page to render
    setTimeout(() => {
      const target = document.querySelector(window.location.hash);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 300);
  }

  // ═══════════════════════════════════════════════════════════
  // PARTICLE / FLOATING DOTS (Hero section — subtle effect)
  // ═══════════════════════════════════════════════════════════
  const hero = document.querySelector('.hero');
  if (hero) {
    // Create subtle floating particles
    for (let i = 0; i < 15; i++) {
      const particle = document.createElement('div');
      particle.style.cssText = `
        position: absolute;
        width: ${Math.random() * 4 + 2}px;
        height: ${Math.random() * 4 + 2}px;
        background: var(--gold-shimmer);
        border-radius: 50%;
        opacity: ${Math.random() * 0.25 + 0.05};
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation: particleFloat ${Math.random() * 8 + 6}s ease-in-out infinite;
        animation-delay: ${Math.random() * -10}s;
        pointer-events: none;
      `;
      hero.appendChild(particle);
    }

    // Inject particle keyframes
    const style = document.createElement('style');
    style.textContent = `
      @keyframes particleFloat {
        0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.1; }
        25% { transform: translate(${Math.random() > 0.5 ? '' : '-'}20px, -30px) scale(1.3); opacity: 0.25; }
        50% { transform: translate(${Math.random() > 0.5 ? '' : '-'}10px, -50px) scale(0.8); opacity: 0.15; }
        75% { transform: translate(${Math.random() > 0.5 ? '' : '-'}30px, -20px) scale(1.1); opacity: 0.2; }
      }
    `;
    document.head.appendChild(style);
  }

  // ═══════════════════════════════════════════════════════════
  // ACTIVE NAV LINK HIGHLIGHT (Scroll Spy)
  // ═══════════════════════════════════════════════════════════
  const sections = document.querySelectorAll('section[id]');
  
  function highlightNavLink() {
    const scrollPos = window.scrollY + 120;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        navLinks.querySelectorAll('a').forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + sectionId) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        highlightNavLink();
      });
    }
  });

  // ═══════════════════════════════════════════════════════════
  // FORM — Display only (prevent default)
  // ═══════════════════════════════════════════════════════════
  const form = document.querySelector('.contact__form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      // Visual feedback only
      const btn = form.querySelector('.form-submit-btn');
      const originalText = btn.textContent;
      btn.textContent = 'Thank You!';
      btn.style.background = 'var(--gold-shimmer)';
      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
      }, 2500);
    });
  }

  // ═══════════════════════════════════════════════════════════
  // QUIZ — 3-Step State Machine
  // ═══════════════════════════════════════════════════════════
  const quizContainer = document.getElementById('quizContainer');
  if (quizContainer) {
    const quizSteps    = [
      document.getElementById('quizStep1'),
      document.getElementById('quizStep2'),
      document.getElementById('quizStep3'),
    ];
    const quizResult       = document.getElementById('quizResult');
    const quizProgressBar  = document.getElementById('quizProgressBar');
    const quizStepLabel    = document.getElementById('quizStepLabel');
    const quizResultTitle  = document.getElementById('quizResultTitle');
    const quizResultDesc   = document.getElementById('quizResultDesc');
    const quizResultLink   = document.getElementById('quizResultLink');
    const quizResultIcon   = document.getElementById('quizResultIcon');
    const quizRestartBtn   = document.getElementById('quizRestartBtn');

    let currentStep = 0;
    const answers   = {};

    // Result map: weighted scoring
    const recommendations = {
      chair: {
        icon: '⬛',
        title: 'Massage Chair',
        desc: 'Engineered for absolute bliss — a full-body luxury sanctuary built precisely around your unique physiology. The ultimate home spa experience.',
        link: 'catalogue.html#massage-chairs',
      },
      leg: {
        icon: '◇',
        title: 'Leg Massager',
        desc: 'Targeted pressure therapy for revitalized mobility — expertly designed to restore circulation, ease fatigue, and transform weary legs.',
        link: 'catalogue.html#leg-massagers',
      },
      body: {
        icon: '◎',
        title: 'Body Massager',
        desc: 'Deep tissue precision for whole-body restoration — compact, powerful, and crafted for the discerning individual who demands excellence.',
        link: 'catalogue.html#body-massagers',
      },
    };

    function setStep(stepIndex) {
      // Exit current
      const currentEl = stepIndex === 0
        ? quizSteps[0]
        : (stepIndex <= quizSteps.length ? quizSteps[stepIndex - 1] : quizResult);

      quizSteps.forEach(s => s.classList.remove('active'));
      quizResult.classList.remove('active');

      if (stepIndex < quizSteps.length) {
        quizSteps[stepIndex].classList.add('active');
        quizProgressBar.style.width = ((stepIndex + 1) / quizSteps.length * 100) + '%';
        quizStepLabel.textContent = `Step ${stepIndex + 1} of ${quizSteps.length}`;
        quizProgressBar.parentElement.style.display = '';
        quizStepLabel.style.display = '';
      } else {
        // Show result
        quizProgressBar.style.width = '100%';
        quizStepLabel.style.display = 'none';

        const result = computeResult();
        const rec    = recommendations[result];
        quizResultIcon.textContent  = rec.icon;
        quizResultTitle.textContent = rec.title;
        quizResultDesc.textContent  = rec.desc;
        quizResultLink.setAttribute('href', rec.link);

        quizResult.classList.add('active');
      }
      currentStep = stepIndex;
    }

    function computeResult() {
      // Q1 directly selects primary category
      if (answers[1] === 'chair') return 'chair';
      if (answers[1] === 'leg')   return 'leg';
      // Neck/shoulder => body massager, but Q3 can refine
      if (answers[3] === 'full')      return 'chair';
      if (answers[3] === 'targeted')  return 'leg';
      if (answers[3] === 'portable')  return 'body';
      return 'body';
    }

    // Attach listeners to all quiz buttons
    quizContainer.querySelectorAll('.quiz-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const step  = parseInt(btn.dataset.step, 10);
        const value = btn.dataset.value;
        answers[step] = value;
        setStep(step); // move to next step (step 1 → index 1, etc.)
      });
    });

    // Restart
    quizRestartBtn.addEventListener('click', () => {
      Object.keys(answers).forEach(k => delete answers[k]);
      quizProgressBar.parentElement.style.display = '';
      setStep(0);
    });

    // Init
    setStep(0);
  }

  // ═══════════════════════════════════════════════════════════
  // TESTIMONIALS CAROUSEL
  // ═══════════════════════════════════════════════════════════
  const carousel = document.getElementById('testimonialsCarousel');
  if (carousel) {
    const slides      = carousel.querySelectorAll('.testimonial-slide');
    const dots        = carousel.querySelectorAll('.testimonial-dot');
    const prevBtn     = document.getElementById('testimonialPrev');
    const nextBtn     = document.getElementById('testimonialNext');
    let currentSlide  = 0;
    let autoTimer     = null;

    function goToSlide(index) {
      slides[currentSlide].classList.remove('active');
      dots[currentSlide].classList.remove('active');

      currentSlide = (index + slides.length) % slides.length;

      slides[currentSlide].classList.add('active');
      dots[currentSlide].classList.add('active');

      // Re-trigger accent line animation by removing/adding class
      const accLine = slides[currentSlide].querySelector('.testimonial__accent-line');
      if (accLine) {
        accLine.style.width = '0';
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            accLine.style.width = '80px';
          });
        });
      }
    }

    function startAuto() {
      autoTimer = setInterval(() => goToSlide(currentSlide + 1), 5000);
    }

    function stopAuto() {
      clearInterval(autoTimer);
    }

    prevBtn.addEventListener('click', () => { stopAuto(); goToSlide(currentSlide - 1); startAuto(); });
    nextBtn.addEventListener('click', () => { stopAuto(); goToSlide(currentSlide + 1); startAuto(); });

    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        stopAuto();
        goToSlide(parseInt(dot.dataset.index, 10));
        startAuto();
      });
    });

    // Pause on hover
    carousel.addEventListener('mouseenter', stopAuto);
    carousel.addEventListener('mouseleave', startAuto);

    // Init accent line for first slide
    const firstAccLine = slides[0].querySelector('.testimonial__accent-line');
    if (firstAccLine) {
      setTimeout(() => { firstAccLine.style.width = '80px'; }, 600);
    }

    startAuto();
  }

  // ═══════════════════════════════════════════════════════════
  // LOOKBOOK FORM — Display only, visual feedback
  // ═══════════════════════════════════════════════════════════
  const lookbookForm = document.getElementById('lookbookForm');
  if (lookbookForm) {
    lookbookForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn          = document.getElementById('lookbookSubmitBtn');
      const emailInput   = document.getElementById('lookbookEmail');
      const originalText = btn.textContent;

      btn.textContent        = '✦ Lookbook Sent!';
      btn.style.background   = 'var(--gold-shimmer)';
      btn.style.color        = 'var(--espresso)';
      emailInput.value       = '';
      emailInput.disabled    = true;
      btn.disabled           = true;

      setTimeout(() => {
        btn.textContent      = originalText;
        btn.style.background = '';
        btn.style.color      = '';
        emailInput.disabled  = false;
        btn.disabled         = false;
      }, 3000);
    });
  }

  // Initial calls
  updateScrollProgress();
  handleNavbarScroll();
});
