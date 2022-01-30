import { useCallback } from 'react';
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
import { getToken } from '../../../../localstorage/auth';

const GreetingsModal = () => {
  const { handleModalState, handleOpenLoginModal } = useBotModal();

  const verifyIfUserLogged = useCallback(() => {
    const userLogged = getToken();

    if (!userLogged) {
      handleOpenLoginModal(true);

      return;
    }

    handleModalState('ChoicesModal');
  }, [handleModalState, handleOpenLoginModal]);

  return (
    <ModalTextGreetings>
      <AudioButtonContainer>
        <strong>(SHIFT + A)</strong>
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
          <strong>(SHIFT + M)</strong>
        </div>
        <ConfirmationContainer>
          <DenialButton>
            <button type="button">
              <strong>Não(Shift + N)</strong>
            </button>
          </DenialButton>

          <ConfirmationButton>
            <button type="button" onClick={verifyIfUserLogged}>
              <strong>Sim(Shift + S)</strong>
            </button>
          </ConfirmationButton>
        </ConfirmationContainer>
      </ModalButtonsContainer>
    </ModalTextGreetings>
  );
};

export default GreetingsModal;
