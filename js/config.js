/**
 * SmileCare Dental & Orthodontic Centre - Clinic Configuration
 * 
 * ====================================================================
 * REBRANDING INSTRUCTIONS:
 * All clinic-specific information is defined in this single configuration file.
 * To adapt this website for any dental clinic in Bangladesh or abroad,
 * update the fields below (clinic name, contacts, doctors, pricing, colors).
 * The UI will instantly and automatically render all sections from this config!
 * ====================================================================
 */

const CLINIC_CONFIG = {
  // Brand identity
  brand: {
    name: {
      en: "SmileCare Dental & Orthodontic Centre",
      bn: "স্মাইলকেয়ার ডেন্টাল অ্যান্ড অর্থোডন্টিক সেন্টার"
    },
    shortName: {
      en: "SmileCare Dental",
      bn: "স্মাইলকেয়ার ডেন্টাল"
    },
    tagline: {
      en: "Gentle, Modern & Painless Dental Excellence in Rajshahi",
      bn: "রাজশাহীতে আধুনিক, ব্যথাহীন ও নির্ভরযোগ্য ডেন্টাল চিকিৎসা"
    },
    city: {
      en: "Rajshahi, Bangladesh",
      bn: "রাজশাহী, বাংলাদেশ"
    },
    establishedYear: 2012,
    // Dynamic brand color palette (injected into CSS variables on startup)
    colors: {
      primary: "#0F766E",       // Deep Medical Teal
      primaryDark: "#0D5C56",   // Rich Teal-Navy
      primaryLight: "#14B8A6",  // Vibrant Aqua-Teal
      accent: "#0284C7",        // Trust Sky Blue
      accentHover: "#0369A1",
      surfaceLight: "#F0FDFA",  // Soft Teal Ice
      surfaceCard: "#FFFFFF",
      textDark: "#0F172A",      // Deep Slate
      textMuted: "#475569",     // Neutral Slate
      border: "#E2E8F0",
      emergencyRed: "#DC2626",  // Alert Red
      successGreen: "#16A34A"   // Active Open Green
    }
  },

  // Contact details
  contact: {
    phone: "01700-123456",
    phoneSecondary: "01800-987654",
    phoneTel: "+8801700123456",
    phoneSecondaryTel: "+8801800987654",
    emergencyPhone: "01700-999888",
    emergencyPhoneTel: "+8801700999888",
    whatsappNumber: "8801700123456", // without leading '+' for wa.me URL
    whatsappDisplay: "01700-123456",
    email: "appointment@smilecaredental-rajshahi.com",
    address: {
      en: "Level 3, Prime Care Tower, Greater Road, Kazihata, Rajshahi - 6000",
      bn: "লেভেল ৩, প্রাইম কেয়ার টাওয়ার, গ্রেটার রোড, কাজীহাটা, রাজশাহী - ৬০০০"
    },
    landmarks: {
      en: "Opposite to Medical College Gate No. 2",
      bn: "রাজশাহী মেডিকেল কলেজ ২ নং গেটের বিপরীতে"
    },
    // Google Maps Embed & Directions
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.390886500584!2d88.58334437604318!3d24.367749464805364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbef541249783f%3A0xe54e17ef10f99d94!2sGreater%20Rd%2C%20Rajshahi!5e0!3m2!1sen!2sbd!4v1714000000000!5m2!1sen!2sbd",
    googleMapsDirectionsUrl: "https://maps.google.com/?q=Greater+Road+Kazihata+Rajshahi+Bangladesh",
    coordinates: {
      lat: 24.3677,
      lng: 88.5833
    }
  },

  // Offer Ribbon (set enabled: false to hide)
  offerRibbon: {
    enabled: true,
    text: {
      en: "🎉 Special This Month: FREE Initial Digital Check-up & 20% Off Scaling!",
      bn: "🎉 বিশেষ অফার: প্রথম ভিজিটে ফ্রি ডিজিটাল চেক-আপ ও স্কেলিংয়ে ২০% ছাড়!"
    },
    badge: {
      en: "Limited Slot",
      bn: "সীমিত সুযোগ"
    },
    linkTarget: "#appointment"
  },

  // Opening Hours
  // Day index: 0=Sunday, 1=Monday, 2=Tuesday, 3=Wednesday, 4=Thursday, 5=Friday, 6=Saturday
  openingHours: [
    {
      dayIndex: 6,
      name: { en: "Saturday", bn: "শনিবার" },
      slots: [
        { open: "10:00", close: "13:00", labelEn: "10:00 AM - 1:00 PM", labelBn: "সকাল ১০:০০ - দুপুর ১:০০" },
        { open: "16:30", close: "21:30", labelEn: "4:30 PM - 9:30 PM", labelBn: "বিকাল ৪:৩০ - রাত ৯:৩০" }
      ],
      closed: false
    },
    {
      dayIndex: 0,
      name: { en: "Sunday", bn: "রবিবার" },
      slots: [
        { open: "10:00", close: "13:00", labelEn: "10:00 AM - 1:00 PM", labelBn: "সকাল ১০:০০ - দুপুর ১:০০" },
        { open: "16:30", close: "21:30", labelEn: "4:30 PM - 9:30 PM", labelBn: "বিকাল ৪:৩০ - রাত ৯:৩০" }
      ],
      closed: false
    },
    {
      dayIndex: 1,
      name: { en: "Monday", bn: "সোমবার" },
      slots: [
        { open: "10:00", close: "13:00", labelEn: "10:00 AM - 1:00 PM", labelBn: "সকাল ১০:০০ - দুপুর ১:০০" },
        { open: "16:30", close: "21:30", labelEn: "4:30 PM - 9:30 PM", labelBn: "বিকাল ৪:৩০ - রাত ৯:৩০" }
      ],
      closed: false
    },
    {
      dayIndex: 2,
      name: { en: "Tuesday", bn: "মঙ্গলবার" },
      slots: [
        { open: "10:00", close: "13:00", labelEn: "10:00 AM - 1:00 PM", labelBn: "সকাল ১০:০০ - দুপুর ১:০০" },
        { open: "16:30", close: "21:30", labelEn: "4:30 PM - 9:30 PM", labelBn: "বিকাল ৪:৩০ - রাত ৯:৩০" }
      ],
      closed: false
    },
    {
      dayIndex: 3,
      name: { en: "Wednesday", bn: "বুধবার" },
      slots: [
        { open: "10:00", close: "13:00", labelEn: "10:00 AM - 1:00 PM", labelBn: "সকাল ১০:০০ - দুপুর ১:০০" },
        { open: "16:30", close: "21:30", labelEn: "4:30 PM - 9:30 PM", labelBn: "বিকাল ৪:৩০ - রাত ৯:৩০" }
      ],
      closed: false
    },
    {
      dayIndex: 4,
      name: { en: "Thursday", bn: "বৃহস্পতিবার" },
      slots: [
        { open: "10:00", close: "13:00", labelEn: "10:00 AM - 1:00 PM", labelBn: "সকাল ১০:০০ - দুপুর ১:০০" },
        { open: "16:30", close: "21:30", labelEn: "4:30 PM - 9:30 PM", labelBn: "বিকাল ৪:৩০ - রাত ৯:৩০" }
      ],
      closed: false
    },
    {
      // Friday - Special Bangladeshi Schedule: Morning closed for Jumu'ah, Evening open
      dayIndex: 5,
      name: { en: "Friday (Jumu'ah)", bn: "শুক্রবার (জুমার দিন)" },
      slots: [
        { open: "16:30", close: "21:30", labelEn: "4:30 PM - 9:30 PM (Evening Only)", labelBn: "বিকাল ৪:৩০ - রাত ৯:৩০ (শুধুমাত্র সন্ধ্যা)" }
      ],
      note: {
        en: "Morning closed for Jumu'ah prayers. Evening shift only.",
        bn: "জুমার নামাজের কারণে সকালে বন্ধ। বিকাল ৪:৩০ থেকে খোলা।"
      },
      closed: false
    }
  ],

  // Trust statistics
  stats: [
    {
      id: "experience",
      numberEn: "12+",
      numberBn: "১২+",
      labelEn: "Years of Excellence",
      labelBn: "বছরের অভিজ্ঞতা ও সুনাম"
    },
    {
      id: "patients",
      numberEn: "16,000+",
      numberBn: "১৬,০০০+",
      labelEn: "Happy Smiles Restored",
      labelBn: "সন্তুষ্ট রোগী ও সুস্থ হাসি"
    },
    {
      id: "hygiene",
      numberEn: "100%",
      numberBn: "১০০%",
      labelEn: "Autoclave Sterilization",
      labelBn: "ক্লাস-বি অটোক্লেভ জীবাণুমুক্ত"
    },
    {
      id: "doctors",
      numberEn: "100%",
      numberBn: "১০০%",
      labelEn: "BM&DC Registered Specialists",
      labelBn: "বিএমডিসি নিবন্ধিত বিশেষজ্ঞ"
    }
  ],

  // Services list (All 10 required services)
  services: [
    {
      id: "checkup-cleaning",
      icon: "cleaning",
      title: {
        en: "Check-up & Ultrasonic Cleaning",
        bn: "দাঁতের সামগ্রিক পরীক্ষা ও স্কেলিং"
      },
      shortDesc: {
        en: "Comprehensive digital dental exam, plaque removal, and stain polishing for fresh breath and healthy gums.",
        bn: "আধুনিক ডিজিটাল চেক-আপ, আল্ট্রাসনিক স্কেলিং ও পলিশিং। মাড়ির রক্তক্ষরণ ও মুখের দুর্গন্ধ দূর করে।"
      },
      startingPrice: 800,
      duration: { en: "30-45 mins", bn: "৩০-৪৫ মিনিট" },
      popular: true
    },
    {
      id: "root-canal",
      icon: "root-canal",
      title: {
        en: "Painless Root Canal Treatment",
        bn: "ব্যথাহীন রুট ক্যানেল ট্রিটমেন্ট (RCT)"
      },
      shortDesc: {
        en: "Save infected or deeply decayed teeth in 1 or 2 painless sessions using rotary endodontics and local anesthesia.",
        bn: "কম্পিউটারাইজড রোটারি পদ্ধতিতে ব্যথাহীনভাবে ক্ষতিগ্রস্ত দাঁতের ইনফেকশন দূর করে স্থায়ীভাবে দাঁত রক্ষা করুন।"
      },
      startingPrice: 3500,
      duration: { en: "45-60 mins/visit", bn: "৪৫-৬০ মিনিট" },
      popular: true
    },
    {
      id: "braces-aligners",
      icon: "braces",
      title: {
        en: "Braces & Invisible Aligners",
        bn: "দাঁতের ব্রেসেস ও স্বচ্ছ এলাইনার"
      },
      shortDesc: {
        en: "Straighten crooked, crowded or gapped teeth with ceramic/metal braces or clear, removable aligners.",
        bn: "আঁকাবাঁকা, ফাঁকা কিংবা উঁচু-নিচু দাঁত নিখুঁতভাবে সোজা করতে মেটাল, সিরামিক ব্রেস ও ইনভিজিবল এলাইনার।"
      },
      startingPrice: 35000,
      duration: { en: "Monthly follow-up", bn: "মাসিক ফলোআপ" },
      popular: true
    },
    {
      id: "teeth-whitening",
      icon: "whitening",
      title: {
        en: "Advanced Teeth Whitening",
        bn: "লেজার টিথ হোয়াইটেনিং (দাঁত সাদা করা)"
      },
      shortDesc: {
        en: "Lift years of tea, coffee, and tobacco stains safely by up to 5-8 shades in a single in-clinic session.",
        bn: "চা, কফি বা পানের দাগ দূর করে ১ ঘণ্টায় দাঁতকে করুন ৫-৮ শেড পর্যন্ত ঝকঝকে সাদা ও আকর্ষণীয়।"
      },
      startingPrice: 5000,
      duration: { en: "45-60 mins", bn: "৪৫-৬০ মিনিট" },
      popular: false
    },
    {
      id: "dental-implants",
      icon: "implant",
      title: {
        en: "Permanent Dental Implants",
        bn: "স্থায়ী ডেন্টাল ইমপ্ল্যান্ট"
      },
      shortDesc: {
        en: "The titanium gold-standard replacement for missing teeth. Looks, feels, and bites just like a natural tooth.",
        bn: "হারানো দাঁতের জায়গায় আসল দাঁতের মতো দেখতে ও কার্যকর টাইটানিয়াম নির্মিত আজীবন স্থায়ী কৃত্রিম দাঁত।"
      },
      startingPrice: 40000,
      duration: { en: "Surgical + Prosthetic", bn: "সার্জিক্যাল ও ক্যাপ" },
      popular: false
    },
    {
      id: "crowns-bridges",
      icon: "crown",
      title: {
        en: "Zirconia Crowns & Bridges",
        bn: "জার্কোনিয়া ডেন্টাল ক্যাপ ও ব্রিজ"
      },
      shortDesc: {
        en: "High-strength, natural-looking porcelain and zirconia ceramic crowns to protect broken teeth and bridge gaps.",
        bn: "রুট ক্যানেলের পর দাঁত ভাঙা রোধে প্রিমিয়াম জার্কোনিয়া ও পিএফএম ক্যাপ। প্রাকৃতিক দাঁতের মতো নিখুঁত ফিনিশিং।"
      },
      startingPrice: 4500,
      duration: { en: "2 visits", bn: "২টি ভিজিট" },
      popular: false
    },
    {
      id: "pediatric-dentistry",
      icon: "pediatric",
      title: {
        en: "Pediatric Care (Kids' Dentistry)",
        bn: "শিশুদের দাঁতের বিশেষ যত্ন"
      },
      shortDesc: {
        en: "Child-friendly, fear-free dental visits for milk teeth filling, pulpectomy, fluoride therapy, and sealants.",
        bn: "শিশুদের জন্য সম্পূর্ণ ভয়মুক্ত ও আনন্দদায়ক পরিবেশে দুধদাঁতের ফিলিং, পালপেক্টমি এবং ফ্লুরাইড সুরক্ষা।"
      },
      startingPrice: 1000,
      duration: { en: "30 mins", bn: "৩০ মিনিট" },
      popular: false
    },
    {
      id: "tooth-extraction",
      icon: "extraction",
      title: {
        en: "Painless Tooth Extraction",
        bn: "ব্যথাহীন সাধারণ দাঁত তোলা"
      },
      shortDesc: {
        en: "Gentle removal of unrestorable or severely broken teeth under profound local anesthesia with rapid healing.",
        bn: "আধুনিক অ্যানাস্থেশিয়া প্রয়োগে কোনো ধরনের ব্যথা ছাড়াই নষ্ট দাঁত অপসারণ এবং দ্রুত নিরাময়ের পরামর্শ।"
      },
      startingPrice: 1200,
      duration: { en: "20-30 mins", bn: "২০-৩০ মিনিট" },
      popular: false
    },
    {
      id: "wisdom-tooth-surgery",
      icon: "wisdom-surgery",
      title: {
        en: "Wisdom Tooth Impaction Surgery",
        bn: "আক্কেল দাঁতের মাইনর সার্জারি"
      },
      shortDesc: {
        en: "Safe surgical extraction of impacted, painful, or misaligned wisdom teeth by experienced oral surgeons.",
        bn: "মাড়িতে আটকে থাকা বা বাঁকা আক্কেল দাঁতের তীব্র ব্যথা ও ফোলা দূর করতে অভিজ্ঞ সার্জনের দক্ষ সার্জারি।"
      },
      startingPrice: 4500,
      duration: { en: "40-60 mins", bn: "৪০-৬০ মিনিট" },
      popular: false
    },
    {
      id: "emergency-care",
      icon: "emergency",
      title: {
        en: "24/7 Dental Emergency Care",
        bn: "জরুরি ডেন্টাল চিকিৎসা সেবা"
      },
      shortDesc: {
        en: "Immediate relief for severe toothache, broken crowns, dental trauma, bleeding gums, or swollen face.",
        bn: "অসহ্য দাঁতের তীব্র যন্ত্রণা, দুর্ঘটনাজনিত আঘাত বা মাড়ি ফোলায় তাৎক্ষণিক জরুরি চিকিৎসা ও ব্যথা নিয়ন্ত্রণ।"
      },
      startingPrice: 1500,
      duration: { en: "Immediate triage", bn: "তাৎক্ষণিক সেবা" },
      popular: true
    }
  ],

  // Why choose us (5 pillars)
  whyChooseUs: [
    {
      icon: "sterilization",
      title: {
        en: "Hospital-Grade Class-B Autoclave Sterilization",
        bn: "১০০% আন্তর্জাতিক মানের ক্লাস-বি অটোক্লেভ জীবাণুমুক্তকরণ"
      },
      description: {
        en: "Every instrument undergoes strict ultrasonic cleaning, medical-grade pouch sealing, and high-pressure steam autoclaving to prevent cross-infections (Hepatitis B/C, HIV).",
        bn: "প্রতিটি রোগীর জন্য আলাদা সিল করা জীবাণুমুক্ত ইনস্ট্রুমেন্ট ব্যবহার করা হয়। হেপাটাইটিস বা যেকোনো সংক্রামক জীবাণু রোধে আমরা আপসহীন।"
      }
    },
    {
      icon: "technology",
      title: {
        en: "Ultra-Low Radiation Digital RVG X-Rays",
        bn: "আধুনিক ডিজিটাল আরভিজি এক্স-রে ও ইন্ট্রাওরাল ক্যামেরা"
      },
      description: {
        en: "Chairside high-resolution digital imaging delivers instant diagnoses with 80% less radiation exposure than conventional film X-rays. You can see your tooth on screen.",
        bn: "চেয়ারের সাথেই ইনস্ট্যান্ট কম্পিউটারাইজড এক্স-রে এবং স্ক্রিনে আপনার দাঁতের স্পষ্ট ছবি দেখে চিকিৎসা গ্রহণ করার সুবিধা।"
      }
    },
    {
      icon: "specialists",
      title: {
        en: "Experienced BM&DC Certified Specialists",
        bn: "বিএমডিসি নিবন্ধিত ও এফসিপিএস / এমএস প্রশিক্ষিত বিশেষজ্ঞ"
      },
      description: {
        en: "Our team consists of post-graduate specialist dentists in Orthodontics, Endodontics, and Oral Surgery from top medical universities with decades of combined clinical mastery.",
        bn: "ঢাকা বিশ্ববিদ্যালয় ও দেশের শীর্ষ মেডিকেল থেকে স্নাতকোত্তর ডিগ্রিধারী দক্ষ ও সহানুভূতিশীল ডেন্টাল সার্জন।"
      }
    },
    {
      icon: "pricing",
      title: {
        en: "100% Transparent Pricing with No Hidden Fees",
        bn: "শতভাগ স্বচ্ছ মূল্যতালিকা ও লিখিত খরচের হিসাব"
      },
      description: {
        en: "You will receive a comprehensive treatment plan with a clear breakdown before any procedure starts. What we quote is what you pay—no unexpected surprise charges.",
        bn: "চিকিৎসা শুরুর পূর্বেই সব ধরনের খরচের পূর্ণ বিবরণী লিখিতভাবে বুঝিয়ে দেওয়া হয়। কোনো গোপন ফি বা অযাচিত অতিরিক্ত চার্জ নেই।"
      }
    },
    {
      icon: "schedule",
      title: {
        en: "Flexible Evening & Friday Timings",
        bn: "চাকরিজীবী ও শিক্ষার্থীদের সুবিধার্থে সান্ধ্যকালীন ও শুক্রবার চেম্বার"
      },
      description: {
        en: "We respect your busy routine. Our evening hours up to 9:30 PM and Friday post-Jumu'ah slots ensure you never have to skip work or classes for dental care.",
        bn: "অফিস বা ক্লাসের পর স্বাচ্ছন্দ্যে চিকিৎসা নেওয়ার জন্য রাত ৯:৩০ পর্যন্ত এবং জুমার নামাজের পর শুক্রবারেও চেম্বার খোলা থাকে।"
      }
    }
  ],

  // Doctors
  doctors: [
    {
      id: "dr-tanvir-ahmed",
      name: {
        en: "Dr. Md. Tanvir Ahmed",
        bn: "ডা. মো. তানভীর আহমেদ"
      },
      title: {
        en: "Chief Consultant & Orthodontist",
        bn: "চিফ কনসালট্যান্ট ও অর্থোডন্টিস্ট"
      },
      degrees: {
        en: "BDS (Dhaka Dental College), FCPS (Orthodontics), PGT (Advanced Endodontics)",
        bn: "বিডিএস (ঢাকা ডেন্টাল কলেজ), এফসিপিএস (অর্থোডন্টিক্স), পিজিটি (অ্যাডভান্সড এন্ডোডন্টিক্স)"
      },
      specialty: {
        en: "Braces, Invisible Aligners & Smile Designing",
        bn: "ব্রেসেস, ইনভিজিবল এলাইনার ও স্মাইল ডিজাইন বিশেষজ্ঞ"
      },
      bmdcReg: "BM&DC Reg. No: A-74291",
      experience: {
        en: "13+ Years Experience",
        bn: "১৩+ বছরের অভিজ্ঞতা"
      },
      visitingHours: {
        en: "Sat - Thu: 5:00 PM - 9:30 PM | Fri: 5:00 PM - 9:00 PM",
        bn: "শনি - বৃহঃ বিকাল ৫:০০ - রাত ৯:৩০ | শুক্রঃ বিকাল ৫:০০ - রাত ৯:০০"
      },
      bio: {
        en: "Trained in contemporary orthodontic mechanics and digital clear aligner systems. Has successfully aligned over 2,500 smiles with precision and minimal extraction.",
        bn: "আধুনিক ডিজিটাল অর্থোডন্টিক্স এবং স্মাইল ট্রান্সফর্মেশনে অভিজ্ঞ। ২,৫০০ এর বেশি রোগীর হাসির নিখুঁত রূপান্তর করেছেন।"
      },
      photoPlaceholder: "doctor-1"
    },
    {
      id: "dr-farzana-yasmin",
      name: {
        en: "Dr. Farzana Yasmin (Munia)",
        bn: "ডা. ফারজানা ইয়াসমিন (মুনিয়া)"
      },
      title: {
        en: "Senior Dental Surgeon & Endodontist",
        bn: "সিনিয়র ডেন্টাল সার্জন ও এন্ডোডন্টিস্ট"
      },
      degrees: {
        en: "BDS (Rajshahi Medical College), MS (Conservative Dentistry & Endodontics)",
        bn: "বিডিএস (রাজশাহী মেডিকেল কলেজ), এমএস (কনজারভেটিভ ডেন্টিস্ট্রি অ্যান্ড এন্ডোডন্টিক্স)"
      },
      specialty: {
        en: "Painless Root Canal & Aesthetic Restorations",
        bn: "ব্যথাহীন রুট ক্যানেল ও নন্দনতাত্ত্বিক দাঁত পুনর্গঠন"
      },
      bmdcReg: "BM&DC Reg. No: A-81432",
      experience: {
        en: "10+ Years Experience",
        bn: "১০+ বছরের অভিজ্ঞতা"
      },
      visitingHours: {
        en: "Sat - Wed: 10:00 AM - 1:00 PM & 4:30 PM - 8:30 PM",
        bn: "শনি - বুধঃ সকাল ১০:০০ - দুপুর ১:০০ এবং বিকাল ৪:৩০ - রাত ৮:৩০"
      },
      bio: {
        en: "Known for her exceptionally gentle touch and rotary single-visit root canals. Expert in saving severely compromised teeth that other clinics recommend extracting.",
        bn: "ভীষণ বিনয়ী এবং কোমল হাতের ব্যথাহীন চিকিৎসায় সুপরিচিত। ভেঙে যাওয়া ও তীব্র ব্যথাযুক্ত দাঁত দ্রুত ও সফলভাবে সংরক্ষণ করতে পারদর্শী।"
      },
      photoPlaceholder: "doctor-2"
    },
    {
      id: "dr-asif-mustafa",
      name: {
        en: "Dr. K. M. Asif Mustafa",
        bn: "ডা. কে. এম. আসিফ মোস্তফা"
      },
      title: {
        en: "Oral & Maxillofacial Surgeon",
        bn: "ওরাল অ্যান্ড ম্যাক্সিলোফেসিয়াল সার্জন"
      },
      degrees: {
        en: "BDS (RMC), MS (Oral & Maxillofacial Surgery), Fellow in Dental Implantology (ICOI, USA)",
        bn: "বিডিএস (আরএমসি), এমএস (ওরাল অ্যান্ড ম্যাক্সিলোফেসিয়াল সার্জারি), ফেলো (আইসিওআই, ইউএসএ)"
      },
      specialty: {
        en: "Dental Implants & Impacted Wisdom Tooth Surgery",
        bn: "ডেন্টাল ইমপ্ল্যান্ট ও জটিল আক্কেল দাঁতের সার্জারি বিশেষজ্ঞ"
      },
      bmdcReg: "BM&DC Reg. No: A-69815",
      experience: {
        en: "14+ Years Experience",
        bn: "১৪+ বছরের অভিজ্ঞতা"
      },
      visitingHours: {
        en: "Mon, Tue, Thu, Fri: 5:30 PM - 9:30 PM",
        bn: "সোম, মঙ্গল, বৃহঃ, শুক্রঃ বিকাল ৫:৩০ - রাত ৯:৩০"
      },
      bio: {
        en: "Pioneered flapless computer-guided implant surgery in Northern Bangladesh. Specializes in complicated wisdom teeth and trauma care.",
        bn: "উত্তরবঙ্গের কম্পিউটার-গাইডেড আধুনিক ডেন্টাল ইমপ্ল্যান্ট সার্জারি বিশেষজ্ঞ। আক্কেল দাঁত ও মুখমণ্ডলের ফ্র্যাকচার চিকিৎসায় শীর্ষস্থানীয়।"
      },
      photoPlaceholder: "doctor-3"
    },
    {
      id: "dr-nusrat-sharmin",
      name: {
        en: "Dr. Nusrat Sharmin",
        bn: "ডা. নুসরাত শারমিন"
      },
      title: {
        en: "Pediatric & Preventive Dentist",
        bn: "শিশুদের দাঁত ও প্রিভেন্টিভ ডেন্টিস্ট্রি বিশেষজ্ঞ"
      },
      degrees: {
        en: "BDS (DU), PGT (Pediatric Dentistry, BSMMU), MPH",
        bn: "বিডিএস (ঢাকা বিশ্ববিদ্যালয়), পিজিটি (শিশু ডেন্টিস্ট্রি, বিএসএমএমইউ), এমপিএইচ"
      },
      specialty: {
        en: "Child Dental Phobia Care & Preventive Sealants",
        bn: "শিশুদের দাঁতের ভীতি দূরীকরণ ও সুরক্ষামূলক ডেন্টিস্ট্রি"
      },
      bmdcReg: "BM&DC Reg. No: A-95104",
      experience: {
        en: "8+ Years Experience",
        bn: "৮+ বছরের অভিজ্ঞতা"
      },
      visitingHours: {
        en: "Sat, Sun, Tue, Thu: 4:30 PM - 8:30 PM",
        bn: "শনি, রবি, মঙ্গল, বৃহঃ বিকাল ৪:৩০ - রাত ৮:৩০"
      },
      bio: {
        en: "Creates a playful, warm environment so kids never fear the dentist. Expert in baby tooth preservation, fluoride therapy, and early space maintainers.",
        bn: "শিশুদের মন জয় করে খেলার ছলে চিকিৎসা দেন। দুধদাঁতের যত্ন, পিট অ্যান্ড ফিশার সিল্যান্ট এবং ভবিষ্যৎ আঁকাবাঁকা দাঁত প্রতিরোধে পারদর্শী।"
      },
      photoPlaceholder: "doctor-4"
    }
  ],

  // Detailed pricing catalog
  pricingCategories: [
    {
      categoryName: {
        en: "Consultation & Preventive",
        bn: "পরামর্শ ও প্রতিরোধমূলক সেবা"
      },
      items: [
        {
          name: { en: "Comprehensive Dental Exam & Digital X-Ray", bn: "সামগ্রিক মুখ ও দাঁতের পরীক্ষা এবং ডিজিটাল এক্স-রে" },
          price: 500,
          note: { en: "Free with any treatment", bn: "চিকিৎসা গ্রহণ করলে সম্পূর্ণ ফ্রি" }
        },
        {
          name: { en: "Full Mouth Ultrasonic Scaling & Polishing", bn: "সম্পূর্ণ মুখের আল্ট্রাসনিক স্কেলিং ও পলিশিং" },
          price: 1000,
          note: { en: "Standard tartar removal", bn: "পাথর ও দাগ দূরীকরণ" }
        },
        {
          name: { en: "Deep Subgingival Curettage (Per Quadrant)", bn: "মাড়ির গভীর ইনফেকশন পরিষ্কার / কিউরেটেজ (প্রতি কোয়ার্ড)" },
          price: 800,
          note: { en: "For bleeding gum disease", bn: "মাড়ির ফোলা ও পাইওরিয়া চিকিৎসায়" }
        },
        {
          name: { en: "Children's Topical Fluoride Varnish", bn: "শিশুদের দাঁতের সুরক্ষায় টপিকাল ফ্লুরাইড কোটিং" },
          price: 1200,
          note: { en: "Prevents childhood cavities", bn: "দাঁতের ক্ষয়রোধে অত্যন্ত কার্যকর" }
        }
      ]
    },
    {
      categoryName: {
        en: "Restorative & Root Canal",
        bn: "দাঁত ফিলিং ও রুট ক্যানেল"
      },
      items: [
        {
          name: { en: "Composite Laser / Tooth-Colored Filling", bn: "লেজার কম্পোজিট স্থায়ী দাঁতের রঙের ফিলিং" },
          price: 1200,
          note: { en: "Per tooth surface", bn: "দাঁতের সাথে একদম মিলিয়ে দেওয়া হয়" }
        },
        {
          name: { en: "Glass Ionomer (GIC) Protective Filling", bn: "জিআইসি ফ্লোরাইড সমৃদ্ধ প্রটেক্টিভ ফিলিং" },
          price: 800,
          note: { en: "Ideal for deep or root cavities", bn: "দাঁতের শিরশিরানি দূর করে" }
        },
        {
          name: { en: "Anterior (Front Tooth) Root Canal Treatment", bn: "সামনের দাঁতের ব্যথাহীন রুট ক্যানেল (RCT)" },
          price: 3500,
          note: { en: "Rotary endodontics", bn: "কম্পিউটারাইজড রোটারি পদ্ধতিতে" }
        },
        {
          name: { en: "Molar (Back Tooth) Root Canal Treatment", bn: "পেছনের মাড়ির দাঁতের রুট ক্যানেল (RCT)" },
          price: 4500,
          note: { en: "Includes post & core if needed", bn: "৩ বা ৪টি ক্যানেল সম্পূর্ণ পরিষ্কার" }
        }
      ]
    },
    {
      categoryName: {
        en: "Caps, Bridges & Implants",
        bn: "ক্যাপ, ব্রিজ ও কৃত্রিম দাঁত"
      },
      items: [
        {
          name: { en: "Metal Ceramic (PFM) Dental Crown", bn: "মেটাল সিরামিক (PFM) মজবুত ডেন্টাল ক্যাপ" },
          price: 3500,
          note: { en: "5-year warranty", bn: "৫ বছরের ওয়ারেন্টি" }
        },
        {
          name: { en: "Premium High-Translucent Zirconia Crown", bn: "প্রিমিয়াম আমেরিকান জার্কোনিয়া ক্যাপ (মেটাল-মুক্ত)" },
          price: 7500,
          note: { en: "15-year warranty, natural look", bn: "১৫ বছরের ওয়ারেন্টি, অবিকল প্রাকৃতিক দাঁত" }
        },
        {
          name: { en: "Titanium Dental Implant (Fixture + Abutment)", bn: "আন্তর্জাতিক টাইটানিয়াম ডেন্টাল ইমপ্ল্যান্ট (স্থায়ী দাঁত)" },
          price: 40000,
          note: { en: "Lifetime warranty on fixture", bn: "আজীবন মেয়াদী নিশ্চয়তা" }
        },
        {
          name: { en: "Complete Flexible Denture (Per Arch)", bn: "সম্পূর্ণ মাড়ির ফ্লেক্সিবল লাইটওয়েট ডেনচার" },
          price: 15000,
          note: { en: "Comfortable, unbreakable", bn: "নরম, টেকসই ও সহজে ব্যবহারযোগ্য" }
        }
      ]
    },
    {
      categoryName: {
        en: "Orthodontics & Surgery",
        bn: "আঁকাবাঁকা দাঁত সোজা ও সার্জারি"
      },
      items: [
        {
          name: { en: "Traditional High-Grade Metal Braces", bn: "উচ্চমানের মেটাল ব্রেসেস (উভয় চোয়াল)" },
          price: 35000,
          note: { en: "Installment facility available", bn: "সহজ কিস্তি সুবিধা প্রযোজ্য" }
        },
        {
          name: { en: "Aesthetic Ceramic Clear Braces", bn: "স্বচ্ছ সিরামিক ব্রেসেস (সহজে বোঝা যায় না)" },
          price: 55000,
          note: { en: "Tooth-colored brackets", bn: "দাঁতের রঙের সাথে মিলিয়ে তৈরি" }
        },
        {
          name: { en: "Simple Tooth Extraction", bn: "ব্যথাহীন সাধারণ দাঁত তোলা" },
          price: 1000,
          note: { en: "Including painless anesthesia", bn: "ব্যথানাশক ড্রপ ও ইনজেকশন সহ" }
        },
        {
          name: { en: "Surgical Impacted Wisdom Tooth Extraction", bn: "জটিল আক্কেল দাঁতের মাইনর সার্জারি" },
          price: 4500,
          note: { en: "By Oral & Maxillofacial Surgeon", bn: "দক্ষ স্পেশালিস্ট সার্জন দ্বারা" }
        }
      ]
    }
  ],

  // Payment methods
  paymentMethods: [
    { id: "cash", name: { en: "Cash", bn: "নগদ টাকা" }, icon: "cash" },
    { id: "bkash", name: { en: "bKash (Merchant / Personal)", bn: "বিকাশ (মার্চেন্ট / পার্সোনাল)" }, icon: "bkash" },
    { id: "nagad", name: { en: "Nagad", bn: "নগদ" }, icon: "nagad" },
    { id: "cards", name: { en: "Visa / Mastercard / Amex", bn: "ভিসা / মাস্টারকার্ড / এমেক্স" }, icon: "card" },
    { id: "emi", name: { en: "0% EMI on Braces & Implants (Selected Banks)", bn: "০% ইএমআই সুবিধা (নির্দিষ্ট ব্যাংকে)" }, icon: "emi" }
  ],

  // Before & After Gallery Cases
  beforeAfterCases: [
    {
      id: "case-1",
      title: {
        en: "Deep Stain & Calculus Removal with Laser Scaling",
        bn: "পানের দাগ ও শক্ত পাথর অপসারণ এবং স্কেলিং"
      },
      category: {
        en: "Cleaning & Whitening",
        bn: "স্কেলিং ও পলিশিং"
      },
      description: {
        en: "35-year-old patient with years of severe nicotine and betel nut stains restored to sparkling natural white in a 45-minute single session.",
        bn: "৩৫ বছর বয়সী রোগীর দীর্ঘদিনের পান ও ধূমপানের জেদি দাগ আল্ট্রাসনিক স্কেলিং ও পলিশিংয়ের মাধ্যমে সম্পূর্ণ পরিষ্কার করা হয়েছে।"
      },
      badgeEn: "Single Session • 45 Mins",
      badgeBn: "১টি সেশন • ৪৫ মিনিট"
    },
    {
      id: "case-2",
      title: {
        en: "Severe Crowding Correction via Ceramic Braces",
        bn: "সিরামিক ব্রেসেস দ্বারা আঁকাবাঁকা ও উঁচু দাঁত সোজা করা"
      },
      category: {
        en: "Orthodontics",
        bn: "অর্থোডন্টিক্স"
      },
      description: {
        en: "19-year-old student with severe upper and lower crowding treated non-surgically in 14 months without any visible extraction gaps.",
        bn: "১৯ বছর বয়সী শিক্ষার্থীর আঁকাবাঁকা ও অসমান দাঁত কোনো দাঁত না তুলেই ১৪ মাসে নিখুঁত ও চমৎকার হাসিতে রূপান্তর করা হয়েছে।"
      },
      badgeEn: "14 Months Treatment",
      badgeBn: "১৪ মাসের চিকিৎসা"
    },
    {
      id: "case-3",
      title: {
        en: "Broken Front Tooth Restored with All-Ceramic Zirconia Crown",
        bn: "সামনের ভাঙা দাঁতের রুট ক্যানেল ও জার্কোনিয়া ক্যাপ"
      },
      category: {
        en: "Cosmetic & RCT",
        bn: "কসমেটিক ও ক্যাপ"
      },
      description: {
        en: "Trauma case where a fractured central incisor was rescued via painless rotary endodontics and a color-matched ultra-strong zirconia crown.",
        bn: "আঘাতে ভেঙে যাওয়া সামনের দাঁতের ব্যথাহীন রুট ক্যানেল শেষে প্রাকৃতিক রঙের জার্কোনিয়া ক্যাপ বসিয়ে নিখুঁত রূপ দেওয়া হয়েছে।"
      },
      badgeEn: "2 Visits • Lifetime Smile",
      badgeBn: "২টি ভিজিট • স্থায়ী সমাধান"
    }
  ],

  // Patient Reviews (Clearly marked sample reviews)
  reviews: [
    {
      id: "review-1",
      name: { en: "Samiul Haque", bn: "সামিউল হক" },
      area: { en: "Kazihata, Rajshahi", bn: "কাজীহাটা, রাজশাহী" },
      rating: 5,
      date: { en: "2 weeks ago", bn: "২ সপ্তাহ আগে" },
      treatment: { en: "Root Canal Treatment", bn: "রুট ক্যানেল ট্রিটমেন্ট" },
      comment: {
        en: "I was terrified of root canals because of previous painful experiences elsewhere. Dr. Farzana was remarkably gentle, and I felt absolutely zero pain! The clinic is spotless and feels like a 5-star healthcare centre.",
        bn: "রুট ক্যানেল নিয়ে আমার অনেক ভয় ছিল। কিন্তু ডা. ফারজানা আপা এত যত্নের সাথে চিকিৎসা করেছেন যে এক ফোঁটাও ব্যথা পাইনি! ক্লিনিকের পরিষ্কার-পরিচ্ছন্নতা এবং আধুনিক পরিবেশ সত্যি প্রশংসার দাবিদার।"
      }
    },
    {
      id: "review-2",
      name: { en: "Nusrat Jahan", bn: "নুসরাত জাহান" },
      area: { en: "Upashahar, Rajshahi", bn: "উপশহর, রাজশাহী" },
      rating: 5,
      date: { en: "1 month ago", bn: "১ মাস আগে" },
      treatment: { en: "Ceramic Braces", bn: "সিরামিক ব্রেসেস" },
      comment: {
        en: "Got my braces done under Dr. Tanvir Ahmed. Within 6 months my crooked teeth shifted dramatically. They offer installment payments which helped my family immensely. Highly recommended in Rajshahi!",
        bn: "ডা. তানভীর স্যারের কাছে ব্রেসেস নিয়েছি। ৬ মাসের মধ্যেই দাঁতের পরিবর্তন চোখে পড়ার মতো। কিস্তিতে ফি দেওয়ার সুবিধা থাকায় আমার পরিবারের জন্য অনেক সুবিধা হয়েছে।"
      }
    },
    {
      id: "review-3",
      name: { en: "Engr. Mahmud Hasan", bn: "প্রকৌশলী মাহমুদ হাসান" },
      area: { en: "Talaimari, Rajshahi", bn: "তালাইমারী, রাজশাহী" },
      rating: 5,
      date: { en: "3 weeks ago", bn: "৩ সপ্তাহ আগে" },
      treatment: { en: "Wisdom Tooth Surgery", bn: "আক্কেল দাঁতের সার্জারি" },
      comment: {
        en: "My lower wisdom tooth was completely sideways and giving me unbearable head pain. Dr. Asif performed minor surgery in 25 minutes. Healing was smooth without fever. Professionalism at its peak.",
        bn: "নিচের আঁকাবাঁকা আক্কেল দাঁতের তীব্র ব্যথায় ঘুমাতে পারতাম না। ডা. আসিফ স্যার মাত্র ২৫ মিনিটে কোনো ব্যথা ছাড়াই সার্জারি সম্পন্ন করেন। ৩ দিনের মধ্যেই সম্পূর্ণ সুস্থ।"
      }
    },
    {
      id: "review-4",
      name: { en: "Rokeya Begum", bn: "রোকেয়া বেগম" },
      area: { en: "Shaheb Bazar, Rajshahi", bn: "সাহেব বাজার, রাজশাহী" },
      rating: 5,
      date: { en: "2 months ago", bn: "২ মাস আগে" },
      treatment: { en: "Scaling & Zirconia Crown", bn: "স্কেলিং ও জার্কোনিয়া ক্যাপ" },
      comment: {
        en: "The autoclave hygiene protocols they follow give 100% peace of mind. Every pouch is torn open in front of your eyes. Prices are completely honest without hidden extras.",
        bn: "রোগীর সামনেই সিল করা নতুন জীবাণুমুক্ত ইনস্ট্রুমেন্ট খোলেন যা আমাকে খুব ভরসা দিয়েছে। রাজশাহী শহরে এমন পরিচ্ছন্ন ও সৎ ডেন্টাল ক্লিনিক পাওয়া সৌভাগ্যের বিষয়।"
      }
    },
    {
      id: "review-5",
      name: { en: "Tanjim Rahman (Parent)", bn: "তানজিম রহমান (অভিভাবক)" },
      area: { en: "Motihar, Rajshahi", bn: "মতিহার, রাজশাহী" },
      rating: 5,
      date: { en: "1 month ago", bn: "১ মাস আগে" },
      treatment: { en: "Pediatric Filling", bn: "বাচ্চার দাঁতের ফিলিং" },
      comment: {
        en: "Brought my 6-year-old son who was crying hysterically. Dr. Nusrat turned it into a fun game with cartoons and cartoons! He walked out smiling with a balloon. Amazing with children.",
        bn: "আমার ৬ বছরের ছেলে ডাক্তার দেখে প্রচণ্ড কান্নাকাটি করছিল। ডা. নুসরাত আপা পরম স্নেহে কার্টুন দেখিয়ে খেলনার ছলে চিকিৎসা শেষ করলেন। ছেলে হাসিমুখে বেলুন নিয়ে বাড়ি ফিরেছে।"
      }
    }
  ],

  // Star Rating Summary
  reviewSummary: {
    averageRating: 4.9,
    totalReviews: 382,
    googleRatingText: "4.9 ★★★★★ on Google Reviews (380+ Verified Patients)"
  },

  // Frequently Asked Questions (8 questions)
  faqs: [
    {
      id: "faq-pain",
      question: {
        en: "Is dental treatment painful at SmileCare?",
        bn: "স্মাইলকেয়ারে দাঁতের চিকিৎসা কি ব্যথাদায়ক?"
      },
      answer: {
        en: "Not at all! We use modern computer-controlled topical numbing gels before injections so you barely feel a mosquito prick. With profound local anesthesia and rotary tools, even procedures like root canals and surgical extractions are completely painless.",
        bn: "একদমই নয়! আমরা ইনজেকশন দেওয়ার পূর্বে বিশেষ টপিকাল নাম্বিং জেল ব্যবহার করি, ফলে সামান্য সুঁচের অনুভূতিও টের পাওয়া যায় না। আধুনিক অ্যানাস্থেশিয়া প্রযুক্তির কারণে রুট ক্যানেল বা আক্কেল দাঁত তোলাও সম্পূর্ণ ব্যথাহীন।"
      }
    },
    {
      id: "faq-consultation-cost",
      question: {
        en: "How much does a general consultation cost?",
        bn: "প্রথম সাক্ষাতে পরামর্শ ফি (Doctor Consultation Fee) কত?"
      },
      answer: {
        en: "Our first consultation fee is ৳ 500, which includes a comprehensive oral check-up and physical examination. As part of our current promotional offer, if you undertake any clinical procedure during your visit, your consultation fee is 100% FREE!",
        bn: "আমাদের রেগুলার কনসালটেশন ফি ৫০০ টাকা। তবে আপনি যদি একই দিনে স্কেলিং, ফিলিং বা যেকোনো চিকিৎসা শুরু করেন, তবে কনসালটেশন ফি সম্পূর্ণ ফ্রি (০ টাকা) হিসেবে গণ্য করা হয়!"
      }
    },
    {
      id: "faq-sterilization",
      question: {
        en: "How do you ensure sterilization and prevent infections?",
        bn: "জীবাণুমুক্তকরণ কীভাবে করা হয় এবং ইনফেকশনের ঝুঁকি আছে কি?"
      },
      answer: {
        en: "We follow strict European Class-B Autoclave protocols. Every metal instrument is scrubbed in an ultrasonic bath, sealed in a medical sterilization pouch with chemical indicator strips, and autoclaved at 134°C under high vacuum pressure. Disposable items like gloves, suction tips, and needles are strictly used once and discarded.",
        bn: "আমরা ইউরোপীয় স্ট্যান্ডার্ড ক্লাস-বি অটোক্লেভ প্রটোকল অনুসরণ করি। প্রতিটি ইনস্ট্রুমেন্ট আল্ট্রাসনিক ওয়াশের পর সিল্ড প্যাকে ১৩৪°C তাপে জীবাণুমুক্ত করা হয়। সুঁচ, গ্লাভস, সাকশন টিপস প্রতি রোগীর জন্য একদম নতুন ব্যবহার করা হয়।"
      }
    },
    {
      id: "faq-children",
      question: {
        en: "Do you treat young children and toddlers?",
        bn: "শিশুদের দাঁতের চিকিৎসা করা হয় কি?"
      },
      answer: {
        en: "Yes! We have dedicated pediatric dental sessions headed by specialist Dr. Nusrat Sharmin. We focus on gentle psychological acclimatization, cartoon screens, pain-free milk teeth restorations, space maintainers, and fluoride protection in a warm, friendly ambiance.",
        bn: "হ্যাঁ, শিশুদের জন্য আমাদের বিশেষ শিশু ডেন্টিস্ট্রি সেশন ও কার্টুন দেখার ফ্রেন্ডলি পরিবেশ রয়েছে। দুধদাঁতের ফিলিং, ক্যাভিটি প্রতিরোধে ফ্লুরাইড থেরাপি এবং আঁকাবাঁকা দাঁত প্রতিরোধে অভিজ্ঞ শিশু বিশেষজ্ঞ সেবা দেন।"
      }
    },
    {
      id: "faq-emergency",
      question: {
        en: "What should I do in a severe dental emergency at night?",
        bn: "জরুরি দাঁতের ব্যথায় বা রাতে কী করণীয়?"
      },
      answer: {
        en: "If you experience severe unmanageable pain, facial swelling, or dental trauma, call our dedicated 24/7 emergency hotline at 01700-999888 immediately. Our on-duty doctor will advise acute emergency relief and schedule priority in-clinic triage.",
        bn: "অসহ্য যন্ত্রণা বা মাড়ি ফোলা হলে আমাদের জরুরি হটলাইন ০১৭০০-৯৯৯৮৮৮ নম্বরে কল করুন। আমাদের কর্তব্যরত চিকিৎসক ফোনে প্রাথমিক নির্দেশনা দেবেন এবং ক্লিনিকে জরুরি ভিত্তিতে দেখার ব্যবস্থা করবেন।"
      }
    },
    {
      id: "faq-emi",
      question: {
        en: "Is there any EMI or installment facility for braces and implants?",
        bn: "ব্রেসেস বা ইমপ্ল্যান্টের ক্ষেত্রে কিস্তিতে (EMI) পরিশোধের সুযোগ আছে কি?"
      },
      answer: {
        en: "Yes! For orthodontic braces and aligners, we offer convenient in-house monthly installments spread over 12-18 months after a modest initial down payment. We also partner with leading Bangladeshi banks for 0% interest EMI on credit cards.",
        bn: "হ্যাঁ! ব্রেসেস ও এলাইনারের ক্ষেত্রে প্রাথমিক কিছু ডাউনপেমেন্টের পর চিকিৎসা চলাকালীন ১২-১৮ মাসের সহজ মাসিক কিস্তিতে বিল পরিশোধ করা যায়। এছাড়াও নির্দিষ্ট ব্যাংকের ক্রেডিট কার্ডে ০% সুদে ইএমআই সুবিধা রয়েছে।"
      }
    },
    {
      id: "faq-timings",
      question: {
        en: "What are your exact opening hours and Friday timings?",
        bn: "ক্লিনিক খোলার সময় ও শুক্রবারের নিয়মাবলী কী?"
      },
      answer: {
        en: "Saturday through Thursday: Morning 10:00 AM - 1:00 PM and Evening 4:30 PM - 9:30 PM. On Friday, the clinic opens for the evening shift from 4:30 PM - 9:30 PM (morning closed for Jumu'ah prayers).",
        bn: "শনিবার থেকে বৃহস্পতিবার: সকাল ১০:০০ - দুপুর ১:০০ এবং বিকাল ৪:৩০ - রাত ৯:৩০। শুক্রবার জুমার নামাজের জন্য সকালে বন্ধ থাকে, তবে বিকাল ৪:৩০ থেকে রাত ৯:৩০ পর্যন্ত চেম্বার পুরোদমে খোলা থাকে।"
      }
    },
    {
      id: "faq-first-visit",
      question: {
        en: "What should I bring to my first appointment?",
        bn: "প্রথম সাক্ষাতে কী সঙ্গে নিয়ে আসতে হবে?"
      },
      answer: {
        en: "Please bring any previous dental X-rays, prescriptions, and a list of medical conditions or daily medications (e.g., blood pressure, diabetes, blood thinners, cardiac history). If you don't have past records, don't worry—we take fresh digital X-rays right here.",
        bn: "পূর্বের কোনো ডেন্টাল এক্স-রে বা প্রেসক্রিপশন থাকলে সঙ্গে আনুন। ডায়াবেটিস, উচ্চ রক্তচাপ বা হার্টের ওষুধের তথ্য ডাক্তারকে জানান। পূর্বের রিপোর্ট না থাকলেও কোনো সমস্যা নেই, আমাদের চেম্বারেই তাৎক্ষণিক ডিজিটাল এক্স-রে করা যায়।"
      }
    }
  ],

  // Social Links
  socialLinks: {
    facebook: "https://facebook.com",
    whatsapp: "https://wa.me/8801700123456",
    youtube: "https://youtube.com",
    instagram: "https://instagram.com"
  },

  // Developer credit (placeholder for pitching to dental clients)
  developerCredit: {
    designerName: "Professional Healthcare Web Studio",
    designerUrl: "#",
    taglineEn: "High-Converting Custom Websites for Healthcare Specialists",
    taglineBn: "ডাক্তার ও স্বাস্থ্যসেবা প্রতিষ্ঠানের জন্য প্রিমিয়াম ওয়েবসাইট সল্যুশন"
  },

  // Comprehensive Translation Dictionary for Fixed UI Strings
  translations: {
    en: {
      siteTitle: "SmileCare Dental & Orthodontic Centre | Rajshahi",
      nav: {
        home: "Home",
        services: "Services",
        whyUs: "Why Choose Us",
        doctors: "Specialists",
        pricing: "Pricing",
        gallery: "Results",
        reviews: "Patient Reviews",
        appointment: "Book Appointment",
        contact: "Contact"
      },
      hero: {
        tagline: "Smile with Absolute Confidence",
        headline: "Gentle, World-Class Dental Care in Rajshahi",
        subheadline: "Experience painless dentistry with European Class-B sterilization, ultra-low radiation digital X-rays, and certified post-graduate dental surgeons.",
        btnBook: "Book Appointment",
        btnCall: "Call Now",
        floatingReview: "Trusted by 16,000+ happy patients"
      },
      quickInfo: {
        statusOpen: "Open Now",
        statusClosed: "Closed Now",
        statusFridayMorning: "Friday: Opens 4:30 PM",
        closesAt: "Closes at",
        opensAt: "Opens at",
        callDirect: "Direct Hotline",
        ourLocation: "Our Clinic Location",
        fridaySpecial: "Friday Evening Chamber Open"
      },
      servicesSection: {
        badge: "Our Treatments",
        heading: "Comprehensive Dental Solutions for Your Whole Family",
        subheading: "From routine preventive care to complex smile makeovers, we deliver precision care using modern European dentistry standards.",
        startingFrom: "Starting from",
        btnBookService: "Book This Treatment"
      },
      whyUsSection: {
        badge: "The SmileCare Difference",
        heading: "Why Rajshahi Families Choose SmileCare Dental",
        subheading: "We combine compassion, clinical rigor, and state-of-the-art dental technology to make every visit comfortable and worry-free."
      },
      doctorsSection: {
        badge: "Meet Our Team",
        heading: "BM&DC Registered Specialist Dental Surgeons",
        subheading: "Your oral health is in the hands of seasoned clinicians with post-graduate training from top medical universities.",
        bmdcPrefix: "Registration:",
        visitingHoursLabel: "Visiting Hours:",
        btnBookDoctor: "Book with this Doctor"
      },
      pricingSection: {
        badge: "Transparent Pricing",
        heading: "Affordable Care with Clear, Honest Treatment Costs",
        subheading: "No hidden charges or surprise costs. We provide a complete written treatment plan before starting any procedure.",
        tableColTreatment: "Dental Procedure",
        tableColStartingPrice: "Starting Price (BDT)",
        tableColNote: "Details / Warranty",
        pricingDisclaimer: "Note: The starting prices above are estimates. The final exact cost depends on clinical diagnosis, tooth condition, and digital X-ray evaluation.",
        paymentAccepted: "Payment Methods Accepted:"
      },
      gallerySection: {
        badge: "Real Transformations",
        heading: "Before & After Treatment Showcase",
        subheading: "Drag the slider left and right to see the transformative results achieved for our patients.",
        beforeLabel: "Before Treatment",
        afterLabel: "After Treatment",
        sliderInstruction: "Drag the center bar or use arrow keys to compare",
        selectCase: "Select Case Study:"
      },
      reviewsSection: {
        badge: "Patient Testimonials",
        heading: "What Our Patients Say About Our Care",
        subheading: "Real experiences from individuals and families who trusted us with their smiles.",
        sampleBadge: "Sample Review (Demo Content)",
        verifiedReview: "Verified Patient",
        prevBtn: "Previous",
        nextBtn: "Next"
      },
      appointmentSection: {
        badge: "Easy Scheduling",
        heading: "Book Your Appointment in 60 Seconds",
        subheading: "Select your preferred doctor, time, and service. We will confirm your slot via phone or WhatsApp promptly.",
        nameLabel: "Full Name *",
        namePlaceholder: "e.g., Mohammad Abdullah",
        phoneLabel: "Mobile Number (Bangladeshi 01XXXXXXXXX) *",
        phonePlaceholder: "e.g., 01712345678",
        doctorLabel: "Select Doctor *",
        selectAnyDoctor: "Any Available Specialist",
        serviceLabel: "Select Treatment / Service *",
        selectServicePrompt: "-- Select a Service --",
        dateLabel: "Preferred Appointment Date *",
        timeSlotLabel: "Preferred Time Slot *",
        slotMorning: "Morning Shift (10:00 AM - 1:00 PM)",
        slotEvening: "Evening Shift (4:30 PM - 9:30 PM)",
        messageLabel: "Notes / Specific Symptoms (Optional)",
        messagePlaceholder: "Briefly describe your toothache, bleeding, or consultation needs...",
        submitBtn: "Confirm Appointment Request",
        submittingText: "Scheduling your visit...",
        validationPhoneError: "Please enter a valid 11-digit Bangladeshi mobile number (e.g. 01712345678).",
        validationNameError: "Please enter your full name.",
        validationDateError: "Please select an appointment date.",
        validationSlotError: "Please select your preferred time slot.",
        successTitle: "Appointment Request Received!",
        successMessage: "Thank you, {name}! Your request for {service} with {doctor} on {date} ({slot}) has been placed.",
        successNextStep: "Our reception will call you within 15 minutes to confirm. You can also confirm immediately via WhatsApp:",
        whatsappConfirmBtn: "Confirm Instantly on WhatsApp",
        bookAnotherBtn: "Book Another Appointment"
      },
      faqSection: {
        badge: "Got Questions?",
        heading: "Frequently Asked Questions",
        subheading: "Clear answers to common questions about pain management, treatment costs, and safety."
      },
      contactSection: {
        badge: "Visit Our Chamber",
        heading: "Location & Chamber Hours",
        subheading: "Conveniently situated in Kazihata, Rajshahi with dedicated parking and elevator access.",
        addressTitle: "Clinic Address",
        phoneTitle: "Direct Inquiries",
        emailTitle: "Email Us",
        hoursTitle: "Chamber Timings",
        getDirectionsBtn: "Get Directions on Google Maps",
        emergencyHotlineTitle: "24/7 Dental Emergency Hotline:"
      },
      emergencyBanner: {
        text: "Sudden Severe Toothache or Dental Trauma? Call our 24/7 emergency line right now:",
        btnText: "Call Emergency Hotline"
      },
      stickyMobileBar: {
        callBtn: "Call",
        whatsappBtn: "WhatsApp",
        bookBtn: "Book Appointment"
      },
      footer: {
        quickLinks: "Quick Navigation",
        servicesTitle: "Dental Services",
        contactTitle: "Contact Info",
        copyright: "All rights reserved.",
        disclaimer: "This is a demonstration website showcasing modern digital dentistry solutions in Bangladesh.",
        creditLabel: "Demo website crafted for dentists by"
      }
    },
    bn: {
      siteTitle: "স্মাইলকেয়ার ডেন্টাল অ্যান্ড অর্থোডন্টিক সেন্টার | রাজশাহী",
      nav: {
        home: "হোম",
        services: "চিকিৎসাসমূহ",
        whyUs: "কেন আমরা",
        doctors: "বিশেষজ্ঞ ডাক্তার",
        pricing: "খরচের তালিকা",
        gallery: "ফলাফল",
        reviews: "রোগীর মতামত",
        appointment: "অ্যাপয়েন্টমেন্ট",
        contact: "যোগাযোগ"
      },
      hero: {
        tagline: "আত্মবিশ্বাসী ও সুন্দর হাসির নিশ্চয়তা",
        headline: "রাজশাহীতে আধুনিক ও ব্যথাহীন ডেন্টাল চিকিৎসার সর্বোচ্চ মান",
        subheadline: "ইউরোপীয় ক্লাস-বি অটোক্লেভ জীবাণুমুক্তকরণ, অতি-স্বল্প রেডিয়েশন ডিজিটাল এক্স-রে এবং দেশের শীর্ষ বিশেষজ্ঞ চিকিৎসকদের নিবিড় তত্ত্বাবধানে আন্তর্জাতিক মানের সেবা।",
        btnBook: "অ্যাপয়েন্টমেন্ট নিন",
        btnCall: "সরাসরি কল করুন",
        floatingReview: "১৬,০০০+ সন্তুষ্ট রোগীর আস্থা"
      },
      quickInfo: {
        statusOpen: "বর্তমানে খোলা আছে",
        statusClosed: "বর্তমানে বন্ধ আছে",
        statusFridayMorning: "আজ শুক্রবার: বিকাল ৪:৩০ টায় খুলবে",
        closesAt: "বন্ধ হবে রাত",
        opensAt: "খুলবে সকাল",
        callDirect: "সরাসরি হটলাইন",
        ourLocation: "আমাদের চেম্বার লোকেশন",
        fridaySpecial: "জুমার পর শুক্রবারেও খোলা থাকে"
      },
      servicesSection: {
        badge: "আমাদের সেবাসমূহ",
        heading: "আপনার পরিবারের দাঁত ও মুখের সামগ্রিক চিকিৎসা সেবা",
        subheading: "সাধারণ দাঁত পরিষ্কার থেকে শুরু করে অত্যাধুনিক স্মাইল ডিজাইন—প্রতিটি সেবায় ব্যবহৃত হচ্ছে আন্তর্জাতিক আধুনিক প্রযুক্তি ও ব্যথাহীন পদ্ধতি।",
        startingFrom: "শুরু মাত্র",
        btnBookService: "এই সেবাটি বুক করুন"
      },
      whyUsSection: {
        badge: "কেন আমরা সেরা",
        heading: "রাজশাহীর সচেতন মানুষের আস্থার প্রতীক স্মাইলকেয়ার",
        subheading: "আমরা সর্বোচ্চ পরিচ্ছন্নতা, স্বচ্ছ মূল্যতালিকা এবং অত্যন্ত বিনয়ী ও আন্তরিক সেবার মাধ্যমে প্রতিটি ভিজিটকে নিরাপদ ও নিশ্চিন্ত করি।"
      },
      doctorsSection: {
        badge: "আমাদের বিশেষজ্ঞ দল",
        heading: "বিএমডিসি নিবন্ধিত অভিজ্ঞ ডেন্টাল সার্জনবৃন্দ",
        subheading: "আপনার দাঁতের সুচিকিৎসায় নিয়োজিত রয়েছেন দেশের শীর্ষ মেডিকেল বিশ্ববিদ্যালয় থেকে স্নাতকোত্তর ডিগ্রিধারী দক্ষ ও বিশেষজ্ঞ চিকিৎসকগণ।",
        bmdcPrefix: "রেজিস্ট্রেশন:",
        visitingHoursLabel: "রোগী দেখার সময়:",
        btnBookDoctor: "এই ডাক্তারের সিরিয়াল নিন"
      },
      pricingSection: {
        badge: "স্বচ্ছ মূল্যতালিকা",
        heading: "ন্যায্য ও লিখিত খরচের স্পষ্ট তালিকা",
        subheading: "কোনো গোপন খরচ বা অতিরিক্ত ফি নেই। চিকিৎসা শুরুর পূর্বেই সামগ্রিক খরচের লিখিত পরিকল্পনা বুঝিয়ে দেওয়া হয়।",
        tableColTreatment: "চিকিৎসার নাম",
        tableColStartingPrice: "শুরুর মূল্য (টাকা)",
        tableColNote: "বিবরণ / নিশ্চয়তা",
        pricingDisclaimer: "বিশেষ দ্রষ্টব্য: উল্লেখিত মূল্য প্রাথমিক হিসাব। রোগীর দাঁতের শারীরিক অবস্থা, এক্স-রে ও ক্লিনিক্যাল পরীক্ষার উপর চূড়ান্ত খরচ নির্ভর করে।",
        paymentAccepted: "পেমেন্ট মাধ্যমসমূহ:"
      },
      gallerySection: {
        badge: "চিকিৎসার বাস্তব রূপান্তর",
        heading: "চিকিৎসার আগের ও পরের তুলনামূলক ফলাফল",
        subheading: "স্লাইডারটি ডানে-বামে ড্র্যাগ করে আমাদের চিকিৎসার নিখুঁত পরিবর্তন ও সাফল্য স্বচক্ষে দেখুন।",
        beforeLabel: "চিকিৎসার আগে",
        afterLabel: "চিকিৎসার পরে",
        sliderInstruction: "তুলনা দেখতে মাঝের স্লাইডারটি ডানে-বামে টানুন বা তীর চিহ্ন ব্যবহার করুন",
        selectCase: "কেস স্টাডি নির্বাচন করুন:"
      },
      reviewsSection: {
        badge: "রোগীদের অভিজ্ঞতা",
        heading: "আমাদের সেবা সম্পর্কে রোগীদের অকপট মন্তব্য",
        subheading: "বাস্তব অভিজ্ঞতা—যারা হাসিমুখে আমাদের ক্লিনিক থেকে সুস্থ দাঁত নিয়ে বাড়ি ফিরেছেন।",
        sampleBadge: "নমুনা রিভিউ (ডেমো কন্টেন্ট)",
        verifiedReview: "যাচাইকৃত রোগী",
        prevBtn: "পূর্ববর্তী",
        nextBtn: "পরবর্তী"
      },
      appointmentSection: {
        badge: "সহজে সিরিয়াল নিন",
        heading: "মাত্র ৬০ সেকেন্ডে আপনার অ্যাপয়েন্টমেন্ট নিশ্চিত করুন",
        subheading: "পছন্দের ডাক্তার ও সুবিধাজনক সময় বেছে নিন। আমাদের হেল্পডেস্ক থেকে দ্রুত ফোন বা হোয়াটসঅ্যাপে সিরিয়াল নিশ্চিত করা হবে।",
        nameLabel: "রোগীর পূর্ণ নাম *",
        namePlaceholder: "যেমন: মোহাম্মদ আব্দুল্লাহ",
        phoneLabel: "মোবাইল নম্বর (১১ ডিজিট ০১XXXXXXXXX) *",
        phonePlaceholder: "যেমন: 01712345678",
        doctorLabel: "পছন্দের ডাক্তার নির্বাচন করুন *",
        selectAnyDoctor: "যেকোনো উপলব্ধ বিশেষজ্ঞ ডাক্তার",
        serviceLabel: "চিকিৎসার ধরণ নির্বাচন করুন *",
        selectServicePrompt: "-- একটি চিকিৎসা নির্বাচন করুন --",
        dateLabel: "অ্যাপয়েন্টমেন্টের কাঙ্ক্ষিত তারিখ *",
        timeSlotLabel: "সুবিধাজনক শিফট *",
        slotMorning: "সকাল শিফট (সকাল ১০:০০ - দুপুর ১:০০)",
        slotEvening: "সান্ধ্য শিফট (বিকাল ৪:৩০ - রাত ৯:৩০)",
        messageLabel: "রোগের সংক্ষিপ্ত লক্ষণ বা অতিরিক্ত মন্তব্য (ঐচ্ছিক)",
        messagePlaceholder: "দাঁতের ব্যথা, ফোলা বা কোনো বিশেষ সমস্যার কথা সংক্ষেপে লিখুন...",
        submitBtn: "অ্যাপয়েন্টমেন্ট কনফার্ম করুন",
        submittingText: "সিরিয়াল বুকিং হচ্ছে...",
        validationPhoneError: "অনুগ্রহ করে সঠিক ১১ ডিজিটের মোবাইল নম্বর লিখুন (যেমন: 01712345678)।",
        validationNameError: "অনুগ্রহ করে রোগীর নাম লিখুন।",
        validationDateError: "অনুগ্রহ করে অ্যাপয়েন্টমেন্টের তারিখ নির্বাচন করুন।",
        validationSlotError: "অনুগ্রহ করে সকাল বা সান্ধ্যকালীন শিফট বেছে নিন।",
        successTitle: "অ্যাপয়েন্টমেন্ট সফলভাবে গৃহীত হয়েছে!",
        successMessage: "ধন্যবাদ, {name}! আপনার চিকিৎসা '{service}'-এর জন্য ডাক্তার {doctor}-এর কাছে {date} তারিখে ({slot}) সিরিয়ালের অনুরোধ পাওয়া গেছে।",
        successNextStep: "আমাদের রিসেপশন থেকে ১৫ মিনিটের মধ্যে কল দেওয়া হবে। এছাড়াও আপনি এখনই সরাসরি হোয়াটসঅ্যাপে কনফার্ম করতে পারেন:",
        whatsappConfirmBtn: "হোয়াটসঅ্যাপে সাথে সাথে কনফার্ম করুন",
        bookAnotherBtn: "অন্য রোগীর জন্য সিরিয়াল নিন"
      },
      faqSection: {
        badge: "সাধারণ জিজ্ঞাসা",
        heading: "রোগীদের সচরাচর জিজ্ঞাসিত প্রশ্ন ও উত্তর",
        subheading: "ব্যথাহীন চিকিৎসা, খরচ, জীবাণুমুক্তকরণ এবং ক্লিনিকের নিয়মাবলী সম্পর্কিত বিস্তারিত তথ্য।"
      },
      contactSection: {
        badge: "চেম্বারে আসুন",
        heading: "আমাদের অবস্থান ও চেম্বার শিডিউল",
        subheading: "কাজীহাটা মোড়, রাজশাহীতে নিরিবিলি পরিবেশ, লিফট সুবিধা এবং গাড়ি পার্কিংসহ সুপরিসর ক্লিনিক।",
        addressTitle: "ক্লিনিকের ঠিকানা",
        phoneTitle: "ফোন ও তথ্যসেবা",
        emailTitle: "ইমেইল করুন",
        hoursTitle: "চেম্বার সময়সূচি",
        getDirectionsBtn: "গুগল ম্যাপে দিকনির্দেশনা দেখুন",
        emergencyHotlineTitle: "২৪ ঘণ্টা জরুরি ডেন্টাল হটলাইন:"
      },
      emergencyBanner: {
        text: "হঠাৎ দাঁতের অসহ্য যন্ত্রণা বা রক্তপাত? ২৪ ঘণ্টা খোলা জরুরি নম্বরে অবিলম্বে কল করুন:",
        btnText: "জরুরি কল করুন"
      },
      stickyMobileBar: {
        callBtn: "কল",
        whatsappBtn: "WhatsApp",
        bookBtn: "সিরিয়াল নিন"
      },
      footer: {
        quickLinks: "প্রয়োজনীয় লিংক",
        servicesTitle: "প্রধান চিকিৎসাসমূহ",
        contactTitle: "যোগাযোগের ঠিকানা",
        copyright: "সর্বস্বত্ব সংরক্ষিত।",
        disclaimer: "এটি একটি ডেমো ওয়েবসাইট যা আধুনিক ডেন্টাল ক্লিনিকের জন্য প্রিমিয়াম ওয়েব সল্যুশন প্রদর্শনের উদ্দেশ্যে তৈরি।",
        creditLabel: "ডেন্টাল চিকিৎসকদের জন্য ডেমো পোর্টাল নির্মাণে"
      }
    }
  }
};

// Export to window so it is accessible across script tags without ES module CORS restrictions
if (typeof window !== "undefined") {
  window.CLINIC_CONFIG = CLINIC_CONFIG;
}
