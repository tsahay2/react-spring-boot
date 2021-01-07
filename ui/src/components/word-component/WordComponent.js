import React,{Component} from 'react'
import HomePage from "../../containers/home-page/HomePage";

class WordComponent extends Component {
    render() {
        return (
            <div>
                {this.props.word}
            </div>
        )
    }
}
export default WordComponent;
