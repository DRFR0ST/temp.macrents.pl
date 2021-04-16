import { createStyles } from "@material-ui/core/styles";
// Here we define styles for the component.

const styles = ((theme: any) => createStyles({
    root: {
        // Container styles...
    },
    h4: {
        // Head text styles...
        color: theme.palette.primary
    }
}));

export default styles;