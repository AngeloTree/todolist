const myInput = document.getElementById("myInput");
const myButton = document.getElementsByClassName("addBtn")[0];
const myUL = document.getElementById("myUL");


// click event in which adds new list items to the ul.
myButton.addEventListener("click", () => {
    console.log('click')
    newListItem = myInput.value;
    console.log(`${newListItem}`);
    myInput.value = '';
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(newListItem));
    let span = document.createElement("span");
    span.appendChild(document.createTextNode("x"));
    span.classList.add("close");
    li.appendChild(span);
    if (confirm("Would you like to add this list item?") == true) {
        console.log("Item Added!");
        myUL.appendChild(li);
      } else {
        console.log("Added will not be added..");
        li = null;
      } 
    }
)

// when user is in input box, pressing enter; creates a new list item.
myInput.onkeydown = (event) => {
    if(event.key === 'Enter') {
        newListItem = myInput.value;
    console.log(`${newListItem}`);
    myInput.value = '';
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(newListItem));
    let span = document.createElement("span");
    span.appendChild(document.createTextNode("x"));
    span.classList.add("close");
    li.appendChild(span);
    if (confirm("Would you like to add this list item?") == true) {
        console.log("Item Added!");
        myUL.appendChild(li);
      } else {
        console.log("Added will not be added..");
        li = null;
      } 
    }
}