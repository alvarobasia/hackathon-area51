import { FC } from 'react';
import { ModalProvider } from './useButtonModal/useBotModal';

import { CartProvider } from './useCart';
import { WishlistProvider } from './useWishlist';

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
