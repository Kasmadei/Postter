import {basicUrl} from "../../helper";
import axios from 'axios';
import jwt_decode from 'jwt-decode';

// GOOGLE SIGN IN

export const googleSignIn = () => {
  return (dispatch) => {
    const isOk = (googleUser) => {
      const userProfile = googleUser.getBasicProfile();
      const {id_token} = googleUser.getAuthResponse();
      axios.post(basicUrl + 'auth/google', {
        token: id_token
      })
        .then(res => {
          const decoded = jwt_decode(res.data.token);
          localStorage.setItem('x-access-token', res.data.token);
          localStorage.setItem('creator_id', decoded.id);
          dispatch(googleSignInSuccess(userProfile));
          dispatch(setCreatorId());
        })
        .catch(errMsg => dispatch(throwErrMsg(errMsg)));
    }
    const isError = (res) => {
      dispatch(throwErrMsg(res));
    }
    const GoogleAuth = window.gapi.auth2.getAuthInstance();
    GoogleAuth.signIn().then(isOk, isError)
      .catch(errMsg => dispatch(throwErrMsg(errMsg)));
  }
}

// GOOGLE SIGN OUT

export const googleSignOut = () => {
  return (dispatch) => {
    const GoogleAuth = window.gapi.auth2.getAuthInstance();
    GoogleAuth.signOut().then(() => {
      localStorage.clear();
      dispatch(setCreatorId());
      dispatch(googleSignOutSuccess());
    })
      .catch(errMsg => dispatch(throwErrMsg(errMsg)));
  }
}


// ACTION CREATORS
const googleSignInSuccess = (userProfile) => {
  return {
    type: 'GOOGLE_SIGNIN_SUCCESS',
    data: userProfile
  }
}
const googleSignOutSuccess = () => {
  return {
    type: 'GOOGLE_SIGNOUT_SUCCESS'
  }
}

export const setCreatorId = () => {
  return {
    type: 'SET_CREATOR_ID'
  }
}

export const throwErrMsg = (errMsg) => {
  return {
    type: 'ERROR_MESSAGE',
    data: errMsg
  }
}

