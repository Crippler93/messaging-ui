import { stateProps, actionProps } from './types'

export default function reducer(state: stateProps, action: actionProps) {
  switch (action.type) {
    case 'field': {
      return {
        ...state,
        [action.payload.fieldName]: action.payload.value
      }
    }
    case 'login': {
      return {
        ...state,
        error: {
          user_name: '',
          password: '',
          new_password: ''
        },
        isLoading: true
      }
    }
    case 'success': {
      return {
        ...state,
        isLoading: false
      }
    }
    case 'error': {
      return {
        ...state,
        error: action.payload,
        isLoading: false
      }
    }
    default:
      return state
  }
}
