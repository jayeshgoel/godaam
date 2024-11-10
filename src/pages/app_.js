// pages/_app.js

import '@/styles/globals.css'; // Make sure to import the global CSS file
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
