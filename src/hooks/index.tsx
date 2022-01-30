import { FC } from 'react';

import { CartProvider } from './useCart';
import { WishlistProvider } from './useWishlist';
import { ModalProvider } from './useBotModal/useBotModal';

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
