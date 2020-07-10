import axios from "axios";

export default {
    getCompanies: () => {
        return axios.get("/api/company");
    },
    searchCompanies: (name) => {
        return axios.post("/search", {name: name});
    },
    addCompanyToDB: (companyData) => {
        return axios.post("/api/company", companyData);
    },
    deleteCompany: (id) => {
        return axios.delete(`/api/company/${id}`);
    }
}