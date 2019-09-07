import React, {Component} from 'react';
import Title from "../components/Title";
import Post from "../components/Post";
import { connect } from 'react-redux';
import { getAllPosts, reset, deletePost } from "../store/actions/postActions";
import Loading from "../components/Loading";


class PostList extends Component {
  componentDidMount() {
    this.props.getAllPosts();
    this.props.reset();
  }
  render() {
    const { posts, loading, deletePost, creatorId } = this.props;
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="All" title="posts" />
            { loading ? <Loading /> : <div className="row">
              { posts.map(post => {
                return ( <Post
                  key={post._id}
                  post={post}
                  deletePost={deletePost}
                  creatorId={creatorId}
                /> )
              }) }
            </div> }
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
    loading: state.posts.loading,
    creatorId: state.auth.creatorId
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllPosts: () => { dispatch(getAllPosts()) },
    deletePost: (id) => { dispatch(deletePost(id)) },
    reset: () => { dispatch(reset()) }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
