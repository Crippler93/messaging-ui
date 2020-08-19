export const fetchAllMessages = (): Promise<any[]> =>
  fetch('http://localhost:4000/messages').then((res) => res.json())
