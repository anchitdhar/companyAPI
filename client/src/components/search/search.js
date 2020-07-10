import React from "react";
import "./search.css";

const SearchForm = props => (
        <div className="card">
            <div className="card-content">
                <p className="is-3" id="search"><strong>Book:</strong></p>
                <div className="field has-addons">
                    <p className="control">
                        <input type="text" name="bookInput" id="bookInput" form="bookSearch" onChange={(e) => props.handleChange(e)} className="input" size="144" placeholder="Enter Title and hit Search Button" required/>
                    </p>
                    <p className="control">
                        <button type="submit" onClick={(e) => props.handleSearchClick(e)} className="button is-dark">Search</button>
                    </p>
                </div>
            </div>
        </div>
);

export default SearchForm;