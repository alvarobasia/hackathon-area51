import styled from 'styled-components';

export const Container = styled.div`
  width: 627px;
  height: 280px;
  background-color: white;
  margin-bottom: 212px;
  padding: 24px 32px;
  border-radius: 25px;
  position: relative;

  display: flex;
  flex-direction: column;

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

  p {
    margin: 1.5rem 0;
  }

  > button {
    border: 1px solid #55b3f3;
    border-radius: 4px;
    padding: 16px 32px;

    strong {
      color: white;
    }

    margin-top: 1.5rem;
    margin-left: auto;
  }
`;
