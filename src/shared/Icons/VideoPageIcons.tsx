import React, { useState } from "react";

const Like = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <mask
          id="mask0_656_120"
        //   style="mask-type:luminance"
          maskUnits="userSpaceOnUse"
          x="1"
          y="4"
          width="30"
          height="26"
        >
          <path
            d="M10 5.33325C5.95001 5.33325 2.66667 8.61659 2.66667 12.6666C2.66667 19.9999 11.3333 26.6666 16 28.2173C20.6667 26.6666 29.3333 19.9999 29.3333 12.6666C29.3333 8.61659 26.05 5.33325 22 5.33325C19.52 5.33325 17.3267 6.56459 16 8.44925C15.3238 7.48606 14.4254 6.69998 13.381 6.15758C12.3366 5.61518 11.1769 5.33242 10 5.33325Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </mask>
        <g mask="url(#mask0_656_120)">
          <path d="M0 0H32V32H0V0Z" fill="white" />
        </g>
      </svg>
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

export { Like, Comment, Twitter, Facebook }
