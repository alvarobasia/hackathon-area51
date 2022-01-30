import { useCallback } from 'react';
import { SkuShelfContainer, ButtonSku } from './styles';

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
        <ButtonSku
          onClick={e => {
            e.stopPropagation();
            selectSku(sku);
          }}
          type="button"
        >
          {sku}
        </ButtonSku>
      ))}
    </SkuShelfContainer>
  );
};

export default SKUShelf;
