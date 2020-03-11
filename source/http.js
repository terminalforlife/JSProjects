//!/usr/bin/nodejs --throw-deprecation

//-----------------------------------------------------------------------------
// Project Name      - JSProjects/source/http.js
// Started On        - Tue 10 Mar 11:40:40 GMT 2020
// Last Change       - Wed 11 Mar 19:31:23 GMT 2020
// Author E-Mail     - terminalforlife@yahoo.com
// Author GitHub     - https://github.com/terminalforlife
//-----------------------------------------------------------------------------
// Messing around with and writing notes for the `http` module.
//-----------------------------------------------------------------------------

const http = require('http')

// Doesn't wanna work. Guessing I'll kick myself later, when I find out why.
// Weird thing is, I was able to get more success out of the interactive shell.
var Data = http.get('http://cheat.sh')
console.log(Data.res.read())
