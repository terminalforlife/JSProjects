//!/usr/bin/nodejs --throw-deprecation

//-----------------------------------------------------------------------------
// Project Name      - JSProjects/source/hello.js
// Started On        - Tue 10 Mar 11:40:40 GMT 2020
// Last Change       - Tue 10 Mar 13:24:56 GMT 2020
// Author E-Mail     - terminalforlife@yahoo.com
// Author GitHub     - https://github.com/terminalforlife
//-----------------------------------------------------------------------------
// My first JavaScript 'program' -- basically: hello world!
//
// These are comments in JS, as in C languages. The shebang line is mostly
// just there for autoexec(1) to correctly autodetect the interpreter.
//
// The `--throw-exception` option is used to provide errors when deprecated
// functions (as well as syntax?) are used.
//
// Java is NOT JavaScript; they're too very different beasts. JavaScript was
// invented in 1995 by Brendan Eich, and since then has come a long way. It can
// be used to create desktop or mobile (Android and iOS) applications, or for
// web development, which is probably the most common usage.
//
// Node.js is what I'll be focusing on, as I'm not too interested in website
// development just yet, although I may set up a website some day, but not yet.
//
// A lot of tutorials seem to suggest that semi-colons are required at the end
// of most lines, but this doesn't seem to be the case at all, at least
// regarding Node.js.
//-----------------------------------------------------------------------------

// Usual quoting and escaping rules apply. This function seems to be for just
// printing data to a terminal and/or console (like in Firefox) like `print()`
// in Perl and other languages, and `echo` in Shell variants.
console.log('Printing a literal string to a terminal/console.')

// The `let` keyword doesn't seem to work for variable assignment in JS,  like
// people show in their tutorial videos. I get errors when I use `let`. I think
// using `var` means it'll be a global variable, otherwise perhaps `let` is
// used? Not sure yet.
//
// Variables are dynamic in JS, working similar to languages like Perl, but
// a float or integer is simply of type 'number' instead of 'float' or 'int'.
//
// There are two categories of variables in JS, 'Primitive Types' and
// 'Composite Types'. The former includes 'number', 'string', 'boolean', and
// the latter includes 'object' and 'array'.
var Key = 'Value'

// Concatenating strings like this is a necessity in JS (utterly ridiculous!).
// Variables don't have sigils at all, it seems, so there's no way to tell them
// apart from the rest of the string. The `+` is used like `.` in Perl.
console.log('Printing the contents of variable Key: ' + Key)

// The `typeof()` function can be used to display the type of a given variable.
// This function seems to work like languages like Perl, in that it returns the
// value, but you won't see anything if you just run it as-is; think of errors
// in Perl complaining about 'void context'.
console.log('The Key variable is of type: ' + typeof(Key))

// A boolean (string?) variable is its own type as mentioned previously. We
// needn't quote the `true` part, since that would make it `string` (literal).
var Boolean = true
console.log('The Boolean variable is of type: ' + typeof(Boolean))

// As in other languages, numbers in JS aren't quoted, lest they'd be strings.
var Number = 1
console.log('The Number variable is of type: ' + typeof(Number))

// Arrays (assignment and receiving) in JS work like in Perl.
var Array = ['one', 'two', 'three']
console.log('The second index of Array variable is: ' + Array[1])
console.log('The Array variable is of type: ' + typeof(Array))

// Since `+` is also a concatenation symbol, parentheses seem to work to treat
// the arithmetic as just that, rather than otherwise appending `1.51.2`.
console.log('Printing sum of 1.5 and 1.2 floats: ' + (1.5 + 1.2))

// Escape sequences work like any other language, from the looks of it, but I
// noticed that the use of `\e...` doesn't work, yet `\033...` does. I also
// think it's worth keeping in mind that JS doesn't require double-quotes when
// using escape sequences, unlike languages like Perl.
console.log('Escape sequences for colors \033[1;31mwork\033[0m, too.')

// This seems to only be valid when embedding JS into a HTML webpage. Although
// I suspect `document` can still be done with Node.js, but maybe by referring
// to a document, separately.
// document.write('text')

/*
This is a multi-line comment. Obviously this won't show up when executed.

Code can be stuck together on the one line, like other languages. Also, I've
noticed here that the same single-quote (`'`) problem comes up in JS as in
other languages like Shell and Perl, in that you can't escape the single--quote
if the text itself is wrapped in single-quotes; you have to wrap the text
instead in double-quotes. The same is not true for the opposite.
*/
console.log('What is this? '); console.log("It's cool, that's what!")

// If statements are almost exactly like Perl and similar languages. A big
// difference here is the comparison operator, which is `==` for strings AND
// numbers (integers/floats), which is similar to how Shell works.
//
// Another difference is the `else if` part, which in Perl would be `elsif`.
//
// The usual comparison operators are in JS, but there's also `===` and `!==`
// for being equal to value AND type, or the negation thereof, respectively.
if (Array[0] == 'two'){
	console.log("The Array[0] variable is equal to 'two'.")
}else if (Array[2] == 'three'){
	console.log("The Array[2] variable is equal to 'three'.")
}else{
	console.log("Neither Array[0] equals 'two' nor Array[2] equals 'three'.")
}

// Not quite sure how to create a list in-place, but here we're iterating over
// and printing the contents of each index in the Array variable. The syntax
// here is similar to languages like Perl, AWK, VimScript, Shell, etc.
console.log("Now to iterate using a 'for' loop:")
for (I in Array){
	console.log('Iteratation: ' + Array[I])
}
