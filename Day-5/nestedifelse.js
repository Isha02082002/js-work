// wap to taken a age from user and if age is >=18 then press 1 for indian eligible else non eligible or age is less than 18 then print you are child

let age=parseInt(prompt("enter your age"))
if(age>=18){
let press =parseInt(prompt("press 1 for Indian"));
if(press==1){
    console.log("you are Elegible")
}else{
    console.log("you are not Elegible")
}
}else{
    console.log("you are child")

} //if any condition can be true and occurs condition based on the true condition is known as nested if else