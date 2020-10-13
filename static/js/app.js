// Use D3 fetch to read the JSON file
// The data from the JSON file is arbitrarily named importedData as the argument
function init() {
    d3.json("samples.json").then(data => {
        console.log(data);
        })
    }




init();