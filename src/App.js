import React, {Component} from 'react';
import {makeStyles} from "@material-ui/core";
import theme from './components/ui/Theme';
import {ThemeProvider} from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";

import './App.css';

import CardListComponent from './components/card-list/card-list.component'
import SearchBoxComponent from './components/search-box/search-box.component'

class App extends Component {
    constructor() {
        super();
        this.state = {
            searchField: '',
            monsters: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({monsters: users}))
    }

    handleChange = e => {
        this.setState({'searchField': e.target.value})
    }

    render() {
        const {monsters, searchField} = this.state;
        const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
        return (
            <ThemeProvider theme={theme}>
                <div className="App">
                    <Typography variant={'h1'}>Monster rolodex</Typography>
                    <SearchBoxComponent
                        placeHolder={'search monster'}
                        handleChange={this.handleChange}
                    />
                    <CardListComponent monsters={filteredMonsters}>
                    </CardListComponent>
                </div>
            </ThemeProvider>
        )
    }

}

export default App;
