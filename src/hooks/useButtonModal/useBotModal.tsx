import { createContext, FC, useContext, useState } from 'react';

interface ModalContextData {
  isModalOpen: boolean;
  modalState: string;
  checkButton: (value: boolean) => void;
  handleModalState: (value: string) => void;
}

const ModalContext = createContext<ModalContextData>({} as ModalContextData);

const ModalProvider: FC = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalState, setModalState] = useState('');

  const checkButton = (value: boolean) => {
    setIsModalOpen(value);
  };

  const handleModalState = (value: string) => {
    setModalState(value);
  };

  return (
    <ModalContext.Provider
      value={{ checkButton, isModalOpen, handleModalState, modalState }}
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
