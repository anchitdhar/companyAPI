import React from "react";
import API from "../../utils/API";
import { BrowserRouter as Router } from "react-router-dom";
import './companyresult.css';

class CompanyResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            saved: false,
            deleted: false
        }
        this.handleSaveClick = this.handleSaveClick.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
    }

    handleSaveClick = function (e) {
        this.setState({ saved: true });
        const companyData = {
            name: this.props.name,
            cin: this.props.cin,
        }
        e.preventDefault();
        API.addCompanyToDB(companyData).then(
            (response) => {
                console.log(response);
            }
        ).catch(
            (err) => {
                console.log(err);
            }
        );
    }

    handleDeleteClick(e) {
        this.setState({ deleted: true });
        e.preventDefault();
        API.deleteCompany(this.props.id).then(
            (response) => {
                console.log(response);
                Router.dispatch(this.props.location, null)
            }
        ).catch(
            (err) => {
                console.log(err);
            }
        );
    }

    render() {
        return (
            <div className="card" id={(this.props.id) ? this.props.id : null} style={{ display: this.state.deleted ? "none" : "block" }}>
                <div className="card-content">
                    <nav className="level">
                        <div className="level-left">
                            <p className="level-item"><h1 className="title is-4"><strong>{this.props.name}</strong></h1></p>
                        </div>
                        <div className="level-right">
                            <div className="level-item">
                                <div className="field">
                                    {
                                        (this.props.link) ? <a href={this.props.link} target="_blank" rel="noopener noreferrer"><button className="button is-small is-dark is-outlined" type="button" name="view">View</button></a> : null
                                    }
                                    {' '}
                                    {
                                        (this.props.path === "/") ? <button className="button is-small is-dark is-outlined" type="button" name="save" onClick={this.handleSaveClick} disabled={this.state.saved}>{(this.state.saved) ? "Saved" : "Save"}</button> : <button className="button is-small is-dark is-outlined" type="button" name="Delete" onClick={this.handleDeleteClick} disabled={this.state.deleted}>Delete</button>
                                    }
                                </div>
                            </div>
                        </div>
                    </nav>
                    <h3 id="author">cin <strong>(this.props.cin)</strong></h3>
                </div>
            </div>
        );
    }
}

export default CompanyResult;