import React, { useState } from "react";


const Download = () => {
    const [downloadHover, setDownloadHover] = useState(false)
  return (
    <div
        onMouseEnter={()=>setDownloadHover(true)}
        onMouseLeave={()=>setDownloadHover(false)}
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
          stroke={ downloadHover  ? "#FF3354" : "white" }
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export { Download };
