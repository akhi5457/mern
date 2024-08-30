let a='hi everyone'
//console.log('length of string',a.length);
//console.log(a.charAt());   // the character at 0th position will be displayed(black space or 0 will be considered as the first char in the string)
//console.log(a.charAt(2));  // the character at 2th position will be displayed
//console.log(a.charCodeAt(0)); // it will display the char code of the selected char
//console.log(a.at()); // same as charAt
//let aa=a[0];           // fetch the char from the string and added to another variable and if the num exceed then (undefined)
//console.log(aa);   
//console.log(a.slice(0,5)); //slice the chars from the string start point and end point
//console.log(a.substr(0,2));  // same as slice
//console.log(a.split(' ')); // used to split the string to an array
//console.log(a.padStart(15,'*')); // used to fill the char size from the starting
console.log(a.padEnd(15,'*')); // used to fill the char size in ending
console.log(a.concat(a));