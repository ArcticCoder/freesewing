export default function (part) {
  // Remove clutter
  let pocket = part.paths.pocket
  part.paths = {}
  part.snippets = {}

  let {
    utils,
    store,
    sa,
    points,
    Path,
    paths,
    complete,
    paperless,
    macro,
    debug
  } = part.shorthand()

  paths.seam = pocket.line(points.cfRibbing).line(points.pocketHem).attr('class', 'fabric', true)
  paths.seam.render = true

  store.set('facingWidth', points.pocketHem.dist(points.pocketTip) / 2)

  let facing = new Path()
    .move(points.pocketTip)
    .curve(points.pocketTip, points.pocketTopCp, points.pocketTop)
    .offset(store.get('facingWidth') * -1)

  points._tmp = facing.shiftAlong(2)
  points.facingEnd = utils.beamsIntersect(
    points._tmp,
    facing.start(),
    points.pocketHem,
    points.pocketTip
  )
  paths.facing = new Path()
    .move(points.facingEnd)
    .line(facing.start())
    .join(facing)
    .attr('class', ' fabric help')
  paths.facing.render = false

  // Complete pattern?
  if (complete) {
    paths.facing.render = true
    macro('grainline', {
      from: points.cfRibbing.shift(0, 15),
      to: points.pocketCf.shift(0, 15)
    })
    points.title = points.cfRibbing.shiftFractionTowards(points.pocketTop, 0.5)
    macro('title', { at: points.title, nr: 4, title: 'pocket' })
    if (sa) {
      paths.sa = paths.seam.offset(sa).attr('class', 'fabric sa')
    }
  }

  // Paperless?
  if (paperless) {
    macro('hd', {
      from: points.cfRibbing,
      to: points.pocketTop,
      y: points.cfRibbing.y + 15 + sa
    })
    macro('hd', {
      from: points.cfRibbing,
      to: points.pocketTip,
      y: points.cfRibbing.y + 30 + sa
    })
    macro('vd', {
      from: points.pocketHem,
      to: points.pocketTip,
      x: points.pocketTip.x + 15 + sa
    })
    macro('vd', {
      from: points.pocketHem,
      to: points.pocketTop,
      x: points.cfRibbing.x - 15 - sa
    })
  }

  return part
}
