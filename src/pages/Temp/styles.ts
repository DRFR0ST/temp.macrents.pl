// Here we define styles for the component.

import { LightTheme } from "utils/theme";
import plusPattern from 'assets/plus.svg'

// eslint-disable-next-line import/no-anonymous-default-export
export default ((theme: LightTheme) => ({
    root: {
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary
    },
    h4: {
        // Head text styles...
        color: theme.palette.primary
    },
    imageWrapper: {
        [theme.breakpoints.down("md")]: {
            display: "none"
        },
        width: "50%", height: "100%", overflow: "hidden", position: "relative"
    },
    contentWrapper: {
        zIndex: 2,
        position: "relative",
        width: "70%", margin: "0 auto", height: "100%", display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexDirection: "column",
        [theme.breakpoints.down('md')]: {
            width: "95%"
        }
    },
    contentContainer: {
        position: "relative",
        [theme.breakpoints.down('md')]: {
            width: "100%"
        },
        width: "50%", height: "100%"
    },
    image: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100%",
        height: "auto",
        zIndex: 99
    },
    logo: {
        width: "auto",
        height: "75px",
        marginTop: "8px"
    },
    socialIcon: {
        color: theme.palette.primary.contrastText,
        margin: "0 8px",
        opacity: 0.7, 
        transition: "opacity 255ms ease",
        cursor: "pointer",
        "&:hover": {
            opacity: 1
        }
    },
    plusPattern: {
        backgroundImage: `url(${plusPattern})`,
        backgroundRepeat: "repeat",
        width: "510px",
        height: "465px",
        opacity: 0.8,
        position: "absolute",
        bottom: "39vh",
        left: "2vw",
        zIndex: 0
    },
    imageGradient: {
        position: "absolute",
        left: 0,
        top: 0,
        background: "linear-gradient(to bottom, rgba(12, 12, 12, 0.5) 30%, transparent 70%)",
        width: "100%",
        height: "100%",
        zIndex: 100
    }
}));