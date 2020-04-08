const defaultState = () => {
    return {
        summaryMarkers: []
    }
}

export const state = () => defaultState();

export const mutations = {
    loadSummary(state, summary){
        state.summaryMarkers = summary
    }
}