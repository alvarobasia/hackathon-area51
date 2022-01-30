import styled, { css } from 'styled-components';

interface IModalContainerProps {
  isModalOpen: boolean;
}

export const ModalContainer = styled.div<IModalContainerProps>`
  position: fixed;
  bottom: 0px;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  align-items: flex-end;
  z-index: 1000;
  display: none;

  ${({ isModalOpen }) =>
    isModalOpen &&
    css`
      display: flex;
    `}

  button {
    background-color: #55b3f3;
    border: none;
    padding: 12px;
    border-radius: 100%;
  }
`;

export const ModalImageContainer = styled.div`
  width: 264px;
  height: 280px;
`;

export const ModalText = styled.div`
  display: flex;
  flex-direction: column;
  width: 627px;
  height: 280px;
  background-color: white;
  margin-bottom: 212px;
  padding: 24px 32px;
  border-radius: 25px;
  justify-content: space-between;
  position: relative;

  button {
    background: none;
  }

  &:before {
    content: '';
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 24px solid #fff;
    border-right: 12px solid transparent;
    border-top: 12px solid #fff;
    border-bottom: 20px solid transparent;
    left: -5px;
    bottom: -17px;
    transform: rotate(20deg);
  }
`;

export const AudioButtonContainer = styled.button`
  align-self: flex-end;
  display: flex;
  align-items: center;

  p {
    margin-right: 11px;
    color: black;
  }
`;

export const ModalButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  align-self: flex-end;

  div {
    display: flex;
    align-items: center;
  }
`;

export const ConfirmationContainer = styled.div`
  display: flex;
  justify-self: flex-end;
`;

export const DenialButton = styled.div`
  border: 1px solid #ff2e63;
  border-radius: 4px;
  padding: 0px 16px;
  margin-right: 8px;

  button {
    color: #ff2e63;
    font-size: 16px;
    font-weight: 600;
  }
`;

export const ConfirmationButton = styled.div`
  border: 1px solid #55b3f3;
  border-radius: 4px;
  padding: 0px 16px;
  margin-left: 8px;

  button {
    color: #55b3f3;
    font-size: 16px;
    font-weight: 600;
  }
`;
