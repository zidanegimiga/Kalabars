import { FC } from "react";
import NextNProgress from "nextjs-progressbar";
import Layout from "shared/Layout";
import { AppProps } from "next/app";
import "../styles/app.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { KalabarsContext, KalabarsProvider } from "../global/KalabarsContext";
import { PlaylistProvider } from "global/AudioPlaylistContext";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'react-toastify/dist/ReactToastify.css'

const App: FC = ({ Component, pageProps }: AppProps) => {
  return (
    <div tabIndex={0}>
    {/* <div tabIndex={0} onKeyDown={(e) => e.preventDefault()}> */}
      <KalabarsProvider>
        <NextNProgress
          color="#ff5a5a"
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow={true}
        />
        <PlaylistProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PlaylistProvider>
      </KalabarsProvider>
    </div>
  );
};

export default App;
