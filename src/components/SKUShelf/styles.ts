import styled from 'styled-components';
import { ProductButton } from '../Shelf/ShelfProduct/styles';

export const SkuShelfContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 1rem;
`;

export const ButtonSku = styled.button`
  width: auto;
  height: auto;
  cursor: pointer;
  font-size: 0.75rem;
  background: var(--green-100);
  outline: none;
  border: none;
  padding: 0.3rem;
  border-radius: 0.3rem;
  color: var(--gray-900);
`;
