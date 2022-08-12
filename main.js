const myInput = document.getElementById("myInput");
const myButton = document.getElementsByClassName("addBtn")[0];
const myUL = document.getElementById("myUL");


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
    myUL.appendChild(li);
    alert('Added list item')
})