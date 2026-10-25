# 🦷 SmileCare Dental & Orthodontic Centre (Demo Website)
> **A High-Converting, Production-Grade Healthcare Website Template for Dentists & Medical Clinics in Bangladesh**

Built with pure vanilla HTML5, CSS3, and modern JavaScript. **Zero backend, zero build steps, zero third-party framework dependencies.** Opens instantly by double-clicking `index.html` or hosting on any static cloud platform.

---

## 🌟 Highlights & Key Features

- **⚡ Zero Build Step & Double-Click Ready**: Opens directly via `file:///.../index.html` without requiring Node.js, npm, or local build tools.
- **🎨 100% Config-Driven Rebranding**: All clinic content (names, phone numbers, doctors, services, prices, schedules, FAQs, brand colors) is centralized in `js/config.js`. Change one file to rebrand for any dental practice in minutes.
- **🌐 Seamless Bilingual Switcher (Bangla & English)**:
  - Default: **Bangla** (`bn`) with Google Font *Hind Siliguri*.
  - English (`en`) with Google Font *Inter*.
  - Stores preference in `localStorage`.
  - Automatically translates prices into BDT (৳) using Bengali numerals (`৳ ১,২০০`) or English digits (`৳ 1,200`).
- **📱 Mobile-First Responsive Design**: Optimized from 360px smartphones up to 1440px+ 4K displays.
- **🕒 Dynamic Chamber Hours & Live Open/Closed Status**:
  - Automatically calculates if the clinic is currently Open or Closed based on real-time clock.
  - Takes **Friday Jumu'ah prayer timings** into account (morning closed, opens 4:30 PM).
- **📋 10 Core Dental Services with Starting Prices**: Check-up & Cleaning, Painless Root Canal, Braces & Aligners, Teeth Whitening, Dental Implants, Crowns & Bridges, Pediatric Dentistry, Extractions, Wisdom Tooth Surgery, and Emergency Care.
- **🩺 BM&DC Certified Doctors Profile Cards**: Showcases real qualifications (BDS, FCPS, MS), BM&DC registration badges, chamber visiting hours, and direct booking CTAs.
- **🖼️ Interactive Drag-Slider Before & After Gallery**: Compares clinical smile makeover results with mouse drag, touch swipe, or accessible keyboard range slider.
- **💬 Direct WhatsApp Appointment Confirmation**: Submitting the appointment booking form displays a verified confirmation card and generates a prefilled WhatsApp link (`wa.me`) with patient details, doctor, service, and shift.
- **♿ Modern Web Standards & Accessibility**:
  - Semantic HTML5 structure (single `<h1>`, landmark regions).
  - Modern `:user-invalid` / `:user-valid` form validation styling without annoying premature errors.
  - Native accessible `<details class="faq-item" name="clinic-faq">` for FAQ accordion with browser "Find in page" support.
  - Supports `prefers-reduced-motion`.

---

## 📁 File Structure

```text
├── index.html              # Main HTML5 semantic single-page application
├── css/
│   └── style.css           # Clean, mobile-first design system with CSS variables
├── js/
│   ├── config.js           # 🌟 SINGLE SOURCE OF TRUTH (Clinic branding, doctors, pricing)
│   └── main.js             # Engine for live status, bilingual rendering, & interactions
├── assets/
│   ├── favicon.svg         # Crisp dental tooth emblem favicon
│   └── images/             # Vector doctor portraits & clinical before/after graphics
│       ├── doctor-1.svg
│       ├── doctor-2.svg
│       ├── doctor-3.svg
│       ├── doctor-4.svg
│       ├── case-1-before.svg & case-1-after.svg (Whitening)
│       ├── case-2-before.svg & case-2-after.svg (Orthodontics)
│       └── case-3-before.svg & case-3-after.svg (Zirconia Crown)
└── README.md               # Rebranding & deployment documentation
```

---

## ⚡ How to Rebrand for a Different Dental Clinic

To adapt this website for any real dentist or clinic in under 5 minutes:

### 1. Open `js/config.js` in your favorite editor
Locate the relevant sections in `CLINIC_CONFIG`:

```javascript
brand: {
  name: {
    en: "City Dental Care",
    bn: "সিটি ডেন্টাল কেয়ার"
  },
  tagline: {
    en: "Gentle Dental Excellence in Dhanmondi, Dhaka",
    bn: "ধানমন্ডি, ঢাকায় আধুনিক ও ব্যথাহীন ডেন্টাল সেবা"
  },
  colors: {
    primary: "#0F766E",       // Main teal/blue medical color
    primaryDark: "#0D5C56",
    accent: "#0284C7"         // Sky blue accent
  }
}
```

### 2. Update Phone & WhatsApp Numbers
```javascript
contact: {
  phone: "01712-345678",
  phoneTel: "+8801712345678",
  emergencyPhone: "01999-888777",
  whatsappNumber: "8801712345678", // WhatsApp number with country code (no +)
  whatsappDisplay: "01712-345678",
  email: "info@citydental.com",
  address: {
    en: "House 12, Road 4, Dhanmondi, Dhaka - 1205",
    bn: "বাড়ি ১২, রোড ৪, ধানমন্ডি, ঢাকা - ১২০৫"
  }
}
```

### 3. Add or Edit Doctors
Add any number of doctors to the `doctors: [...]` array:
```javascript
{
  id: "dr-abdul-karim",
  name: { en: "Dr. Abdul Karim", bn: "ডা. আব্দুল করিম" },
  title: { en: "Orthodontist", bn: "অর্থোডন্টিস্ট" },
  degrees: { en: "BDS (DU), FCPS (Orthodontics)", bn: "বিডিএস (ঢাবি), এফসিপিএস" },
  specialty: { en: "Braces & Aligners", bn: "ব্রেসেস ও এলাইনার" },
  bmdcReg: "BM&DC Reg. No: A-12345",
  visitingHours: { en: "Sat - Thu: 5 PM - 9 PM", bn: "শনি - বৃহঃ বিকাল ৫টা - রাত ৯টা" },
  photoPlaceholder: "doctor-1" // Replace with photo file name in assets/images/
}
```

### 4. Adjust Services & Pricing
Update procedure names and starting rates in `services: [...]` and `pricingCategories: [...]`:
```javascript
{
  id: "checkup-cleaning",
  title: { en: "Check-up & Cleaning", bn: "দাঁতের পরীক্ষা ও স্কেলিং" },
  startingPrice: 1000 // In BDT
}
```

### 5. Swapping Doctor & Clinic Photos
Place any real `.jpg`, `.png`, or `.webp` files into `assets/images/` and change the filenames referenced in `js/config.js`.

---

## 🚀 Free Deployment Guide

### Option 1: Vercel (Fastest — 1 Minute)
1. Go to [vercel.com](https://vercel.com) and sign in.
2. Drag and drop the project folder directly onto the Vercel dashboard.
3. Your production demo is live with a free custom SSL certificate and instant global CDN!

### Option 2: GitHub Pages (Free Permanent Hosting)
1. Create a new GitHub repository (e.g. `smilecare-dental-demo`).
2. Push or upload all files (`index.html`, `css/`, `js/`, `assets/`) to the `main` branch.
3. On GitHub, navigate to **Settings** → **Pages**.
4. Under **Branch**, select `main` and root `/`, then click **Save**.
5. Your website will be live at `https://<username>.github.io/<repo-name>/`.

### Option 3: Netlify
1. Log in to [netlify.com](https://www.netlify.com).
2. Drag and drop the folder into Netlify Drop.
3. Your site is instantly live with a free `.netlify.app` domain.

---

## 🧪 Testing Checklist

- [x] **File Protocol (`file://`) Test**: Double-clicking `index.html` loads fonts, icons, and config without errors.
- [x] **Bilingual Toggle**: Clicking `বাংলা` / `ENG` dynamically translates every section, switches prices to Bengali numerals (`৳ ১,২০০`), and persists in `localStorage`.
- [x] **Mobile Responsive Test**: Tested at 360px (mobile), 768px (tablet), and 1280px (desktop) with zero horizontal overflow.
- [x] **Live Chamber Hours**: Evaluates real-time clock to show `Open Now` or `Closed Now`, taking Friday Jumu'ah hours into account.
- [x] **Appointment Form & WhatsApp**: Validates 11-digit Bangladeshi mobile numbers (`01XXXXXXXXX`) and generates a formatted `wa.me` URL upon confirmation.
- [x] **Before & After Slider**: Supports mouse dragging, mobile touch swiping, and keyboard arrow controls.

---

## 📄 License
Created as a professional demo showcase for dental healthcare practices. Free for commercial customization and client pitching.
