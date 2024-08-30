//for  --> if we know the condition like how much time the loop need to execute we can use the for loop 
//while  --> if we dont know the condition how much time the loop need to execute the loop will execute until the condition  become false 
//do while  --> it is same as while but the code block is executed once whether it is true or false then checks the condition

//for loop syntax
 //for(initialization; condition;incre/decre)

// for(let i=0; i<10;i++)
// {
//   console.log(i);
// }


// for(let i=10; i>0; i--)
// {
//   console.log(i);
// }


// for loop with if else
// for(let a=0; a<=10; a++){
//   if(a%2==0){
//     console.log(`${a} is even`);
//   }
//   if(a%2!=0){
//     console.log(`${a} is odd`);
//   }
// }

// for(let a=0; a<=10; a++){
//   if(a%2==0){
//     console.log(`${a} is even`);
//   }
//   else if(a%2!=0){
//     console.log(`${a} is odd`);
//   }
// }

// for(let a=0; a<=10; a++){
//   if(a%2==0){
//     console.log(`${a} is even`);
//   }
//   else {
//     console.log(`${a} is odd`);
//   }
// }

// for loop with string

//let a='mongoDB'
// for (let i = 0; i < a.length; i++) {
//   console.log(a.charAt(i));
// }

//let a='mongoDB'
// for(let i=0; i<a.length;i++){
//   console.log(a[i]);
// }

//let a='mongoDB'
// for (let i = a.length-1; i >=0; i--){
//   console.log(a[i]);;
 
// }
// let skill='Angular'
// let revskill='';
// for(let i=skill.length-1;i>=0;i--){
//   revskill+=skill[i];
// }
// console.log(revskill);

// let sentance='i am angular developer';
// for(let i=0; i<sentance.length;i++){
//   if((sentance[i]=='a') || (sentance[i]=='e')){
//     console.log(sentance[i],'   index',i)
//   }
// }

//loop from -25 to 25 print odd and even number

// for(i=-25;i<25;i++){
//   if(i%2==0){
//     console.log(i,'is even');
//   }
//   else{
//     console.log(i,'is odd');
//   }
// }

// //5's multiplication table till 16 rows

// let ab=1;
// let ba=5;
// console.log("5's table");
// for (let i = 1; i <17; i++){
// ba=ab*i;
// console.log('5*',i,'=',ba);
// }


// //3's table till 16 rows print even numbers
// let b=1;
// let a=3;
// console.log("even numbers in 3's table");
// for (let i = 1; i <17; i++){

// b=a*i;
// if(b%2==0){
// console.log('3*',i,'=',b);
// } 
// }



//create 2 variables one is even sum and odd sum

// let evensum=0;
// let oddsum=0;

// for(let i=-57;i<=99;i++){
//     if(i>0){
//     if(i%2==0){
//         evensum+=i;
//     }
//     else{
//         oddsum+=i;
//     }
// } 
// }
// console.log('evensum=',evensum);
// console.log('oddsum=',oddsum);