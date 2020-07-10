import React from "react";
import ResultsContainer from "../components/titles";
import API from "../utils/API";

class Saved extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            savedCompany: []
        }
    }

    componentWillMount() {
        API.getCompanies().then(
            (response) => {
                this.setState({savedCompany: response.data});
            }
        ).catch(
            (err) => {
                console.log(err);
            }
        );
    }

    render() {
        console.log(this.state.savedCompany);
        return(
            <main>
                <ResultsContainer savedCompany={this.state.savedCompany} path={this.props.match.path}/>
            </main>
        );
    }
}

export default Saved;