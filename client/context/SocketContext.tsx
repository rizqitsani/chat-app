import * as React from 'react';
import { io, Socket } from 'socket.io-client';

type SocketProviderProps = { children: React.ReactNode };

const SocketStateContext = React.createContext<Socket | undefined>(undefined);

function SocketProvider({ children }: SocketProviderProps) {
  const socket = io('http://localhost:5000');

  return (
    <SocketStateContext.Provider value={socket}>
      {children}
    </SocketStateContext.Provider>
  );
}

function useSocket() {
  const context = React.useContext(SocketStateContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}

export { SocketProvider, useSocket };
