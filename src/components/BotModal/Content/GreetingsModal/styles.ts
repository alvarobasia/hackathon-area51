import styled from 'styled-components';

export const ModalTextGreetings = styled.div`
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
