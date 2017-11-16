function newElement() {
  var li = document.createElement("li");
  var liVal = document.createElement("span");
  var inputValue = document.getElementById("doInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(liVal);
  liVal.appendChild(t);
  liVal.className = "livalue";
  if (inputValue === '') {
    alert("Write something!");
  } else {
    document.getElementById("todoList").appendChild(li);
  }
  
  /*remove*/
  document.getElementById("doInput").value = "";
  var rmSpan = document.createElement("SPAN");
  var rmTxt = document.createTextNode("\u00D7");
  rmSpan.className = "close";
  rmSpan.appendChild(rmTxt);
  li.appendChild(rmSpan);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  
  /*modify*/
  document.getElementById("doInput").value = "";
  var mdSpan = document.createElement("SPAN");
  var mdTxt = document.createTextNode("\u270E");
  mdSpan.className = "modify";
  mdSpan.appendChild(mdTxt);
  li.appendChild(mdSpan);

  for (i = 0; i < modify.length; i++) {
    modify[i].onclick = function() {
      var div = this.parentElement;
	  var modified = prompt('Modify?', liVal.innerText);
	  liVal.innerText = modified;
    }
  }
}

var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var rmSpan = document.createElement("SPAN");
  var rmTxt = document.createTextNode("\u00D7");
  rmSpan.className = "close";
  rmSpan.appendChild(rmTxt);
  myNodelist[i].appendChild(rmSpan);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }

var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var mdSpan = document.createElement("SPAN");
  var mdTxt = document.createTextNode("\u270E");
  mdSpan.className = "modify";
  mdSpan.appendChild(mdTxt);
  myNodelist[i].appendChild(mdSpan);
}

var modify = document.getElementsByClassName("modify");
var i;
for (i = 0; i < modify.length; i++) {
    modify[i].onclick = function() {
      var div = this.parentElement;
	  var modified = prompt('Modify?', liVal.innerText);
	  liVal.innerText = modified;
    }
  }