import * as React from 'react';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({

        cardContainer: {
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#95dada',
            border: '1px solid grey',
            borderRadius: '5px',
            padding: '25px',
            cursor: 'pointer',
            backfaceVisibility: 'hidden',
            transform: 'translateZ(0)',
            transition: 'transform 0.25s ease-out',
            '&:hover': {
                transform: 'scale(1.05)'
            }
        }
    })
);


export const CardComponent = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.cardContainer}>
                <img alt='monster' src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}/>
                <h2>{props.monster.name}</h2>
            <p>{props.monster.email}</p>
        </div>
    );
};

export default CardComponent;