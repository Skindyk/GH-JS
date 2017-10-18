// Triangle
var triangle = "";
function triangleFunction() {
		while (triangle.length<7) {
			console.log(triangle+="#");
		}			
	}
//FizzBuzz
function FizzBuzzFunction() {
	for (var fb=1; fb <= 100; fb++)
	{
		if (fb % 15 == 0)
			console.log("FizzBuzz");
		else if (fb % 3 == 0)
			console.log("Fizz");
		else if (fb % 5 == 0)
			console.log("Buzz");
		else
			console.log(fb);
	}
}
//Chess
function ChessFunction() {
	var space = " ";
	var dash = "#";
	var lines = +prompt("Number of lines");
	var rowes = +prompt("Number of charecters");
	var result = "";
		for (var i = 0; i < lines; i++) {
			for (var n = 0; n < rowes; n++) {
				if (i % 2 == 0) {
					if (n % 2 == 0) {
						result += dash;
					} else {
						result += space;
					}
				} else {
					if (n % 2 == 0) {
						result += space;
					} else {
						result += dash;
					}
				}
			}
			console.log(result);
			result = "";
		}
}
//Min
function minFunction() {
	var numOne = +prompt("First number");
	var numTwo = +prompt("Second number");
	if(numOne > numTwo) {
		console.log (numTwo);
	} else {
		console.log (numOne);
	}
}
//recursion
function RecursionFunction() {
	var recursion = +prompt("Number");
	function isEven(n) {
		if (n === 0) {
			return true;
		} else if (n === 1) {
			return false;
		} else if (n < 0) {
			return isEven(-n);
		} else {
			return isEven(n -2);
		}
	}
	console.log(isEven(recursion));
}
//Bean
function BeanFunction() {
	function countChar(string, ch) {
		var counted = 0;
		for (var i = 0; i < string.length; i++)
		if (string.charAt(i) == ch)
		  counted += 1;
		return counted;
	}
	console.log(countChar("javascript", "a"));
}