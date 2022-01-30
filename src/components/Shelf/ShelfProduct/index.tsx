import { useCallback, useMemo, useState } from 'react';
import { FiCheck } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import { useCart } from '../../../hooks/useCart';

import Price from '../../../utils/Price';
import SKUShelf from '../../SKUShelf';

import WishlistButton from '../../Wishlist/WishlistButton';

import {
  ProductButton,
  ProductButtonAdded,
  ProductContainer,
  ProductDescription,
  ProductImage,
  ProductPrice,
} from './styles';

import { ShelfProductFunctionType } from './types/ShelfProductFunctionType';

const ShelfProduct: ShelfProductFunctionType = ({ productProps }) => {
  const [productAdded, setProductAdded] = useState(false);
  const history = useHistory();

  const [skuSelected, setSkuSelected] = useState('');

  const { addProduct } = useCart();

  const priceWithInstallment = useMemo(() => {
    return Price.addInstallmentRate({
      price: productProps.selling_price,
      installmentRate: productProps.installment_rate,
    });
  }, [productProps]);

  const handleAddToCart = useCallback(() => {
    setProductAdded(true);

    addProduct(productProps.id, skuSelected);

    setTimeout(() => {
      setProductAdded(false);
    }, 3000);
  }, [addProduct, productProps.id, skuSelected]);

  return (
    <ProductContainer
      onClick={() => history.push(`/products/${productProps.id}`)}
    >
      <ProductImage>
        <img
          src={productProps.image_url}
          alt={productProps.description}
          title={productProps.description}
        />

        <WishlistButton productId={productProps.id} />
      </ProductImage>

      <ProductDescription>{productProps.description}</ProductDescription>

      <>
        {productProps.skus && (
          <SKUShelf
            skus={productProps.skus}
            onChange={e => setSkuSelected(e)}
          />
        )}
      </>

      <ProductPrice>
        {productProps.selling_price < productProps.price && (
          <s>
            {Price.format({
              price: productProps.price,
            })}
          </s>
        )}

        <strong>
          {Price.format({
            price: productProps.selling_price,
          })}
        </strong>

        {productProps.installment >= 2 && (
          <div>
            <span>em até </span>{' '}
            <strong>
              {productProps.installment}x de{' '}
              {Price.format({
                price: priceWithInstallment / productProps.installment,
              })}
            </strong>{' '}
            <span>{productProps.installment_rate <= 0 && 'sem juros'}</span>
          </div>
        )}
      </ProductPrice>

      {productAdded ? (
        <ProductButtonAdded>
          <FiCheck />
          adicionado
        </ProductButtonAdded>
      ) : (
        <ProductButton onClick={handleAddToCart}>Adicionar</ProductButton>
      )}
    </ProductContainer>
  );
};

export default ShelfProduct;
