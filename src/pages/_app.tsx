import { FC } from "react";
import NextNProgress from "nextjs-progressbar";
import Layout from "shared/Layout";
import { AppProps } from "next/app";
import "../styles/app.scss";

const App: FC = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <NextNProgress color="#29D" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true}/>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default App;
