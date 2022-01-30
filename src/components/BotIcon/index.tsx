import { useCallback, useEffect, useState } from 'react';
import { useButtonModal } from '../../hooks/useButtonModal/useOpenModal';
import { BotIconButton } from './styles';

const BotIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { checkButton } = useButtonModal();

  const handleModalOpen = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  useEffect(() => {
    checkButton(isOpen);
  }, [checkButton, isOpen]);

  return (
    <BotIconButton>
      <button type="button" onClick={handleModalOpen}>
        <img src="icon.png" alt="bot icon" />
      </button>
    </BotIconButton>
  );
};

export default BotIcon;
