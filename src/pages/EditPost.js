import React, {Component} from 'react';
import { connect } from 'react-redux';
import Title from "../components/Title";
import {ButtonContainer, FormInputs} from "../styled";
import { getPostById, editPost } from "../store/actions/postActions";
import {basicUrl} from "../helper";
import axios from "axios";
import { throwErrMsg } from "../store/actions/googleAuthActions";
import { Link } from "react-router-dom";

class EditPost extends Component {
  componentDidMount() {
    const { postId } = this.props.match.params;
    const token = localStorage.getItem('x-access-token');
    const endPoint = basicUrl + 'feeds/' + postId;
    const config = {
      headers: { 'x-access-token': token }
    };
    axios.get(endPoint, config)
      .then((res) =>{
        const { title, content } = res.data.feed
        this.setState({
          title,
          content
        })
      }, (res) => {
        throwErrMsg(res);
      })
      .catch(res => throwErrMsg(res))
  }

  state = {
    title: '',
    content: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  updatePost = (e) => {
    e.preventDefault();
    const { postId } = this.props.match.params;
    const { editPost } = this.props
    const updatedPost = {
      data: {
        ...this.state
      },
      id: postId
    }
    editPost(updatedPost);
  }

  render() {
    const { errMessage } = this.props;
    return (
      <div className="py-5">
        <div className="container">
          <Title name="Edit post: " title={`"${this.state.title}"`}/>
          <FormInputs>
            <form>
              <div className="row">
                <div className="col-12 mx-auto col-md-10 col-lg-8 p-5" >
                  <div className="form-group purple-border">
                    { errMessage ? ( <h3 className="text-danger text-center">{ errMessage }</h3> ) : null }
                    <label htmlFor="title"><h3>Title:</h3></label>
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      value={this.state.title}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group purple-border">
                    <label htmlFor="content"><h3>Content:</h3></label>
                    <textarea
                      className="form-control"
                      id="content"
                      rows="10"
                      value={this.state.content}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="d-flex justify-content-end">
                    <Link to="/">
                      <ButtonContainer purple>
                        Back
                      </ButtonContainer>
                    </Link>
                    <ButtonContainer purple onClick={(e) => {
                     this.updatePost(e)
                    }}>
                      Save
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </form>
          </FormInputs>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    postById: state.posts.postById
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPostById: (id) => { dispatch(getPostById(id)) },
    editPost: (post) => { dispatch(editPost(post)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);
