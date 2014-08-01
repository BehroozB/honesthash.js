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
   
<br/>
<br/>

### Problems of conventional hashes and honest hash solutions

A conventional result hash is:

**p:** too slow (DDoS problem) or too fast (cracking and rainbow([*][1]) tables)<br>
**s:** honest hash has an optional speed parameter
 
**p:** too long (when you store millions of 512 characters a long string in database)<br>
**s:** honest hash is only 40 characters long and without any collisions 

**p:** hashed only once and do not use any salt (tables have 43.745[*][2] billion results)<br>
**s:** honest hash has a **mandatory** salt and optional number of hashing

**p:** in different library for client and server side<br>
**s:** honest hash has just one implementation for Node.js and client JS

**p:** have known collisions (MD5, SHA0, SHA1..)<br>
**s:** honest hash uses internally SHA3-512 and RIPEMD-160 (not known collisions)

<br/>
<br/>

### How to use Honest Hash and how a result looks like?

**Shortest usage without options**

    console.log( require("./Honesthash.js")().hex("string") );
    > 1176e5c9188f73a5203656949848c19680ecc062

<br/>

**Short usage with salt and speed options**

    var options = { salt : "744bdf813e57252146", speed : 15000 };
    var result = require("./Honesthash.js")(options).hex("123");
    console.log(result);
    > e457227529744e2146bdf813e57259f256fd7cdc
    
<br/>
    
**Standard usage with more instances of the hash**

    var hashModule = require("./Honesthash.js");

    var development = hashModule({ speed: 1, salt: "1f5a5ab970a1945c91394", logs: true });
    var unitTesting = hashModule({ speed: 10000, salt: "159139413f5a5970a", logs: true });
    var production = hashModule({ speed: 10000, salt: "d73ce9fc1776ad4f", logs: false  });

    console.log( development.hex("123") );
    console.log( unitTesting.hex("123") );
    console.log( production.hex("123") );

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

 [1]: http://en.wikipedia.org/wiki/Rainbow_table  "Check what is a rainbow table on Wikipedia"
 [2]: http://www.hashkiller.co.uk/  "Try to crack your own MD5 hash"