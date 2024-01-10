import styled from "styled-components";
import { Link } from "react-router-dom";
import Modal from "react-modal";

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

export const ModalStyled = styled(Modal)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  padding: 0;
  outline: none;
  background-color: #212529;
  margin: 50% auto;
  margin-inline: 14px;

  .headerModal {
    display: flex;
    justify-content: space-between;
    border-radius: 4px 4px 0px 0px;
    background: #343b41;
    padding: 22px 14px;
  }

  .headerModal span {
    cursor: pointer;
  }

  .contentModal {
    padding: 22px 14px;
  }

  .contentModal button {
    width: 100%;
    margin-top: 20px;
    background: #ff577f;
    color: #fff;
    padding: 12px 80px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
  }

  .contentModal label {
    font-size: 12px;
  }

  .headerModal h1 {
    font-weight: 700;
    font-size: 14px;
  }

  input,
  select {
    display: block;
    width: 100%;
    margin-block: 8px;
    padding: 12px 4px;
    background-color: #343b41;
    border-radius: 4px;
    font-size: 18px;
    border: none;
    color: #fff;
  }

  input::placeholder,
  select {
    color: #868e96;
  }

  @media (min-width: 768px) {
    width: 400px;
    margin: 15% auto;
  }
`;

export const StyledDiv = styled.div`
  width: 100%;
  border-bottom: 1px solid #343b41;
  padding: 60px 6px 60px 6px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 960px;
    padding: 30px 36px 30px 36px;
    margin: 0 auto;
    color: #fff;
  }

  div h2 {
    margin-bottom: 12px;
  }

  @media (min-width: 768px) {
    div {
      flex-direction: row;
    }
  }
`;

export const StyledHeader = styled.header`
  width: 100%;
  border-bottom: 1px solid #343b41;
  padding: 60px 6px 60px 6px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 12px;
    max-width: 900px;
    margin: 0 auto;
  }

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

  .logoutButton:hover {
    filter: brightness(1.4);
    transition: 0.4s;
  }

  @media (min-width: 768px) {
    width: 100%;
    margin: 0 auto;
    padding: 60px 0 60px 0;
  }

  @media (max-width: 350px) {
    padding: 60px 6px 60px 6px;
  }
`;

export const StyledError = styled.div`
  width: 100%;
  padding: 60px 6px 60px 6px;

  header {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 24px;
    max-width: 960px;
    padding: 30px 36px 30px 36px;
    margin: 0 auto;
    color: #fff;
  }

  .addIcon {
    cursor: pointer;
  }

  .addIcon:hover {
    filter: brightness(1.4);
    transition: 0.4s;
  }
`;

export const StyledUl = styled.ul`
  background-color: #212529;
  padding-block: 8px;
  max-width: 960px;
  margin: 0 auto;
  min-height: 260px;
`;
