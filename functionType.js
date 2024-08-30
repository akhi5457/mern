// let sum =(a,b)=>{
//     return a + b
// }

// let mult=(a,b)=>{
//     return a * b
// }

// let calc=(a,b,c)=>{
//     try{

//     if((typeof(a)!='number') || (typeof(b)!='number') ) {throw new Error('datatype doesnt match')}

//     else{
//     return c(a,b)
// }
//        }
//        catch(err){
// console.log(err);
//        }
// }

// console.log(calc(5,6,sum));
// console.log(calc(5,6,mult));
// console.log(calc(5,6,function (a,b){ return a * b}));
// console.log(calc(5,6,(a,b)=> a * b));

// let newName='akhil'
// console.log(newName);
// // let settime=setTimeout(()=>{newName=''; console.log(newName);},3000)

// function timeout(){
//     let settime=''
//     if(typeof(newName)=='string'){
//     settime=setTimeout(()=>{newName=''; console.log(newName);},3000)
// }
//     else{
//         clearTimeout(settime)
//     }
// }

// timeout()


// function timeout(time){
//     let settime=setTimeout(()=>console.log('my name is akhil'),time)
//     // clearTimeout(settime)
// }

// timeout(2000)

// setInterval(()=> console.log('hai'),500)

// let countStart=(start)=>{
//     let count=start
//     let interval=setInterval(()=>{console.log(count--,'s'); 
//         if(count < 0){ clearInterval(interval)}
//     ;},1000)
    
// }

// countStart(5)

let count=(a)=>{
    let setinterval=setInterval(()=>{console.log(count--)
    })
}

count(5)