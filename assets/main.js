// 土俵際 — static site interactions (framework-free)
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('body *').forEach(function (element) {
    if (element.children.length === 0 && element.textContent.trim() === '道') {
      element.remove();
    }
  });

  var ICON_MENU =
    '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>';
  var ICON_X =
    '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>';

  // --- Scroll reveal (replaces framer-motion) ---
  var revealEls = Array.prototype.slice
    .call(document.querySelectorAll('[style]'))
    .filter(function (el) {
      return el.style.opacity === '0';
    });

  // Per-sibling stagger for a subtle cascade
  revealEls.forEach(function (el) {
    var sibs = revealEls.filter(function (s) {
      return s.parentElement === el.parentElement;
    });
    el.dataset.revealDelay = Math.min(sibs.indexOf(el), 8) * 80 + 'ms';
    el.style.willChange = 'opacity, transform';
  });

  function reveal(el) {
    if (!reduceMotion) {
      el.style.transition =
        'opacity .9s cubic-bezier(.25,.1,.25,1), transform .9s cubic-bezier(.25,.1,.25,1)';
      el.style.transitionDelay = el.dataset.revealDelay || '0ms';
    }
    el.style.opacity = '1';
    el.style.transform = 'none';
  }

  if ('IntersectionObserver' in window && !reduceMotion) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            reveal(e.target);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    revealEls.forEach(function (el) {
      io.observe(el);
    });
  } else {
    revealEls.forEach(reveal);
  }

  // --- Sticky header background on scroll ---
  var header = document.getElementById('site-header');
  var heroParallax = document.getElementById('hero-parallax');
  var heroContent = document.getElementById('hero-content');

  function onScroll() {
    var y = window.scrollY || window.pageYOffset;

    if (header) {
      var scrolled = y > 60;
      header.style.backgroundColor = scrolled ? 'rgba(0,0,0,0.9)' : 'transparent';
      header.style.backdropFilter = scrolled ? 'blur(8px)' : 'none';
      header.style.webkitBackdropFilter = scrolled ? 'blur(8px)' : 'none';
      header.style.borderBottom = scrolled
        ? '1px solid rgba(201,169,110,0.15)'
        : 'none';
    }

    if (!reduceMotion) {
      if (heroParallax) {
        var off = Math.min(y * 0.15, 140);
        heroParallax.style.transform = 'translateY(' + off + 'px)';
      }
      if (heroContent) {
        heroContent.style.opacity = String(Math.max(0, 1 - y / 400));
      }
    }
  }

  var ticking = false;
  window.addEventListener(
    'scroll',
    function () {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          onScroll();
          ticking = false;
        });
        ticking = true;
      }
    },
    { passive: true }
  );
  onScroll();

  // --- Scroll indicator ---
  var scrollIndicator = document.getElementById('scroll-indicator');
  if (scrollIndicator) {
    scrollIndicator.addEventListener('click', function () {
      var next = document.querySelector('#introduction');
      if (next) next.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // --- Mobile menu ---
  var menuToggle = document.getElementById('menu-toggle');
  var mobileMenu = document.getElementById('mobile-menu');

  function openMenu() {
    mobileMenu.style.display = 'flex';
    menuToggle.setAttribute('aria-expanded', 'true');
    menuToggle.innerHTML = ICON_X;
  }
  function closeMenu() {
    mobileMenu.style.display = 'none';
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.innerHTML = ICON_MENU;
  }
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function () {
      if (mobileMenu.style.display === 'flex') closeMenu();
      else openMenu();
    });
    mobileMenu.querySelectorAll('[data-mobile-link]').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });
  }

  // --- Gallery lightbox ---
  var galleryItems = [
    ['/images/gallery/photo1.webp', 'ギャラリー1'],
    ['/images/gallery/photo2.webp', 'ギャラリー2'],
    ['/images/gallery/photo3.webp', 'ギャラリー3'],
    ['/images/gallery/photo4.webp', 'ギャラリー4'],
    ['/images/gallery/photo5.webp', 'ギャラリー5'],
    ['/images/gallery/photo6.webp', 'ギャラリー6'],
    ['/images/gallery/photo7.webp', 'ギャラリー7'],
    ['/images/gallery/photo8.webp', 'ギャラリー8']
  ];
  var story = document.getElementById('story');
  var credits = document.getElementById('credits');
  if (story && credits) {
    var existingGallery = document.getElementById('gallery');
    var existingLightbox = document.querySelector('.gallery-modal');
    if (existingGallery) existingGallery.remove();
    if (existingLightbox) existingLightbox.remove();
    var gallery = document.createElement('section');
    gallery.id = 'gallery';
    gallery.className = 'relative px-6 py-24 md:py-32';
    gallery.innerHTML =
      '<div class="max-w-5xl mx-auto"><div class="text-center mb-12"><p class="label-cinematic mb-4">Gallery</p><div class="gold-divider w-16 mx-auto"></div></div><div class="gallery-grid"></div></div>';
    var grid = gallery.querySelector('.gallery-grid');
    galleryItems.forEach(function (item, index) {
      var button = document.createElement('button');
      button.type = 'button';
      button.className = 'gallery-thumb';
      button.dataset.galleryIndex = String(index);
      button.setAttribute('aria-label', item[1] + 'を拡大表示');
      button.innerHTML = '<img src="' + item[0] + '" alt="' + item[1] + '" loading="lazy" decoding="async">';
      grid.appendChild(button);
    });
    credits.parentNode.insertBefore(gallery, credits);

    var lightbox = document.createElement('div');
    lightbox.className = 'gallery-modal';
    lightbox.setAttribute('role', 'dialog');
    lightbox.setAttribute('aria-modal', 'true');
    lightbox.setAttribute('aria-label', 'ギャラリー画像');
    lightbox.innerHTML = '<button type="button" class="gallery-modal-close" aria-label="閉じる">&times;</button><button type="button" class="gallery-modal-arrow gallery-modal-prev" aria-label="前の写真">&#8592;</button><img class="gallery-modal-image" alt=""><button type="button" class="gallery-modal-arrow gallery-modal-next" aria-label="次の写真">&#8594;</button>';
    document.body.appendChild(lightbox);

    var lightboxImage = lightbox.querySelector('.gallery-modal-image');
    var galleryIndex = 0;
    var closeGalleryTimer;
    function showGalleryImage(index) {
      galleryIndex = (index + galleryItems.length) % galleryItems.length;
      lightboxImage.src = galleryItems[galleryIndex][0];
      lightboxImage.alt = galleryItems[galleryIndex][1];
    }
    function closeGallery() {
      clearTimeout(closeGalleryTimer);
      lightbox.classList.remove('is-open');
      lightbox.classList.add('is-closing');
      closeGalleryTimer = setTimeout(function () {
        lightbox.classList.remove('is-closing');
        document.body.style.overflow = '';
      }, 420);
    }
    grid.addEventListener('click', function (event) {
      var button = event.target.closest('.gallery-thumb');
      if (!button) return;
      clearTimeout(closeGalleryTimer);
      showGalleryImage(Number(button.dataset.galleryIndex));
      lightbox.classList.remove('is-closing');
      lightbox.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    });
    lightbox.querySelector('.gallery-modal-close').addEventListener('click', closeGallery);
    lightbox.querySelector('.gallery-modal-prev').addEventListener('click', function () {
      showGalleryImage(galleryIndex - 1);
    });
    lightbox.querySelector('.gallery-modal-next').addEventListener('click', function () {
      showGalleryImage(galleryIndex + 1);
    });
    lightbox.addEventListener('click', function (event) {
      if (event.target === lightbox) closeGallery();
    });
    document.addEventListener('keydown', function (event) {
      if (!lightbox.classList.contains('is-open')) return;
      if (event.key === 'Escape') closeGallery();
      if (event.key === 'ArrowLeft') showGalleryImage(galleryIndex - 1);
      if (event.key === 'ArrowRight') showGalleryImage(galleryIndex + 1);
    });
  }

  // --- Trailer modal ---
  var modal = document.getElementById('trailer-modal');
  var openBtn = document.getElementById('trailer-open');
  var closeBtn = document.getElementById('trailer-close');

  function openModal() {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
  function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }
  if (modal && openBtn) {
    openBtn.addEventListener('click', openModal);
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', function (e) {
      if (e.target === modal) closeModal();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.style.display === 'flex') closeModal();
    });
  }
})();
