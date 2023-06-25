import styled from "@emotion/styled";

export const Form = styled.form`
  displey: flex;
  flex-direction:column;
  width: 300px;
  margin-right: auto;
  margin-left: auto;
`;

export const Button = styled.button`
    width: 150px;
    padding:7px;
    border:none;
    border-radius: 7px;
    background-color: rgb(245, 127, 49);
    color: #ffffff;
    font-size:20px;
    font-weight:bold;
`;

export const Label = styled.label`
    display:flex;
    flex-direction:column;
    gap:7px;

`;

export const Input = styled.input`
    padding:3px;
    padding-left:7px;
    margin-bottom: 15px;
    height: 22px;
`;

export const Span = styled.span`
    font-size:20px;
    font-weight:bold;
`;