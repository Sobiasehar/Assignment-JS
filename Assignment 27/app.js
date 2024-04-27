function add() {
    var input = document.getElementById("inptext");

    var liElement = document.createElement("li")
    var liText = document.createTextNode(input.value);

    liElement.appendChild(liText);
    console.log(liElement)

    //           Edit Button
    
    var editbtn = document.createElement("button");
    var editbtnText = document.createTextNode("Edit");

    editbtn.appendChild(editbtnText);

    editbtn.setAttribute("onclick", "Edit(this)")

    liElement.appendChild(editbtn);

    editbtn.className = "edit-btn"

    //           Delete Button

    var delbtn = document.createElement("button");
    var delbtnText = document.createTextNode("Delete");

    delbtn.appendChild(delbtnText)

    delbtn.setAttribute("onclick", "del(this)")

    delbtn.className = "delete-btn"

    var list = document.getElementById("list");
    
    liElement.appendChild(delbtn);

    list.appendChild(liElement);

}

function del(){
    var list = document.getElementById("list");
    list.innerHTML = "";
}

function del(a){
   a.parentNode.remove();
}

function Edit(b){
    console.log(b.parentNode.firstChild.nodeValue);
    
    var userInput = prompt("Enter Updated Value");

    b.parentNode.firstChild.nodeValue = userInput;
}


