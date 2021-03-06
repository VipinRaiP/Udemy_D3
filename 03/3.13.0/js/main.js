/*
 *    main.js
 *    Mastering Data Visualization with D3.js
 *    Project 1 - Star Break Coffee
 */

var margin = {
  top: 10,
  bottom: 50,
  left: 100,
  right: 10
}
var width = 600 - margin.left - margin.right
var height = 400 - margin.top - margin.bottom

var g = d3.select("#chart-area")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

// X label

g.append("text")
  .text("Month")
  .attr("x", width / 2)
  .attr("y", 390)
  .attr("text-anchor", "end")
  .attr("font-size", "20px")
  .attr("class", "x axis-label")

// y label

g.append("text")
  .text("Revenue")
  .attr("x", -150)
  .attr("y", -80)
  .attr("text-anchor", "end")
  .attr("font-size", "20px")
  .attr("class", "y axis-label")
  .attr("transform", "rotate(-90)")

d3.json("data/revenues.json").then(function(data) {

  data.forEach(function(d) {
    return d.revenue = +d.revenue
  })
  console.log(data);

  var x = d3.scaleBand()
    .domain(data.map(function(d) {
      return d.month;
    }))
    .range([0, width])
    .paddingInner(0.3)
    .paddingOuter(0.3)

  var y = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.revenue)])
    .range([height, 0])


  var xAxisCall = d3.axisBottom(x)

  g.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(" + 0 + "," + height + ")")
    .call(xAxisCall)
    .selectAll("text")
    .attr("x", 10)
    .attr("y", 10)
    .attr("text-anchor", "end")
  //.attr("transform","rotate(-40)")

  var yAxisCall = d3.axisLeft(y)
    .ticks(6)
    .tickFormat(d => "$" + d)

  g.append("g")
    .attr("class", "y axis")
    .call(yAxisCall)


  var rects = g.selectAll("rect")
    .data(data)

  console.log(y(13432))
  rects.enter()
    .append("rect")
    .attr("y", d => y(d.revenue))
    .attr("x", d => x(d.month))
    .attr("width", x.bandwidth)
    .attr("height", d => height - y(d.revenue))
    .attr("fill", "blue")

})
