import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import ActivityBoard from './ActivityBoard';


const AppContainer = styled.div`
 border: 1px solid red
`;

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            cards: [
                {
                    id: 'a',
                    content: 'My first card',
                    votes: 0,
                    category: 'WENT_WELL',
                },
                {
                    id: 'b',
                    content: 'My second card',
                    votes: 0,
                    category: 'WENT_WELL',
                },
                {
                    id: 'c',
                    content: 'My third card',
                    votes: 0,
                    category: 'DIDNT_GO_WELL',
                },
                {
                    id: 'd',
                    content: 'My fourth card',
                    votes: 0,
                    category: 'ACTION_ITEMS',
                },
            ],
        };
    }

    render() {
        return (
            <AppContainer> 
                <Header />
                <ActivityBoard cards = {this.state.cards} />
            </AppContainer>  
        );
    }
}

export default App;