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
import s from './Forms.css';
import forms from './form_data';

const formsMarkup = forms.map(({ name, link }, index) => (
  <li key={index}>
    <a href={link} target="_blank">{name}</a>
  </li>
));

class Forms extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{this.props.title}</h1>
          <ul>
            {formsMarkup}
          </ul>
          <img src={'./office_plant.jpg'} alt={'Office decoration'} />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Forms);
