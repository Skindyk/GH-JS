var pop_array = [1, 2, 3, 4];
	console.log ("pop_array = " + pop_array);
	function popFunction() {
		pop_array.pop();
		document.getElementById("pop").innerHTML = pop_array;
		console.log ("pop_array = " + pop_array);
	}
		
var push_array = [];
console.log ("push_array = " + push_array);
	function pushFunction() {
		push_array.push("Banana");
		push_array.push("Orange");
		push_array.push("Apple");
		push_array.push("Mango");
		document.getElementById("push").innerHTML = push_array;
		console.log ("push_array = " + push_array);
	}
	
var concat_array = [];
	function concatFunction() {
		concat_array = pop_array.concat(push_array);
		document.getElementById("concat").innerHTML = concat_array;
		console.log (concat_array);
	}
function indexofFunction() {
	var indexof_array = concat_array.indexOf("Orange");
	document.getElementById("indexof").innerHTML = indexof_array;
	console.log (indexof_array);
}
function joinFunction() {
	var join_array = concat_array;
	document.getElementById("join").innerHTML = join_array.join('-');
	console.log (join_array.join('-'));
}
		
var foreach_array = ["Banana", "Orange", "Apple"];
	function foreachFunction() {
		var html = "";
			foreach_array.forEach(function(item, i, arr) {
			html +=  (i + ": " + item + " (array:" + arr + ")" + "</br>" );
			console.log ( i + ": " + item + " (array:" + arr + ")" );
			});
		document.getElementById("foreach").innerHTML = html;
	}
		
var filter_array = [6, 12, 18, 24];
	function filterNumber(number) {
		return number >= 13;
	}
	function filterFunction() {
		document.getElementById("filter").innerHTML = filter_array.filter(filterNumber);
		console.log ("filtered array = " + filter_array.filter(filterNumber));
	}
	
var find_array = [6, 12, 18, 24];
	function findNumber(number) {
		return number >= 5;
	}
	function findFunction() {
		document.getElementById("find").innerHTML = find_array.find(findNumber);
		console.log ("element founded = " + find_array.find(findNumber));
	}
	
var mapwords = ['Banana', 'Orange', 'Apple'];
	function mapFunction() {
		var maparray = mapwords.map(function(maplenght) {
	  return maplenght.length;
	});
	document.getElementById("map").innerHTML = maparray;
	console.log ( maparray );
}

var slice_array = [ 1, 2, 3, 4, 5 ];
	function sliceFunction() {
		document.getElementById("slice").innerHTML = slice_array.slice(2);
		console.log (slice_array.slice(2));
	}

var splice_array = ["Banana", "Orange", "Apple", "Mango"];
console.log ("Splice = Default array " + splice_array);
	function spliceFunction() {
		splice_array.splice(0, 0, "Grapes", "Pineapple");
		document.getElementById("splice").innerHTML = splice_array;
		console.log (splice_array);
	}
	
var shift_array = ["Banana", "Orange", "Apple", "Mango"];
console.log ("Shift = Default array " + shift_array);
	function shiftFunction() {
		shift_array.shift();
		document.getElementById("shift").innerHTML = shift_array;
		console.log ("shifted array " + shift_array);
	}
	
var unshift_array = [ 3, 4, 5, 6 ];
console.log ("Unshift = Default array " + unshift_array);
	function unshiftFunction() {
		unshift_array.unshift(1,2);
		document.getElementById("unshift").innerHTML = unshift_array;
		console.log ("unshifted array " + unshift_array);
	}