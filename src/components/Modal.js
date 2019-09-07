import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import img from '../success.png';
import { closeModal } from "../store/actions/postActions";
import { ModalContainer, ButtonContainer } from "../styled";
import moment from "moment";


class Modal extends Component {
  render() {
    const { modalOpen, modalPost, closeModal } = this.props;
    const { createDate, title } = modalPost;
    if (!modalOpen) {
      return null;
    } else {
      return (
        <ModalContainer>
          <div className="container">
            <div className="row">
              <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center p-5">
                <img src={img} className="img-fluid" alt="product"/>
                <h5>Success!</h5>
                { modalPost.edit ? <h5>{`Post "${title}" was edited!`}</h5> :  <h5>{`Post "${title}" was created!`}</h5> }
                <h5 className="text-muted">{
                  moment(createDate).format('MMM Do YY, h:mm a')
                }</h5>
                <div className="buttons pt-5">
                  <Link to="/">
                    <ButtonContainer onClick={closeModal}>
                      Mian
                    </ButtonContainer>
                  </Link>
                  <Link to="/addpost">
                    <ButtonContainer onClick={closeModal}>
                      Okey
                    </ButtonContainer>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </ModalContainer>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    modalPost: state.posts.modalPost,
    modalOpen: state.posts.modalOpen
  }
}

const mapDispatchTiProps = (dispatch) => {
  return {
    closeModal: () => { dispatch(closeModal()) }
  }
}



export default connect(mapStateToProps, mapDispatchTiProps)(Modal);
