import React, {Component} from 'react';
import {Link} from "react-router-dom";
import { NavWrapper } from "../styled";
import SignedOutLinks from "./SighedOutLinks";
import SignedInLinks from "./SignedInLinks";
import { connect } from 'react-redux';
import {googleSignIn, googleSignOut} from "../store/actions/googleAuthActions";



class Navbar extends Component {
  render() {
    const { signIn, signOut } = this.props;
    const isAuth = !!localStorage.getItem('x-access-token');
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <div className="container">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5 pt-2">
              <Link to="/" className="nav-link">
                <h3>Postter</h3>
              </Link>
            </li>
          </ul>
          { isAuth ? <SignedInLinks signOut={signOut} /> : <SignedOutLinks signIn={signIn} /> }
        </div>
      </NavWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userProfile: state.auth.userProfile
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: () => {dispatch(googleSignIn())},
    signOut: () => {dispatch(googleSignOut())},
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
