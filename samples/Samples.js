

	/** Longer and nicer */


		var hashModule = require("./../Honesthash.js");

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



	/** Short with options */


		var result = require("./../Honesthash.js")({
			salt : "",
			loop : 15000
		}).hex("123");

		console.log(result);
		// > e457227529744e2146bdf813e57259f256fd7cdc



	/** Short without options */


		console.log( require("./../Honesthash.js")().hex("123") );
		// > 1176e5c9188f73a5203656949848c19680ecc062
