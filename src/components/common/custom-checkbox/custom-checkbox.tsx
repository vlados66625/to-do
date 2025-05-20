'use client';
import { StyledInput, PseudoCheckbox, StyledLabel } from './styles';

type CustonCheckboxProps = {
  labelText: string;
}

export default function CustonCheckbox({ labelText }: CustonCheckboxProps) {
  return (
    <StyledLabel>
      <StyledInput $labelText={labelText} />
      <PseudoCheckbox />
      {labelText}
    </StyledLabel>
  );
}
