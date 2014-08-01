(function(){


    "use strict";


    var allStringsOk = true;


    var TESTED_HASH = [
        ["387597980370502395793203798345", "a7f62e967837161d0ba0d473547086c51d9f0c79"],
        ["kjnskjnfiwjiofpfjadnskavjandkj", "3b889a9d823573a3c1a56639bf31d799b4391889"],
        ["JKDJOIQJIDQMNMSANKNOIQWJQOISJD", "42ae1eb2221483bc2da65ef83c42fdfaaf7572fd"],
        ["ΑαΒβΓγΔδΕεΖζΗηΘθΙιΚκΛλΜμΜμΞξΦφ", "1b04f1fd84a4bfdd3279f0e9cd5d7bbb219b67c3"],
        ["šľéáíáčíéíýžýťľáíľéčáľíšýčľšýá", "9d49d2b3388f009dcbfe44ae636cadd94b1a1fb1"],
        ["äöüÄÖÜëḧïẅẍÿËḦÏẄẌŸäöüÄÖÜëḧïẅẍÿ", "063fabae119aaa298606ed8db9cf3af73346335d"],
        ["a b c d e f g h i j k l m n o ", "a14e4a9c742902a157cbad4b9281d9aaf385f4e3"],
        ["abcdefgihjklmnoprstuwxyzabcdef", "407b4e01907caa4500f74d98a8962371e9df4820"]
    ];


    var honesthash = require("../honesthash")();


    TESTED_HASH.forEach(function(pair) {
        var rawString = pair[0];
        var hashedHex = pair[1];
        var isEqual = (honesthash.hex(rawString)===hashedHex);
        if (!isEqual) { allStringsOk = false; }
    });


    if (allStringsOk){
        console.log("HonestHash.js is compatible and everything is OK!");
    } else {
        console.error("!!!\n!!! HonestHash.js is not backward compatible\n!!!");
    }

})();


