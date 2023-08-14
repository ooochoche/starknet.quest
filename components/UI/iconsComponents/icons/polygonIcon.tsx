import React, { FunctionComponent } from "react";

const PolygonIcon: FunctionComponent<IconProps> = ({ width, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={width}
      viewBox="0 0 73 75"
      fill="none"
    >
      <g filter="url(#filter0_d_1423_4009)">
        <path
          d="M35.1607 24.9897C36.2215 24.3773 37.5285 24.3773 38.5893 24.9897L45.553 29.0103C46.6138 29.6227 47.2673 30.7546 47.2673 31.9795V40.0205C47.2673 41.2454 46.6138 42.3773 45.553 42.9897L38.5893 47.0103C37.5285 47.6227 36.2215 47.6227 35.1607 47.0103L28.197 42.9897C27.1362 42.3773 26.4827 41.2454 26.4827 40.0205V31.9795C26.4827 30.7546 27.1362 29.6227 28.197 29.0103L35.1607 24.9897Z"
          fill="url(#paint0_linear_1423_4009)"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1423_4009"
          x="0.770088"
          y="0.530517"
          width="72.2098"
          height="74.3675"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1.71429" />
          <feGaussianBlur stdDeviation="12.8571" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0.345098 0 0 0 0 0.14902 0 0 0 0.16 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1423_4009"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1423_4009"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1423_4009"
          x1="24.8466"
          y1="36"
          x2="48.8466"
          y2="36"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#6AFFAF" />
          <stop offset="1" stop-color="#5CE3FE" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default PolygonIcon;
