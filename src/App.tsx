import React from 'react';
import { ToastContainer } from 'react-toastify';

import Routes from './routes';

import { Providers } from './hooks';

import GlobalStyled from './styles/GlobalStyled';
import BotIcon from './components/BotIcon';
import BotModal from './components/BotModal';
import LoginBot from './components/RegisterBot';

const App: React.FC = () => {
  return (
    <Providers>
      <GlobalStyled />

      <div className="App">
        <Routes />
      </div>
      <LoginBot />
      <BotIcon />
      <BotModal />
      <ToastContainer />
    </Providers>
  );
};

export default App;
