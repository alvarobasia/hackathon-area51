import { useEffect, useState } from 'react';
import { useBotModal } from '../../hooks/useBotModal/useBotModal';
import GreetingsModal from './components/GreetingsModal';
import { ModalContainer, ModalImageContainer, ModalText } from './styles';

import Assistent from '../../assets/Assistent.svg';
import ChoicesModal from './components/ChoicesModal';
import SearchModal from './components/SearchModal';

const BotModal = () => {
  const { isModalOpen, handleModalState, modalState } = useBotModal();

  const [indexModalState, setIndexModalState] = useState('');

  useEffect(() => {
    setIndexModalState(modalState);
    // handleModalRender(indexModalState);
  }, [handleModalState, modalState, indexModalState]);

  // const handleModalRender = (state: string) => {
  //   switch (state) {
  //     case '':
  //       return <GreetingsModal />;
  //     case 'choices':
  //       return <ChoicesModal />;
  //     default:
  //       return <h1>hello</h1>;
  //   }
  // };

  return (
    <ModalContainer isModalOpen={isModalOpen}>
      <ModalImageContainer>
        <img src={Assistent} alt="assistant bot" />
      </ModalImageContainer>
      <GreetingsModal />
    </ModalContainer>
  );
};

export default BotModal;
