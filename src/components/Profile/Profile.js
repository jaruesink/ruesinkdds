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
import s from './Profile.css';

class Profile extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    education: PropTypes.string,
    role: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
  };

  static defaultProps = {
    education: '',
    role: '',
  }

  render() {
    const { name, about, photo } = this.props;
    let { education, role } = this.props;
    if (education.length > 0) {
      education = `, ${education}`;
    }
    if (role.length > 0) {
      role = `, ${role}`;
    }

    return (
      <div className={s.root}>
        <img src={`./${photo}`} alt={name} />
        <div className={s.profile}>
          <h2>{name}<span>{education}{role}</span></h2>
          <p>{about}</p>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Profile);
