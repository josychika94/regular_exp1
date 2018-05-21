
var htmlTags = "<html><head><title>My Title</title></head><body><h1>Heading</h1><p>This is a paragraph</p></body></html>"
function html(htmlTags){
    var openTags = new RegExp("<([^>|/>]*)>","gi"); //targets all opening tags 
    var closedTags = /<\/(\w)+>/gi; //targets all closing tags
    var firstReplacer = htmlTags.replace(openTags, "$1:{") 
    //replaces the first groups of the open tasg with $1, : and {
    var secondReplacer = firstReplacer.replace(closedTags, "}");
    //replaces the first groups of the closed tags with }
   console.log(secondReplacer)
}
html(htmlTags)