// then and catch

// let promise= new Promise((resolve,reject)=> {

//    if(1==2){
//     resolve('yes in resolve')
//    } 
//    else{
//     reject('yes in reject')
//    }
// })

// // console.log(promise);

// promise.then(res=>console.log(res)).catch(rej=>console.log(rej))

// function promise(){
//    return new Promise((resolve,reject)=>    {if(1==1){
//     resolve('yes in resolve')
//    } 
//    else{
//     reject('yes in reject')
//    }
// })
// }
// promise().then(res=>console.log(res)).catch(rej=>console.log(rej))


// function promise(value){
//     return new Promise((resolve)=>{
//         if(1==1){ setTimeout(()=>resolve('haii'),value)}
        
//     }
    
//     )
// }

// promise(2000).then(res=>console.log(res))


// function promise(value){
//     return new Promise((resolve,reject)=>{
//         if(1==2){ 
//             setTimeout(()=>resolve('in resolve haii'),value)
//         }
//         else{
//             setTimeout(()=>reject('in reject haii'),value)
//         }
//     }
    
//     )
// }

// promise(2000).then(res=>console.log(res)).catch(rej=>console.log(rej))

// function promise(value){
//     return new Promise(resolve=>
//        resolve(value*2)

//     )
// }

// promise().then(res=>console.log(res))
// promise().then(res=>console.log(res*2))
// promise().then(res=>console.log(res*2*2))

// promise(10).then(result1=> {console.log(result1); return  promise(result1) }).then(result2=>{console.log(result2); return promise(result2)}).then(result3=> console.log(result3))




// let cal=(a,b,operation)=>{
//     // try{
//     //     if((typeof(a)!='number') || (typeof(b)!='number') ||(typeof(operation!='string')) ) {throw new Error('datatype doesnt match')}
//     return new Promise(result=>{
//         if (operation=='add') result(a+b) 
//             else if(operation=='mult') result(a*b)
//         else if(operation=='div') result(a/b)
//             else if(operation=='sub') result(a-b)

//             })
//         // }
//         // catch(error){
//         //     console.log('in catch',error);
            
//         // }
// }

// // cal(1,2,'add').then(addition=>{return cal(addition,2,'mult')})
// // .then(multi=>{return cal(multi,2,'div')})
// // .then(divi=>{console.log(`${divi} ${addition}`);
// // })


// cal(1,2,'add').then(addition=> {console.log('addition is',addition); return cal(addition,2,'mult')
// .then(multi=>{console.log('multiplication is',multi);return cal(multi,2,'div')
// .then(div=>{console.log('division is',div);return cal(multi,addition,'sub')
// .then(subtract=>{console.log('subtraction is',subtract); console.log('division is',div);
// }
//  )
// })
// }
// )})

// async and await

// function delay(time){
//     return new Promise(result=>setTimeout(()=>result('its resolved'),time))
// }

// async function getDelay() {
//     console.log('in async',await delay(3000))  //if we didnt use await it will not wait and give the output
// }


// let getDelay= async ()=>{
//     try{
//     console.log('in arrow async',await delay(3000))
//     }
//     catch(err){
//         console.log('in catch',err);
        
//     }
// }
// getDelay()

// let calc=(a,b,operation)=>{
//     return new Promise(res=>{
//         if(operation=='add') res(a+b)
//         else if(operation=='sub') res(a-b)
//         else if(operation=='mult') res(a*b)
//         else if(operation=='div') res(a/b)
//     })
// }

// let getResult=async ()=>{
//     try{
//     result1= await calc(10,20,'add')
//     console.log('addition =',result1);
//     result2= await calc(result1,ress,'mult')
//     console.log('multiplication =',result2);
//     result3= await calc(result2,2,'div')
//     console.log('division =',result3);
//     result4=await calc(result2,result1,'sub')
//     console.log('subtraction =',result4);
//     } 
//     catch(err){
//         console.log('in catch',err);
        
//     }
    
// }

// getResult()

// output [[3,6],[4,5]]

// let arr=[1,2,3,4,5,6]

// let findOutput=(a)=>{
//         output=[]
// try{
//     if(typeof(a)!='number')throw new Error('not a number')

//         for(let i=0;i<arr.length;i++){
//             for(let j=i+1;j<arr.length;j++){
//                 if(arr[i]+arr[j]==a){
//                     output.push([arr[i],arr[j]])
                    
//                 }
//             }
//         }
//         return output
//     }
//         catch(err)
//         {
//             console.log('in catch',err);
            
//         }
//     }
    

// console.log(findOutput('a'))


function resPromise(){
    return new Promise((res,rej)=>{
        setTimeout(()=>res('true'),2000)
    })
}

function rejPromise(){
    return new Promise((res,rej)=>{
        setTimeout(()=>res('false'),2000)
        console.log(c)
    })
}

// Promise.all([resPromise(),rejPromise()]).then(res=>console.log(res)).catch(err=>console.log('in error',err))  //in Promise.all every promise executed simultaniously and give output if both satisfly and if anyone go rejeced it will directly go to catch block

// Promise.any([resPromise(),rejPromise()]).then(res=>console.log(res)).catch(err=>console.log(err))

// Promise.race([rejPromise(),resPromise()]).then(res=>console.log(res)).catch(err=>console.log(err))

Promise.allSettled([rejPromise(),resPromise()]).then(res=>console.log(res)).catch(err=>console.log(err))
