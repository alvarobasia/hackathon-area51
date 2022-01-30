import { useCallback, useState } from 'react';
import { SkuShelfContainer, ButtonSku } from './styles';

interface ISkuProps {
  skus: string[];
  onChange?: (sku: string) => void;
}

const SKUShelf: React.FC<ISkuProps> = ({ skus, onChange }: ISkuProps) => {
  const [selectedSku, setSelectedSku] = useState<string | null>(null);

  const selectSku = useCallback(
    (sku: string) => {
      if (onChange) {
        onChange(sku);
        setSelectedSku(sku);
      }
    },
    [onChange],
  );

  return (
    <SkuShelfContainer>
      {skus.map(sku => (
        <ButtonSku
          isSelected={selectedSku === sku}
          disabled={selectedSku === sku}
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
