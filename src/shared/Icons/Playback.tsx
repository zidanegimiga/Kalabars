import React, { useState } from "react";
import styles from "./Icons.module.scss";

const Play = ({ action }) => {
  return (
    <div onClick={action} className={styles.playIcon}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.playIconSvg}
      >
        <path
          d="M25.4 48.0662C24.5111 48.644 23.6107 48.6769 22.6987 48.1649C21.7884 47.6547 21.3333 46.8662 21.3333 45.7996V18.1996C21.3333 17.1329 21.7884 16.3436 22.6987 15.8316C23.6107 15.3213 24.5111 15.3551 25.4 15.9329L47.1333 29.7329C47.9333 30.2662 48.3333 31.0218 48.3333 31.9996C48.3333 32.9773 47.9333 33.7329 47.1333 34.2662L25.4 48.0662Z"
          fill={"#F8F8F8"}
        />
      </svg>
    </div>
  );
};

const Pause = ({ action }) => {
  return (
    <div onClick={action} className={styles.playIcon}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.playIconSvg}
      >
        <path
          d="M21.3333 46.3835C24.2667 46.3835 26.6667 44.2589 26.6667 41.6621V18.0549C26.6667 15.4581 24.2667 13.3335 21.3333 13.3335C18.4 13.3335 16 15.4581 16 18.0549V41.6621C16 44.2589 18.4 46.3835 21.3333 46.3835ZM37.3333 18.0549V41.6621C37.3333 44.2589 39.7333 46.3835 42.6667 46.3835C45.6 46.3835 48 44.2589 48 41.6621V18.0549C48 15.4581 45.6 13.3335 42.6667 13.3335C39.7333 13.3335 37.3333 15.4581 37.3333 18.0549Z"
          fill={"#F8F8F8"}
        />
      </svg>
    </div>
  );
};

const Rewind = ({ action }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className={styles.seekIcon}
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
          fill={hover ? "#FF3354" : "#F8F8F8"}
        />
      </svg>
    </div>
  );
};

const Forward = ({ action }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className={styles.seekIcon}
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
          fill={hover ? "#FF3354" : "#F8F8F8"}
        />
      </svg>
    </div>
  );
};

const PictureInPicture = ({ action }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className={styles.fullScreen}
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
          d="M21.3334 53.3332H8.00004C7.2928 53.3332 6.61452 53.0522 6.11442 52.5521C5.61433 52.052 5.33337 51.3737 5.33337 50.6665V13.3332C5.33337 12.6259 5.61433 11.9477 6.11442 11.4476C6.61452 10.9475 7.2928 10.6665 8.00004 10.6665H56C56.7073 10.6665 57.3856 10.9475 57.8857 11.4476C58.3858 11.9477 58.6667 12.6259 58.6667 13.3332V21.3332"
          stroke="#F8F8F8"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M56 32H34.6667C33.9594 32 33.2811 32.281 32.781 32.781C32.281 33.2811 32 33.9594 32 34.6667V50.6667C32 51.3739 32.281 52.0522 32.781 52.5523C33.2811 53.0524 33.9594 53.3333 34.6667 53.3333H56C56.7072 53.3333 57.3855 53.0524 57.8856 52.5523C58.3857 52.0522 58.6667 51.3739 58.6667 50.6667V34.6667C58.6667 33.9594 58.3857 33.2811 57.8856 32.781C57.3855 32.281 56.7072 32 56 32Z"
          stroke="#F8F8F8"
          strokeWidth="4"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

const VolumeOn = ({ action }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      onClick={action}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.07407 45.8616C6.91975 45.8616 5.95148 45.4333 5.16926 44.5766C4.38975 43.7229 4 42.6639 4 41.3997V23.5521C4 22.2879 4.38975 21.2275 5.16926 20.3708C5.95148 19.5171 6.91975 19.0902 8.07407 19.0902H20.2963L33.7407 4.36596C35.0309 2.95303 36.507 2.63624 38.1693 3.41558C39.8342 4.1979 40.6667 5.59299 40.6667 7.60084V57.351C40.6667 59.3589 39.8342 60.7525 38.1693 61.5318C36.507 62.3141 35.0309 61.9988 33.7407 60.5859L20.2963 45.8616H8.07407ZM48.8148 50.3235V14.4052C51.8704 15.9669 54.3311 18.3838 56.197 21.6558C58.0657 24.9279 59 28.5346 59 32.4759C59 36.4173 58.0657 39.9868 56.197 43.1845C54.3311 46.3822 51.8704 48.7619 48.8148 50.3235Z"
          fill={hover ? "#FF3354" : "#F8F8F8"}
        />
      </svg>
    </div>
  );
};

const VolumeOff = ({ action }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      onClick={action}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M62 24.8201L59.18 22.0001L52 29.1801L44.82 22.0001L42 24.8201L49.18 32.0001L42 39.1801L44.82 42.0001L52 34.8201L59.18 42.0001L62 39.1801L54.82 32.0001L62 24.8201ZM36 60.0001C35.7354 59.999 35.4736 59.9454 35.2299 59.8424C34.9861 59.7395 34.7652 59.5891 34.58 59.4001L19.34 44.0001H6C5.46957 44.0001 4.96086 43.7894 4.58579 43.4144C4.21071 43.0393 4 42.5306 4 42.0001V22.0001C4 21.4697 4.21071 20.961 4.58579 20.5859C4.96086 20.2109 5.46957 20.0001 6 20.0001H19.34L34.58 4.60014C34.9547 4.22764 35.4616 4.01855 35.99 4.01855C36.5184 4.01855 37.0253 4.22764 37.4 4.60014C37.7768 4.9694 37.9925 5.4726 38 6.00014V58.0001C38 58.5306 37.7893 59.0393 37.4142 59.4144C37.0391 59.7894 36.5304 60.0001 36 60.0001Z"
          fill={hover ? "#FF3354" : "#F8F8F8"}
        />
      </svg>
    </div>
  );
};

const FullScreen = ({ action }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className={styles["fullScreen"] + " " + styles["icon"]}
      onClick={action}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_160_41)">
          <path
            d="M6.72 37.92L0 31.2V48H16.8L10.08 41.28L20.496 30.912L17.088 27.504L6.72 37.92ZM41.28 10.08L48 16.8V0H31.2L37.92 6.72L27.504 17.088L30.912 20.496L41.28 10.08ZM37.92 41.28L31.2 48H48V31.2L41.28 37.92L30.912 27.504L27.504 30.912L37.896 41.304L37.92 41.28ZM10.08 6.72L16.8 0H0V16.8L6.72 10.08L17.088 20.496L20.496 17.088L10.08 6.72Z"
            fill="#F8F8F8"
          />
        </g>
        <defs>
          <clipPath id="clip0_160_41">
            <rect width="48" height="48" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export {
  Play,
  Pause,
  Rewind,
  Forward,
  PictureInPicture,
  VolumeOn,
  VolumeOff,
  FullScreen,
};
