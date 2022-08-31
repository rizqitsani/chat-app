import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SocketProvider } from '../context/SocketContext';
import { UserProvider } from '../context/UserContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SocketProvider>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </SocketProvider>
  );
}

export default MyApp;
