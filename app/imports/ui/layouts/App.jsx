import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import 'semantic-ui-css/semantic.css';
import { Roles } from 'meteor/alanning:roles';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Landing from '../pages/Landing';
import ListHousing from '../pages/HousingPages/ListHousing';
import ListMessages from '../pages/ListMessages';
import MessageBoard from '../pages/MessageBoard';
import AddHousing from '../pages/HousingPages/AddHousing';
import ViewBios from '../pages/BioPage/ViewBios';
import ViewProfile from '../pages/ViewProfile';
import ViewHousing from '../pages/HousingPages/ViewHousing';
import EditHousing from '../pages/HousingPages/EditHousing';
import NotFound from '../pages/NotFound';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Signout from '../pages/Signout';
import ContactUs from '../pages/ContactUs';
import EditProfile from '../pages/EditProfile';

/** Top-level layout component for this application. Called in imports/startup/client/startup.jsx. */
class App extends React.Component {
  render() {
    return (
        <Router>
          <div>
            <NavBar/>
            <Switch>
              <Route exact path="/" component={Landing}/>
              <Route path="/signin" component={Signin}/>
              <Route path="/signup" component={Signup}/>
              <Route path="/contactus" component={ContactUs}/>
              <Route path="/messages" component={ListMessages}/>
              <Route path="/message/:_id" component={MessageBoard}/>
              <ProtectedRoute path="/list" component={ListHousing}/>
              <ProtectedRoute path="/connect" component={ViewBios}/>
              <ProtectedRoute path="/profile/:_id" component={ViewProfile}/>
              <ProtectedRoute path="/editprofile" component={EditProfile}/>
              <ProtectedRoute path="/housing/:_id" component={ViewHousing}/>
              <ProtectedRoute path="/add" component={AddHousing}/>
              <ProtectedRoute path="/edit/:_id" component={EditHousing}/>
              <ProtectedRoute path="/signout" component={Signout}/>
              <Route component={NotFound}/>
            </Switch>
            <Footer/>
          </div>
        </Router>
    );
  }
}

/**
 * ProtectedRoute (see React Router v4 sample)
 * Checks for Meteor login before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const isLogged = Meteor.userId() !== null;
      return isLogged ?
          (<Component {...props} />) :
          (<Redirect to={{ pathname: '/signin', state: { from: props.location } }}/>
      );
    }}
  />
);

/**
 * AdminProtectedRoute (see React Router v4 sample)
 * Checks for Meteor login and admin role before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const AdminProtectedRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) => {
          const isLogged = Meteor.userId() !== null;
          const isAdmin = Roles.userIsInRole(Meteor.userId(), 'admin');
          return (isLogged && isAdmin) ?
              (<Component {...props} />) :
              (<Redirect to={{ pathname: '/signin', state: { from: props.location } }}/>
              );
        }}
    />
);

/** Require a component and location to be passed to each ProtectedRoute. */
ProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object,
};

/** Require a component and location to be passed to each AdminProtectedRoute. */
AdminProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object,
};

export default App;
