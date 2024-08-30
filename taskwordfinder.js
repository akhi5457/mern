

// 1. to get the longest word in the sentance

// let string1='i am a developer developerssss';
// let string2='';
// let result='';
// for(let i=0;i<string1.length;i++){
//     if(string1[i]!=' '){
//      string2=string2+string1[i]; 
//      if(string2.length>result.length){
//         result=string2;
//      }
// } 
// else{
//    string2='';
// }
// }
// console.log(result);

let string1='i am a developer';
let string2=string1.split(' '); 
let result='';
for(let i=0;i<string2.length;i++){
  if(string2[i].length>result.length){
    result=string2[i];
  }
}
console.log(result);


//2. input as i am a react developer and trainer and output as Developer

// let string1='i am a react developer and trainer';
// string1=string1.toLowerCase()
// let str2=string1.split(' ');
// let result='';
// for(let i=0;i<str2.length;i++){
// if(str2[i]=='developer'){
//   result=str2[i]
//   result=result.replace('d','D')
// }

// }
// console.log(result); 