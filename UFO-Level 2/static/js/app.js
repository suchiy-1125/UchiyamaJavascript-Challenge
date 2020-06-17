// from data.js
var tableData = data;

// YOUR CODE HERE!
var submit = d3.select("#filter-btn");

submit.on("click", function(){
    d3.event.preventDefault();

 
    var input1 = d3.select("#datetime");
    var input2 = d3.select("#city");
    var input3 = d3.select("#state");
    var input4 = d3.select("#country");
    var input5 = d3.select("#shape");
    
    var inputDate = input1.property("value");
    var inputCity = input2.property("value");
    var inputState = input3.property("value");
    var inputCountry = input4.property("value");
    var inputShape = input5.property("value");
    
    console.log(inputDate);
    console.log(inputCity);
    console.log(inputState);
    console.log(inputCountry);
    console.log(inputShape);

    var filteredData = [];
    var inputs = [inputDate, inputCity, inputState, inputCountry, inputShape];
    var filters = ["datetime", "city", "state", "country", "shape"];
    var nonBlankInputs = [];
    var ourFilters = [];
    for (var i = 0; i<5; i++) {
        if (inputs[i] !== ""){
            console.log(inputs[i]);
            nonBlankInputs.push(inputs[i]);
            ourFilters.push(filters[i]);
        }
    };

    for (var i = 0; i<nonBlankInputs.length; i++) {
        filteredData = tableData.filter(row => row[ourFilters[i]] === nonBlankInputs[i]);
    }
    
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
