// src/themes/adaptiveColors.ts

// 💡 유틸: CSS 변수값을 JS로 안전하게 가져오기
const getCssVar = (name: string, fallback: string) => {
  if (typeof window === "undefined") return fallback; // SSR 대비
  const value = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return value || fallback;
};

// 💡 Adaptive 색상 세트 (Toss 시스템 기반)
export const getAdaptiveVars = () => ({
  grey: {
    50: getCssVar("--adaptiveGrey50", "#f9fafb"),
    100: getCssVar("--adaptiveGrey100", "#f2f4f6"),
    200: getCssVar("--adaptiveGrey200", "#e5e8eb"),
    300: getCssVar("--adaptiveGrey300", "#d1d6db"),
    400: getCssVar("--adaptiveGrey400", "#b0b8c1"),
    500: getCssVar("--adaptiveGrey500", "#8b95a1"),
    600: getCssVar("--adaptiveGrey600", "#6b7684"),
    700: getCssVar("--adaptiveGrey700", "#4e5968"),
    800: getCssVar("--adaptiveGrey800", "#333d4b"),
    900: getCssVar("--adaptiveGrey900", "#191f28"),
  },
  blue: {
    50: getCssVar("--adaptiveBlue50", "#e8f3ff"),
    100: getCssVar("--adaptiveBlue100", "#c9e2ff"),
    200: getCssVar("--adaptiveBlue200", "#90c2ff"),
    300: getCssVar("--adaptiveBlue300", "#64a8ff"),
    400: getCssVar("--adaptiveBlue400", "#4593fc"),
    500: getCssVar("--adaptiveBlue500", "#3182f6"),
    600: getCssVar("--adaptiveBlue600", "#2272eb"),
    700: getCssVar("--adaptiveBlue700", "#1b64da"),
    800: getCssVar("--adaptiveBlue800", "#1957c2"),
    900: getCssVar("--adaptiveBlue900", "#194aa6"),
  },
  red: {
    500: getCssVar("--adaptiveRed500", "#f04452"),
    600: getCssVar("--adaptiveRed600", "#e42939"),
  },
  orange: {
    500: getCssVar("--adaptiveOrange500", "#fe9800"),
    600: getCssVar("--adaptiveOrange600", "#fb8800"),
  },
  yellow: {
    500: getCssVar("--adaptiveYellow500", "#ffc342"),
    600: getCssVar("--adaptiveYellow600", "#ffb331"),
  },
  green: {
    500: getCssVar("--adaptiveGreen500", "#03b26c"),
    600: getCssVar("--adaptiveGreen600", "#02a262"),
  },
  teal: {
    500: getCssVar("--adaptiveTeal500", "#18a5a5"),
    600: getCssVar("--adaptiveTeal600", "#109595"),
  },
  purple: {
    500: getCssVar("--adaptivePurple500", "#a234c7"),
    600: getCssVar("--adaptivePurple600", "#9128b4"),
  },
  background: {
    base: getCssVar("--adaptiveBackground", "#ffffff"),
    layered: getCssVar("--adaptiveLayeredBackground", "#ffffff"),
    float: getCssVar("--adaptiveFloatBackground", "#ffffff"),
  },
  divider: getCssVar("--adaptiveHairlineBorder", "#e5e8eb"),
  shadow: {
    medium: getCssVar("--adaptiveShadowMedium", "0px 2px 10px rgba(23,23,28,0.05)"),
    large: getCssVar("--adaptiveShadowLarge", "0px 15px 80px -5px rgba(78,89,104,0.2)"),
  },
  dimmed: getCssVar("--adaptiveDimmedBackground", "rgba(0,0,0,0.2)"),
});
export const adaptiveVars = getAdaptiveVars();