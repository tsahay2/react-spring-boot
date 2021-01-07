import React,{Component} from 'react'
import HomePage from "../../containers/home-page/HomePage";
import WordComponent from "../word-component/WordComponent";

class WordContainerComponent extends Component {
    render() {
        debugger;
        return (
            <div>
                {this.props.words.map(word => <WordComponent word = {word}/>)}
            </div>
        )
    }
}

export default WordContainerComponent;
