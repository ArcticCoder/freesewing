import { version } from '../package.json'

export default {
  name: 'florence',
  version: version,
  design: 'Joost De Cock',
  code: 'Joost De Cock',
  department: 'accessories',
  type: 'pattern',
  difficulty: 1,
  tags: [],
  optionGroups: {
    fit: ['height', 'length', 'curve']
  },
  measurements: ['headCircumference'],
  parts: ['mask'],
  options: {
    length: { pct: 40, min: 35, max: 45 },
    height: { pct: 26, min: 23, max: 29 },
    curve: { pct: 12.5, min: 10, max: 15 }
  }
}
