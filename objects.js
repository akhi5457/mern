// syntax

// let obg={
//     key: value
// }

let obj={
    name:'akhil',
    age:21,
    langKnown:['english','malayalam'],
    isPassed:true
}

// if key is a string and we didnt provide ('') then it will print as reference error
// if we didnt seperate using commas then javascript will throw an error


// obj.name='akhiii'
// obj['age']='21'
// console.log(obj.name,obj.age);

// obj.isPassed=false
// obj.langKnown[0]='tamil'
// console.log(obj);

// objects can be accessed  using two types (. notation) and ([] notation)

obj.mark=90

// console.log(obj);
// console.log(obj.langKnown='english',obj);

obj['hello all']='haii'

console.log(obj);
