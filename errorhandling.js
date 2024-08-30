// syntax

// try{
//     // block of code
// try will trigger first 
// if any error has been happened it will go to catch block
// }

// catch(err){
//     // block of code
// it will only execute if any error happened in the error
// }

// finally{
//     // block of code 
// it executes all the senarios
// }




// try{
//     let a=10
//     let b=20
//     if(a>b) console.log(a ,'is greater');
//     if(b>a) console(b ,'is greater');

// }
// catch(errorMessage){
//     console.log('in catch block',errorMessage);
// }
// finally{
//     console.log('in finally');
// }
// console.log('try ended');


// function checkString(value){
//     try{
//         if(typeof(value)=='string') throw new Error(`${value} is not a string`)
//     }
// catch(err){
//     console.log('in catch',err);
// }
// }

// checkString('asdfghj')

// function checkDay(day){

// let days=['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
// try{
//     if(typeof(day)!='number'){ throw new Error('it is not a number')}
//     else if(day>7){
//         throw new Error('index out of range')
//     }
//     else{
//         console.log(days[day-1]);

//     }
// }
// catch(err){
//     console.log('in catch',err)
// }
// }

// checkDay('sdfgh')


// checkDay(5)

function checkDay(value){
    try{
        if(typeof(value)!='number')throw new Error('not a number')
        switch(value){
            case 1 : console.log('sunday'); break
            case 2 : console.log('monday'); break
            case 3 : console.log('tueday'); break
            case 4 : console.log('wednesday'); break
            case 5 : console.log('thurday'); break
            case 6 : console.log('friday'); break
            case 7 : console.log('saturday'); break
            default: throw new Error('day no is wrong')

        }
    }
    catch(err){
        console.log(err);
    }
}
checkDay(8)