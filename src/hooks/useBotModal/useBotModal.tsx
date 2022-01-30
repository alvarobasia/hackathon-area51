import { createContext, FC, useContext, useState } from 'react';

export type IModals = 'GreetingsModal' | 'ChoicesModal' | 'SearchModal' | 'PDP';
interface ModalContextData {
  isModalOpen: boolean;
  modalState: string;
  checkButton: (value: boolean) => void;
  handleOpenLoginModal: (value: boolean) => void;
  showLoginModal: boolean;
  handleModalState: (value: IModals) => void;
}

const ModalContext = createContext<ModalContextData>({} as ModalContextData);

const ModalProvider: FC = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [modalState, setModalState] = useState<IModals>('GreetingsModal');

  const checkButton = (value: boolean) => {
    setIsModalOpen(value);
  };

  const handleModalState = (value: IModals) => {
    setModalState(value);
  };

  const handleOpenLoginModal = (value: boolean) => {
    setShowLoginModal(value);
  };

  return (
    <ModalContext.Provider
      value={{
        checkButton,
        isModalOpen,
        handleModalState,
        modalState,
        showLoginModal,
        handleOpenLoginModal,
      }}
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
