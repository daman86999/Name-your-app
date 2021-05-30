import React from "react";
import ResultContainer from "../ResultContainer/ResultContainer";
import SearchBox from "../SearchBox/SearchBox";
import Header from "./../Header/Header";
import "./App.css";

const name = require("@rstacruz/startup-name-generator");
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            headerText: "Name It!",
            headerExpand: true,
            suggestedNames: [],
        };
    }

    handleInputChange = (inputText) => {
        this.setState({
            headerExpand: !inputText,
            suggestedNames: name(inputText),
        });
    };

    render() {
        return (
            <div>
                <Header
                    headerExpanded={this.state.headerExpand}
                    headTitle={this.state.headerText}
                />
                <SearchBox onInputChange={this.handleInputChange} />
                <ResultContainer suggestedNames = {this.state.suggestedNames} />
            </div>
        );
    }
}

export default App;
