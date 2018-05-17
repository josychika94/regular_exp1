var text = `Valentine Oragbakosi <v.oragbakosi@genesgetstechhub.com> +234-7032434429
Chinonso Williams Junior <c.williams@genesgetstechhub.com> +234-9034464230
Ndife Uchenna <n.uchenna@genesgetstechhub.com> +234-8052464529
Ehiogu Chika Josephine <c.josephine@genesgetstechhub.com> +234-7022454620
Chidera Jennifer <c.jennifer@genesgetstechhub.com> +234-8032434425
Nwosu Ifeoma Lucia <l.ifeoma@genesgetstechhub.com> +234-9032434424
Ibe Agwu <i.ogele@genesgetstechhub.com> +234-7032434427`
//Given above text write a function(s) that returns arrays of names, emails and phone numbers

var email = [ ]; //creating an empty array
//spliting the text string into a substring and return them as an array
for (var get of text.split('\n')){ 
    //attach new elements to an array and return the substring at specified position
        email.push(get.substring(get.indexOf('<'), get.indexOf('>')));
        //iterating on each element of the array, and cut the first letter of each element
        var crop = email.map(cut => cut.slice(1)); 
    }
console.log(crop)


var phoneNum = [ ];//creating an empty array
//spliting the text string into a substring and return them as an array
for (var get of text.split('\n')){
     //attach new elements to an array and return the substring at specified position
    phoneNum.push(get.substring(get.indexOf('+'), get.length));
}
console.log(phoneNum)


var names = [ ];//creating an empty array
//spliting the text string into a substring and return them as an array
for(var get of text.split('\n')){ 
     //attach new elements to an array and return the substring at specified position
    names.push(get.substring(0, get.indexOf('<')));
}
console.log(names) 





//using regular expression to achieve the same goal

var text = `Valentine Oragbakosi <v.oragbakosi@genesystechhub.com> +234-7032434429
Chinonso Williams Junior <c.williams@genesystechhub.com> +234-9034464230
Ndife Uchenna <n.uchenna@genesystechhub.com> +234-8052464529
Ehiogu Chika Josephine <c.josephine@genesystechhub.com> +234-7022454620
Chidera Jennifer <c.jennifer@genesystechhub.com> +234-8032434425
Nwosu Ifeoma Lucia <l.ifeoma@genesystechhub.com> +234-9032434424
Ibe Agwu <i.ogele@genesystechhub.com> +234-7032434427`

//Given above text write a function(s) that returns arrays of names, emails and phone numbers

var extractEmail = text.match(/([a-zA-Z.]+@[a-zA-Z.]+[a-zA-Z.]+)/gi);
     //regExp to extract emails from the string 

console.log(extractEmail);

var extractNum = text.match(/([\d+\-\d{1,10}]+)/gi);
    //regExp to extract numbers from the string 
console.log(extractNum)


var extractName = text.match(/([a-zA-Z]+[ ]* [a-zA-Z]+[ ]*[a-zA-Z]{0,10})/gi);
    //regExp to extract first names and last names from the string

console.log(extractName);
