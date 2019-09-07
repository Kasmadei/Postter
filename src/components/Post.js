import React, {Component} from 'react';
import {PostWrapper, ButtonContainer} from "../styled";
import {toFormateContent, toFormateDate} from "../helper";
import {Link} from "react-router-dom";


class Post extends Component {
  render() {
    const {post, deletePost, creatorId} = this.props;
    const showButons = post.creator._id === creatorId ? true : false;
    return (
      <>
        <div className="col-md-6 my-3">
          <PostWrapper shadow>
            <div className="post rounded">
              <Link to={`/posts/${post._id}`}>
                <div className="post-title pl-3 pb-2 pt-2">
                  <h1>{post.title}</h1>
                </div>
                <div className="d-flex justify-content-between pt-3 px-3 p-0">
                  <h5 className="align-self-center">
                    {post.creator.displayName}
                  </h5>
                  <h5 className="align-self-center">
                    {toFormateDate(post.createDate)}
                  </h5>
                </div>
                <div className="px-3 pb-1">
                  <p>{toFormateContent(post.content)}</p>
                </div>
              </Link>
              {showButons && (
                <div className="post-buttons">
                  <ButtonContainer purple onClick={() => {
                    deletePost(post._id)
                  }}>
                    Delete
                  </ButtonContainer>
                  <Link to={`/posts/${post._id}/edit`}>
                    <ButtonContainer purple onClick={() => {

                    }}>
                      Edit
                    </ButtonContainer>
                  </Link>
                </div>
              )}
            </div>
          </PostWrapper>
        </div>
      </>
    );
  }
}


export default Post;
