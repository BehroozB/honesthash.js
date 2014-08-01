# Honest Hash

## The best hashing algorithm for speed, uniqueness, speed and length for Javascript

<br/>
<br/>

### When should I use HonestHash.js?

When you:  
 
  - want use one library for client and server side
  - love open source
  - need a very short, but still unique hash
  - need a configurable own speed of hashing
   

### Problems of conventional hashes

A result hash is:

 - too slow (DDoS problem) or too fast (cracking and rainbow([~][id]) tables) 

 - Hash is too slow or too fast
   - Honesthash has optional speed
 - Modern hashes (SHA2-512) hashes are too long
   - Honesthash is always long only 40 characters long
 - Hashes normally hash only once
   - Honesthash has optional loop
 - Hashing must work client-side
   - Honesthash is going to be implemented also for client (august 2014)
 - Hashes has known collisions
   - Honesthash uses SHA3 512 and RIPE160
 - Hash must be extremely fast if necessary
   - Honesthash needs only 4ms (see _benchmark.md)
 - Hash must be open source
   - Security != Secret, and never will be!


<br/>
<br/>

### How to use

** Longer and nicer **

	var hashModule = require("./Honesthash.js");

	var developmentEnv = hashModule({
		loop : 1,
		salt : "abcd",
		logs : true
	});

	var unitTestingEnv = hashModule({
		loop : 1000,
		salt : "abcd",
		logs : true
	});

	var productionEnv = hashModule({
		loop : 10000,
		salt : "AMSDLMASLKDMALSDKADMKLASMDKLASD",
		logs : false
	});

	console.log( developmentEnv.hex("123") );
	console.log( unitTestingEnv.hex("123") );
	console.log( productionEnv.hex("123") );

	// > a465b7e074a149446cbd80d3be041193055cc973
	// > 23a292d0891d3135e1f5a5970a15913942b5a6da
	// > c6a6e35a624776ad4fd73ce9fc1b2ad2caa7ac3a

<br/>

** Short with options **


	var result = require("./Honesthash.js")({
		salt : "",
		loop : 15000
	}).hex("123");

	console.log(result);
	// > e457227529744e2146bdf813e57259f256fd7cdc

<br/>

** Short without options **


	console.log( require("./Honesthash.js")().hex("123") );
	// > 1176e5c9188f73a5203656949848c19680ecc062

<br/>
<br/>

### Options

	{
		salt: "", // your custom hash, can be any string
		loop: 1, // can be between 1 and 1000000
		logs : false // logs everything to console (speed, hash, string)
	}

<br/>
<br/>

### Bechmark

See **_bechmark.md** file with specification, how to and results of ours benchmark. We benchmarked
iMac 2011 with OS X Yosemite and  Node.js v10.17.

<br/>
<br/>

### Test of the algorithm backward compatibility

Testing of backward compatibility is very important not just for standard US/EU latin charactes,
but also for special characters, the cyrillic script, spaces, the greek alphabet and diacritics.

	var myHonestHashInstance = new require("Honesthash")();
	myHonestHashInstance.testBackwardCompatibility();
	// > "Test passed OK, backward compatibility is fine in all alphabets!"

For backward compatiblity are tested these strings:

	"387597980370502395793203798345"
	"kjnskjnfiwjiofpfjadnskavjandkj"
	"JKDJOIQJIDQMNMSANKNOIQWJQOISJD"
	"ΑαΒβΓγΔδΕεΖζΗηΘθΙιΚκΛλΜμΜμΞξΦφ"
	"šľéáíáčíéíýžýťľáíľéčáľíšýčľšýá"
	"АБВГДЕЖЅZЗИІКЛМНОПҀРСТȢѸФХѾЦЧШ"
	"äöüÄÖÜëḧïẅẍÿËḦÏẄẌŸäöüÄÖÜëḧïẅẍÿ"
	",./ ;']= -- `~@!%^^*&*()!_@#^%"

<br/>
<br/>

### Licence

 - Can be used on all projects (free for private and commercial use)
 - Use only from the orignal repository (security can be compromised)
 - MIT Licence (full article written in LICENCE.md)
 - Author ~ Samuel Ondrek, twitter.com/ondrek

<br/>
<br/>

 [id]: http://example.com/  "Optional Title Here"