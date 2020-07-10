require("dotenv").config();
const axios = require("axios");
const db = require("../models");
const path = require("path");
const cheerio =  require('cheerio');

module.exports = function(app) {
    app.get("/api/company", (req, res) => {
        db.Company.find().then(
            (companyData) => {
                res.json(companyData);
            }
        ).catch(
            (err) => {
                res.json({error: err});
            }
        );
    });

    app.post("/search", (req, res) => {
        let companyTitle = req.body.name.replace(/\s/g, "+");
        const url = "https://www.zaubacorp.com/custom-search"
        const params = {
            "search":`${companyTitle}`,
            "filter":"company"
        }
        const headers={
            "Content-Type":"application/json",
        }
        axios.post(url,params,headers)
        .then((response) => scrapping(response))
        .catch((err)=>console.log(err))
    });

    app.post("/api/company", (req, res) => {
        db.Company.create(req.body).then(
            (response) => {
                res.json({successful: response});
            }
        ).catch(
            (err) => {
                res.json({error: err});
            }
        );
    });

    app.delete("/api/books/:id", (req, res) => {
        db.Company.findByIdAndDelete(req.params.id).then(
            (response) => {
                res.json({successful: response});
            }
        ).catch(
            (err) => {
                res.json({error: err});
            }
        );
    });

    // Send every other request to the React app
    // Define any API routes before this runs
    app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
    });

function scrapping(url){
    let address = url;
    let $ = cheerio.load(address);
    let identity = $('id');

    var string = identity;
    stringUrl = string.split("/")
    var urlArray =  new Array();
    urlArray.push(stringUrl[-1]);
    urlArray.push([stringUrl[-2]]);
    companyName = urlArray[1];
    companyCin = urlArray[0];
    return {companyName,companyCin};

}

}