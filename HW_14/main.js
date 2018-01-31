//by Denys Pysmennyi

function perform() {
	//TODO implement =>
	var res = new Promise((resolve, reject) => {
        var func = arguments[1];
        var pars = arguments[0];
        resolve(func(pars));
    });
    return res;
}

perform(null, function(value) { // value === null
	var param = 1;
	console.log(param); // 1
	return param;
})
.then(function(param) { // param === 1
	console.log(++param); // 2
	return param;
})
.then(function(param) { // param === 2
	console.log(++param); // 3
	return param;
})
.then(function(param) { // param === 3
	console.log(++param); // 4
	return param;
})
.then(function(param) { // param === 4
	console.log(++param); // 5
	return param;
});