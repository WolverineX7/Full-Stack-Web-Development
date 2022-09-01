/*let a,b,c; //var or const
a=10;
b=5;
c=a+b;
document.write(c);
console.log(c);

var score=100;
document.write(" "+typeof score);

const d=10;
document.write(d);

var myArray=new Array(3); //new Array(0,1,2)
myArray=[0,1,2];
document.write(" "+myArray);

let day=1;
switch(day){
    case 0:
        day="Sunday";
        break;
    
    case 1:
        day="Monday";
        break;

    case 2:
        day="Tuesday";
        break;

    case 3:
        day="Wednesday";
        break;
}
console.log(day);

function increase(a,b){
    console.log(a+b);
}

increase(5,5);

function  square(a){
    var b;
    b=a*a;
    return b;
}
console.log(square(10));

alert("Hello");

var heading = document.getElementById('h');
heading.style.color = "red";
heading.innerHTML = "welcome";


var button = document.getElementById("button");
function clicked(){
    console.log("Button was clicked");
}
button.addEventListener("click",clicked);

var player = {
    name : "Mark",
    health : 100
}

console.log(player.name);*/

// class ClassName{
//     constructor(){

//     }
// }

class car{
    constructor(name , year){
        this.name1 = name;
        this.year1 = year;
    }
    age(){
        let date = new Date();
        return date.getFullYear() - this.year1;
    }
}

let myCar1 = new car("Ford" , 2012);
console.log(myCar1);
console.log(myCar1.name1);

document.getElementById("h").innerHTML=("my car is "+myCar1.age()+" years old");

// let text = "abcd"
// let length1 = text.length;
// console.log(length1);

// let text = "apple,red,green";
// let part = text.slice(2,6);  //(-6,-2)
// console.log(part);

// let str = "red,green,yellow";
// let part = str.substring(7,13); //no negative value
// console.log(part);

// let str = "red,green,yellow";
// let part = str.replace("green","blue"); 
// console.log(part);
// console.log(str);

// let str = "red,red,yellow";
// let part = str.replace("red","blue"); // /red/g
// console.log(part);

// let text1 = "hello ";
// let text2 = text1.toUpperCase(); //toLowerCase()
// console.log(text2);

// let text1 = "world";
// let text2 = "hello".concat(text1);
// console.log(text2);

// let text3 = "     world";
// let text4 = text3.trim();
// console.log(text4);

// let text5 = "    world , apple";
// let text6 = text5.split(',')
// console.log(text6);