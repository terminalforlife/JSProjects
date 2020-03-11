//!/usr/bin/nodejs --throw-deprecated

//-----------------------------------------------------------------------------
// Project Name      - JSProjects/source/lsbins.js
// Started On        - Wed 11 Mar 16:13:33 GMT 2020
// Last Change       - Wed 11 Mar 16:33:17 GMT 2020
// Author E-Mail     - terminalforlife@yahoo.com
// Author GitHub     - https://github.com/terminalforlife
//-----------------------------------------------------------------------------
// Testing to see how much of lsbins(1) functionality I can replicate with JS.
//-----------------------------------------------------------------------------

var CurVer = '2020-03-11'
var Progrm = 'lsbins'

// Rudimentary argument processing.
var Count = 0
for (Arg in process.argv){
	// Need to count the arguments, unless there's a better way.
	Count++

	// An `if` statement in short-form. No braces needed, but parentheses
	// are, unlike in languages like Perl.
	//
	// The reason I'm skipping 0, 1, and 2, is that they seem to not actually
	// be the arguments to the script, but rather, some of the arguments to
	// Node.js, or something. In any case, I only want the regular arguments.
	if (Count <= 2) continue

	// I'd like to have Arg equal the value of the current argument, not its
	// index, but I'm not sure how to do that, so I'm doing it this way.
	//console.log('Argument: ' + process.argv[Arg])

	// Using REGEX in this statement seems to be the same as in Perl.
	if (process.argv[Arg] =~ /^(--version|-v)$/){
		console.log(CurVer)
	}
}


