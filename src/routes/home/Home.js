/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';

class Home extends React.Component {
  static propTypes = {
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>Welcome to Our Practice</h1>
          <div className={s.row}>
            <p>
              <img src={'./office_outside.jpg'} alt={'Outside view of the office'} />
              We are a small personal family practice. My staff and I take pride in giving quality care and individualized attention to our patients. We value your time and schedule appointments to try to minimize waiting time in our office. We believe that your comfort during treatment is of the utmost importance, and we will do our best to ensure that your office visit will be efficient and pleasant.<br /><br />Our dedication to the education of our patients and staff supports exceptional service in a caring environment.
            </p>
          </div>
          <div className={s.mission}>
            <p>Our mission is to help our patients keep their teeth for a lifetime of optimal</p>
            <div>
              <ul>
                <li>health</li>
                <li>comfort</li>
                <li>function</li>
                <li>appearance</li>
              </ul>
              <img src={'./office_entry.jpg'} alt={'Entry to the office'} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
