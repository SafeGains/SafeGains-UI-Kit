import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "green", // "#ff0f33",   // "#355E3B",          //  "#cc3366",
  primaryBright: "lightgreen",
  primaryDark: "#FFFFFF",
  secondary:  "#ff0f33",  // "#ff0f33",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background:  "#F8F8F8", // "linear-gradient(92deg, rgba(255, 0, 189, 0.23) 0%, rgba(238, 130, 238, 1) 100%)",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#E0E0E0",
  tertiary: "rgba(156, 254, 143, 1)",
  text:  "black", // "#ff0f33",     // "#228B22",
  textDisabled: "#BDC2C4",
  textSubtle: "#000000",     //  "#ff0f33",    // "#ff526c",
  borderColor: "#f8d2d2",
  card: "	#F8F8F8", // "linear-gradient(to left, rgb(90, 157, 73), rgb(160, 215, 111))",         // "#d9d9d9",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#9A6AFF",
  background: "#343135",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#c9c4d4",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
