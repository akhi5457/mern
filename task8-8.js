function str1(a){
    
    for (let i = 0; i < a.length; i++) {  
    let word=''
    for (let j = i+1; j < a.length+1; j++) {
     word=a.slice(i,j)
    //  word=a.substring(i,j)

     console.log(word)
    }
   
}
}

str1('abcd')



// check the count of words in the sentance and print it as object 'the quick brown fox jumps over the lazy dog jumps over the fence'



// function checkCount(str){
//     let str1=str.split(' ')
//     let str2={}
//     // let count=0
//     for(let i=0;i<str1.length;i++){
//        let count=0
//     for (let j = 0; j< str1.length; j++) {
//       if(str1[i]==str1[j]){
//         count++
//       }
//        str2[str1[i]]=count
//     }  
//     }
//     console.log(str2);
// }

// checkCount('the quick brown fox jumps over the lazy dog jumps over the fence')


// function checkCount(str){
//     let str1=str.split(' ')
//     let str2={}
//     str1.filter(element=>{
//         if(str2[element]){
//             str2[element]=str2[element]+1
//         }
//         else{
//             str2[element]=1
//         }   
//     })
   
//     console.log(str2);
// }

// checkCount('the quick brown fox jumps over the lazy dog jumps over the fence')



// reverse the words in the sentance

// function reverseWord(str){
//   let str1=str.split(' ')
//   let str2=''
//   for (let i = 0; i < str1.length; i++) {
//     str2+=str1[i].split('').reverse().join('') + ' '
    
//   }
//   console.log(str2);
  
// }

// reverseWord('I Am Developer')





// function reverseWord(str){
//     let str1=str.split(' ')
//     let str2=''
    // str1.filter(element=> str2=str2(element.split('').reverse()))
// }
// let str1='I Am Developer'
//  str1=str1.split(' ')
// let str2=''
// console.log(str1.forEach(element=> { return str2=str2+element.split('').reverse()}))



// print the N th largest number from the array
// function findNthLargest(arr,n){
//     //  let newArr=arr.sort((a,b)=> b-a)
//      return arr.sort((a,b)=>b-a)[n-1]

// }


// let arr=[25,10,81,2,11,1,100]

// console.log(findNthLargest(arr,3));

// let newArr=arr.sort((a,b)=> b-a)

// console.log(newArr);
