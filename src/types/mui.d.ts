// src/types/mui.d.ts
import { PaletteOptions } from "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
  interface TypeBackground {
    navbar?: string;
  }

  interface Palette {
    icon: {
      primary: string;
      hover: string;
    };
  }

  interface PaletteOptions {
    icon?: {
      primary?: string;
      hover?: string;
    };
  }
}

export {};
