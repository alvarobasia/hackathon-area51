import { createContext, FC, useContext, useEffect, useState } from 'react';

interface ModalContextData {
  isModalOpen: boolean;
  checkButton: (value: boolean) => void;
  handleOpenLoginModal: () => void;
  showLoginModal: boolean;
}

const ModalContext = createContext<ModalContextData>({} as ModalContextData);

const ModalProvider: FC = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const checkButton = (value: boolean) => {
    setIsModalOpen(value);
  };

  function handleOpenLoginModal() {
    setShowLoginModal(true);
  }

  return (
    <ModalContext.Provider
      value={{ checkButton, isModalOpen, handleOpenLoginModal, showLoginModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};

function useBotModal(): ModalContextData {
  const context = useContext(ModalContext);

  return context;
}

export { ModalProvider, useBotModal };
