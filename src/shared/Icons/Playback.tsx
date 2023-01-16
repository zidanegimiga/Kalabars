import React, { useState } from "react";

const Play = ({ action }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      onClick={action}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25.4 48.0662C24.5111 48.644 23.6107 48.6769 22.6987 48.1649C21.7884 47.6547 21.3333 46.8662 21.3333 45.7996V18.1996C21.3333 17.1329 21.7884 16.3436 22.6987 15.8316C23.6107 15.3213 24.5111 15.3551 25.4 15.9329L47.1333 29.7329C47.9333 30.2662 48.3333 31.0218 48.3333 31.9996C48.3333 32.9773 47.9333 33.7329 47.1333 34.2662L25.4 48.0662Z"
          fill={hover ? "yellow" : "#F8F8F8"}
        />
      </svg>
    </div>
  );
};

const Pause = ({ action }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      onClick={action}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.3333 46.3835C24.2667 46.3835 26.6667 44.2589 26.6667 41.6621V18.0549C26.6667 15.4581 24.2667 13.3335 21.3333 13.3335C18.4 13.3335 16 15.4581 16 18.0549V41.6621C16 44.2589 18.4 46.3835 21.3333 46.3835ZM37.3333 18.0549V41.6621C37.3333 44.2589 39.7333 46.3835 42.6667 46.3835C45.6 46.3835 48 44.2589 48 41.6621V18.0549C48 15.4581 45.6 13.3335 42.6667 13.3335C39.7333 13.3335 37.3333 15.4581 37.3333 18.0549Z"
          fill={hover ? "yellow" : "#F8F8F8"}
        />
      </svg>
    </div>
  );
};

const Rewind = ({ action }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      onClick={action}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M33.3333 8C45.7333 8 56.2133 16.08 59.92 27.2533L53.6 29.3333C50.8 20.8267 42.7733 14.6667 33.3333 14.6667C28.1067 14.6667 23.3867 16.5867 19.68 19.68L26.6667 26.6667H8V8L14.9333 14.9333C19.8667 10.6667 26.2667 8 33.3333 8ZM24 32H40V37.3333H29.3333V42.6667H34.6667C36.0812 42.6667 37.4377 43.2286 38.4379 44.2288C39.4381 45.229 40 46.5855 40 48V53.3333C40 56.2933 37.6267 58.6667 34.6667 58.6667H24V53.3333H34.6667V48H24V32Z"
          fill={hover ? "yellow" : "#F8F8F8"}
        />
      </svg>
    </div>
  );
};

const Forward = ({ action }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      onClick={action}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30.6667 8C37.7334 8 44.1333 10.6667 49.0667 14.9333L56 8V26.6667H37.3334L44.32 19.68C40.6134 16.5867 35.8934 14.6667 30.6667 14.6667C21.2267 14.6667 13.2 20.8267 10.4 29.3333L4.08002 27.2533C7.78668 16.08 18.2667 8 30.6667 8ZM24 32H40V37.3333H29.3334V42.6667H34.6667C36.0812 42.6667 37.4377 43.2286 38.4379 44.2288C39.4381 45.229 40 46.5855 40 48V53.3333C40 56.2933 37.6267 58.6667 34.6667 58.6667H24V53.3333H34.6667V48H24V32Z"
          fill={hover ? "yellow" : "#F8F8F8"}
        />
      </svg>
    </div>
  );
};

export { Play, Pause, Rewind, Forward };
