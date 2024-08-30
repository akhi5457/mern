/*
let a=10;
let postIncre=a++;
console.log(`${postIncre} is postIncrement`);
let preIncre=++a;
console.log(preIncre);

let a=2;
let b=a**a;
console.log(((a>=b) || (a<=b))? 'same':'not same');
console.log(((a>=b) && (a<=b))? 'same':'not same');


//nested if else

var choice='shirts';
var type='rayon';
if((choice=='shirt')||(choice=='shirts')){
    if(type=='nylon'){
        console.log(`show  ${type} ${choice}`);
    }
    else if(type=='cotton'){
        console.log(`show ${type} ${choice}`);
    }
    else{
        console.log(`show ${choice}`);
    }
}
else if((choice=='tshirt')||(choice=='tshirts')){
    if(type=='nylon'){
        console.log(`show ${type} ${choice}`);
    }
    else if(type=='cotton'){
        console.log(`show ${type} ${choice}`);
    }
    else{
        console.log(`show ${choice}`);
    }
}
else{
    console.log('no thanks');
}
    */



//switch condition

/*grade A : excellent
grade B : good
grade c : try to get A
grade D : not satisfied with your performance
grade E : fail
grade F : very poor performance


let grade='E';
let remark='';
switch (grade) {
    case 'A': remark='excellent'; console.log(`remark = ${remark}`);
        break;
    case 'B':remark='good'; console.log(`remark = ${remark}`);
        break;
    default: console.log('error');
        break;    
    case 'C':remark='try to get A'; console.log(`remark = ${remark}`);
        break;
    case 'D':remark='not satisfied with your performance'; console.log(`remark = ${remark}`);
        break;
    case 'E':
    case 'F':remark='fail'; console.log(`remark = ${remark}`);
        break;                    
    
}
*/


// using switch find the day 

let dayno=0;
let day='';
switch (dayno) {
    case 0: day='sunday'; break;
    case 1: day='monday'; break;
    case 2: day='tuesday'; break;
    case 3: day='wednesday'; break;
    case 4: day='thursday'; break;
    case 5: day='friday'; break;
    case 6: day='saturday'; break;
    default: console.log("entered wrong dayno"); break;

}
console.log(day);