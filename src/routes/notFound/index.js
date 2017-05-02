
import React from 'react';
import Home from '../home/Home';
import Layout from '../../components/Layout';

export default {

  path: '*',

  action() {
    return {
      component: <Layout><Home /></Layout>,
    };
  },

};
