import socketIOClient from 'socket.io-client'

let socket: any

function startSocketConnection(url: string): void {
  socket = socketIOClient(url)
}

function killSocket(): void {
  if (socket) {
    socket.disconnect()
  }
}

export { socket, startSocketConnection, killSocket }
