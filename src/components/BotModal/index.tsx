import { useMemo } from 'react';

import { useBotModal } from '../../hooks/useBotModal/useBotModal';

import GreetingsModal from './components/GreetingsModal';
import ChoicesModal from './components/ChoicesModal';
import SearchModal from './components/SearchModal';

import Assistent from '../../assets/Assistent.svg';

import { ModalContainer, ModalImageContainer } from './styles';

const BotModal = () => {
  const { isModalOpen, modalState } = useBotModal();

  const Modal = useMemo(() => {
    return {
      GreetingsModal,
      ChoicesModal,
      SearchModal,
    };
  }, []);

  return (
    <ModalContainer isModalOpen={isModalOpen}>
      <ModalImageContainer>
        <img src={Assistent} alt="assistant bot" />
      </ModalImageContainer>

      {modalState === 'GreetingsModal' && <Modal.GreetingsModal />}
      {modalState === 'ChoicesModal' && <Modal.ChoicesModal />}
      {modalState === 'SearchModal' && <Modal.SearchModal />}
    </ModalContainer>
  );
};

export default BotModal;
