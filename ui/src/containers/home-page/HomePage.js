import React, {Component} from 'react';
import './home-page.scss'
import faker from 'faker'
import {Grid, GridColumn, Header, Input,Row} from 'semantic-ui-react'
import WordContainerComponent from "../../components/words-container-component/WordContainerComponent";

export class HomePage extends Component {

    constructor(props) {
        super(props);
        this.dynamicSearch = this.dynamicSearch.bind(this)
        this.editSearchTerm = this.editSearchTerm.bind(this)
    }
    
    state = {
        words: [
            'bottle',
            'hajmola',
            'watch',
            'doll',
            'charger',
            'earphones',
            'quilt',
            'pillow',
            'cupboard',
            'shriya',
        ],
        searchTerm: ''
    }

    editSearchTerm = (e) => {
        this.setState(
            {
                searchTerm: e.target.value
            }
        )
    }

    dynamicSearch = () => {
        return this.state.searchTerm?this.state.words.filter(word => word.toLowerCase().includes(this.state.searchTerm.toLowerCase())):['']
    }

    render() {
        return (
            <div className="page-wrapper">
                <Grid>
                    <Grid.Row>
                    <Grid.Column width={5}>
                <div className="main-text">
                    <Header as='h1'>Sex with me is like </Header>
                </div>
                    </Grid.Column>
                        <Grid.Column width={6}>
                            <Input onChange={this.editSearchTerm} placeholder='enter object..'/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <WordContainerComponent words={this.dynamicSearch()}/>
                    </Grid.Row>
                    </Grid>

            </div>
        )
    }
}

export default HomePage;


