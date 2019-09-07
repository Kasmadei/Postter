import React from 'react';
import {Link} from 'react-router-dom';
import { ButtonContainer } from "../styled";

const SignedInLinks = (props) => {
  const { signOut } = props
  return (
    <>
      <Link to="/addpost" className="ml-auto">
        <ButtonContainer>
            <span className="mr-2">
            <i className="fas fa-plus"/>
            </span>
          add post
        </ButtonContainer>
      </Link>
      <Link to="/" className="ml-auto">
        <ButtonContainer onClick={signOut}>
            <span className="mr-2">
            <i className="fab fa-google"/>
            </span>
         Sign out
        </ButtonContainer>
      </Link>
    </>
  );
};




export default SignedInLinks;
