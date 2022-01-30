import { FC, useCallback, useState } from 'react';

import { Container, Options } from './styles';

type IOption = {
  value: string;
  action?: (props: any) => void;
};

type ITypes = {
  options: IOption[];
  placeholder?: string;
  onChange?: (data: IOption) => void;
};

const BotSelector: FC<ITypes> = ({ options, placeholder, onChange }) => {
  const [valueSelected, setValueSelected] = useState('');
  const [openModal, setOpenModal] = useState(false);

  const handleSelect = useCallback(
    (data: IOption) => {
      setValueSelected(data.value);

      if (onChange) {
        onChange(data);
      }
    },
    [onChange],
  );

  const toggleModal = useCallback(() => {
    setOpenModal(!openModal);
  }, [openModal]);

  return (
    <Container>
      <input
        placeholder={placeholder}
        value={valueSelected}
        readOnly
        onClick={toggleModal}
      />

      <Options isOpen={openModal}>
        {options.map(option => (
          <button
            key={option.value}
            onClick={() => handleSelect(option)}
            type="button"
            className={`${valueSelected === option.value ? 'active' : ''}`}
          >
            {option.value}
          </button>
        ))}
      </Options>
    </Container>
  );
};

export default BotSelector;
