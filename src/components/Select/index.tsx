import { nanoid } from 'nanoid';
import * as S from './styles'
import React from 'react';

export interface ICustomSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  direction?: 'row' | 'column'
  children?: React.ReactNode;
  loading?: boolean;
}

const Select = (props: ICustomSelectProps) => {
  return (
    <S.SelectWrapper
      data-testid='select-wrapper'
      direction={props.direction}
      placeholder='Selecione uma opção'>
      {props.label && <S.Label direction={props.direction}>{props.label}</S.Label>}
      <S.SelectStyled direction={props.direction} {...props}>
        <option value="0" hidden>Selecione uma opção</option>
        {props.children}
      </S.SelectStyled>
      {props.error && <S.Error>{props.error}</S.Error>}
    </S.SelectWrapper>
  )
}

export default React.memo(Select);