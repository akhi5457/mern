// recurssion
// closure 
// function currying



// recurssion- a function called by itself

// let count=0
// function sum(){
//   count+=1
//   console.log('inside function',count)
//   if(count<5) sum() 
// }

// sum()


// function sum(a,b){
//     console.log('inside function',a)
//     if(a<20) {return sum(a+b,2);}
//     return a 
//   }
  
//   console.log(sum(2,3))



// delete element from the back using recurssion
// arr=['a','b','c','d','e','f','g']
// function deleteLast(){
//    console.log( arr.pop())
//     if(arr.length>0)
//         deleteLast()
// }

// deleteLast()




// let j=0
// function printchar(str){


//     console.log(str[j])
//     if(str.length-1>j) {j++; return printchar(str)}
//     else{j=0}
// }

// let i=0
// function printElement(arr){
//     if(arr.length>i){  printchar(arr[i]);
//         i++;
//         return printElement(arr)
// }
// }

// printElement(['ABC','DEF','GHI','JKL','MNO'])

// closure function-it is a higher order function which a function returns a function and the function can access the parent scopes even the parent function is returned


// function parentFunc(){
//     let count=0
//     console.log('in parent function');
//     return ()=>{
//         console.log(count++)
//         return 'goooddd'
//     }
// }
// console.log(parentFunc())
// let result=parentFunc()
// result()
// result()
// result()
// result()
// result()
// console.log(result())


function rectVolume(length){
    return (breadth)=>{
        return(height)=>{
            return length*breadth*height
        }    
    }
}

console.log(rectVolume(10)(10)(20));


// abcd

