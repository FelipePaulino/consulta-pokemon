export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  stylepattern?: 'primary' | 'secondary'
  fullwidth?: boolean
}
