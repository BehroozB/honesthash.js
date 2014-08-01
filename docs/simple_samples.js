(function(){


    "use strict";


    var hashModule = require("./../honesthash.js");


    var developmentEnv = hashModule({
        speed : 1,
        salt : ""
    });

    /*
    var unitTestingEnv = hashModule({
        speed : 1000,
        salt : "abcd",
        logs : false
    });

    var productionEnv = hashModule({
        speed : 10000,
        salt : "AMSDLMASLKDMALSDKADMKLASMDKLASD",
        logs : false
    });
    */


    console.log( developmentEnv.hex("123") );
    // console.log( unitTestingEnv.hex("123") );
    // console.log( productionEnv.hex("123") );

    // > e457227529744e2146bdf813e57259f256fd7cdc
    // > 23a292d0891d3135e1f5a5970a15913942b5a6da
    // > c6a6e35a624776ad4fd73ce9fc1b2ad2caa7ac3a


})();