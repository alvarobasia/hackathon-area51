import { useEffect, useState } from 'react';
import { useBotModal } from '../../../../hooks/useBotModal/useBotModal';
import {
  AudioButtonContainer,
  ConfirmationButton,
  ModalButtonsContainer,
} from '../../styles';

import AudioOn from '../../../../assets/audioOn.svg';
import BackArrow from '../../../../assets/BackArrow.svg';
import MicOff from '../../../../assets/micOff.svg';
import {
  ArrowButtonContainer,
  ModalTextSearch,
  SearchResultContainer,
  TopButtonsContainer,
} from './styles';

import SearchButton from '../../../../assets/SearchButton.svg';
import axiosAPI from '../../../../services/axiosAPI';
import { Products } from '../../../../models/Products';

const SearchModal = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setsearchResults] = useState<Products[]>([]);

  const handleModalSearch = async (e: any, input: string) => {
    e.preventDefault();
    try {
      const response = await axiosAPI.get(`/products/`);

      const { data } = response;

      const item = data.find((element: any) => {
        const desc = element.description.toLowerCase();
        const searchInp = input.toLowerCase();
        return new RegExp(`\\b${searchInp}\\b`).test(desc) ?? element;
      });

      setsearchResults([...searchResults, item]);
    } catch (error) {
      console.log(error);
    }
  };

  const multiSearchOr = (text: any, searchWords: any) => {
    const regex = searchWords
      .map((word: any) => `(?=.*\\b${word}\\b)`)
      .join('');
    const searchExp = new RegExp(regex, 'gi');
    return !!searchExp.test(text);
  };

  console.log(searchResults);

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
          onChange={e => setSearchInput(e.target.value)}
        />
        <button type="submit" onClick={e => handleModalSearch(e, searchInput)}>
          <img src={SearchButton} alt="search button" />
        </button>
      </form>
      {searchResults.length > 0 &&
        searchResults.map(element => (
          <SearchResultContainer>
            <img src={element.image_url} alt="" />
            <p>{element.description}</p>
          </SearchResultContainer>
        ))}
      <ModalButtonsContainer>
        <div>
          <button type="button">
            <img src={MicOff} alt="mic off" />
          </button>
          <strong>(SHIFT + M)</strong>
        </div>
        <ConfirmationButton>
          <button type="button">
            <strong>Detalhes(Shift + C)</strong>
          </button>
        </ConfirmationButton>
      </ModalButtonsContainer>
    </ModalTextSearch>
  );
};

export default SearchModal;
