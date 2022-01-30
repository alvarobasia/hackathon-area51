import { useEffect, useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
import { useBotModal } from '../../../../hooks/useBotModal/useBotModal';
import {
  AudioButtonContainer,
  ModalButtonsContainer,
  ConfirmationContainer,
  DenialButton,
  ConfirmationButton,
} from '../../styles';

import AudioOn from '../../../../assets/audioOn.svg';
import MicOff from '../../../../assets/micOff.svg';
import { ModalTextGreetings } from './styles';

const GreetingsModal = () => {
  const [modalState, setModalState] = useState('');

  const { handleModalState, handleOpenLoginModal } = useBotModal();

  const handleModal = () => {
    setModalState('choices');
  };

  useEffect(() => {
    handleModalState(modalState);
  }, [modalState, handleModalState]);

  const { speak } = useSpeechSynthesis();

  return (
    <ModalTextGreetings>
      <AudioButtonContainer>
        <p>(SHIFT + A)</p>
        <img src={AudioOn} alt="audio on" />
      </AudioButtonContainer>
      <p>Olá, me chamo Henrique, sou assistente virtual da X.</p>
      <p>
        Irei auxiliar você em suas compras de hoje! Vi que você ainda não está
        logado em nosso sistema, você deseja logar no nosso sistema para
        conseguir utilizar as informações salvas?
      </p>
      <ModalButtonsContainer>
        <div>
          <button type="button">
            <img src={MicOff} alt="mic off" />
          </button>
          <p>(SHIFT + M)</p>
        </div>
        <ConfirmationContainer>
          <DenialButton>
            <button type="button">Não(Shift + N)</button>
          </DenialButton>
          <ConfirmationButton>
            <button type="button" onClick={() => handleOpenLoginModal(true)}>
              Sim(Shift + S)
            </button>
          </ConfirmationButton>
        </ConfirmationContainer>
      </ModalButtonsContainer>
    </ModalTextGreetings>
  );
};

export default GreetingsModal;
