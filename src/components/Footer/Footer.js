/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Footer.css';
import Link from '../Link';

class Footer extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <span className={s.text}>
            4505 Spicewood Springs Road Suite 100, Austin, Texas 78759
            <span className={s.spacer}> | </span>
            <a href="tel:512-345-3955">(512) 345-3955</a>
            <span className={s.spacer}> | </span>
            <a href="mailto:druesink@earthlink.net">druesink@earthlink.net</a>
          </span>
          <br /><br />
          <span className={s.text}>© {new Date().getFullYear()} Donna McCoy Ruesink, D.D.S.</span>

        </div>
      </div>
    );
  }
}

export default withStyles(s)(Footer);
