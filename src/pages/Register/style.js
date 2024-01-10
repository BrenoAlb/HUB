import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 60px 12px 60px 12px;

  h2 {
    color: #ff577f;
  }

  button {
    background-color: #212529;
    color: #fff;
    padding: 16px 34px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    max-width: 600px;
    margin: 0 auto;
    padding: 60px 0 60px 0;
  }

  @media (max-width: 350px) {
    padding: 60px 6px 60px 6px;
  }
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

export const StyledDiv = styled.div`
  color: #f8f9fa;
  background-color: #212529;
  text-decoration: none;
  min-width: 320px;
  font-size: 14px;
  padding: 34px 18px;
  border-radius: 4px;
  margin-inline: 12px;

  div > section h3,
  div > section p {
    text-align: center;
  }

  div > section h3 {
    color: #f8f9fa;
    font-size: 20px;
    margin-bottom: 18px;
  }

  div > section p {
    color: #868e96;
    font-size: 14px;
    margin-bottom: 22px;
  }

  label {
    display: block;
    margin-bottom: 4px;
  }

  input,
  select {
    width: 100%;
    background: #343b41;
    border: none;
    padding: 12px;
    border-radius: 4px;
    color: #f8f9fa;
  }

  button {
    width: 100%;
    padding-block: 14px;
    margin-top: 12px;
    background-color: #59323f;
    color: #ffff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  @media (max-width: 350px) {
    margin-inline: 6px;
  }

  @media (min-width: 768px) {
    max-width: 500px;
    margin: 0 auto;
  }

  .errorMessage {
    font-size: 12px;
    color: #fff;
    margin: 10px 0 20px 0;
    color: #ff577f;
  }
`;
