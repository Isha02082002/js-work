// //ladder means ==multiple if used where more than one condition
// let b=parseInt(prompt("enter a number"));
// if(b>0){
// console.log(num+" +ve number")
// }else if(b<0){
//     console.log(num+" -ve number")
//     }else{
//         console.log("neutral or zero")
//     }
    // wap to take a input of 3 subjects and get percentage if()
    let marks=parseInt(prompt("enter a marks of subject 1"));
    let marks1=parseInt(prompt("enter a marks of subject 2"));
    let marks2=parseInt(prompt("enter a marks of subject 3"));
      let per=((marks+marks1+marks2)*100)/3
      if(per>90){
        console.log("A grade")
      }else if(per>=75&&per<=75){
        console.log("b grade")

      }else if(per>=65&&per<75){
        console.log("c grade")
      }else{
        console.log("invalid")
      }

