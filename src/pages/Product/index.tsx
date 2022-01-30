import React, { useEffect, useMemo, useState } from 'react';

import Header from '../../components/Header';
import Shelf from '../../components/Shelf';
import { Products } from '../../models/Products';
import axiosAPI from '../../services/axiosAPI';
import Price from '../../utils/Price';

import {
  ProductContainer,
  ImageContainer,
  DescriptionContainer,
  InfoContainer,
  ButtonContainer,
  BuyButton,
} from './styles';

const Product: React.FC = () => {
  const [product, setProduct] = useState<Products | null>(null);

  useEffect(() => {
    axiosAPI
      .get(`/products/${1}`)
      .then(response => {
        const { data } = response;

        setProduct(data);
      })
      .catch(() => console.error(`cannot load collection ${1}`));
  }, []);

  const priceWithInstallment = useMemo(() => {
    if (product) {
      return Price.addInstallmentRate({
        price: product.selling_price,
        installmentRate: product.installment_rate,
      });
    }
    return 0;
  }, [product]);

  return (
    <>
      {product && (
        <>
          <Header />
          <ProductContainer>
            <ImageContainer>
              <img src={product.image_url} alt={product.description} />
            </ImageContainer>
            <DescriptionContainer>
              <h1>{product.description}</h1>
              <InfoContainer>
                {product.selling_price < product.price && (
                  <s>
                    {Price.format({
                      price: product.price,
                    })}
                  </s>
                )}
                <strong>
                  {Price.format({
                    price: product.selling_price,
                  })}
                </strong>
                {product.installment >= 2 && (
                  <div>
                    <span>em até </span>{' '}
                    <strong>
                      {product.installment}x de{' '}
                      {Price.format({
                        price: priceWithInstallment / product.installment,
                      })}
                    </strong>{' '}
                    <span>{product.installment_rate <= 0 && 'sem juros'}</span>
                  </div>
                )}
              </InfoContainer>

              <ButtonContainer>
                <BuyButton type="button">Comprar</BuyButton>
              </ButtonContainer>
            </DescriptionContainer>
          </ProductContainer>
          <div
            style={{
              width: '80%',
              margin: '0 auto',
            }}
          >
            <Shelf collectionId="1" />
          </div>
        </>
      )}
    </>
  );
};

export default Product;
