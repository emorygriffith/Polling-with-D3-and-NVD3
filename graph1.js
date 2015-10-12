//Pie chart example data. Note how there is only a single array of key-value pairs.
data = [
      {
        "label": "Yes",
        "value" : 6
      } ,
      {
        "label": "No",
        "value" : 4
      }
    ];

//set variables for yes and no values
var yesNum = data[0].value;
var noNum = data[1].value;

//append the values to the page
$(".yesNum").html(yesNum);
$(".noNum").html(noNum);


//on clicking Yes button
$('.yes').click(function(yesNum){

  data[0].value++;


  $(".yesNum").html(data[0].value);
  $(".noNum").html(data[1].value);

      nv.addGraph(function() {
        var chart = nv.models.pieChart()
            .x(function(d) { return d.label })
            .y(function(d) { return d.value })
            .showLabels(true);

          d3.select("#chart1 svg")
              .datum(data)
              .transition().duration(350)
              .call(chart);
        return chart;
      });

});

//on clicking No button
$('.no').click(function(yesNum){

  
  data[1].value++;

  $(".yesNum").html(data[0].value);
  $(".noNum").html(data[1].value);

      nv.addGraph(function() {
        var chart = nv.models.pieChart()
            .x(function(d) { return d.label })
            .y(function(d) { return d.value })
            .showLabels(true);

          d3.select("#chart1 svg")
              .datum(data)
              .transition().duration(350)
              .call(chart);
        return chart;
      });

});




//--------------------------------------------------------

//Regular pie chart example
nv.addGraph(function() {
  var chart = nv.models.pieChart()
      .x(function(d) { return d.label })
      .y(function(d) { return d.value })
      .showLabels(true);

    d3.select("#chart1 svg")
        .datum(data)
        .transition().duration(350)
        .call(chart);

        var addYes = function(){
          data[0].value++
        };

        var addNo = function(){
          alert("NOOOO");
        };

  return chart;
});







    //redraw the chart on resize
function updateWindow(){
  nv.addGraph(function() {
    var chart = nv.models.pieChart()
        .x(function(d) { return d.label })
        .y(function(d) { return d.value })
        .showLabels(true);

      d3.select("#chart1 svg")
          .datum(data)
          .transition().duration(350)
          .call(chart);
    return chart;
  });
}

    window.onresize = updateWindow;
