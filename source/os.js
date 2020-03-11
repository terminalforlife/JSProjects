//!/usr/bin/nodejs --throw-deprecation

//-----------------------------------------------------------------------------
// Project Name      - JSProjects/source/os.js
// Started On        - Tue 10 Mar 11:40:40 GMT 2020
// Last Change       - Wed 11 Mar 19:48:25 GMT 2020
// Author E-Mail     - terminalforlife@yahoo.com
// Author GitHub     - https://github.com/terminalforlife
//-----------------------------------------------------------------------------
// Messing around with and writing notes for the `os` module.
//-----------------------------------------------------------------------------

// Defining a constant (readonly variable, basically). The `os` constant then
// seems to mimic the operation of an object. This is basically what was used
// above, but `os` is one of the JS core modules, or Node.js, specially (?).
const os = require('os')

// Using the `type()` function with the new `os` constant (object (?)), we can
// display the operating system type, which shows `Linux` instead of `linux`, -
// which `process.platform` returns.
console.log("Function 'os.type()' says your system is: " + os.type())

// Output the full path to the current user's HOME directory.
console.log('Your HOME is: ' + os.homedir())

// Displaying system memory (ambiguous; is it RAM or Swap, or what?!) usage is
// easy enough with the `os` module, but I can't figure out how to show only an
// integer. Despite `int` showing up as valid for my syntax highlighting in
// vim(1), Node.js tells me it's undefined.
console.log('You have ' + (os.freemem() / 1024 / 1024) + 'M memory remaining.')

// The `os` module offers the `hostname()` function to display the system's
// hostname, although I'm not sure whether it's the short form or what.
console.log('Your hostname is: ' + os.hostname())

// Grabbing the CPU model seems pretty easy in JavaScript. In this example, -
// we're using the first core of the CPU, hence the `[0]` usage.
console.log('CPU model: ' + os.cpus()[0].model)
