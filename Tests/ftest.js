"use strict"

var a = ({
	get ['a']() { return 1; },
	get ['a']() { return 2; },
	*[Symbol.iterator]() {
		yield 1;
		yield 2;
	}
})

for (var i of a)
	console.log(i);