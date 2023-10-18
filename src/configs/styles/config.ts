export interface ISizesProps {
  p: string
  p12: string
  p14: string
  p18: string
  p24: string
  p32: string
}

export interface IColorsProps {
  white: string
  black: string
  darkGray: string
  lightGray: string
  primary: string
}

export const COLORS: IColorsProps = {
  white: '#fff',
  darkGray: '#1D1D1D',
  lightGray: '#F2F2F2',
  black: '#000',
  primary: '#E40F0F',
}

export const SIZES: ISizesProps = {
  p: '8',
  p12: '12',
  p14: '14',
  p18: '18',
  p24: '24',
  p32: '32',
}


export const Theme = {
  color: {
    white: '#fff',
    darkGray: '#1D1D1D',
    lightGray: '#F2F2F2',
    black: '#000',
    primary: '#E40F0F',
  },
  font: {
    p: '8px',
    p12: '12px',
    p14: '14px',
    p18: '18px',
    p24: '24px',
    p32: '32px',
  },
};
