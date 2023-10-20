// _app.tsx
import { AppProps } from 'next/app';
import {LayouT }from './components/layouts'; // Ajusta la ruta según la ubicación de LayouT

function MyApp({ Component, pageProps }: AppProps) {
  console.log('first3')

  return (
    <LayouT>
      <Component {...pageProps} />
    </LayouT>
  );
}

export default MyApp;
