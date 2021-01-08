import React, {Component} from 'react';
import './home-page.scss'
import {Form, FormButton, Grid, Input} from 'semantic-ui-react'

export class HomePage extends Component {

    constructor(props) {
        super(props);
        this.dynamicSearch = this.dynamicSearch.bind(this)
        this.editSearchTerm = this.editSearchTerm.bind(this)
        this.getResults = this.getResults.bind(this)
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
        return this.state.searchTerm ? this.state.words.filter(word => word.toLowerCase().includes(this.state.searchTerm.toLowerCase())) : ['']
    }

    getResults = (e,{formData}) => {
        console.log('Search word is '+this.state.searchTerm)
    }

    handleTextChange = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    render() {
        return (
            <div className="page-wrapper">
                <Grid columns={1}>
                    <Grid.Row>
                            <Grid.Column>
                                <Form onSubmit={this.getResults}>
                                    <Form.Field inline>
                                        <label>Sex with me is like</label>
                                        <Input list='words' name= 'selected_word' value={this.state.searchTerm} onChange={this.handleTextChange} placeholder='Choose language...' />
                                        <datalist id='words'>
                                            {this.state.words.map(word => <option value ={word}>{word}</option>)}
                                        </datalist>
                                    </Form.Field>
                                    <FormButton inline type='submit'>Submit</FormButton>
                                </Form>
                                </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default HomePage;


