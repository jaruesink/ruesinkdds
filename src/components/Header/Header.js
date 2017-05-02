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
import s from './Header.css';
import bg from './bluebonnet.jpg';
// import Link from '../Link';
import Navigation from '../Navigation';

class Header extends React.Component {
  render() {
    return (
      <div className={s.root} style={{ backgroundImage: `url(${bg})` }}>
        <div className={s.container}>
          <Navigation />
          <div className={s.banner}>
            <h1 className={s.bannerTitle}>Donna McCoy Ruesink,&nbsp;D.D.S.</h1>
          </div>
          <div className={s.cta}>Call <a href={'tel:512-345-3955'}>512-345-3955</a></div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Header);
