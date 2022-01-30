import { useBotModal } from '../../hooks/useBotModal/useBotModal';
import {
  AudioButtonContainer,
  ConfirmationButton,
  ConfirmationContainer,
  DenialButton,
  ModalButtonsContainer,
  ModalContainer,
  ModalImageContainer,
  ModalText,
} from './styles';

const BotModal = () => {
  const { isModalOpen, handleOpenLoginModal } = useBotModal();

  return (
    <ModalContainer isModalOpen={isModalOpen}>
      <ModalImageContainer>
        <img src="Assistent.png" alt="assistant bot" />
      </ModalImageContainer>
      <ModalText>
        <AudioButtonContainer>
          <strong>(SHIFT + A)</strong>
          <img src="audioOn.png" alt="audio on" />
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
              <img src="micOff.png" alt="mic off" />
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
              <button type="button" onClick={handleOpenLoginModal}>
                <strong>Sim(Shift + S)</strong>
              </button>
            </ConfirmationButton>
          </ConfirmationContainer>
        </ModalButtonsContainer>
      </ModalText>
    </ModalContainer>
  );
};

export default BotModal;
