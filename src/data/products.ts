// Hand-curated product recommendations: the single source the products page reads.
// Each entry keeps its amazon.es ASIN and both-language copy together, so adding or
// removing a product is a one-object change (same approach as data/reviews.ts).
//
// The entries below are temporary picks so the page works end to end; swap them for
// Dr. Vila's final list. Per product: set `asin` to the B0... code from the amazon.es
// product URL, and write the name plus a short clinical reason in both languages.
// Leave `asin` empty to fall back to a tagged search. Do not hotlink Amazon images:
// use a local /public path or leave `image` empty.
export default [
  {
    id: 'electric-toothbrush',
    category: 'brushing',
    asin: 'B0B4WR31MJ',
    image: '',
    name_es: 'Cepillo eléctrico Oral-B Pro 3 3000',
    name_en: 'Oral-B Pro 3 3000 electric toothbrush',
    rationale_es:
      'Un cepillo eléctrico con temporizador y control de presión ayuda a cepillarse los dos minutos recomendados sin presionar de más la encía.',
    rationale_en:
      'An electric toothbrush with a timer and pressure control helps you brush for the recommended two minutes without pressing too hard on the gums.',
  },
  {
    id: 'brush-heads',
    category: 'brushing',
    asin: 'B0BWNW7H47',
    image: '',
    name_es: 'Recambios Oral-B Pro CrossAction (pack de 10)',
    name_en: 'Oral-B Pro CrossAction replacement heads (10-pack)',
    rationale_es:
      'Conviene cambiar el cabezal cada tres meses aproximadamente: con las cerdas desgastadas se limpia peor.',
    rationale_en:
      'Brush heads should be replaced roughly every three months: worn bristles clean noticeably less well.',
  },
  {
    id: 'interdental-brushes',
    category: 'interdental',
    asin: 'B000V3O6MY',
    image: '',
    name_es: 'Cepillos interdentales TePe Original (0,8 mm)',
    name_en: 'TePe Original interdental brushes (0.8 mm)',
    rationale_es:
      'Limpian el espacio entre los dientes, donde el cepillo no llega. La talla debe ajustarse a cada hueco; en consulta te indicamos la tuya.',
    rationale_en:
      'They clean the spaces between the teeth, where a toothbrush cannot reach. The size should match each gap; we can tell you yours at the clinic.',
  },
];
