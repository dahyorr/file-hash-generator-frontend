import { ThemeMode } from "@/types";
import { ThemeOptions } from "@mui/material";

const darkPaletteOverrides = {
  background: {
    default: '#111318',
    paper: '#111318',
  },
  divider: '#2b2f3c',
}

const lightPaletteOverrides = {
  divider: '#E1E3EA',
}


export const themeFactory = (mode: ThemeMode): ThemeOptions => ({
    palette: {
      mode,
      primary: {
        main: '#5046e4',
      },
      secondary: {
        main: '#1E212A',
      },
      ...mode === 'light'
        ?lightPaletteOverrides
        :darkPaletteOverrides
      },
      components: {
        MuiListItemButton: {
          defaultProps: {
            disableTouchRipple: true,
          },
        },
      },
      typography: {
        // fontFamily: 'Roboto, Inter, Arial',
      }
});
