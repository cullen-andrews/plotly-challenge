//Read in the data with d3

    dataSet = d3.json("samples.json");
    // names = dataSet.names;
    // metadata = dataSet.metadata;
    // samples = dataSet.samples;
    // }
// Build the bar chart
function bar(input) {
    // Below uses class activity Ins_Basic_Plots as a starting point
    //var
    // var inputData = samples.filter(item => item.id == input);
    // console.log(inputData);

    dataSet.then(data => {
        var names = data.names;
        var samples = data.samples;
        var metadata = data.metadata;

        var inputDataArray = samples.filter(item => item.id == input);
        
        var trace1 = {
            x: inputDataArray[0].sample_values.slice(0, 10).reverse(),
            y: inputDataArray[0].otu_ids.slice(0, 10).map(id => 'OTU ' + id).reverse(),
            type: 'bar',
            text: inputDataArray[0].otu_labels.slice(0, 10).reverse(),
            orientation: 'h'
        
        };
        
        Plotly.newPlot("bar", [trace1]);
        // console.log(inputDataArray);

        // Grab the zeroth element of inputDataArray
        // inputData = inputDataArray[0];
        // console.log(inputData);
    })
};

    // var trace1 = {
    //     x: 
    //     y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    //     type: "bar"
    //   };
      
    //   var data = [trace1];
      
    //   var layout = {
    //     title: "'Bar' Chart"
    //   };
      
    //   Plotly.newPlot("plot", data, layout);
      


// Build the bubble chart
function bubble(){}

// Build the demographics panel
function demographics(){}

function optionChanged(option) {
    // Build the charts and demographics panel a newly selected dropdown option
    bar(option);
    bubble(option);
    demographics(option);
}

function init() {
  // Use D3 to select the dropdown menu. See class activity Ins_Dropdown_Events
    var dropSelect = d3.select("#selDataset");
//   console.log(dropSelect);
  
    // d3.json("samples.json").then(data => {
    dataSet.then(data => {
        console.log(data);

    
        var names = data.names;
        console.log(names);
        var metadata = data.metadata;
        console.log(metadata);
        var samples = data.samples;
        console.log(samples);
        
        // Appending the sample names to the dropdown menu
        names.forEach((name) => {
            dropSelect.append("option").text(name).property("value", name);
        });
    
    // Build the charts and demographics panel for the zeroth name to start
    bar(names[0]);
    bubble(names[0]);
    demographics(names[0]);

    });

}

// readIn();
init();