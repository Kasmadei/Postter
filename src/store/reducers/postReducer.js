const initState = {
  posts: [],
  postById: {
    content: '',
    creator: {
      _id: null
    },
    title: ''
  },
  loading: false,
  modalPost: {},
  modalOpen: false,
  errMessage: '',
  deleteModalOpen: false
};

export const postReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ERROR_MESSAGE':
      return {
        ...state,
        errMessage: action.data
      }
    case 'GET_POSTS_START':
      return {
        ...state,
        loading: true
      }
    case 'GET_POSTS_SUCCESS':
      return {
        ...state,
        loading: false,
        posts: action.data
      }
    case 'SEND_NEW_POST_START':
      return {
        ...state,
        loading: true
      }
    case 'SEND_NEW_POST_SUCCESS':
      return {
        ...state,
        loading: false,
        modalPost: action.data,
        modalOpen: true
      }
    case 'CLOSE_MODAL':
      return {
        ...state,
        modalOpen: false,
        errMessage: ''
      }
    case 'DELETE_POST_START':
      return {
        ...state,
        loading: true
      }
    case 'DELETE_POST_SUCCESS':
      return {
        ...state,
        loading: false,
        posts: state.posts.filter(post => post._id !== action.data)
      }
    case 'GET_POST_BY_ID_START':
      return {
        ...state,
        loading: true
      }
    case 'GET_POST_BY_ID_SUCCESS':
      return {
        ...state,
        loading: false,
        postById: action.data
      }
    case 'EDI_POST_START':
      return {
        ...state,
        loading: true,
      }
    case 'EDIT_POST_SUCCESS':
      return {
        ...state,
        loading: false,
        modalPost: action.data,
        modalOpen: true
      }
    case 'RESET':
    return {
      ...state,
      postById: {
        content: '',
        creator: {
          _id: null
        },
        title: ''
      },
      loading: false,
      modalPost: {},
      modalOpen: false
    }
    default:
      return {
        ...state
      }
  }
}
