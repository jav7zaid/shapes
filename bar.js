const getsvg = d3.select('svg');
const xScale = d3.scaleLinear();
const yScale = d3.scaleBand();
getsvg.style('background-color', '#d3d3d3');
const svgW = +getsvg.attr('width');
const svgH = +getsvg.attr('height');

// this shoud create bars lets see 8-()

const makeBar = (data) => {
    const margin = { top: 20, left: 200, bottom: 40, right: 40 };
    const innerHeight = svgH - margin.top - margin.bottom
    const innerWidth = svgW - margin.left - margin.right
    // setting x range
    xScale.domain([0, d3.max(data, d => d.death)])
    .range([0, innerWidth])
    console.log(xScale.range()); // making dynamic

    // setting yrange
    yScale.domain(data.map(d => d.state))
    .range([0, innerHeight])
    .padding(0.2);

    const g = getsvg.append('g')
        .attr('transform', `translate(${margin.left}, ${margin.top})`)

    // adding y-axis
    g.append('g').call(d3.axisLeft(yScale))

    // adding 
    g.append('g').call(d3.axisBottom(xScale)).attr('transform', `translate(0, ${innerHeight})`)

// make one rect for each row using enter
 g
 .selectAll('rect')
    .data(data)
    .enter().append('rect')
    .attr('y', d => yScale(d.state))
    .attr('width', d => xScale(d.death))
    .attr('height', yScale.bandwidth())
};

// fetching data from csv and converting to Number
d3.csv('corona.csv').then(data => {
    data.forEach(element => {
    element.death = +element.death   
    });
    makeBar(data);
});
