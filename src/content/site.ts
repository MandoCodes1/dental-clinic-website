import type { Lang } from '~/i18n';
import type { PriceId, ServiceId } from '~/config';

// All translatable copy lives here once per locale. The shared SiteCopy type
// forces Spanish and English to stay structurally identical (a missing field is
// a compile error), which replaces the old duplicated-per-page approach.

export interface MetaEntry {
  title: string;
  description: string;
}
export interface ServiceItem {
  id: ServiceId;
  title: string;
  description: string;
}
export interface ServiceDetail {
  id: ServiceId;
  title: string;
  lead: string;
  points: string[];
}
export interface TimelineItem {
  title: string;
  org: string;
  date: string;
}
export interface ExperienceItem {
  role: string;
  org: string;
  period: string;
  bullets: string[];
}
export interface ValueItem {
  title: string;
  description: string;
}
export interface PriceItem {
  id: PriceId;
  label: string;
  note?: string;
}
export interface PriceGroup {
  title: string;
  items: PriceItem[];
}

export interface SiteCopy {
  nav: {
    home: string;
    about: string;
    services: string;
    prices: string;
    reviews: string;
    gallery: string;
    products: string;
    contact: string;
    book: string;
  };
  meta: Record<'home' | 'about' | 'services' | 'prices' | 'gallery' | 'reviews' | 'contact' | 'products', MetaEntry>;
  a11y: { skip: string; openMenu: string; closeMenu: string; switchLang: string };
  hero: { eyebrow: string; title: string; subtitle: string; ctaBook: string; ctaReviews: string; availability: string };
  credentials: {
    title: string;
    yearsLabel: string;
    patientsLabel: string;
    reviewsLabel: string;
    awardValue: string;
    awardLabel: string;
    note: string;
  };
  values: { eyebrow: string; title: string; items: ValueItem[] };
  services: { eyebrow: string; title: string; subtitle: string; learnMore: string; items: ServiceItem[] };
  servicesPage: { lead: string; details: ServiceDetail[] };
  pricesPage: {
    title: string;
    lead: string;
    from: string;
    disclaimer: string;
    groups: PriceGroup[];
    cbctNote: string;
    askQuote: string;
    askQuoteCta: string;
  };
  featuredReviews: { eyebrow: string; title: string; subtitle: string; viewAll: string };
  about: {
    eyebrow: string;
    title: string;
    lead: string;
    educationTitle: string;
    education: TimelineItem[];
    experienceTitle: string;
    experience: ExperienceItem[];
    credsTitle: string;
    memberships: string[];
    personalTitle: string;
    personal: string;
    cvCta: string;
  };
  reviewsPage: { lead: string; malagaTitle: string; londonTitle: string; cta: string };
  productsPage: {
    eyebrow: string;
    title: string;
    lead: string;
    disclosure: string;
    amazonStatement: string;
    buyLabel: string;
    categories: Record<string, string>;
  };
  gallery: {
    lead: string;
    before: string;
    after: string;
    caseLabel: string;
    comingSoonTitle: string;
    comingSoon: string;
  };
  contact: {
    lead: string;
    whatsappTitle: string;
    whatsappBody: string;
    emailTitle: string;
    locationTitle: string;
    hoursTitle: string;
    hoursBody: string;
    directions: string;
  };
  contactCta: {
    button: string;
    home: { title: string; body: string };
    about: { title: string; body: string };
    services: { title: string; body: string };
    prices: { title: string; body: string };
    reviews: { title: string; body: string };
    gallery: { title: string; body: string };
    products: { title: string; body: string };
  };
  footer: { tagline: string; servicesTitle: string; navTitle: string; contactTitle: string; rights: string };
  common: { readMore: string; readLess: string; viewReview: string; whatsapp: string; backHome: string };
  langSuggest: { message: string; cta: string; dismiss: string };
}

const es: SiteCopy = {
  nav: {
    home: 'Inicio',
    about: 'Sobre mí',
    services: 'Servicios',
    prices: 'Precios',
    reviews: 'Reseñas',
    gallery: 'Galería',
    products: 'Productos',
    contact: 'Contacto',
    book: 'Pedir cita',
  },
  meta: {
    home: {
      title: 'Dra. Eugenia Vila - Clínica Dental en El Palo, Málaga',
      description:
        'Clínica dental en El Palo, Málaga. Más de 30 años de experiencia en implantes, cirugía oral, alineadores y estética dental. Trato cercano y precios justos: te atiende siempre la Dra. Eugenia Vila.',
    },
    about: {
      title: 'Sobre mí - Dra. Eugenia Vila',
      description:
        'Conoce a la Dra. Eugenia Vila: doctora en Medicina y Odontología, máster en Implantología y Estética, más de 30 años de experiencia y Dentista del Año 2024.',
    },
    services: {
      title: 'Servicios - Dra. Eugenia Vila',
      description:
        'Implantes dentales, cirugía oral, alineadores y odontología estética en El Palo, Málaga. Tratamientos de calidad con materiales de primera y precios justos.',
    },
    prices: {
      title: 'Precios - Dra. Eugenia Vila',
      description:
        'Precios de la clínica dental de la Dra. Eugenia Vila en El Palo, Málaga: implantes, empastes, limpieza, blanqueamiento, alineadores y más. Precios claros y cerrados, sin sorpresas.',
    },
    gallery: {
      title: 'Antes y después - Dra. Eugenia Vila',
      description:
        'Casos reales de pacientes tratados por la Dra. Eugenia Vila: implantes, rehabilitaciones completas y estética dental.',
    },
    reviews: {
      title: 'Reseñas - Dra. Eugenia Vila',
      description:
        'Reseñas reales de 5 estrellas de pacientes de la Dra. Eugenia Vila en Málaga y Londres, en Google y Trustpilot.',
    },
    contact: {
      title: 'Contacto - Dra. Eugenia Vila',
      description:
        'Pide tu cita en la clínica dental de la Dra. Eugenia Vila en El Palo, Málaga. WhatsApp +34 679 975 580.',
    },
    products: {
      title: 'Productos recomendados - Dra. Eugenia Vila',
      description:
        'Productos de cuidado bucal recomendados por la Dra. Eugenia Vila: cepillado, limpieza interdental y más, seleccionados por criterio clínico.',
    },
  },
  a11y: { skip: 'Saltar al contenido', openMenu: 'Abrir menú', closeMenu: 'Cerrar menú', switchLang: 'Ver en inglés' },
  hero: {
    eyebrow: 'Clínica dental en El Palo, Málaga',
    title: 'Tu sonrisa, en las mejores manos',
    subtitle:
      'Más de 30 años cuidando sonrisas en Málaga, con un trato cercano y honesto. Te atiende siempre la Dra. Eugenia Vila en persona, sin prisas y con precios justos.',
    ctaBook: 'Pedir cita por WhatsApp',
    ctaReviews: 'Ver reseñas',
    availability: 'Con cita previa · Te responde la propia doctora',
  },
  credentials: {
    title: 'Una trayectoria que habla por sí sola',
    yearsLabel: 'Años de experiencia',
    patientsLabel: 'Pacientes atendidos',
    reviewsLabel: 'Reseñas de 5 estrellas',
    awardValue: '2024',
    awardLabel: 'Dentista del Año',
    note: 'Galardonada Dentista del Año 2024 (Dental Art Implant Clinics, Londres) · Doctora en Medicina y Odontología · Registro GDC 287705',
  },
  values: {
    eyebrow: 'Por qué sus pacientes la recomiendan',
    title: 'Cuidado de verdad, no de cadena',
    items: [
      {
        title: 'Te atiende siempre la Dra. Vila',
        description: 'Una sola dentista que te conoce y te sigue en cada visita, sin rotación de personal.',
      },
      {
        title: 'Precios justos y claros',
        description: 'Tratamientos de calidad a precios honestos. Te explico el coste antes de empezar, sin sorpresas.',
      },
      {
        title: 'Materiales de primera',
        description: 'Solo materiales de la más alta calidad, los mismos que usaría para mi propia familia.',
      },
      {
        title: 'Tiempo para ti',
        description: 'Citas sin prisas, con tiempo para escucharte y explicarte cada paso del tratamiento.',
      },
    ],
  },
  services: {
    eyebrow: 'Tratamientos',
    title: 'Odontología completa, hecha a tu medida',
    subtitle: 'Desde una revisión hasta una rehabilitación completa, siempre con un plan pensado para ti.',
    learnMore: 'Saber más',
    items: [
      {
        id: 'implants',
        title: 'Implantes dentales',
        description: 'Recupera dientes perdidos con implantes que se ven y se sienten naturales.',
      },
      {
        id: 'oral',
        title: 'Cirugía oral',
        description: 'Extracciones, injertos y cirugía con técnica cuidadosa y planificación digital.',
      },
      {
        id: 'aligners',
        title: 'Alineadores',
        description: 'Endereza tu sonrisa de forma discreta y cómoda, sin brackets metálicos.',
      },
      {
        id: 'cosmetic',
        title: 'Estética dental',
        description: 'Carillas, blanqueamiento y reconstrucciones que respetan tu sonrisa natural.',
      },
    ],
  },
  servicesPage: {
    lead: 'Cada tratamiento empieza por escucharte. Estudio tu caso con calma y te propongo solo lo que de verdad necesitas.',
    details: [
      {
        id: 'implants',
        title: 'Implantes dentales',
        lead: 'Recupera dientes perdidos con implantes que se ven, se sienten y funcionan como los tuyos.',
        points: [
          'Implante unitario, múltiple o rehabilitación completa de la boca',
          'Planificación digital a partir de imagen 3D (CBCT)',
          'Injertos óseos y elevación de seno cuando hacen falta',
          'Revisiones y mantenimiento a largo plazo',
        ],
      },
      {
        id: 'oral',
        title: 'Cirugía oral',
        lead: 'Extracciones y cirugía con técnica cuidadosa para una recuperación cómoda.',
        points: [
          'Extracciones simples y de muelas del juicio',
          'Cirugía guiada y mínimamente invasiva',
          'Injertos óseos y preparación para implantes',
          'Seguimiento postoperatorio cercano',
        ],
      },
      {
        id: 'aligners',
        title: 'Alineadores',
        lead: 'Endereza tu sonrisa de forma discreta, sin brackets metálicos.',
        points: [
          'Alineadores transparentes y cómodos',
          'Plan de tratamiento hecho a tu medida',
          'Ideales para apiñamiento y espacios entre dientes',
          'Controles regulares para seguir el avance',
        ],
      },
      {
        id: 'cosmetic',
        title: 'Estética dental',
        lead: 'Mejora tu sonrisa respetando siempre tu aspecto natural.',
        points: [
          'Carillas y reconstrucciones estéticas',
          'Blanqueamiento dental profesional',
          'Reparación de empastes y bordes desgastados',
          'Diseño de sonrisa personalizado',
        ],
      },
    ],
  },
  pricesPage: {
    title: 'Precios claros, sin sorpresas',
    lead: 'Creo que debes saber lo que cuesta tu tratamiento antes de sentarte en el sillón. Estos son mis precios de partida, sin letra pequeña.',
    from: 'desde',
    disclaimer:
      'Precios orientativos para casos de complejidad baja. Tras la primera valoración recibirás un presupuesto cerrado y por escrito, sin compromiso: el precio acordado es el que pagas.',
    groups: [
      {
        title: 'Implantes',
        items: [{ id: 'implantCrown', label: 'Implante + corona de porcelana', note: 'Corona incluida en el precio' }],
      },
      {
        title: 'Odontología general',
        items: [
          { id: 'cleaning', label: 'Limpieza dental' },
          { id: 'filling', label: 'Empaste de composite' },
          { id: 'reconstruction', label: 'Reconstrucción' },
          { id: 'extraction', label: 'Extracción simple' },
        ],
      },
      {
        title: 'Estética y coronas',
        items: [
          { id: 'zirconiaCrown', label: 'Corona de zirconio' },
          { id: 'compositeVeneer', label: 'Carilla de composite', note: 'Por unidad' },
          {
            id: 'whitening',
            label: 'Blanqueamiento dental',
            note: 'Incluye férulas a medida superior e inferior y las jeringas de blanqueamiento',
          },
        ],
      },
      {
        title: 'Ortodoncia',
        items: [
          {
            id: 'aligners',
            label: 'Ortodoncia con alineadores Ordoline',
            note: 'Una arcada. El precio final depende de la complejidad del caso y del número de arcadas',
          },
        ],
      },
    ],
    cbctNote:
      'La colocación de implantes requiere un TAC 3D (CBCT), que se realiza en un centro radiológico externo. La Dra. Vila lee y valora la prueba personalmente, como hace a diario en su consulta de Londres, y esa valoración está incluida en tu plan de tratamiento.',
    askQuote: '¿Buscas otro tratamiento? Escríbeme y te digo el precio sin compromiso.',
    askQuoteCta: 'Pedir presupuesto por WhatsApp',
  },
  featuredReviews: {
    eyebrow: 'Opiniones reales',
    title: 'Lo que dicen sus pacientes',
    subtitle: 'Reseñas verificadas de Google y Trustpilot.',
    viewAll: 'Ver todas las reseñas',
  },
  about: {
    eyebrow: 'Sobre mí',
    title: 'Dra. Eugenia Vila',
    lead: 'Soy Eugenia Vila, dentista y médico, y llevo más de 30 años cuidando la salud bucal de familias en Málaga. Me formé en Implantología (UIC Barcelona) y en Estética (Universidad de Córdoba), y atiendo cada caso de forma personal y sin prisas, poniendo siempre al paciente por delante.',
    educationTitle: 'Formación',
    education: [
      { title: 'Máster en Medicina Estética', org: 'Universidad de Córdoba', date: '2008 - 2009' },
      {
        title: 'Máster en Implantología',
        org: 'Universitat Internacional de Catalunya (UIC), Barcelona',
        date: '2002 - 2003',
      },
      { title: 'Convalidación del título de Odontología', org: 'Universidad de Murcia', date: '1993 - 1994' },
      { title: 'Grado en Odontología (BDS)', org: 'UNIBE, Santo Domingo', date: '1989 - 1991' },
      { title: 'Licenciatura en Medicina (MBBS)', org: 'Universidad de Málaga', date: '1982 - 1989' },
    ],
    experienceTitle: 'Experiencia',
    experience: [
      {
        role: 'Implantóloga',
        org: 'Dental Art Implant Clinics, Londres',
        period: '2022 - actualidad',
        bullets: [
          'Tratamientos complejos de implantes y rehabilitaciones completas con flujo de trabajo digital (CBCT y escáner intraoral).',
          'Galardonada Dentista del Año 2024 por sus resultados y la satisfacción de sus pacientes.',
        ],
      },
      {
        role: 'Odontóloga y cirujana',
        org: 'Clínica Dental Dra. Eugenia Vila, Málaga',
        period: '1994 - 2022',
        bullets: [
          'Más de 20.000 pacientes atendidos en consulta privada durante 28 años.',
          'Miles de implantes, cirugías, tratamientos y reconstrucciones estéticas.',
          'Trato personal y seguimiento cercano de cada paciente y su familia.',
        ],
      },
    ],
    credsTitle: 'Colegiación y membresías',
    memberships: [
      'Doctora en Medicina y Cirugía y Licenciada en Odontología',
      'Ilustre Colegio de Dentistas de Málaga (colegiada desde 1994)',
      'Royal College of Surgeons of Ireland (RCSI), afiliada desde 2021',
      'Registro GDC (Reino Unido): 287705',
    ],
    personalTitle: 'Más allá de la consulta',
    personal:
      'Fuera de la clínica, mi familia es lo primero: tengo dos hijos con los que me encanta pasar el tiempo. Disfruto del tenis, viajar, cocinar y cuidarme con una vida sana. Creo en tratar a cada paciente como me gustaría que tratasen a los míos.',
    cvCta: 'Descargar CV (PDF)',
  },
  reviewsPage: {
    lead: 'Reseñas reales de pacientes, sin filtros. Estas son algunas de las personas que han confiado en la Dra. Vila.',
    malagaTitle: 'En Málaga',
    londonTitle: 'En Londres, donde la Dra. Vila también ejerce',
    cta: 'Deja tu reseña en Google',
  },
  productsPage: {
    eyebrow: 'Recomendaciones',
    title: 'Productos que recomiendo',
    lead: 'Estos son algunos de los productos de cuidado bucal que recomiendo a mis pacientes. Los elijo por criterio clínico; tú decides si te encajan.',
    disclosure:
      'Algunos enlaces de esta página son enlaces de afiliado de Amazon: si compras a través de ellos, recibo una pequeña comisión sin coste adicional para ti. Recomiendo estos productos por su utilidad clínica, no por la comisión.',
    amazonStatement:
      'En calidad de Afiliado de Amazon, obtengo ingresos por las compras adscritas que cumplen los requisitos aplicables.',
    buyLabel: 'Ver en Amazon',
    categories: {
      brushing: 'Cepillado',
      interdental: 'Limpieza interdental',
    },
  },
  gallery: {
    lead: 'Casos reales tratados por la Dra. Vila. Cada sonrisa cuenta una historia.',
    before: 'Antes',
    after: 'Después',
    caseLabel: 'Caso',
    comingSoonTitle: 'Pronto, más casos',
    comingSoon:
      'Estamos preparando más casos para compartir. Mientras tanto, puedes ver las experiencias de sus pacientes en las reseñas.',
  },
  contact: {
    lead: 'Pide tu cita o cuéntame tu caso. Te atiendo yo misma, sin intermediarios.',
    whatsappTitle: 'WhatsApp',
    whatsappBody: 'La forma más rápida de contactar. Te respondo personalmente.',
    emailTitle: 'Email',
    locationTitle: 'La clínica',
    hoursTitle: 'Horario y citas',
    hoursBody:
      'Atiendo con cita previa. Paso consulta en Málaga en periodos concretos del año; escríbeme por WhatsApp y buscamos juntos el mejor momento para verte.',
    directions: 'Cómo llegar',
  },
  contactCta: {
    button: 'Escribir por WhatsApp',
    home: {
      title: '¿Damos el primer paso hacia tu sonrisa?',
      body: 'Escríbeme por WhatsApp y te respondo yo misma, sin compromiso.',
    },
    about: {
      title: 'Ahora que me conoces un poco, ¿hablamos?',
      body: 'Escríbeme por WhatsApp y te respondo yo misma, igual que en la consulta.',
    },
    services: {
      title: '¿Tienes dudas sobre qué tratamiento necesitas?',
      body: 'Cuéntame qué te preocupa por WhatsApp y te respondo yo misma, sin compromiso.',
    },
    prices: {
      title: '¿Quieres un presupuesto cerrado para tu caso?',
      body: 'Escríbeme por WhatsApp, cuéntame qué necesitas y te doy un presupuesto por escrito, sin compromiso.',
    },
    reviews: {
      title: '¿Quieres el trato que cuentan mis pacientes?',
      body: 'Escríbeme por WhatsApp y te respondo yo misma, sin compromiso.',
    },
    gallery: {
      title: '¿Te imaginas tu propio antes y después?',
      body: 'Escríbeme por WhatsApp y te respondo yo misma, sin compromiso.',
    },
    products: {
      title: '¿No sabes cuál es el mejor para tu caso?',
      body: 'Escríbeme por WhatsApp y te oriento yo misma, sin compromiso.',
    },
  },
  footer: {
    tagline: 'Clínica dental en El Palo, Málaga. Cuidado cercano y honesto desde 1994.',
    servicesTitle: 'Servicios',
    navTitle: 'Navegación',
    contactTitle: 'Contacto',
    rights: 'Todos los derechos reservados.',
  },
  common: {
    readMore: 'Leer más',
    readLess: 'Leer menos',
    viewReview: 'Ver reseña',
    whatsapp: 'WhatsApp',
    backHome: 'Volver al inicio',
  },
  langSuggest: {
    message: 'Esta web también está disponible en español.',
    cta: 'Ver en español',
    dismiss: 'Cerrar',
  },
};

const en: SiteCopy = {
  nav: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    prices: 'Prices',
    reviews: 'Reviews',
    gallery: 'Gallery',
    products: 'Products',
    contact: 'Contact',
    book: 'Book a visit',
  },
  meta: {
    home: {
      title: 'Dr. Eugenia Vila - Dental Clinic in El Palo, Málaga',
      description:
        'Dental clinic in El Palo, Málaga. Over 30 years of experience in implants, oral surgery, aligners and cosmetic dentistry. Warm, honest care at fair prices, always with Dr. Eugenia Vila herself.',
    },
    about: {
      title: 'About - Dr. Eugenia Vila',
      description:
        'Meet Dr. Eugenia Vila: doctor of Medicine and Dentistry, with master’s degrees in Implantology and Aesthetics, over 30 years of experience and Dentist of the Year 2024.',
    },
    services: {
      title: 'Services - Dr. Eugenia Vila',
      description:
        'Dental implants, oral surgery, aligners and cosmetic dentistry in El Palo, Málaga. Quality treatment with premium materials at fair prices.',
    },
    prices: {
      title: 'Prices - Dr. Eugenia Vila',
      description:
        'Prices at Dr. Eugenia Vila’s dental clinic in El Palo, Málaga: implants, fillings, cleaning, whitening, aligners and more. Clear, fixed prices with no surprises.',
    },
    gallery: {
      title: 'Before & after - Dr. Eugenia Vila',
      description:
        'Real patient cases treated by Dr. Eugenia Vila: implants, full-mouth rehabilitations and cosmetic dentistry.',
    },
    reviews: {
      title: 'Reviews - Dr. Eugenia Vila',
      description:
        'Real 5-star reviews from Dr. Eugenia Vila’s patients in Málaga and London, on Google and Trustpilot.',
    },
    contact: {
      title: 'Contact - Dr. Eugenia Vila',
      description:
        'Book an appointment at Dr. Eugenia Vila’s dental clinic in El Palo, Málaga. WhatsApp +34 679 975 580.',
    },
    products: {
      title: 'Recommended products - Dr. Eugenia Vila',
      description:
        'Oral-care products recommended by Dr. Eugenia Vila: brushing, interdental cleaning and more, chosen on clinical grounds.',
    },
  },
  a11y: { skip: 'Skip to content', openMenu: 'Open menu', closeMenu: 'Close menu', switchLang: 'View in Spanish' },
  hero: {
    eyebrow: 'Dental clinic in El Palo, Málaga',
    title: 'Your smile, in the best hands',
    subtitle:
      'Over 30 years caring for smiles in Málaga, with warm, honest treatment. You are always seen personally by Dr. Eugenia Vila, unhurried and at fair prices.',
    ctaBook: 'Book on WhatsApp',
    ctaReviews: 'Read reviews',
    availability: 'By appointment · The doctor replies to you herself',
  },
  credentials: {
    title: 'A career that speaks for itself',
    yearsLabel: 'Years of experience',
    patientsLabel: 'Patients treated',
    reviewsLabel: '5-star reviews',
    awardValue: '2024',
    awardLabel: 'Dentist of the Year',
    note: 'Awarded Dentist of the Year 2024 (Dental Art Implant Clinics, London) · Doctor of Medicine and Dentistry · GDC reg. 287705',
  },
  values: {
    eyebrow: 'Why her patients recommend her',
    title: 'Real care, not a chain',
    items: [
      {
        title: 'Always treated by Dr. Vila herself',
        description: 'One dentist who knows you and follows your care at every visit, with no staff rotation.',
      },
      {
        title: 'Fair, clear prices',
        description: 'Quality treatment at honest prices. I explain the cost before we start, with no surprises.',
      },
      {
        title: 'Premium materials',
        description: 'Only the highest-quality materials, the same ones I would use for my own family.',
      },
      {
        title: 'Time for you',
        description: 'Unhurried appointments, with time to listen and explain every step of your treatment.',
      },
    ],
  },
  services: {
    eyebrow: 'Treatments',
    title: 'Complete dentistry, tailored to you',
    subtitle: 'From a check-up to a full-mouth rehabilitation, always with a plan made for you.',
    learnMore: 'Learn more',
    items: [
      {
        id: 'implants',
        title: 'Dental implants',
        description: 'Replace missing teeth with implants that look and feel completely natural.',
      },
      {
        id: 'oral',
        title: 'Oral surgery',
        description: 'Extractions, grafts and surgery with careful technique and digital planning.',
      },
      {
        id: 'aligners',
        title: 'Aligners',
        description: 'Straighten your smile discreetly and comfortably, with no metal braces.',
      },
      {
        id: 'cosmetic',
        title: 'Cosmetic dentistry',
        description: 'Veneers, whitening and restorations that respect your natural smile.',
      },
    ],
  },
  servicesPage: {
    lead: 'Every treatment starts by listening to you. I study your case calmly and only recommend what you truly need.',
    details: [
      {
        id: 'implants',
        title: 'Dental implants',
        lead: 'Replace missing teeth with implants that look, feel and work like your own.',
        points: [
          'Single, multiple or full-mouth implant rehabilitation',
          'Digital planning from 3D imaging (CBCT)',
          'Bone grafts and sinus lifts when needed',
          'Long-term check-ups and maintenance',
        ],
      },
      {
        id: 'oral',
        title: 'Oral surgery',
        lead: 'Extractions and surgery with careful technique for a comfortable recovery.',
        points: [
          'Simple and wisdom-tooth extractions',
          'Guided, minimally invasive surgery',
          'Bone grafts and preparation for implants',
          'Close post-operative follow-up',
        ],
      },
      {
        id: 'aligners',
        title: 'Aligners',
        lead: 'Straighten your smile discreetly, with no metal braces.',
        points: [
          'Clear, comfortable aligners',
          'A treatment plan tailored to you',
          'Ideal for crowding and gaps between teeth',
          'Regular check-ins to track progress',
        ],
      },
      {
        id: 'cosmetic',
        title: 'Cosmetic dentistry',
        lead: 'Improve your smile while always respecting your natural look.',
        points: [
          'Veneers and aesthetic restorations',
          'Professional teeth whitening',
          'Repair of worn fillings and edges',
          'Personalised smile design',
        ],
      },
    ],
  },
  pricesPage: {
    title: 'Clear prices, no surprises',
    lead: 'I believe you should know what your treatment costs before you sit in the chair. These are my starting prices, with no small print.',
    from: 'from',
    disclaimer:
      'Guide prices for straightforward cases. After your first assessment you will receive a fixed, written quote with no obligation: the price we agree is the price you pay.',
    groups: [
      {
        title: 'Implants',
        items: [{ id: 'implantCrown', label: 'Implant + porcelain crown', note: 'Crown included in the price' }],
      },
      {
        title: 'General dentistry',
        items: [
          { id: 'cleaning', label: 'Dental cleaning' },
          { id: 'filling', label: 'Composite filling' },
          { id: 'reconstruction', label: 'Tooth build-up (reconstruction)' },
          { id: 'extraction', label: 'Simple extraction' },
        ],
      },
      {
        title: 'Cosmetic & crowns',
        items: [
          { id: 'zirconiaCrown', label: 'Zirconia crown' },
          { id: 'compositeVeneer', label: 'Composite veneer', note: 'Per tooth' },
          {
            id: 'whitening',
            label: 'Teeth whitening',
            note: 'Includes custom upper and lower trays and the whitening gel syringes',
          },
        ],
      },
      {
        title: 'Orthodontics',
        items: [
          {
            id: 'aligners',
            label: 'Ordoline clear aligners',
            note: 'One arch. The final price depends on case complexity and the number of arches',
          },
        ],
      },
    ],
    cbctNote:
      'Implant placement requires a 3D scan (CBCT), taken at an external radiology centre. Dr. Vila reads and assesses the scan personally, as she does daily in her London practice, and that assessment is included in your treatment plan.',
    askQuote: 'Looking for another treatment? Message me and I will tell you the price, no obligation.',
    askQuoteCta: 'Ask for a quote on WhatsApp',
  },
  featuredReviews: {
    eyebrow: 'Real opinions',
    title: 'What her patients say',
    subtitle: 'Verified reviews from Google and Trustpilot.',
    viewAll: 'Read all reviews',
  },
  about: {
    eyebrow: 'About',
    title: 'Dr. Eugenia Vila',
    lead: 'I’m Eugenia Vila, a dentist and medical doctor, and I’ve spent over 30 years caring for the oral health of families in Málaga. I trained in Implantology (UIC Barcelona) and Aesthetics (University of Córdoba), and I treat every case personally and unhurried, always putting the patient first.',
    educationTitle: 'Education',
    education: [
      { title: 'Master’s in Aesthetic Medicine', org: 'University of Córdoba', date: '2008 - 2009' },
      {
        title: 'Master’s in Implantology',
        org: 'Universitat Internacional de Catalunya (UIC), Barcelona',
        date: '2002 - 2003',
      },
      { title: 'Dental Degree Validation', org: 'University of Murcia', date: '1993 - 1994' },
      { title: 'Bachelor of Dental Surgery (BDS)', org: 'UNIBE, Santo Domingo', date: '1989 - 1991' },
      { title: 'Degree in Medicine (MBBS)', org: 'University of Málaga', date: '1982 - 1989' },
    ],
    experienceTitle: 'Experience',
    experience: [
      {
        role: 'Implantologist',
        org: 'Dental Art Implant Clinics, London',
        period: '2022 - present',
        bullets: [
          'Complex implant treatments and full-mouth rehabilitations with a fully digital workflow (CBCT and intraoral scanning).',
          'Awarded Dentist of the Year 2024 for her clinical results and patient satisfaction.',
        ],
      },
      {
        role: 'Dentist and surgeon',
        org: 'Clínica Dental Dra. Eugenia Vila, Málaga',
        period: '1994 - 2022',
        bullets: [
          'More than 20,000 patients treated in private practice over 28 years.',
          'Thousands of implants, surgeries, treatments and aesthetic restorations.',
          'Personal care and close follow-up of every patient and their family.',
        ],
      },
    ],
    credsTitle: 'Registration & memberships',
    memberships: [
      'Doctor of Medicine and Surgery, and Licensed Dentist',
      'Official College of Dentists of Málaga (registered since 1994)',
      'Royal College of Surgeons of Ireland (RCSI), affiliate since 2021',
      'GDC registration (United Kingdom): 287705',
    ],
    personalTitle: 'Beyond the clinic',
    personal:
      'Outside the clinic, my family comes first: I have two sons I love spending time with. I enjoy tennis, travelling, cooking and staying active. I believe in treating every patient the way I’d want my own family to be treated.',
    cvCta: 'Download CV (PDF)',
  },
  reviewsPage: {
    lead: 'Real patient reviews, unfiltered. Here are some of the people who have trusted Dr. Vila with their care.',
    malagaTitle: 'In Málaga',
    londonTitle: 'In London, where Dr. Vila also practises',
    cta: 'Leave your review on Google',
  },
  productsPage: {
    eyebrow: 'Recommendations',
    title: 'Products I recommend',
    lead: 'These are some of the oral-care products I recommend to my patients. I choose them on clinical grounds; it is up to you whether they suit you.',
    disclosure:
      'Some links on this page are Amazon affiliate links: if you buy through them, I receive a small commission at no extra cost to you. I recommend these products for their clinical usefulness, not for the commission.',
    amazonStatement: 'As an Amazon Associate I earn from qualifying purchases.',
    buyLabel: 'View on Amazon',
    categories: {
      brushing: 'Brushing',
      interdental: 'Interdental cleaning',
    },
  },
  gallery: {
    lead: 'Real cases treated by Dr. Vila. Every smile tells a story.',
    before: 'Before',
    after: 'After',
    caseLabel: 'Case',
    comingSoonTitle: 'More cases soon',
    comingSoon:
      'We are preparing more cases to share. In the meantime, you can read her patients’ experiences in the reviews.',
  },
  contact: {
    lead: 'Book an appointment or tell me about your case. You’ll be looked after by me, with no middlemen.',
    whatsappTitle: 'WhatsApp',
    whatsappBody: 'The fastest way to reach me. I reply personally.',
    emailTitle: 'Email',
    locationTitle: 'The clinic',
    hoursTitle: 'Hours & appointments',
    hoursBody:
      'I see patients by appointment. I hold consultations in Málaga during specific periods of the year; message me on WhatsApp and we’ll find the best time to see you.',
    directions: 'Get directions',
  },
  contactCta: {
    button: 'Message on WhatsApp',
    home: {
      title: 'Ready to take the first step toward your smile?',
      body: 'Message me on WhatsApp and I’ll reply personally, with no obligation.',
    },
    about: {
      title: 'Now that you know me a little, let’s talk.',
      body: 'Message me on WhatsApp and I’ll reply personally, just as I would in the clinic.',
    },
    services: {
      title: 'Not sure which treatment is right for you?',
      body: 'Tell me what you’re considering on WhatsApp and I’ll reply personally, with no obligation.',
    },
    prices: {
      title: 'Want a fixed quote for your case?',
      body: 'Message me on WhatsApp, tell me what you need and I’ll send you a written quote, with no obligation.',
    },
    reviews: {
      title: 'Want the kind of care these patients describe?',
      body: 'Message me on WhatsApp and I’ll reply personally, with no obligation.',
    },
    gallery: {
      title: 'Ready for a before and after of your own?',
      body: 'Message me on WhatsApp and I’ll reply personally, with no obligation.',
    },
    products: {
      title: 'Not sure which one is right for your case?',
      body: 'Message me on WhatsApp and I’ll guide you personally, with no obligation.',
    },
  },
  footer: {
    tagline: 'Dental clinic in El Palo, Málaga. Warm, honest care since 1994.',
    servicesTitle: 'Services',
    navTitle: 'Navigation',
    contactTitle: 'Contact',
    rights: 'All rights reserved.',
  },
  common: {
    readMore: 'Read more',
    readLess: 'Read less',
    viewReview: 'View review',
    whatsapp: 'WhatsApp',
    backHome: 'Back to home',
  },
  langSuggest: {
    message: 'This site is also available in English.',
    cta: 'View in English',
    dismiss: 'Dismiss',
  },
};

export const content: Record<Lang, SiteCopy> = { es, en };
