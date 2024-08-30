//let first and the second number be 10 and 13 respectively run the loop till the sum reaches 1000 

let a=10;
let b=13;
console.log(a);
do{
    
    console.log(b);
    let c=b;
    b=a+b;
    a=c;
    
}
while(b<=1000)