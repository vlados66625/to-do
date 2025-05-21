import styled from 'styled-components';
import { visuallyHidden } from '../../mixins/visually-hidden';
import { colorDarkGray } from '../../../const/const-colors';

export const StyledLabel = styled.label`
  display: flex;
  gap: 11px;
  align-items: center;
  width: fit-content;
  font-size: 17px;
  cursor: pointer;
  line-height: 1.3;
  user-select: none;

  &:hover {
    opacity: 0.6;
  }

  &:active {
    opacity: 0.3;
  }

  @media (min-width: 768px) {
    font-size: 25px;
    gap: 18px;
  }
`;

type StyledInputProps = {
  $labelText: string;
}

export const StyledInput = styled.input.attrs<StyledInputProps>((props) => ({
  type: 'checkbox',
  'aria-label': `${props.$labelText}`,
}))`
  ${visuallyHidden}

  &:checked + span::after {
  opacity: 1;
  }
`;

export const PseudoCheckbox = styled.span`
  position: relative;

&::before {
  content:'';
  display: block;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  outline: 1px solid ${colorDarkGray};

  @media (min-width: 768px) {
    width: 35px;
    height: 35px;
  }
}

&::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 15px;
  height: 19px;
  background: url(/pseudo-checked-big.svg) center no-repeat;
  opacity: 0;

  @media (min-width: 768px) {
    width: 26px;
    height: 26px;
    background: url(/pseudo-checked.svg) center no-repeat;
  }
}
`;
