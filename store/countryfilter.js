const defaultState = () => {
    return {
        countrySelected: "Country",
        districtSelected: "District",
        previousDistrict: "",
    }
};

export const state = () => defaultState();

export const mutations = {
    updateCountry(state, country){
        state.countrySelected = country;
    },
    updateDistrict(state, district){
        state.districtSelected = district;

    },
    resetFilter(state){
        Object.assign(state, defaultState());
    }
}