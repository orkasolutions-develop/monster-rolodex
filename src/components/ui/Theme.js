import {createMuiTheme} from '@material-ui/core/styles';

const orkaBlue = "#0B72B9";
const orkaOrange = "#FFBA60";
const orkaGrey = "#868686";
const monsterBlue = "#95dada";


export default createMuiTheme({
    palette: {
        common: {
            orkaBlue: orkaBlue,
            orkaOrange: orkaOrange
        },
        primary: {
            main: orkaBlue
        },
        secondary: {
            main: orkaOrange
        }
    },
    typography: {
        tab: {
            fontFamily: "Roboto",
            textTransform: "none",
            fontWeight: 700,
            fontSize: "1rem",
        },
        estimate: {
            fontFamily: "Pacifico",
            textTransform: "none",
            fontSize: "1rem",
            color: "white"
        },
        h1: {
            fontFamily: "Bigelow Rules",
            fontWeight: 700,
            fontSize: "72px",
            color: monsterBlue,
            lineHeight: 1.5
        },

        h2: {
            fontFamily: "Roboto",
            fontWeight: 700,
            fontSize: "2.5rem",
            color: orkaBlue,
            lineHeight: 1.5
        },
        h3: {
            fontFamily: "Pacifico",
            fontSize: "2.5rem",
            color: orkaBlue,
        },
        h4: {
            fontFamily: "Roboto",
            fontWeight: 700,
            fontSize: "1.75rem",
            color: orkaBlue,
        },
        h6: {
            fontFamily: "Roboto",
            fontWeight: 500,
            color: orkaBlue,
            lineHeight: 1
        },
        subtitle1: {
            fontSize: "1.25rem",
            fontWeight: 300,
            color: orkaGrey,

        },
        subtitle2: {
            color: "white",
            fontSize: "1.25rem",
            fontWeight: 300
        },
        body1: {
            fontSize: "1.25rem",
            color: orkaGrey,
            fontWeight: 300
        },
        caption: {
            fontSize: "1.25rem",
            fontWeight: 300,
            color: orkaGrey
        },
        learnButton: {
            borderColor: orkaBlue,
            borderWidth: 2,
            textTransform: "none",
            color: orkaBlue,
            borderRadius: 50,
            fontFamily: "Roboto",
            fontWeight: "bold",
        },
    },
    overrides: {
        MuiInputLabel: {
            root: {
                color: orkaBlue,
                fontSize: "1em"
            }
        },
        MuiInput: {
            root: {
              color: orkaGrey,
              fontWeight: 300
            },
            underline: {
                "&:before": {
                    borderBottom: `2px solid ${orkaBlue}`
                },
                "&:hover:not($disabled):not($focused):not($error):before": {
                    borderBottom: `2px solid ${orkaBlue}`
                }
            }
        }
    }
});
