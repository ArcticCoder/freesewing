export default function (part) {
  const { options, Point, Path, points, paths, Snippet, snippets, complete, sa, paperless, macro } =
    part.shorthand()


    //pocket seams here 
  let pocketLength = (800 * options.length)
  let pocketWidth = (500 * options.width)

  points.topLeft = new Point(0, 0)
  points.topRight = new Point(pocketWidth, 0)
  points.bottomLeft = new Point(0, pocketLength)
  points.bottomRight = new Point(pocketWidth, pocketLength)

  //center point
  points.center = new Point((pocketWidth / 2), 0)

  //slit end 
 points.middle = points.center.shift(270,(pocketLength*0.525)) 
  
 //top 

  points.centerRight = points.center.shift(0, pocketWidth * 0.25)
 points.centerLeft = points.center.shift(180, pocketWidth * 0.25)
 
 //taper point 
 points.taperRight = new Point(pocketWidth, pocketLength * 0.4375)
 points.taperLeft = new Point(0, pocketlength * 0.4375)

 //path
 paths.slit = new Path()
  .move(points.center)
  .line(points.middle)
  .line(points.center)
  .close()
  .attr("class", "dashed")

  
 


  paths.seam = new Path()
    .move(points.centerLeft)
    .line(points.bottomLeft)
    .line(points.bottomRight)
    .line(points.centerRight)
    .line(points.centerLeft)
    .close()
    .attr('class', 'fabric')

  // Complete?
  if (complete) {
    points.logo = points.topLeft.shiftFractionTowards(points.bottomRight, 0.7)
    snippets.logo = new Snippet('logo', points.logo)
    points.text = points.logo
      .shift(-90, pocketWidth / 2)
      .attr('data-text', 'hello')
      .attr('data-text-class', 'center')

    if (sa) {
      paths.sa = paths.seam.offset(sa).attr('class', 'fabric sa')
    }
  }

  // Paperless?
  if (paperless) {
    macro('hd', {
      from: points.bottomLeft,
      to: points.bottomRight,
      y: points.bottomLeft.y + sa + 15,
    })
    macro('vd', {
      from: points.bottomRight,
      to: points.topRight,
      x: points.topRight.x + sa + 15,
    })
    macro('hd', {
      from: points.centerLeft,
      to: points.centerRight,
      y: points.topLeft.y + sa + 15,
    })
  }

  return part
}
