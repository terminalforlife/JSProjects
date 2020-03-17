//!/usr/bin/nodejs --throw-deprecated

//-----------------------------------------------------------------------------
// Project Name      - JSProjects/source/cpufreq.js
// Started On        - Wed 11 Mar 16:13:33 GMT 2020
// Last Change       - Tue 17 Mar 22:54:10 GMT 2020
// Author E-Mail     - terminalforlife@yahoo.com
// Author GitHub     - https://github.com/terminalforlife
//-----------------------------------------------------------------------------
// Testing to see how much of `cpufreq` functionality I can replicate with JS.
//
// Finally figured it all out! JS really gets convoluted. But hey, it works.
// Consider this small script usable now. It'll detect however many cores you
// have, as well.
//-----------------------------------------------------------------------------

const os = require('os')
const path = require('path')

var CurVer = '2020-03-11'
var Progrm = path.basename(__filename).split('.')[0]

function Err(){
	console.error('ERROR: ' + arguments[1])
	arguments[0] > 0 && process.exit(arguments[0])
}

function Usage(){
	console.log(
		'Usage: ' + Progrm + ' [OPTS]\n\n' +
		'  -h, --help               - Display this help information.\n' +
		'  -v, --version            - Output the version datestamp.'
	)
}

// Clear the junk. This is stupid!
process.argv.shift()
process.argv.shift()

while (process.argv.length > 0){
	if (process.argv[0].match('^(--help|-h)$')){
		Usage(); process.exit(0)
	}else if (process.argv[0].match('^(--version|-v)$')){
		console.log(CurVer); process.exit(0)
	}else{
		Err(1, 'Incorrect option(s) specified.')
	}

	process.argv.shift()
}

var CoreNum = 0
while (CoreNum <= os.cpus().length - 1){
	console.log('Core_' + CoreNum + ': ' + os.cpus()[CoreNum].speed + 'Hz')
	CoreNum++
}
