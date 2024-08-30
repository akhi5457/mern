// array methods

// length
// push
// pop
// shift
// unshift
// slice  --> it will not affect the original array
// splice  --> it is used to add values, remove values

// let arr=['a','b','c','d']
// // console.log(arr);
// arr[0]='A'
// // console.log(arr);
// arr[arr.length]='F'
// // console.log(arr);
// arr[arr.length]='g'
// console.log(arr);
// console.log(arr.length);

let arr1=['a','b','c','d']
let newArr=arr1.filter((v)=>v!='c')
console.log(newArr);

// arr1.push('e')
// console.log(arr1);
// console.log(arr1.push('d')); //it will add the value to the array and return the length of new array
// arr1.pop() 
// console.log(arr1);
// console.log(arr1.pop()); // it will remove the value from the array and display the removed value. Also we can add that value to another variable for further use 

// if we try to pop an empty array it will give the output as undefined

// arr1.shift()
// console.log(arr1);

// console.log(arr1.shift());

// arr1.unshift('A')

// console.log(arr1);
// console.log(arr1.unshift('A'),arr1);

// console.log(arr1.splice(1,2))
// console.log(arr1);


// arr1.splice(2)

// console.log(arr1);
// arr1.splice(2,0)
// console.log(arr1);

// arr1.splice(2,1)
// console.log(arr1);

// arr1.splice(2,0,'A')
// console.log(arr1);

// arr1.splice(2,1,'A')
// console.log(arr1);

// console.log(arr1.splice(2,1,'A'),arr1)  //it will give the deleted element as output in an array and A will added to that position

// join, find and concat (topic)

// let arr1=['a','b','c','d']


// console.log(arr1.join( and ))   // if we dont use quotes it will show as reference error

// console.log(arr1.join(''));  // if we dont specify any seperators it will by default use commas as seperator
// console.log(arr1);
// it will change the original array to string
// it will not change the original array

// console.log(arr1.find('a'))
// let ages = [3, 'turtiles',30, 18, 20];
// function checkAge(age){
//     return age
// }
// console.log(ages.find((checkAge) =>checkAge==18));    

// let arr1=['a','b','c','d']
// let ages = [3, 10, 18, 20];
// console.log(arr1.concat(ages,arr1));
// console.log(arr1);



// const numbers = [10, 20, 30, 40, 50];
 
// const foundValue = numbers.find(element => element > 35);
 
// console.log(foundValue);




// let ages = ['abcd','abccd'];
// console.log(ages.sort())



;  //it will give the ascending order of numbers

// console.log(ages.sort((a,b)=>b- a));  //it will give the descending order of numbers

// every, some, sort, reverse, spread, with, reduce, indexof


// let str = 'kdfghj'
// console.log(Array.from(str))  //it change the string to an array and it will not affect the original string
// console.log(str);


// let number=[1,2,3,4,5,6]
// let iterator=number.keys()
// for(let key of iterator){
//     console.log(key)
// }