import type { Lang } from '~/i18n';
// The FAQ answers quote figures that also appear in the price table, so they
// read PRICES rather than repeating the numbers as prose and drifting from it.
import { PRICES, type PriceId, type TreatmentId } from '~/config';
import { formatPrice } from '~/utils/prices';

// All translatable copy lives here once per locale. The shared SiteCopy type
// forces Spanish and English to stay structurally identical (a missing field is
// a compile error), which replaces the old duplicated-per-page approach.

export interface MetaEntry {
  title: string;
  description: string;
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
// Stable ids for the FAQ entries, so pages can feature a subset without relying
// on array positions. Both locales carry the same ids; getFaqItems resolves them.
export const FAQ_IDS = [
  'implantCost',
  'howIWork',
  'materials',
  'guarantee',
  'booking',
  'firstVisit',
  'cbct',
  'whitening',
  'aligners',
  'payment',
  'implantPain',
  'extractionAftercare',
  'alignersDaily',
  'veneersLifespan',
  'cleaningFrequency',
  'crownLifespan',
] as const;
export type FaqId = (typeof FAQ_IDS)[number];

export interface FaqItem {
  id: FaqId;
  question: string;
  answer: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

// Everything a treatment page needs, plus its overview card and nav label.
// The priceGroup is the single source for that treatment's rows, reused by the
// full price table on the treatments overview.
export interface TreatmentCopy {
  navLabel: string;
  card: { title: string; description: string };
  meta: MetaEntry;
  title: string;
  lead: string;
  points: string[];
  // Visit-by-visit walkthrough, rolled out treatment by treatment. Optional so
  // treatments without one yet still compile; fill both locales together.
  process?: { title: string; intro: string; steps: ProcessStep[] };
  priceGroup: PriceGroup;
  cta: { title: string; body: string; message: string };
}

export interface SiteCopy {
  nav: {
    home: string;
    about: string;
    treatments: string;
    reviews: string;
    gallery: string;
    products: string;
    contact: string;
    faq: string;
    more: string;
    book: string;
  };
  meta: Record<'home' | 'about' | 'treatments' | 'gallery' | 'reviews' | 'contact' | 'products' | 'faq', MetaEntry>;
  a11y: { skip: string; openMenu: string; closeMenu: string; switchLang: string };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ctaBook: string;
    ctaTreatments: string;
    availability: string;
  };
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
  treatmentsPage: {
    title: string;
    lead: string;
    home: { eyebrow: string; title: string; subtitle: string };
    viewDetails: string;
    allLabel: string;
    from: string;
    customQuote: string;
    disclaimer: string;
    quality: { title: string; lead: string; points: ValueItem[] };
    faqTitle: string;
    askQuote: string;
    faqPrompt: string;
    faqLink: string;
  };
  treatments: Record<TreatmentId, TreatmentCopy>;
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
  };
  reviewsPage: { lead: string; basedOn: string; malagaTitle: string; londonTitle: string; cta: string };
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
  homeVisit: {
    eyebrow: string;
    title: string;
    subtitle: string;
    contactLink: string;
    form: {
      name: string;
      namePlaceholder: string;
      treatment: string;
      treatmentPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
      hint: string;
      greeting: string;
      interest: string;
    };
  };
  contactCta: {
    button: string;
    defaultMessage: string;
    home: { title: string; body: string; message: string };
    about: { title: string; body: string; message: string };
    treatments: { title: string; body: string; message: string };
    reviews: { title: string; body: string; message: string };
    gallery: { title: string; body: string; message: string };
    products: { title: string; body: string; message: string };
    faq: { title: string; body: string; message: string };
  };
  stickyBar: { call: string; whatsapp: string };
  footer: { tagline: string; treatmentsTitle: string; navTitle: string; contactTitle: string; rights: string };
  common: { readMore: string; readLess: string; viewReview: string; whatsapp: string; backHome: string };
  langSuggest: { message: string; cta: string; dismiss: string };
}

const es: SiteCopy = {
  nav: {
    home: 'Inicio',
    about: 'Sobre mí',
    treatments: 'Tratamientos',
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
        'Implantes dentales, cirugía oral, alineadores y odontología estética en El Palo, Málaga. Tratamientos de calidad con materiales de primera, siempre con la Dra. Eugenia Vila en persona.',
    },
    about: {
      title: 'Sobre mí - Dra. Eugenia Vila',
      description:
        'Conoce a la Dra. Eugenia Vila: licenciada en Medicina y Cirugía y en Odontología, máster en Implantología y Estética, más de 30 años de experiencia y Dentista del Año 2024.',
    },
    treatments: {
      title: 'Tratamientos y precios - Dra. Eugenia Vila',
      description:
        'Todos los tratamientos de la clínica de la Dra. Eugenia Vila en El Palo, Málaga: implantes, ortodoncia invisible, estética dental, coronas y más, con los detalles y el precio de partida de cada uno.',
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
      'Más de 30 años cuidando sonrisas en Málaga, con un trato cercano y honesto. Te atiende siempre la Dra. Eugenia Vila en persona, sin prisas y con materiales de primera calidad.',
    ctaBook: 'Pedir cita por WhatsApp',
    ctaTreatments: 'Ver tratamientos',
    availability: 'Con cita previa · Te responde la propia doctora',
  },
  credentials: {
    title: 'Una trayectoria que habla por sí sola',
    yearsLabel: 'Años de experiencia',
    patientsLabel: 'Pacientes atendidos',
    reviewsLabel: 'Nota media · basada en {count} reseñas',
    awardValue: '2024',
    awardLabel: 'Dentista del Año',
    note: 'Galardonada Dentista del Año 2024 (Dental Art Implant Clinics, Londres) · Licenciada en Medicina y Cirugía y en Odontología · Registro GDC 287705 · Nota media 5.0 en Google y Trustpilot',
  },
  values: {
    eyebrow: 'Por qué sus pacientes la recomiendan',
    title: 'Cuidado de verdad, no de franquicia',
    items: [
      {
        title: 'Te atiende siempre la Dra. Vila',
        description: 'Una sola dentista que te conoce y te sigue en cada visita, sin rotación de personal.',
      },
      {
        title: 'Un plan claro, por escrito',
        description:
          'Antes de empezar sabes exactamente qué incluye tu tratamiento, paso a paso y sin sorpresas. Todo queda recogido por escrito.',
      },
      {
        title: 'Materiales de primera calidad',
        description: 'Solo materiales de las mejores marcas, los mismos que usaría para mi propia familia.',
      },
      {
        title: 'Tiempo para ti',
        description: 'Citas sin prisas, con tiempo para escucharte y explicarte cada paso del tratamiento.',
      },
    ],
  },
  treatmentsPage: {
    title: 'Tratamientos',
    lead: 'Toda mi odontología en un solo lugar: qué hago, cómo lo hago y qué puedes esperar. Elige un tratamiento para ver los detalles y su precio de partida.',
    home: {
      eyebrow: 'Tratamientos',
      title: 'Odontología completa, hecha a tu medida',
      subtitle: 'Desde una revisión hasta una rehabilitación completa, siempre con un plan pensado para ti.',
    },
    viewDetails: 'Ver detalles',
    allLabel: 'Todos los tratamientos',
    from: 'desde',
    customQuote: 'Presupuesto a medida',
    disclaimer:
      'Precios orientativos para casos de complejidad baja. Tras la primera valoración recibirás un presupuesto cerrado y por escrito, sin compromiso: el precio acordado es el que pagas.',
    quality: {
      title: 'La misma calidad que ofrezco en Londres',
      lead: 'Cada tratamiento lo hago yo misma, con calma y sin atajos: los mismos materiales, protocolos y laboratorios que uso en la clínica de implantes de Londres donde ejerzo. No doy un caso por terminado hasta que el resultado es perfecto, y nada de esto tienes que creértelo por mi palabra: se puede comprobar.',
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
    faqTitle: 'Garantía y formas de pago',
    askQuote: '¿Buscas otro tratamiento? Escríbeme, cuéntame tu caso y te digo cómo lo enfocaría, sin compromiso.',
    faqPrompt: '¿Tienes más dudas sobre los tratamientos, los materiales o cómo trabajo?',
    faqLink: 'Consulta las preguntas frecuentes',
  },
  treatments: {
    implants: {
      navLabel: 'Implantes dentales',
      card: {
        title: 'Implantes dentales',
        description:
          'Recupera los dientes que te faltan con implantes fijos que se ven y se sienten naturales, planificados y colocados por la propia doctora.',
      },
      meta: {
        title: 'Implantes dentales en Málaga - Dra. Eugenia Vila',
        description: `Implantes dentales Klockner en El Palo, Málaga, desde ${formatPrice(PRICES.implantOnly, 'es')} más ${formatPrice(PRICES.zirconiaCrown, 'es')} la corona de zirconio. Más de 30 años de experiencia en implantología y presupuesto cerrado por escrito.`,
      },
      title: 'Implantes dentales',
      lead: 'Un implante sustituye la raíz del diente perdido y sobre él se coloca una corona fija. El resultado se ve, se siente y funciona como un diente propio.',
      points: [
        'Implante unitario, múltiple o rehabilitación completa de la boca',
        'Implantes Klockner y solo aditamentos originales de la marca en la prótesis',
        'Planificación sobre TAC 3D (CBCT), valorado personalmente por la doctora',
        'Injertos óseos y elevación de seno cuando hacen falta',
        'Presupuesto cerrado por escrito antes de empezar',
        'Revisiones y mantenimiento a largo plazo',
      ],
      process: {
        title: 'Así es el tratamiento, paso a paso',
        intro: 'Cada boca es distinta, pero un implante bien hecho sigue siempre el mismo camino. Así es como trabajo:',
        steps: [
          {
            title: 'Valoración y TAC 3D',
            description:
              'En la primera visita te exploro y te explico tus opciones. Si el implante tiene sentido, te doy un volante para hacerte el TAC (CBCT) en un centro radiológico cercano; lo leo y valoro yo personalmente, y si sigues adelante con el tratamiento, lo que pagues por él se descuenta del presupuesto.',
          },
          {
            title: 'Plan y presupuesto cerrado',
            description:
              'Sobre el TAC planifico dónde y cómo va cada implante, y te entrego el plan por escrito con su presupuesto cerrado. Antes de empezar sabes exactamente qué incluye y cuánto cuesta.',
          },
          {
            title: 'Colocación del implante',
            description:
              'Con anestesia local y técnica mínimamente invasiva coloco el implante, de la marca Klockner. No duele, y la mayoría de mis pacientes se sorprende de lo llevadera que resulta la intervención.',
          },
          {
            title: 'Osteointegración',
            description:
              'Durante unos seis meses el hueso se une al implante hasta dejarlo tan firme como una raíz propia. En este periodo hago las revisiones necesarias para comprobar que todo avanza como debe.',
          },
          {
            title: 'Corona definitiva',
            description:
              'Sobre el implante ya integrado coloco la corona de zirconio, siempre con aditamentos originales Klockner y nunca con copias compatibles: el ajuste es exacto y el implante queda protegido a largo plazo. Ajusto forma y color hasta que el diente se ve y funciona como uno propio.',
          },
          {
            title: 'Revisiones y mantenimiento',
            description:
              'Un implante bien cuidado dura muchos años. Te doy tu pauta de higiene y lo seguimos juntos en tus revisiones.',
          },
        ],
      },
      priceGroup: {
        title: 'Precios de implantes',
        items: [
          {
            id: 'implantOnly',
            label: 'Implante dental',
            note: 'La colocación del implante, la raíz artificial sobre la que irá la corona',
          },
          {
            id: 'zirconiaCrown',
            label: 'Corona de zirconio sobre el implante',
            note: 'El diente visible que se fija sobre el implante',
          },
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
        note: `Implante y corona de zirconio juntos: desde ${formatPrice(PRICES.implantCrown, 'es')}, con la corona incluida. El injerto y la elevación de seno solo se hacen si tu caso los necesita, y siempre dentro del presupuesto cerrado. El TAC 3D (CBCT) se realiza en un centro radiológico externo y lo valoro yo personalmente; esa valoración está incluida en tu plan.`,
      },
      cta: {
        title: '¿Te faltan dientes? Recupera una sonrisa completa y fija.',
        body: 'Escríbeme por WhatsApp, cuéntame tu caso y te explico las opciones que tienes, sin compromiso.',
        message: 'Hola, me gustaría informarme sobre implantes dentales.',
      },
    },
    oralSurgery: {
      navLabel: 'Cirugía oral',
      card: {
        title: 'Cirugía oral',
        description:
          'Extracciones y cirugía con técnica cuidadosa y mínimamente invasiva, para una recuperación rápida y cómoda.',
      },
      meta: {
        title: 'Cirugía oral en Málaga - Dra. Eugenia Vila',
        description:
          'Extracciones simples y complejas, injertos y cirugía mínimamente invasiva en El Palo, Málaga. Más de 30 años de experiencia quirúrgica.',
      },
      title: 'Cirugía oral',
      lead: 'Más de 30 años de cirugía avalan una técnica cuidadosa que preserva el tejido sano y hace la recuperación más llevadera.',
      points: [
        'Extracciones simples y complejas',
        'Cirugía mínimamente invasiva que preserva el tejido sano',
        'Injertos óseos y preparación para implantes',
        'Pauta de cuidados por escrito y seguimiento postoperatorio cercano',
      ],
      priceGroup: {
        title: 'Precios de cirugía oral',
        items: [
          { id: 'extraction', label: 'Extracción simple' },
          {
            id: 'complexExtraction',
            label: 'Extracción compleja',
            note: 'Muelas del juicio, restos radiculares y extracciones que requieren técnica quirúrgica',
          },
        ],
      },
      cta: {
        title: '¿Te preocupa una extracción?',
        body: 'Cuéntamelo por WhatsApp y te digo qué haría en tu caso, sin compromiso.',
        message: 'Hola, necesito una extracción y me gustaría una valoración.',
      },
    },
    orthodontics: {
      navLabel: 'Ortodoncia invisible',
      card: {
        title: 'Ortodoncia invisible',
        description:
          'Endereza tu sonrisa con alineadores transparentes, cómodos y casi invisibles, sin brackets metálicos.',
      },
      meta: {
        title: 'Ortodoncia invisible en Málaga - Dra. Eugenia Vila',
        description: `Ortodoncia invisible con alineadores Ordoline en El Palo, Málaga, desde ${formatPrice(PRICES.aligners, 'es')} por arcada. Plan a medida y controles con la propia doctora.`,
      },
      title: 'Ortodoncia invisible',
      lead: 'Los alineadores transparentes corrigen la posición de los dientes de forma discreta: te los quitas para comer y casi nadie nota que los llevas.',
      points: [
        'Alineadores transparentes y cómodos, hechos a tu medida',
        'Simulación 3D del antes y el después: ves el resultado esperado antes de empezar',
        'Ideales para apiñamiento y espacios entre dientes',
        'Te los quitas para comer y para cepillarte',
        'Controles regulares para seguir el avance',
      ],
      priceGroup: {
        title: 'Precios de ortodoncia invisible',
        items: [
          {
            id: 'aligners',
            label: 'Ortodoncia con alineadores Ordoline',
            note: 'Una arcada. El precio final depende de la complejidad del caso y del número de arcadas',
          },
        ],
      },
      cta: {
        title: '¿Quieres saber si los alineadores son para ti?',
        body: 'Escríbeme por WhatsApp, cuéntame qué te gustaría corregir y te oriento sin compromiso.',
        message: 'Hola, me gustaría saber si los alineadores encajan en mi caso.',
      },
    },
    aesthetics: {
      navLabel: 'Estética dental',
      card: {
        title: 'Estética dental',
        description:
          'Blanqueamiento profesional y carillas que mejoran tu sonrisa respetando siempre tu aspecto natural.',
      },
      meta: {
        title: 'Estética dental en Málaga - Dra. Eugenia Vila',
        description: `Blanqueamiento dental desde ${formatPrice(PRICES.whitening, 'es')} y carillas de composite desde ${formatPrice(PRICES.compositeVeneer, 'es')} en El Palo, Málaga. Estética que respeta tu sonrisa natural.`,
      },
      title: 'Estética dental',
      lead: 'Pequeños cambios bien hechos transforman una sonrisa. Trabajo la estética con una regla fija: que el resultado sea bonito y siga pareciendo tuyo.',
      points: [
        'Blanqueamiento profesional con férulas a medida',
        'Carillas de composite para corregir forma y color',
        'Reparación de empastes y bordes desgastados',
        'Diseño de sonrisa personalizado',
      ],
      priceGroup: {
        title: 'Precios de estética dental',
        items: [
          {
            id: 'whitening',
            label: 'Blanqueamiento dental',
            note: 'Incluye férulas a medida superior e inferior y las jeringas de blanqueamiento',
          },
          { id: 'compositeVeneer', label: 'Carilla de composite', note: 'Por unidad' },
        ],
      },
      cta: {
        title: '¿Quieres mejorar tu sonrisa sin dejar de ser tú?',
        body: 'Cuéntame qué te gustaría cambiar por WhatsApp y te digo qué haría yo, sin compromiso.',
        message: 'Hola, me gustaría mejorar la estética de mi sonrisa.',
      },
    },
    general: {
      navLabel: 'Odontología general',
      card: {
        title: 'Odontología general',
        description:
          'Limpiezas, empastes y revisiones sin prisas: el cuidado de siempre, hecho con calma y con materiales de primera.',
      },
      meta: {
        title: 'Odontología general en Málaga - Dra. Eugenia Vila',
        description: `Limpieza dental desde ${formatPrice(PRICES.cleaning, 'es')}, empastes desde ${formatPrice(PRICES.filling, 'es')} y férulas de descarga en El Palo, Málaga. Odontología de confianza para toda la familia.`,
      },
      title: 'Odontología general',
      lead: 'La base de una boca sana es el cuidado de cada día: revisiones a tiempo, limpiezas bien hechas y empastes que duran.',
      points: [
        'Revisiones completas y diagnóstico sin prisas',
        'Limpiezas cuidadosas que respetan el esmalte',
        'Empastes y reconstrucciones con composite de calidad',
        'Férulas de descarga a medida si aprietas los dientes al dormir',
      ],
      priceGroup: {
        title: 'Precios de odontología general',
        items: [
          { id: 'cleaning', label: 'Limpieza dental' },
          { id: 'filling', label: 'Empaste de composite' },
          { id: 'reconstruction', label: 'Reconstrucción' },
          {
            id: 'nightGuard',
            label: 'Férula de descarga',
            note: 'Si aprietas o rechinas los dientes al dormir. Hecha a medida para proteger el esmalte y relajar la mandíbula',
          },
        ],
      },
      cta: {
        title: '¿Hace tiempo que no te revisas la boca?',
        body: 'Escríbeme por WhatsApp y buscamos un hueco para una revisión con calma, sin compromiso.',
        message: 'Hola, me gustaría pedir cita para una revisión.',
      },
    },
    crowns: {
      navLabel: 'Coronas y prótesis',
      card: {
        title: 'Coronas y prótesis',
        description:
          'Coronas de zirconio y rehabilitación de dientes desgastados para devolver a tu boca su función y su aspecto.',
      },
      meta: {
        title: 'Coronas y prótesis en Málaga - Dra. Eugenia Vila',
        description: `Coronas de zirconio desde ${formatPrice(PRICES.zirconiaCrown, 'es')} y rehabilitación de la mordida en El Palo, Málaga. Los mismos materiales y laboratorios que en su consulta de Londres.`,
      },
      title: 'Coronas y prótesis',
      lead: 'Cuando un diente está muy dañado o desgastado, una corona bien hecha le devuelve la forma, la fuerza y el color. Trabajo con zirconio y con los mismos laboratorios que uso en Londres.',
      points: [
        'Coronas de zirconio, resistentes y del color de tus dientes',
        'Reconstrucción de dientes muy desgastados',
        'Rehabilitación completa de la mordida cuando hace falta',
        'Materiales y laboratorios de primera, los mismos que en Londres',
      ],
      priceGroup: {
        title: 'Precios de coronas y prótesis',
        items: [
          { id: 'zirconiaCrown', label: 'Corona de zirconio' },
          {
            label: 'Reconstrucción de dientes muy desgastados',
            note: 'Cuando el desgaste ha acortado los dientes y ha bajado la altura de la mordida, se devuelve a los dientes su forma, su función y su aspecto',
          },
        ],
        note: 'Cada boca desgastada es distinta, así que la rehabilitación de la mordida no tiene un precio de partida útil: depende de cuántos dientes haya que reconstruir y de cómo esté la mordida. Te lo estudio y te doy un presupuesto cerrado antes de tocar nada.',
      },
      cta: {
        title: '¿Tienes un diente roto o muy desgastado?',
        body: 'Mándame una foto por WhatsApp y te digo qué opciones tienes, sin compromiso.',
        message: 'Hola, tengo un diente dañado y me gustaría una valoración.',
      },
    },
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
      {
        title: 'Convalidación del título como Licenciatura en Odontología',
        org: 'Universidad de Murcia',
        date: '1993 - 1994',
      },
      { title: 'Licenciatura en Odontología', org: 'UNIBE, Santo Domingo', date: '1989 - 1991' },
      { title: 'Licenciatura en Medicina y Cirugía', org: 'Universidad de Málaga', date: '1982 - 1989' },
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
        period: '1994 - actualidad',
        bullets: [
          'Más de 20.000 pacientes atendidos en consulta privada durante más de 30 años.',
          'Miles de implantes, cirugías, tratamientos y reconstrucciones estéticas.',
          'Trato personal y seguimiento cercano de cada paciente y su familia.',
        ],
      },
    ],
    credsTitle: 'Colegiación y membresías',
    memberships: [
      'Licenciada en Medicina y Cirugía',
      'Licenciada en Odontología',
      'Ilustre Colegio de Dentistas de Málaga (colegiada desde 1994)',
      'Royal College of Surgeons of Ireland (RCSI), afiliada desde 2021',
      'Registro GDC (Reino Unido): 287705',
    ],
    personalTitle: 'Más allá de la consulta',
    personal:
      'Fuera de la clínica, mi familia es lo primero: tengo dos hijos con los que me encanta pasar el tiempo. Disfruto del tenis, viajar, cocinar y cuidarme con una vida sana.',
  },
  reviewsPage: {
    lead: 'Reseñas reales de pacientes, sin filtros. Estas son algunas de las personas que han confiado en la Dra. Vila.',
    basedOn: 'basada en {count} reseñas en Google y Trustpilot',
    malagaTitle: 'En Málaga',
    londonTitle: 'En Londres, donde la Dra. Vila también ejerce',
    cta: 'Deja tu reseña en Google',
  },
  faqPage: {
    title: 'Preguntas frecuentes',
    lead: 'Las dudas que más me plantean los pacientes, respondidas con claridad. Si no encuentras la tuya, escríbeme y te contesto yo misma.',
    items: [
      {
        id: 'implantCost',
        question: '¿Cuánto cuesta un implante dental y qué incluye el precio?',
        answer: `El implante con su corona de porcelana cuesta desde ${formatPrice(PRICES.implantCrown, 'es')}, con la corona incluida. Si tu caso necesita un injerto de hueso o una elevación de seno, se añade al presupuesto cerrado que recibes por escrito antes de empezar: el precio acordado es el que pagas.`,
      },
      {
        id: 'howIWork',
        question: '¿Qué hace diferente tu forma de trabajar?',
        answer:
          'Esta es una consulta pequeña y personal: te atiendo yo misma en cada visita, con tiempo y sin prisas. Trabajo con los mismos materiales, protocolos y laboratorios que uso en la clínica de implantes de Londres donde ejerzo, y no doy un tratamiento por terminado hasta que el resultado es exactamente el que busco.',
      },
      {
        id: 'materials',
        question: '¿Qué materiales utilizas?',
        answer:
          'Solo materiales de primeras marcas, los mismos que uso en mi consulta de Londres y los que usaría para mi propia familia. Los implantes, por ejemplo, son Klockner, y en la prótesis uso únicamente aditamentos originales de la marca, nunca copias compatibles. En tu presupuesto por escrito verás exactamente qué incluye tu tratamiento, y en la consulta te enseño encantada qué sistema y qué laboratorio hay detrás de cada trabajo.',
      },
      {
        id: 'guarantee',
        question: '¿Los tratamientos tienen garantía?',
        answer:
          'Todo tratamiento va con un plan y un presupuesto cerrado por escrito, y el seguimiento posterior forma parte del tratamiento. Las condiciones concretas de garantía te las explico en la primera valoración, según tu caso.',
      },
      {
        id: 'booking',
        question: '¿Cómo pido cita si la doctora no está todo el año en Málaga?',
        answer:
          'Paso consulta en Málaga en periodos concretos del año. Escríbeme por WhatsApp, cuéntame tu caso y buscamos juntos la mejor fecha; te respondo yo misma, no una centralita.',
      },
      {
        id: 'firstVisit',
        question: '¿Cómo es la primera visita?',
        answer:
          'En la primera valoración te exploro, escucho qué necesitas y te explico las opciones. Después recibes un presupuesto cerrado y por escrito, sin compromiso: sin letra pequeña y sin sorpresas a mitad de tratamiento.',
      },
      {
        id: 'cbct',
        question: '¿Necesito un TAC (CBCT) para ponerme un implante? ¿Dónde se hace?',
        answer:
          'Sí, para colocar implantes hace falta un TAC 3D (CBCT). Se realiza en un centro radiológico externo y lo leo y valoro yo personalmente, como hago a diario en Londres; esa valoración está incluida en tu plan de tratamiento.',
      },
      {
        id: 'whitening',
        question: '¿Qué incluye el blanqueamiento dental?',
        answer: `El blanqueamiento cuesta desde ${formatPrice(PRICES.whitening, 'es')} e incluye las férulas a medida superior e inferior y las jeringas de blanqueamiento. Te explico cómo usarlo en casa y seguimos el resultado juntos.`,
      },
      {
        id: 'aligners',
        question: '¿Cómo funcionan los alineadores y cuánto cuestan?',
        answer: `Trabajo con alineadores Ordoline. El tratamiento de una arcada cuesta desde ${formatPrice(PRICES.aligners, 'es')}; el precio final depende de la complejidad del caso y de si necesitas una o las dos arcadas. Tras la valoración te doy la cifra cerrada.`,
      },
      {
        id: 'payment',
        question: '¿Cómo se paga el tratamiento?',
        answer:
          'El precio se acuerda por escrito antes de empezar y no cambia por el camino. Las formas de pago las vemos en la consulta, según el tratamiento y tu caso.',
      },
      {
        id: 'implantPain',
        question: '¿Duele ponerse un implante?',
        answer:
          'La colocación se hace con anestesia local y no duele; la mayoría de mis pacientes se sorprende de lo llevadero que resulta. Las molestias de los primeros días se controlan bien con la pauta que te doy por escrito, y me tienes a un WhatsApp para cualquier duda.',
      },
      {
        id: 'extractionAftercare',
        question: '¿Qué cuidados necesito después de una extracción?',
        answer:
          'Las primeras 24 horas son las importantes: frío local, no enjuagarse fuerte, no fumar y comer blando. Te doy la pauta completa por escrito antes de irte y reviso la cicatrización en el seguimiento.',
      },
      {
        id: 'alignersDaily',
        question: '¿Cuántas horas al día se llevan los alineadores?',
        answer:
          'Unas 22 horas al día: solo te los quitas para comer y para cepillarte. Cada juego se cambia según el plan que marcamos juntos, y en los controles comprobamos que el movimiento avanza como debe.',
      },
      {
        id: 'veneersLifespan',
        question: '¿Cuánto duran las carillas de composite?',
        answer:
          'Con buen cuidado, varios años. El composite se puede pulir y retocar en la propia consulta si con el tiempo pierde brillo o sufre algún golpe, y en tu revisión compruebo cómo están.',
      },
      {
        id: 'cleaningFrequency',
        question: '¿Cada cuánto conviene hacerse una limpieza dental?',
        answer:
          'Para la mayoría, una vez al año; si acumulas sarro con facilidad o tienes problemas de encías, cada seis meses. En tu revisión te digo qué ritmo tiene sentido en tu caso, sin tratamientos innecesarios.',
      },
      {
        id: 'crownLifespan',
        question: '¿Cuánto dura una corona de zirconio?',
        answer:
          'Muchos años: el zirconio es de lo más resistente que existe en odontología y no se oscurece. Con buena higiene y revisiones, una corona bien ajustada puede durar más de una década.',
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
  homeVisit: {
    eyebrow: 'Contacto',
    title: 'Escríbeme o ven a verme',
    subtitle: 'Cuéntame tu caso por WhatsApp y te respondo yo misma, sin compromiso.',
    contactLink: 'Ver todas las formas de contacto',
    form: {
      name: 'Nombre',
      namePlaceholder: 'Tu nombre',
      treatment: 'Tratamiento',
      treatmentPlaceholder: 'Elige un tratamiento (opcional)',
      message: 'Mensaje',
      messagePlaceholder: 'Cuéntame tu caso o tu duda',
      submit: 'Enviar por WhatsApp',
      hint: 'Al pulsar se abre WhatsApp con el mensaje ya escrito: lo revisas y lo envías tú.',
      greeting: 'Hola, soy',
      interest: 'Me interesa:',
    },
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
    treatments: {
      title: '¿No tienes claro qué tratamiento necesitas?',
      body: 'Cuéntame qué te preocupa por WhatsApp y te respondo yo misma, sin compromiso.',
      message: 'Hola, me gustaría contarle mi caso para saber qué tratamiento necesito.',
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
  stickyBar: {
    call: 'Llamar',
    whatsapp: 'WhatsApp',
  },
  footer: {
    tagline: 'Clínica dental en El Palo, Málaga. Cuidado cercano y honesto desde 1994.',
    treatmentsTitle: 'Tratamientos',
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
    treatments: 'Treatments',
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
        'Dental clinic in El Palo, Málaga. Over 30 years of experience in implants, oral surgery, aligners and cosmetic dentistry. Warm, personal care and top-quality materials, always with Dr. Eugenia Vila herself.',
    },
    about: {
      title: 'About - Dr. Eugenia Vila',
      description:
        'Meet Dr. Eugenia Vila: physician and licensed dentist, with master’s degrees in Implantology and Aesthetics, over 30 years of experience and Dentist of the Year 2024.',
    },
    treatments: {
      title: 'Treatments & prices - Dr. Eugenia Vila',
      description:
        'All treatments at Dr. Eugenia Vila’s clinic in El Palo, Málaga: implants, invisible orthodontics, cosmetic dentistry, crowns and more, with details and starting prices for each one.',
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
      'Over 30 years caring for smiles in Málaga, with warm, honest treatment. You are always seen personally by Dr. Eugenia Vila, with unhurried visits and top-quality materials.',
    ctaBook: 'Book on WhatsApp',
    ctaTreatments: 'See treatments',
    availability: 'By appointment · The doctor replies to you herself',
  },
  credentials: {
    title: 'A career that speaks for itself',
    yearsLabel: 'Years of experience',
    patientsLabel: 'Patients treated',
    reviewsLabel: 'Average rating · based on {count} reviews',
    awardValue: '2024',
    awardLabel: 'Dentist of the Year',
    note: 'Awarded Dentist of the Year 2024 (Dental Art Implant Clinics, London) · Degrees in Medicine and Surgery, and in Dentistry · GDC reg. 287705 · 5.0 average rating on Google and Trustpilot',
  },
  values: {
    eyebrow: 'Why her patients recommend her',
    title: 'Real care, not a franchise',
    items: [
      {
        title: 'Always treated by Dr. Vila herself',
        description: 'One dentist who knows you and follows your care at every visit, with no staff rotation.',
      },
      {
        title: 'A clear plan, in writing',
        description:
          'Before we start you know exactly what your treatment includes, step by step and with no surprises. Everything is set out in writing.',
      },
      {
        title: 'Top-quality materials',
        description: 'Only materials from the best brands, the same ones I would use for my own family.',
      },
      {
        title: 'Time for you',
        description: 'Unhurried appointments, with time to listen and explain every step of your treatment.',
      },
    ],
  },
  treatmentsPage: {
    title: 'Treatments',
    lead: 'All my dentistry in one place: what I do, how I do it and what to expect. Pick a treatment to see the details and its starting price.',
    home: {
      eyebrow: 'Treatments',
      title: 'Complete dentistry, tailored to you',
      subtitle: 'From a check-up to a full-mouth rehabilitation, always with a plan made for you.',
    },
    viewDetails: 'View details',
    allLabel: 'All treatments',
    from: 'from',
    customQuote: 'Quoted case by case',
    disclaimer:
      'Guide prices for straightforward cases. After your first assessment you will receive a fixed, written quote with no obligation: the price we agree is the price you pay.',
    quality: {
      title: 'The same quality I deliver in London',
      lead: 'I carry out every treatment myself, calmly and without shortcuts: the same materials, protocols and laboratories I use at the London implant clinic where I practise. I do not consider a case finished until the result is perfect, and none of this has to be taken on my word: it can all be checked.',
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
    faqTitle: 'Guarantees and payment',
    askQuote:
      'Looking for another treatment? Message me, tell me about your case and I will tell you how I would approach it, no obligation.',
    faqPrompt: 'More questions about the treatments, the materials or how I work?',
    faqLink: 'Read the frequently asked questions',
  },
  treatments: {
    implants: {
      navLabel: 'Dental implants',
      card: {
        title: 'Dental implants',
        description:
          'Replace missing teeth with fixed implants that look and feel natural, planned and placed by the doctor herself.',
      },
      meta: {
        title: 'Dental implants in Málaga - Dr. Eugenia Vila',
        description: `Klockner dental implants in El Palo, Málaga, from ${formatPrice(PRICES.implantOnly, 'en')} plus ${formatPrice(PRICES.zirconiaCrown, 'en')} for the zirconia crown. Over 30 years of implantology experience and a fixed written quote.`,
      },
      title: 'Dental implants',
      lead: 'An implant replaces the root of the missing tooth, and a fixed crown is placed on top. The result looks, feels and works like a tooth of your own.',
      points: [
        'Single, multiple or full-mouth implant rehabilitation',
        'Klockner implants, with only original-brand components in the prosthesis',
        'Planning from a 3D scan (CBCT), assessed personally by the doctor',
        'Bone grafts and sinus lifts when needed',
        'A fixed, written quote before we start',
        'Long-term check-ups and maintenance',
      ],
      process: {
        title: 'The treatment, step by step',
        intro: 'Every mouth is different, but a well-placed implant always follows the same path. This is how I work:',
        steps: [
          {
            title: 'Assessment and 3D scan',
            description:
              'At the first visit I examine you and explain your options. If an implant makes sense, I give you a referral note for a CBCT scan at a nearby radiology centre; I read and assess it personally, and if you go ahead with treatment, what you pay for it is deducted from the quote.',
          },
          {
            title: 'Plan and fixed quote',
            description:
              'Working on the scan I plan where and how each implant goes, and you receive the written plan with its fixed quote. Before we start you know exactly what it includes and what it costs.',
          },
          {
            title: 'Implant placement',
            description:
              'Under local anaesthetic and with minimally invasive technique I place the implant, a Klockner implant. It does not hurt, and most of my patients are surprised by how manageable the procedure is.',
          },
          {
            title: 'Osseointegration',
            description:
              'Over about six months the bone bonds to the implant until it is as firm as a natural root. During this period I carry out the check-ups needed to confirm everything is progressing as it should.',
          },
          {
            title: 'Final crown',
            description:
              'Onto the integrated implant I fit the zirconia crown, always with original Klockner components and never compatible copies: the fit is exact and the implant stays protected in the long run. I adjust shape and colour until the tooth looks and works like your own.',
          },
          {
            title: 'Check-ups and maintenance',
            description:
              'A well-cared-for implant lasts many years. I give you your hygiene routine and we follow it together at your check-ups.',
          },
        ],
      },
      priceGroup: {
        title: 'Implant prices',
        items: [
          {
            id: 'implantOnly',
            label: 'Dental implant',
            note: 'Placement of the implant, the artificial root the crown will sit on',
          },
          {
            id: 'zirconiaCrown',
            label: 'Zirconia crown on the implant',
            note: 'The visible tooth fixed onto the implant',
          },
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
        note: `Implant and zirconia crown together: from ${formatPrice(PRICES.implantCrown, 'en')}, crown included. A graft or a sinus lift is only carried out if your case needs one, always within the fixed quote. The 3D scan (CBCT) is taken at an external radiology centre and I assess it personally; that assessment is included in your plan.`,
      },
      cta: {
        title: 'Missing teeth? Get back a complete, fixed smile.',
        body: 'Message me on WhatsApp, tell me about your case and I will explain the options you have, with no obligation.',
        message: 'Hello, I would like to find out about dental implants.',
      },
    },
    oralSurgery: {
      navLabel: 'Oral surgery',
      card: {
        title: 'Oral surgery',
        description:
          'Extractions and surgery with careful, minimally invasive technique, for a quick and comfortable recovery.',
      },
      meta: {
        title: 'Oral surgery in Málaga - Dr. Eugenia Vila',
        description:
          'Simple and complex extractions, grafts and minimally invasive surgery in El Palo, Málaga. Over 30 years of surgical experience.',
      },
      title: 'Oral surgery',
      lead: 'Over 30 years of surgery stand behind a careful technique that preserves healthy tissue and makes recovery easier.',
      points: [
        'Simple and complex extractions',
        'Minimally invasive surgery that preserves healthy tissue',
        'Bone grafts and preparation for implants',
        'Written aftercare instructions and close post-operative follow-up',
      ],
      priceGroup: {
        title: 'Oral surgery prices',
        items: [
          { id: 'extraction', label: 'Simple extraction' },
          {
            id: 'complexExtraction',
            label: 'Complex extraction',
            note: 'Wisdom teeth, root remnants and extractions that need a surgical approach',
          },
        ],
      },
      cta: {
        title: 'Worried about an extraction?',
        body: 'Tell me about it on WhatsApp and I will tell you what I would do in your case, with no obligation.',
        message: 'Hello, I need an extraction and would like an assessment.',
      },
    },
    orthodontics: {
      navLabel: 'Invisible orthodontics',
      card: {
        title: 'Invisible orthodontics',
        description: 'Straighten your smile with clear, comfortable, nearly invisible aligners, with no metal braces.',
      },
      meta: {
        title: 'Invisible orthodontics in Málaga - Dr. Eugenia Vila',
        description: `Invisible orthodontics with Ordoline aligners in El Palo, Málaga, from ${formatPrice(PRICES.aligners, 'en')} per arch. A tailored plan and check-ups with the doctor herself.`,
      },
      title: 'Invisible orthodontics',
      lead: 'Clear aligners correct the position of your teeth discreetly: you take them out to eat, and hardly anyone notices you are wearing them.',
      points: [
        'Clear, comfortable aligners, made to measure',
        'A 3D before-and-after simulation: you see the expected result before starting',
        'Ideal for crowding and gaps between teeth',
        'You take them out to eat and to brush',
        'Regular check-ins to track progress',
      ],
      priceGroup: {
        title: 'Invisible orthodontics prices',
        items: [
          {
            id: 'aligners',
            label: 'Ordoline clear aligners',
            note: 'One arch. The final price depends on case complexity and the number of arches',
          },
        ],
      },
      cta: {
        title: 'Want to know if aligners are right for you?',
        body: 'Message me on WhatsApp, tell me what you would like to correct and I will guide you with no obligation.',
        message: 'Hello, I would like to know if aligners suit my case.',
      },
    },
    aesthetics: {
      navLabel: 'Cosmetic dentistry',
      card: {
        title: 'Cosmetic dentistry',
        description:
          'Professional whitening and veneers that improve your smile while always respecting your natural look.',
      },
      meta: {
        title: 'Cosmetic dentistry in Málaga - Dr. Eugenia Vila',
        description: `Teeth whitening from ${formatPrice(PRICES.whitening, 'en')} and composite veneers from ${formatPrice(PRICES.compositeVeneer, 'en')} in El Palo, Málaga. Aesthetics that respect your natural smile.`,
      },
      title: 'Cosmetic dentistry',
      lead: 'Small changes done well transform a smile. I work on aesthetics with one fixed rule: the result should be beautiful and still look like you.',
      points: [
        'Professional whitening with custom trays',
        'Composite veneers to correct shape and colour',
        'Repair of worn fillings and edges',
        'Personalised smile design',
      ],
      priceGroup: {
        title: 'Cosmetic dentistry prices',
        items: [
          {
            id: 'whitening',
            label: 'Teeth whitening',
            note: 'Includes custom upper and lower trays and the whitening gel syringes',
          },
          { id: 'compositeVeneer', label: 'Composite veneer', note: 'Per tooth' },
        ],
      },
      cta: {
        title: 'Want to improve your smile and still look like you?',
        body: 'Tell me what you would like to change on WhatsApp and I will tell you what I would do, with no obligation.',
        message: 'Hello, I would like to improve the look of my smile.',
      },
    },
    general: {
      navLabel: 'General dentistry',
      card: {
        title: 'General dentistry',
        description:
          'Cleanings, fillings and unhurried check-ups: everyday care, done calmly and with premium materials.',
      },
      meta: {
        title: 'General dentistry in Málaga - Dr. Eugenia Vila',
        description: `Dental cleaning from ${formatPrice(PRICES.cleaning, 'en')}, fillings from ${formatPrice(PRICES.filling, 'en')} and night guards in El Palo, Málaga. Trusted dentistry for the whole family.`,
      },
      title: 'General dentistry',
      lead: 'A healthy mouth is built on everyday care: check-ups in time, cleanings done well and fillings that last.',
      points: [
        'Complete check-ups and unhurried diagnosis',
        'Careful cleanings that respect the enamel',
        'Fillings and build-ups with quality composite',
        'Custom night guards if you clench your teeth in your sleep',
      ],
      priceGroup: {
        title: 'General dentistry prices',
        items: [
          { id: 'cleaning', label: 'Dental cleaning' },
          { id: 'filling', label: 'Composite filling' },
          { id: 'reconstruction', label: 'Tooth build-up (reconstruction)' },
          {
            id: 'nightGuard',
            label: 'Night guard',
            note: 'If you clench or grind your teeth in your sleep. Custom-made to protect the enamel and relax the jaw',
          },
        ],
      },
      cta: {
        title: 'Been a while since your last check-up?',
        body: 'Message me on WhatsApp and we will find a slot for an unhurried check-up, with no obligation.',
        message: 'Hello, I would like to book a check-up.',
      },
    },
    crowns: {
      navLabel: 'Crowns & prosthetics',
      card: {
        title: 'Crowns & prosthetics',
        description:
          'Zirconia crowns and rehabilitation of worn teeth to give your mouth back its function and its looks.',
      },
      meta: {
        title: 'Crowns & prosthetics in Málaga - Dr. Eugenia Vila',
        description: `Zirconia crowns from ${formatPrice(PRICES.zirconiaCrown, 'en')} and bite rehabilitation in El Palo, Málaga. The same materials and laboratories as her London practice.`,
      },
      title: 'Crowns & prosthetics',
      lead: 'When a tooth is badly damaged or worn, a well-made crown gives it back its shape, strength and colour. I work with zirconia and with the same laboratories I use in London.',
      points: [
        'Zirconia crowns, strong and matched to your teeth',
        'Restoration of heavily worn teeth',
        'Full bite rehabilitation when needed',
        'Premium materials and laboratories, the same as in London',
      ],
      priceGroup: {
        title: 'Crowns & prosthetics prices',
        items: [
          { id: 'zirconiaCrown', label: 'Zirconia crown' },
          {
            label: 'Restoring heavily worn teeth',
            note: 'When wear has shortened the teeth and lowered the height of the bite, the teeth are given back their shape, their function and their looks',
          },
        ],
        note: 'Every worn bite is different, so bite rehabilitation has no useful starting price: it depends on how many teeth need rebuilding and on the state of the bite. I study your case and give you a fixed quote before anything is touched.',
      },
      cta: {
        title: 'A broken or badly worn tooth?',
        body: 'Send me a photo on WhatsApp and I will tell you what your options are, with no obligation.',
        message: 'Hello, I have a damaged tooth and would like an assessment.',
      },
    },
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
    lead: 'I’m Eugenia Vila, a dentist and physician, and I’ve spent over 30 years caring for the oral health of families in Málaga. I trained in Implantology (UIC Barcelona) and Aesthetics (University of Córdoba), and I treat every case personally and unhurried, always putting the patient first.',
    educationTitle: 'Education',
    education: [
      { title: 'Master’s in Aesthetic Medicine', org: 'University of Córdoba', date: '2008 - 2009' },
      {
        title: 'Master’s in Implantology',
        org: 'Universitat Internacional de Catalunya (UIC), Barcelona',
        date: '2002 - 2003',
      },
      {
        title: 'Dental degree validation (recognised as Licenciatura)',
        org: 'University of Murcia',
        date: '1993 - 1994',
      },
      { title: 'Degree in Dentistry', org: 'UNIBE, Santo Domingo', date: '1989 - 1991' },
      { title: 'Degree in Medicine and Surgery (MBBS)', org: 'University of Málaga', date: '1982 - 1989' },
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
        period: '1994 - present',
        bullets: [
          'More than 20,000 patients treated in private practice over 30 years.',
          'Thousands of implants, surgeries, treatments and aesthetic restorations.',
          'Personal care and close follow-up of every patient and their family.',
        ],
      },
    ],
    credsTitle: 'Registration & memberships',
    memberships: [
      'Degree in Medicine and Surgery',
      'Degree in Dentistry',
      'Official College of Dentists of Málaga (registered since 1994)',
      'Royal College of Surgeons of Ireland (RCSI), affiliate since 2021',
      'GDC registration (United Kingdom): 287705',
    ],
    personalTitle: 'Beyond the clinic',
    personal:
      'Outside the clinic, my family comes first: I have two sons I love spending time with. I enjoy tennis, travelling, cooking and staying active.',
  },
  reviewsPage: {
    lead: 'Real patient reviews, unfiltered. Here are some of the people who have trusted Dr. Vila with their care.',
    basedOn: 'based on {count} reviews on Google and Trustpilot',
    malagaTitle: 'In Málaga',
    londonTitle: 'In London, where Dr. Vila also practises',
    cta: 'Leave your review on Google',
  },
  faqPage: {
    title: 'Frequently asked questions',
    lead: 'The questions my patients ask most, answered clearly. If yours is not here, message me and I will answer it myself.',
    items: [
      {
        id: 'implantCost',
        question: 'How much does a dental implant cost and what does the price include?',
        answer: `An implant with its porcelain crown costs from ${formatPrice(PRICES.implantCrown, 'en')}, crown included. If your case needs a bone graft or a sinus lift, it is added to the fixed quote you receive in writing before we start: the price we agree is the price you pay.`,
      },
      {
        id: 'howIWork',
        question: 'What makes the way you work different?',
        answer:
          'This is a small, personal practice: I see you myself at every visit, with time and without rushing. I work with the same materials, protocols and laboratories I use at the London implant clinic where I practise, and I do not sign off a treatment until the result is exactly what I am after.',
      },
      {
        id: 'materials',
        question: 'Which materials do you use?',
        answer:
          'Only leading-brand materials, the same ones I use in my London practice and the ones I would choose for my own family. The implants, for example, are Klockner, and in the prosthesis I use only the brand’s original components, never compatible copies. Your written quote shows exactly what your treatment includes, and at the clinic I will gladly show you which system and which laboratory are behind each piece of work.',
      },
      {
        id: 'guarantee',
        question: 'Do treatments come with a guarantee?',
        answer:
          'Every treatment comes with a written plan and a fixed quote, and follow-up care is part of the treatment. I explain the specific guarantee terms at your first assessment, based on your case.',
      },
      {
        id: 'booking',
        question: 'How do I book if the doctor is not in Málaga all year?',
        answer:
          'I hold consultations in Málaga during specific periods of the year. Message me on WhatsApp, tell me about your case and we will find the best date together; I reply personally, not a call centre.',
      },
      {
        id: 'firstVisit',
        question: 'What happens at the first visit?',
        answer:
          'At the first assessment I examine you, listen to what you need and explain your options. You then receive a fixed, written quote with no obligation: no small print and no surprises mid-treatment.',
      },
      {
        id: 'cbct',
        question: 'Do I need a CBCT scan for an implant? Where is it taken?',
        answer:
          'Yes, implant placement requires a 3D scan (CBCT). It is taken at an external radiology centre and I read and assess it personally, as I do daily in London; that assessment is included in your treatment plan.',
      },
      {
        id: 'whitening',
        question: 'What does teeth whitening include?',
        answer: `Whitening costs from ${formatPrice(PRICES.whitening, 'en')} and includes custom upper and lower trays and the whitening gel syringes. I explain how to use it at home and we track the result together.`,
      },
      {
        id: 'aligners',
        question: 'How do aligners work and what do they cost?',
        answer: `I work with Ordoline aligners. Treatment for one arch costs from ${formatPrice(PRICES.aligners, 'en')}; the final price depends on case complexity and on whether you need one or both arches. After your assessment I give you the fixed figure.`,
      },
      {
        id: 'payment',
        question: 'How do I pay for treatment?',
        answer:
          'The price is agreed in writing before we start and does not change along the way. We discuss payment options at the clinic, depending on the treatment and your case.',
      },
      {
        id: 'implantPain',
        question: 'Does getting an implant hurt?',
        answer:
          'Placement is done under local anaesthetic and does not hurt; most of my patients are surprised by how manageable it is. Any discomfort in the first days is well controlled with the written instructions I give you, and I am one WhatsApp message away for any question.',
      },
      {
        id: 'extractionAftercare',
        question: 'What aftercare do I need following an extraction?',
        answer:
          'The first 24 hours matter most: a cold compress, no vigorous rinsing, no smoking and soft food. You leave with complete written instructions, and I check the healing at your follow-up.',
      },
      {
        id: 'alignersDaily',
        question: 'How many hours a day are aligners worn?',
        answer:
          'Around 22 hours a day: you only take them out to eat and to brush. Each set is changed following the plan we agree together, and at check-ups we confirm the movement is progressing as it should.',
      },
      {
        id: 'veneersLifespan',
        question: 'How long do composite veneers last?',
        answer:
          'With good care, several years. Composite can be polished and touched up at the clinic if it loses shine over time or takes a knock, and I check how they are doing at your check-up.',
      },
      {
        id: 'cleaningFrequency',
        question: 'How often should I have a dental cleaning?',
        answer:
          'For most people, once a year; if you build up tartar easily or have gum problems, every six months. At your check-up I tell you what rhythm makes sense in your case, with no unnecessary treatment.',
      },
      {
        id: 'crownLifespan',
        question: 'How long does a zirconia crown last?',
        answer:
          'Many years: zirconia is among the strongest materials in dentistry and does not darken. With good hygiene and check-ups, a well-fitted crown can last more than a decade.',
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
  homeVisit: {
    eyebrow: 'Contact',
    title: 'Write to me or drop by',
    subtitle: 'Tell me about your case on WhatsApp and I’ll reply personally, with no obligation.',
    contactLink: 'See all the ways to reach me',
    form: {
      name: 'Name',
      namePlaceholder: 'Your name',
      treatment: 'Treatment',
      treatmentPlaceholder: 'Choose a treatment (optional)',
      message: 'Message',
      messagePlaceholder: 'Tell me about your case or question',
      submit: 'Send via WhatsApp',
      hint: 'Tapping opens WhatsApp with your message already written: you review it and hit send.',
      greeting: 'Hello, my name is',
      interest: 'I am interested in:',
    },
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
    treatments: {
      title: 'Not sure which treatment you need?',
      body: 'Tell me what is bothering you on WhatsApp and I’ll reply personally, with no obligation.',
      message: 'Hello, I would like to tell you about my case to find out which treatment I need.',
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
  stickyBar: {
    call: 'Call',
    whatsapp: 'WhatsApp',
  },
  footer: {
    tagline: 'Dental clinic in El Palo, Málaga. Warm, honest care since 1994.',
    treatmentsTitle: 'Treatments',
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

// Resolve FAQ entries by id, preserving the order of `ids`. Unknown ids are
// dropped, so a page can never render an undefined item.
export function getFaqItems(lang: Lang, ids: readonly FaqId[]): FaqItem[] {
  const items = content[lang].faqPage.items;
  return ids.map((id) => items.find((item) => item.id === id)).filter((item): item is FaqItem => item !== undefined);
}

// Which FAQ entries each treatment page features. Lives outside SiteCopy so the
// selection cannot diverge between locales.
export const TREATMENT_FAQS: Record<TreatmentId, readonly FaqId[]> = {
  implants: ['implantCost', 'implantPain', 'cbct', 'guarantee'],
  oralSurgery: ['extractionAftercare', 'firstVisit', 'guarantee'],
  orthodontics: ['aligners', 'alignersDaily', 'firstVisit'],
  aesthetics: ['whitening', 'veneersLifespan', 'materials'],
  general: ['cleaningFrequency', 'firstVisit', 'payment'],
  crowns: ['materials', 'crownLifespan', 'guarantee'],
};
