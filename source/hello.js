//!/usr/bin/nodejs --throw-deprecation

//-----------------------------------------------------------------------------
// Project Name      - JSProjects/source/hello.js
// Started On        - Tue 10 Mar 11:40:40 GMT 2020
// Last Change       - Tue 10 Mar 12:09:36 GMT 2020
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
//-----------------------------------------------------------------------------

// Usual quoting and escaping rules apply. This function seems to be for just
// printing data to a terminal and/or console (like in Firefox) like `print()`
// in Perl and other languages, and `echo` in Shell variants.
console.log('Printing a literal string to a terminal/console.')

// The `let` keyword doesn't seem to work for variable assignment in JS,  like
// people show in their tutorial videos. I get errors when I use `let`. I think
// using `var` means it'll be a global variable, otherwise perhaps `let` is
// used? Not sure yet.
var Key = 'Value'

// Concatenating strings like this is a necessity in JS (utterly ridiculous!).
// Variables don't have sigils at all, it seems, so there's no way to tell them
// apart from the rest of the string. The `+` is used like `.` in Perl.
console.log('Printing the contents of variable Key: ' + Key)

// Since `+` is also a concatenation symbol, parentheses seem to work to treat
// the arithmetic as just that, rather than otherwise appending `1.51.2`.
console.log('Printing sum of 1.5 and 1.2 floats: ' + (1.5 + 1.2))
