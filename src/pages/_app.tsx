import { FC } from "react";
import NextNProgress from "nextjs-progressbar";
import Layout from "shared/Layout";
import { AppProps } from "next/app";
import "../styles/app.scss";
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { KalabarsContext, KalabarsProvider } from "global/KalabarsContext";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const App: FC = ({ Component, pageProps }: AppProps) => {
  return (
    <KalabarsProvider>
      <NextNProgress color="#ff5a5a" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true}/>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </KalabarsProvider>
  );
};

export default App;
