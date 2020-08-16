export const fetchAllStates = (): Promise<any[]> =>
  fetch('http://localhost:4000/states').then((res) => res.json())
