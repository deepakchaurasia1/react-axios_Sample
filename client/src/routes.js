//====================
// Import React and the dependencies we need to make react router work
//====================
import React from 'react';
import { Route, IndexRoute } from 'react-router';

//====================
// Import the different components that will represent the different pages
// of our website.
//====================
import DashBoard from './components/dashboard';

//====================
// Define our routes
//====================
export default (
  <Route path='/' component={DashBoard}/>
);
