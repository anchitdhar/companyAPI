import React from "react";
import CompanyResult from "../../components/companyresult";
import "./titles.css";

function ResultsContainer(props) {
    if (props.path === "/") {
        return (
            <div className="card">
                <div className="card-content">
                    <p className="is-3" id="search"><strong>Results:</strong></p>
                    {props.CompanyData.map((company) => {
                        const companyInfo = company.volumeInfo;
                        return <companyResult
                            name={companyInfo.name}
                            cin={companyInfo.cin}
                            key={company.id} />
                    })}
                </div>
            </div>
        );
    } else if (props.path === "/saved") {
        if (props.savedCompanies.length > 0) {
            return (
                <div className="card">
                    <div className="card-content">
                        <p className="is-3" id="search"><strong>Saved Companies</strong></p>
                        {props.savedCompanies.map((company) => {
                            return <CompanyResult
                                name={company.name}
                                cin={company.cin}
                                key={company._id} />
                        })}
                    </div>
                </div>
            )
        } else {
            return (
                // review
                <div className="card">
                    <div className="card-content">
                        <p className="is-3" id="search"><strong>Saved Companies</strong></p>
                        <p>No saved Companies.</p>
                    </div>
                </div>
            );
        }
    }
};

export default ResultsContainer;