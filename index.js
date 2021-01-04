const getsvg = d3.select('svg');
getsvg.style('background-color', '#d3d3d3');
const svgW = +getsvg.attr('width');
const svgH = +getsvg.attr('height');

/* first emoticon with smile*/
getsvg.append('circle')
    .attr('r', '50')
    .attr('cx', svgW / 2)
    .attr('cy', svgH / 2)
    .attr('fill', '#edca4a')

//left eye
getsvg.append('circle')
    .attr('r', '7')
    .attr('fill', 'black')
    .attr('cy', svgH / 2 - 10)
    .attr('cx', svgW / 2 - 25)

//right eye
getsvg.append('circle')
    .attr('r', 7)
    .attr('fill', 'black')
    .attr('cx', svgW / 2 + 25)
    .attr('cy', svgH / 2 - 10)

// do a smile
const g = getsvg.append('g').attr('transform', `translate(${svgW / 2}, ${ svgH / 2 + 10} )`)
const arc = d3.arc()
g.append('path')
    .attr('d', arc({
        innerRadius: 12,
        outerRadius: 15,
        startAngle: Math.PI / 2,
        endAngle: Math.PI * 3/2
}))

/* second emoticon with moustache */

//face
getsvg.append('circle')
    .attr('r', '50')
    .attr('cx', svgW / 2 + 150)
    .attr('cy', svgH / 2 )
    .attr('fill', '#edca4a')

//left eye
getsvg.append('circle')
    .attr('r', '7')
    .attr('fill', 'black')
    .attr('cy', svgH / 2 - 10)
    .attr('cx', (svgW / 2 + 150) - 25)

//right eye
getsvg.append('circle')
    .attr('r', 7)
    .attr('fill', 'black')
    .attr('cx', svgW / 2 + 175)
    .attr('cy', svgH / 2 - 10)

// do a smile
const g1 = getsvg.append('g').attr('transform', `translate(${(svgW / 2) + 150}, ${ svgH / 2 + 15} )`)
const arc2 = d3.arc()
g1.append('path')
    .attr('d', arc2({
        innerRadius: 19,
        outerRadius: 1,
        startAngle: -2,
        endAngle: 2
}))


/* third emoticon with eyebrows */

//face
getsvg.append('circle')
    .attr('r', '50')
    .attr('cx', (svgW / 2) - 150)
    .attr('cy', svgH / 2 )
    .attr('fill', '#edca4a')

//left eye
getsvg.append('circle')
    .attr('r', '7')
    .attr('fill', 'black')
    .attr('cy', svgH / 2 - 10)
    .attr('cx', ((svgW / 2) - 150) - 25)

//right eye
getsvg.append('circle')
    .attr('r', 7)
    .attr('fill', 'black')
    .attr('cx', (svgW / 2) - 125)
    .attr('cy', svgH / 2 - 10)
.transition().delay('1000')
    .attr('r', 4)

// add eyeborws
//left
getsvg.append('rect')
    .attr('x', ((svgW / 2) - 150) - 30)
    .attr('y', svgH / 2 - 25)
    .attr('width', '15')
    .attr('height', '3')
.transition().delay('1000')
    .attr('y', svgH / 2 - 35 )
// right
getsvg.append('rect')
    .attr('x', (svgW / 2) - 135)
    .attr('y', svgH / 2 - 25)
    .attr('width', '15')
    .attr('height', '3')
.transition().delay('1000')
    .attr('y', svgH / 2 - 20)

// do a smile
const g2 = getsvg.append('g').attr('transform', `translate(${(svgW / 2) - 150}, ${ svgH / 2 + 15} )`)
const arc3 = d3.arc()
g2.append('path')
.attr('d', arc3({
    innerRadius: 19,
    outerRadius: 1,
    startAngle: 1.5,
    endAngle: 4.8
}))
