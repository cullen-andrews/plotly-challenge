
// Build the bar chart
function bar(){}

// Build the bubble chart
function bubble(){}

// Build the demographics panel
function demographics(){}

function init() {
  // Use D3 to select the dropdown menu. See class activity Ins_Dropdown_Events
    var dropSelect = d3.select("#selDataset");
//   console.log(dropSelect);
  
    d3.json("samples.json").then(data => {
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

    });

}

function optionChanged(option) {}


init();