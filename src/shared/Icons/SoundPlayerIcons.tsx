import React, { useState } from "react";

const Download = () => {
  const [downloadHover, setDownloadHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setDownloadHover(true)}
      onMouseLeave={() => setDownloadHover(false)}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 21.6667L20 26.6667M20 26.6667L25 21.6667M20 26.6667V13.3333M35 20C35 18.0302 34.612 16.0796 33.8582 14.2597C33.1044 12.4399 31.9995 10.7863 30.6066 9.3934C29.2137 8.00052 27.5601 6.89563 25.7403 6.14181C23.9204 5.38799 21.9698 5 20 5C18.0302 5 16.0796 5.38799 14.2597 6.14181C12.4399 6.89563 10.7863 8.00052 9.3934 9.3934C8.00052 10.7863 6.89563 12.4399 6.14181 14.2597C5.38799 16.0796 5 18.0302 5 20C5 23.9782 6.58035 27.7936 9.3934 30.6066C12.2064 33.4196 16.0218 35 20 35C23.9782 35 27.7936 33.4196 30.6066 30.6066C33.4196 27.7936 35 23.9782 35 20Z"
          stroke={downloadHover ? "#FF3354" : "white"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

const Repeat = () => {
  const [downloadHover, setDownloadHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setDownloadHover(true)}
      onMouseLeave={() => setDownloadHover(false)}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23.3334 26.6667H31.6667V35M16.6667 13.3333H8.33339V5M32.3634 15.005C31.4289 12.692 29.8643 10.6875 27.8474 9.21944C25.8304 7.75136 23.4421 6.87857 20.9538 6.70027C18.4656 6.52196 15.9772 7.0453 13.7715 8.21079C11.5659 9.37629 9.73143 11.1372 8.47672 13.2933M7.63672 24.995C8.57138 27.3076 10.136 29.3116 12.1528 30.7794C14.1695 32.2471 16.5576 33.1197 19.0455 33.298C21.5335 33.4763 24.0216 32.9532 26.227 31.788C28.4325 30.6228 30.2669 28.8623 31.5217 26.7067"
          stroke={downloadHover ? "#FF3354" : "white"}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

const Rewind = () => {
  const [downloadHover, setDownloadHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setDownloadHover(true)}
      onMouseLeave={() => setDownloadHover(false)}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.8333 5.52649C28.5833 5.52649 35.1333 10.5765 37.45 17.5598L33.5 18.8598C31.75 13.5432 26.7333 9.69316 20.8333 9.69316C17.5667 9.69316 14.6167 10.8932 12.3 12.8265L16.6667 17.1932H5V5.52649L9.33333 9.85982C12.4167 7.19316 16.4167 5.52649 20.8333 5.52649ZM15 20.5265H25V23.8598H18.3333V27.1932H21.6667C22.5507 27.1932 23.3986 27.5443 24.0237 28.1695C24.6488 28.7946 25 29.6424 25 30.5265V33.8598C25 35.7098 23.5167 37.1932 21.6667 37.1932H15V33.8598H21.6667V30.5265H15V20.5265Z"
          fill={downloadHover ? "#FF3354" : "white"}
        />
      </svg>
    </div>
  );
};

const Play = () => {
  const [downloadHover, setDownloadHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setDownloadHover(true)}
      onMouseLeave={() => setDownloadHover(false)}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 72 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30.435 50.1069C29.6545 50.6142 28.8639 50.6431 28.0631 50.1935C27.2639 49.7455 26.8643 49.0532 26.8643 48.1167V23.8825C26.8643 22.9459 27.2639 22.2529 28.0631 21.8033C28.8639 21.3553 29.6545 21.385 30.435 21.8923L49.5179 34.0093C50.2204 34.4776 50.5716 35.1411 50.5716 35.9996C50.5716 36.8581 50.2204 37.5215 49.5179 37.9898L30.435 50.1069Z"
          fill={downloadHover ? "#FF3354" : "white"}
        />
        <circle
          cx="36"
          cy="36"
          r="30.8451"
          stroke={downloadHover ? "#FF3354" : "white"}
          strokeWidth="4"
        />
      </svg>
    </div>
  );
};

const PauseTest = ({role, width, height}) => {
  const [downloadHover, setDownloadHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setDownloadHover(true)}
      onMouseLeave={() => setDownloadHover(false)}
    >
      <svg
        role={role}
        height={height}
        width={width}
        viewBox="0 0 16 16"
      >
        <path
          fill="black" 
          d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path>
      </svg>
    </div>
  );
};

const PlayTest = ({role, width, height}) => {
  const [downloadHover, setDownloadHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setDownloadHover(true)}
      onMouseLeave={() => setDownloadHover(false)}
    >
      <svg
        role="img"
        height={height}
        width={width}
        aria-hidden="true"
        viewBox="0 0 16 16"
        data-encore-id="icon"
      >
        <path 
          d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"
          fill="black"
        ></path>
      </svg>
    </div>
  );
};

const Forward = () => {
  const [downloadHover, setDownloadHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setDownloadHover(true)}
      onMouseLeave={() => setDownloadHover(false)}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.6799 5.52649C24.0966 5.52649 28.0966 7.19316 31.1799 9.85982L35.5132 5.52649V17.1932H23.8466L28.2132 12.8265C25.8966 10.8932 22.9466 9.69316 19.6799 9.69316C13.7799 9.69316 8.76323 13.5432 7.01323 18.8598L3.06323 17.5598C5.3799 10.5765 11.9299 5.52649 19.6799 5.52649ZM15.5132 20.5265H25.5132V23.8598H18.8466V27.1932H22.1799C23.064 27.1932 23.9118 27.5443 24.5369 28.1695C25.162 28.7946 25.5132 29.6424 25.5132 30.5265V33.8598C25.5132 35.7098 24.0299 37.1932 22.1799 37.1932H15.5132V33.8598H22.1799V30.5265H15.5132V20.5265Z"
          fill={downloadHover ? "#FF3354" : "white"}
        />
      </svg>
    </div>
  );
};

const Shuffle = () => {
  const [downloadHover, setDownloadHover] = useState(false);
  return (
    <svg
      onMouseEnter={() => setDownloadHover(true)}
      onMouseLeave={() => setDownloadHover(false)}
      width="20"
      height="20"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30 33.3333L35 28.3333M35 28.3333L30 23.3333M35 28.3333H28.3333C26.1232 28.3333 24.0036 27.4553 22.4408 25.8925C20.878 24.3297 20 22.2101 20 20C20 18.9056 19.7845 17.822 19.3657 16.8109C18.9469 15.7999 18.333 14.8812 17.5592 14.1074C16.7854 13.3336 15.8667 12.7198 14.8557 12.301C13.8446 11.8822 12.761 11.6666 11.6667 11.6666H5M30 6.66663L35 11.6666M35 11.6666L30 16.6666M35 11.6666H28.3333C26.5298 11.664 24.7746 12.2491 23.3333 13.3333M5 28.3333H11.6667C13.4702 28.3359 15.2254 27.7509 16.6667 26.6666"
        stroke={downloadHover ? "#FF3354" : "white"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export { Download, Shuffle, Play, Forward, Repeat, Rewind, PlayTest, PauseTest };
