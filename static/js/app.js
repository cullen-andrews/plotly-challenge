// Use D3 fetch to read the JSON file
// The data from the JSON file is arbitrarily named importedData as the argument
function init() {
    d3.json("samples.json").then(data => {
        console.log(data);
        })
    }

// Call updatePlotly() when a change takes place to the DOM
d3.selectAll("#selDataset").on("change", updatePlotly);

// This function is called when a dropdown menu item is selected
function updatePlotly() {
    // Use D3 to select the dropdown menu
    var dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a variable
    var subjectID = dropdownMenu.property("value");
  
    // Initialize x and y arrays
    var x = [];
    var y = [];
  
    if (subjectID === '940') {
      x = [1, 2, 3, 4, 5];
      y = [1, 2, 4, 8, 16];
    }
  
    if (subjectID === '941') {
      x = [10, 20, 30, 40, 50];
      y = [1, 10, 100, 1000, 10000];
    }
  
    console.log(x);
    console.log(y);

    // // Note the extra brackets around 'x' and 'y'
    // Plotly.restyle("plot", "x", [x]);
    // Plotly.restyle("plot", "y", [y]);
  }
  

function optionChanged(selectObject) {
    var dropSelect = selectObject.value;
    console.log(dropSelect);
} 

init();