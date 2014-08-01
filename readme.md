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

**Short usage with salt and speed options**

    var options = { salt : "744bdf813e57252146", speed : 15000 };
    var result = require("./Honesthash.js")(options).hex("123");
    
    console.log(result);
    > e457227529744e2146bdf813e57259f256fd7cdc
    
<br/>
    
**Standard usage with more instances of the hash**

    var hashModule = require("./Honesthash.js");

    var develHash = hashModule({ speed: 1, salt: "1f5a5ab970a1945c91394", logs: true });
    var testHash = hashModule({ speed: 10000, salt: "159139413f5a5970a", logs: true });
    var prodHash = hashModule({ speed: 10000, salt: "d73ce9fc1776ad4f", logs: false  });

    console.log( develHash.hex("123"), testHash.hex("123"), prodHash.hex("123") );

<br/>

**Shortest usage without options**

    console.log( require("./Honesthash.js")().hex("string") );
    > 1176e5c9188f73a5203656949848c19680ecc062

<br/>
<br/>

### Available options

    {
        (MANDATORY) salt: "1234567890", // your custom hash, can be any string
        (OPTIONAL) loop: 1, //  can be between 1 and 1000000
        (OPTIONAL) logs: false // logs everything to console (speed, hash, string)
    }

<br/>
<br/>

### Bechmark

For a full benchmark see file `docs/bechmark.md`, that contains results of our benchmark. We used iMac 2011
with OSX Yosimite and Node.js v10.17. Computer had installed 4GB RAM.

<br/>
<br/>

### How Honest Hash works?

**Hashing**

Honest Hash puts raw string to SHA512 with given salt. SHA3-512 is used because its the best implementation
of famous SHA serie and result is unique, without any collisions and strong. Problem is that is too long. This
SHA3 result is given to hashing function RIPE160 and it result is provided back.

    uniqButLong = SHA3-512("your string" + salt);
    shortAndUniq = RIPE160(uniqButLong + salt);
    
**Speed**  

Speed is inspired by Niels Provos([*][2]) and David Mazières and theirs **bcrypt**. Optional speed besides 
incorporating a salt protects against rainbow table attacks. Hashing iterates within a loop that is set by
optional parameter `speed`. Iteration makes hashing slower, so it remains resistant to brute-force search
attacks even with increasing computer power.

### Algorithm backward compatibility

Honest Hash is tested not just for English characters, but also for the Cyrillic script (1), numbers (2), special 
characters (3), Eastern European characters (4) and many others..

    1: `бвгдеёжзийклмнопрстуфхцчшщъыьэюя`
    2: `1234567890`
    3: `!@#$%^&*()_-+={[}]:;"'|\?/>.<,œ∑´†¥¨ˆπ¬˚∆˙ƒ∂ßåΩ≈ç√∫˜Ω`
    4: `ąàáäâãåæăăâćęèéëêìíïîîłńòóöôõøśșşțţùúüûñçżźа`

<br/>
<br/>

### Licence

 - Free for all projects (commercial and non-commercial)
 - MIT licenced
 - For security reasons - use please only the original repository

<br/>
<br/>

 [1]: http://en.wikipedia.org/wiki/Rainbow_table  "Check what is a rainbow table on Wikipedia"
 [2]: http://www.hashkiller.co.uk/  "Try to crack your own MD5 hash"
 [3]: http://en.wikipedia.org/wiki/Niels_Provos "Niels is a researcher in the areas of secure systems"