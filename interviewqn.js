// Can you write a method that can erase any character from a string?

// function eraseChar(string,character){
//     let str= string.split('')
//     for(let i=0;i<str.length;i++){
//         if(str[i]==character){
//             str.splice(i,1)
//         }
//     }
//     return str.join('')

// }

// console.log(eraseChar('asdfghj','a'))



// How do you find the maximum occurring character in a given string?

// function maxOccur(string){
    
//     let result=0
//     let char=''
//     for(let i=0;i<string.length;i++){
//         let count=0
//         for(let j=0;j<string.length;j++){
            
//             if(string[i]==string[j]){
//                 // console.log(string[i])
//                 count++
                
//             }
            
            
//         }

//         // console.log(count);
//         if(result<count){
//             result=count 
//             char=string[i]
            
            
//         }
        
        
//     }
//     return ({char,result})

// }

// console.log(maxOccur('aaaaasssssssssdfgh'));


// for(let i=1;i<=100;i++){
//     (((i%3==0 && i%5==0)? console.log(i,'fizzbuzz'):(i%3==0)? console.log(i,'fizz'):((i%5==0)? console.log(i,'buzz'):'')))  
// }



// How do you find the first unrepeated character of a given string?  !!!!!!incomplete

// let str='aadsd'
// let result=[]
// let count=0
// for(let i=0;i<str.length;i++){
    
//     for (let j = i+1; j < str.length; j++) {
//         if(str[i]==str[j]){
//             count++
//         }
       
        
//     }
//     if(count==0){
//         console.log(str[i]);
//     }

// }
// console.log(result);

    

// How to find out if the given two strings are anagrams or not?

// let str1='asdfghjkl'
// let str2='lkjhgfdsa'
// str1=str1.split('').sort().join('')
// console.log(str1);
// str2=str2.split('').sort().join('')
// console.log(str2);
// if(str1==str2){
//     console.log('it is an anagram')
// }
// else{
//    console.log(' not an anagram')
// }


// function checkAnagram(str1,str2){
//     let str=str1.split('').sort().join()
//     let strr=str2.split('').sort().join()
//     if(str==strr){
//         return('it is an anagram')
//     }
//     else{
//         return ('it is not an anagram')
//     }
// }

// console.log(checkAnagram('asdfggghjkl','lkjhgfdsa'))


// How do you remove all occurrences of a given character from the input string?

// let str=12222211
// str=str.toString()
// console.log(str.replaceAll('2','0'))




// Write a program to Factorial of a Number.
// let number=1
// function factorial(element) {
//     if(element>1){
//          number=element*number   
//     return factorial(element-1) 
// }
// else{
//     return number
// }
// }
// console.log(factorial(5))


// Write a Program to Check if a number is an Armstrong number or not.
// let n=0
// function checkAmstrong(value){
       
// }


// Write a function that takes an array of integers and returns the maximum product that can be obtained by multiplying any three integers in the array.
// let count=0
// result=0
// function multiplyNum(a){
//     for(let i=0;i<a.length;i++){
//         for(let j=i+1;j<a.length;j++){
//             for(let k=j+1;k<a.length;k++){
//                 // if(a[i]!=a[j] && a[i]!=a[k] && a[j]!=a[k]){
//             count=a[i]*a[j]*a[k]
//             if(count>result){
//                 result=count
//             }
//         // }
//     }
//         }
//     }
//     return result
// }

// console.log(multiplyNum([20,2,3,3,5]));



// Write a function to generate all permutations of a given string

// let count=[]
// result=[]
// function multiplyNum(a){
//     let permu=a.split('')
//     for(let i=0;i<permu.length;i++){
//         for(let j=0;j<permu.length;j++){
//             for(let k=0;k<permu.length;k++){
//                 if(a[i]!=a[j] && a[i]!=a[k] && a[j]!=a[k]){
//             count=a[i]+a[j]+a[k]
//                 result.push(count)
//                 count=[]
//             }
//         }
//         }
//     }
//     return result.join(',')
// }

// console.log(multiplyNum('abc'));

