import { createContext, FC, useContext, useEffect, useState } from 'react';

interface ModalContextData {
  isModalOpen: boolean;
  checkButton: (value: boolean) => void;
}

const ModalContext = createContext<ModalContextData>({} as ModalContextData);

const ModalProvider: FC = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const checkButton = (value: boolean) => {
    setIsModalOpen(value);
  };

  return (
    <ModalContext.Provider value={{ checkButton, isModalOpen }}>
      {children}
    </ModalContext.Provider>
  );
};

function useButtonModal(): ModalContextData {
  const context = useContext(ModalContext);

  return context;
}

export { ModalProvider, useButtonModal };
