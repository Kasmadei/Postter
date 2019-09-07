import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonContainer } from "../styled";


const SignedOutLinks = (props) => {
  const { signIn } = props
  return (
    <Link to="/" className="ml-auto">
      <ButtonContainer onClick={signIn}>
            <span className="mr-2">
            <i className="fab fa-google"/>
            </span>
        Sign In
      </ButtonContainer>
    </Link>
  );
};




export default SignedOutLinks;
