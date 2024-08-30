//accept the number and print the output as the reverse of the number using function

// function rev(a){
//     let num=a.toString()
//     num=num.split('')
//     let revNum='';
//     for(let i=num.length-1;i>=0;i--){
//         revNum=revNum+num[i]
//     }
//     return revNum
// }

// console.log(rev(12345));



// make the first letter of every word in the string to uppercase


// function str(a){
//     let str1=a;
    
//     let newStr1=''
//     str1=str1.split(' ')
//     for(let i=0;i<str1.length;i++){
//         let splitStr=''
//         splitStr=str1[i].split('')
//         let newSplitStr=splitStr[0].toUpperCase()
//         // console.log(newSplitStr);
//         for (let j = 1; j < splitStr.length; j++) {

           
//             newSplitStr=newSplitStr+splitStr[j]
            
//         }
//         newStr1=newStr1+newSplitStr+' '
        
//     }
//     return newStr1
// }

// console.log(str('hello everyone'));



// check whether the number is prime or not

// function prime(a){
//     let result=''
//     for(let i=2;i<a;i++){
//         if(a%i==0){
//             result=`${a} is not a prime number`
//             return result
//         }
//         else{
//             result=`${a} is a prime number`
//             return result
//         }
//     }
// }

// console.log(prime(6));