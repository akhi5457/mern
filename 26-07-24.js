let studObj = {
    name : 'John',
    age : 20,
    skill : ['Angular','React','NodeJs','Bootstrap'],
    isSubmitted : false
}

//print name john
// console.log(studObj["name"]);


//print age 
// console.log(studObj["age"]);


//print skill
// console.log(studObj["skill"]);


//print isSubmitted
// console.log(studObj["isSubmitted"]);


//print the skill by each string using loop
// for (i of studObj["skill"]){
//     console.log(i);
// }
 

//print the skill based on ascending order by using loop
// console.log(studObj.skill.sort());


//print the skill based on descending order by using loop
// console.log(studObj.skill.sort().reverse());



//print the skill on lower case by using loop
// for (i of studObj["skill"]){
//     console.log(i.toString().toLowerCase());
// }

//print the skill by letter by letter using loop
// console.log(studObj.skill.map(a =>a.split('')).flat(Infinity));

//print the name in reverse order
// console.log(studObj.name.split('').reverse().join(""));



//print the skill in one string
// console.log(studObj["skill"].toString());


//print the each string in skill by ascending order
// console.log(studObj.skill.map(a => a.split('').sort().join()));


//print the each string in skill by descending order
// console.log(studObj.skill.map(a => a.split('').sort().reverse().join('')));



//print the skill by removing duplicates letter
// console.log();


//print all skill which contains the character 't'
// console.log(studObj.skill.filter(a => a.includes('t')));


//print the first skill which contains the character 't'
// console.log(studObj.skill.find(a => a.includes('t')));


//print the skill with two more values HTML and CSS
// let a = ['HTML','CSS'];
// console.log([studObj.skill.concat(a)]); 


//print the skill after deleting from 2nd to 4th index and add express Js
// studObj.skill.splice(1,3,"Express Js")
// console.log(studObj.skill)