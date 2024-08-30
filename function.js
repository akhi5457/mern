// // syntax

// // function declaration

// // function funName(parameter1,parameter2,parameter3,...){
// //     // block of code
// // }

// // funName(argument1,argument2,argument3,...)

// if the console or anything come after return then it will not run the console
// // function funAdd(a,b){
// //     return a+b;
// // }

// // function funSub(a,b){
// //     return a-b;
// // }

// // console.log(funAdd(2,3))
// // console.log(funSub(2,3));

// // function expression

// let sum=function(a,b){
//     return a+b;
// }

// console.log(sum(2,3));

// function abbb(a,b){
//     let count=0;
//     for(let i=a;i<=b;i++){
//          count=count+i
//     }
//     return count
// }
// console.log(abbb(11,20));


//function with fibonacci

// function fibonacci(a,b,c){
//     // console.log(a)
//     let sum=a;
//     do{
//         // console.log(b)
//         sum=sum+b
//         let d=b
//         b=a+b
//         a=d
        
//     }
//     while(b<=c)
//       return sum;  
// }

// console.log(fibonacci(10,13,1000))




// function check(a=false,b){
//     result=''
//     if(b==true){
//         result='yes'
//         return result
//     }
    // else if(a==true){
    //     result='no'
    //     return result
    // }
    
// }

// console.log(check('',true));


function one(a){
    let d=two(a,10)
    return d;
    // console.log('invoked a');
}

function two(a,b){
    return a+b
} 

console.log(one(10));



