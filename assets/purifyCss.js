
const purify = require("purify-css") 
  
// Reference of all HTML files from root directory 
let content = ['*.html']; 
  
// Reference of all CSS files from root directory 
let css = ['*.css']; 
  
let files = { 
  
    // Write purified CSS into a file 
    output: 'purified.css', 
    minified: true, // Minify boolean 
    info: true  // Output information 
}; 
  
purify(content, css, files, function (purifiedAndMinifiedResult) { 
    console.log(purifiedAndMinifiedResult); 
});