import styled from 'styled-components';
import { LayoutContainer } from '../../components/Layout/styles';
import {
  ProductButton,
  ProductPrice,
} from '../../components/Shelf/ShelfProduct/styles';

export const ProductContainer = styled(LayoutContainer)`
  display: flex;
  flex-direction: row;
  width: 80%;
  margin: 15px auto;
  height: 70vh;
  border-radius: 10px;
  background-color: #fff;
  padding: 15px;
  justify-content: space-between;
  gap: 15px;

  @media (max-width: 900px) {
    flex-direction: column;
    width: 100%;
    height: auto;
    justify-content: center;
    alight-items: center;
  }
`;

export const ImageContainer = styled.div`
  width: auto;
  position: relative;
  height: auto;
  overflow: hidden;
  padding: 15px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-height: 100%;
    max-width: 100%;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;

  padding: 15px;
  gap: 15px;
  h1 {
    font-size: 1.5rem;
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const InfoContainer = styled(ProductPrice)`
  display: flex;
  flex-direction: column;
  width: 55%;

  gap: 15px;

  h1 {
    font-size: 1.5rem;
  }
  strong {
    font-size: 3rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  gap: 15px;
`;

export const BuyButton = styled(ProductButton)``;
