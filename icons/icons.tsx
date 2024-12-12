import * as React from "react";
import { IconSvgProps } from "../types";

export const DayIcon: React.FC<IconSvgProps> = ({
  size = 25,
  width = size,
  height = size,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 512 512"
    {...props}
  >
    <defs>
      <linearGradient
        id="a"
        x1={150}
        x2={234}
        y1={119.2}
        y2={264.8}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#fbbf24" />
        <stop offset={0.5} stopColor="#fbbf24" />
        <stop offset={1} stopColor="#f59e0b" />
      </linearGradient>
      <symbol id="b" viewBox="0 0 384 384">
        <circle
          cx={192}
          cy={192}
          r={84}
          fill="url(#a)"
          stroke="#f8af18"
          strokeMiterlimit={10}
          strokeWidth={6}
        />
        <path
          fill="none"
          stroke="#fbbf24"
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={24}
          d="M192 61.7V12m0 360v-49.7m92.2-222.5 35-35M64.8 319.2l35.1-35.1m0-184.4-35-35m254.5 254.5-35.1-35.1M61.7 192H12m360 0h-49.7"
        >
          <animateTransform
            additive="sum"
            attributeName="transform"
            dur="6s"
            repeatCount="indefinite"
            type="rotate"
            values="0 192 192; 45 192 192"
          />
        </path>
      </symbol>
    </defs>
    <use width={384} height={384} href="#b" transform="translate(64 64)" />
  </svg>
);

export const NightIcon: React.FC<IconSvgProps> = ({
  size = 25,
  width = size,
  height = size,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 512 512"
    {...props}
  >
    <defs>
      <symbol id="meteoconsStarryNight0" viewBox="0 0 279 279">
        <path
          fill="none"
          stroke="#72b9d5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={15}
          d="M256.8 173.1A133.3 133.3 0 0 1 122.4 40.7A130.5 130.5 0 0 1 127 7.5A133 133 0 0 0 7.5 139.1c0 73.1 60 132.4 134.2 132.4c62.5 0 114.8-42.2 129.8-99.2a135.6 135.6 0 0 1-14.8.8Z"
        >
          <animateTransform
            additive="sum"
            attributeName="transform"
            dur="6s"
            repeatCount="indefinite"
            type="rotate"
            values="-15 135 135; 9 135 135; -15 135 135"
          ></animateTransform>
        </path>
      </symbol>
    </defs>
    <path
      fill="#fcd34d"
      d="m282.8 162.8l25-6.4a1.8 1.8 0 0 1 1.7.5l18.3 18a1.8 1.8 0 0 0 3-1.7l-6.4-25a1.8 1.8 0 0 1 .5-1.7l18-18.4a1.8 1.8 0 0 0-1.8-3l-24.9 6.5a1.8 1.8 0 0 1-1.7-.5l-18.4-18a1.8 1.8 0 0 0-3 1.7l6.5 25a1.8 1.8 0 0 1-.5 1.7l-18 18.3a1.8 1.8 0 0 0 1.7 3Z"
    >
      <animateTransform
        additive="sum"
        attributeName="transform"
        calcMode="spline"
        dur="6s"
        keySplines=".42, 0, .58, 1; .42, 0, .58, 1"
        repeatCount="indefinite"
        type="rotate"
        values="-15 312 144; 15 312 144; -15 312 144"
      ></animateTransform>
      <animate
        attributeName="opacity"
        dur="6s"
        values="1; .75; 1; .75; 1; .75; 1"
      ></animate>
    </path>
    <path
      fill="#fcd34d"
      d="m285.4 193.4l12 12.3a1.2 1.2 0 0 1 .3 1.1l-4.3 16.6a1.2 1.2 0 0 0 2 1.2l12.3-12a1.2 1.2 0 0 1 1.1-.3l16.6 4.3a1.2 1.2 0 0 0 1.2-2l-12-12.3a1.2 1.2 0 0 1-.3-1.1l4.3-16.6a1.2 1.2 0 0 0-2-1.2l-12.3 12a1.2 1.2 0 0 1-1.1.3l-16.7-4.3a1.2 1.2 0 0 0-1.1 2Z"
    >
      <animateTransform
        additive="sum"
        attributeName="transform"
        begin="-.33s"
        calcMode="spline"
        dur="6s"
        keySplines=".42, 0, .58, 1; .42, 0, .58, 1"
        repeatCount="indefinite"
        type="rotate"
        values="-15 306 204; 15 306 204; -15 306 204"
      ></animateTransform>
      <animate
        attributeName="opacity"
        begin="-.33s"
        dur="6s"
        values="1; .75; 1; .75; 1; .75; 1"
      ></animate>
    </path>
    <path
      fill="#fcd34d"
      d="m337.3 223.7l24.8 7a1.8 1.8 0 0 1 1.3 1.2l6.9 24.8a1.8 1.8 0 0 0 3.4 0l7-24.8a1.8 1.8 0 0 1 1.2-1.3l24.8-6.9a1.8 1.8 0 0 0 0-3.4l-24.8-7a1.8 1.8 0 0 1-1.3-1.2l-6.9-24.8a1.8 1.8 0 0 0-3.4 0l-7 24.8a1.8 1.8 0 0 1-1.2 1.3l-24.8 6.9a1.8 1.8 0 0 0 0 3.4Z"
    >
      <animateTransform
        additive="sum"
        attributeName="transform"
        begin="-.67s"
        calcMode="spline"
        dur="6s"
        keySplines=".42, 0, .58, 1; .42, 0, .58, 1"
        repeatCount="indefinite"
        type="rotate"
        values="-15 372 222; 15 372 222; -15 372 222"
      ></animateTransform>
      <animate
        attributeName="opacity"
        begin="-.67s"
        dur="6s"
        values="1; .75; 1; .75; 1; .75; 1"
      ></animate>
    </path>
    <use
      width={279}
      height={279}
      href="#meteoconsStarryNight0"
      transform="translate(116.5 116.5)"
    ></use>
  </svg>
);

export const MenuIcon: React.FC<IconSvgProps> = ({}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={42}
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"
    ></path>
  </svg>
);

export const CloseIcon: React.FC<IconSvgProps> = ({}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={42}
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"
    ></path>
  </svg>
);
