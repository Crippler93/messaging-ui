export const fetchAllUsers = (): Promise<any[]> =>
  fetch('http://localhost:4000/users').then((res) => res.json())
