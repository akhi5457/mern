//arrow function syntax

// let a=(parameter1,parameter2)=>{

//     block of code

// }

// by using arrow function if we have only one line of code that is to be return we can directly return without using curly braces and return keyword

// eg: 
// let add=(a,b)=> a+b
// console.log(add(5,10));


// calculator using arrow function

// let calculator=(a,b,c=2)=>{
//     if(a=='add'){
//         return b+c
//     }
//     else if(a=='sub'){
//         return b-c
//     }
//     else if(a=='mul'){
//         return b*c
//     }
//     else{
//         return console.log('error');
//     }
// }
// console.log(calculator('add',5,10));
// console.log(calculator('sub',5,10));
// console.log(calculator('sub',10,5));
// console.log(calculator('mul',10));
// console.log(calculator('mul',20));


// calculate the discount purchased by the person acccording to their age


// let discount=(name,age,amount)=>{
//     let discount=0;
//     if (age < 18) {
//         discount = amount - ((50 / 100) * amount)

//     }
//     else if ((age <= 25) && (age > 18)) {
//         discount = amount - ((25 / 100) * amount)

//     }
//     else if ((age <= 50) && (age > 25)) {
//         discount = amount - ((15 / 100) * amount)

//     }
//     else if (age > 50) {
//         discount = amount - ((5 / 100) * amount)

//     }
// return `${name} total purchase is ${discount}`
// }

// console.log(discount('akhil',21,2000));


// count vowels in a string 

// let countVowels=(a)=>{
//     let count=0
//     a=a.toLowerCase()
//     a=a.split('')
//     for(let i=0;i<a.length;i++){
//         if((a[i]=='a')||(a[i]=='e')||(a[i]=='i')||(a[i]=='o')||(a[i]=='u')){
//             count=count+1
//         }

//     }
//     return count
// }

// console.log(countVowels('Umbrella'));
// console.log(countVowels('Antenna'));
// console.log(countVowels('Name'));



// 

let countLetter=(a,b)=>{
    count=0;
    a=a.toLowerCase().split('')
    for (let i = 0; i <a.length ; i++) {
        if(b==a[i]){
            count+=1
        }
    }
    return count
}
console.log(countLetter('Hello world','c'));