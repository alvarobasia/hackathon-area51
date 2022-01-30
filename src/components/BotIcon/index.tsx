import { useCallback, useEffect, useState } from 'react';
import { useBotModal } from '../../hooks/useButtonModal/useBotModal';
import { BotIconButton } from './styles';

import Icon from '../../assets/icon.svg';

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
        <img src={Icon} alt="bot icon" />
      </button>
    </BotIconButton>
  );
};

export default BotIcon;
