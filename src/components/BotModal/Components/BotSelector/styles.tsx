import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: relative;

  input {
    width: 100%;

    background: #fcfcfc;
    border: 1px solid #dadada;
    box-sizing: border-box;
    border-radius: 0.25rem;
    padding: 1rem;

    font-family: 'Mukta';
    font-size: 0.875rem;
    line-height: 135%;
    color: #bbbbbb;
  }
`;

type IOptions = {
  isOpen: boolean;
};

export const Options = styled.div<IOptions>`
  width: 100%;
  margin-top: 0.5rem;
  overflow: hidden;
  border-radius: 0.25rem;
  background: #fcfcfc;
  border: 1px solid #dadada;
  position: absolute;

  display: none;
  flex-direction: column;

  ${props =>
    props.isOpen &&
    css`
      display: flex;
    `}

  button {
    width: 100%;
    border-radius: 0;

    background: #fcfcfc;
    border: 1px solid #fcfcfc;

    &:nth-child(even) {
      background: rgba(218, 218, 218, 0.1);
      border-color: 1px solid rgba(218, 218, 218, 0.5);
    }

    &:hover,
    &.active {
      background: #a4daff80;
      border-color: #a4daff;
    }
  }
`;
