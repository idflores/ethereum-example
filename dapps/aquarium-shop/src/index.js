/*
Copyright 2018 Israel Flores. All rights reserved.
Use of this source code is governed by a BSD-style
license that can be found in the LICENSE file.

Author:     Israel Flores (https://github.com/idflores)
File:       src/index.js
Purpose:    main entry file that sets up ReactJS app
*/

import React from 'react'
import ReactDOM from 'react-dom'

import StoreFront from './layouts/StoreFront'

ReactDOM.render(<StoreFront />, document.getElementById('app'))
