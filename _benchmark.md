# Benchmark Honesthash.js

**When should I read this documentation?**

When you are interested in benchmark, speed and performance of Honesthash.js
and you want to know the difference between configuration of library with more
loops.

**What computer was used for benchmarks?**

This test was benchmarked with Node.js v10.17 in 03/07/2014. Used configuration:
OS X Yosemite (10.10). Mac (Mid 2011). Processor (2.7 GHz Intel Core i5). Memory
(12 GB 1333 MHz DDR3).

**Where can I find code of the benchmark?**

	Honesthash.prototype.bechmarkSpeedOfHashing = function () {

		console.log( "1", this._benchmarkParticularConf(1, "a") );
		console.log( "10", this._benchmarkParticularConf(10, "a") );
		console.log( "100", this._benchmarkParticularConf(100, "a") );
		console.log( "1000", this._benchmarkParticularConf(1000, "a") );
		console.log( "10000", this._benchmarkParticularConf(10000, "a") );
		console.log( "100000", this._benchmarkParticularConf(100000, "a") );

	};

	Honesthash.prototype._benchmarkParticularConf = function (speed, string) {

		this._options.loop = speed;
		var start = +new Date();
		this.hashHex(string);
		return (+new Date() - start);

	};

**Results**

	1st         1       4 ms
    2nd        10       2 ms
    3rd       100       6 ms
    4th      1000      34 ms
    5th     10000     235 ms
    6th    100000    2328 ms
    7th   1000000   22798 ms

**How to run your own benchmark on your own machine?**

	var myHonesthash = new Honesthash();
	myHonesthash.bechmarkSpeedOfHashing();
