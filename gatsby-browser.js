import React from 'react';
import Layout from './src/components/Layout';

import './src/css/index.css';

export const wrapPageElement = ({ element }) => <Layout>{element}</Layout>;
