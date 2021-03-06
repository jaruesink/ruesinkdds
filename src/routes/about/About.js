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
import s from './About.css';

import Team from './team';

import Profile from '../../components/Profile';

const Profiles = Team.map(member => (<Profile {...member} />));

class About extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  // <img className={s.team} src={'./team.jpg'} alt={'Donna Ruesink D.D.S. team'} />

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{this.props.title}</h1>
          {Profiles}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(About);
