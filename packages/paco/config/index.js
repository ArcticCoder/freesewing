import { version } from '../package.json'

export default {
  name: 'paco',
  version,
  design: 'Joost De Cock',
  code: 'Joost De Cock',
  department: 'unisex',
  type: 'pattern',
  difficulty: 3,
  tags: ['bottom', 'basics', 'pants', 'trousers', 'casual'],
  optionGroups: {
    fit: ['seatEase', 'waistEase'],
    style: ['waistHeight', 'lengthBonus', 'crotchDrop', 'elasticatedHem'],
    elastic: ['waistElastic', 'ankleElastic', 'heelEase'],
    pockets: ['frontPockets', 'backPockets'],
    advanced: [
      'crossSeamCurveStart',
      'crossSeamCurveBend',
      'crotchSeamCurveStart',
      'crotchSeamCurveBend',
      'grainlinePosition',
      'legBalance',
      'waistBalance'
    ]
  },
  measurements: [
    'crossSeam',
    'crossSeamFront',
    'heel',
    'knee',
    'seat',
    'seatBack',
    'waist',
    'waistBack',
    'waistToFloor',
    'waistToKnee',
    'waistToHips',
    'waistToSeat',
    'waistToUpperLeg'
  ],
  parts: ['back', 'front', 'pocketBagFront', 'pocketBagBack', 'pocketWelt'],
  inject: {
    back: 'titanBack',
    front: 'titanFront',
    pocketBagFront: 'front',
    pocketBagBack: 'back',
    pocketWelt: 'pocketBagBack'
  },
  dependencies: {
    front: 'back',
    pocketBagFront: 'front',
    pocketBagBack: 'back',
    pocketWelt: 'pocketBagBack'
  },
  hide: ['titanBack', 'titanFront'],
  options: {
    // Constants
    fitCrossSeam: true,
    fitCrossSeamFront: true,
    fitCrossSeamBack: true,
    kneeEase: 0.06,
    fitKnee: false,
    frontPocketFlapSize: 25,
    frontPocketHeelRatio: 0.4,
    backPocketWaistRatio: 0.4,
    backPocketHeightRatio: 0.4,
    backPocketWidthRatio: 0.37,
    weltFactor: 0.15,

    // Fit
    waistEase: { pct: 2, min: 0, max: 10 },
    seatEase: { pct: 5, min: 0, max: 15 },

    // Style
    waistHeight: { pct: 5, min: 0, max: 100 },
    lengthBonus: { pct: 2, min: 0, max: 10 },
    crotchDrop: { pct: 2, min: 0, max: 10 },
    elasticatedHem: { bool: true },

    // Elastic
    waistElastic: { mm: 35, min: 10, max: 60 },
    ankleElastic: { mm: 70, min: 10, max: 130 },
    heelEase: { pct: 2.5, min: 0, max: 5 },

    // Pockets
    frontPockets: { bool: true },
    backPockets: { bool: true },

    // Advanced
    legBalance: { pct: 57.5, min: 52.5, max: 62.5 },
    crossSeamCurveStart: { pct: 85, min: 60, max: 100 },
    crossSeamCurveBend: { pct: 65, min: 45, max: 85 },
    crotchSeamCurveStart: { pct: 80, min: 60, max: 95 },
    crotchSeamCurveBend: { pct: 80, min: 45, max: 100 },
    waistBalance: { pct: 60, min: 30, max: 90 },
    grainlinePosition: { pct: 45, min: 30, max: 60 }
  }
}
