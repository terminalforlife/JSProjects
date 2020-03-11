//!/usr/bin/nodejs --throw-deprecated

//-----------------------------------------------------------------------------
// Project Name      - JSProjects/source/cpufreq.js
// Started On        - Wed 11 Mar 16:13:33 GMT 2020
// Last Change       - Wed 11 Mar 19:52:07 GMT 2020
// Author E-Mail     - terminalforlife@yahoo.com
// Author GitHub     - https://github.com/terminalforlife
//-----------------------------------------------------------------------------
// Testing to see how much of `cpufreq` functionality I can replicate with JS.
//-----------------------------------------------------------------------------

const os = require('os')

var CurVer = '2020-03-11'
var Progrm = 'lsbins'

console.log(
	'Core_0: ' + os.cpus()[0].speed + 'Hz\n' +
	'Core_1: ' + os.cpus()[1].speed + 'Hz\n' +
	'Core_2: ' + os.cpus()[2].speed + 'Hz\n' +
	'Core_3: ' + os.cpus()[3].speed + 'Hz'
)
