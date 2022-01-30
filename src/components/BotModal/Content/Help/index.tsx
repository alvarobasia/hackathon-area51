import { FC } from 'react';

import BotHeader from '../../Components/BotHeader';

import { Container } from './styles';

import BotSelector from '../../Components/BotSelector';
import { useBotModal } from '../../../../hooks/useBotModal/useBotModal';

const Help: FC = () => {
  const { handleModalState } = useBotModal();

  const handleModal = () => {
    handleModalState('SearchModal');
  };

  return (
    <Container>
      <BotHeader />

      <p>Como posso te ajudar Felipe? Verifique a lista de opções abaixo: </p>

      <BotSelector
        placeholder="Selecione uma opção (SHIFT + D)"
        options={[
          {
            value: 'Buscar por um produto (1)',
          },
          {
            value: 'Localizar lojas do site (2)',
          },
          {
            value: 'Ajustar tamanha das letras do site (3)',
          },
          {
            value: 'Ajustar contraste do site (4)',
          },
        ]}
      />

      <button type="button" onClick={handleModal}>
        <strong>Continuar (Shift + C)</strong>
      </button>
    </Container>
  );
};

export default Help;
