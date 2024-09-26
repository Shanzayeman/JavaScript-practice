const fruits = ["Orange", "Mango", "Apple", "Guava"];
let text = "<ul>";
fruits.forEach(myFunction);
text += "</ul>";
document.getElementById("demo").innerHTML = text;
function myFunction(value){
    text+="<li>" + value + "</li>";
}
const fruits1 = ["Orange", "Banana", "Grapes"]
document.getElementById("demo1").innerHTML = fruits1;
function mySaad() {
    fruits1.push("Peach");
    document.getElementById("demo1").innerHTML = fruits1;
    fruits1.push("cherry");
    document.getElementById("demo1").innerHTML = fruits1;
}
