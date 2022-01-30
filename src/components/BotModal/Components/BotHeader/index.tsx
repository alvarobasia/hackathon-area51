import { FC, useCallback } from 'react';

import AudioOn from '../../../../assets/audioOn.svg';
import BackArrow from '../../../../assets/BackArrow.svg';

import {
  IModals,
  useBotModal,
} from '../../../../hooks/useBotModal/useBotModal';

import { Container } from './styles';

type IBotHeader = {
  hasGoBack?: boolean;
  goBackTo?: IModals;
};

const BotHeader: FC<IBotHeader> = ({ hasGoBack, goBackTo }) => {
  const { handleModalState } = useBotModal();

  const handleGoback = useCallback(() => {
    if (!goBackTo) return;

    handleModalState(goBackTo);
  }, [goBackTo, handleModalState]);

  return (
    <Container>
      <div className="goBack">
        {hasGoBack && (
          <div role="presentation" onClick={handleGoback}>
            <img src={BackArrow} alt="audio on" />
            <strong>(SHIFT + V)</strong>
          </div>
        )}
      </div>

      <div>
        <strong>(SHIFT + A)</strong>
        <img src={AudioOn} alt="audio on" />
      </div>
    </Container>
  );
};

export default BotHeader;
