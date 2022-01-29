import { useCallback } from 'react';
import { SkuShelfContainer } from './styles';

interface ISkuProps {
  skus: string[];
  onChange?: (sku: string) => void;
}

const SKUShelf = ({ skus, onChange }: ISkuProps) => {
  const selectSku = useCallback(
    (sku: string) => {
      if (onChange) {
        onChange(sku);
      }
    },
    [onChange],
  );

  return (
    <SkuShelfContainer>
      {skus.map(sku => (
        <button onClick={() => selectSku(sku)} type="button">
          {sku}
        </button>
      ))}
    </SkuShelfContainer>
  );
};

export default SKUShelf;
