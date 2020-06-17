// from data.js
var tableData = data;

// YOUR CODE HERE!
var submit = d3.select("#filter-btn");

submit.on("click", function(){
    d3.event.preventDefault();
    
    var inputElement =d3.select("#datetime");
    var inputValue = inputElement. property("value");
    var filteredData = tableData.filter(function(report){
        return report.datetime === inputValue
    })
    console.log(filteredData);

    
    //delete displayed results
    d3.selectAll("#ufo-table>tbody>tr").remove();
    d3.selectAll("#ufo-table>tbody>td").remove();

    var summaryDisplay = d3.select("#ufo-table>tbody");
    filteredData.forEach(function(row){

        var newrow = summaryDisplay.append("tr");
        newrow.append("td").text(`${row.datetime}`);
        newrow.append("td").text(`${row.city}`);
        newrow.append("td").text(`${row.state}`);
        newrow.append("td").text(`${row.country}`);
        newrow.append("td").text(`${row.shape}`);
        newrow.append("td").text(`${row.durationMinutes}`);
        newrow.append("td").text(`${row.comments}`);
    })
    
});
