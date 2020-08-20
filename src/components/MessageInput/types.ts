export interface CompProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onSend: (event?: React.MouseEvent<HTMLButtonElement>) => void
  [x: string]: any
}
