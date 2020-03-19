//!/usr/bin/nodejs --throw-deprecated

//-----------------------------------------------------------------------------
// Project Name      - JSProjects/source/lsbins.js
// Started On        - Wed 11 Mar 16:13:33 GMT 2020
// Last Change       - Thu 19 Mar 22:17:28 GMT 2020
// Author E-Mail     - terminalforlife@yahoo.com
// Author GitHub     - https://github.com/terminalforlife
//-----------------------------------------------------------------------------
// Testing to see how much of lsbins(1) functionality I can replicate with JS.
//-----------------------------------------------------------------------------

const fs = require('fs')
const os = require('os')
const path = require('path')

function Err(Int, Str){
	console.error('ERROR: ' + Str)
	if (Int > 0){process.exit(Int)}
}

function Usage(){
	console.log(
		'Usage: ' + Progrm + ' [OPTS]\n\n' +
		'  -h, --help               - Display this help information.\n' +
		'  -v, --version            - Output the version datestamp.'
	)
}

var CurVer = '2020-03-19'
var Progrm = path.basename(__filename.split('\.')[0])

process.argv.shift()
process.argv.shift()

while (process.argv.length > 0){
	if (process.argv[0].match('^(--help|-h)$')){
		Usage(); process.exit(0)
	}else if (process.argv[0].match('^(--version|-v)$')){
		console.log(CurVer)
	}else{
		Err(1, 'Unrecognised option(s) provided.')
	}

	process.argv.shift()
}

process.env.PATH.split(':').forEach(
	Dir => fs.readdir(Dir,
		function (Errors, Files){
			if (Errors !== null){
				throw(Errors)
			}else{
				Files.forEach(File => console.log(File))
			}
		}
	)
)
