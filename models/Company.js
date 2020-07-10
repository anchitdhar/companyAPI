const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
    name: String,
    cin: String,
});

const Company = mongoose.model("Book", CompanySchema);
module.exports = Company;