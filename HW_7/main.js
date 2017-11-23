var todoList = [];


function newElement() {
    var input = document.getElementById('doInput');
    /*check for empty input*/
    if (input.value === '') {
        alert("Write something!");
    } else {
        var li = document.createElement('li');
        var liText = document.createElement('span');
        liText.innerText = input.value;
        todoList.push(liText.innerText);
        liText.className = "litext";
        li.appendChild(liText);
        var ul = document.getElementById('todoList');
        ul.appendChild(li);
        document.getElementById("doInput").value = "";

    }

    /*Remove*/
    var rmbtn = document.createElement("button");
    var rmTxt = document.createTextNode("\u00D7");
    rmbtn.className = "remove";
    rmbtn.appendChild(rmTxt);
    li.appendChild(rmbtn);
    var close = document.getElementsByClassName("remove");
    var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

    /*Edit*/
    var editBtn = document.createElement("button");
    var editTxt = document.createTextNode("\u270E");
    editBtn.className = "edit";
    editBtn.appendChild(editTxt);
    li.appendChild(editBtn);
    var edit = document.getElementsByClassName("edit");
    var b;
    for (b = 0; b < edit.length; b++) {
        edit[b].onclick = function() {
            var divB = this.parentElement.firstChild;
            var modified = prompt('Modify?', divB.innerText);
            /*check for promt cancel*/
            if (modified === null) {
                modified = divB.innerText;
            } else {
                divB.innerText = modified;
            }
        }
    }

    /*Finish*/
    var finBtn = document.createElement("button");
    var finTxt = document.createTextNode("\u2713");
    finBtn.className = "finish";
    finBtn.appendChild(finTxt);
    li.appendChild(finBtn);
    var done = document.getElementsByClassName("finish");
    var a;
    for (a = 0; a < done.length; a++) {
        done[a].onclick = function() {
            var divA = this.parentElement;
            if (divA.style.backgroundColor === "lightgreen") {
                divA.style.backgroundColor = "#8bd1f2";
            } else {
                divA.style.backgroundColor = "lightgreen";
            }
        }
    }
    var todo = liText.innerText;
    localStorage.setItem('todo', JSON.stringify(todoList));

}
/*Reverse*/
function reverse() {
    var ulList = document.getElementById("todoList");
    var liList = ulList.getElementsByTagName("li");
    for (var f = liList.length - 1; f >= 0; f--) {
        ulList.appendChild(liList[f]);
    }
}


