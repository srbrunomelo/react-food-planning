export type ButtonType = {
  variant?: 'default' | 'primary'
  label?: string
  isFull?: boolean
  disabled?: boolean
  size?: 'small' | 'large'
  onClick?: () => void
}