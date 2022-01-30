import styled from 'styled-components';

export const ModalTextSearch = styled.div`
  display: flex;
  flex-direction: column;
  width: 627px;
  height: 285px;
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

  p {
    margin: 20px 0;
    font-size: 18px;
    color: #7d7d7d;
  }

  form {
    display: flex;
    border: 1px solid #dadada;
    border-radius: 4px;

    input {
      width: 100%;
      height: 51px;
      border: none;
      padding-left: 16px;
    }
  }
`;

export const SearchContainer = styled.div`
  p {
    margin: 20px 0;
    font-size: 18px;
    color: #7d7d7d;
  }
`;

export const TopButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ArrowButtonContainer = styled.button`
  align-self: flex-start;
  display: flex;
  align-items: center;
  paddin-left: 0px;

  strong {
    margin-left: 16px;
  }
`;

export const SearchResultContainer = styled.ul`
  background-color: white;
  position: absolute;
  bottom: 0px;
  width: 90%;
  padding: 6px;

  li {
    button {
      display: flex;
      align-items: center;

      p {
        margin-top: 0px !important;
      }
      img {
        width: 44px;
        height: 43px;
        margin-right: 16px;
      }
    }
  }
`;

export const SelectedItem = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 44px;
    height: 43px;
    margin-right: 16px;
  }
  p {
    margin: 0px;
    font-size: 14px;
  }
`;

export const SelectedItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border: 1px solid #dadada;
  border-radius: 4px;
  padding: 6px;
  margin-bottom: 24px;
`;
