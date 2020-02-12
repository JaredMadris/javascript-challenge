// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

// Function build table
function buildTable(data){
   
    // Clear out existing data
    tbody.html("");
    data.forEach(dataRow => {
        console.table(dataRow);
        let row = tbody.append("tr");

       console.table(Object.values(dataRow));
       Object.values(dataRow).forEach((val) => {
           let cell = row.append("td");
           cell.text(val);
       });
    });
}

// Call function 
function handleClick(){
    d3.event.preventDefault() // Prevent refresh
    
    let date = d3.select("#datetime").property("value");
    let filterData = tableData;

    // Filter the data using that date
    if (date){
        // Apply the filter 
        filterData = filterData.filter((row) => row.datetime === date);

    }

    buildTable(filterData);
}



d3.selectAll("#filter-btn").on("click", handleClick);
buildTable(tableData);