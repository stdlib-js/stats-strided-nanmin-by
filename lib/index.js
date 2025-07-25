/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

/**
* Compute the minimum value of a strided array via a callback function and ignoring `NaN` values.
*
* @module @stdlib/stats-strided-nanmin-by
*
* @example
* var nanminBy = require( '@stdlib/stats-strided-nanmin-by' );
*
* function accessor( v ) {
*     return v * 2.0;
* }
*
* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, NaN, 0.0, -1.0, -3.0 ];
*
* var v = nanminBy( x.length, x, 1, accessor );
* // returns -10.0
*
* @example
* var nanminBy = require( '@stdlib/stats-strided-nanmin-by' );
*
* function accessor( v ) {
*     return v * 2.0;
* }
*
* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, NaN, 0.0, -1.0, -3.0 ];
*
* var v = nanminBy.ndarray( x.length, x, 1, 0, accessor );
* // returns -10.0
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var ndarray = require( './ndarray.js' );


// MAIN //

setReadOnly( main, 'ndarray', ndarray );


// EXPORTS //

module.exports = main;

// exports: { "ndarray": "main.ndarray" }
