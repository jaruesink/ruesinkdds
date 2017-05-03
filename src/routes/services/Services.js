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
import s from './Services.css';

class Services extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{this.props.title}</h1>
          <p>Our treatment philosophy is geared toward preventing future dental problems. We treat patients of all ages and we offer a broad range of treatment plans from the most basic to the state of the art.</p>
          <p>Our comprehensive services include the following:</p>
          <p><b>Preventive:</b> teeth cleaning, comprehensive oral exams, oral cancer screening, education, and sealants</p>
          <p><b>Cosmetic:</b> bonding, porcelain veneers, recontouring, and whitening</p>
          <p><b>Restorative:</b> restoring the form and function of teeth with composite resin, porcelain, gold, or partial or complete dentures</p>
          <p><b>Emergency:</b> relief of pain, infection, or embarrassment</p>
          <p><b>Periodontal:</b> non-surgical treatment and management of gum disease</p>
          <p>Our sterilization procedures follow current OSHA (Occupational Safety and Health Administration), CDC (Centers for Disease Control) and the ADA (American Dental Association) guidelines.</p>
          <p>We recommend the following sites for reliable information on <b>dental treatment</b> and <b>oral health</b>:</p>
          <ul>
            <li>ada.org</li>
            <li>tda.org</li>
            <li>healthfinder.gov</li>
            <li>medlineplus.gov</li>
            <li>consumerreports.org/health</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Services);
