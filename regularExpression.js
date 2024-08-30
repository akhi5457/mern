regularExp = /^a+$/
newString = 'aaaaa'
console.log(regularExp.test(newString));


regularExp = /^[a-zA-Z0-9]+$/
newString = '111'
console.log(regularExp.test(newString));


regularExp = /[0-9]{10}/;
newString = '7711100111'
console.log(regularExp.test(newString));