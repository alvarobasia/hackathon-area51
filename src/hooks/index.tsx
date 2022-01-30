import { FC } from 'react';

import { CartProvider } from './useCart';
import { WishlistProvider } from './useWishlist';
import { ModalProvider } from './useButtonModal/useOpenModal';

const Providers: FC = ({ children }) => {
  return (
    <WishlistProvider>
      <ModalProvider>
        <CartProvider>{children}</CartProvider>;
      </ModalProvider>
    </WishlistProvider>
  );
};

export { Providers };
