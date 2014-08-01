(function(){


    "use strict";


    var honesthashModule = require("../honesthash");


    function benchmarkParticularConf(speed, string){

        var options = { speed: speed };
        var honestHash = honesthashModule(options);

        var startTime = +new Date();
        /* get hash functions */ honestHash.hex(string);
        var endTime = +new Date();

        return (endTime - startTime);

    }

    console.log("1st 1", benchmarkParticularConf(1, "a")); // 7
    console.log("2nd 10", benchmarkParticularConf(10, "a")); // 4
    console.log("3rd 100", benchmarkParticularConf(100, "a")); // 5
    console.log("4th 1000", benchmarkParticularConf(1000, "a")); // 32
    console.log("5th 10000", benchmarkParticularConf(10000, "a")); // 244
    console.log("6th 100000", benchmarkParticularConf(100000, "a")); // 2300
    console.log("7th 1000000", benchmarkParticularConf(1000000, "a")); // 12234

})();


