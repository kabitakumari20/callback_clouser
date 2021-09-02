// People 5 years and above in age can go to school.

// People 18 years and above in age can vote in elections.

// People 21 years and above in age can drive a car.

// People 24 years and above in age can marry.

// People 25 years and above in age can legally drink.



var readlineSync=require("readline-sync")
var age=readlineSync.questionInt("enter the age=")
if (age>5 && age<18){
    console.log("u can go school")
}
else if (age>18   &&   age<21){
    console.log("u can give vot elections")
}
else if (age>=21 && age<24){
    console.log("u can dravie car")
}
else if (age>=24 && age<25){
    console.log("u can do marry")
}
else if (age>=25){
    console.log("legally drink")
}
else{
    console.log("nothing")
}