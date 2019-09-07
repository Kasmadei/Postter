import React, {Component} from 'react';
import Title from "./Title";
import {getPostById, deletePost} from "../store/actions/postActions";
import {setCreatorId} from "../store/actions/googleAuthActions";
import {connect} from 'react-redux'
import {Link} from "react-router-dom";
import {ButtonContainer, PostWrapper} from "../styled";
import { toFormateDate } from "../helper";

class Details extends Component {
  componentDidMount() {
    const {getPostById} = this.props;
    const {postId} = this.props.match.params;
    getPostById(postId);
  }

  render() {
    const {postById, creatorId, deletePost} = this.props;
    const showButons = postById.creator._id === creatorId ? true : false;
    const {postId} = this.props.match.params;
    return (
      <>
        <div className="container">
          <div className="py-5">
            <Title name={`Post: `} title={`${postById.title}`}/>
            <div className="row">
              <div className="col-md-12 my-3">
                <PostWrapper>
                  <div className="post rounded">
                    <div className="post-title pl-3 pb-2 pt-2">
                      <h1>{postById.title}</h1>
                    </div>
                    <div className="d-flex justify-content-between pt-3 px-3 p-0">
                      <h5 className="align-self-center">
                        {postById.creator.displayName}
                      </h5>
                      <h5 className="align-self-center">
                        {toFormateDate(postById.createDate)}
                      </h5>
                    </div>
                    <div className="px-3 pb-1">
                      <p>{postById.content}</p>
                    </div>
                    <div className="post-buttons">
                      <Link to="/">
                        <ButtonContainer purple onClick={() => {
                        }}>
                          Back
                        </ButtonContainer>
                      </Link>
                      {showButons && (
                        <>
                          <Link to="/">
                            <ButtonContainer purple onClick={() => {
                              deletePost(postById._id);
                            }}>
                              Delete
                            </ButtonContainer>
                          </Link>
                          <Link to={`/posts/${postId}/edit`}>
                          <ButtonContainer purple>
                            Edit
                          </ButtonContainer>
                          </Link>
                        </>
                      )}
                    </div>
                  </div>
                </PostWrapper>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    postById: state.posts.postById,
    creatorId: state.auth.creatorId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPostById: (id) => {
      dispatch(getPostById(id))
    },
    deletePost: (id) => {
      dispatch(deletePost(id))
    },
    setCreatorId: () => {
      dispatch(setCreatorId());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);
