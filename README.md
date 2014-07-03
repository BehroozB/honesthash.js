# Honesthash.js

Fast, secure, salted and short unique hash in Javascript and Node.js

## How to use

**Node.js**



---

## Options

	{
		salt: "", // your custom hash, can be any string
		loop: 1, // can be between 1 and 1000000
		logs : false // logs everything to console (speed, hash, string)
	}

---

## Problems

 - Hashes are too long, they must be short
 - Hashes do hash only once
 - Hashing time must be optional
 - Hashing must work client-side
 - Hashing only with hashes for-now without collisions
 - Hash must be deployed CDN
 - Hash must be extremely fast if necessary
 - Hash must be open

---

## Bechmark

See **_bechmark.md** file with specification, how to and results of ours benchmark. We benchmarked
iMac 2011 with OS X Yosemite and  Node.js v10.17.

---

## Test of the algorithm backward compatibility

Testing of backward compatibility is very important not just for standard US/EU latin charactes,
but also for special characters, the cyrillic script, spaces, the greek alphabet and diacritics.

	var myHonestHashInstance = new require("Honesthash")();
	myHonestHashInstance.testBackwardCompatibility();
	// > "Test passed OK, backward compatibility is fine in all alphabets!"

For backward compatiblity are tested these strings:

	`387597980370502395793203798345`
	`kjnskjnfiwjiofpfjadnskavjandkj`
	`JKDJOIQJIDQMNMSANKNOIQWJQOISJD`
	`ΑαΒβΓγΔδΕεΖζΗηΘθΙιΚκΛλΜμΜμΞξΦφ`
	`šľéáíáčíéíýžýťľáíľéčáľíšýčľšýá`
	`АБВГДЕЖЅZЗИІКЛМНОПҀРСТȢѸФХѾЦЧШ`
	`äöüÄÖÜëḧïẅẍÿËḦÏẄẌŸäöüÄÖÜëḧïẅẍÿ`
	`,./ ;']= -- `~@!%^^*&*()!_@#^%`

---

## Licence

 - Can be used on all projects (free for private and commercial use)
 - Use only from the orignal repository (security can be compromised)
 - MIT Licence (full article written in LICENCE.md)
 - Author ~ Samuel Ondrek, twitter.com/ondrek
