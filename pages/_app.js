import '../styles/globals.css';
import '../styles/scss/styles.scss';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Classified Ads</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
