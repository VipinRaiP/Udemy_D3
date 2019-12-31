/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.8 - Activity: Your first visualization!
*/

d3.json("data/buildings.json").then(function(data){
  var heights = [];
  data.forEach(function(d){
    d.height = +d.height;
    heights.push(d.height)
  })
  console.log(data);

  var svg = d3.select("#chart-area").append("svg")
            .attr("width",400)
            .attr("height",400)

  var rectangles = svg.selectAll("rect").data(data)

  rectangles.enter()
            .append("rect")
            .attr("x",(d,i)=>40*i)
            .attr("y",0)
            .attr("width",30)
            .attr("height",d=>d.height)
            .attr("fill","blue")
}).catch(function(error){
  console.log(error);
})
