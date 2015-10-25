function func(a, b, ...rest) { 
    console.log(JSON.stringify(rest));
    console.log(JSON.stringify(arguments));
    return arguments.length; 
}

var test = {};
test[Symbol.iterator] = function* () {
    for (var i = 0; i < 5; i++)
        yield i;
}

console.log(func(...test));