import { useCallback, useEffect, useState } from 'react';
import { useBotModal } from '../../hooks/useBotModal/useBotModal';
import { BotIconButton } from './styles';

const BotIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { checkButton } = useBotModal();

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
