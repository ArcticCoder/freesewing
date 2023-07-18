import { pluginBundle } from '@freesewing/plugin-bundle'
import { base } from './base.mjs'

function draftBack({
  utils,
  Path,
  Point,
  paths,
  points,
  measurements,
  options,
  part,
  store,
  paperless,
  complete,
  sa,
  macro,
  snippets,
  Snippet,
}) {
  const raglanAngle = store.get('raglanAngle')
  const neckRadius = store.get('neckRadius')

  points.neckCenter = points.raglanCenter.shift(270, -options.neckBalance * neckRadius)

  points.neckShoulderCorner = utils.beamIntersectsCircle(
    points.neckCenter,
    neckRadius,
    points.raglanCenter,
    points.armholeCorner
  )[1]

  const neckShoulderRadius = points.raglanCenter.dist(points.neckShoulderCorner)
  store.set('backNeckRadius', neckShoulderRadius)

  points.cfNeck = points.neckCenter.shift(270, neckRadius)

  const necklineAngleAtRaglan = points.cfNeck.angle(points.neckShoulderCorner) * 2
  const necklineArcLength = utils.deg2rad(necklineAngleAtRaglan) * neckRadius
  points.neckCP1 = points.neckShoulderCorner.shift(
    necklineAngleAtRaglan + 180,
    necklineArcLength / 3
  )
  points.neckCP2 = points.cfNeck.shift(0, necklineArcLength / 3)

  const backNecklineToRaglanAngle = raglanAngle - (necklineAngleAtRaglan + 180)
  store.set('backNecklineToRaglanAngle', backNecklineToRaglanAngle)

  paths.saBase = new Path().move(points.sideHem)
  if (options.straightSides) paths.saBase.line(points.armholeCornerScooped)
  else paths.saBase.curve(points.sideCp1, points.sideCp2, points.armholeCornerScooped)
  paths.saBase
    .curve(points.armholeScoopCp1, points.armholeScoopCp2, points.armholeScoopEnd)
    .line(points.neckShoulderCorner)
    .curve(points.neckCP1, points.neckCP2, points.cfNeck)
    .hide(true)

  paths.foldBase = new Path().move(points.cfNeck).line(points.cfHem).hide(true)

  paths.hemBase = new Path().move(points.cfHem).line(points.sideHem).hide(true)

  paths.seam = paths.saBase.join(paths.foldBase).join(paths.hemBase).close().attr('class', 'fabric')

  if (paperless) {
    macro('vd', {
      from: points.cfNeck,
      to: points.cfHem,
      x: -(15 + sa),
    })
    macro('vd', {
      from: points.neckShoulderCorner,
      to: points.cfNeck,
      x: -(15 + sa),
      noStartMarker: true,
      noEndMarker: true,
    })
    macro('vd', {
      from: points.neckShoulderCorner,
      to: points.cfHem,
      x: -(30 + sa),
    })
    macro('vd', {
      from: points.armholeCornerScooped,
      to: points.neckShoulderCorner,
      x: points.armholeCornerScooped.x + (15 + sa),
    })
    macro('hd', {
      from: points.neckShoulderCorner,
      to: points.armholeScoopEnd,
      y: 0 - (sa + 0),
    })
    macro('hd', {
      from: points.neckShoulderCorner,
      to: points.armholeCornerScooped,
      y: 0 - (sa + 15),
    })
    macro('hd', {
      from: points.cfNeck,
      to: points.neckShoulderCorner,
      y: 0 - (sa + 15),
      noStartMarker: true,
      noEndMarker: true,
    })
    macro('hd', {
      from: points.cfNeck,
      to: points.armholeCornerScooped,
      y: 0 - (sa + 30),
    })
  }

  store.cutlist.addCut({ cut: 1 })

  if (complete) {
    snippets.armholeScoopEnd = new Snippet('bnotch', points.armholeScoopEnd)

    points.title = new Point(
      points.armholeCorner.x / 2,
      (points.cfHem.y + points.armholeCornerScooped.y / 2) / 2
    )
    macro('title', { at: points.title, nr: 2, title: 'back' })

    if (sa) {
      paths.sa = new Path()
        .move(points.cfHem)
        .join(paths.hemBase.offset(sa * options.hemWidth * 100))
        .join(paths.saBase.offset(sa))
        .line(points.cfNeck)
        .attr('class', 'fabric sa')
    }
  }

  const neckPath = new Path()
    .move(points.neckShoulderCorner)
    .curve(points.neckCP1, points.neckCP2, points.cfNeck)
  store.set('neckLengthBack', neckPath.length())

  return part
}

export const back = {
  name: 'shelly.back',
  plugins: [pluginBundle],
  draft: draftBack,
  from: base,
  measurements: ['neck', 'chest', 'hips', 'waistToHips', 'hpsToWaistBack'],
}
