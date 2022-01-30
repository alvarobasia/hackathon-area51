import React from 'react';
import Line from '../../assets/Line-Marker.svg';
import Eye from '../../assets/eye.svg';
import { useBotModal } from '../../hooks/useBotModal/useBotModal';
import {
  LoginBotContainer,
  WrapperInput,
  LoginButton,
  SubtextContainter,
  CloseButton,
} from './styles';

// import { Container } from './styles';

const LoginBot: React.FC = () => {
  const { showLoginModal, handleOpenLoginModal } = useBotModal();
  const [show, setShow] = React.useState(false);
  const [isLogin, setIsLogin] = React.useState(false);

  return (
    <LoginBotContainer show={showLoginModal}>
      <CloseButton type="button" onClick={() => handleOpenLoginModal(false)}>
        X (F)
      </CloseButton>
      <h2>{isLogin ? 'Criar nova conta' : 'Bem vindo de volta!'} </h2>
      <form>
        <WrapperInput>
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" />
        </WrapperInput>
        {isLogin && (
          <WrapperInput>
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" />
          </WrapperInput>
        )}
        <WrapperInput
          style={{
            position: 'relative',
          }}
        >
          <label htmlFor="password">Senha</label>
          <input type={show ? 'text' : 'password'} id="password" />
          <button
            type="button"
            onClick={() => setShow(!show)}
            style={{
              position: 'absolute',
              right: '5px',
              bottom: '8px',
              background: 'transparent',
              border: 'none',
            }}
          >
            <img
              style={{
                width: '20px',
              }}
              alt="eye"
              src={Eye}
            />
          </button>
        </WrapperInput>
        <LoginButton>
          {isLogin ? 'Criar nova conta (R)' : 'Entrar (R)'}
        </LoginButton>
      </form>
      <SubtextContainter>
        {isLogin ? 'Já tem uma conta?' : 'Não tem uma conta?'}
        <button type="button" onClick={() => setIsLogin(p => !p)}>
          {isLogin ? 'Faça login agora mesmo' : 'Cadastre-se gratuitamente.'}
        </button>
        <img
          alt="line"
          src={Line}
          style={{
            position: 'absolute',
            right: '110px',
            top: '20px',
          }}
        />
      </SubtextContainter>
    </LoginBotContainer>
  );
};

export default LoginBot;
