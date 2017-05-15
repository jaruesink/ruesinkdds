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
import s from './Contact.css';

class Contact extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{this.props.title}</h1>
          <img className={s.header} src={'./header.jpg'} alt={'office view from Google Streetview'} />
          <div className={s.address}>
            <div>
              <span>4505 Spicewood Springs Road<br />Suite 100<br />Austin, Texas 78759</span>
              <a href='tel:512-345-3955'>(512) 345-3955</a><br />
              <a href='mailto:druesink@earthlink.net'>druesink@earthlink.net</a>
            </div>
          </div>
          <div className={s.address}>
            <h2>Office Hours <span>(by appointment)</span></h2>
            <div>
              Monday - Thursday: 8am - 5pm<br />
              Friday: 8am - 1pm<br />
            </div>
          </div>
          <div className={s.map}>
            <h2>Map:</h2>
            <p>
              Our office is conveniently located between Mopac (Loop 1) and Capital of Texas Highway (Loop 360) in the Tramex Travel building on Spicewood Springs Road. Plenty of free parking is available.
            </p>
            <iframe width="425" height="350" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?ie=UTF8&amp;cid=14505547539879569911&amp;q=Donna+McCoy+Ruesink+D.D.S.&amp;gl=US&amp;hl=en&amp;ll=30.374198,-97.760025&amp;spn=0.006295,0.006295&amp;t=m&amp;vpsrc=0&amp;iwloc=A&amp;output=embed" />
            <br />
            <a href="https://maps.google.com/maps?ie=UTF8&amp;cid=14505547539879569911&amp;q=Donna+McCoy+Ruesink+D.D.S.&amp;gl=US&amp;hl=en&amp;ll=30.374198,-97.760025&amp;spn=0.006295,0.006295&amp;t=m&amp;vpsrc=0&amp;iwloc=A&amp;source=embed">View Larger Map</a>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Contact);
