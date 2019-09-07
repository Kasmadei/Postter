import {basicUrl} from "../../helper";
import axios from 'axios';
import {throwErrMsg} from './googleAuthActions';

// MODAL
export const closeModal = () => {
  return {
    type: 'CLOSE_MODAL'
  }
}

// RESET POST BY ID VALUE
export const reset = () => {
  return {
    type: 'RESET'
  }
}

// GET ALL POSTS

export const getAllPosts = () => {
  return (dispatch) => {
    const isOk = (res) => {
      const posts = res.data.feeds;
      dispatch(getPostsSuccess(posts));
    }
    const isError = (res) => {
      dispatch(throwErrMsg(res));
    }
    dispatch(getPostStart());
    const token = localStorage.getItem('x-access-token');
    const endPoint = basicUrl + 'feeds';
    const config = {
      headers: {
        'x-access-token': token
      }
    };
    axios.get(endPoint, config)
      .then(isOk, isError)
      .catch(res => throwErrMsg(res));
  }
}

const getPostStart = () => {
  return {
    type: 'GET_POSTS_START'
  }
}
const getPostsSuccess = (posts) => {
  return {
    type: 'GET_POSTS_SUCCESS',
    data: posts
  }
}

// ADD NEW POST

export const addNewPost = (newPost) => {
  return (dispatch) => {
    const isOk = (res) => {
      const post = res.data.feed;
      dispatch(sendNewPostSuccess(post));
    }
    const isErr = (res) => {
      dispatch(throwErrMsg('pls, fill full'));
    }
    dispatch(sendNewPostStart());
    const token = localStorage.getItem('x-access-token');
    const endPoint = basicUrl + 'feeds';
    const data = {...newPost};
    const config = {
      headers: {
        'x-access-token': token
      }
    };
    axios.post(endPoint, data, config)
      .then(isOk, isErr)
      .catch(res => throwErrMsg(res));
  }
}

const sendNewPostStart = () => {
  return {
    type: 'SEND_NEW_POST_START'
  }
}

const sendNewPostSuccess = (post) => {
  return {
    type: 'SEND_NEW_POST_SUCCESS',
    data: post
  }
}

// DELETE CREATED POST

export const deletePost = (id) => {
  return (dispatch) => {
    const isOk = (res) => {
      dispatch(deletePostSuccess(res.data._id));
    }

    const isErr = (res) => {
      dispatch(throwErrMsg('Post was not deleted'));
    }
    dispatch(deletePostStart(id))
    const token = localStorage.getItem('x-access-token');
    const endPoint = basicUrl + 'feeds/' + id;
    const config = {
      headers: {'x-access-token': token}
    };
    axios.delete(endPoint, config)
      .then(isOk, isErr)
      .catch(res => throwErrMsg(res));
  }
}

const deletePostStart = (id) => {
  return {
    type: 'DELETE_POST_START',
    data: id
  }
}

const deletePostSuccess = (id) => {
  return {
    type: 'DELETE_POST_SUCCESS',
    data: id
  }
}

// GET POST BY ID

export const getPostById = (id) => {
  return (dispatch) => {
    const isOk = (res) => {
      const post = res.data.feed;
      dispatch(getPostByIdSuccess(post));
    }
    const isErr = (res) => {
      dispatch(throwErrMsg(res));
    }
    dispatch(getPostByIdStart());
    const token = localStorage.getItem('x-access-token');
    const endPoint = basicUrl + 'feeds/' + id;
    const config = {
      headers: {'x-access-token': token}
    };
    axios.get(endPoint, config)
      .then(isOk, isErr)
      .catch(res => throwErrMsg(res));
  }
}

const getPostByIdStart = () => {
  return {
    type: 'GET_POST_BY_ID_START'
  }
}

const getPostByIdSuccess = (post) => {
  return {
    type: 'GET_POST_BY_ID_SUCCESS',
    data: post
  }
}

// EDIT POST

export const editPost = (post) => {
  return (dispatch) => {
    const isOk = (res) => {
      const post = res.data.feed;
      post.edit = true;
      dispatch(editPostSuccess(post));

    }
    const isErr = (res) => {
      dispatch(throwErrMsg(res))
    }
    dispatch(editPostStart());
    const token = localStorage.getItem('x-access-token');
    const endPoint = basicUrl + 'feeds/' + post.id;
    axios.put(endPoint,
      {...post.data},
      {
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': token
        }
      })
      .then(isOk, isErr)
      .catch(errMessage => throwErrMsg(errMessage));
  }
}

const editPostStart = () => {
  return {
    type: 'EDIT_POST_START'
  }
}

const editPostSuccess = (post) => {
  return {
    type: 'EDIT_POST_SUCCESS',
    data: post
  }
}


