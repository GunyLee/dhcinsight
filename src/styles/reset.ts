// src/styles/reset.ts
import { css } from "@emotion/react";

export const reset = css`
  /* ===============================
     🎨 Theme Variables
     =============================== */
  :root[data-theme='light'] {
    /* Background & Text */
    --adaptiveBackground: #ffffff;
    --adaptiveLayeredBackground: #f9fafb;
    --adaptiveTextPrimary: #191f28;
    --adaptiveTextSecondary: #4e5968;
    --adaptiveDivider: #e5e8eb;

    /* Grey */
    --adaptiveGrey50: #f9fafb;
    --adaptiveGrey100: #f2f4f6;
    --adaptiveGrey200: #e5e8eb;
    --adaptiveGrey300: #d1d6db;
    --adaptiveGrey400: #b0b8c1;
    --adaptiveGrey500: #8b95a1;
    --adaptiveGrey600: #6b7684;
    --adaptiveGrey700: #4e5968;
    --adaptiveGrey800: #333d4b;
    --adaptiveGrey900: #191f28;

    /* Blue */
    --adaptiveBlue50: #e8f3ff;
    --adaptiveBlue100: #c9e2ff;
    --adaptiveBlue200: #90c2ff;
    --adaptiveBlue300: #64a8ff;
    --adaptiveBlue400: #4593fc;
    --adaptiveBlue500: #3182f6;
    --adaptiveBlue600: #2272eb;
    --adaptiveBlue700: #1b64da;
    --adaptiveBlue800: #1957c2;
    --adaptiveBlue900: #194aa6;

    /* Red */
    --adaptiveRed50: #fff0f1;
    --adaptiveRed100: #ffd4d6;
    --adaptiveRed200: #feafb4;
    --adaptiveRed300: #fb8890;
    --adaptiveRed400: #f66570;
    --adaptiveRed500: #f04452;
    --adaptiveRed600: #e42939;
    --adaptiveRed700: #d22030;
    --adaptiveRed800: #bc1b2a;
    --adaptiveRed900: #a51926;

    /* Orange */
    --adaptiveOrange50: #fff3e0;
    --adaptiveOrange100: #ffe0b0;
    --adaptiveOrange200: #ffcd80;
    --adaptiveOrange300: #ffbd51;
    --adaptiveOrange400: #ffa927;
    --adaptiveOrange500: #fe9800;
    --adaptiveOrange600: #fb8800;
    --adaptiveOrange700: #f57800;
    --adaptiveOrange800: #ed6700;
    --adaptiveOrange900: #e45600;

    /* Yellow */
    --adaptiveYellow50: #fff9e7;
    --adaptiveYellow100: #ffefbf;
    --adaptiveYellow200: #ffe69b;
    --adaptiveYellow300: #ffdd78;
    --adaptiveYellow400: #ffd158;
    --adaptiveYellow500: #ffc342;
    --adaptiveYellow600: #ffb331;
    --adaptiveYellow700: #faa131;
    --adaptiveYellow800: #ee8f11;
    --adaptiveYellow900: #dd7d02;

    /* Green */
    --adaptiveGreen50: #f0faf6;
    --adaptiveGreen100: #aeefd5;
    --adaptiveGreen200: #76e4b8;
    --adaptiveGreen300: #3fd599;
    --adaptiveGreen400: #15c47e;
    --adaptiveGreen500: #03b26c;
    --adaptiveGreen600: #02a262;
    --adaptiveGreen700: #029359;
    --adaptiveGreen800: #028450;
    --adaptiveGreen900: #027648;

    /* Teal */
    --adaptiveTeal50: #edf8f8;
    --adaptiveTeal100: #bce9e9;
    --adaptiveTeal200: #89d8d8;
    --adaptiveTeal300: #58c7c7;
    --adaptiveTeal400: #30b6b6;
    --adaptiveTeal500: #18a5a5;
    --adaptiveTeal600: #109595;
    --adaptiveTeal700: #0c8585;
    --adaptiveTeal800: #097575;
    --adaptiveTeal900: #076565;

    /* Purple */
    --adaptivePurple50: #f9f0fc;
    --adaptivePurple100: #edccf8;
    --adaptivePurple200: #da9bef;
    --adaptivePurple300: #c770e4;
    --adaptivePurple400: #b44bd7;
    --adaptivePurple500: #a234c7;
    --adaptivePurple600: #9128b4;
    --adaptivePurple700: #8222a2;
    --adaptivePurple800: #73228e;
    --adaptivePurple900: #65237b;
  }

  :root[data-theme='dark'] {
    --adaptiveBackground: #17171c;
    --adaptiveLayeredBackground: #202027;
    --adaptiveTextPrimary: #ffffff;
    --adaptiveTextSecondary: #9e9ea4;
    --adaptiveDivider: #3c3c47;

    --adaptiveGrey50: #202027;
    --adaptiveGrey100: #2c2c35;
    --adaptiveGrey200: #3c3c47;
    --adaptiveGrey300: #4d4d59;
    --adaptiveGrey400: #62626d;
    --adaptiveGrey500: #7e7e87;
    --adaptiveGrey600: #9e9ea4;
    --adaptiveGrey700: #c3c3c6;
    --adaptiveGrey800: #e4e4e5;
    --adaptiveGrey900: #ffffff;

    --adaptiveBlue50: #202c4d;
    --adaptiveBlue100: #23386a;
    --adaptiveBlue200: #25478c;
    --adaptiveBlue300: #265ab3;
    --adaptiveBlue400: #2970d9;
    --adaptiveBlue500: #3485fa;
    --adaptiveBlue600: #449bff;
    --adaptiveBlue700: #61b0ff;
    --adaptiveBlue800: #8fcdff;
    --adaptiveBlue900: #c8e7ff;

    --adaptiveRed50: #3c2020;
    --adaptiveRed100: #562025;
    --adaptiveRed200: #7a242d;
    --adaptiveRed300: #9e2733;
    --adaptiveRed400: #ca2f3d;
    --adaptiveRed500: #f04251;
    --adaptiveRed600: #fa616d;
    --adaptiveRed700: #fe818b;
    --adaptiveRed800: #ffa8ad;
    --adaptiveRed900: #ffd1d3;

    --adaptiveOrange50: #3d2500;
    --adaptiveOrange100: #563200;
    --adaptiveOrange200: #804600;
    --adaptiveOrange300: #a85f00;
    --adaptiveOrange400: #cf7200;
    --adaptiveOrange500: #f18600;
    --adaptiveOrange600: #fd9528;
    --adaptiveOrange700: #ffa861;
    --adaptiveOrange800: #ffc39e;
    --adaptiveOrange900: #ffe4d6;

    --adaptiveYellow50: #3d2d1a;
    --adaptiveYellow100: #724c1e;
    --adaptiveYellow200: #b56f1d;
    --adaptiveYellow300: #eb8b1e;
    --adaptiveYellow400: #ffa126;
    --adaptiveYellow500: #ffb134;
    --adaptiveYellow600: #ffc259;
    --adaptiveYellow700: #ffd68a;
    --adaptiveYellow800: #ffe5b2;
    --adaptiveYellow900: #fff1d4;

    --adaptiveGreen50: #153729;
    --adaptiveGreen100: #135338;
    --adaptiveGreen200: #136d47;
    --adaptiveGreen300: #138a59;
    --adaptiveGreen400: #13a065;
    --adaptiveGreen500: #16bb76;
    --adaptiveGreen600: #26cf88;
    --adaptiveGreen700: #4ee4a6;
    --adaptiveGreen800: #82f6c5;
    --adaptiveGreen900: #ccffea;

    --adaptiveTeal50: #203537;
    --adaptiveTeal100: #224e51;
    --adaptiveTeal200: #226368;
    --adaptiveTeal300: #247e85;
    --adaptiveTeal400: #26939a;
    --adaptiveTeal500: #2eaab2;
    --adaptiveTeal600: #43bec7;
    --adaptiveTeal700: #65d4dc;
    --adaptiveTeal800: #9be8ee;
    --adaptiveTeal900: #d6fcff;

    --adaptivePurple50: #3f2447;
    --adaptivePurple100: #522361;
    --adaptivePurple200: #66247b;
    --adaptivePurple300: #7b2595;
    --adaptivePurple400: #962fb5;
    --adaptivePurple500: #ae3dd1;
    --adaptivePurple600: #c353e5;
    --adaptivePurple700: #d77cf2;
    --adaptivePurple800: #eaacfc;
    --adaptivePurple900: #f6d9ff;
  }

  /* ===============================
     🔧 Base Reset
     =============================== */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    font-family: "Pretendard", "LINESeedKR", "Noto Sans KR", sans-serif;
    background-color: var(--adaptiveBackground);
    color: var(--adaptiveTextPrimary);
    transition: background-color 0.25s ease, color 0.25s ease;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 14px
  }

  button,
  input,
  textarea {
    font-family: inherit;
    color: inherit;
  }

  button:disabled,
  input:disabled {
    cursor: not-allowed;
  }

  /* ===============================
     ✨ Utility Classes
     =============================== */
  .text-primary {
    color: var(--adaptiveTextPrimary);
  }

  .text-secondary {
    color: var(--adaptiveTextSecondary);
  }

  .text-blue {
    color: var(--adaptiveBlue500);
  }

  .text-red {
    color: var(--adaptiveRed500);
  }

  .text-green {
    color: var(--adaptiveGreen500);
  }

  .bg-surface {
    background-color: var(--adaptiveBackground);
  }

  .bg-layered {
    background-color: var(--adaptiveLayeredBackground);
  }

  .divider {
    border-bottom: 1px solid var(--adaptiveDivider);
  }
`;
