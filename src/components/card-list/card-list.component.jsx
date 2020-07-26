import * as React from 'react';
import {makeStyles} from "@material-ui/core";
import Card from '../card/card.component'

const useStyles = makeStyles(theme => ({
        cardList: {
            width: '85vw',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr',
            gridGap: '20px'
        }
    })
);


export const CardListComponent = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.cardList}>
            {
                props.monsters.map(monster =>
                    <Card key={monster.id} monster={monster}></Card>
                )
            }
        </div>
    );
};

export default CardListComponent;