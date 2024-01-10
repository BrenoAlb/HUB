import styled from "styled-components";
import { Link } from "react-router-dom";

export const LoginDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40%;

  @media (min-width: 768px) {
    margin-top: 10%;
  }
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

export const LoginTitle = styled.h1`
  text-align: center;
  color: #ff577f;
  font-size: 20px;
  margin-bottom: 18px;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

export const LoginForm = styled.form`
  color: #f8f9fa;
  background-color: #212529;
  min-width: 320px;
  font-size: 14px;
  padding: 34px 18px;
  border-radius: 4px;
  margin-inline: 12px;

  h2 {
    color: #f8f9fa;
    text-align: center;
  }

  div {
    width: 100%;
    background-color: yellow;
  }

  button {
    width: 100%;
    margin-bottom: 34px;
    padding-block: 10px;
    border-radius: 4px;
    border: none;
    text-decoration: none;
  }

  .registerButton {
    width: 100%;
    padding-block: 10px;
    border-radius: 4px;
    border: none;
    text-decoration: none;
    text-align: center;
    margin-bottom: 0px;
  }

  .accountAlert {
    text-align: center;
    margin-bottom: 18px;
    color: #868e96;
    font-size: 12px;
  }

  .errorMessage {
    font-size: 12px;
    color: #fff;
    margin: 10px 0 20px 0;
    color: #ff577f;
  }

  .inputEmail,
  .inputPassword {
    display: block;
    margin: 0 auto;
    text-align: left;
    width: 100%;
    padding-block: 8px;
    background-color: #868e96;
    color: #ffffff;
    border-radius: 4px;
    padding-inline: 4px;
    outline: none;
    border: 1px solid #ffffff;
  }

  .inputEmail::placeholder,
  .inputPassword::placeholder {
    color: #ffffff;
  }

  .labelEmail,
  .labelPassword {
    text-align: left;
    display: block;
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 6px;
  }

  .loginButton {
    background-color: #ff577f;
    color: #ffffff;
    cursor: pointer;
  }

  .loginButton:hover,
  .registerButton:hover {
    filter: brightness(1.2);
    transition: 0.4s;
  }

  .registerButton {
    background-color: #868e96;
    color: #ffffff;
    text-decoration: none;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    min-width: 450px;
  }
`;
