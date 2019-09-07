const initState = {
  userProfile: {},
  errMessage: '',
  creatorId: null
};

export const googleAuthReducer = (state = initState, action) => {
  console.log(action.type);
  switch (action.type) {
    case 'GOOGLE_SIGNIN_SUCCESS':
      return {
        ...state,
        userProfile: action.data
      }
    case 'GOOGLE_SIGNOUT_SUCCESS':
      return {
        ...state,
        userProfile: {}
      }
    case 'ERROR_MESSAGE':
      return {
        ...state,
        errMessage: action.data
      }
    case 'CHECK_AND_UPDATE':
      return {
        ...state,
        userProfile: action.data
      }
    case 'SET_CREATOR_ID':
      return {
        ...state,
        creatorId: localStorage.getItem('creator_id')
      }
    default:
      return {
        ...state
      }
  }
}
