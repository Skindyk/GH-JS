//Shame homework ://
var arr = ['a', 'b', 'c', 4, 5, 6];

var objMethods = {
    pop: function () {
        return this.splice(this.length-1, 1);
    },
    push: function (num) {
        return this[this.length] = num;
    },
    slice: function (b, e) {
        var arr = [];
        for (b; b < e; b++) {
            arr.push(this[b]);
        }
        return arr;
    }
}
function pop1Function() {
    objMethods.pop.call(arr);
    console.log(arr);
}
function push1Function() {
    objMethods.push.call(arr, 256);
    console.log(arr);
}
function slice1Function() {
    console.log(objMethods.slice.call(arr, 0, 3));
}


function factorial(n) {
    var num = 1;
    while (n > 1) {
        num *= n;
        n = --n;
    }
    return num;
}
function fact() {
    var n = +prompt("Number?");
    console.log(factorial(n));
}
function pow(p1, p2) {
    if (p2 != 1) {
        return p1 * pow(p1, p2 - 1);
    } else {
        return p1;
    }
}
function power() {
    var p1 = +prompt("Number?");
    var p2 = +prompt("Power?");
    console.log( pow(p1, p2) );
}