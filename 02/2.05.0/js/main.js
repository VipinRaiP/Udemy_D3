/*
 *    main.js
 *    Mastering Data Visualization with D3.js
 *    2.5 - Activity: Adding SVGs to the screen
 */

var svg = d3.select("#chart-area").append("svg")
  .attr("width", 500)
  .attr("height", 400)

var line = svg.append("line")
  .attr("x1", 10)
  .attr("y1", 10)
  .attr("x2", 60)
  .attr("y2", 60)
  .style("stroke", "rgb(255,0,0)")
  .style("stroke-width", 2);

var rect = svg.append("rect")
  .attr("x", 100)
  .attr("y", 120)
  .attr("width", 70)
  .attr("height", 40)
  .attr("fill", "red")


var ellipse = svg.append("ellipse")
  .attr("cx", 300)
  .attr("cy",200)
  .attr("rx", 100)
  .attr("ry", 100)
  .attr("fill", "blue")
