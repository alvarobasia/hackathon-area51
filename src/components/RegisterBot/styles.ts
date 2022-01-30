import styled from 'styled-components';

interface LoginBotProps {
  show: boolean;
}

export const LoginBotContainer = styled.div<LoginBotProps>`
  position: fixed;
  left: 0;
  margin: auto;
  right: 0;
  top: ${({ show }) => (show ? '0' : '-200%')};
  bottom: 0;
  background: #f5f5f5;
  width: 34rem;
  height: 39.938rem;
  border-radius: 16px;
  align-items: flex-end;
  z-index: 1000;
  display: flex;
  transition: all 1s ease-in-out;
  flex-direction: column;
  align-items: center;
  padding: 3rem 2rem;
  h2 {
    font-size: 32px;
    font-weight: bold;
    color: #5A5A5A;
  }
  label
    font-size: 16px;
    color: #9c9c9c;
  }
  form {
    width: 90%;
  }
`;

export const WrapperInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 38px 0;
  width: 100%;
  input {
    width: 100%;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #dadada;
  }
`;

export const LoginButton = styled.button`
  background-color: #55b3f3;
  width: 100%;
  margin: 0 auto;
  height: 40px;
  outline: none;
  border: none;
  color: #fcfcfc;
  font-weight: normal;
  font-size: 18px;
`;

export const SubtextContainter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  color: #9c9c9c;
  position: relative;
  font-size: 14px;
  button {
    background: transparent;
    border: none;
    color: #55b380;
  }
`;
