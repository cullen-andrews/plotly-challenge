dataSet = d3.json("samples.json");
    
// Build the bar chart
function bar(input) {
   
    dataSet.then(data => {
        var names = data.names;
        var samples = data.samples;
        var metadata = data.metadata;

        // Filter based on dropdown selection
        var inputDataArray = samples.filter(item => item.id == input);
        
        var trace1 = {
            x: inputDataArray[0].sample_values.slice(0, 10).reverse(),
            y: inputDataArray[0].otu_ids.slice(0, 10).map(id => 'OTU ' + id).reverse(),
            type: 'bar',
            text: inputDataArray[0].otu_labels.slice(0, 10).reverse(),
            orientation: 'h'
        
        };
        
        Plotly.newPlot("bar", [trace1]);
        
    })
};



// Build the bubble chart
function bubble(input){
    dataSet.then(data => {
        var names = data.names;
        var samples = data.samples;
        var metadata = data.metadata;

         // Filter based on dropdown selection
        var inputDataArray = samples.filter(item => item.id == input);
        
        // How to design trace2 for bubble chart is at https://plotly.com/javascript/bubble-charts/
        var trace2 = {
            x: inputDataArray[0].otu_ids,
            y: inputDataArray[0].sample_values,
            text: inputDataArray[0].otu_labels,
            mode: 'markers',
            marker: {
                size: inputDataArray[0].sample_values,
                color: inputDataArray[0].otu_ids,
                }   
            };

        var layout = {
            title: 'Belly Button Bacteria',
            showlegend: false,
            height: 600,
            width: 900,
            xaxis: {title: "OTU ID"},
            };
            
        Plotly.newPlot('bubble', [trace2], layout);   
           
    })
};

// Build the demographics panel
function demographics(input){
    dataSet.then(data => {
        var names = data.names;
        var samples = data.samples;
        var metadata = data.metadata;

         // Filter based on dropdown selection
         var inputDataArray = samples.filter(item => item.id == input);

        // d3 connection to the demographics panel
        var metadata = d3.select('#sample-metadata');

        // Still under construction at submission time.

    })
}  

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