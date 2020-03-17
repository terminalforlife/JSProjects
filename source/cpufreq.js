//!/usr/bin/nodejs --throw-deprecated

//-----------------------------------------------------------------------------
// Project Name      - JSProjects/source/cpufreq.js
// Started On        - Wed 11 Mar 16:13:33 GMT 2020
// Last Change       - Tue 17 Mar 21:59:26 GMT 2020
// Author E-Mail     - terminalforlife@yahoo.com
// Author GitHub     - https://github.com/terminalforlife
//-----------------------------------------------------------------------------
// Testing to see how much of `cpufreq` functionality I can replicate with JS.
//-----------------------------------------------------------------------------

const os = require('os')
const path = require('path')

var CurVer = '2020-03-11'
var Progrm = path.basename(process.argv[1]).split('.')[0]

function Err(){
	console.error('ERROR: ' + arguments[1])
	arguments[0] > 0 && process.exit(arguments[0])
}

var CoreNum = 0
while (CoreNum <= os.cpus().length - 1){
	console.log('Core_' + CoreNum + ': ' + os.cpus()[CoreNum].speed + 'Hz')
	CoreNum++
}
