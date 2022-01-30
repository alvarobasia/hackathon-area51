import { useEffect, useState } from 'react';
import { useBotModal } from '../../../../hooks/useBotModal/useBotModal';
import { AudioButtonContainer, ModalButtonsContainer } from '../../styles';

import AudioOn from '../../../../assets/audioOn.svg';
import BackArrow from '../../../../assets/BackArrow.svg';
import MicOff from '../../../../assets/micOff.svg';
import {
  ArrowButtonContainer,
  ModalTextSearch,
  TopButtonsContainer,
} from './styles';

import SearchButton from '../../../../assets/SearchButton.svg';

const SearchModal = () => {
  const [modalState, setModalState] = useState('');

  const { handleModalState } = useBotModal();

  const handleModal = () => {
    setModalState('choices');
  };

  useEffect(() => {
    handleModalState(modalState);
  }, [modalState, handleModalState]);

  return (
    <ModalTextSearch>
      <TopButtonsContainer>
        <ArrowButtonContainer>
          <img src={BackArrow} alt="audio on" />
          <strong>(SHIFT + V)</strong>
        </ArrowButtonContainer>
        <AudioButtonContainer>
          <strong>(SHIFT + A)</strong>
          <img src={AudioOn} alt="audio on" />
        </AudioButtonContainer>
      </TopButtonsContainer>
      <p>Informe o produto que você deseja comprar</p>
      <form>
        <input
          type="text"
          name="search product"
          id="search"
          placeholder="Qual produto você procura? (SHIFT + D)"
        />
        <button type="submit">
          <img src={SearchButton} alt="" />
        </button>
      </form>
      <ModalButtonsContainer>
        <div>
          <button type="button">
            <img src={MicOff} alt="mic off" />
          </button>
          <strong>(SHIFT + M)</strong>
        </div>
      </ModalButtonsContainer>
    </ModalTextSearch>
  );
};

export default SearchModal;
