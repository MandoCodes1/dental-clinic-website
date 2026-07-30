import type { Lang } from '~/i18n';
// The FAQ answers quote figures that also appear in the price table, so they
// read PRICES rather than repeating the numbers as prose and drifting from it.
import { PRICES, type PriceId, type ServiceId } from '~/config';
import { formatPrice } from '~/utils/prices';

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
  // Omitted when the treatment varies too much to carry a starting price.
  id?: PriceId;
  label: string;
  note?: string;
}
export interface PriceGroup {
  title: string;
  items: PriceItem[];
  note?: string;
}
export interface FaqItem {
  question: string;
  answer: string;
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
    faq: string;
    more: string;
    book: string;
  };
  meta: Record<
    'home' | 'about' | 'services' | 'prices' | 'gallery' | 'reviews' | 'contact' | 'products' | 'faq',
    MetaEntry
  >;
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
  servicesPage: { lead: string; details: ServiceDetail[]; qualityNote: { text: string; linkLabel: string } };
  pricesPage: {
    title: string;
    lead: string;
    from: string;
    customQuote: string;
    disclaimer: string;
    groups: PriceGroup[];
    quality: { title: string; lead: string; points: ValueItem[] };
    askQuote: string;
    faqTitle: string;
    faqPrompt: string;
    faqLink: string;
  };
  featuredReviews: { eyebrow: string; title: string; subtitle: string; viewAll: string };
  homeFaq: { eyebrow: string; title: string; subtitle: string; viewAll: string };
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
  reviewsPage: { lead: string; countSuffix: string; malagaTitle: string; londonTitle: string; cta: string };
  faqPage: { title: string; lead: string; items: FaqItem[] };
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
    phoneTitle: string;
    phoneBody: string;
    emailTitle: string;
    locationTitle: string;
    hoursTitle: string;
    hoursBody: string;
    directions: string;
  };
  contactCta: {
    button: string;
    defaultMessage: string;
    home: { title: string; body: string; message: string };
    about: { title: string; body: string; message: string };
    services: { title: string; body: string; message: string };
    prices: { title: string; body: string; message: string };
    reviews: { title: string; body: string; message: string };
    gallery: { title: string; body: string; message: string };
    products: { title: string; body: string; message: string };
    faq: { title: string; body: string; message: string };
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
    faq: 'Preguntas frecuentes',
    more: 'Más',
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
        'Conoce a la Dra. Eugenia Vila: doctora en Medicina y licenciada en Odontología, máster en Implantología y Estética, más de 30 años de experiencia y Dentista del Año 2024.',
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
        'Nota media 5.0 en Google y Trustpilot: reseñas reales de pacientes de la Dra. Eugenia Vila en Málaga y Londres.',
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
    faq: {
      title: 'Preguntas frecuentes - Dra. Eugenia Vila',
      description:
        'Respuestas claras sobre implantes dentales en El Palo, Málaga: precios y qué incluyen, materiales, garantía, primera visita y cómo pedir cita.',
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
    reviewsLabel: 'Reseñas · nota media 5.0',
    awardValue: '2024',
    awardLabel: 'Dentista del Año',
    note: 'Galardonada Dentista del Año 2024 (Dental Art Implant Clinics, Londres) · Doctora en Medicina y Licenciada en Odontología · Registro GDC 287705 · Nota media 5.0 en Google y Trustpilot',
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
        description:
          'Extracciones, injertos y cirugía con técnica cuidadosa, avalada por más de 30 años de experiencia.',
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
          'Planificación sobre TAC 3D (CBCT) de un centro radiológico externo, valorado personalmente por la doctora',
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
          'Cirugía mínimamente invasiva que preserva el tejido sano',
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
    qualityNote: {
      text: '¿Por qué mis precios son más bajos que la media sin recortar en materiales?',
      linkLabel: 'Te lo explico en la página de precios',
    },
  },
  pricesPage: {
    title: 'Precios claros, sin sorpresas',
    lead: 'Creo que debes saber lo que cuesta tu tratamiento antes de sentarte en el sillón. Estos son mis precios de partida, sin letra pequeña.',
    from: 'desde',
    customQuote: 'Presupuesto a medida',
    disclaimer:
      'Precios orientativos para casos de complejidad baja. Tras la primera valoración recibirás un presupuesto cerrado y por escrito, sin compromiso: el precio acordado es el que pagas.',
    groups: [
      {
        title: 'Implantes y cirugía',
        items: [
          { id: 'implantCrown', label: 'Implante + corona de porcelana', note: 'Corona incluida en el precio' },
          {
            id: 'boneGraft',
            label: 'Injerto de hueso',
            note: 'Cuando no hay hueso suficiente donde va el implante. Incluye el biomaterial y la membrana de regeneración',
          },
          {
            id: 'sinusLift',
            label: 'Elevación de seno maxilar',
            note: 'Para poder colocar implantes en las muelas de arriba cuando falta altura de hueso',
          },
        ],
        note: 'El injerto y la elevación de seno solo se hacen si tu caso los necesita, y siempre van dentro del presupuesto cerrado antes de empezar. La colocación de implantes requiere un TAC 3D (CBCT), que se realiza en un centro radiológico externo: la Dra. Vila lee y valora la prueba personalmente, como hace a diario en su consulta de Londres, y esa valoración está incluida en tu plan de tratamiento.',
      },
      {
        title: 'Odontología general',
        items: [
          { id: 'cleaning', label: 'Limpieza dental' },
          { id: 'filling', label: 'Empaste de composite' },
          { id: 'reconstruction', label: 'Reconstrucción' },
          { id: 'extraction', label: 'Extracción simple' },
          {
            id: 'nightGuard',
            label: 'Férula de descarga',
            note: 'Si aprietas o rechinas los dientes al dormir. Hecha a medida para proteger el esmalte y relajar la mandíbula',
          },
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
      {
        title: 'Rehabilitación de la mordida',
        items: [
          {
            label: 'Reconstrucción de dientes muy desgastados',
            note: 'Cuando el desgaste ha acortado los dientes y ha bajado la altura de la mordida, se devuelve a los dientes su forma, su función y su aspecto',
          },
        ],
        note: 'Cada boca desgastada es distinta, así que este tratamiento no tiene un precio de partida útil: depende de cuántos dientes haya que reconstruir y de cómo esté la mordida. Te lo estudio y te doy un presupuesto cerrado antes de tocar nada.',
      },
    ],
    quality: {
      title: 'Precios bajos no significa materiales baratos',
      lead: 'Muchas clínicas anuncian materiales de calidad a precios bajos y luego recortan donde no se ve. Mis precios son más bajos porque esta es una consulta pequeña y personal, con pocos gastos de estructura, nunca porque use materiales inferiores. Y no tienes que fiarte de mi palabra: todo esto se puede comprobar.',
      points: [
        {
          title: 'Más de 30 años de experiencia',
          description: 'Desde 1994 he tratado a más de 20.000 pacientes entre Málaga y Londres.',
        },
        {
          title: 'Dentista del Año 2024',
          description: 'Galardonada en Dental Art Implant Clinics, la clínica de implantes donde trabajo en Londres.',
        },
        {
          title: 'Regulada también en Reino Unido',
          description:
            'Además del Colegio de Dentistas de Málaga, estoy registrada en el GDC británico (n.º 287705), que supervisa mi ejercicio profesional.',
        },
        {
          title: 'Los mismos materiales que en Londres',
          description: 'En Málaga trabajo con los mismos materiales y protocolos que uso en mi consulta de Londres.',
        },
        {
          title: 'Presupuesto cerrado por escrito',
          description:
            'Antes de empezar sabes exactamente qué incluye tu tratamiento y cuánto cuesta. El precio acordado es el que pagas.',
        },
        {
          title: 'Transparencia con las pruebas',
          description:
            'El TAC 3D (CBCT) se hace en un centro radiológico externo y lo valoro yo personalmente, como hago a diario en Londres.',
        },
      ],
    },
    askQuote: '¿Buscas otro tratamiento? Escríbeme y te digo el precio sin compromiso.',
    faqTitle: 'Garantía y formas de pago',
    faqPrompt: '¿Tienes más dudas sobre precios, materiales o cómo trabajo?',
    faqLink: 'Consulta las preguntas frecuentes',
  },
  featuredReviews: {
    eyebrow: 'Opiniones reales',
    title: 'Lo que dicen sus pacientes',
    subtitle: 'Reseñas verificadas de Google y Trustpilot.',
    viewAll: 'Ver todas las reseñas',
  },
  homeFaq: {
    eyebrow: 'Resuelve tus dudas',
    title: 'Preguntas frecuentes',
    subtitle: 'Respuestas claras a lo que más me preguntan los pacientes, sin letra pequeña.',
    viewAll: 'Ver todas las preguntas',
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
    countSuffix: 'reseñas en Google y Trustpilot',
    malagaTitle: 'En Málaga',
    londonTitle: 'En Londres, donde la Dra. Vila también ejerce',
    cta: 'Deja tu reseña en Google',
  },
  faqPage: {
    title: 'Preguntas frecuentes',
    lead: 'Las dudas que más me plantean los pacientes, respondidas con claridad. Si no encuentras la tuya, escríbeme y te contesto yo misma.',
    items: [
      {
        question: '¿Cuánto cuesta un implante dental y qué incluye el precio?',
        answer: `El implante con su corona de porcelana cuesta desde ${formatPrice(PRICES.implantCrown, 'es')}, con la corona incluida. Si tu caso necesita un injerto de hueso o una elevación de seno, se añade al presupuesto cerrado que recibes por escrito antes de empezar: el precio acordado es el que pagas.`,
      },
      {
        question: '¿Por qué tus precios son más bajos que la media si no usas materiales baratos?',
        answer:
          'Porque esta es una consulta pequeña y personal, sin los gastos de estructura de una gran clínica ni comisiones comerciales. Trabajo con los mismos materiales y protocolos que uso en la clínica de implantes de Londres donde ejerzo; lo que recorto son gastos, no calidad.',
      },
      {
        question: '¿Qué materiales utilizas?',
        answer:
          'Solo materiales de primeras marcas, los mismos que uso en mi consulta de Londres y los que usaría para mi propia familia. En tu presupuesto por escrito verás exactamente qué incluye tu tratamiento, y en la consulta te enseño encantada qué sistema y qué laboratorio hay detrás de cada trabajo.',
      },
      {
        question: '¿Los tratamientos tienen garantía?',
        answer:
          'Todo tratamiento va con un plan y un presupuesto cerrado por escrito, y el seguimiento posterior forma parte del tratamiento. Las condiciones concretas de garantía te las explico en la primera valoración, según tu caso.',
      },
      {
        question: '¿Cómo pido cita si la doctora no está todo el año en Málaga?',
        answer:
          'Paso consulta en Málaga en periodos concretos del año. Escríbeme por WhatsApp, cuéntame tu caso y buscamos juntos la mejor fecha; te respondo yo misma, no una centralita.',
      },
      {
        question: '¿Cómo es la primera visita?',
        answer:
          'En la primera valoración te exploro, escucho qué necesitas y te explico las opciones. Después recibes un presupuesto cerrado y por escrito, sin compromiso: sin letra pequeña y sin sorpresas a mitad de tratamiento.',
      },
      {
        question: '¿Necesito un TAC (CBCT) para ponerme un implante? ¿Dónde se hace?',
        answer:
          'Sí, para colocar implantes hace falta un TAC 3D (CBCT). Se realiza en un centro radiológico externo y lo leo y valoro yo personalmente, como hago a diario en Londres; esa valoración está incluida en tu plan de tratamiento.',
      },
      {
        question: '¿Qué incluye el blanqueamiento dental?',
        answer: `El blanqueamiento cuesta desde ${formatPrice(PRICES.whitening, 'es')} e incluye las férulas a medida superior e inferior y las jeringas de blanqueamiento. Te explico cómo usarlo en casa y seguimos el resultado juntos.`,
      },
      {
        question: '¿Cómo funcionan los alineadores y cuánto cuestan?',
        answer: `Trabajo con alineadores Ordoline. El tratamiento de una arcada cuesta desde ${formatPrice(PRICES.aligners, 'es')}; el precio final depende de la complejidad del caso y de si necesitas una o las dos arcadas. Tras la valoración te doy la cifra cerrada.`,
      },
      {
        question: '¿Cómo se paga el tratamiento?',
        answer:
          'El precio se acuerda por escrito antes de empezar y no cambia por el camino. Las formas de pago las vemos en la consulta, según el tratamiento y tu caso.',
      },
    ],
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
    phoneTitle: 'Teléfono',
    phoneBody: 'Si prefieres hablar directamente, llámame y lo vemos por teléfono.',
    emailTitle: 'Email',
    locationTitle: 'La clínica',
    hoursTitle: 'Horario y citas',
    hoursBody:
      'Atiendo con cita previa. Paso consulta en Málaga en periodos concretos del año; escríbeme por WhatsApp y buscamos juntos el mejor momento para verte.',
    directions: 'Cómo llegar',
  },
  contactCta: {
    button: 'Escribir por WhatsApp',
    defaultMessage: 'Hola, me gustaría pedir una cita con la Dra. Vila.',
    home: {
      title: '¿Damos el primer paso hacia tu sonrisa?',
      body: 'Escríbeme por WhatsApp y te respondo yo misma, sin compromiso.',
      message: 'Hola, me gustaría pedir una primera cita con la Dra. Vila.',
    },
    about: {
      title: 'Ahora que me conoces un poco, ¿hablamos?',
      body: 'Escríbeme por WhatsApp y te respondo yo misma, igual que en la consulta.',
      message: 'Hola, me gustaría pedir una cita con la Dra. Vila.',
    },
    services: {
      title: '¿Tienes dudas sobre qué tratamiento necesitas?',
      body: 'Cuéntame qué te preocupa por WhatsApp y te respondo yo misma, sin compromiso.',
      message: 'Hola, me gustaría contarle mi caso para saber qué tratamiento necesito.',
    },
    prices: {
      title: '¿Quieres un presupuesto cerrado para tu caso?',
      body: 'Escríbeme por WhatsApp, cuéntame qué necesitas y te doy un presupuesto por escrito, sin compromiso.',
      message: 'Hola, me gustaría un presupuesto cerrado por escrito para mi caso.',
    },
    reviews: {
      title: '¿Quieres el trato que cuentan mis pacientes?',
      body: 'Escríbeme por WhatsApp y te respondo yo misma, sin compromiso.',
      message: 'Hola, he leído las reseñas y me gustaría pedir una cita.',
    },
    gallery: {
      title: '¿Te imaginas tu propio antes y después?',
      body: 'Escríbeme por WhatsApp y te respondo yo misma, sin compromiso.',
      message: 'Hola, he visto los casos de antes y después y me gustaría una valoración.',
    },
    products: {
      title: '¿No sabes cuál es el mejor para tu caso?',
      body: 'Escríbeme por WhatsApp y te oriento yo misma, sin compromiso.',
      message: 'Hola, me gustaría una recomendación de productos para mi caso.',
    },
    faq: {
      title: '¿No encuentras respuesta a tu duda?',
      body: 'Escríbeme por WhatsApp y te respondo yo misma, sin compromiso.',
      message: 'Hola, tengo una duda que no aparece en las preguntas frecuentes.',
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
    faq: 'FAQ',
    more: 'More',
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
        'Meet Dr. Eugenia Vila: doctor of Medicine and licensed dentist, with master’s degrees in Implantology and Aesthetics, over 30 years of experience and Dentist of the Year 2024.',
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
        'A 5.0 average rating on Google and Trustpilot: real reviews from Dr. Eugenia Vila’s patients in Málaga and London.',
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
    faq: {
      title: 'FAQ - Dr. Eugenia Vila',
      description:
        'Clear answers about dental implants in El Palo, Málaga: prices and what they include, materials, guarantees, your first visit and how to book.',
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
    reviewsLabel: 'Reviews · 5.0 average',
    awardValue: '2024',
    awardLabel: 'Dentist of the Year',
    note: 'Awarded Dentist of the Year 2024 (Dental Art Implant Clinics, London) · Doctor of Medicine and Licensed Dentist · GDC reg. 287705 · 5.0 average rating on Google and Trustpilot',
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
        description: 'Extractions, grafts and surgery with careful technique, backed by over 30 years of experience.',
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
          'Planning from a 3D scan (CBCT) taken at an external radiology centre, assessed personally by the doctor',
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
          'Minimally invasive surgery that preserves healthy tissue',
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
    qualityNote: {
      text: 'Why are my prices below average without cutting corners on materials?',
      linkLabel: 'I explain it on the prices page',
    },
  },
  pricesPage: {
    title: 'Clear prices, no surprises',
    lead: 'I believe you should know what your treatment costs before you sit in the chair. These are my starting prices, with no small print.',
    from: 'from',
    customQuote: 'Quoted case by case',
    disclaimer:
      'Guide prices for straightforward cases. After your first assessment you will receive a fixed, written quote with no obligation: the price we agree is the price you pay.',
    groups: [
      {
        title: 'Implants & surgery',
        items: [
          { id: 'implantCrown', label: 'Implant + porcelain crown', note: 'Crown included in the price' },
          {
            id: 'boneGraft',
            label: 'Bone graft',
            note: 'When there is not enough bone where the implant goes. Includes the biomaterial and the regeneration membrane',
          },
          {
            id: 'sinusLift',
            label: 'Sinus lift',
            note: 'So implants can be placed in the upper back teeth when bone height is short',
          },
        ],
        note: 'A graft or a sinus lift is only carried out if your case needs one, and it is always part of the fixed quote agreed before we start. Implant placement requires a 3D scan (CBCT), taken at an external radiology centre: Dr. Vila reads and assesses the scan personally, as she does daily in her London practice, and that assessment is included in your treatment plan.',
      },
      {
        title: 'General dentistry',
        items: [
          { id: 'cleaning', label: 'Dental cleaning' },
          { id: 'filling', label: 'Composite filling' },
          { id: 'reconstruction', label: 'Tooth build-up (reconstruction)' },
          { id: 'extraction', label: 'Simple extraction' },
          {
            id: 'nightGuard',
            label: 'Night guard',
            note: 'If you clench or grind your teeth in your sleep. Custom-made to protect the enamel and relax the jaw',
          },
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
      {
        title: 'Rebuilding a worn bite',
        items: [
          {
            label: 'Restoring heavily worn teeth',
            note: 'When wear has shortened the teeth and lowered the height of the bite, the teeth are given back their shape, their function and their looks',
          },
        ],
        note: 'Every worn bite is different, so a starting price would tell you very little here: it depends on how many teeth need rebuilding and on the state of the bite. I study your case and give you a fixed quote before anything is touched.',
      },
    ],
    quality: {
      title: 'Low prices do not mean cheap materials',
      lead: 'Many clinics advertise quality materials at low prices and then cut corners where you cannot see. My prices are lower because this is a small personal practice with low overheads, never because I use inferior materials. And you do not have to take my word for it: all of this can be checked.',
      points: [
        {
          title: 'Over 30 years of experience',
          description: 'Since 1994 I have treated more than 20,000 patients between Málaga and London.',
        },
        {
          title: 'Dentist of the Year 2024',
          description: 'Awarded at Dental Art Implant Clinics, the implant clinic where I work in London.',
        },
        {
          title: 'Also regulated in the UK',
          description:
            'Besides the Málaga College of Dentists, I am registered with the British GDC (no. 287705), which oversees my professional practice.',
        },
        {
          title: 'The same materials as in London',
          description: 'In Málaga I work with the same materials and protocols I use in my London practice.',
        },
        {
          title: 'A fixed, written quote',
          description:
            'Before we start you know exactly what your treatment includes and what it costs. The price we agree is the price you pay.',
        },
        {
          title: 'Transparent about scans',
          description:
            'The 3D scan (CBCT) is taken at an external radiology centre and I assess it personally, as I do daily in London.',
        },
      ],
    },
    askQuote: 'Looking for another treatment? Message me and I will tell you the price, no obligation.',
    faqTitle: 'Guarantees and payment',
    faqPrompt: 'More questions about prices, materials or how I work?',
    faqLink: 'Read the frequently asked questions',
  },
  featuredReviews: {
    eyebrow: 'Real opinions',
    title: 'What her patients say',
    subtitle: 'Verified reviews from Google and Trustpilot.',
    viewAll: 'Read all reviews',
  },
  homeFaq: {
    eyebrow: 'Your questions, answered',
    title: 'Frequently asked questions',
    subtitle: 'Clear answers to the things patients ask me most, with no small print.',
    viewAll: 'See all questions',
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
    countSuffix: 'reviews on Google and Trustpilot',
    malagaTitle: 'In Málaga',
    londonTitle: 'In London, where Dr. Vila also practises',
    cta: 'Leave your review on Google',
  },
  faqPage: {
    title: 'Frequently asked questions',
    lead: 'The questions my patients ask most, answered clearly. If yours is not here, message me and I will answer it myself.',
    items: [
      {
        question: 'How much does a dental implant cost and what does the price include?',
        answer: `An implant with its porcelain crown costs from ${formatPrice(PRICES.implantCrown, 'en')}, crown included. If your case needs a bone graft or a sinus lift, it is added to the fixed quote you receive in writing before we start: the price we agree is the price you pay.`,
      },
      {
        question: 'Why are your prices below average if you do not use cheap materials?',
        answer:
          'Because this is a small personal practice, without the overheads of a big clinic or sales commissions. I work with the same materials and protocols I use at the London implant clinic where I practise; what I cut is overhead, not quality.',
      },
      {
        question: 'Which materials do you use?',
        answer:
          'Only leading-brand materials, the same ones I use in my London practice and the ones I would choose for my own family. Your written quote shows exactly what your treatment includes, and at the clinic I will gladly show you which system and which laboratory are behind each piece of work.',
      },
      {
        question: 'Do treatments come with a guarantee?',
        answer:
          'Every treatment comes with a written plan and a fixed quote, and follow-up care is part of the treatment. I explain the specific guarantee terms at your first assessment, based on your case.',
      },
      {
        question: 'How do I book if the doctor is not in Málaga all year?',
        answer:
          'I hold consultations in Málaga during specific periods of the year. Message me on WhatsApp, tell me about your case and we will find the best date together; I reply personally, not a call centre.',
      },
      {
        question: 'What happens at the first visit?',
        answer:
          'At the first assessment I examine you, listen to what you need and explain your options. You then receive a fixed, written quote with no obligation: no small print and no surprises mid-treatment.',
      },
      {
        question: 'Do I need a CBCT scan for an implant? Where is it taken?',
        answer:
          'Yes, implant placement requires a 3D scan (CBCT). It is taken at an external radiology centre and I read and assess it personally, as I do daily in London; that assessment is included in your treatment plan.',
      },
      {
        question: 'What does teeth whitening include?',
        answer: `Whitening costs from ${formatPrice(PRICES.whitening, 'en')} and includes custom upper and lower trays and the whitening gel syringes. I explain how to use it at home and we track the result together.`,
      },
      {
        question: 'How do aligners work and what do they cost?',
        answer: `I work with Ordoline aligners. Treatment for one arch costs from ${formatPrice(PRICES.aligners, 'en')}; the final price depends on case complexity and on whether you need one or both arches. After your assessment I give you the fixed figure.`,
      },
      {
        question: 'How do I pay for treatment?',
        answer:
          'The price is agreed in writing before we start and does not change along the way. We discuss payment options at the clinic, depending on the treatment and your case.',
      },
    ],
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
    phoneTitle: 'Phone',
    phoneBody: 'If you would rather talk it through, call me directly.',
    emailTitle: 'Email',
    locationTitle: 'The clinic',
    hoursTitle: 'Hours & appointments',
    hoursBody:
      'I see patients by appointment. I hold consultations in Málaga during specific periods of the year; message me on WhatsApp and we’ll find the best time to see you.',
    directions: 'Get directions',
  },
  contactCta: {
    button: 'Message on WhatsApp',
    defaultMessage: 'Hello, I would like to book an appointment with Dr. Vila.',
    home: {
      title: 'Ready to take the first step toward your smile?',
      body: 'Message me on WhatsApp and I’ll reply personally, with no obligation.',
      message: 'Hello, I would like to book a first visit with Dr. Vila.',
    },
    about: {
      title: 'Now that you know me a little, let’s talk.',
      body: 'Message me on WhatsApp and I’ll reply personally, just as I would in the clinic.',
      message: 'Hello, I would like to book an appointment with Dr. Vila.',
    },
    services: {
      title: 'Not sure which treatment is right for you?',
      body: 'Tell me what you’re considering on WhatsApp and I’ll reply personally, with no obligation.',
      message: 'Hello, I would like to tell you about my case to find out which treatment I need.',
    },
    prices: {
      title: 'Want a fixed quote for your case?',
      body: 'Message me on WhatsApp, tell me what you need and I’ll send you a written quote, with no obligation.',
      message: 'Hello, I would like a fixed written quote for my case.',
    },
    reviews: {
      title: 'Want the kind of care these patients describe?',
      body: 'Message me on WhatsApp and I’ll reply personally, with no obligation.',
      message: 'Hello, I have read the reviews and would like to book a visit.',
    },
    gallery: {
      title: 'Ready for a before and after of your own?',
      body: 'Message me on WhatsApp and I’ll reply personally, with no obligation.',
      message: 'Hello, I have seen the before and after cases and would like an assessment.',
    },
    products: {
      title: 'Not sure which one is right for your case?',
      body: 'Message me on WhatsApp and I’ll guide you personally, with no obligation.',
      message: 'Hello, I would like a product recommendation for my case.',
    },
    faq: {
      title: 'Can’t find the answer to your question?',
      body: 'Message me on WhatsApp and I’ll reply personally, with no obligation.',
      message: 'Hello, I have a question that is not covered in the FAQ.',
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
