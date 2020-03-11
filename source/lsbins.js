//!/usr/bin/nodejs --throw-deprecated

//-----------------------------------------------------------------------------
// Project Name      - JSProjects/source/lsbins.js
// Started On        - Wed 11 Mar 16:13:33 GMT 2020
// Last Change       - Wed 11 Mar 16:57:57 GMT 2020
// Author E-Mail     - terminalforlife@yahoo.com
// Author GitHub     - https://github.com/terminalforlife
//-----------------------------------------------------------------------------
// Testing to see how much of lsbins(1) functionality I can replicate with JS.
//-----------------------------------------------------------------------------

var CurVer = '2020-03-11'
var Progrm = 'lsbins'

// It turns out there is a `shift()` in JS, so here goes that approach. Well, -
// this works, but for some reason, it insists on including 2 useless
// arguments, but not when running in the interactive JS environment.
//
// I need to skip the first two (?) arguments. This is sloppy as all balls, but
// I'm not sure how to do this properly just yet, hence the following lines.
process.argv.shift()
process.argv.shift()

while (process.argv.length > 0){
	// Testing line, to see each of the arguments.
	//console.log(process.argv[0])

	// By starting at index `2` here, we're ensuring the all is left is
	// undefined variables, which can be easily ignored.
	//
	// Using REGEX in this statement seems to be the same as in Perl.
	if (process.argv[0] =~ /^(--version|-v)$/){
		// This keeps repeating itself for each argument provided, regardless
		// of whether it matches the REGEX or not; why?
		console.log(CurVer)
	}else{
		// This is never happening, for some reason.
		console.error('ERROR: Unrecognised option(s) provided.')
	}

	// It's like this isn't being executed.
	process.argv.shift()
}
