// //Variable Scoping
// //Declearing variable and initializing
// var a = 10;
// console.log(a);
// let b = 20;
// console.log(b);
// const c = 30;
// console.log(c)
// //Reassigning and redeclearing variables
//  var a = 60;
// console.log(a);
// // // let b = 30;
// // //  console.log(b); //we can redeclear the var using let 
// // const c = 40;
// //  console.log(c); //we can redeclear the var using const 

// //closure
// function outer(){
//     let a = 10;
//     function inner(){
//        let b = 30;
//        let sum = a+b;
//        console.log(sum);
//     }
//     inner()
// }
// outer();

//Template Literals
// let name = "Mujtaba";
// let last_name = "ali";
// console.log(`My name is ${name} ${last_name}`);
// let intro = `I am student of
// computer science`;
// console.log(intro);

//Destructuring
//Arrayand object sy values k nikal ny k liyh yh destructuring k method use huta hn 
// var a = [1,2,2.3,4,7,];
// var [b,c] = a;
// console.log(b,c);

// var obj = {
//     name: "Mujtaba",
//     age: 25,
//     city: "karachi",
// };
//  var {name} = obj;
//  console.log(name);

//default parameters
// //function without defalt value
// function noDefaultFnct (a){
//     console.log(a)
// }
// noDefaultFnct(10);

// //function with defalt value
// function defaultFnct(a=0,b=20){
//     console.log(a,b)
// }

// defaultFnct(30,40);
// defaultFnct(30);
// defaultFnct();

//spread operator
var a = [1,2,3,4,5];
var b = [...a];
console.log(b);

//Rest operator
//yh tab use huta hn jb ap k bachy huvy values aik variable mai dalny huty hn
function restFnct(a,b,c,...d){
    console.log(a,b,c,d)
}

restFnct(1,2,3,4,5,6,7,8,9);