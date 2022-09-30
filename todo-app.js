console.log("fine arts i love");

//add new element
const newParagraph = document.createElement("p");
newParagraph.textContent = "Amondi loves art";
document.querySelector("body").appendChild(newParagraph);

document
 .querySelector("#createNote")
 .addEventListener("click",function(event){
    event.target.textContent = "the button was clicked";
 });

 document
 .querySelector("#removeNotes")
 .addEventListener("click",function(event){
    document.querySelectorAll("p").forEach(function
        (item){
            item.remove();
        });
 });