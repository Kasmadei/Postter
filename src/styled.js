import styled from "styled-components";

export const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    #modal {
        background: var(--mainDark);
        border: 3px solid var(--mainPurple);
        padding: 10px;
        border-radius: 1rem;
    }
    .buttons {
        display: flex;
        justify-content: space-around;
        flex-direction: row;
    }
`

export const NavWrapper = styled.nav`
     background: indigo;
     .nav-link {
        color: white !important;
        font-size: 1.3rem;
        text-transform: capitalize;
     }
`

export const PostWrapper = styled.div`
  .post {
      border-color: transparent;
      transition: all 0.2s linear;
      background-color: var(--mainGray);
  }
  .post:hover {
    box-shadow: ${props => (props.shadow ? `0px 0px 15px 0px rgba(181, 75, 255, 1)` : 0)};
  }
  .post-title {
     background-color: var(--mainPurple);
  } 
`

export const ButtonContainer = styled.button`
font-size: 1.4rem;
color: var(--mainPurple);
color: ${props => (props.purple ? "var(--mainWhite)" : "var(--mainPurple)" )} ;
border-radius: 0.5rem;
border-style:none;
background: ${props => ( props.purple ? "var(--mainPurple)" : "var(--mainWhite)" )};
padding: 0.2rem 0.5rem;
margin: 0.2rem 0.5rem 0.2rem 0;
transition: all 0.3s linear;
  &:hover{
  background:  ${props => ( props.purple ? "var(--mainWhite)" : "var(--mainDark)" )};
  color:  ${props => ( props.purple ? "var(--mainPurple)" : "var(--mainWhite)" )};
}
&:focus {
  outline: none
}
`


export const FormInputs = styled.div`
    .purple-border .form-control:focus {
        border: 1px solid #ba68c8;
        box-shadow: 0 0 0 0.4rem rgba(186, 104, 200, .25);
    }
    textarea {
    resize: none;
    }   
    
`

