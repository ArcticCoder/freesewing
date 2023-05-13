export const loadSettingsConfig = ({ language = 'en', units = 'metric' }) => ({
  paperless: {
    control: 2, // Show when control > 1
    list: [0, 1],
    choiceTitles: {
      0: 'paperlessNo',
      1: 'paperlessYes',
    },
    valueTitles: {
      0: 'no',
      1: 'yes',
    },
    dflt: 0,
  },
  sabool: {
    control: 2, // Show when control > 1
    list: [0, 1],
    choiceTitles: {
      0: 'saNo',
      1: 'saYes',
    },
    valueTitles: {
      0: 'no',
      1: 'yes',
    },
    dflt: 0,
  },
  samm: {
    control: 2, // Show when control > 1
    min: 0,
    max: 25,
    dflt: 10,
  },
  locale: {
    control: 3, // Show when control > 2
    list: ['de', 'en', 'es', 'fr', 'nl'],
    dflt: language,
    choiceTitles: {
      de: 'de',
      en: 'en',
      es: 'es',
      fr: 'fr',
      nl: 'nl',
    },
    valueTitles: {
      de: 'DE',
      en: 'EN',
      es: 'ES',
      fr: 'FR',
      nl: 'NL',
    },
  },
  units: {
    control: 3, // Show when control > 2
    list: ['metric', 'imperial'],
    dflt: 'metric',
    choiceTitles: {
      metric: 'metric',
      imperial: 'imperial',
    },
    valueTitles: {
      metric: 'metric',
      imperial: 'imperial',
    },
  },
  complete: {
    control: 4, // Show when control > 3
    list: [1, 0],
    dflt: 1,
    choiceTitles: {
      0: 'completeNo',
      1: 'completeYes',
    },
    valueTitles: {
      0: 'no',
      1: 'yes',
    },
  },
  only: {
    control: 4, // Show when control > 3
    dflt: false,
  },
  margin: {
    control: 4, // Show when control > 3
    min: 0,
    max: 25,
    dflt: 2,
  },
  scale: {
    control: 4, // Show when control > 3
    min: 0.1,
    max: 5,
    dflt: 1,
  },
  renderer: {
    control: 4, // Show when control > 3
    list: ['react', 'svg'],
    choiceTitles: {
      react: 'renderWithReact',
      svg: 'renderWithCore',
    },
    valueTitles: {
      react: 'React',
      svg: 'SVG',
    },
    dflt: 'react',
  },
})
