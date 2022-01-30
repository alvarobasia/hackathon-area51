import { FC } from 'react';

import BotHeader from '../../Components/BotHeader';

import { Container, Content, ImageSlider, Infos } from './styles';

import Test from '../../../../assets/Test.png';
import BotSelector from '../../Components/BotSelector';

const PDP: FC = () => {
  return (
    <Container>
      <BotHeader />

      <Content>
        <ImageSlider>
          {/* <img src={Test} alt="img" className="main-image" />

          <div>
            <img src={Test} alt="img" />
            <img src={Test} alt="img" />
            <img src={Test} alt="img" />
          </div> */}
        </ImageSlider>

        <Infos>
          <h2>Moletom Caveira </h2>

          <p>
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industrys standard dummy text ever since the
            1500s
          </p>

          <div className="selectors">
            <BotSelector
              options={[
                {
                  value: 'a',
                },
                {
                  value: 'B',
                },
              ]}
            />
          </div>
        </Infos>
      </Content>
    </Container>
  );
};

export default PDP;
