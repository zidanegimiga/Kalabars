import React, { useState } from "react";
import styles from "./Icons.module.scss";
import { toast } from "react-toastify";

const Like = ({ name }) => {
  const [liked, setLiked] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleLikeIconClick = () => {
    setLiked(!liked);
    if (liked === false) {
      toast(`${name} liked!`, {
        theme: "dark",
        style: {
          backgroundColor: "#282828",
        },
        progressStyle: {
          backgroundColor: "#FF3354",
        },
      });
    }
  };

  return (
    <div
      style={{ cursor: "pointer" }}
      onClick={handleLikeIconClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={styles.likeButton}
    >
      <div className={styles.heartBG}>
        <div
          className={
            liked
              ? styles["heartIconLiked"] + " " + styles["heartIcon"]
              : styles.heartIcon
          }
        ></div>
      </div>
    </div>
  );
};

const Comment = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <path
          d="M16 28C18.3734 28 20.6935 27.2962 22.6668 25.9776C24.6402 24.6591 26.1783 22.7849 27.0866 20.5922C27.9948 18.3995 28.2324 15.9867 27.7694 13.6589C27.3064 11.3312 26.1635 9.19295 24.4853 7.51472C22.8071 5.83649 20.6689 4.6936 18.3411 4.23058C16.0133 3.76756 13.6005 4.0052 11.4078 4.91345C9.21509 5.8217 7.34094 7.35977 6.02236 9.33316C4.70379 11.3066 4 13.6266 4 16C4 17.984 4.48 19.8547 5.33333 21.5027L4 28L10.4973 26.6667C12.1453 27.52 14.0173 28 16 28Z"
          stroke="#FEFEFE"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

const Facebook = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="38"
        viewBox="0 0 36 38"
        fill="none"
      >
        <g filter="url(#filter0_d_656_108)">
          <path
            d="M31.3334 16.0001C31.3334 8.64008 25.36 2.66675 18 2.66675C10.64 2.66675 4.66669 8.64008 4.66669 16.0001C4.66669 22.4534 9.25335 27.8267 15.3334 29.0667V20.0001H12.6667V16.0001H15.3334V12.6667C15.3334 10.0934 17.4267 8.00008 20 8.00008H23.3334V12.0001H20.6667C19.9334 12.0001 19.3334 12.6001 19.3334 13.3334V16.0001H23.3334V20.0001H19.3334V29.2667C26.0667 28.6001 31.3334 22.9201 31.3334 16.0001Z"
            fill="white"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_656_108"
            x="-2"
            y="0"
            width="40"
            height="40"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_656_108"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_656_108"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

const Twitter = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
      >
        <g clipPath="url(#clip0_656_110)" filter="url(#filter0_d_656_110)">
          <path
            d="M20 0.639893C11.5168 0.639893 4.64001 7.51669 4.64001 15.9999C4.64001 24.4831 11.5168 31.3599 20 31.3599C28.4832 31.3599 35.36 24.4831 35.36 15.9999C35.36 7.51669 28.4832 0.639893 20 0.639893ZM26.248 13.2223C26.2544 13.3535 26.256 13.4847 26.256 13.6127C26.256 17.6127 23.2144 22.2223 17.6496 22.2223C16.0053 22.225 14.3952 21.7528 13.0128 20.8623C13.248 20.8911 13.4896 20.9023 13.7344 20.9023C15.152 20.9023 16.456 20.4207 17.4912 19.6079C16.8604 19.5955 16.2491 19.3866 15.7426 19.0103C15.2361 18.634 14.8596 18.1091 14.6656 17.5087C15.1187 17.5948 15.5854 17.5768 16.0304 17.4559C15.3457 17.3174 14.7299 16.9464 14.2875 16.4058C13.8452 15.8651 13.6034 15.1881 13.6032 14.4895V14.4527C14.0112 14.6783 14.4784 14.8159 14.9744 14.8319C14.3325 14.4046 13.8781 13.7482 13.7041 12.9969C13.5301 12.2456 13.6497 11.4563 14.0384 10.7903C14.7983 11.7247 15.746 12.4891 16.8201 13.034C17.8942 13.5789 19.0708 13.8922 20.2736 13.9535C20.1207 13.3044 20.1865 12.6229 20.4608 12.0151C20.7352 11.4073 21.2026 10.9071 21.7905 10.5923C22.3784 10.2776 23.0539 10.1658 23.7118 10.2746C24.3698 10.3833 24.9734 10.7063 25.4288 11.1935C26.1059 11.0595 26.7552 10.8112 27.3488 10.4591C27.1232 11.1601 26.6507 11.7554 26.0192 12.1343C26.619 12.0621 27.2046 11.9008 27.7568 11.6559C27.3512 12.2637 26.8402 12.7942 26.248 13.2223Z"
            fill="white"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_656_110"
            x="0"
            y="0"
            width="40"
            height="40"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_656_110"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_656_110"
              result="shape"
            />
          </filter>
          <clipPath id="clip0_656_110">
            <rect
              width="32"
              height="32"
              fill="white"
              transform="translate(4)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

const EmptyQueue = () => {
  return (
    <div className={styles.emptyQueueIndicator}>
      <svg
        width="200"
        height="191"
        viewBox="0 0 200 191"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          y="51.4336"
          width="126"
          height="144"
          rx="8"
          transform="rotate(-15 0 51.4336)"
          fill="#F1EEEE"
        />
        <rect
          x="1.22474"
          y="52.1407"
          width="124"
          height="142"
          rx="7"
          transform="rotate(-15 1.22474 52.1407)"
          stroke="#FF3A5A"
          strokeOpacity="0.7"
          strokeWidth="2"
          strokeDasharray="8 8"
        />
        <rect
          x="77.7444"
          y="19"
          width="126"
          height="144"
          rx="8"
          transform="rotate(15 77.7444 19)"
          fill="#F1EEEE"
        />
        <rect
          x="78.4515"
          y="20.2247"
          width="124"
          height="142"
          rx="7"
          transform="rotate(15 78.4515 20.2247)"
          stroke="#FF3A5A"
          strokeOpacity="0.7"
          strokeWidth="2"
          strokeDasharray="8 8"
        />
        <rect x="36.4744" width="126" height="189" rx="8" fill="#F1EEEE" />
        <rect
          x="37.4744"
          y="1"
          width="124"
          height="187"
          rx="7"
          stroke="#FF3A5A"
          strokeOpacity="0.7"
          strokeWidth="2"
          strokeDasharray="8 8"
        />
        <g clipPath="url(#clip0_618_325)">
          <path
            d="M105.808 101.333L129.141 86.3332L105.808 71.3332V101.333ZM94.141 113C92.3077 113 90.7388 112.348 89.4343 111.043C88.1277 109.737 87.4743 108.167 87.4743 106.333V66.3332C87.4743 64.4998 88.1277 62.9298 89.4343 61.6232C90.7388 60.3187 92.3077 59.6665 94.141 59.6665H134.141C135.974 59.6665 137.544 60.3187 138.851 61.6232C140.155 62.9298 140.808 64.4998 140.808 66.3332V106.333C140.808 108.167 140.155 109.737 138.851 111.043C137.544 112.348 135.974 113 134.141 113H94.141ZM80.8077 126.333C78.9743 126.333 77.4054 125.681 76.101 124.377C74.7943 123.07 74.141 121.5 74.141 119.667V72.9998H80.8077V119.667H127.474V126.333H80.8077Z"
            fill="#FF3A5A"
            fillOpacity="0.7"
          />
          <path
            d="M77.4744 70C77.7577 70 77.9954 69.904 78.1874 69.712C78.3787 69.5207 78.4744 69.2833 78.4744 69V66H81.4994C81.7827 66 82.016 65.904 82.1994 65.712C82.3827 65.5207 82.4744 65.2833 82.4744 65C82.4744 64.7167 82.3784 64.479 82.1864 64.287C81.995 64.0957 81.7577 64 81.4744 64H78.4744V60.975C78.4744 60.6917 78.3787 60.4583 78.1874 60.275C77.9954 60.0917 77.7577 60 77.4744 60C77.191 60 76.9537 60.0957 76.7624 60.287C76.5704 60.479 76.4744 60.7167 76.4744 61V64H73.4494C73.166 64 72.9327 64.0957 72.7494 64.287C72.566 64.479 72.4744 64.7167 72.4744 65C72.4744 65.2833 72.57 65.5207 72.7614 65.712C72.9534 65.904 73.191 66 73.4744 66H76.4744V69.025C76.4744 69.3083 76.5704 69.5417 76.7624 69.725C76.9537 69.9083 77.191 70 77.4744 70ZM77.4744 75C76.091 75 74.791 74.7373 73.5744 74.212C72.3577 73.6873 71.2994 72.975 70.3994 72.075C69.4994 71.175 68.787 70.1167 68.2624 68.9C67.737 67.6833 67.4744 66.3833 67.4744 65C67.4744 63.6167 67.737 62.3167 68.2624 61.1C68.787 59.8833 69.4994 58.825 70.3994 57.925C71.2994 57.025 72.3577 56.3123 73.5744 55.787C74.791 55.2623 76.091 55 77.4744 55C78.8577 55 80.1577 55.2623 81.3744 55.787C82.591 56.3123 83.6494 57.025 84.5494 57.925C85.4494 58.825 86.1617 59.8833 86.6864 61.1C87.2117 62.3167 87.4744 63.6167 87.4744 65C87.4744 66.3833 87.2117 67.6833 86.6864 68.9C86.1617 70.1167 85.4494 71.175 84.5494 72.075C83.6494 72.975 82.591 73.6873 81.3744 74.212C80.1577 74.7373 78.8577 75 77.4744 75Z"
            fill="#FF3A5A"
          />
        </g>
        <defs>
          <clipPath id="clip0_618_325">
            <rect
              width="80"
              height="80"
              fill="white"
              transform="translate(67.4744 53)"
            />
          </clipPath>
        </defs>
      </svg>
      <p className={styles.emptyQueueText}>Queue Empty</p>
    </div>
  );
};

export { Like, Comment, Twitter, Facebook, EmptyQueue };
