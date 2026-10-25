/**
 * SmileCare Dental & Orthodontic Centre - Main Application Engine
 * Pure Vanilla JavaScript, Modular, Accessible, Zero Dependencies
 */

(function () {
  'use strict';

  // State Management
  const state = {
    lang: localStorage.getItem('smilecare_lang') || 'bn',
    currentGalleryCaseIndex: 0,
    currentReviewIndex: 0,
    activePricingCategoryIndex: 0,
    reviewsPerView: 3
  };

  // Convert English digits to Bengali digits
  function toBengaliNumerals(str) {
    if (str === null || str === undefined) return '';
    const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    return String(str).replace(/[0-9]/g, function (d) {
      return bnDigits[parseInt(d, 10)];
    });
  }

  // Format Price in BDT (৳) with proper localized numerals and thousands separator
  function formatPrice(amount, lang) {
    if (typeof amount !== 'number') return amount;
    const formattedNum = amount.toLocaleString('en-US');
    if (lang === 'bn') {
      return '৳ ' + toBengaliNumerals(formattedNum);
    }
    return '৳ ' + formattedNum;
  }

  // Format any string with numbers according to language
  function localizeNumbers(text, lang) {
    if (lang === 'bn') {
      return toBengaliNumerals(text);
    }
    return text;
  }

  // Get active translation dictionary
  function getT() {
    return CLINIC_CONFIG.translations[state.lang] || CLINIC_CONFIG.translations.en;
  }

  // Built-in Crisp SVG Icon Library (Zero network latency, 100% offline & file:// compatible)
  function getIcon(name, customClass = '') {
    const cls = `svg-icon ${customClass}`;
    const icons = {
      // General Dental & Medical
      tooth: `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C7 2 4 5 4 10c0 4 1.5 8 2.5 11 1 3 3 3 4 .5 1-2.5 1-2.5 1.5-2.5s.5 0 1.5 2.5c1 2.5 3 2.5 4-.5 1-3 2.5-7 2.5-11 0-5-3-8-8-8z"/><path d="M9 7c1-1 3-1 3 1"/></svg>`,
      cleaning: `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"/><circle cx="12" cy="12" r="4"/></svg>`,
      'root-canal': `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C7 2 4 5 4 10c0 4 1.5 8 2.5 11 1 3 3 3 4 .5 1-2.5 1-2.5 1.5-2.5s.5 0 1.5 2.5c1 2.5 3 2.5 4-.5 1-3 2.5-7 2.5-11 0-5-3-8-8-8z"/><path d="M12 6v6m-2 4l2 2 2-2"/></svg>`,
      braces: `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="18" height="8" rx="2"/><path d="M7 8v8m5-8v8m5-8v8M2 12h20"/></svg>`,
      whitening: `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l2.4 5.6L20 10l-5.6 2.4L12 18l-2.4-5.6L4 10l5.6-2.4z"/><path d="M18 16l1.2 2.8L22 20l-2.8 1.2L18 24l-1.2-2.8L14 20l2.8-1.2z"/></svg>`,
      implant: `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3h10v5H7z"/><path d="M9 8v3m6-3v3M8 11h8m-7 3h6m-5 3h4m-3 3h2"/></svg>`,
      crown: `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 8l4 12h12l4-12-5 4-5-8-5 8z"/><circle cx="12" cy="4" r="1"/><circle cx="4" cy="8" r="1"/><circle cx="20" cy="8" r="1"/></svg>`,
      pediatric: `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/></svg>`,
      extraction: `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
      'wisdom-surgery': `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C7 2 4 5 4 10c0 4 1.5 8 2.5 11 1 3 3 3 4 .5 1-2.5 1-2.5 1.5-2.5s.5 0 1.5 2.5c1 2.5 3 2.5 4-.5 1-3 2.5-7 2.5-11 0-5-3-8-8-8z"/><path d="M9 12h6M12 9v6"/></svg>`,
      emergency: `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`,
      // Why Us
      sterilization: `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>`,
      technology: `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
      specialists: `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
      pricing: `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>`,
      schedule: `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
      // UI & Communication
      phone: `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
      whatsapp: `<svg class="${cls}" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.78 14.07c-.24.68-1.4 1.26-1.92 1.34-.52.08-1.18.12-3.8-1-2.91-1.24-4.82-4.22-4.97-4.42-.15-.2-1.19-1.58-1.19-3.02 0-1.43.75-2.14 1.02-2.43.27-.29.59-.36.79-.36.2 0 .4 0 .58.01.19.01.44-.07.69.52.25.6.86 2.1.94 2.25.08.16.14.34.03.55-.11.21-.17.34-.33.53-.16.19-.34.42-.48.56-.16.16-.33.34-.14.67.19.33.84 1.39 1.81 2.25 1.25 1.11 2.3 1.46 2.63 1.62.33.16.52.14.71-.08.2-.22.84-.98 1.07-1.32.22-.34.45-.28.75-.17.3.11 1.9.9 2.23 1.06.33.17.55.25.63.39.08.13.08.79-.16 1.47z"/></svg>`,
      mapPin: `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
      calendar: `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
      clock: `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
      mail: `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
      star: `<svg class="${cls}" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
      arrowRight: `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
      chevronDown: `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`,
      chevronLeft: `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>`,
      checkCircle: `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
      menu: `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`,
      close: `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
      // Payments
      cash: `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/></svg>`,
      bkash: `<svg class="${cls}" viewBox="0 0 24 24" fill="#E2136E"><path d="M12 2L4 7v10l8 5 8-5V7l-8-5zm0 2.2l5.8 3.6-5.8 3.6-5.8-3.6L12 4.2zm-6 5.2l5 3.1v6.4l-5-3.1v-6.4zm7 9.5v-6.4l5-3.1v6.4l-5 3.1z"/></svg>`,
      nagad: `<svg class="${cls}" viewBox="0 0 24 24" fill="#F7941D"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>`,
      card: `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>`,
      emi: `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`
    };
    return icons[name] || icons.tooth;
  }

  // Inject Brand Colors dynamically into CSS Root Variables
  function applyBrandColors() {
    if (!CLINIC_CONFIG.brand || !CLINIC_CONFIG.brand.colors) return;
    const colors = CLINIC_CONFIG.brand.colors;
    const root = document.documentElement;
    if (colors.primary) root.style.setProperty('--color-primary', colors.primary);
    if (colors.primaryDark) root.style.setProperty('--color-primary-dark', colors.primaryDark);
    if (colors.primaryLight) root.style.setProperty('--color-primary-light', colors.primaryLight);
    if (colors.accent) root.style.setProperty('--color-accent', colors.accent);
    if (colors.accentHover) root.style.setProperty('--color-accent-hover', colors.accentHover);
    if (colors.surfaceLight) root.style.setProperty('--color-surface-light', colors.surfaceLight);
    if (colors.surfaceCard) root.style.setProperty('--color-surface-card', colors.surfaceCard);
    if (colors.textDark) root.style.setProperty('--color-text-dark', colors.textDark);
    if (colors.textMuted) root.style.setProperty('--color-text-muted', colors.textMuted);
    if (colors.emergencyRed) root.style.setProperty('--color-emergency', colors.emergencyRed);
  }

  // Calculate live opening status for Quick Info Bar
  // Takes Friday morning Jumu'ah closure into account
  function getLiveClinicStatus(lang) {
    const now = new Date();
    const currentDay = now.getDay(); // 0=Sunday, 5=Friday, 6=Saturday
    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    const todayConfig = CLINIC_CONFIG.openingHours.find(h => h.dayIndex === currentDay);
    if (!todayConfig || todayConfig.closed) {
      return {
        status: 'closed',
        badgeText: lang === 'bn' ? 'আজ চেম্বার বন্ধ' : 'Closed Today',
        subText: lang === 'bn' ? 'জরুরি সেবার জন্য হটলাইনে কল করুন' : 'Call emergency hotline for urgent care'
      };
    }

    // Check if it's Friday and morning hours
    if (currentDay === 5) {
      // Friday evening shift starts at 16:30 (4:30 PM = 990 mins)
      const fridayEveningSlot = todayConfig.slots[0];
      const openMins = 16 * 60 + 30; // 990
      const closeMins = 21 * 60 + 30; // 1290

      if (currentMinutes < openMins) {
        return {
          status: 'friday-morning',
          badgeText: lang === 'bn' ? 'আজ শুক্রবার: বিকাল ৪:৩০ টায় খুলবে' : 'Friday: Opens at 4:30 PM',
          subText: lang === 'bn' ? 'জুমার নামাজের কারণে সকালে বন্ধ, সান্ধ্যকালীন চেম্বার খোলা' : 'Morning closed for Jumu\'ah prayers. Evening chamber opens at 4:30 PM'
        };
      } else if (currentMinutes >= openMins && currentMinutes < closeMins) {
        return {
          status: 'open',
          badgeText: lang === 'bn' ? 'বর্তমানে খোলা আছে' : 'Open Now',
          subText: lang === 'bn' ? 'আজ রাত ৯:৩০ পর্যন্ত খোলা থাকবে' : 'Open today until 9:30 PM'
        };
      } else {
        return {
          status: 'closed',
          badgeText: lang === 'bn' ? 'আজকের শিফট সমাপ্ত (বর্তমানে বন্ধ)' : 'Closed for Today',
          subText: lang === 'bn' ? 'আগামীকাল সকাল ১০:০০ টায় খুলবে' : 'Opens tomorrow at 10:00 AM'
        };
      }
    }

    // Regular Day (Saturday - Thursday) with two shifts: 10:00 - 13:00 and 16:30 - 21:30
    const morningOpen = 10 * 60; // 600
    const morningClose = 13 * 60; // 780
    const eveningOpen = 16 * 60 + 30; // 990
    const eveningClose = 21 * 60 + 30; // 1290

    if (currentMinutes >= morningOpen && currentMinutes < morningClose) {
      return {
        status: 'open',
        badgeText: lang === 'bn' ? 'বর্তমানে খোলা আছে (সকাল শিফট)' : 'Open Now (Morning Shift)',
        subText: lang === 'bn' ? 'দুপুর ১:০০ পর্যন্ত খোলা | বিকাল ৪:৩০ টায় আবার খুলবে' : 'Closes at 1:00 PM | Reopens at 4:30 PM'
      };
    } else if (currentMinutes >= morningClose && currentMinutes < eveningOpen) {
      return {
        status: 'closed',
        badgeText: lang === 'bn' ? 'মধ্যাহ্ন বিরতি (বিকাল ৪:৩০ টায় খুলবে)' : 'Lunch Break (Opens 4:30 PM)',
        subText: lang === 'bn' ? 'সান্ধ্য শিফট: বিকাল ৪:৩০ - রাত ৯:৩০' : 'Evening shift: 4:30 PM - 9:30 PM'
      };
    } else if (currentMinutes >= eveningOpen && currentMinutes < eveningClose) {
      return {
        status: 'open',
        badgeText: lang === 'bn' ? 'বর্তমানে খোলা আছে (সান্ধ্য শিফট)' : 'Open Now (Evening Shift)',
        subText: lang === 'bn' ? 'আজ রাত ৯:৩০ পর্যন্ত রোগী দেখা হবে' : 'Open today until 9:30 PM'
      };
    } else {
      return {
        status: 'closed',
        badgeText: lang === 'bn' ? 'বর্তমানে চেম্বার বন্ধ আছে' : 'Currently Closed',
        subText: currentMinutes < morningOpen
          ? (lang === 'bn' ? 'আজ সকাল ১০:০০ টায় খুলবে' : 'Opens today at 10:00 AM')
          : (lang === 'bn' ? 'আগামীকাল সকাল ১০:০০ টায় খুলবে' : 'Opens tomorrow at 10:00 AM')
      };
    }
  }

  // Update SEO Meta Tags & Schema
  function updateMetadata() {
    const t = getT();
    const clinicName = CLINIC_CONFIG.brand.name[state.lang];
    const tagline = CLINIC_CONFIG.brand.tagline[state.lang];
    document.title = `${clinicName} | ${CLINIC_CONFIG.brand.city[state.lang]}`;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', `${clinicName} - ${tagline}. Top BM&DC certified dental specialists in Rajshahi.`);
    }

    // Update JSON-LD Schema
    const schemaEl = document.getElementById('clinic-schema-json');
    if (schemaEl) {
      const schemaData = {
        "@context": "https://schema.org",
        "@type": ["Dentist", "MedicalBusiness", "LocalBusiness"],
        "name": CLINIC_CONFIG.brand.name.en,
        "alternateName": CLINIC_CONFIG.brand.name.bn,
        "description": CLINIC_CONFIG.brand.tagline.en,
        "telephone": CLINIC_CONFIG.contact.phoneTel,
        "email": CLINIC_CONFIG.contact.email,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": CLINIC_CONFIG.contact.address.en,
          "addressLocality": "Rajshahi",
          "postalCode": "6000",
          "addressCountry": "BD"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": CLINIC_CONFIG.contact.coordinates.lat,
          "longitude": CLINIC_CONFIG.contact.coordinates.lng
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
            "opens": "10:00",
            "closes": "13:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
            "opens": "16:30",
            "closes": "21:30"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Friday",
            "opens": "16:30",
            "closes": "21:30"
          }
        ],
        "priceRange": "৳৳"
      };
      schemaEl.textContent = JSON.stringify(schemaData, null, 2);
    }
  }

  // Render Unified Top Announcement Bar
  function renderTopBars() {
    const t = getT();
    const slot = document.getElementById('top-announcement-slot');
    if (!slot) return;

    slot.innerHTML = `
      <div class="top-announcement-bar">
        <div class="container top-bar-inner">
          <div class="top-bar-emergency">
            <span class="pulse-dot"></span>
            <span class="top-bar-emergency-label">${state.lang === 'bn' ? 'জরুরি হটলাইন:' : '24/7 Helpline:'}</span>
            <a href="tel:${CLINIC_CONFIG.contact.emergencyPhoneTel}" class="emergency-call-pill">
              ${getIcon('phone', 'mini-icon')}
              <span>${CLINIC_CONFIG.contact.emergencyPhone}</span>
            </a>
          </div>
          <div class="top-bar-offer">
            <span class="top-bar-offer-badge">${CLINIC_CONFIG.offerRibbon.badge[state.lang]}</span>
            <span class="top-bar-offer-text">${CLINIC_CONFIG.offerRibbon.text[state.lang]}</span>
            <a href="${CLINIC_CONFIG.offerRibbon.linkTarget}" class="top-bar-offer-link">
              ${state.lang === 'bn' ? 'সিরিয়াল নিন →' : 'Book Free Exam →'}
            </a>
          </div>
        </div>
      </div>
    `;
  }

  // Render Header Brand & Navigation
  function renderHeader() {
    const t = getT();
    const brandName = CLINIC_CONFIG.brand.name[state.lang];
    const brandShortName = CLINIC_CONFIG.brand.shortName[state.lang];
    const brandTagline = CLINIC_CONFIG.brand.city[state.lang];

    // Logo & Title
    const brandLogoContainer = document.getElementById('header-brand-slot');
    if (brandLogoContainer) {
      brandLogoContainer.innerHTML = `
        <div class="brand-icon-wrapper">
          ${getIcon('tooth', 'header-tooth-icon')}
        </div>
        <div class="brand-text-wrapper">
          <span class="brand-title brand-title-full">${brandName}</span>
          <span class="brand-title brand-title-short">${brandShortName}</span>
          <span class="brand-tagline">${brandTagline}</span>
        </div>
      `;
    }

    // Nav Links (Desktop)
    const desktopNav = document.getElementById('desktop-nav-links');
    if (desktopNav) {
      desktopNav.innerHTML = `
        <a href="#services" class="nav-link">${t.nav.services}</a>
        <a href="#why-us" class="nav-link">${t.nav.whyUs}</a>
        <a href="#doctors" class="nav-link">${t.nav.doctors}</a>
        <a href="#pricing" class="nav-link">${t.nav.pricing}</a>
        <a href="#gallery" class="nav-link">${t.nav.gallery}</a>
        <a href="#reviews" class="nav-link">${t.nav.reviews}</a>
        <a href="#contact" class="nav-link">${t.nav.contact}</a>
      `;
    }

    // Language Toggle Buttons
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
      const btnLang = btn.getAttribute('data-lang');
      if (btnLang === state.lang) {
        btn.classList.add('is-active');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        btn.classList.remove('is-active');
        btn.setAttribute('aria-pressed', 'false');
      }
    });

    // Book CTA in Header
    const headerCta = document.getElementById('header-book-cta');
    if (headerCta) {
      headerCta.textContent = t.nav.appointment;
    }

    // Mobile Drawer Links
    const mobileLinks = document.getElementById('mobile-drawer-links');
    if (mobileLinks) {
      mobileLinks.innerHTML = `
        <a href="#services" class="mobile-nav-link">${t.nav.services} ${getIcon('arrowRight')}</a>
        <a href="#why-us" class="mobile-nav-link">${t.nav.whyUs} ${getIcon('arrowRight')}</a>
        <a href="#doctors" class="mobile-nav-link">${t.nav.doctors} ${getIcon('arrowRight')}</a>
        <a href="#pricing" class="mobile-nav-link">${t.nav.pricing} ${getIcon('arrowRight')}</a>
        <a href="#gallery" class="mobile-nav-link">${t.nav.gallery} ${getIcon('arrowRight')}</a>
        <a href="#reviews" class="mobile-nav-link">${t.nav.reviews} ${getIcon('arrowRight')}</a>
        <a href="#contact" class="mobile-nav-link">${t.nav.contact} ${getIcon('arrowRight')}</a>
        <div style="margin-top: 1rem;">
          <a href="#appointment" class="btn btn-primary btn-full" id="mobile-drawer-book-btn">
            ${getIcon('calendar')} ${t.nav.appointment}
          </a>
        </div>
      `;
    }
  }

  // Render Hero Section
  function renderHero() {
    const t = getT();
    const heroHeadline = document.getElementById('hero-headline');
    const heroSubhead = document.getElementById('hero-subhead');
    const heroTaglineBadge = document.getElementById('hero-tagline-badge');
    const heroBtnBook = document.getElementById('hero-btn-book');
    const heroBtnCall = document.getElementById('hero-btn-call');

    if (heroHeadline) heroHeadline.textContent = t.hero.headline;
    if (heroSubhead) heroSubhead.textContent = t.hero.subheadline;
    if (heroTaglineBadge) heroTaglineBadge.innerHTML = `⭐ ${t.hero.tagline}`;
    if (heroBtnBook) {
      heroBtnBook.innerHTML = `${getIcon('calendar')} ${t.hero.btnBook}`;
    }
    if (heroBtnCall) {
      heroBtnCall.innerHTML = `${getIcon('phone')} ${t.hero.btnCall}: ${CLINIC_CONFIG.contact.phone}`;
      heroBtnCall.setAttribute('href', `tel:${CLINIC_CONFIG.contact.phoneTel}`);
    }

    // Trust Badges
    const trustContainer = document.getElementById('hero-trust-badges-container');
    if (trustContainer) {
      const stats = CLINIC_CONFIG.stats;
      trustContainer.innerHTML = stats.map(stat => `
        <div class="trust-badge-item">
          <div class="trust-badge-icon">
            ${getIcon(stat.id === 'experience' ? 'schedule' : stat.id === 'patients' ? 'specialists' : stat.id === 'hygiene' ? 'sterilization' : 'checkCircle')}
          </div>
          <div>
            <div class="trust-badge-number">${state.lang === 'bn' ? stat.numberBn : stat.numberEn}</div>
            <div class="trust-badge-label">${state.lang === 'bn' ? stat.labelBn : stat.labelEn}</div>
          </div>
        </div>
      `).join('');
    }

    // Hero Visual Showcase Card
    const showcaseCard = document.getElementById('hero-showcase-container');
    if (showcaseCard) {
      const firstDoc = CLINIC_CONFIG.doctors[0];
      showcaseCard.innerHTML = `
        <div class="hero-visual-card">
          <div class="hero-visual-top">
            <span class="hero-live-badge">
              <span class="status-live-dot" style="background:#16A34A; width:8px; height:8px;"></span>
              ${state.lang === 'bn' ? 'রোগী গ্রহণ চলছে' : 'Accepting Patients'}
            </span>
            <span style="font-size:0.775rem; font-weight:700; color:var(--color-primary);">
              ${state.lang === 'bn' ? 'রাজশাহী মেডিকেল জোন' : 'Kazihata Medical Zone'}
            </span>
          </div>

          <div class="hero-preview-box">
            <div class="hero-card-headline">${CLINIC_CONFIG.brand.name[state.lang]}</div>
            <div class="hero-card-sub">${state.lang === 'bn' ? 'ব্যথাহীন আধুনিক দন্ত চিকিৎসা ও হাসির স্থায়ী রূপান্তর' : 'Next-Generation Painless Dental Care & Aesthetic Smile Designing'}</div>
            
            <div class="hero-card-features">
              <div class="hero-feature-pill">
                ${getIcon('sterilization', 'feature-mini-icon')}
                <span>${state.lang === 'bn' ? 'ইউরোপীয় ক্লাস-বি অটোক্লেভ স্টেরিলাইজেশন' : 'European Class-B Autoclave Sterilization'}</span>
              </div>
              <div class="hero-feature-pill">
                ${getIcon('technology', 'feature-mini-icon')}
                <span>${state.lang === 'bn' ? 'লো-রেডিয়েশন ডিজিটাল আরভিজি এক্স-রে' : 'Ultra-Low Radiation RVG Digital X-Ray'}</span>
              </div>
            </div>
          </div>

          <div class="hero-doctor-badge-card">
            <div class="hero-doctor-avatar">
              <img src="assets/images/${firstDoc.photoPlaceholder}.svg" alt="${firstDoc.name[state.lang]}" width="48" height="48" loading="lazy">
            </div>
            <div class="hero-doctor-info">
              <span class="hero-doctor-name">${firstDoc.name[state.lang]}</span>
              <span class="hero-doctor-spec">${firstDoc.specialty[state.lang]}</span>
            </div>
          </div>
        </div>
      `;
    }
  }

  // Render Quick Info Bar (Live Status, Phone, Address)
  function renderQuickInfo() {
    const t = getT();
    const liveStatus = getLiveClinicStatus(state.lang);
    const container = document.getElementById('quick-info-container');
    if (!container) return;

    container.innerHTML = `
      <div class="quick-info-grid">
        <!-- Live Status Item -->
        <div class="quick-info-item">
          <div class="quick-info-icon-box">
            ${getIcon('clock')}
          </div>
          <div class="quick-info-text">
            <div class="status-indicator-badge ${liveStatus.status}">
              <span class="status-live-dot"></span>
              <span>${liveStatus.badgeText}</span>
            </div>
            <div class="quick-info-sub">${liveStatus.subText}</div>
          </div>
        </div>

        <!-- Phone / Call Item -->
        <div class="quick-info-item">
          <div class="quick-info-icon-box">
            ${getIcon('phone')}
          </div>
          <div class="quick-info-text">
            <a href="tel:${CLINIC_CONFIG.contact.phoneTel}" class="quick-info-phone-link">
              ${CLINIC_CONFIG.contact.phone}
            </a>
            <div class="quick-info-sub">
              ${t.quickInfo.callDirect} • <a href="https://wa.me/${CLINIC_CONFIG.contact.whatsappNumber}" target="_blank" rel="noopener" style="color:var(--color-primary); font-weight:600;">WhatsApp</a>
            </div>
          </div>
        </div>

        <!-- Address Item -->
        <div class="quick-info-item">
          <div class="quick-info-icon-box">
            ${getIcon('mapPin')}
          </div>
          <div class="quick-info-text">
            <div style="font-weight:700; font-size:0.95rem; color:var(--color-text-dark);">
              ${CLINIC_CONFIG.contact.address[state.lang]}
            </div>
            <div class="quick-info-sub">${CLINIC_CONFIG.contact.landmarks[state.lang]}</div>
          </div>
        </div>
      </div>
    `;
  }

  // Render Services Section (10 Cards Grid)
  function renderServices() {
    const t = getT();
    const headerContainer = document.getElementById('services-header-slot');
    if (headerContainer) {
      headerContainer.innerHTML = `
        <span class="section-badge">${t.servicesSection.badge}</span>
        <h2 class="section-title">${t.servicesSection.heading}</h2>
        <p class="section-subtitle">${t.servicesSection.subheading}</p>
      `;
    }

    const grid = document.getElementById('services-grid-container');
    if (!grid) return;

    grid.innerHTML = CLINIC_CONFIG.services.map(service => {
      const formattedPrice = formatPrice(service.startingPrice, state.lang);
      return `
        <div class="service-card reveal-item ${service.popular ? 'is-popular' : ''}" data-service-id="${service.id}">
          ${service.popular ? `<span class="service-popular-ribbon">${state.lang === 'bn' ? 'সর্বাধিক জনপ্রিয়' : 'Most Popular'}</span>` : ''}
          <div>
            <div class="service-icon-box">
              ${getIcon(service.icon)}
            </div>
            <h3 class="service-title">${service.title[state.lang]}</h3>
            <p class="service-desc">${service.shortDesc[state.lang]}</p>
          </div>
          <div class="service-footer">
            <div class="service-price-box">
              <span class="service-price-label">${t.servicesSection.startingFrom}</span>
              <span class="service-price-amount">${formattedPrice}</span>
            </div>
            <button type="button" class="service-book-btn" onclick="window.selectServiceAndBook('${service.id}')">
              <span>${state.lang === 'bn' ? 'সিরিয়াল নিন' : 'Book'}</span>
              ${getIcon('arrowRight')}
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  // Render Why Choose Us (5 Pillars)
  function renderWhyUs() {
    const t = getT();
    const headerContainer = document.getElementById('why-us-header-slot');
    if (headerContainer) {
      headerContainer.innerHTML = `
        <span class="section-badge">${t.whyUsSection.badge}</span>
        <h2 class="section-title">${t.whyUsSection.heading}</h2>
        <p class="section-subtitle">${t.whyUsSection.subheading}</p>
      `;
    }

    const grid = document.getElementById('why-us-grid-container');
    if (!grid) return;

    grid.innerHTML = CLINIC_CONFIG.whyChooseUs.map(item => `
      <div class="why-us-card reveal-item">
        <div class="why-us-icon-box">
          ${getIcon(item.icon)}
        </div>
        <h3 class="why-us-title">${item.title[state.lang]}</h3>
        <p class="why-us-desc">${item.description[state.lang]}</p>
      </div>
    `).join('');
  }

  // Render Doctors Section
  function renderDoctors() {
    const t = getT();
    const headerContainer = document.getElementById('doctors-header-slot');
    if (headerContainer) {
      headerContainer.innerHTML = `
        <span class="section-badge">${t.doctorsSection.badge}</span>
        <h2 class="section-title">${t.doctorsSection.heading}</h2>
        <p class="section-subtitle">${t.doctorsSection.subheading}</p>
      `;
    }

    const grid = document.getElementById('doctors-grid-container');
    if (!grid) return;

    grid.innerHTML = CLINIC_CONFIG.doctors.map(doc => `
      <div class="doctor-card reveal-item" data-doctor-id="${doc.id}">
        <div class="doctor-photo-wrap">
          <img src="assets/images/${doc.photoPlaceholder}.svg" alt="${doc.name[state.lang]}" class="doctor-photo-img" loading="lazy">
          <div class="doctor-bmdc-pill">${doc.bmdcReg}</div>
        </div>
        <div class="doctor-card-body">
          <h3 class="doctor-name">${doc.name[state.lang]}</h3>
          <span class="doctor-specialty-badge">${doc.specialty[state.lang]}</span>
          <div class="doctor-degrees">${doc.degrees[state.lang]}</div>
          <div class="doctor-visiting-box">
            <span class="doctor-visiting-label">${t.doctorsSection.visitingHoursLabel}</span>
            <div>${doc.visitingHours[state.lang]}</div>
          </div>
          <div class="doctor-book-action">
            <button type="button" class="btn btn-outline btn-sm btn-full" onclick="window.selectDoctorAndBook('${doc.id}')">
              ${getIcon('calendar')} ${t.doctorsSection.btnBookDoctor}
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Render Treatment Prices Section
  function renderPricing() {
    const t = getT();
    const headerContainer = document.getElementById('pricing-header-slot');
    if (headerContainer) {
      headerContainer.innerHTML = `
        <span class="section-badge">${t.pricingSection.badge}</span>
        <h2 class="section-title">${t.pricingSection.heading}</h2>
        <p class="section-subtitle">${t.pricingSection.subheading}</p>
      `;
    }

    // Category Tabs
    const tabsContainer = document.getElementById('pricing-tabs-container');
    if (tabsContainer) {
      tabsContainer.innerHTML = CLINIC_CONFIG.pricingCategories.map((cat, idx) => `
        <button type="button" class="pricing-tab-btn ${idx === state.activePricingCategoryIndex ? 'is-active' : ''}" 
                onclick="window.setPricingCategory(${idx})">
          ${cat.categoryName[state.lang]}
        </button>
      `).join('');
    }

    // Active Category Table
    const tableContainer = document.getElementById('pricing-table-container');
    if (tableContainer) {
      const activeCat = CLINIC_CONFIG.pricingCategories[state.activePricingCategoryIndex] || CLINIC_CONFIG.pricingCategories[0];
      tableContainer.innerHTML = `
        <table class="pricing-table">
          <thead>
            <tr>
              <th>${t.pricingSection.tableColTreatment}</th>
              <th>${t.pricingSection.tableColStartingPrice}</th>
              <th>${t.pricingSection.tableColNote}</th>
            </tr>
          </thead>
          <tbody>
            ${activeCat.items.map(item => `
              <tr>
                <td class="pricing-treatment-name">${item.name[state.lang]}</td>
                <td class="pricing-treatment-amount">${formatPrice(item.price, state.lang)}</td>
                <td class="pricing-treatment-note">${item.note[state.lang]}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      `;
    }

    // Disclaimer
    const disclaimer = document.getElementById('pricing-disclaimer-slot');
    if (disclaimer) {
      disclaimer.innerHTML = `
        <div class="pricing-disclaimer-card">
          ${getIcon('pricing')}
          <span>${t.pricingSection.pricingDisclaimer}</span>
        </div>
      `;
    }

    // Payment Badges
    const paymentStrip = document.getElementById('payment-badges-slot');
    if (paymentStrip) {
      paymentStrip.innerHTML = `
        <div class="payment-methods-strip">
          <div class="payment-strip-title">${t.pricingSection.paymentAccepted}</div>
          <div class="payment-badges-list">
            ${CLINIC_CONFIG.paymentMethods.map(p => `
              <div class="payment-badge-pill">
                ${getIcon(p.icon)}
                <span>${p.name[state.lang]}</span>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }
  }

  // Render Before & After Interactive Gallery
  function renderGallery() {
    const t = getT();
    const headerContainer = document.getElementById('gallery-header-slot');
    if (headerContainer) {
      headerContainer.innerHTML = `
        <span class="section-badge">${t.gallerySection.badge}</span>
        <h2 class="section-title">${t.gallerySection.heading}</h2>
        <p class="section-subtitle">${t.gallerySection.subheading}</p>
      `;
    }

    // Case Selector Buttons
    const caseSelector = document.getElementById('gallery-case-selector-container');
    if (caseSelector) {
      caseSelector.innerHTML = CLINIC_CONFIG.beforeAfterCases.map((c, idx) => `
        <button type="button" class="gallery-case-btn ${idx === state.currentGalleryCaseIndex ? 'is-active' : ''}"
                onclick="window.setGalleryCase(${idx})">
          ${c.category[state.lang]}
        </button>
      `).join('');
    }

    const currentCase = CLINIC_CONFIG.beforeAfterCases[state.currentGalleryCaseIndex] || CLINIC_CONFIG.beforeAfterCases[0];
    const comparisonWrapper = document.getElementById('gallery-comparison-container');
    if (comparisonWrapper) {
      comparisonWrapper.innerHTML = `
        <div class="comparison-wrapper">
          <div class="comparison-container" id="slider-comparison-box">
            <!-- After Image (Underneath) -->
            <img src="assets/images/${currentCase.id}-after.svg" alt="${t.gallerySection.afterLabel}" class="comparison-image" loading="lazy">
            
            <!-- Before Image (Clipped Overlay) -->
            <div class="comparison-before-container" id="slider-before-container">
              <img src="assets/images/${currentCase.id}-before.svg" alt="${t.gallerySection.beforeLabel}" class="comparison-before-image" id="slider-before-img" loading="lazy">
            </div>

            <!-- Drag Handle -->
            <div class="comparison-slider-handle" id="slider-handle">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="8 18 2 12 8 6"/>
                <polyline points="16 6 22 12 16 18"/>
              </svg>
            </div>

            <!-- Accessible Range Input Overlaid -->
            <input type="range" min="0" max="100" value="50" class="comparison-range-input" id="gallery-range-slider" aria-label="${t.gallerySection.sliderInstruction}">
          </div>
        </div>

        <div class="comparison-instruction">
          ↔ ${t.gallerySection.sliderInstruction}
        </div>

        <div class="comparison-case-info">
          <div class="case-info-header">
            <h3 class="case-info-title">${currentCase.title[state.lang]}</h3>
            <span class="case-info-badge">${state.lang === 'bn' ? currentCase.badgeBn : currentCase.badgeEn}</span>
          </div>
          <p class="case-info-desc">${currentCase.description[state.lang]}</p>
        </div>
      `;

      // Attach Drag / Slider Listeners
      setupComparisonSlider();
    }
  }

  // Interactive Drag & Range Slider for Before / After
  function setupComparisonSlider() {
    const range = document.getElementById('gallery-range-slider');
    const beforeContainer = document.getElementById('slider-before-container');
    const handle = document.getElementById('slider-handle');
    const comparisonBox = document.getElementById('slider-comparison-box');
    const beforeImg = document.getElementById('slider-before-img');

    if (!range || !beforeContainer || !handle || !comparisonBox) return;

    function updateSlider(val) {
      const percentage = Math.max(0, Math.min(100, val));
      beforeContainer.style.width = `${percentage}%`;
      handle.style.left = `${percentage}%`;

      // Keep before image locked to full container width
      if (beforeImg) {
        beforeImg.style.width = `${comparisonBox.offsetWidth}px`;
      }
    }

    range.addEventListener('input', (e) => {
      updateSlider(e.target.value);
    });

    // Handle responsive container resize
    window.addEventListener('resize', () => {
      if (beforeImg && comparisonBox) {
        beforeImg.style.width = `${comparisonBox.offsetWidth}px`;
      }
    });

    // Touch & Mouse Drag on the container directly
    let isDragging = false;

    function onPointerMove(e) {
      if (!isDragging) return;
      const rect = comparisonBox.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const offset = clientX - rect.left;
      const pct = (offset / rect.width) * 100;
      range.value = pct;
      updateSlider(pct);
    }

    function onPointerDown(e) {
      isDragging = true;
      onPointerMove(e);
    }

    function onPointerUp() {
      isDragging = false;
    }

    comparisonBox.addEventListener('mousedown', onPointerDown);
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseup', onPointerUp);

    comparisonBox.addEventListener('touchstart', onPointerDown, { passive: true });
    window.addEventListener('touchmove', onPointerMove, { passive: true });
    window.addEventListener('touchend', onPointerUp);

    // Initial sync
    setTimeout(() => {
      updateSlider(50);
    }, 50);
  }

  // Render Patient Reviews Section (Carousel & Google Badge)
  function renderReviews() {
    const t = getT();
    const headerContainer = document.getElementById('reviews-header-slot');
    if (headerContainer) {
      headerContainer.innerHTML = `
        <span class="section-badge">${t.reviewsSection.badge}</span>
        <h2 class="section-title">${t.reviewsSection.heading}</h2>
        <p class="section-subtitle">${t.reviewsSection.subheading}</p>
        
        <div style="margin-top: 1.5rem;">
          <div class="reviews-summary-badge">
            <svg class="google-icon-svg" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
            </svg>
            <div style="display:flex; align-items:center; gap:0.35rem;">
              <span style="font-weight:800; font-size:1.1rem; color:var(--color-text-dark);">${state.lang === 'bn' ? toBengaliNumerals('4.9') : '4.9'}</span>
              <span class="review-stars" style="color:#F59E0B;">
                ${getIcon('star')}${getIcon('star')}${getIcon('star')}${getIcon('star')}${getIcon('star')}
              </span>
            </div>
            <span style="font-size:0.85rem; color:var(--color-text-muted); font-weight:600;">
              (${state.lang === 'bn' ? toBengaliNumerals('380+') : '380+'} ${state.lang === 'bn' ? 'রোগীর গুগল রিভিউ' : 'Google Reviews'})
            </span>
          </div>
        </div>
      `;
    }

    const track = document.getElementById('reviews-carousel-track');
    if (!track) return;

    track.innerHTML = CLINIC_CONFIG.reviews.map(r => `
      <div class="review-card">
        <div>
          <div class="review-card-top">
            <span class="review-sample-tag">${t.reviewsSection.sampleBadge}</span>
            <div class="review-stars">
              ${Array(r.rating).fill(getIcon('star')).join('')}
            </div>
          </div>
          <p class="review-quote">"${r.comment[state.lang]}"</p>
        </div>
        <div class="review-author-wrap">
          <div class="review-avatar-circle">
            ${r.name[state.lang].charAt(0)}
          </div>
          <div class="review-author-details">
            <span class="review-author-name">${r.name[state.lang]}</span>
            <span class="review-author-location">${r.area[state.lang]} • <strong style="color:var(--color-primary);">${r.treatment[state.lang]}</strong></span>
          </div>
        </div>
      </div>
    `).join('');

    // Carousel Dots
    const dotsContainer = document.getElementById('reviews-carousel-dots');
    if (dotsContainer) {
      dotsContainer.innerHTML = CLINIC_CONFIG.reviews.map((_, i) => `
        <span class="carousel-dot ${i === state.currentReviewIndex ? 'is-active' : ''}" 
              onclick="window.goToReviewSlide(${i})" 
              aria-label="Slide ${i + 1}"></span>
      `).join('');
    }

    updateCarouselTransform();
  }

  function getVisibleReviewsCount() {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  }

  function getMaxReviewIndex() {
    const visible = getVisibleReviewsCount();
    return Math.max(0, CLINIC_CONFIG.reviews.length - visible);
  }

  function updateCarouselTransform() {
    const track = document.getElementById('reviews-carousel-track');
    if (!track) return;
    const card = track.querySelector('.review-card');
    if (!card) return;

    const maxIdx = getMaxReviewIndex();
    if (state.currentReviewIndex > maxIdx) {
      state.currentReviewIndex = maxIdx;
    }

    const gap = 24; // 1.5rem
    const cardWidth = card.offsetWidth + gap;
    track.style.transform = `translateX(-${state.currentReviewIndex * cardWidth}px)`;

    // Update dots
    const dots = document.querySelectorAll('.carousel-dot');
    dots.forEach((dot, idx) => {
      if (idx === state.currentReviewIndex) {
        dot.classList.add('is-active');
      } else {
        dot.classList.remove('is-active');
      }
    });
  }

  // Render Appointment Booking Form
  function renderAppointmentForm() {
    const t = getT();
    const headerContainer = document.getElementById('appointment-header-slot');
    if (headerContainer) {
      headerContainer.innerHTML = `
        <span class="section-badge">${t.appointmentSection.badge}</span>
        <h2 class="section-title">${t.appointmentSection.heading}</h2>
        <p class="section-subtitle">${t.appointmentSection.subheading}</p>
      `;
    }

    // Doctor Select Dropdown Options
    const doctorSelect = document.getElementById('form-doctor');
    if (doctorSelect) {
      const currentSelectedVal = doctorSelect.value;
      doctorSelect.innerHTML = `
        <option value="">${t.appointmentSection.selectAnyDoctor}</option>
        ${CLINIC_CONFIG.doctors.map(d => `
          <option value="${d.id}">${d.name[state.lang]} - ${d.specialty[state.lang]}</option>
        `).join('')}
      `;
      if (currentSelectedVal) doctorSelect.value = currentSelectedVal;
    }

    // Service Select Dropdown Options
    const serviceSelect = document.getElementById('form-service');
    if (serviceSelect) {
      const currentSelectedVal = serviceSelect.value;
      serviceSelect.innerHTML = `
        <option value="">${t.appointmentSection.selectServicePrompt}</option>
        ${CLINIC_CONFIG.services.map(s => `
          <option value="${s.id}">${s.title[state.lang]} (${formatPrice(s.startingPrice, state.lang)})</option>
        `).join('')}
      `;
      if (currentSelectedVal) serviceSelect.value = currentSelectedVal;
    }

    // Labels & Placeholders
    const labelMap = {
      'label-name': t.appointmentSection.nameLabel,
      'label-phone': t.appointmentSection.phoneLabel,
      'label-doctor': t.appointmentSection.doctorLabel,
      'label-service': t.appointmentSection.serviceLabel,
      'label-date': t.appointmentSection.dateLabel,
      'label-time-slot': t.appointmentSection.timeSlotLabel,
      'label-message': t.appointmentSection.messageLabel
    };

    for (const [id, text] of Object.entries(labelMap)) {
      const el = document.getElementById(id);
      if (el) el.textContent = text;
    }

    const inputName = document.getElementById('form-name');
    if (inputName) inputName.placeholder = t.appointmentSection.namePlaceholder;

    const inputPhone = document.getElementById('form-phone');
    if (inputPhone) inputPhone.placeholder = t.appointmentSection.phonePlaceholder;

    const inputMsg = document.getElementById('form-message');
    if (inputMsg) inputMsg.placeholder = t.appointmentSection.messagePlaceholder;

    const slotMorning = document.getElementById('opt-slot-morning');
    if (slotMorning) slotMorning.textContent = t.appointmentSection.slotMorning;

    const slotEvening = document.getElementById('opt-slot-evening');
    if (slotEvening) slotEvening.textContent = t.appointmentSection.slotEvening;

    const submitBtn = document.getElementById('form-submit-btn');
    if (submitBtn) {
      submitBtn.innerHTML = `${getIcon('checkCircle')} ${t.appointmentSection.submitBtn}`;
    }

    // Set minimum date to today
    const inputDate = document.getElementById('form-date');
    if (inputDate) {
      const todayIso = new Date().toISOString().split('T')[0];
      inputDate.min = todayIso;
      if (!inputDate.value) {
        inputDate.value = todayIso;
      }
    }
  }

  // Handle Form Submission & WhatsApp Link Generation
  function setupBookingFormSubmission() {
    const form = document.getElementById('appointment-form');
    if (!form) return;

    // Synchronize aria-invalid with CSS :user-invalid state (modern-web-guidance)
    const syncAria = (el) => {
      if (el && typeof el.matches === 'function') {
        el.setAttribute('aria-invalid', el.matches(':user-invalid') ? 'true' : 'false');
      }
    };
    document.addEventListener('blur', (e) => syncAria(e.target), true);
    document.addEventListener('input', (e) => {
      if (e.target.hasAttribute && e.target.hasAttribute('aria-invalid')) syncAria(e.target);
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const t = getT();

      const nameInput = document.getElementById('form-name');
      const phoneInput = document.getElementById('form-phone');
      const doctorInput = document.getElementById('form-doctor');
      const serviceInput = document.getElementById('form-service');
      const dateInput = document.getElementById('form-date');
      const slotInput = document.getElementById('form-slot');
      const messageInput = document.getElementById('form-message');

      // Validate Bangladeshi phone number: 11 digits, starts with 01[3-9]
      const phoneVal = phoneInput.value.trim().replace(/[-\s]/g, '');
      const bdPhoneRegex = /^01[3-9]\d{8}$/;

      let isValid = true;

      // Clear previous error styles
      document.querySelectorAll('.form-group').forEach(fg => fg.classList.remove('has-error'));

      if (!nameInput.value.trim()) {
        isValid = false;
        nameInput.closest('.form-group').classList.add('has-error');
      }

      if (!bdPhoneRegex.test(phoneVal)) {
        isValid = false;
        phoneInput.closest('.form-group').classList.add('has-error');
      }

      if (!serviceInput.value) {
        isValid = false;
        serviceInput.closest('.form-group').classList.add('has-error');
      }

      if (!dateInput.value) {
        isValid = false;
        dateInput.closest('.form-group').classList.add('has-error');
      }

      if (!slotInput.value) {
        isValid = false;
        slotInput.closest('.form-group').classList.add('has-error');
      }

      if (!isValid) {
        const firstError = form.querySelector('.has-error input, .has-error select');
        if (firstError) firstError.focus();
        return;
      }

      // Collect human-friendly strings
      const patientName = nameInput.value.trim();
      const patientPhone = phoneVal;
      const selectedDocObj = CLINIC_CONFIG.doctors.find(d => d.id === doctorInput.value);
      const doctorName = selectedDocObj ? selectedDocObj.name[state.lang] : t.appointmentSection.selectAnyDoctor;

      const selectedServiceObj = CLINIC_CONFIG.services.find(s => s.id === serviceInput.value);
      const serviceName = selectedServiceObj ? selectedServiceObj.title[state.lang] : 'General Check-up';

      const appointmentDate = dateInput.value;
      const slotText = slotInput.options[slotInput.selectedIndex].text;
      const notes = messageInput.value.trim();

      // Build WhatsApp Pre-filled message
      const waText = encodeURIComponent(
        `*🦷 ${CLINIC_CONFIG.brand.name.en} - New Appointment Request*\n\n` +
        `👤 *Patient Name:* ${patientName}\n` +
        `📱 *Phone:* ${patientPhone}\n` +
        `🩺 *Preferred Doctor:* ${doctorName}\n` +
        `🛠️ *Service:* ${serviceName}\n` +
        `📅 *Date:* ${appointmentDate}\n` +
        `⏰ *Slot:* ${slotText}\n` +
        (notes ? `📝 *Notes:* ${notes}\n\n` : '\n') +
        `Please confirm my slot. Thank you!`
      );

      const waUrl = `https://wa.me/${CLINIC_CONFIG.contact.whatsappNumber}?text=${waText}`;

      // Populate Success Card
      const successCard = document.getElementById('booking-success-container');
      const formCard = document.getElementById('booking-form-wrapper');

      if (successCard && formCard) {
        const formattedSuccessMsg = t.appointmentSection.successMessage
          .replace('{name}', `<strong>${patientName}</strong>`)
          .replace('{service}', `<strong>${serviceName}</strong>`)
          .replace('{doctor}', `<strong>${doctorName}</strong>`)
          .replace('{date}', `<strong>${localizeNumbers(appointmentDate, state.lang)}</strong>`)
          .replace('{slot}', `<strong>${slotText}</strong>`);

        successCard.innerHTML = `
          <div class="booking-success-icon">
            ${getIcon('checkCircle')}
          </div>
          <h3 class="booking-success-title">${t.appointmentSection.successTitle}</h3>
          <p class="booking-success-text">${formattedSuccessMsg}</p>
          <p style="font-size:0.9rem; color:var(--color-text-muted); margin-bottom:1.5rem;">
            ${t.appointmentSection.successNextStep}
          </p>
          <div>
            <a href="${waUrl}" target="_blank" rel="noopener" class="booking-whatsapp-action">
              ${getIcon('whatsapp')}
              <span>${t.appointmentSection.whatsappConfirmBtn}</span>
            </a>
          </div>
          <button type="button" class="btn btn-outline btn-sm" onclick="window.resetBookingForm()">
            ${t.appointmentSection.bookAnotherBtn}
          </button>
        `;

        formCard.style.display = 'none';
        successCard.style.display = 'block';
        successCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  }

  // Render Frequently Asked Questions (Native <details class="faq-item" name="clinic-faq">)
  function renderFaqs() {
    const t = getT();
    const headerContainer = document.getElementById('faqs-header-slot');
    if (headerContainer) {
      headerContainer.innerHTML = `
        <span class="section-badge">${t.faqSection.badge}</span>
        <h2 class="section-title">${t.faqSection.heading}</h2>
        <p class="section-subtitle">${t.faqSection.subheading}</p>
      `;
    }

    const group = document.getElementById('faq-accordion-group');
    if (!group) return;

    group.innerHTML = CLINIC_CONFIG.faqs.map((faq, idx) => `
      <details class="faq-item reveal-item" name="clinic-faq" ${idx === 0 ? 'open' : ''}>
        <summary class="faq-summary">
          <span>${faq.question[state.lang]}</span>
          <span class="faq-chevron">${getIcon('chevronDown')}</span>
        </summary>
        <div class="faq-content">
          <p>${faq.answer[state.lang]}</p>
        </div>
      </details>
    `).join('');
  }

  // Render Location & Contact Section
  function renderContact() {
    const t = getT();
    const headerContainer = document.getElementById('contact-header-slot');
    if (headerContainer) {
      headerContainer.innerHTML = `
        <span class="section-badge">${t.contactSection.badge}</span>
        <h2 class="section-title">${t.contactSection.heading}</h2>
        <p class="section-subtitle">${t.contactSection.subheading}</p>
      `;
    }

    const infoList = document.getElementById('contact-info-list-slot');
    if (infoList) {
      infoList.innerHTML = `
        <div class="contact-info-row">
          <div class="contact-row-icon">
            ${getIcon('mapPin')}
          </div>
          <div>
            <div class="contact-row-title">${t.contactSection.addressTitle}</div>
            <div class="contact-row-desc">${CLINIC_CONFIG.contact.address[state.lang]}</div>
            <div style="font-size:0.8rem; color:var(--color-text-muted); margin-top:0.25rem;">
              ${CLINIC_CONFIG.contact.landmarks[state.lang]}
            </div>
          </div>
        </div>

        <div class="contact-info-row">
          <div class="contact-row-icon">
            ${getIcon('phone')}
          </div>
          <div>
            <div class="contact-row-title">${t.contactSection.phoneTitle}</div>
            <div class="contact-row-desc">
              <a href="tel:${CLINIC_CONFIG.contact.phoneTel}" style="font-weight:700; color:var(--color-primary);">
                ${CLINIC_CONFIG.contact.phone}
              </a>
              &nbsp;|&nbsp;
              <a href="tel:${CLINIC_CONFIG.contact.phoneSecondaryTel}">
                ${CLINIC_CONFIG.contact.phoneSecondary}
              </a>
            </div>
          </div>
        </div>

        <div class="contact-info-row">
          <div class="contact-row-icon">
            ${getIcon('mail')}
          </div>
          <div>
            <div class="contact-row-title">${t.contactSection.emailTitle}</div>
            <div class="contact-row-desc">
              <a href="mailto:${CLINIC_CONFIG.contact.email}">${CLINIC_CONFIG.contact.email}</a>
            </div>
          </div>
        </div>
      `;
    }

    // Opening Hours Table
    const hoursTable = document.getElementById('contact-hours-table-slot');
    if (hoursTable) {
      hoursTable.innerHTML = `
        <div class="opening-hours-card">
          <div style="font-weight:800; font-size:1rem; color:var(--color-primary-dark); margin-bottom:0.75rem; display:flex; align-items:center; gap:0.5rem;">
            ${getIcon('clock')} ${t.contactSection.hoursTitle}
          </div>
          <table class="hours-table">
            <tbody>
              ${CLINIC_CONFIG.openingHours.map(h => {
                const isFriday = h.dayIndex === 5;
                const slotText = h.slots.map(s => state.lang === 'bn' ? s.labelBn : s.labelEn).join(', ');
                return `
                  <tr class="${isFriday ? 'hours-friday-highlight' : ''}">
                    <td class="hours-day-cell">${h.name[state.lang]}</td>
                    <td class="hours-time-cell">${slotText}</td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
          <div style="font-size:0.75rem; color:var(--color-text-muted); margin-top:0.75rem; font-style:italic;">
            * ${CLINIC_CONFIG.openingHours.find(h => h.dayIndex === 5).note[state.lang]}
          </div>
        </div>

        <a href="${CLINIC_CONFIG.contact.googleMapsDirectionsUrl}" target="_blank" rel="noopener" class="btn btn-primary btn-full">
          ${getIcon('mapPin')} ${t.contactSection.getDirectionsBtn}
        </a>
      `;
    }

    // Google Map Iframe
    const mapContainer = document.getElementById('contact-map-slot');
    if (mapContainer) {
      mapContainer.innerHTML = `
        <iframe src="${CLINIC_CONFIG.contact.googleMapsEmbedUrl}" 
                class="map-embed-iframe" 
                title="SmileCare Dental Location Map"
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      `;
    }
  }

  // Render Footer
  function renderFooter() {
    const t = getT();
    const brandName = CLINIC_CONFIG.brand.name[state.lang];
    const brandTagline = CLINIC_CONFIG.brand.tagline[state.lang];

    const brandCol = document.getElementById('footer-brand-col');
    if (brandCol) {
      brandCol.innerHTML = `
        <div class="footer-brand-title">${brandName}</div>
        <div class="footer-brand-tagline">${brandTagline}</div>
        <p class="footer-brand-desc">${t.hero.subheadline}</p>
        <div class="footer-social-strip">
          <a href="${CLINIC_CONFIG.socialLinks.facebook}" target="_blank" rel="noopener" class="social-icon-btn" aria-label="Facebook">
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a href="${CLINIC_CONFIG.socialLinks.whatsapp}" target="_blank" rel="noopener" class="social-icon-btn" aria-label="WhatsApp">
            ${getIcon('whatsapp')}
          </a>
          <a href="${CLINIC_CONFIG.socialLinks.youtube}" target="_blank" rel="noopener" class="social-icon-btn" aria-label="YouTube">
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </a>
        </div>
      `;
    }

    const quickLinksCol = document.getElementById('footer-quick-links-col');
    if (quickLinksCol) {
      quickLinksCol.innerHTML = `
        <div class="footer-col-title">${t.footer.quickLinks}</div>
        <ul class="footer-links-list">
          <li class="footer-link-item"><a href="#services">${t.nav.services}</a></li>
          <li class="footer-link-item"><a href="#why-us">${t.nav.whyUs}</a></li>
          <li class="footer-link-item"><a href="#doctors">${t.nav.doctors}</a></li>
          <li class="footer-link-item"><a href="#pricing">${t.nav.pricing}</a></li>
          <li class="footer-link-item"><a href="#gallery">${t.nav.gallery}</a></li>
          <li class="footer-link-item"><a href="#reviews">${t.nav.reviews}</a></li>
          <li class="footer-link-item"><a href="#contact">${t.nav.contact}</a></li>
        </ul>
      `;
    }

    const servicesCol = document.getElementById('footer-services-col');
    if (servicesCol) {
      servicesCol.innerHTML = `
        <div class="footer-col-title">${t.footer.servicesTitle}</div>
        <ul class="footer-links-list">
          ${CLINIC_CONFIG.services.slice(0, 6).map(s => `
            <li class="footer-link-item">
              <a href="#services" onclick="window.selectServiceAndBook('${s.id}')">${s.title[state.lang]}</a>
            </li>
          `).join('')}
        </ul>
      `;
    }

    const contactCol = document.getElementById('footer-contact-col');
    if (contactCol) {
      contactCol.innerHTML = `
        <div class="footer-col-title">${t.footer.contactTitle}</div>
        <div style="font-size:0.875rem; line-height:1.7;">
          <div>${CLINIC_CONFIG.contact.address[state.lang]}</div>
          <div style="margin-top:0.5rem;">
            <strong>${t.quickInfo.callDirect}:</strong><br>
            <a href="tel:${CLINIC_CONFIG.contact.phoneTel}" style="color:#38BDF8; font-weight:700;">
              ${CLINIC_CONFIG.contact.phone}
            </a>
          </div>
          <div style="margin-top:0.5rem;">
            <strong>WhatsApp:</strong><br>
            <a href="https://wa.me/${CLINIC_CONFIG.contact.whatsappNumber}" target="_blank" rel="noopener" style="color:#25D366; font-weight:700;">
              ${CLINIC_CONFIG.contact.whatsappDisplay}
            </a>
          </div>
        </div>
      `;
    }

    // Bottom Bar
    const bottomBar = document.getElementById('footer-bottom-bar-slot');
    if (bottomBar) {
      const currentYear = new Date().getFullYear();
      bottomBar.innerHTML = `
        <div>
          © ${state.lang === 'bn' ? toBengaliNumerals(currentYear) : currentYear} ${brandName}. ${t.footer.copyright}
        </div>
        <div class="developer-credit-box">
          ${t.footer.creditLabel} <a href="${CLINIC_CONFIG.developerCredit.designerUrl}">${CLINIC_CONFIG.developerCredit.designerName}</a>
        </div>
      `;
    }
  }

  // Render Mobile Floating Action Buttons & Sticky Bar
  function renderMobileActions() {
    const t = getT();
    const fabContainer = document.getElementById('floating-actions-slot');
    if (fabContainer) {
      fabContainer.innerHTML = `
        <div class="floating-actions-container">
          <a href="https://wa.me/${CLINIC_CONFIG.contact.whatsappNumber}" target="_blank" rel="noopener" class="floating-fab wa-fab" aria-label="Chat on WhatsApp">
            ${getIcon('whatsapp')}
          </a>
          <a href="tel:${CLINIC_CONFIG.contact.phoneTel}" class="floating-fab call-fab" aria-label="Call SmileCare Clinic">
            ${getIcon('phone')}
          </a>
        </div>
      `;
    }

    const stickyBar = document.getElementById('sticky-mobile-book-bar-slot');
    if (stickyBar) {
      stickyBar.innerHTML = `
        <div class="sticky-mobile-book-bar">
          <a href="tel:${CLINIC_CONFIG.contact.phoneTel}" class="sticky-bar-action-btn sticky-call-btn" aria-label="Call clinic directly">
            ${getIcon('phone', 'bar-icon')}
            <span>${t.stickyMobileBar.callBtn}</span>
          </a>
          <a href="https://wa.me/${CLINIC_CONFIG.contact.whatsappNumber}" target="_blank" rel="noopener" class="sticky-bar-action-btn sticky-wa-btn" aria-label="WhatsApp chat">
            ${getIcon('whatsapp', 'bar-icon')}
            <span>WhatsApp</span>
          </a>
          <a href="#appointment" class="sticky-bar-book-btn">
            ${getIcon('calendar', 'bar-icon')}
            <span>${t.stickyMobileBar.bookBtn}</span>
          </a>
        </div>
      `;
    }
  }

  // Setup Scroll-Reveal Animations with IntersectionObserver
  function setupScrollReveal() {
    const revealItems = document.querySelectorAll('.reveal-item');
    if (!('IntersectionObserver' in window)) {
      revealItems.forEach(el => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealItems.forEach(el => observer.observe(el));
  }

  // Header Scroll Shadow
  function setupHeaderScroll() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    }, { passive: true });
  }

  // Mobile Navigation Toggle
  function setupMobileMenu() {
    const toggleBtn = document.getElementById('mobile-menu-toggle');
    const drawer = document.getElementById('mobile-nav-drawer');
    if (!toggleBtn || !drawer) return;

    function openMenu() {
      drawer.classList.add('is-open');
      toggleBtn.innerHTML = getIcon('close');
      toggleBtn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      drawer.classList.remove('is-open');
      toggleBtn.innerHTML = getIcon('menu');
      toggleBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    toggleBtn.addEventListener('click', () => {
      const isOpen = drawer.classList.contains('is-open');
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Close when clicking overlay outside content
    drawer.addEventListener('click', (e) => {
      if (e.target === drawer) {
        closeMenu();
      }
    });

    // Close on link click
    drawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        closeMenu();
      });
    });

    // Trap Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
        closeMenu();
      }
    });
  }

  // Carousel Next/Prev Controls
  function setupReviewCarousel() {
    const prevBtn = document.getElementById('reviews-prev-btn');
    const nextBtn = document.getElementById('reviews-next-btn');

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        const maxIdx = getMaxReviewIndex();
        if (state.currentReviewIndex > 0) {
          state.currentReviewIndex--;
        } else {
          state.currentReviewIndex = maxIdx;
        }
        updateCarouselTransform();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        const maxIdx = getMaxReviewIndex();
        if (state.currentReviewIndex < maxIdx) {
          state.currentReviewIndex++;
        } else {
          state.currentReviewIndex = 0;
        }
        updateCarouselTransform();
      });
    }

    // Touch Swipe on carousel
    const track = document.getElementById('reviews-carousel-track');
    if (track) {
      let touchStartX = 0;
      let touchEndX = 0;

      track.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });

      track.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const maxIdx = getMaxReviewIndex();
        if (touchStartX - touchEndX > 45) {
          // Swiped Left -> Next
          if (state.currentReviewIndex < maxIdx) {
            state.currentReviewIndex++;
            updateCarouselTransform();
          }
        } else if (touchEndX - touchStartX > 45) {
          // Swiped Right -> Prev
          if (state.currentReviewIndex > 0) {
            state.currentReviewIndex--;
            updateCarouselTransform();
          }
        }
      }, { passive: true });
    }

    window.addEventListener('resize', () => {
      updateCarouselTransform();
    });
  }

  // Master Render Function
  function renderAll() {
    document.documentElement.lang = state.lang;
    updateMetadata();
    renderTopBars();
    renderHeader();
    renderHero();
    renderQuickInfo();
    renderServices();
    renderWhyUs();
    renderDoctors();
    renderPricing();
    renderGallery();
    renderReviews();
    renderAppointmentForm();
    renderFaqs();
    renderContact();
    renderFooter();
    renderMobileActions();
    setupScrollReveal();
  }

  // Global Window Callbacks for inline HTML handlers
  window.setLanguage = function (newLang) {
    if (newLang !== 'bn' && newLang !== 'en') return;
    state.lang = newLang;
    localStorage.setItem('smilecare_lang', newLang);
    renderAll();
  };

  window.selectServiceAndBook = function (serviceId) {
    const serviceSelect = document.getElementById('form-service');
    if (serviceSelect) {
      serviceSelect.value = serviceId;
      serviceSelect.dispatchEvent(new Event('change'));
    }
    const appointmentSection = document.getElementById('appointment');
    if (appointmentSection) {
      appointmentSection.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        const nameInput = document.getElementById('form-name');
        if (nameInput) nameInput.focus();
      }, 450);
    }
  };

  window.selectDoctorAndBook = function (doctorId) {
    const doctorSelect = document.getElementById('form-doctor');
    if (doctorSelect) {
      doctorSelect.value = doctorId;
      doctorSelect.dispatchEvent(new Event('change'));
    }
    const appointmentSection = document.getElementById('appointment');
    if (appointmentSection) {
      appointmentSection.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        const nameInput = document.getElementById('form-name');
        if (nameInput) nameInput.focus();
      }, 450);
    }
  };

  window.setPricingCategory = function (idx) {
    state.activePricingCategoryIndex = idx;
    renderPricing();
  };

  window.setGalleryCase = function (idx) {
    state.currentGalleryCaseIndex = idx;
    renderGallery();
  };

  window.goToReviewSlide = function (idx) {
    state.currentReviewIndex = idx;
    updateCarouselTransform();
  };

  window.resetBookingForm = function () {
    const successCard = document.getElementById('booking-success-container');
    const formCard = document.getElementById('booking-form-wrapper');
    const form = document.getElementById('appointment-form');

    if (form) form.reset();
    if (successCard) successCard.style.display = 'none';
    if (formCard) formCard.style.display = 'block';

    const inputDate = document.getElementById('form-date');
    if (inputDate) {
      inputDate.value = new Date().toISOString().split('T')[0];
    }
  };

  // Initialization Routine
  document.addEventListener('DOMContentLoaded', () => {
    applyBrandColors();
    renderAll();
    setupHeaderScroll();
    setupMobileMenu();
    setupReviewCarousel();
    setupBookingFormSubmission();

    // Auto recalculate live opening hours every minute
    setInterval(renderQuickInfo, 60000);
  });

})();
