var todoList = [];

var savedTodosData = localStorage.getItem('todo');
if(savedTodosData) {
    var savedTodos = JSON.parse(savedTodosData);

    savedTodos.forEach(function(todoModel) {
        newElement(todoModel);
    });
}

function newElement(todoModel) {

    var input = document.getElementById('doInput');
    var li = null;

    /*check for empty input*/
    if (todoModel.value === '') {
        alert("Write something!");
        return;
    } else {
        li = document.createElement('li');
        var liText = document.createElement('span');
        liText.innerText = todoModel.value;
        liText.className = "litext";
        li.appendChild(liText);
        var ul = document.getElementById('todoList');
        ul.appendChild(li);
        input.value = "";
    }
    /*Remove*/
    var rmbtn = document.createElement("button");
    var rmTxt = document.createTextNode("\u00D7");
    rmbtn.className = "remove";
    rmbtn.appendChild(rmTxt);
    li.appendChild(rmbtn);

    rmbtn.addEventListener("click", function(event) {
        var div = this.parentElement;
        div.style.display = "none";
        todoList.shift();
        updateLocalStorageData();
    });

    /*Edit*/
    var editBtn = document.createElement("button");
    var editTxt = document.createTextNode("\u270E");
    editBtn.className = "edit";
    editBtn.appendChild(editTxt);
    li.appendChild(editBtn);
    var edit = document.getElementsByClassName("edit");

    editBtn.addEventListener("click", function(event) {
        var divB = this.parentElement.firstChild;
        var modified = prompt('Modify?', divB.innerText);
        /*check for promt cancel*/
        if (modified === null) {
            modified = divB.innerText;
        } else {
            divB.innerText = modified;
        }

        updateLocalStorageData();
    });

    /*Finish*/
    var finBtn = document.createElement("button");
    var finTxt = document.createTextNode("\u2713");
    finBtn.className = "finish";
    finBtn.appendChild(finTxt);
    li.appendChild(finBtn);

    finBtn.addEventListener("click", function(event) {
        todoModel.isDone = !todoModel.isDone;
        checkTodoDoneState(todoModel.isDone, li);
        updateLocalStorageData();
    });

    checkTodoDoneState(todoModel.isDone, li);
    function checkTodoDoneState(todoIsDone, todoDivA) {
        if(todoIsDone) {
            todoDivA.style.backgroundColor = "lightgreen";
        } else {
            todoDivA.style.backgroundColor = "#8bd1f2";
        }
    }
    todoList.push(todoModel);
    updateLocalStorageData();
}

/*Update LocalStorage*/
function updateLocalStorageData() {
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

/*Creates new todo*/
function createNewTodo() {
    var todoNameInput = document.getElementById('doInput');

    var newTodoModel = {
        value: todoNameInput.value,
        isDone: false
    };

    newElement(newTodoModel);
}


var el = document.getElementById('todoList');
var sortable = Sortable.create(el);