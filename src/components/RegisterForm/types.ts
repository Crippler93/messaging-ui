type errorProps = {
  password: string
  user_name: string
  new_password: string
}
export type stateProps = {
  password: string
  new_password: string
  user_name: string
  error: errorProps
  isLoading: boolean
}

export type actionProps = {
  payload: any
  type: string
}

export type inputEvent = React.ChangeEvent<HTMLInputElement>

export type formEvent = React.FormEvent<HTMLFormElement>
