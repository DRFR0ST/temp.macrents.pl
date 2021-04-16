import { createMuiTheme } from "@material-ui/core";

export const LIGHT_THEME = createMuiTheme({
    palette: {
        type: "light",
        primary: {
            main: "#B69660",
            contrastText: "#FFF"
        },
        secondary: {
            main: "#121212",
            contrastText: "#FFF"
        },
        background: {
            default: "#121212",
            paper: "#121212",
        },
        text: {
            primary: "#FFF"
        }
    }
});

export type LightTheme = typeof LIGHT_THEME;