import * as React from 'react';
import {makeStyles, TextField, Grid} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
        root: {
            flexGrow: 1,
        },
        search: {
            webkitAppearance: null,
            border: null,
            outline: null,
            padding: '10px',
            width: '150px',
            lineHeight: '30px',
            marginBottom: '30px',
        }

    })
);


export const SearchBoxComponent = ({placeHolder, handleChange}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>

            <Grid item container spacing={3}>
                <Grid item xs={12} className={classes.search}>
                    <TextField
                        variant="outlined"
                        placeholder={placeHolder}
                        label={'Hledej'}
                        onChange={handleChange}
                    />
                </Grid>
            </Grid>
        </div>
    );
};

export default SearchBoxComponent;