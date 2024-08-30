// destructure is something which unpack the object into variables


let studDetails={
    name: 'akhil',
    age: 21,
    marks: 45,
    subject: 'english'
}

// function getMessage({name,subject='maths', address='ekm'}){
//     console.log(`${name} is from ${address} and good in ${subject} `);
    
// }
// getMessage(studDetails)

// let {name,subject}=studDetails
// console.log(name,subject);


// spread

// console.log(...[1,2,3,4,5]);


// rest
// let sum=(val,...value)=>console.log(val,value);

// sum(1,2,3,4,5,6,7,8,9)

// let sum=(val,...value,c)=>console.log(val,value,c); //if we declare any parameter after rest it will be error




// destructure using rest operator

// let {name,age,...other}=studDetails   // rest operator will give output as object others will give output as element 

// console.log(name);
// console.log(age);
// console.log(other);




