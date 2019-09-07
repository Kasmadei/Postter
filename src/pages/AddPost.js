import React, {Component} from 'react';
import Title from "../components/Title";
import { FormInputs } from "../styled";
import { connect } from "react-redux";
import {addNewPost} from "../store/actions/postActions";
import { ButtonContainer } from '../styled'

class AddPost extends Component {
  handleAdd = (e) => {
    e.preventDefault();
    const title = this.getTitle.value;
    const content = this.getContent.value;
    const newPost = {
      title,
      content
    };
    const { addNewPost, } = this.props;
    addNewPost(newPost);
    this.getContent.value = '';
    this.getTitle.value = '';
  }
  render() {
    const { errMessage } = this.props;
    return (
      <div className="py-5">
        <div className="container">
          <Title name="Add" title="new post"/>
          <FormInputs>
            <form>
              <div className="row">
                <div className="col-12 mx-auto col-md-10 col-lg-8 p-5" >
              <div className="form-group purple-border">
                { errMessage ? ( <h3 className="text-danger text-center">{ errMessage }</h3> ) : null }
                <label htmlFor="title"><h3>Title:</h3></label>
                <input
                  type="email"
                  className="form-control"
                  id="title"
                  ref={(input) => this.getTitle = input}
                />
              </div>
              <div className="form-group purple-border">
                <label htmlFor="exampleFormControlTextarea1"><h3>Content:</h3></label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="10"
                  ref={(input) => this.getContent = input}
                />
              </div>
              <div className="d-flex justify-content-end">
                <ButtonContainer purple onClick={this.handleAdd}>
                  Send
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

const mapStateToProps = (store) => {
  return {
    errMessage: store.posts.errMessage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewPost: (newPost) => { dispatch(addNewPost(newPost)) },
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(AddPost);
