import type { Lang } from '~/i18n';
// The FAQ answers quote figures that also appear in the price table, so they
// read PRICES rather than repeating the numbers as prose and drifting from it.
import { CLINIC, PRICES, type GuideId, type PriceId, type TreatmentId } from '~/config';
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
  'implantLifespan',
  'implantSmoking',
  'extractionPain',
  'wisdomTeeth',
  'alignersDuration',
  'alignersRetention',
  'whiteningEnamel',
  'veneersCare',
  'bleedingGums',
  'bruxismSigns',
  'crownWhen',
  'crownCare',
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

// Evergreen guides: plain-language answers to what people search for, each one
// a short article plus the same closing CTA as the treatment pages.
export interface GuideSection {
  title: string;
  body: string[];
}

export interface GuideCopy {
  navLabel: string;
  card: { title: string; description: string };
  meta: MetaEntry;
  title: string;
  lead: string;
  sections: GuideSection[];
  cta: { title: string; body: string; message: string };
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
    guides: string;
    more: string;
    book: string;
  };
  meta: Record<
    'home' | 'about' | 'treatments' | 'gallery' | 'reviews' | 'contact' | 'products' | 'faq' | 'guides',
    MetaEntry
  >;
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
  guidesPage: { eyebrow: string; title: string; lead: string; readMore: string; backToGuides: string };
  guides: Record<GuideId, GuideCopy>;
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
    mapCta: string;
    gettingHereTitle: string;
    gettingHereBus: string;
    gettingHereCar: string;
    gettingHereAccess: string;
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
    guides: 'Guías',
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
      description: `Conoce a la Dra. Eugenia Vila: licenciada en Medicina y Cirugía y en Odontología, máster en Implantología y Estética, ${CLINIC.years} años de experiencia y Dentista del Año 2024.`,
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
    guides: {
      title: 'Guías dentales - Dra. Eugenia Vila',
      description:
        'Guías claras para decidir con criterio: cuánto cuesta un implante dental en Málaga, cómo elegir dentista y atención en inglés en El Palo.',
    },
  },
  a11y: { skip: 'Saltar al contenido', openMenu: 'Abrir menú', closeMenu: 'Cerrar menú', switchLang: 'Ver en inglés' },
  hero: {
    eyebrow: 'Clínica dental en El Palo, Málaga',
    title: 'Tu sonrisa, en las mejores manos',
    subtitle: `${CLINIC.years} años cuidando sonrisas en Málaga, con un trato cercano y honesto. Te atiende siempre la Dra. Eugenia Vila en persona, sin prisas y con materiales de primera calidad.`,
    ctaBook: 'Pedir cita por WhatsApp',
    ctaTreatments: 'Ver tratamientos',
    availability: 'Primera valoración gratuita · Con cita previa · Te responde la propia doctora',
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
      'Precios orientativos para casos de complejidad baja. La primera valoración es gratuita, y con ella recibes un presupuesto cerrado y por escrito, sin compromiso: el precio acordado es el que pagas.',
    quality: {
      title: 'La misma calidad que ofrezco en Londres',
      lead: 'Cada tratamiento lo hago yo misma, con calma y sin atajos: los mismos materiales, protocolos y laboratorios que uso en la clínica de implantes de Londres donde ejerzo. No doy un caso por terminado hasta que el resultado es perfecto, y nada de esto tienes que creértelo por mi palabra: se puede comprobar.',
      points: [
        {
          title: `${CLINIC.years} años de experiencia`,
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
        description: `Implantes dentales Klockner en El Palo, Málaga, desde ${formatPrice(PRICES.implantOnly, 'es')} más ${formatPrice(PRICES.zirconiaCrown, 'es')} la corona de zirconio. ${CLINIC.years} años de experiencia en implantología y presupuesto cerrado por escrito.`,
      },
      title: 'Implantes dentales',
      lead: 'Un implante sustituye la raíz del diente perdido y sobre él se coloca una corona fija. El resultado se ve, se siente y funciona como un diente propio.',
      points: [
        'Implante unitario, múltiple o rehabilitación completa de la boca',
        'Implantes Klockner y solo aditamentos originales de la marca en la prótesis',
        'Planificación sobre TAC 3D (CBCT), valorado personalmente por la doctora',
        'Injertos óseos y elevación de seno cuando sean necesarios',
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
        description: `Extracciones simples y complejas, injertos y cirugía mínimamente invasiva en El Palo, Málaga. ${CLINIC.years} años de experiencia quirúrgica.`,
      },
      title: 'Cirugía oral',
      lead: `${CLINIC.years} años de cirugía avalan una técnica cuidadosa que preserva el tejido sano y hace la recuperación más llevadera.`,
      points: [
        'Extracciones simples y complejas',
        'Cirugía mínimamente invasiva que preserva el tejido sano',
        'Injertos óseos y preparación para implantes',
        'Pauta de cuidados por escrito y seguimiento postoperatorio cercano',
      ],
      process: {
        title: 'Así es una extracción, paso a paso',
        intro:
          'Una extracción da respeto, lo sé. Por eso te explico todo antes de hacer nada, y trabajo para que la experiencia sea mucho más llevadera de lo que imaginas:',
        steps: [
          {
            title: 'Valoración y radiografía',
            description:
              'Te exploro, veo cómo está el diente y te explico con claridad por qué conviene extraerlo o si se puede salvar. Si hace falta una radiografía, te doy un volante para un centro radiológico cercano y, si sigues adelante, lo que pagues por ella se descuenta del presupuesto.',
          },
          {
            title: 'Plan y presupuesto cerrado',
            description:
              'Antes de empezar sabes qué voy a hacer, cuánto cuesta y qué vas a notar en cada momento. Si la extracción es compleja, te lo digo desde el principio; sin sorpresas a mitad de camino.',
          },
          {
            title: 'La intervención',
            description:
              'Con anestesia local no duele: notarás presión, nada más. Uso una técnica cuidadosa y mínimamente invasiva que respeta el hueso y la encía de alrededor, pensando ya en cómo cicatrizará la zona.',
          },
          {
            title: 'Cuidados en casa',
            description:
              'Te vas con la pauta completa por escrito: las primeras 24 horas son las importantes, con frío local, sin enjuagues fuertes, sin fumar y comiendo blando. Y me tienes a un WhatsApp para cualquier duda.',
          },
          {
            title: 'Revisión y siguiente paso',
            description:
              'Reviso la cicatrización y, si el diente extraído hay que reponerlo, vemos con calma las opciones, como un implante, a tu ritmo y con su propio presupuesto cerrado.',
          },
        ],
      },
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
      process: {
        title: 'Así es el tratamiento, paso a paso',
        intro:
          'Con los alineadores no hay misterio: desde el primer día sabes qué se va a mover, cuánto va a tardar aproximadamente y cuánto cuesta.',
        steps: [
          {
            title: 'Valoración y estudio',
            description:
              'Te exploro, escucho qué te gustaría corregir y tomo los registros de tu boca. Con ellos se prepara el estudio de tu caso y compruebo que los alineadores son la opción adecuada para ti.',
          },
          {
            title: 'Simulación 3D y presupuesto',
            description:
              'Ves en 3D cómo se moverán tus dientes y cómo quedará tu sonrisa al terminar, antes de empezar. Si te convence, recibes tu plan con el número aproximado de alineadores y el presupuesto cerrado por escrito.',
          },
          {
            title: 'Tus alineadores',
            description:
              'Recibes tus juegos de alineadores Ordoline hechos a medida. Se llevan unas 22 horas al día, te los quitas para comer y cepillarte, y cada juego se cambia según el plan que marcamos juntos.',
          },
          {
            title: 'Controles con la doctora',
            description:
              'Nos vemos con regularidad para comprobar que el movimiento avanza según la simulación. Si algo se desvía, lo corrijo a tiempo; los controles los hago yo misma, no un auxiliar.',
          },
          {
            title: 'Retención',
            description:
              'Cuando llegamos al resultado, una retención sencilla mantiene los dientes en su nueva posición. Sin ella, los dientes tienden a moverse de nuevo con los años; con ella, lo conseguido se queda.',
          },
        ],
      },
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
      process: {
        title: 'Así trabajo la estética, paso a paso',
        intro:
          'En estética la técnica importa, pero escuchar importa igual: el mejor resultado es el que se ve bonito y sigue pareciendo tuyo.',
        steps: [
          {
            title: 'Escucharte y valorar tu sonrisa',
            description:
              'Me cuentas qué te gustaría cambiar y yo te digo con sinceridad qué haría y qué no. A veces la opción más sencilla, un blanqueamiento o un pequeño retoque, es la que mejor resultado da.',
          },
          {
            title: 'Plan y presupuesto cerrado',
            description:
              'Definimos juntos el objetivo y te entrego el plan por escrito, con su presupuesto cerrado. Sabes qué vamos a hacer, en cuántas citas y cuánto cuesta antes de empezar.',
          },
          {
            title: 'Blanqueamiento, si entra en tu plan',
            description:
              'Preparo tus férulas a medida y te enseño a usarlas en casa con las jeringas de blanqueamiento. Seguimos el avance juntos hasta llegar a un blanco natural, sin pasarnos.',
          },
          {
            title: 'Carillas de composite',
            description:
              'Modelo el composite directamente sobre el diente, normalmente sin tallarlo, ajustando forma y color en la misma cita. Trabajo capa a capa hasta que la carilla se funde con el resto de tu sonrisa.',
          },
          {
            title: 'Revisión y mantenimiento',
            description:
              'A los pocos días reviso el resultado con calma y hago los retoques finales si hacen falta. En tus revisiones pulimos y mantenemos el trabajo para que siga como el primer día.',
          },
        ],
      },
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
      process: {
        title: 'Así es una revisión, paso a paso',
        intro:
          'Sea tu primera visita o la revisión de cada año, el objetivo es el mismo: que salgas sabiendo exactamente cómo está tu boca y qué necesita, si es que necesita algo.',
        steps: [
          {
            title: 'Revisión completa y sin prisas',
            description:
              'Exploro dientes, encías y mordida con calma y te explico lo que veo en palabras claras. Si algo necesita tratamiento te digo por qué, y si está todo sano, te lo digo igual: no trato lo que no lo necesita.',
          },
          {
            title: 'Limpieza cuidadosa',
            description:
              'Elimino el sarro y el manchado con una técnica que respeta el esmalte y las encías. Aprovecho para enseñarte los trucos de higiene que más le convienen a tu boca, del cepillado a los interdentales.',
          },
          {
            title: 'Tratamiento por prioridades',
            description:
              'Si hay caries u otros problemas, ordenamos el plan por prioridades y recibes tu presupuesto cerrado por escrito. Los empastes y reconstrucciones los hago con composite de calidad, con calma y bien ajustados a tu mordida.',
          },
          {
            title: 'Mantenimiento a tu ritmo',
            description:
              'Te digo cada cuánto conviene revisarte en tu caso, sin citas innecesarias. Y si aprietas los dientes al dormir, una férula de descarga a medida protege tu esmalte y todo el trabajo hecho.',
          },
        ],
      },
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
      process: {
        title: 'Así es el tratamiento, paso a paso',
        intro:
          'Una corona bien hecha no se nota: se confunde con tus dientes y te deja masticar tranquilo. Llegar ahí lleva un proceso cuidadoso:',
        steps: [
          {
            title: 'Valoración del diente',
            description:
              'Compruebo cómo está el diente y te explico la mejor forma de recuperarlo: a veces basta una reconstrucción y otras conviene una corona que lo proteja por completo. Si hace falta una radiografía, te doy un volante para un centro cercano.',
          },
          {
            title: 'Plan y presupuesto cerrado',
            description:
              'Recibes el plan por escrito con su presupuesto cerrado antes de empezar. Si hay varias piezas afectadas o la mordida está baja por el desgaste, te explico el orden y los tiempos de todo el proceso.',
          },
          {
            title: 'Preparación y provisional',
            description:
              'Preparo el diente respetando al máximo lo sano, tomo los registros para el laboratorio y te coloco un provisional: sales de la consulta con el diente protegido y una estética correcta.',
          },
          {
            title: 'El trabajo de laboratorio',
            description:
              'Tu corona de zirconio se fabrica en los mismos laboratorios con los que trabajo en Londres, ajustada a la forma y el color de tus dientes. No doy por buena una corona que no pasaría en mi consulta de Londres.',
          },
          {
            title: 'Colocación y ajuste',
            description:
              'Pruebo la corona, ajusto el contacto y la mordida hasta que la sientes como un diente propio, y entonces la fijo definitivamente. En tus revisiones compruebo que todo sigue perfecto.',
          },
        ],
      },
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
  guidesPage: {
    eyebrow: 'Guías',
    title: 'Guías para decidir con criterio',
    lead: 'Respuestas largas y claras a las dudas que más me llegan antes de empezar un tratamiento. Sin tecnicismos innecesarios y sin letra pequeña.',
    readMore: 'Leer la guía',
    backToGuides: 'Ver todas las guías',
  },
  guides: {
    implantCost: {
      navLabel: 'Precio de un implante dental',
      card: {
        title: '¿Cuánto cuesta un implante dental en Málaga?',
        description:
          'Qué se paga exactamente, de qué depende el precio final y qué preguntas conviene hacer antes de decidir.',
      },
      meta: {
        title: '¿Cuánto cuesta un implante dental en Málaga? - Dra. Eugenia Vila',
        description: `Precio de un implante dental en Málaga: desde ${formatPrice(PRICES.implantOnly, 'es')} el implante y ${formatPrice(PRICES.zirconiaCrown, 'es')} la corona de zirconio. Qué incluye, de qué depende y qué preguntar antes de decidir.`,
      },
      title: '¿Cuánto cuesta un implante dental en Málaga?',
      lead: `Un implante con su corona cuesta desde ${formatPrice(PRICES.implantCrown, 'es')} en mi consulta de El Palo. Debajo te explico cómo se reparte esa cifra, qué la hace subir en algunos casos y qué deberías preguntar en cualquier clínica antes de decidirte.`,
      sections: [
        {
          title: 'El precio tiene dos partes',
          body: [
            `Un implante no es una pieza única, sino dos: la raíz artificial que se integra en el hueso y el diente visible que va encima. La colocación del implante cuesta desde ${formatPrice(PRICES.implantOnly, 'es')} y la corona de zirconio desde ${formatPrice(PRICES.zirconiaCrown, 'es')}, es decir, desde ${formatPrice(PRICES.implantCrown, 'es')} el tratamiento completo.`,
            'Verlo separado ayuda a comparar presupuestos: a veces una cifra que parece baja corresponde solo al implante y la corona se suma después. Pregunta siempre si el precio que te dan incluye ya el diente que se ve.',
          ],
        },
        {
          title: 'De qué depende el precio final',
          body: [
            'De cuántos dientes falten y de cómo esté el hueso donde va el implante. Un implante unitario en un hueso sano es el caso más sencillo; varias piezas, o un hueso que ha perdido volumen tras años sin diente, necesitan más planificación y a veces pasos adicionales.',
            'También influye el estado del resto de la boca. Si hay encías inflamadas o caries activas, eso se trata antes: un implante se coloca sobre una boca sana, nunca a la vez que se apaga un fuego al lado.',
          ],
        },
        {
          title: 'Cuándo hacen falta injerto o elevación de seno',
          body: [
            `Cuando falta hueso donde tiene que anclarse el implante. El injerto (desde ${formatPrice(PRICES.boneGraft, 'es')}) aporta el volumen que falta, y la elevación de seno (desde ${formatPrice(PRICES.sinusLift, 'es')}) gana altura en las muelas de arriba, donde el seno maxilar baja con los años.`,
            'No son un extra que se añade por sistema: se hacen solo si tu caso los necesita, se ven en el TAC 3D antes de empezar y entran en el presupuesto cerrado desde el principio, no a mitad del tratamiento.',
          ],
        },
        {
          title: 'Qué está incluido y qué no',
          body: [
            'La primera valoración es gratuita: te exploro, te explico las opciones y sales con un presupuesto por escrito, sin compromiso.',
            'El TAC 3D (CBCT) se hace en un centro radiológico cercano porque el equipo no está en la consulta. Lo leo y lo planifico yo personalmente, y si sigues adelante con el tratamiento, lo que hayas pagado por él se descuenta del presupuesto.',
            'Las revisiones y el seguimiento posterior forman parte del tratamiento, no se facturan aparte.',
          ],
        },
        {
          title: 'Qué preguntar antes de decidir',
          body: [
            '¿Qué marca de implante se va a usar y qué aditamentos lleva la prótesis? En mi consulta son implantes Klockner y solo aditamentos originales de la marca, nunca copias compatibles: el ajuste es exacto y el implante queda protegido a largo plazo.',
            '¿Quién planifica y quién coloca el implante, y verás a esa misma persona en las revisiones?',
            '¿El presupuesto es cerrado y por escrito antes de empezar? El precio acordado debería ser el que pagas al terminar.',
          ],
        },
      ],
      cta: {
        title: '¿Quieres saber qué costaría en tu caso?',
        body: 'Escríbeme por WhatsApp, cuéntame qué diente te falta y te digo cómo lo enfocaría, sin compromiso.',
        message: 'Hola, me gustaría saber qué costaría un implante en mi caso.',
      },
    },
    englishDentist: {
      navLabel: 'Dentista que habla inglés',
      card: {
        title: 'Dentista que habla inglés en Málaga',
        description: 'Atención en inglés y en español, con una dentista registrada también en el Reino Unido.',
      },
      meta: {
        title: 'Dentista que habla inglés en Málaga - Dra. Eugenia Vila',
        description:
          'Dentista bilingüe en El Palo, Málaga: la Dra. Eugenia Vila atiende en inglés y en español, ejerce en una clínica de implantes de Londres y está registrada en el GDC británico.',
      },
      title: 'Dentista que habla inglés en Málaga',
      lead: 'Si vives en Málaga o pasas temporadas aquí y prefieres que te expliquen tu tratamiento en inglés, en mi consulta de El Palo lo hacemos con naturalidad: trabajo la mitad del año en una clínica de implantes de Londres.',
      sections: [
        {
          title: 'Consultas en inglés y en español',
          body: [
            'Te atiendo yo misma en el idioma que prefieras, sin intérpretes ni malentendidos. En una consulta dental eso importa: entender bien qué se te propone, por qué y qué alternativas tienes es lo que te permite decidir con tranquilidad.',
            'Los presupuestos y las pautas de cuidados también te los puedo entregar en inglés.',
          ],
        },
        {
          title: 'Registrada también en el Reino Unido',
          body: [
            `Además de estar colegiada en el Ilustre Colegio de Dentistas de Málaga, estoy registrada en el General Dental Council británico (n.º ${CLINIC.gdc}), el organismo que regula el ejercicio de la odontología en el Reino Unido.`,
            'Trabajo como implantóloga en Dental Art Implant Clinics, en Londres, donde fui Dentista del Año 2024.',
          ],
        },
        {
          title: 'Los mismos materiales y protocolos que en Londres',
          body: [
            'Uso en Málaga los mismos implantes, materiales y laboratorios que uso en Londres, con los mismos protocolos de trabajo. Si te has tratado en el Reino Unido y comparas, reconocerás la forma de trabajar.',
            'La diferencia práctica está en los tiempos y en el trato: aquí la consulta es pequeña y personal, y te atiendo yo en cada visita.',
          ],
        },
        {
          title: 'Si estás de visita o vives a caballo entre dos países',
          body: [
            'Paso consulta en Málaga en periodos concretos del año, así que conviene escribir con algo de antelación para encajar tu tratamiento en tus fechas. Muchos pacientes organizan las visitas alrededor de sus viajes.',
            'Escríbeme por WhatsApp contándome tu caso y tus fechas y te digo con franqueza qué se puede hacer en ese tiempo y qué es mejor no acelerar.',
          ],
        },
      ],
      cta: {
        title: '¿Prefieres que te atienda en inglés?',
        body: 'Escríbeme por WhatsApp en el idioma que quieras y te respondo yo misma.',
        message: 'Hello, I would like to book an appointment in English.',
      },
    },
    chooseDentist: {
      navLabel: 'Cómo elegir dentista',
      card: {
        title: 'Cómo elegir dentista en Málaga',
        description: 'Seis preguntas sencillas que te dicen bastante más sobre una clínica que su publicidad.',
      },
      meta: {
        title: 'Cómo elegir dentista en Málaga - Dra. Eugenia Vila',
        description:
          'Seis preguntas para elegir clínica dental en Málaga con criterio: quién te atiende, qué materiales se usan, si el presupuesto es cerrado y qué pasa después del tratamiento.',
      },
      title: 'Cómo elegir dentista en Málaga',
      lead: 'Elegir dentista cuesta, porque desde fuera todas las clínicas se parecen. Estas seis preguntas se hacen en un minuto y te dicen bastante más que cualquier anuncio.',
      sections: [
        {
          title: '1. ¿Quién te va a atender en cada visita?',
          body: [
            'En muchas clínicas te valora una persona, te trata otra y te revisa una tercera. No tiene por qué salir mal, pero se pierden matices por el camino y acabas contando tu caso tres veces.',
            'Pregunta si verás siempre al mismo profesional, y si quien hace el diagnóstico será quien haga el tratamiento.',
          ],
        },
        {
          title: '2. ¿Qué materiales y qué marcas se usan?',
          body: [
            'Una clínica que trabaja con buenos materiales no tiene ningún problema en decirte la marca del implante, del composite o del laboratorio que hace las coronas.',
            'En implantes hay un detalle que casi nadie pregunta y que importa mucho: si la prótesis lleva aditamentos originales de la marca del implante o piezas compatibles de otro fabricante.',
          ],
        },
        {
          title: '3. ¿El presupuesto es cerrado y por escrito?',
          body: [
            'Un presupuesto por escrito, con el detalle de lo que incluye, evita el peor momento de cualquier tratamiento: la sorpresa a mitad de camino.',
            'Pregunta también qué pasa si aparece algo imprevisto, y si eso puede cambiar la cifra.',
          ],
        },
        {
          title: '4. ¿Cuánto tiempo se dedica a tu caso?',
          body: [
            'El tiempo es la parte del trabajo que no se ve en el precio, y es donde se nota la diferencia entre un tratamiento correcto y uno bien acabado: ajustar una corona, pulir una carilla o comprobar una mordida requiere calma.',
            'Una primera visita de cinco minutos rara vez da para entender un caso completo.',
          ],
        },
        {
          title: '5. ¿Puedes ver opiniones y casos reales?',
          body: [
            'Las reseñas con nombre y detalle valen mucho más que una nota media. Busca opiniones que cuenten qué tratamiento se hizo y cómo fue el seguimiento.',
            'Si ves fotos de antes y después, fíjate en si el encuadre y la luz son parecidos en las dos. Una foto de después mejor iluminada y con más arreglo personal exagera el cambio: los primeros planos comparables son los que de verdad enseñan el trabajo.',
          ],
        },
        {
          title: '6. ¿Qué pasa después del tratamiento?',
          body: [
            'Un buen tratamiento no termina el día que sales de la consulta. Pregunta qué revisiones incluye, cada cuánto conviene volver y a quién llamas si algo te molesta un domingo.',
            'La respuesta a esa última pregunta dice mucho sobre cómo entiende una clínica su trabajo.',
          ],
        },
      ],
      cta: {
        title: '¿Quieres una segunda opinión sobre tu caso?',
        body: 'Cuéntame por WhatsApp qué te han propuesto y te doy mi opinión con franqueza, sin compromiso.',
        message: 'Hola, me gustaría una segunda opinión sobre un tratamiento.',
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
    lead: `Soy Eugenia Vila, dentista y médico, y llevo ${CLINIC.years} años cuidando la salud bucal de familias en Málaga. Me formé en Implantología (UIC Barcelona) y en Estética (Universidad de Córdoba), y atiendo cada caso de forma personal y sin prisas, poniendo siempre al paciente por delante.`,
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
          `Más de 20.000 pacientes atendidos en consulta privada durante ${CLINIC.years} años.`,
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
        question: '¿Cuánto cuesta la primera visita?',
        answer:
          'Nada: la primera valoración es gratuita. Te exploro, escucho qué necesitas y te explico las opciones, y después recibes un presupuesto cerrado y por escrito, sin compromiso. Si tu caso necesita radiografías, te doy un volante para un centro radiológico cercano; si sigues adelante con el tratamiento, lo que pagues por ellas se descuenta del presupuesto.',
      },
      {
        id: 'cbct',
        question: '¿Necesito un TAC (CBCT) para ponerme un implante? ¿Dónde se hace?',
        answer:
          'Sí, para colocar implantes hace falta un TAC 3D (CBCT). Se realiza en un centro radiológico externo y lo leo y valoro yo personalmente, como hago a diario en Londres; esa valoración está incluida en tu plan y, si sigues adelante con el tratamiento, lo que pagues por el TAC se descuenta del presupuesto.',
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
        question: '¿Cómo se paga el tratamiento? ¿Se puede fraccionar?',
        answer:
          'El precio se acuerda por escrito antes de empezar y no cambia por el camino. Si te viene mejor, el pago se puede fraccionar a lo largo del tratamiento; lo concretamos en la consulta, según el tratamiento y tu caso.',
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
      {
        id: 'implantLifespan',
        question: '¿Cuánto dura un implante dental?',
        answer:
          'Bien colocado y bien cuidado, un implante puede durar décadas. Las dos claves están en tus manos y en las mías: una higiene diaria a conciencia y revisiones regulares para que la encía y el hueso de alrededor se mantengan sanos.',
      },
      {
        id: 'implantSmoking',
        question: 'Fumo. ¿Puedo ponerme implantes?',
        answer:
          'Fumar no siempre impide el tratamiento, pero sí aumenta el riesgo de que el implante fracase o de que la encía de alrededor enferme. Lo valoramos juntos en la primera visita, con claridad y sin sermones; si estás pensando en reducir o dejarlo, el implante es una buena excusa.',
      },
      {
        id: 'extractionPain',
        question: '¿Duele una extracción?',
        answer:
          'Con anestesia local, no: durante la intervención notas presión, pero no dolor. Después puede haber molestias unos días, que se controlan bien con la pauta que te doy por escrito. La mayoría de mis pacientes me dice que fue mucho mejor de lo que esperaba.',
      },
      {
        id: 'wisdomTeeth',
        question: '¿Hay que quitar siempre las muelas del juicio?',
        answer:
          'No. Solo conviene extraerlas cuando dan problemas o van a darlos: caries que no se pueden tratar bien, infecciones repetidas, daño a la muela de al lado o falta de espacio. Se valora con una exploración y una radiografía, no por sistema.',
      },
      {
        id: 'alignersDuration',
        question: '¿Cuánto dura el tratamiento con alineadores?',
        answer:
          'Depende de tu caso: las correcciones sencillas pueden resolverse en pocos meses y las más completas superan el año. Con la simulación 3D sabrás la duración estimada de tu plan antes de empezar.',
      },
      {
        id: 'alignersRetention',
        question: '¿Y cuando termine? ¿Se pueden volver a mover los dientes?',
        answer:
          'Los dientes tienden a moverse durante toda la vida, por eso el tratamiento termina con una retención que mantiene el resultado. Es sencilla de llevar y es la diferencia entre una sonrisa alineada unos años y una alineada para siempre.',
      },
      {
        id: 'whiteningEnamel',
        question: '¿El blanqueamiento daña el esmalte?',
        answer:
          'Hecho con productos profesionales y con seguimiento, no daña el esmalte. Puede dar algo de sensibilidad pasajera los primeros días; por eso lo pautamos juntos y ajustamos el ritmo si hace falta.',
      },
      {
        id: 'veneersCare',
        question: '¿Qué cuidados necesitan las carillas de composite?',
        answer:
          'Los mismos que tus dientes: buen cepillado, limpieza interdental y revisiones. Conviene no morder cosas duras con los dientes delanteros (hielo, cáscaras, abrir envases), y en tus revisiones las pulimos para que conserven el brillo.',
      },
      {
        id: 'bleedingGums',
        question: 'Me sangran las encías al cepillarme. ¿Es normal?',
        answer:
          'No, sangrar no es normal: suele ser señal de encía inflamada por la placa y el sarro. Se resuelve con una buena limpieza y la técnica de higiene adecuada; dejarlo pasar puede acabar afectando al hueso que sujeta los dientes, así que mejor verlo pronto.',
      },
      {
        id: 'bruxismSigns',
        question: '¿Cómo sé si aprieto o rechino los dientes al dormir?',
        answer:
          'Las señales típicas: despertarte con la mandíbula cansada o dolor de cabeza, sensibilidad, dientes que se ven desgastados o pequeñas fisuras. En la revisión lo confirmo enseguida y, si hace falta, una férula de descarga a medida protege tus dientes mientras duermes.',
      },
      {
        id: 'crownWhen',
        question: '¿Cuándo hace falta una corona y no basta un empaste?',
        answer:
          'Cuando queda poco diente sano: caries grandes, fracturas o dientes muy desgastados o endodonciados. Un empaste repara, pero no abraza el diente; la corona lo cubre por completo y reparte la fuerza al masticar, que es lo que evita que se rompa.',
      },
      {
        id: 'crownCare',
        question: '¿Una corona necesita cuidados especiales?',
        answer:
          'Los de siempre, hechos bien: cepillado, higiene interdental y revisiones. La corona no se caría, pero el diente que hay debajo sí puede hacerlo en el borde de la unión, y de eso se encargan tu higiene diaria y mis revisiones.',
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
    directions: 'Ver la ruta en Google Maps',
    mapCta: 'Ver el mapa',
    gettingHereTitle: 'Cómo llegar',
    gettingHereBus:
      'En autobús: las líneas 3 y 11 de la EMT recorren la avenida Juan Sebastián Elcano y paran a un paso de la clínica.',
    gettingHereCar:
      'En coche: se suele poder aparcar en la propia avenida o en las calles cercanas; ten en cuenta que algunas plazas son de zona azul (SARE) entre semana.',
    gettingHereAccess: 'La consulta está en la 2ª planta y el edificio tiene ascensor.',
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
    guides: 'Guides',
    more: 'More',
    book: 'Book a visit',
  },
  meta: {
    home: {
      title: 'Dr. Eugenia Vila - Dental Clinic in El Palo, Málaga',
      description: `Dental clinic in El Palo, Málaga. ${CLINIC.years} years of experience in implants, oral surgery, aligners and cosmetic dentistry. Warm, personal care and top-quality materials, always with Dr. Eugenia Vila herself.`,
    },
    about: {
      title: 'About - Dr. Eugenia Vila',
      description: `Meet Dr. Eugenia Vila: physician and licensed dentist, with master’s degrees in Implantology and Aesthetics, ${CLINIC.years} years of experience and Dentist of the Year 2024.`,
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
    guides: {
      title: 'Dental guides - Dr. Eugenia Vila',
      description:
        'Clear guides to help you decide: how much a dental implant costs in Málaga, how to choose a dentist, and English-speaking dental care in El Palo.',
    },
  },
  a11y: { skip: 'Skip to content', openMenu: 'Open menu', closeMenu: 'Close menu', switchLang: 'View in Spanish' },
  hero: {
    eyebrow: 'Dental clinic in El Palo, Málaga',
    title: 'Your smile, in the best hands',
    subtitle: `${CLINIC.years} years caring for smiles in Málaga, with warm, honest treatment. You are always seen personally by Dr. Eugenia Vila, with unhurried visits and top-quality materials.`,
    ctaBook: 'Book on WhatsApp',
    ctaTreatments: 'See treatments',
    availability: 'Free first assessment · By appointment · The doctor replies to you herself',
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
      'Guide prices for straightforward cases. Your first assessment is free, and with it you receive a fixed, written quote with no obligation: the price we agree is the price you pay.',
    quality: {
      title: 'The same quality I deliver in London',
      lead: 'I carry out every treatment myself, calmly and without shortcuts: the same materials, protocols and laboratories I use at the London implant clinic where I practise. I do not consider a case finished until the result is perfect, and none of this has to be taken on my word: it can all be checked.',
      points: [
        {
          title: `${CLINIC.years} years of experience`,
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
        description: `Klockner dental implants in El Palo, Málaga, from ${formatPrice(PRICES.implantOnly, 'en')} plus ${formatPrice(PRICES.zirconiaCrown, 'en')} for the zirconia crown. ${CLINIC.years} years of implantology experience and a fixed written quote.`,
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
        description: `Simple and complex extractions, grafts and minimally invasive surgery in El Palo, Málaga. ${CLINIC.years} years of surgical experience.`,
      },
      title: 'Oral surgery',
      lead: `${CLINIC.years} years of surgery stand behind a careful technique that preserves healthy tissue and makes recovery easier.`,
      points: [
        'Simple and complex extractions',
        'Minimally invasive surgery that preserves healthy tissue',
        'Bone grafts and preparation for implants',
        'Written aftercare instructions and close post-operative follow-up',
      ],
      process: {
        title: 'An extraction, step by step',
        intro:
          'Extractions are daunting, I know. That is why I explain everything before doing anything, and work to make the experience far easier than you imagine:',
        steps: [
          {
            title: 'Assessment and X-ray',
            description:
              'I examine you, see how the tooth is doing and explain clearly why it should come out, or whether it can be saved. If an X-ray is needed, I give you a referral note for a nearby radiology centre and, if you go ahead, what you pay for it is deducted from the quote.',
          },
          {
            title: 'Plan and fixed quote',
            description:
              'Before we start you know what I am going to do, what it costs and what you will feel at each moment. If the extraction is complex, I tell you from the outset; no surprises halfway through.',
          },
          {
            title: 'The procedure',
            description:
              'With local anaesthetic it does not hurt: you will feel pressure, nothing more. I use a careful, minimally invasive technique that respects the surrounding bone and gum, already thinking about how the area will heal.',
          },
          {
            title: 'Aftercare at home',
            description:
              'You leave with complete written instructions: the first 24 hours matter most, with a cold compress, no vigorous rinsing, no smoking and soft food. And I am one WhatsApp message away for any question.',
          },
          {
            title: 'Follow-up and next step',
            description:
              'I check the healing and, if the extracted tooth needs replacing, we look calmly at the options, such as an implant, at your pace and with its own fixed quote.',
          },
        ],
      },
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
      process: {
        title: 'The treatment, step by step',
        intro:
          'With aligners there is no mystery: from day one you know what will move, roughly how long it will take and what it costs.',
        steps: [
          {
            title: 'Assessment and records',
            description:
              'I examine you, listen to what you would like to correct and take the records of your mouth. With them your case study is prepared and I confirm aligners are the right option for you.',
          },
          {
            title: '3D simulation and quote',
            description:
              'You see in 3D how your teeth will move and how your smile will look at the end, before starting. If you like it, you receive your plan with the approximate number of aligners and the fixed written quote.',
          },
          {
            title: 'Your aligners',
            description:
              'You receive your made-to-measure Ordoline aligner sets. They are worn about 22 hours a day, you take them out to eat and brush, and each set is changed following the plan we agree together.',
          },
          {
            title: 'Check-ups with the doctor',
            description:
              'We meet regularly to confirm the movement is following the simulation. If anything drifts, I correct it in time; the check-ups are done by me, not an assistant.',
          },
          {
            title: 'Retention',
            description:
              'Once we reach the result, simple retention keeps your teeth in their new position. Without it, teeth tend to drift again over the years; with it, what we achieved stays.',
          },
        ],
      },
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
      process: {
        title: 'How I work on aesthetics, step by step',
        intro:
          'In aesthetics technique matters, but listening matters just as much: the best result is the one that looks beautiful and still looks like you.',
        steps: [
          {
            title: 'Listening and assessing your smile',
            description:
              'You tell me what you would like to change and I tell you sincerely what I would do and what I would not. Sometimes the simplest option, a whitening or a small touch-up, gives the best result.',
          },
          {
            title: 'Plan and fixed quote',
            description:
              'We define the goal together and you receive the written plan with its fixed quote. You know what we will do, in how many visits and at what cost before we start.',
          },
          {
            title: 'Whitening, if it is part of your plan',
            description:
              'I prepare your custom trays and show you how to use them at home with the whitening syringes. We track the progress together until we reach a natural white, without overdoing it.',
          },
          {
            title: 'Composite veneers',
            description:
              'I model the composite directly on the tooth, usually without drilling it, adjusting shape and colour in the same visit. I work layer by layer until the veneer blends in with the rest of your smile.',
          },
          {
            title: 'Review and maintenance',
            description:
              'A few days later I review the result calmly and make any final touch-ups. At your check-ups we polish and maintain the work so it stays looking like day one.',
          },
        ],
      },
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
      process: {
        title: 'A check-up, step by step',
        intro:
          'Whether it is your first visit or your yearly check-up, the goal is the same: you leave knowing exactly how your mouth is and what it needs, if anything.',
        steps: [
          {
            title: 'A complete, unhurried check-up',
            description:
              'I examine teeth, gums and bite calmly and explain what I see in plain words. If something needs treatment I tell you why, and if everything is healthy I tell you that too: I do not treat what does not need it.',
          },
          {
            title: 'A careful cleaning',
            description:
              'I remove tartar and staining with a technique that respects the enamel and the gums. I also show you the hygiene habits that suit your mouth best, from brushing to interdental cleaning.',
          },
          {
            title: 'Treatment by priority',
            description:
              'If there are cavities or other problems, we order the plan by priority and you receive your fixed written quote. Fillings and build-ups are done with quality composite, calmly and carefully adjusted to your bite.',
          },
          {
            title: 'Maintenance at your pace',
            description:
              'I tell you how often a check-up makes sense in your case, with no unnecessary visits. And if you clench your teeth in your sleep, a custom night guard protects your enamel and all the work done.',
          },
        ],
      },
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
      process: {
        title: 'The treatment, step by step',
        intro:
          'A well-made crown goes unnoticed: it blends in with your teeth and lets you chew with confidence. Getting there takes a careful process:',
        steps: [
          {
            title: 'Assessing the tooth',
            description:
              'I check how the tooth is doing and explain the best way to restore it: sometimes a build-up is enough, and sometimes a crown that protects it fully is the better choice. If an X-ray is needed, I give you a referral note for a nearby centre.',
          },
          {
            title: 'Plan and fixed quote',
            description:
              'You receive the written plan with its fixed quote before we start. If several teeth are affected or wear has lowered your bite, I explain the order and timings of the whole process.',
          },
          {
            title: 'Preparation and temporary',
            description:
              'I prepare the tooth preserving as much healthy structure as possible, take the records for the laboratory and fit a temporary: you leave with the tooth protected and looking presentable.',
          },
          {
            title: 'The laboratory work',
            description:
              'Your zirconia crown is made in the same laboratories I work with in London, matched to the shape and colour of your teeth. I do not sign off a crown I would not sign off at my London practice.',
          },
          {
            title: 'Fitting and adjustment',
            description:
              'I try the crown in, adjust the contact and the bite until it feels like a tooth of your own, and then fix it permanently. At your check-ups I confirm everything is still perfect.',
          },
        ],
      },
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
  guidesPage: {
    eyebrow: 'Guides',
    title: 'Guides to help you decide',
    lead: 'Long, clear answers to the questions I am asked most before a treatment starts. No unnecessary jargon and no small print.',
    readMore: 'Read the guide',
    backToGuides: 'See all guides',
  },
  guides: {
    implantCost: {
      navLabel: 'Dental implant cost',
      card: {
        title: 'How much does a dental implant cost in Málaga?',
        description: 'Exactly what you pay for, what makes the final price change and what to ask before you decide.',
      },
      meta: {
        title: 'How much does a dental implant cost in Málaga? - Dr. Eugenia Vila',
        description: `Dental implant prices in Málaga: from ${formatPrice(PRICES.implantOnly, 'en')} for the implant and ${formatPrice(PRICES.zirconiaCrown, 'en')} for the zirconia crown. What is included, what changes the price and what to ask before deciding.`,
      },
      title: 'How much does a dental implant cost in Málaga?',
      lead: `An implant with its crown starts from ${formatPrice(PRICES.implantCrown, 'en')} at my practice in El Palo. Below I explain how that figure breaks down, what pushes it up in some cases, and what you should ask at any clinic before deciding.`,
      sections: [
        {
          title: 'The price comes in two parts',
          body: [
            `An implant is not a single piece but two: the artificial root that integrates with the bone, and the visible tooth on top. Placing the implant starts from ${formatPrice(PRICES.implantOnly, 'en')} and the zirconia crown from ${formatPrice(PRICES.zirconiaCrown, 'en')}, which is ${formatPrice(PRICES.implantCrown, 'en')} for the complete treatment.`,
            'Seeing it split helps when comparing quotes: sometimes a low-looking figure covers only the implant and the crown is added later. Always ask whether the price you are given already includes the tooth you can see.',
          ],
        },
        {
          title: 'What the final price depends on',
          body: [
            'On how many teeth are missing and on the state of the bone where the implant goes. A single implant in healthy bone is the simplest case; several teeth, or bone that has lost volume after years without a tooth, need more planning and sometimes extra steps.',
            'The rest of the mouth matters too. If there are inflamed gums or active decay, those are treated first: an implant goes into a healthy mouth, never alongside a fire being put out next door.',
          ],
        },
        {
          title: 'When a graft or a sinus lift is needed',
          body: [
            `When there is not enough bone to anchor the implant. A graft (from ${formatPrice(PRICES.boneGraft, 'en')}) adds the missing volume, and a sinus lift (from ${formatPrice(PRICES.sinusLift, 'en')}) gains height in the upper back teeth, where the maxillary sinus drops over the years.`,
            'They are not an extra added as a matter of course: they are only done if your case needs them, they show up on the 3D scan before we start, and they are part of the fixed quote from the outset, not halfway through treatment.',
          ],
        },
        {
          title: 'What is included and what is not',
          body: [
            'The first assessment is free: I examine you, explain your options and you leave with a written quote, with no obligation.',
            'The 3D scan (CBCT) is taken at a nearby radiology centre because the equipment is not in the practice. I read and plan it personally, and if you go ahead with treatment, what you paid for it is deducted from the quote.',
            'Check-ups and follow-up are part of the treatment, not billed separately.',
          ],
        },
        {
          title: 'What to ask before deciding',
          body: [
            'Which implant brand will be used, and what components will the prosthesis carry? At my practice they are Klockner implants with original Klockner components only, never compatible copies: the fit is exact and the implant stays protected long term.',
            'Who plans and who places the implant, and will you see that same person at your check-ups?',
            'Is the quote fixed and in writing before starting? The price agreed should be the price you pay at the end.',
          ],
        },
      ],
      cta: {
        title: 'Want to know what it would cost in your case?',
        body: 'Message me on WhatsApp, tell me which tooth is missing and I will tell you how I would approach it, with no obligation.',
        message: 'Hello, I would like to know what an implant would cost in my case.',
      },
    },
    englishDentist: {
      navLabel: 'English-speaking dentist',
      card: {
        title: 'English-speaking dentist in Málaga',
        description: 'Care in English and Spanish, from a dentist also registered in the United Kingdom.',
      },
      meta: {
        title: 'English-speaking dentist in Málaga - Dr. Eugenia Vila',
        description:
          'Bilingual dentist in El Palo, Málaga: Dr. Eugenia Vila treats patients in English and Spanish, practises at a London implant clinic and is registered with the UK GDC.',
      },
      title: 'English-speaking dentist in Málaga',
      lead: 'If you live in Málaga or spend part of the year here and would rather have your treatment explained in English, that comes naturally at my practice in El Palo: I spend half the year working at an implant clinic in London.',
      sections: [
        {
          title: 'Appointments in English and Spanish',
          body: [
            'I see you myself, in whichever language you prefer, with no interpreters and no misunderstandings. In a dental appointment that matters: properly understanding what is being proposed, why, and what the alternatives are is what lets you decide calmly.',
            'Quotes and aftercare instructions can be given to you in English too.',
          ],
        },
        {
          title: 'Also registered in the United Kingdom',
          body: [
            `Besides being registered with the Málaga College of Dentists, I am registered with the British General Dental Council (no. ${CLINIC.gdc}), the body that regulates dental practice in the UK.`,
            'I work as an implantologist at Dental Art Implant Clinics in London, where I was named Dentist of the Year 2024.',
          ],
        },
        {
          title: 'The same materials and protocols as in London',
          body: [
            'In Málaga I use the same implants, materials and laboratories I use in London, with the same working protocols. If you have been treated in the UK and compare, you will recognise the way of working.',
            'The practical difference is in the timings and the care: here the practice is small and personal, and I see you myself at every visit.',
          ],
        },
        {
          title: 'If you are visiting or living between two countries',
          body: [
            'I hold consultations in Málaga during specific periods of the year, so it is worth writing a little in advance to fit your treatment around your dates. Many patients plan their visits around their trips.',
            'Message me on WhatsApp with your case and your dates and I will tell you frankly what can be done in that time and what is better not to rush.',
          ],
        },
      ],
      cta: {
        title: 'Would you rather be seen in English?',
        body: 'Message me on WhatsApp in whichever language you prefer and I will reply personally.',
        message: 'Hello, I would like to book an appointment in English.',
      },
    },
    chooseDentist: {
      navLabel: 'How to choose a dentist',
      card: {
        title: 'How to choose a dentist in Málaga',
        description: 'Six simple questions that tell you far more about a clinic than its advertising does.',
      },
      meta: {
        title: 'How to choose a dentist in Málaga - Dr. Eugenia Vila',
        description:
          'Six questions for choosing a dental clinic in Málaga: who treats you, which materials are used, whether the quote is fixed, and what happens after treatment.',
      },
      title: 'How to choose a dentist in Málaga',
      lead: 'Choosing a dentist is hard, because from the outside every clinic looks alike. These six questions take a minute to ask and tell you far more than any advert.',
      sections: [
        {
          title: '1. Who will treat you at each visit?',
          body: [
            'At many clinics one person assesses you, another treats you and a third does your check-up. It does not have to go wrong, but details get lost along the way and you end up telling your story three times.',
            'Ask whether you will always see the same professional, and whether whoever makes the diagnosis will be the one carrying out the treatment.',
          ],
        },
        {
          title: '2. Which materials and brands are used?',
          body: [
            'A clinic that works with good materials has no problem telling you the brand of the implant, the composite, or the laboratory that makes its crowns.',
            'With implants there is one detail almost nobody asks about and that matters a great deal: whether the prosthesis uses original components from the implant brand or compatible parts from another manufacturer.',
          ],
        },
        {
          title: '3. Is the quote fixed and in writing?',
          body: [
            'A written quote, itemising what it includes, avoids the worst moment of any treatment: the surprise halfway through.',
            'Ask as well what happens if something unexpected comes up, and whether that can change the figure.',
          ],
        },
        {
          title: '4. How much time is given to your case?',
          body: [
            'Time is the part of the work that does not show up in the price, and it is where the difference lies between a correct treatment and a well-finished one: adjusting a crown, polishing a veneer or checking a bite takes patience.',
            'A five-minute first visit rarely allows anyone to understand a whole case.',
          ],
        },
        {
          title: '5. Can you see real reviews and cases?',
          body: [
            'Reviews with a name and detail are worth far more than an average score. Look for opinions that say which treatment was done and how the follow-up went.',
            'If you see before-and-after photos, check whether the framing and lighting match in both. An after photo that is better lit and better groomed exaggerates the change: comparable close-ups are what really show the work.',
          ],
        },
        {
          title: '6. What happens after the treatment?',
          body: [
            'Good treatment does not end the day you walk out of the clinic. Ask which check-ups are included, how often you should come back, and who you call if something bothers you on a Sunday.',
            'The answer to that last question says a lot about how a clinic understands its work.',
          ],
        },
      ],
      cta: {
        title: 'Would you like a second opinion on your case?',
        body: 'Tell me on WhatsApp what you have been offered and I will give you my frank opinion, with no obligation.',
        message: 'Hello, I would like a second opinion on a treatment.',
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
    lead: `I’m Eugenia Vila, a dentist and physician, and I’ve spent ${CLINIC.years} years caring for the oral health of families in Málaga. I trained in Implantology (UIC Barcelona) and Aesthetics (University of Córdoba), and I treat every case personally and unhurried, always putting the patient first.`,
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
          `More than 20,000 patients treated in private practice over ${CLINIC.years} years.`,
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
        question: 'What does the first visit cost?',
        answer:
          'Nothing: the first assessment is free. I examine you, listen to what you need and explain your options, and you then receive a fixed, written quote with no obligation. If your case needs X-rays, I give you a referral note for a nearby radiology centre; if you go ahead with treatment, what you pay for them is deducted from the quote.',
      },
      {
        id: 'cbct',
        question: 'Do I need a CBCT scan for an implant? Where is it taken?',
        answer:
          'Yes, implant placement requires a 3D scan (CBCT). It is taken at an external radiology centre and I read and assess it personally, as I do daily in London; that assessment is included in your plan and, if you go ahead with treatment, what you pay for the scan is deducted from the quote.',
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
        question: 'How do I pay for treatment? Can I pay in instalments?',
        answer:
          'The price is agreed in writing before we start and does not change along the way. If it suits you better, payment can be spread over the course of treatment; we settle the details at the clinic, depending on the treatment and your case.',
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
      {
        id: 'implantLifespan',
        question: 'How long does a dental implant last?',
        answer:
          'Well placed and well cared for, an implant can last for decades. The two keys are in your hands and mine: thorough daily hygiene and regular check-ups so the gum and bone around it stay healthy.',
      },
      {
        id: 'implantSmoking',
        question: 'I smoke. Can I have implants?',
        answer:
          'Smoking does not always rule out treatment, but it does raise the risk of the implant failing or the gum around it becoming inflamed. We weigh it up together at the first visit, clearly and without lectures; if you are thinking about cutting down or quitting, an implant is a good excuse.',
      },
      {
        id: 'extractionPain',
        question: 'Does an extraction hurt?',
        answer:
          'With local anaesthetic, no: during the procedure you feel pressure, but not pain. There can be some discomfort for a few days afterwards, well controlled with the written instructions I give you. Most of my patients tell me it was far better than they expected.',
      },
      {
        id: 'wisdomTeeth',
        question: 'Do wisdom teeth always have to come out?',
        answer:
          'No. They are only worth removing when they cause problems or are about to: decay that cannot be properly treated, repeated infections, damage to the neighbouring molar or lack of room. It is assessed with an examination and an X-ray, not as a routine.',
      },
      {
        id: 'alignersDuration',
        question: 'How long does aligner treatment take?',
        answer:
          'It depends on your case: simple corrections can be finished in a few months, while more complete ones take over a year. With the 3D simulation you will know the estimated length of your plan before starting.',
      },
      {
        id: 'alignersRetention',
        question: 'And when I finish? Can the teeth move again?',
        answer:
          'Teeth tend to move throughout life, which is why treatment ends with retention that holds the result. It is easy to wear, and it is the difference between a smile that stays aligned for a few years and one that stays aligned for good.',
      },
      {
        id: 'whiteningEnamel',
        question: 'Does whitening damage the enamel?',
        answer:
          'Done with professional products and proper follow-up, it does not damage the enamel. It can cause some passing sensitivity in the first days; that is why we set the pace together and adjust it if needed.',
      },
      {
        id: 'veneersCare',
        question: 'How do I look after composite veneers?',
        answer:
          'The same way you look after your teeth: good brushing, interdental cleaning and check-ups. Avoid biting hard things with your front teeth (ice, shells, opening packets), and at your check-ups we polish them so they keep their shine.',
      },
      {
        id: 'bleedingGums',
        question: 'My gums bleed when I brush. Is that normal?',
        answer:
          'No, bleeding is not normal: it is usually a sign of gum inflammation caused by plaque and tartar. A good cleaning and the right hygiene technique resolve it; left alone it can end up affecting the bone that holds your teeth, so it is best seen early.',
      },
      {
        id: 'bruxismSigns',
        question: 'How do I know if I clench or grind my teeth in my sleep?',
        answer:
          'The typical signs: waking up with a tired jaw or a headache, sensitivity, teeth that look worn down or small cracks. I can confirm it quickly at a check-up and, if needed, a custom night guard protects your teeth while you sleep.',
      },
      {
        id: 'crownWhen',
        question: 'When is a crown needed rather than a filling?',
        answer:
          'When little healthy tooth is left: large cavities, fractures, or teeth that are heavily worn or root-canal treated. A filling repairs, but does not hold the tooth together; a crown covers it completely and spreads the chewing force, which is what stops it breaking.',
      },
      {
        id: 'crownCare',
        question: 'Does a crown need special care?',
        answer:
          'The usual care, done well: brushing, interdental cleaning and check-ups. The crown itself cannot decay, but the tooth underneath can at the joint line, and that is what your daily hygiene and my check-ups take care of.',
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
    directions: 'View the route on Google Maps',
    mapCta: 'View the map',
    gettingHereTitle: 'Getting here',
    gettingHereBus:
      'By bus: EMT lines 3 and 11 run along Avenida Juan Sebastián Elcano and stop a short walk from the clinic.',
    gettingHereCar:
      'By car: you can usually park on the avenue itself or in the nearby streets; note that some spaces are blue-zone (SARE) paid parking on weekdays.',
    gettingHereAccess: 'The clinic is on the second floor and the building has a lift.',
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
  implants: ['implantCost', 'implantPain', 'implantLifespan', 'implantSmoking', 'cbct', 'guarantee'],
  oralSurgery: ['extractionPain', 'extractionAftercare', 'wisdomTeeth', 'firstVisit', 'guarantee'],
  orthodontics: ['aligners', 'alignersDaily', 'alignersDuration', 'alignersRetention', 'firstVisit'],
  aesthetics: ['whitening', 'whiteningEnamel', 'veneersLifespan', 'veneersCare', 'materials'],
  general: ['cleaningFrequency', 'bleedingGums', 'bruxismSigns', 'firstVisit', 'payment'],
  crowns: ['crownWhen', 'materials', 'crownLifespan', 'crownCare', 'guarantee'],
};
