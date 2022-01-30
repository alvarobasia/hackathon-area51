import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;

    img {
      margin-left: 0.5rem;
    }

    &.goBack {
      img {
        margin-right: 0.5rem;
      }
    }
  }
`;
