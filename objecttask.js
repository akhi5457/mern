// // let obj=
// //     {
// //     name:'akhil',
// //     age:21,
// //     langKnown:['english','malayalam'],
// //     isPassed:true
// // }



// // console.log(obj.langKnown.reverse());
// 1.//console.log(obj.langKnown.filter(check=>check.includes('a')));
// 2.//  console.log(obj.langKnown.map(toUpper=>toUpper.toUpperCase()))
// 3.// console.log(obj.langKnown.map(toUpper=>toUpper.toLowerCase()))
// 4.// console.log(obj.langKnown.find(checkPalindrome=>checkPalindrome.split('').reverse().join('')==checkPalindrome));
// 5.//console.log(obj.langKnown.sort());
// 6.//console.log(obj.langKnown.sort().reverse());
// 7.// console.log(obj.langKnown.forEach(char=>{for(let i=0;i<char.length;i++){
// //     console.log(char[i]);
// // }}));

// // console.log(obj.langKnown.forEach(char=>{console.log(char)}))

// 8.// console.log(obj.langKnown.join(' '));
// 9.//console.log((obj.langKnown.map(rev=>rev.split('').reverse().join(''))));


// // let str='asdfgh hgmvmjbh'
// // console.log(str.split('').reverse().join('').split(' '));


// // obj task 1 : 29/07

// // let obj = [
// //     {
// //         name: "stud1", stud_marks : 70,  
// //         langKnown : ['Tamil', 'English', 'Kannada', 'Malayalam'],
// //         isPassed: false,
// //     },
// //     {
// //         name: "stud2", marks : 90,
// //         langKnown : ['Tamil', 'Malayalam'],
// //         isPassed: true,
// //     },
// //     {
// //         name: "stud3", marks : 90,
// //         langKnown : ['Kannada', 'Malayalam'],
// //         isPassed: false,
// //     },
// //     {
// //         name: "stud4", marks : 90,
// //         langKnown : ['Tamil', 'English'],
// //         isPassed: true
// //     }
// // ]

    

// // console.log(obj.filter(a=> a.langKnown.includes('Malayalam')));
// // console.log(obj.filter(a=> a.langKnown.includes('Malayalam') && a.isPassed));


// // console.log(obj.forEach());

// // obj task 2 : 29/07


// let studDetails = [
//     {
//         'Name': 'Adam', Age: '5', Languages: ['tamil', 'english', 'Japanese', 'french'], isLoggedIn: 'Yes',
//         marks: { 'English': { 'marks_total': 100, 'marks_obtained': 50 }, 'Physics': { 'marks_total': 100, 'marks_obtained': 30 } }
//     },
//     {
//         'Name': 'Madam', Age: '17', Languages: ['Malayalam', 'Dutch', 'tamil'], isLoggedIn: 'No',
//         marks: { 'English': { 'marks_total': 100, 'marks_obtained': 40 }, 'Physics': { 'marks_total': 100, 'marks_obtained': 60 } }
//     },
//     {
//         'Name': 'madam', Age: '21', Languages: ['Malayalam', 'Dutch', 'tamil'], isLoggedIn: 'Yes',
//         marks: { 'English': { 'marks_total': 100, 'marks_obtained': 60 }, 'Physics': { 'marks_total': 100, 'marks_obtained': 50 } }
//     },
//     {
//         'Name': 'Name', Age: '35', Languages: ['Tamil', 'Dutch', 'tamil'], isLoggedIn: 'No',
//         marks: { 'English': { 'marks_total': 100, 'marks_obtained': 80 }, 'Physics': { 'marks_total': 100, 'marks_obtained': 40 } }
//     },
//     {
//         'Name': 'Jhon', Age: '20', Languages: ['Malayalam', 'Dutch', 'Malayalam'], isLoggedIn: 'Yes',
//         marks: { 'English': { 'marks_total': 100, 'marks_obtained': 10 }, 'Physics': { 'marks_total': 100, 'marks_obtained': 30 } }
//     },
//     {
//         'Name': 'Deo', Age: '49', Languages: ['Malayalam', 'Dutch', 'tamil'], isLoggedIn: 'Yes',
//         marks: { 'English': { 'marks_total': 100, 'marks_obtained': 90 }, 'Physics': { 'marks_total': 100, 'marks_obtained': 20 } }
//     },
//     {
//         'Name': 'madam a Madam', Age: '71', Languages: ['Malayalam', 'Dutch', 'dutch'], isLoggedIn: 'No',
//         marks: { 'English': { 'marks_total': 100, 'marks_obtained': 16 }, 'Physics': { 'marks_total': 100, 'marks_obtained': 100 } }
//     }
// ]

// // 1. Find the name of the students age above 20.
// // 2. Find the name of the students who knows malayalam and dutch.
// // 3. How many students in the array.
// // 4. Find the name of the student who as obtained marks above 40 in Physics and english.
// // 5. Find the percentage of total marks obtained.
// // 6. Find the age below 45 and who knows the language malayalam.
// // 7. Find the name is palindrome or not.
// // 8. Find the name of the students who age is prime number.
// // 9. Find the name in ascending order according to physics marks.
// // 10. Remove the duplicates in language.
// // 11. Find the students name who are logged in and their age must be above 10 and they know malayalam.
// // 12. Find the students name who are got fail mark in both the subjects. pass-limit 50
// // 13. Find the Palindrome in Language and return their student's name

// let c=[]
// 1. // studDetails.filter(a=>a.Age>20 ? b.push(a.Name): '')
// // console.log(b);

// 2. // studDetails.filter(a=>a.Languages.includes('Malayalam','Dutch')? b.push(a.Name):'')
// // console.log(b);

// 3. //console.log( studDetails.length);

// 4. // studDetails.filter(a=>a.marks.English.marks_obtained>40 && a.marks.Physics.marks_obtained>40 ? b.push(a.Name):'')
// // console.log(b);


// 5.// studDetails.filter(a=>a.percentage=Math.round((a.marks.English.marks_obtained + a.marks.Physics.marks_obtained)/(a.marks.English.marks_total + a.marks.Physics.marks_total)*100))
// // console.log(studDetails);

// 6.// studDetails.filter(a=>a.Languages.includes('Malayalam') && a.Age>45 ? b.push(a.Name):'')
// // console.log(b);

// 7. //  studDetails.filter(a=>a.Name.split('').reverse().join('')==a.Name? b.push(a.Name):'')
// //  console.log(b.toString());
// 8. // studDetails.filter(a=>{
// // let count=0
    
// //     for(let i=2;i<a.Age/2;i++){
// //     if(a.Age%i==0){
// //       count+=1  
// //     }
// // }
// // if(count<=0){
// //     b.push(a.Age)
// // }}
// // )
// // console.log(b);

// 9.// console.log(studDetails.sort((a, b) => a.marks.Physics.marks_obtained - b.marks.Physics.marks_obtained).map(a => a.Name));


// 10. //  studDetails.filter(a=>a.Languages.filter(lang=>{if(!b.includes(lang.toLowerCase())){
// //     b.push(lang.toLowerCase())
// // }}))
// // console.log(b);

// 11. // studDetails.filter(a=>a.isLoggedIn=='Yes' && a.Age>10 && a.Languages.includes('Malayalam') ? b.push(a.Name):'')
// // console.log(b);

// 12. // studDetails.filter(a=>a.marks.English.marks_obtained<50 && a.marks.Physics.marks_obtained<50 ? b.push(a.Name):'')
// // console.log(b);

// 13. // studDetails.filter(a=>a.Languages.find(lang=> lang.toLowerCase()==lang.split('').reverse().join('').toLowerCase()? b.push(a.Name):''))
// // console.log(b);

// // b = studDetails.filter(student => student.Languages.some(lang => lang === lang.split('').reverse().join(''))).map(student => student.Name);

// // console.log(b);


let studentDetail={
    name: 'deo',
    age: 25,
    'ph no':1234567890
}

console.log(studentDetail["ph no"]);
console.log(studentDetail.marks=25);
// console.log(studentDetail);
console.log(studentDetail["ph no"]=9876543210);
console.log(studentDetail.name,'is',studentDetail.age,'and scored',studentDetail.percent=(studentDetail.marks/100)*100,'% marks');