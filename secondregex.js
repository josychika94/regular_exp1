//Exercise 1:
//Write a function to validate HTML colours. Example #AACCFF
var text1 = `#aacc33 go home it is late, aabbff yusuf #00bb 000 #gz0hjm #67fopoo 
            I must code! #AACCFF`;

var htmlColors = text1.match(/(#?[0-9a-f]{3,6})\b/gi);

console.log(htmlColors)



//Exercise 2:Array(5) [""Valentine Oragbakosi"", ""Nwosu Ifeoma Lucia" and then "Ibe Agwu"", ""Chinonso Williams Junior", "Ndife Uchenna"", ""Ehiogu Chika Josephine" and finally "Chidera Jenn…", ""Ebuka ""]

//A program using RegExp to return an array of all everyone in the text
let text2 = `During today's presentation "Valentine Oragbakosi" 
             presented first followed by "Nwosu Ifeoma Lucia" and then "Ibe Agwu" 
             after which "Chinonso Williams Junior", "Ndife Uchenna", 
             "Ehiogu Chika Josephine" and finally "Chidera Jennifer". 
             "Ebuka " will be presenting tomorrow.`
var newArray = [ ];
var extractNames = text2.match(/("\w+\s*\w*\s*\w+)/gi);
    extractNames.forEach(element => {
        var extract = element.replace(/"/, '');
        newArray.push(extract);
}
)
console.log(newArray);




//exercise 3:Given any text, write a RegExp that parses the text and returns the same text
//		but replaces every url in the text with a link.
//		e.g 'Visit http://genesystechhub.com for more information about Genesys'
//		should return 'Visit <a href="http://genesystechhub.com">genesystechub.com</a> 
//      form more information about Genesys'

var text3 = `Visit http://genesystechhub.com for more information about Genesys, 
You can as well copy this url to your browser ftp://google.com, it enhances searching!`
text3 = text3.replace(
    /((http|https|ftp|ftps)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/)?)/g,
    '<a href="$1">$1</a>'
);
console.log(text3)