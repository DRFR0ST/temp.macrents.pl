// Deps scoped imports.
import React from "react";
import { Button, Icon, makeStyles } from "@material-ui/core";
import { useLittera, useLitteraMethods } from "react-littera";
import cx from "classnames";

// Project scoped imports.
import logo from 'assets/logo.png'
import thumbnail from 'assets/DSC_2144 - po PS.jpg'
import FontAwesome from 'components/FontAwesome'

// Component scoped imports.
import styles from "./styles";
import translations from "./trans";

/**
 * Temporary page component
 * @description This is the view while in page conservation mode.
 * @version 1.0.0
 * @author Mike Eling <mike.eling97@gmail.com>
 */
const Temp = (props: ComponentProps) => {
    const translated = useLittera(translations);
    const { setLocale } = useLitteraMethods();
    const classes = useStyles();

    const handleNavigation = (url: string) => () => {
        window.open(url);
    }

    const handleLanguage = (locale: string) => () => {
        setLocale(locale);
    }

    return <div className={cx(classes.root, props.className)} style={props.style}>
        <div className={classes.contentContainer}>
            <div className={classes.contentWrapper}>
                <img alt="logo" src={logo} className={classes.logo} />
                <div>
                    <h1 style={{ whiteSpace: "pre-wrap", textTransform: "uppercase", marginBottom: "5px", fontSize: "48px", lineHeight: "45px" }}>{translated.title}</h1>
                    <p style={{ opacity: 0.45, whiteSpace: "pre-wrap" }}>{translated.slogan}</p>

                    <br />
                    <Button variant="contained" size="large" color="primary" href="https://www.instagram.com/macrents.pl/"><Icon style={{ marginRight: "14px", fontSize: "20px" }} >directions_car_filled</Icon> {translated.reserve}</Button>
                    <br /><br />
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", opacity: 0.6 }}>
                        <FontAwesome iconProps={{ onClick: handleNavigation("https://www.facebook.com/macrents") }} className={classes.socialIcon} >fab fa-facebook</FontAwesome>
                        <FontAwesome iconProps={{ onClick: handleNavigation("https://www.instagram.com/macrents.pl/") }} className={classes.socialIcon} >fab fa-instagram</FontAwesome>
                        <FontAwesome iconProps={{ onClick: handleNavigation("mailto://info@macrents.pl") }} className={classes.socialIcon} >fas fa-envelope</FontAwesome>
                        <FontAwesome iconProps={{ onClick: handleNavigation("tel://795632804") }} className={classes.socialIcon} >fas fa-phone-alt</FontAwesome>
                    </div>
                </div> 
                <div style={{ height: "15vh", display: "flex", justifyContent: "flex-end", width: "100%", alignItems: "center" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "180px" }}>
                        <p style={{ textDecoration: "underline", opacity: 0.8, fontSize: "14px", cursor: 'pointer' }} onClick={handleLanguage('pl_PL')}>Polski</p>
                        <p style={{ textDecoration: "underline", opacity: 0.8, fontSize: "14px", cursor: 'pointer' }} onClick={handleLanguage('de_DE')}>Deutsch</p>
                        <p style={{ textDecoration: "underline", opacity: 0.8, fontSize: "14px", cursor: 'pointer' }} onClick={handleLanguage('en_US')}>English</p>
                    </div>
                </div>
            </div>
            <div className={classes.plusPattern}></div>
        </div>
        <div className={classes.imageWrapper}>
            <div className={classes.imageGradient}></div>
            <img alt="thumbnail" src={thumbnail} className={classes.image} />
        </div>
    </div>
}

// Creates a hook for generating classnames.
// @ts-ignore
const useStyles = makeStyles(styles);

// Props the component accepts.
type ComponentProps = {
    className?: string;
    style?: React.CSSProperties
}

// Time to export! 🚚
export default Temp;