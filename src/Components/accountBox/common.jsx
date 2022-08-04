import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
`;

export const MutedLink = styled.a`
  font-size: 11px;
  color: black;
  font-weight: 500;
  text-decoration: none;
`;

export const BoldLink = styled.a`
  font-size: 11px;
  color: rgb(241, 196, 15);
  font-weight: 500;
  text-decoration: none;
  margin: 0 4px;
`;

export const Label = styled.label`
  font-size: 20px;
  color: black,
  // rgb(241, 196, 15);
  padding-left: 2px;
  font-weight: 500;
  text-decoration: none;
  margin: 0 4px;
`;





export const Input = styled.input`
width: 100%;
height: 42px;
outline: none;
border: 1px solid rgb(0 0 0 / 19%);
// padding: 10px 10px;
padding-left:10px;
border-bottom: 1px solid rgb(0 0 0 / 19%);
-webkit-transition: all 200ms ease-in-out;
-webkit-transition: all 200ms ease-in-out;
transition: all 200ms ease-in-out;
font-size: 12px;


  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }

  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(241, 196, 15);
  }
`;

//RF means Registration Form
export const Input_RF = styled.input`
width: 50%;
height: 42px;
outline: none;
border: 1px solid rgb(0 0 0 / 19%);
// padding: 10px 10px;
padding-left:10px;
border-bottom: 1px solid rgb(0 0 0 / 19%);
-webkit-transition: all 200ms ease-in-out;
-webkit-transition: all 200ms ease-in-out;
transition: all 200ms ease-in-out;
font-size: 12px;


  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }

  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(241, 196, 15);
  }
`;



export const Input_RF2 = styled.input`
width: 25%;
height: 42px;
outline: none;
border: 1px solid rgb(0 0 0 / 19%);
// padding: 10px 10px;
padding-left:10px;
border-bottom: 1px solid rgb(0 0 0 / 19%);
-webkit-transition: all 200ms ease-in-out;
-webkit-transition: all 200ms ease-in-out;
transition: all 200ms ease-in-out;
font-size: 12px;


  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }

  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(241, 196, 15);
  }
`;






export const TextArea = styled.textarea`
width: 50%;
height: 150px;
padding: 12px 20px;
box-sizing: border-box;
border: 2px solid #ccc;
border-radius: 4px;
background-color: #f8f8f8;
font-size: 16px;
resize: none;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 11px 40%;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background-image:   linear-gradient(to right,#0062cc,#0062cc);
  margin-bottom: 10px;
  );

  &:hover {
    filter: brightness(1.03);
    background-color: gray;
  }
  

`;
//css of validity
export const Validity =styled.p `
margin: 10px 10px 30px;
opacity: 0.5 ;
transition :0.3s ;

outline: none;
border: 1px solid rgb(0 0 0 / 16%);
padding: 0px 10px;
border-bottom: 1.4px solid transparent;
transition: all 200ms ease-in-out;
font-size: 12px;

&::placeholder {
  color: rgba(200, 200, 200, 1);
}

&:not(:last-of-type) {
  border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
}

&:focus {
  outline: none;
  border-bottom: 2px solid rgb(241, 196, 15);
}

`;
export const GoogleLogin = styled.button`
  width: 100%;
  padding: 11px 40%;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background:  linear-gradient(to right,#0062cc,#0062cc);

  );

  &:hover {
    filter: brightness(1.03);
    background-color: gray;
  }
  

`;

export const FieldContainer = styled.div`
  width: 70%;
  margin:auto;
  display: flex;
  flex-direction: column;

`;


export const FieldContainer_RF = styled.div`
  width: 70%;
  margin:auto;
  display: flex;
  flex-direction: column;
  background: #3c67954a;
  border-radius: 25px;
`;

export const FieldContainer_RF2 = styled.div`
  width: 70%;
  margin:auto;
  padding:2px;
  display: flex;
  flex-direction: column;
  // background: #3c67954a;
  border-radius: 25px;
`;




export const FieldError = styled.span`
  color: #b32e2e;
  font-size: 11px;
  min-height: 18px;
`;

export const FormSuccess = styled.span`
  color: #28a828;
  font-size: 12px;
  min-height: 20px;
  font-weight: 600;
`;

export const FormError = styled.span`
  color: #b32e2e;
  font-size: 12px;
  min-height: 20px;
  font-weight: 600;
`;