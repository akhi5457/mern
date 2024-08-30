//output

// * * * * *
//   * * * *
//     * * *
//       * *
//         *


// for (let i = 0; i <5; i++) {
//     str='';
//     for (let j = 0; j <i*2; j++) {
//        str=str+' ';

//     }
//        for (let k = 0; k < 5-i; k++) {
//         str=str+'*'+' '
        
//        }
    
//     console.log(str);
// }


// * * * * *
// *       *
// *       *
// *       *
// * * * * *


// for (let i = 0; i <5; i++) {
//     str='';
//     for (let j = 0; j <5; j++) {
//      if((i==0)|| (i==4)||(j==0)||(j==4)){
//        str=str+'*'+' ';
//       }
//       else{
//          str=str+'  '
//       }
//     }
     
//     console.log(str);
// }



//      * 
//     * * 
//    * * *
//   * * * *
//  * * * * *


// for (let i = 0; i <5; i++) {
//     str='';
//     for (let j = 5; j >i+1; j--) {
//        str=str+' ';

//     }
//        for (let k = 0; k < 1+i; k++) {
//         str=str+'*'+' '
        
//        }
    
//     console.log(str);
// }

// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

// num=1
// for(let i=1;i<=5;i++){
//    let str='';
//    for(let j=0;j<i;j++){
//       str=str+num+' '
//       num++
//    }
// console.log(str);
// }

// * * * * * * *
//  * * * * * *
//   * * * * *
//    * * * *
//     * * *
//      * *
//       *

// for(let i=0;i<7;i++){
//    let str='';
//    for(let j=0;j<i+1;j++){
//       str=str+' '
//    }
//    for(let k=6;k>i-1;k--){
//       str=str+'*'+' '
//    }
//    console.log(str);
// }

//       *
//      * *
//     * * *
//    * * * *
//   * * * * *
//  * * * * * *
// * * * * * * *
//  * * * * * *
//   * * * * *
//    * * * *
//     * * *
//      * *
//       *


// for(let i=0; i<7;i++){
//    let str=''
//    for(let j=7;j>i+1;j--){
//       str=str+' '
//    }
//    for(let k=0;k<i+1;k++){
//       str=str+'*'+' '
//    }
//    console.log(str);
// }
// for(let l=0;l<6;l++){
//    str=''
//    for(let m=0;m<1+l;m++){
//       str=str+' '
//    }
//    for(let n=5;n>l-1;n--){
//       str=str+'*'+' '
//    }
//    console.log(str);
// }


// * * * * * * *
//  * * * * * *
//   * * * * *
//    * * * *
//     * * *
//      * *
//       *
//      * *
//     * * *
//    * * * *
//   * * * * *
//  * * * * * *
// * * * * * * *

// for(let i=0;i<7;i++){
//    str=''
//    for(let j=0;j<1+i;j++){
//       str=str+' '
//    }
//    for(let k=6;k>i-1;k--){
//       str=str+'*'+' '
//    }
//    console.log(str);
// }
// for(let l=1;l<=6;l++){
//    str=''
//    for(let m=6;m>l-1;m--){
//     str=str+' '
//    }
//    for(let n=0;n<l+1;n++){
//       str=str+'*'+' '
//    }
//    console.log(str);
// }


let num=10;
for(let i=0;i<7;i++){
   let str='';
   for(let j=6;j>i-1;j--){
      str=str+' '
   }
   for(let k=0;k<i+1;k++){
      str=str+num+' '
      num++
   }
   console.log(str);
}
for(let l=0;l<6;l++){
   str=''
   for(let m=0;m<l+1;m++){
      str=str+' '
   }
   for(let n=5; n>l-1;n--){
      str=str+num+' '
      num++
   }
   console.log(str);
}