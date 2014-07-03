

	"use strict";


	/**
	 *
	 */
	var Honesthash = function (options) {

		this._options = options;

		// Validate speed option, if is not entered, is negative, is NaN or is too big
		this._optionsValidationSpeed();

		// validate
		this._optionsValidationHash();

	};


	/**
	 *  validate hash from the options, if hash is not give, set a default hash
	 */
	Honesthash.prototype._optionsValidationHash = function () {

		// check if given hash is really instance and type of string
		var isTypeOfString = typeof this._options.hash == "string";
		var isInstanceOfString = this._options.hash instanceof String;
		var isValidString = isTypeOfString || isInstanceOfString;

		// if given hash is not a string, set hash to the default - the quote of the dude
		if (!isValidString){
			var quoteBigLebowski = "Does the female form make you uncomfortable, Mr. Lebowski?";
			console.log(quoteBigLebowski);
		}

	};


	/**
	 *  Validate speed option, if is not entered, is negative, is NaN or is too big
	 */
	Honesthash.prototype._optionsValidationSpeed = function () {

		// if someone is trying to set a speed option >500k
		if (this._options.speed<=0){
			this._options.speed = 1;
		}

		// if speed is NaN or is negative or zero
		var isNotNumber = isNaN(this._options.speed);
		var isNegativeOrZero = this._options.speed<=0;
		if (isNotNumber || isNegativeOrZero){
			this._options.speed = 1;
		}

		// if someone is trying to set a speed option >500k
		if (this._options.speed>500000){
			this._options.speed = 500000;
		}

	};


	/**
	 *
	 *  Returns simple standard SHA512 hash from given string
	 *
	 */
	Honesthash.prototype._implementationOfSha512 = function (givenRawString) {

		var Long = function (high, low) {
			this.high = high | 0;
			this.low = low | 0;
		};

		var HEX_CHARS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
		var HEX_TABLE = {
			'0': 0,
			'1': 1,
			'2': 2,
			'3': 3,
			'4': 4,
			'5': 5,
			'6': 6,
			'7': 7,
			'8': 8,
			'9': 9,
			'a': 10,
			'b': 11,
			'c': 12,
			'd': 13,
			'e': 14,
			'f': 15,
			'A': 10,
			'B': 11,
			'C': 12,
			'D': 13,
			'E': 14,
			'F': 15
		};

		var K = [new Long(0x428A2F98, 0xD728AE22), new Long(0x71374491, 0x23EF65CD),
			new Long(0xB5C0FBCF, 0xEC4D3B2F), new Long(0xE9B5DBA5, 0x8189DBBC),
			new Long(0x3956C25B, 0xF348B538), new Long(0x59F111F1, 0xB605D019),
			new Long(0x923F82A4, 0xAF194F9B), new Long(0xAB1C5ED5, 0xDA6D8118),
			new Long(0xD807AA98, 0xA3030242), new Long(0x12835B01, 0x45706FBE),
			new Long(0x243185BE, 0x4EE4B28C), new Long(0x550C7DC3, 0xD5FFB4E2),
			new Long(0x72BE5D74, 0xF27B896F), new Long(0x80DEB1FE, 0x3B1696B1),
			new Long(0x9BDC06A7, 0x25C71235), new Long(0xC19BF174, 0xCF692694),
			new Long(0xE49B69C1, 0x9EF14AD2), new Long(0xEFBE4786, 0x384F25E3),
			new Long(0x0FC19DC6, 0x8B8CD5B5), new Long(0x240CA1CC, 0x77AC9C65),
			new Long(0x2DE92C6F, 0x592B0275), new Long(0x4A7484AA, 0x6EA6E483),
			new Long(0x5CB0A9DC, 0xBD41FBD4), new Long(0x76F988DA, 0x831153B5),
			new Long(0x983E5152, 0xEE66DFAB), new Long(0xA831C66D, 0x2DB43210),
			new Long(0xB00327C8, 0x98FB213F), new Long(0xBF597FC7, 0xBEEF0EE4),
			new Long(0xC6E00BF3, 0x3DA88FC2), new Long(0xD5A79147, 0x930AA725),
			new Long(0x06CA6351, 0xE003826F), new Long(0x14292967, 0x0A0E6E70),
			new Long(0x27B70A85, 0x46D22FFC), new Long(0x2E1B2138, 0x5C26C926),
			new Long(0x4D2C6DFC, 0x5AC42AED), new Long(0x53380D13, 0x9D95B3DF),
			new Long(0x650A7354, 0x8BAF63DE), new Long(0x766A0ABB, 0x3C77B2A8),
			new Long(0x81C2C92E, 0x47EDAEE6), new Long(0x92722C85, 0x1482353B),
			new Long(0xA2BFE8A1, 0x4CF10364), new Long(0xA81A664B, 0xBC423001),
			new Long(0xC24B8B70, 0xD0F89791), new Long(0xC76C51A3, 0x0654BE30),
			new Long(0xD192E819, 0xD6EF5218), new Long(0xD6990624, 0x5565A910),
			new Long(0xF40E3585, 0x5771202A), new Long(0x106AA070, 0x32BBD1B8),
			new Long(0x19A4C116, 0xB8D2D0C8), new Long(0x1E376C08, 0x5141AB53),
			new Long(0x2748774C, 0xDF8EEB99), new Long(0x34B0BCB5, 0xE19B48A8),
			new Long(0x391C0CB3, 0xC5C95A63), new Long(0x4ED8AA4A, 0xE3418ACB),
			new Long(0x5B9CCA4F, 0x7763E373), new Long(0x682E6FF3, 0xD6B2B8A3),
			new Long(0x748F82EE, 0x5DEFB2FC), new Long(0x78A5636F, 0x43172F60),
			new Long(0x84C87814, 0xA1F0AB72), new Long(0x8CC70208, 0x1A6439EC),
			new Long(0x90BEFFFA, 0x23631E28), new Long(0xA4506CEB, 0xDE82BDE9),
			new Long(0xBEF9A3F7, 0xB2C67915), new Long(0xC67178F2, 0xE372532B),
			new Long(0xCA273ECE, 0xEA26619C), new Long(0xD186B8C7, 0x21C0C207),
			new Long(0xEADA7DD6, 0xCDE0EB1E), new Long(0xF57D4F7F, 0xEE6ED178),
			new Long(0x06F067AA, 0x72176FBA), new Long(0x0A637DC5, 0xA2C898A6),
			new Long(0x113F9804, 0xBEF90DAE), new Long(0x1B710B35, 0x131C471B),
			new Long(0x28DB77F5, 0x23047D84), new Long(0x32CAAB7B, 0x40C72493),
			new Long(0x3C9EBE0A, 0x15C9BEBC), new Long(0x431D67C4, 0x9C100D4C),
			new Long(0x4CC5D4BE, 0xCB3E42B6), new Long(0x597F299C, 0xFC657E2A),
			new Long(0x5FCB6FAB, 0x3AD6FAEC), new Long(0x6C44198C, 0x4A475817)
		];

		var sha2 = function (message, tbit) {
			var blocks = hasUTF8(message) ? UTF8toBlocks(message) : ASCIItoBlocks(message);

			if (tbit == 512) {
				var h0 = new Long(0x6A09E667, 0xF3BCC908);
				var h1 = new Long(0xBB67AE85, 0x84CAA73B);
				var h2 = new Long(0x3C6EF372, 0xFE94F82B);
				var h3 = new Long(0xA54FF53A, 0x5F1D36F1);
				var h4 = new Long(0x510E527F, 0xADE682D1);
				var h5 = new Long(0x9B05688C, 0x2B3E6C1F);
				var h6 = new Long(0x1F83D9AB, 0xFB41BD6B);
				var h7 = new Long(0x5BE0CD19, 0x137E2179);
			} else if (tbit == 384) {
				var h0 = new Long(0xCBBB9D5D, 0xC1059ED8);
				var h1 = new Long(0x629A292A, 0x367CD507);
				var h2 = new Long(0x9159015A, 0x3070DD17);
				var h3 = new Long(0x152FECD8, 0xF70E5939);
				var h4 = new Long(0x67332667, 0xFFC00B31);
				var h5 = new Long(0x8EB44A87, 0x68581511);
				var h6 = new Long(0xDB0C2E0D, 0x64F98FA7);
				var h7 = new Long(0x47B5481D, 0xBEFA4FA4);
			} else if (tbit == 256) {
				var h0 = new Long(0x22312194, 0xFC2BF72C);
				var h1 = new Long(0x9F555FA3, 0xC84C64C2);
				var h2 = new Long(0x2393B86B, 0x6F53B151);
				var h3 = new Long(0x96387719, 0x5940EABD);
				var h4 = new Long(0x96283EE2, 0xA88EFFE3);
				var h5 = new Long(0xBE5E1E25, 0x53863992);
				var h6 = new Long(0x2B0199FC, 0x2C85B8AA);
				var h7 = new Long(0x0EB72DDC, 0x81C52CA2);
			} else if (tbit == 224) {
				var h0 = new Long(0x8C3D37C8, 0x19544DA2);
				var h1 = new Long(0x73E19966, 0x89DCD4D6);
				var h2 = new Long(0x1DFAB7AE, 0x32FF9C82);
				var h3 = new Long(0x679DD514, 0x582F9FCF);
				var h4 = new Long(0x0F6D2B69, 0x7BD44DA8);
				var h5 = new Long(0x77E36F73, 0x04C48942);
				var h6 = new Long(0x3F9D85A8, 0x6A1D36C8);
				var h7 = new Long(0x1112E6AD, 0x91D692A1);
			}

			for (var i = 0, length = blocks.length; i < length; i += 16) {
				var w = [],
					s0, s1;
				for (var j = 0; j < 16; ++j)
					w[j] = blocks[i + j];
				for (var j = 16; j < 80; ++j) {
					s0 = w[j - 15].rightRotate(1).xor(w[j - 15].rightRotate(8)).xor(w[j - 15].shiftRightUnsigned(7));
					s1 = w[j - 2].rightRotate(19).xor(w[j - 2].rightRotate(61)).xor(w[j - 2].shiftRightUnsigned(6));
					w[j] = w[j - 16].add(s0).add(w[j - 7]).add(s1);
				}

				var a = h0;
				var b = h1;
				var c = h2;
				var d = h3;
				var e = h4;
				var f = h5;
				var g = h6;
				var h = h7;
				var maj, t1, t2, ch;

				for (var j = 0; j < 80; ++j) {
					s0 = a.rightRotate(28).xor(a.rightRotate(34)).xor(a.rightRotate(39));
					maj = a.and(b).xor(a.and(c)).xor(b.and(c));
					t2 = s0.add(maj);
					s1 = e.rightRotate(14).xor(e.rightRotate(18)).xor(e.rightRotate(41));
					ch = e.and(f).xor(e.not().and(g));
					t1 = h.add(s1).add(ch).add(K[j]).add(w[j]);

					h = g;
					g = f;
					f = e;
					e = d.add(t1);
					d = c;
					c = b;
					b = a;
					a = t1.add(t2);
				}

				h0 = h0.add(a);
				h1 = h1.add(b);
				h2 = h2.add(c);
				h3 = h3.add(d);
				h4 = h4.add(e);
				h5 = h5.add(f);
				h6 = h6.add(g);
				h7 = h7.add(h);
			}

			var hex = h0.toHexString() + h1.toHexString() + h2.toHexString() + h3.toHexString();
			if (tbit == 224)
				return hex.substr(0, hex.length - 8);
			if (tbit >= 384)
				hex += h4.toHexString() + h5.toHexString();
			if (tbit == 512)
				hex += h6.toHexString() + h7.toHexString();
			return hex;
		};

		var hasUTF8 = function (message) {
			var i = message.length;
			while (i--)
				if (message.charCodeAt(i) > 255)
					return true;
			return false;
		};

		var ASCIItoBlocks = function (message) {
			// a block is 32 bits(4 bytes), a chunk is 1024 bits(128 bytes)
			var length = message.length;
			var chunkCount = ((length + 16) >> 7) + 1;
			var blockCount = chunkCount << 5; // chunkCount * 32
			var blocks = [];
			var i;
			for (i = 0; i < blockCount; ++i)
				blocks[i] = 0;
			for (i = 0; i < length; ++i)
				blocks[i >> 2] |= message.charCodeAt(i) << (3 - (i % 4) << 3);
			blocks[i >> 2] |= 0x80 << (3 - (i % 4) << 3);
			blocks[blockCount - 1] = length << 3; // length * 8
			var blocks64 = [];
			for (i = 0; i < blockCount; i += 2)
				blocks64[i >> 1] = new Long(blocks[i], blocks[i + 1]);
			return blocks64;
		};

		var UTF8toBlocks = function (message) {
			var uri = encodeURIComponent(message);
			var blocks = [];
			for (var i = 0, bytes = 0, length = uri.length; i < length; ++i) {
				var c = uri.charCodeAt(i);
				if (c == 37) // %
					blocks[bytes >> 2] |= ((HEX_TABLE[uri.charAt(++i)] << 4) | HEX_TABLE[uri.charAt(++i)]) << (3 - (bytes % 4) << 3);
				else
					blocks[bytes >> 2] |= c << (3 - (bytes % 4) << 3);
				++bytes;
			}
			var chunkCount = ((bytes + 16) >> 7) + 1;
			var blockCount = chunkCount << 5; // chunkCount * 32
			var index = bytes >> 2;
			blocks[index] |= 0x80 << (3 - (bytes % 4) << 3);
			for (var i = index + 1; i < blockCount; ++i)
				blocks[i] = 0;
			blocks[blockCount - 1] = bytes << 3; // bytes * 8
			var blocks64 = [];
			for (i = 0; i < blockCount; i += 2)
				blocks64[i >> 1] = new Long(blocks[i], blocks[i + 1]);
			return blocks64;
		};

		var toHexString = function (num) {
			var hex = "";
			for (var i = 0; i < 4; i++) {
				var offset = 3 - i << 3;
				hex += HEX_CHARS[(num >> (offset + 4)) & 0x0F] + HEX_CHARS[(num >> offset) & 0x0F];
			}
			return hex;
		};

		Long.prototype.and = function (other) {
			return new Long(this.high & other.high, this.low & other.low);
		};

		Long.prototype.xor = function (other) {
			return new Long(this.high ^ other.high, this.low ^ other.low);
		};

		Long.prototype.not = function () {
			return new Long(~this.high, ~this.low);
		};

		Long.prototype.shiftRightUnsigned = function (numBits) {
			numBits &= 63;
			if (numBits == 0)
				return new Long(this.high, this.low);
			if (numBits < 32)
				return new Long(this.high >>> numBits, (this.low >>> numBits) | (this.high << (32 - numBits)));
			else if (numBits == 32)
				return new Long(0, this.high);
			else
				return new Long(0, this.high >>> (numBits - 32));
		};

		Long.prototype.rightRotate = function (numBits) {
			numBits &= 63;
			if (numBits == 0)
				return new Long(this.high, this.low);
			if (numBits < 32)
				return new Long((this.high >>> numBits) | (this.low << (32 - numBits)), (this.low >>> numBits) | (this.high << (32 - numBits)));
			else if (numBits == 32)
				return new Long(this.low, this.high);
			else
				return new Long((this.low >>> (numBits - 32)) | (this.high << (64 - numBits)), (this.high >>> (numBits - 32)) | (this.low << (64 - numBits)));
		};

		Long.prototype.add = function (other) {
			var a1 = this.low & 0xFFFF;
			var a2 = this.low >>> 16;
			var a3 = this.high & 0xFFFF;
			var a4 = this.high >>> 16;

			var b1 = other.low & 0xFFFF;
			var b2 = other.low >>> 16;
			var b3 = other.high & 0xFFFF;
			var b4 = other.high >>> 16;

			var c1 = a1 + b1;
			var c2 = a2 + b2 + (c1 >>> 16);
			var c3 = a3 + b3 + (c2 >>> 16);
			var c4 = a4 + b4 + (c3 >>> 16);
			return new Long((c4 << 16) | (c3 & 0xFFFF), (c2 << 16) | (c1 & 0xFFFF));
		};

		Long.prototype.toHexString = function () {
			return toHexString(this.high) + toHexString(this.low);
		};

		return sha2(givenRawString, 512);

	};


	/**
	 *
	 *  Returns simple standard RIPEMD160 hash from given string
	 *
	 */
	Honesthash.prototype._implementationOfRipemd160 = function (givenRawString) {


		var hexcase = 0;
		var b64pad = "";

		function rstr_rmd160(s) {
			return binl2rstr(binl_rmd160(rstr2binl(s), s.length * 8));
		}

		function rstr2hex(input) {
			try {
				hexcase
			} catch (e) {
				hexcase = 0;
			}
			var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
			var output = "";
			var x;
			for (var i = 0; i < input.length; i++) {
				x = input.charCodeAt(i);
				output += hex_tab.charAt((x >>> 4) & 0x0F) + hex_tab.charAt(x & 0x0F);
			}
			return output;
		}

		function str2rstr_utf8(input) {
			var output = "";
			var i = -1;
			var x, y;

			while (++i < input.length) {
				x = input.charCodeAt(i);
				y = i + 1 < input.length ? input.charCodeAt(i + 1) : 0;
				if (0xD800 <= x && x <= 0xDBFF && 0xDC00 <= y && y <= 0xDFFF) {
					x = 0x10000 + ((x & 0x03FF) << 10) + (y & 0x03FF);
					i++;
				}

				if (x <= 0x7F)
					output += String.fromCharCode(x);
				else if (x <= 0x7FF)
					output += String.fromCharCode(0xC0 | ((x >>> 6) & 0x1F),
							0x80 | (x & 0x3F));
				else if (x <= 0xFFFF)
					output += String.fromCharCode(0xE0 | ((x >>> 12) & 0x0F),
							0x80 | ((x >>> 6) & 0x3F),
							0x80 | (x & 0x3F));
				else if (x <= 0x1FFFFF)
					output += String.fromCharCode(0xF0 | ((x >>> 18) & 0x07),
							0x80 | ((x >>> 12) & 0x3F),
							0x80 | ((x >>> 6) & 0x3F),
							0x80 | (x & 0x3F));
			}
			return output;
		}

		function rstr2binl(input) {
			var output = Array(input.length >> 2);
			for (var i = 0; i < output.length; i++)
				output[i] = 0;
			for (var i = 0; i < input.length * 8; i += 8)
				output[i >> 5] |= (input.charCodeAt(i / 8) & 0xFF) << (i % 32);
			return output;
		}

		function binl2rstr(input) {
			var output = "";
			for (var i = 0; i < input.length * 32; i += 8)
				output += String.fromCharCode((input[i >> 5] >>> (i % 32)) & 0xFF);
			return output;
		}

		function binl_rmd160(x, len) {
			x[len >> 5] |= 0x80 << (len % 32);
			x[(((len + 64) >>> 9) << 4) + 14] = len;

			var h0 = 0x67452301;
			var h1 = 0xefcdab89;
			var h2 = 0x98badcfe;
			var h3 = 0x10325476;
			var h4 = 0xc3d2e1f0;

			for (var i = 0; i < x.length; i += 16) {
				var T;
				var A1 = h0,
					B1 = h1,
					C1 = h2,
					D1 = h3,
					E1 = h4;
				var A2 = h0,
					B2 = h1,
					C2 = h2,
					D2 = h3,
					E2 = h4;
				for (var j = 0; j <= 79; ++j) {
					T = safe_add(A1, rmd160_f(j, B1, C1, D1));
					T = safe_add(T, x[i + rmd160_r1[j]]);
					T = safe_add(T, rmd160_K1(j));
					T = safe_add(bit_rol(T, rmd160_s1[j]), E1);
					A1 = E1;
					E1 = D1;
					D1 = bit_rol(C1, 10);
					C1 = B1;
					B1 = T;
					T = safe_add(A2, rmd160_f(79 - j, B2, C2, D2));
					T = safe_add(T, x[i + rmd160_r2[j]]);
					T = safe_add(T, rmd160_K2(j));
					T = safe_add(bit_rol(T, rmd160_s2[j]), E2);
					A2 = E2;
					E2 = D2;
					D2 = bit_rol(C2, 10);
					C2 = B2;
					B2 = T;
				}
				T = safe_add(h1, safe_add(C1, D2));
				h1 = safe_add(h2, safe_add(D1, E2));
				h2 = safe_add(h3, safe_add(E1, A2));
				h3 = safe_add(h4, safe_add(A1, B2));
				h4 = safe_add(h0, safe_add(B1, C2));
				h0 = T;
			}
			return [h0, h1, h2, h3, h4];
		}

		function rmd160_f(j, x, y, z) {
			return (0 <= j && j <= 15) ? (x ^ y ^ z) :
				(16 <= j && j <= 31) ? (x & y) | (~x & z) :
					(32 <= j && j <= 47) ? (x | ~y) ^ z :
						(48 <= j && j <= 63) ? (x & z) | (y & ~z) :
							(64 <= j && j <= 79) ? x ^ (y | ~z) :
								"rmd160_f: j out of range";
		}

		function rmd160_K1(j) {
			return (0 <= j && j <= 15) ? 0x00000000 :
				(16 <= j && j <= 31) ? 0x5a827999 :
					(32 <= j && j <= 47) ? 0x6ed9eba1 :
						(48 <= j && j <= 63) ? 0x8f1bbcdc :
							(64 <= j && j <= 79) ? 0xa953fd4e :
								"rmd160_K1: j out of range";
		}

		function rmd160_K2(j) {
			return (0 <= j && j <= 15) ? 0x50a28be6 :
				(16 <= j && j <= 31) ? 0x5c4dd124 :
					(32 <= j && j <= 47) ? 0x6d703ef3 :
						(48 <= j && j <= 63) ? 0x7a6d76e9 :
							(64 <= j && j <= 79) ? 0x00000000 :
								"rmd160_K2: j out of range";
		}
		var rmd160_r1 = [
			0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
			7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8,
			3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12,
			1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2,
			4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13
		];
		var rmd160_r2 = [
			5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12,
			6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2,
			15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13,
			8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14,
			12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11
		];
		var rmd160_s1 = [
			11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8,
			7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12,
			11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5,
			11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12,
			9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6
		];
		var rmd160_s2 = [
			8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6,
			9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11,
			9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5,
			15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8,
			8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11
		];

		function safe_add(x, y) {
			var lsw = (x & 0xFFFF) + (y & 0xFFFF);
			var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
			return (msw << 16) | (lsw & 0xFFFF);
		}

		function bit_rol(num, cnt) {
			return (num << cnt) | (num >>> (32 - cnt));
		}

		return rstr2hex(rstr_rmd160(str2rstr_utf8(givenRawString)));

	};


	/**
	 *
	 *  Returns simple standard RIPEMD160 hash from given string
	 *
	 */
	Honesthash.prototype.hashHex = function (wannaBeHashed) {

		var hashedStringWithSha512 = this._implementationOfSha512(
				wannaBeHashed + this._options.hash
		);

		var hashedSecondTimeWithSha512 = this._implementationOfSha512(
				hashedStringWithSha512 + this._options.hash
		);

		var hashedStringWithRipe160 = this._implementationOfRipemd160(
				hashedSecondTimeWithSha512 + this._options.hash
		);

		var hashedAgainInLoop = hashedStringWithRipe160;
		for (var i = 0; i < this._options.speed; i++) {
			hashedAgainInLoop = this._implementationOfRipemd160(hashedAgainInLoop);
		}

		return hashedAgainInLoop;

	};


	/**
	 *  Check if given second parameter is really a hash result of the first string
	 */
	Honesthash.prototype.testBackwardCompatibility = function (colletionOfHashingPairs) {

		// save state and later set back to this values
		var hashState = this._options.hash;
		var speedState = this._options.speed;

		// reset options for
		this._options.hash = "";
		this._options.speed = 1;

		var that = this;

		colletionOfHashingPairs.forEach(function(pair){
			// get result - if everything is OK, should be true
			var isTestedFine = ( that.hashHex(pair[0]) === pair[1] );
			if (!isTestedFine) throw "something is very very wrong and algorithm is broken!";
		});

		// revert options to before values
		this._options.hash = hashState;
		this._options.speed = speedState;

		console.log("Test passed OK, backward compatibility is fine in all alphabets!");
		return "Test passed OK, backward compatibility is fine in all alphabets!";

	};


	var hashThisShit = new Honesthash({
		hash: "",
		speed: 10,
		logs : true
	});

	hashThisShit.hashHex("test");
