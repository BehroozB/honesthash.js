Honesthash.js
=============

Fast, secure, salted and short unique hash in Javascript and Node.js

## Options


## Problems

 - Hashes are too long, they must be short
 - Hashes do hash only once
 - Hashing time must be optional
 - Hashing must work client-side
 - Hashing only with hashes for-now without collisions
 - Hash must be deployed CDN
 - Hash must be extremely fast if necessary
 - Hash must be open

## Bechmark



## Test of the algorithm backward compatibility

Testing of backward compatibility is very important not just for standard US/EU latin charactes,
but also for special characters, the cyrillic script, spaces, the greek alphabet and diacritics.

	var myHonestHashInstance = new Honesthash();

	myHonestHashInstance.testBackwardCompatibility([
		[ "387597980370502395793203798345", "790902594dfef53b4bf6fdcbc20085bc5af5d548" ],
		[ "kjnskjnfiwjiofpfjadnskavjandkj", "c301c54c063bf969a5d6ad2d28857d4ed9da4bb6" ],
		[ "JKDJOIQJIDQMNMSANKNOIQWJQOISJD", "575e901e9d3ad4aa7e690e24f78072d77b983d2e" ],
		[ "ΑαΒβΓγΔδΕεΖζΗηΘθΙιΚκΛλΜμΜμΞξΦφ", "b291aa343a47554e4459d8b089025eebfeab1202" ],
		[ "šľéáíáčíéíýžýťľáíľéčáľíšýčľšýá", "a2e91cf422a3fa72f381cec9bf08844764557318" ],
		[ "АБВГДЕЖЅZЗИІКЛМНОПҀРСТȢѸФХѾЦЧШ", "9353a5ab79cb0d8da38a778a365385332370e497" ],
		[ "äöüÄÖÜëḧïẅẍÿËḦÏẄẌŸäöüÄÖÜëḧïẅẍÿ", "d82ad7b0b30e015e49b7743b7ce91e375227bb6f" ],
		[ ",./ ;']= -- `~@!%^^*&*()!_@#^%", "be70347a5602b8806b31d20ac6982d2b4ce3ce75" ]
	]);

	// > "Test passed OK, backward compatibility is fine in all alphabets!"

## Licence

 - Can be used on all projects (free for private and commercial use)
 - Use only from the orignal repository (security can be compromised)
 - MIT Licence (full article written in LICENCE.md)
 - Author ~ Samuel Ondrek, twitter.com/ondrek
