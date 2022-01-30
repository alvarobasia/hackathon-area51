import { useEffect, useState } from 'react';
import { useBotModal } from '../../../../hooks/useButtonModal/useBotModal';
import {
  AudioButtonContainer,
  ModalButtonsContainer,
  ConfirmationContainer,
  DenialButton,
  ConfirmationButton,
} from '../../styles';

import AudioOn from '../../../../assets/audioOn.svg';
import MicOff from '../../../../assets/micOff.svg';
import { ChoicesContainer, ChoicesList, ModalTextChoices } from './styles';

const ChoicesModal = () => {
  const [modalState, setModalState] = useState('');

  const { handleModalState } = useBotModal();

  const handleModal = () => {
    setModalState('choices');
  };

  useEffect(() => {
    handleModalState(modalState);
  }, [modalState, handleModalState]);

  return (
    <ModalTextChoices>
      <AudioButtonContainer>
        <strong>(SHIFT + A)</strong>
        <img src={AudioOn} alt="audio on" />
      </AudioButtonContainer>
      <p>
        Olá Felipe, muito obrigado por realizar o cadastro de sua conta, vamos
        configurar ela para descobrimos em quais problemas conseguimos te
        auxiliar.
      </p>
      <ChoicesContainer>
        <ChoicesList>
          <li>
            <div>
              <input type="checkbox" name="deficiente visual" id="visual" />
              <label htmlFor="visual">Dificuldade visual</label>
            </div>
          </li>
          <li>
            <div>
              <input type="checkbox" name="deficiente motor" id="motora" />
              <label htmlFor="motora">Dificuldade motora</label>
            </div>
          </li>
        </ChoicesList>
        <ChoicesList>
          <li>
            <div>
              <input type="checkbox" name="deficiente auditivo" id="auditiva" />
              <label htmlFor="auditiva">Dificuldade auditiva</label>
            </div>
          </li>
          <li>
            <div>
              <input
                type="checkbox"
                name="dificuldade com tecnologia"
                id="tecnologia"
              />
              <label htmlFor="tecnologia">Dificuldade tecnologia</label>
            </div>
          </li>
        </ChoicesList>
      </ChoicesContainer>
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
              <strong>Resetar(Shift + R)</strong>
            </button>
          </DenialButton>
          <ConfirmationButton>
            <button type="button" onClick={handleModal}>
              <strong>Concluir(Shift + C)</strong>
            </button>
          </ConfirmationButton>
        </ConfirmationContainer>
      </ModalButtonsContainer>
    </ModalTextChoices>
  );
};

export default ChoicesModal;
