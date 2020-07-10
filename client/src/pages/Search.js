import React from "react";
import SearchForm from "../components/search";
import ResultsContainer from "../components/titles";
import API from "../utils/API";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            companyInput: "",
            companyData: []
        }
        this.handleSearchClick = this.handleSearchClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({companyInput: e.target.value})
    }

    handleSearchClick(e) {
        e.preventDefault();
        API.searchCompanies(this.state.companyInput)
            .then(
                (response) => {
                    this.setState({companyData: response.data});
                    this.setState({companyInput: ""});
                }
            );
    }

    render() {
        return(
            <main>
                <SearchForm handleChange={this.handleChange} handleSearchClick={this.handleSearchClick} />
                {(this.state.companyData.length > 0)?
                    <ResultsContainer companyData={this.state.companyData} path={this.props.match.path}/> : null
                }
            </main>
        );
    }
}

export default Search;