import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  padding-top: 50px;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
`;

export const MutedLink = styled.a`
  font-size: 15px;
  color: blue;
  font-weight: bold;
  text-decoration: none;
  padding-top: 30px;
`;

export const BoldLink = styled.a`
  font-size: 2p16x;
  color: green;
  font-weight: bold;
  text-decoration: none;
  margin: 0 4px;
`;

export const Input = styled.input`
  width: 100%;
  height: 52px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 0px 20px;
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 20px;

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

export const SubmitButton = styled.button`
  width: 100%;
  padding: 10px 30%;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgb(178,233,30);
  background: linear-gradient(90deg, rgba(178,233,30,1) 0%, rgba(2,2,34,1) 81%, rgba(0,212,255,1) 100%);

  &:hover {
    filter: brightness(1.03);
  }
`;

