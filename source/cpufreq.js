//!/usr/bin/nodejs --throw-deprecated

//-----------------------------------------------------------------------------
// Project Name      - JSProjects/source/cpufreq.js
// Started On        - Wed 11 Mar 16:13:33 GMT 2020
// Last Change       - Tue 17 Mar 21:43:07 GMT 2020
// Author E-Mail     - terminalforlife@yahoo.com
// Author GitHub     - https://github.com/terminalforlife
//-----------------------------------------------------------------------------
// Testing to see how much of `cpufreq` functionality I can replicate with JS.
//-----------------------------------------------------------------------------

const os = require('os')

var CurVer = '2020-03-11'
var Progrm = 'lsbins'

var CoreNum = 0
while (CoreNum <= os.cpus().length - 1){
	console.log(
		'Core_' + CoreNum + ': ' + os.cpus()[CoreNum].speed + 'Hz'
	)

	CoreNum++
}
