import { createSlice } from "@reduxjs/toolkit";
import reducer from "./authSlice";

const companySlice = createSlice({
    name: "company",
    initialState: {
        companies: null,
        singleCompany: null,
        selecteCompanyIdForJobPost: null,
        searchCompanyByText: ""
    },
    reducers: {
        setCompanies: ( state, action ) => {
            console.log("Soham Setting companies:", action);
            state.companies = action.payload
        },
        setSingleCompany: (state, action) => {
            state.singleCompany = action.payload;
        },
        setSelectCompanyIdForJobPost: (state, action) => {
            state.selecteCompanyIdForJobPost = action.payload;
        },
        setSearchCompanyByText: (state, action) => {
            state.searchCompanyByText = action.payload;
        }
    }
});
export const {
    setCompanies,
    setSingleCompany,
    setSelectCompanyIdForJobPost,
    setSearchCompanyByText
} = companySlice.actions;

export default companySlice.reducer;