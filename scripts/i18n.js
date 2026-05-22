const translations = {
  es: {
    nav: {
      home: "Inicio",
      about: "Nosotros",
      services: "Servicios",
      contact: "Contacto",
      contact_us: "Contáctanos"
    },
    hero: {
      eyebrow: "Sirviendo desde 2022",
      title: "Urban <span class=\"grad\">Barber</span>",
      sub: "Bienvenido a un espacio donde la precisión, el estilo y la atención personalizada se combinan para ayudarte a lucir y sentirte de la mejor manera.",
      contact_us: "Contáctanos",
      scroll: "Bajar"
    },
    welcome: {
      eyebrow: "Nuestra Historia",
      title: "Bienvenido a <span class=\"grad\">Urban Barber</span>",
      p: "No creemos en los cortes de cabello genéricos. Cada persona tiene una esencia única, y nuestro trabajo es ayudarte a proyectarla de manera auténtica.<br><br>Somos una barbería enfocada en los detalles, la estructura facial y la imagen personal. Nos esforzamos para que cada cliente se vaya con un estilo que realmente conecte con su personalidad, su rostro y su estilo de vida.<br>Aquí, el servicio es directo, profesional y natural. Sin exageraciones. Solo buen trabajo, buenas vibras y resultados notables.",
      quote: "“No viniste a este mundo para ser una cara más en la multitud, sino para expresar algo único.”",
      quote_cite: "-Paramahansa Yogananda",
      btn: "Ver Servicios →"
    },
    services: {
      eyebrow: "Lo que ofrecemos",
      title: "Servicios",
      haircut_title: "✂ Corte de Cabello",
      haircut_all: "Corte de cabello (general)",
      haircut_facial: "Limpieza facial",
      haircut_beard: "Barba",
      haircut_kids: "Niños",
      combos_title: "🧔 Combos",
      combo_1: "Corte + Facial",
      combo_2: "Corte + Arreglo de barba",
      combo_3: "Corte + Arreglo de barba + Facial",
      other_title: "✨ Otros Servicios",
      other_decolorate_hair: "Decoloración de cabello",
      other_decolorate_beard: "Decoloración de barba",
      other_facial: "Limpieza facial",
      other_wash: "Lavado de cabello"
    },
    feedback: {
      eyebrow: "Testimonios",
      title: "Lo que dicen de <span class=\"grad\">nosotros</span>",
      review_1: "\"Buena atención\"",
      review_2: "\"Me gustó mucho la personalización de los servicios\"",
      review_3: "\"Me encantó el seguimiento que le da a cada corte.\""
    },
    findus: {
      eyebrow: "Ubicación",
      title: "Encuéntranos <span class=\"grad\">en</span>",
      hours_title: "Horario de <span class=\"grad\">Atención</span>",
      day_monday: "Lunes",
      day_tuesday: "Martes",
      day_wednesday: "Miércoles",
      day_thursday: "Jueves",
      day_friday: "Viernes",
      day_saturday: "Sábado",
      appointment: "Reservar una cita"
    },
    footer: {
      premium: "Barbería Premium",
      rights: "© 2025 Urban Barber — Todos los derechos reservados &nbsp;",
      made_by: "Hecho con ❤️ por"
    }
  },
  en: {
    nav: {
      home: "Home",
      about: "About us",
      services: "Service",
      contact: "Contact",
      contact_us: "Contact US"
    },
    hero: {
      eyebrow: "Serving since 2022",
      title: "Urban <span class=\"grad\">Barber</span>",
      sub: "Welcome to a space where precision, style, and personalized attention combine to help you look and feel your best.",
      contact_us: "Contact US",
      scroll: "Scroll"
    },
    welcome: {
      eyebrow: "Our Story",
      title: "Welcome to <span class=\"grad\">Urban Barber</span>",
      p: "We don't believe in generic haircuts. Each person has a unique essence, and our job is to help you project it authentically.<br><br>We're a barbershop focused on details, facial structure, and personal image. We strive to ensure each client leaves with a style that truly connects with their personality, their face, and their lifestyle.<br>Here, the service is direct, professional, and natural. No exaggeration. Just good work, good vibes, and noticeable results.",
      quote: "“You didn’t come into this world to be just another face in the crowd, but to express something unique.”",
      quote_cite: "-Paramahansa Yogananda",
      btn: "View Services →"
    },
    services: {
      eyebrow: "What we offer",
      title: "Services",
      haircut_title: "✂ HairCut",
      haircut_all: "Haircut (all)",
      haircut_facial: "Face Facial",
      haircut_beard: "Beard Trim",
      haircut_kids: "Kids",
      combos_title: "🧔 Combos",
      combo_1: "Haircut + Face facial",
      combo_2: "Haircut + Beard Trim",
      combo_3: "Haircut + Beard Trim + Face Facial",
      other_title: "✨ Other Services",
      other_decolorate_hair: "Decolorate hair",
      other_decolorate_beard: "Decolorate beard",
      other_facial: "Face facial",
      other_wash: "Hair wash"
    },
    feedback: {
      eyebrow: "Testimonials",
      title: "What they said about <span class=\"grad\">us</span>",
      review_1: "\"Good attention\"",
      review_2: "\"I really liked the personalization of the services\"",
      review_3: "\"I loved the follow-up she gives with each cut.\""
    },
    findus: {
      eyebrow: "Location",
      title: "Find us <span class=\"grad\">in</span>",
      hours_title: "Opening <span class=\"grad\">Hours</span>",
      day_monday: "Monday",
      day_tuesday: "Tuesday",
      day_wednesday: "Wednesday",
      day_thursday: "Thursday",
      day_friday: "Friday",
      day_saturday: "Saturday",
      appointment: "Book an appointment"
    },
    footer: {
      premium: "Premium Barber Shop",
      rights: "© 2025 Urban Barber — All rights reserved &nbsp;",
      made_by: "Made with ❤️ by"
    }
  }
};

let currentLang = 'es';

function getNestedTranslation(obj, path) {
  return path.split('.').reduce((prev, curr) => prev ? prev[curr] : null, obj);
}

function updateContent() {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    const translation = getNestedTranslation(translations[currentLang], key);
    if (translation !== undefined && translation !== null) {
      if (element.getAttribute('data-i18n-html') === 'true') {
        element.innerHTML = translation;
      } else {
        element.textContent = translation;
      }
    }
  });

  // Update language toggle button text and aria-label
  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.textContent = currentLang.toUpperCase();
    langToggle.setAttribute('aria-label', `Switch language (current: ${currentLang.toUpperCase()})`);
    langToggle.setAttribute('title', `Switch language (current: ${currentLang.toUpperCase()})`);
  }

  // Set html lang attribute
  document.documentElement.setAttribute('lang', currentLang);
}

function toggleLanguage() {
  currentLang = currentLang === 'es' ? 'en' : 'es';
  localStorage.setItem('bs-lang', currentLang);
  updateContent();
}

function initLanguage() {
  const savedLang = localStorage.getItem('bs-lang');
  if (savedLang && (savedLang === 'es' || savedLang === 'en')) {
    currentLang = savedLang;
  } else {
    // Default to Spanish when there's no saved preference
    currentLang = 'es';
    localStorage.setItem('bs-lang', currentLang);
  }

  // Bind click event to toggle button
  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.addEventListener('click', toggleLanguage);
  }

  updateContent();
}

// Initialise language when DOM content is loaded
document.addEventListener('DOMContentLoaded', initLanguage);
