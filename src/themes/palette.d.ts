import "@mui/material/styles";

declare module "@mui/material/styles" {
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

  interface Theme {
    palette: Palette;
  }

  interface ThemeOptions {
    palette?: PaletteOptions;
  }
}

export {};
