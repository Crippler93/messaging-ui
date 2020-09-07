const validEmailRegex = RegExp(
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@\"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
)

export function validateForm(name: string, value: string): string {
  switch (name) {
    case 'email': {
      return validEmailRegex.test(value) ? '' : 'Email is not valid'
    }
    default:
      return ''
  }
}
