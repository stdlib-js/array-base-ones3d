/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { Collection } from '@stdlib/types/array';

/**
* Returns a three-dimensional nested array filled with ones.
*
* @param shape - array shape
* @returns output array
*
* @example
* var out = ones3d( [ 1, 1, 3 ] );
* // returns [ [ [ 1.0, 1.0, 1.0 ] ] ]
*/
declare function ones3d( shape: Collection<number> ): Array<Array<Array<number>>>;


// EXPORTS //

export = ones3d;
