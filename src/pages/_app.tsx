import { FC } from 'react';
import Layout from "shared/Layout";
import { AppProps } from 'next/app';
import '../styles/app.scss';

const App:FC = ({ Component, pageProps }:AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App;
