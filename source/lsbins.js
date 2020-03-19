//!/usr/bin/nodejs --throw-deprecated

//-----------------------------------------------------------------------------
// Project Name      - JSProjects/source/lsbins.js
// Started On        - Wed 11 Mar 16:13:33 GMT 2020
// Last Change       - Thu 19 Mar 03:21:11 GMT 2020
// Author E-Mail     - terminalforlife@yahoo.com
// Author GitHub     - https://github.com/terminalforlife
//-----------------------------------------------------------------------------
// Testing to see how much of lsbins(1) functionality I can replicate with JS.
//-----------------------------------------------------------------------------

const fs = require('fs')
const os = require('os')
const path = require('path')

var CurVer = '2020-03-19'
var Progrm = path.basename(__filename.split('\.')[0])

process.argv.shift()
process.argv.shift()

while (process.argv.length > 0){
	if (process.argv[0].match('^(--version|-v)$')){
		console.log(CurVer)
	}else{
		console.error('ERROR: Unrecognised option(s) provided.')
	}

	process.argv.shift()
}

function GetFiles(){
	if (arguments[1] != undefined){
		console.log(arguments[1].sort().join('\n'))
	}
}

var Dirs = process.env.PATH.split(':')
for (Index in Dirs){
	fs.readdir(Dirs[Index], GetFiles)
}
