// function add(){
//     let a=20;
//     function b(){
//         let c=30;
//         console.log(a+c)
//     }
//     return b()
// }
// const main=add()



const outerfun=(a)=>{
    var b=10;
    const innerfun=(c)=>{
        let sum=a+b+c;
        return (sum)
    }
    // innerfun(4);
    return innerfun
} 
const num=outerfun(5)
console.log(num(4))
// num()
// console.log(b)



// var readlineSync=require("readline-sync");
// let num=readlineSync.questionInt("enter the num=");
// if (num>0){
//     console.log("nagative")
// }
// else if (num<0){
//     console.log("positive")
// }
// else{
//     console.log("zero")
// }



function fristname(){
    let name="manvi";
    function lastname(){
        let name1="mahi"
        return name+name1
    }
    return lastname
}
const main=fristname();
console.log(main())



function myFunction() {
    let a = 4;
    function secFun(){
        return a * a;
    }
    return secFun
    
}
// console.log(myFunction())
const main=myFunction()
console.log(main())
// main()


function name(){
    var name1="manvi"
    function add(){
        console.log(name1)
    }
    return add
}
const main=name()
console.log(main())


// var new_array = arr.filter(function callback(element, index, array) {
//     // Return true or false
// }[ thisArg])
// console.log(new_array)
