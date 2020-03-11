//!/usr/bin/nodejs --throw-deprecated

//-----------------------------------------------------------------------------
// Project Name      - JSProjects/source/path.js
// Started On        - Wed 11 Mar 16:13:33 GMT 2020
// Last Change       - Wed 11 Mar 19:01:05 GMT 2020
// Author E-Mail     - terminalforlife@yahoo.com
// Author GitHub     - https://github.com/terminalforlife
//-----------------------------------------------------------------------------
// Testing out and taking notes of the `path` module in JavaScript.
//-----------------------------------------------------------------------------

// The is akin to `use MODULE` in Perl.
const path = require('path')

// For portability, it could be really useful to get the system's path
// separator, which is exactly what the `sep` variable stores.
console.log(path.sep)

// Standard basename(1) and dirname(1) functionality within JS. Using the `os`
// module in order to get the current user's HOME path.
const os = require('os')
console.log('HOME...')
console.log('Basename:  ' + path.basename(os.homedir()))
console.log('Dirname:   ' + path.dirname(os.homedir()))
