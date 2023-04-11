import { annotationsPlugin } from '@freesewing/plugin-annotations'
import { base } from './base.mjs'
import { version } from '../data.mjs'

const snippies = [
  'button',
  'buttonhole',
  'buttonhole-start',
  'buttonhole-end',
  'snap-stud',
  'snap-socket',
  'notch',
  'bnotch',
]

const bartackOptions = (options) => ({
  angle: options.bartackAngle,
  length: options.bartackLength,
  density: options.bartackDensity,
  width: options.bartackWidth,
  start: options.bartackStart,
  end: options.bartackEnd,
})

const pluginAnnotations = ({
  points,
  Point,
  paths,
  Path,
  macro,
  options,
  part,
  snippets,
  Snippet,
}) => {
  if (['annotations', 'all'].indexOf(options.plugin) !== -1) {
    let y = 0
    let x = 0
    let margin = 15

    // macro = banner
    points.banner_from = new Point(0, y)
    points.banner_to = new Point(320, y)
    paths.banner = new Path().move(points.banner_from).line(points.banner_to)
    macro('banner', {
      path: paths.banner,
      text: 'banner macro',
      dy: options.bannerDy,
      spaces: options.bannerSpaces,
      repeat: options.bannerRepeat,
    })
    macro('bannerbox', {
      topLeft: points.banner_from,
      bottomRight: points.banner_to,
      title: 'macro = banner',
      margin,
    })

    // macro = crossbox
    y += margin * 2.2
    points.crossbox_a = new Point(0, y)
    points.crossbox_b = new Point(40, y + 33)
    macro('crossbox', {
      from: points.crossbox_a,
      to: points.crossbox_b,
      text: options.crossboxText ? 'crossbox' : false,
    })
    macro('bannerbox', {
      topLeft: points.crossbox_a,
      bottomRight: points.crossbox_b,
      title: 'macro = crossbox',
      margin,
    })

    // Shared bartack options
    const btOptions = {
      angle: options.bartackAngle,
      length: options.bartackLength,
      density: options.bartackDensity,
      width: options.bartackWidth,
      start: options.bartackStart,
      end: options.bartackEnd,
    }

    // macro = bartack
    x = 40 + 2.2 * margin
    points.bartack = new Point(x, y)
    macro('bartack', {
      anchor: points.bartack,
      prefix: 'a',
      ...btOptions,
    })
    macro('bannerbox', {
      topLeft: points.bartack,
      bottomRight: points.bartack.shift(0, 15),
      title: 'macro = bartack',
      margin,
    })

    // macro = bartackAlong
    x += 2.2 * margin + 15
    points.bartack_a = new Point(x, y)
    points.bartack_b = new Point(x + 5, y + 10)
    points.bartack_c = new Point(x + 15, y + 10)
    points.bartack_d = new Point(x + 20, y)
    paths.bartack_a = new Path()
      .move(points.bartack_a)
      .curve(points.bartack_b, points.bartack_c, points.bartack_d)
      .attr('class', 'lining dashed')
    macro('bartackAlong', {
      path: paths.bartack_a,
      prefix: 'b',
      ...btOptions,
    })
    macro('bannerbox', {
      topLeft: points.bartack_a,
      bottomRight: points.bartack_d,
      title: 'macro = bartackAlong',
      margin,
    })

    // macro = bartackFractionAlong
    x += 2.2 * margin + 20
    points.bartack_e = new Point(x, y)
    points.bartack_f = new Point(x + 5, y + 10)
    points.bartack_g = new Point(x + 15, y + 10)
    points.bartack_h = new Point(x + 20, y)
    paths.bartack_e = new Path()
      .move(points.bartack_e)
      .curve(points.bartack_f, points.bartack_g, points.bartack_h)
      .attr('class', 'lining dashed')
    macro('bartackFractionAlong', {
      prefix: 'c',
      path: paths.bartack_e,
      ...btOptions,
    })
    macro('bannerbox', {
      topLeft: points.bartack_e,
      bottomRight: points.bartack_h,
      title: 'macro = bartackFractionAlong',
      margin,
    })

    // macro = cutonfold
    x += margin * 3.2 + 5
    points.cof_a = new Point(x, y + 10)
    points.cof_b = new Point(x + 93, y + 10)
    macro('cutonfold', {
      from: points.cof_a,
      to: points.cof_b,
      margin: options.cutonfoldMargin,
      offset: options.cutonfoldOffset,
      grainline: options.cutonfoldGrainline,
    })
    macro('bannerbox', {
      topLeft: points.cof_a.shift(90, 10),
      bottomRight: points.cof_b.shift(90, 10),
      title: 'macro = cutonfold',
      margin,
    })

    // Snippets
    x = points.bartack.x
    y += margin * 2.2
    for (const snippet of snippies) {
      points[snippet] = new Point(x, y)
      snippets[snippet] = new Snippet(snippet, points[snippet])
        .attr('data-scale', options.snippetScale)
        .attr('data-rotate', options.snippetRotation)
      x += 20
      macro('bannerbox', {
        topLeft: points[snippet],
        bottomRight: points[snippet],
        title: `snippet = ${snippet}`,
        margin,
      })
      x += margin
    }

    // Dimension options
    const dimOptions = {
      text: options.dimensionsCustomText ? 'custom text' : false,
      noStartMarker: !options.dimensionsStartMarker,
      noEndMarker: !options.dimensionsEndMarker,
    }

    // macro = vd
    x = 0
    y += margin * 2.2
    points.vd_from = new Point(x, y)
    points.vd_to = new Point(x + 10, y + 43)
    paths.vd = new Path().move(points.vd_from).line(points.vd_to)
    macro('vd', {
      to: points.vd_from,
      from: points.vd_to,
      x: x + 15,
      ...dimOptions,
    })
    macro('bannerbox', {
      topLeft: points.vd_from,
      bottomRight: points.vd_to,
      title: 'macro = vd',
      margin,
    })

    // macro = hd
    x = 43
    //y += margin*2.2
    points.hd_from = new Point(x, y)
    points.hd_to = new Point(x + 40, y - 10)
    paths.hd = new Path().move(points.hd_from).line(points.hd_to)
    macro('hd', {
      from: points.hd_from,
      to: points.hd_to,
      y: y + 10,
      ...dimOptions,
    })
    macro('bannerbox', {
      topLeft: points.hd_from,
      bottomRight: points.hd_to.shift(-90, 15),
      title: 'macro = hd',
      margin,
    })

    // macro = ld
    y += margin * 2.2 + 5
    points.ld_from = new Point(x, y + 10)
    points.ld_to = new Point(x + 40, y)
    paths.ld = new Path().move(points.ld_from).line(points.ld_to)
    macro('ld', {
      from: points.ld_from,
      to: points.ld_to,
      y: y + 10,
      ...dimOptions,
    })
    macro('bannerbox', {
      topLeft: points.ld_from.shift(90, 10),
      bottomRight: points.ld_to.shift(-90, 5),
      title: 'macro = ld',
      margin,
    })

    // macro = pd
    y -= margin - 2.2 + 5
    x = 117
    points.pd_from = new Point(x, y - 20)
    points.pd_cp1 = new Point(x + 30, y + 30)
    points.pd_cp2 = new Point(x + 40, y + 30)
    points.pd_to = new Point(x + 80, y)

    paths.pd = new Path().move(points.pd_from).curve(points.pd_cp1, points.pd_cp2, points.pd_to)
    macro('pd', {
      path: paths.pd,
      d: 10,
      ...dimOptions,
    })
    macro('bannerbox', {
      topLeft: points.pd_from,
      bottomRight: points.pd_to.shift(-90, 23),
      title: 'macro = ld',
      margin,
    })

    // macro = grainline
    x = 230
    y -= 20
    points.gl_a = new Point(x, y)
    points.gl_b = new Point(x + 90, y)
    macro('grainline', { from: points.gl_a, to: points.gl_b })
    macro('bannerbox', {
      topLeft: points.gl_a,
      bottomRight: points.gl_b,
      title: 'macro = grainline',
      margin,
    })

    // macro = pleat
    y += margin * 2.2 - 5
    points.pleat_a = new Point(x, y)
    points.pleat_b = new Point(x, y + 20)
    macro('pleat', {
      from: points.pleat_a,
      to: points.pleat_b,
      margin: options.pleatMargin,
      reverse: options.pleatReverse,
    })
    macro('bannerbox', {
      topLeft: points.pleat_a.shift(-90, 5),
      bottomRight: points.pleat_b.shift(0, 40).shift(90, 5),
      title: 'macro = pleat',
      margin,
    })

    // macro = miniscale
    points.miniscale = new Point(310, 138)
    const minscaleboxOptions = {
      at: points.scalebox,
      rotate: options.scaleboxRotation,
    }
    macro('miniscale', {
      at: points.miniscale,
      rotate: options.scaleboxRotation,
    })
    macro('bannerbox', {
      topLeft: new Point(303, 133),
      bottomRight: new Point(320, 142),
      title: 'macro = miniscale',
      margin,
    })

    // macro = scalebox
    x = 45
    y += margin * 4.5
    points.scalebox = new Point(x, y)
    const scaleboxOptions = {
      at: points.scalebox,
      rotate: options.scaleboxRotation,
    }
    if (options.scaleboxText === 'custom') scaleboxOptions.text = 'Custom text here'
    else if (options.scaleboxText === 'suppress') scaleboxOptions.text = ''
    macro('scalebox', scaleboxOptions)
    macro('bannerbox', {
      topLeft: new Point(0, y - 20),
      bottomRight: new Point(95, y + 20),
      title: 'macro = scalebox',
      margin,
    })
  }

  return part
}

export const annotations = {
  name: 'plugintest.annotations',
  after: base,
  options: {
    // Banner
    bannerDy: { count: -1, min: -15, max: 15, menu: 'annotations.banner' },
    bannerSpaces: { count: 10, min: 0, max: 20, menu: 'annotations.banner' },
    bannerRepeat: { count: 10, min: 1, max: 20, menu: 'annotations.banner' },
    // Bartack
    bartackLength: { count: 15, min: 2, max: 100, menu: 'annotations.bartack' },
    bartackAngle: { count: 0, min: -360, max: 360, menu: 'annotations.bartack' },
    bartackDensity: { count: 3, min: 1, max: 5, menu: 'annotations.bartack' },
    bartackWidth: { count: 3, min: 1, max: 5, menu: 'annotations.bartack' },
    bartackStart: { pct: 25, min: 0, max: 100, menu: 'annotations.bartack' },
    bartackEnd: { pct: 75, min: 0, max: 100, menu: 'annotations.bartack' },
    // Crossbox
    crossboxText: { bool: true, menu: 'annotations.crossboxText' },
    // Cutonfold
    cutonfoldMargin: { count: 5, min: 0, max: 25, menu: 'annotations.cutonfold' },
    cutonfoldOffset: { count: 15, min: 0, max: 100, menu: 'annotations.cutonfold' },
    cutonfoldGrainline: { bool: false, menu: 'annotations.cutonfold' },
    // dimension
    dimensionsCustomText: { bool: false, menu: 'annotations.dimensions' },
    dimensionsEndMarker: { bool: true, menu: 'annotations.dimensions' },
    dimensionsStartMarker: { bool: true, menu: 'annotations.dimensions' },
    // Pleat
    pleatMargin: { count: 35, min: 0, max: 50, menu: 'annotations.pleat' },
    pleatReverse: { bool: false, menu: 'annotations.pleat' },
    // Scalebox
    scaleboxRotation: { deg: 0, min: 0, max: 360, menu: 'annotations.scalebox' },
    scaleboxText: {
      dflt: 'default',
      list: ['default', 'custom', 'suppress'],
      menu: 'annotations.scalebox',
    },
    // Snippets
    snippetScale: { pct: 100, min: 10, max: 200, menu: 'annotations.snippets' },
    snippetRotation: { deg: 0, min: -360, max: 360, menu: 'annotations.snippets' },
  },
  plugins: annotationsPlugin,
  draft: pluginAnnotations,
}
