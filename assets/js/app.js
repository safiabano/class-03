// let userNum=prompt("Enter your number");
// console.log(userNum * 5);
//prompt byefault string hota hy but +ka sign laga kr addition krvaskty hyn

// let userFavNum=prompt("enter your favourite number");
// console.log(Number(userFavNum) + 3);

// let userFavNum=prompt("enter your favourite number");
// console.log(parseInt(userFavNum) + 3);

//comparison operator
//==  ===  !=  !==  <lessthen >greaterthen

// console.log(5===5);
//<   ,    >

//console.log(5 != "8")//! mark ko not yani negative kehty hyn js me

// console.log(6 < 8);
// console.log(4 > 9);
//<= ,   >=
// console.log(6 >= 4);

// let num1=6
// let num2=8
// console.log(num1 >= num2);

// let user1Age=8;
// let user2Age=25;
// console.log(user1Age >=18);
// console.log(user2Age >=18);
// console.log(user1Age <=8);

//if  ()   {}


//if is a keyword //()round braket pass the condition//{}agar condition pass hogai to kya kam hoga


// let userAge = +prompt ("enter your age")
// if (userAge>=18 ) { 
//     console.log("You can apply for NIC");
    
// }else{
//     console.log("you are not eligible")
// }
// let userAge=+prompt("enter your age");agr ans true ata hy to oper vala consol hal jaye ga
// if (userAge >=18){
//     console.log("you can apply for nic"); agar answer false ata hy to else vali chiz chal jay gi
// }else{
//     console.log("you are not aligible")
// }


// let userFavNum=prompt("enter a number");
// let computerNum=Math.round (Math.random() *10);
// if(userFavNum === computerNum){
//     console.log("you won");

// }else{
//     console.log("you lose"+ computerNum)
// }

// let userInput=prompt("Even or Odd ");
// let computerNum= Math.round(Math.random()*10);//if me dobara condition maloom krny ho to  &  ya  or ka operator use hota hy
// //& ka operator do shart pori hony par  kam krta hy//ye right or left dono condition ko true dkhta hy phir kam krta hy              
// if (computerNum % 2===0 && userInput ==="even"){

// }
//for loop k round bracket me pehly initiallization yani variable bnana 
//dosri type ko condition kehty hyn
//or tisri chiz ko increment khty hyn
//ye for loop is lye kam ata hy k hm kisi bhi chiz ko bar bar chalany ki koshish kryn
// for (let i = 1; i <=10 ; i++ ) {
//     console.log("Hello " +i);
// }

// for (let i = 1 ; i <=10 ;i++) {
//     console.log("2 x " + i +" = "+ 2*i)
// }
// let table = 8;
// for (let i=1 ;i <=10 ; i++){
//     console.log(table + " x " + i + " = " + table *i)
// }


//==============ASINGMENT ONE===================

let table= 5;
for (let i=1 ; i<=10 ; i++){
    console.log(table + " x " + i + " = " + table *i)
}
//Ask user about her/his age through prompt
// If the user is 10 year old or younger it should print "Welcome"
//If the user is over 10 print "You are not allowed"
//using condition (if else)

let userAge=+prompt("Enter your age")
if (userAge<=10){
    console.log("Welcome");
}else{
    console.log("You are not Allowed");
}
      //================MADE BY SAFIA BANO===============

