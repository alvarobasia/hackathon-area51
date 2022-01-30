import { useMemo } from 'react';

import { useBotModal } from '../../hooks/useBotModal/useBotModal';

import GreetingsModal from './Content/GreetingsModal';
import ChoicesModal from './Content/ChoicesModal';
import SearchModal from './Content/SearchModal';
import PDP from './Content/PDP';

import Assistent from '../../assets/Assistent.svg';

import { ModalContainer, ModalImageContainer } from './styles';

const BotModal = () => {
  const { isModalOpen, modalState } = useBotModal();

  const Modal = useMemo(() => {
    return {
      GreetingsModal,
      ChoicesModal,
      SearchModal,
      PDP,
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
      {modalState === 'PDP' && <Modal.PDP />}
    </ModalContainer>
  );
};

export default BotModal;
