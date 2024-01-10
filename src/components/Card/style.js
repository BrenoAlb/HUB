import styled from "styled-components";
import Modal from "react-modal";

export const ModalStyled = styled(Modal)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  padding: 0;
  outline: none;
  background-color: #212529;
  margin: 60% auto;
  margin-inline: 14px;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 22px 14px;
    background: #343b41;
  }

  label {
    font-size: 14px;
    color: #868e96;
  }

  div h2 {
    border-radius: 4px 4px 0px 0px;
    font-size: 16px;
  }

  form {
    padding: 22px 14px;
  }

  select {
    display: block;
    width: 100%;
    margin-top: 14px;
    padding: 12px 4px;
    background-color: #343b41;
    border-radius: 4px;
    font-size: 18px;
    border: none;
    color: #fff;
  }

  span {
    cursor: pointer;
  }

  button {
    width: 100%;
    margin-top: 20px;
    background: #ff577f;
    color: #fff;
    padding: 12px 80px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    width: 400px;
    margin: 15% auto;
  }
`;

export const StyledCard = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  max-width: 960px;
  padding: 30px 36px 30px 36px;
  color: #fff;
  background-color: #121214;
  border-radius: 4px;
  margin-inline: 8px;
  height: 22px;
  margin-block: 8px;

  .trashIcon {
    cursor: pointer;
    height: 14px;
    width: 14px;
  }

  .infosCard {
    display: flex;
    gap: 24px;
    align-items: center;
  }

  .infosCard .editIcon {
    cursor: pointer;
  }

  .infosCard p {
    color: #868e96;
    font-weight: 400;
    font-size: 14px;
  }

  &:hover {
    filter: brightness(1.4);
    transition: 0.4s;
  }
`;
