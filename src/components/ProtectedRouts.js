import React, {Component} from 'react';
import {connect} from "react-redux";
import {googleSignOut, setCreatorId} from "../store/actions/googleAuthActions";


export default function (ComposedComponent) {
  class Authenticate extends Component {
    componentDidMount() {
      window.gapi.load('auth2', () => {
        window.gapi.auth2.init({
          client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID
        }).then(() => {
          const GoogleAuth = window.gapi.auth2.getAuthInstance();
          const isSignedIn = GoogleAuth.isSignedIn.get();
          if (!isSignedIn) {
            this.props.signOut();
            this.props.history.push('/');
          } else {
            const {updateProfile, setCreatorId} = this.props;
            const GoogleUser = GoogleAuth.currentUser.get();
            const freshUserProfile = GoogleUser.getBasicProfile();
            updateProfile(freshUserProfile);
            setCreatorId();
          }
        })
      });

    }

    render() {
      return (
        <ComposedComponent {...this.props} />
      )
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      updateProfile: (freshUserProfile) => {
        dispatch({type: 'CHECK_AND_UPDATE', data: freshUserProfile})
      },
      signOut: () => {
        dispatch(googleSignOut())
      },
      setCreatorId: () => {
        dispatch(setCreatorId());
      }
    }
  }

  return connect(null, mapDispatchToProps)(Authenticate);
};
