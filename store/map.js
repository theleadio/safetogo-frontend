const defaultState = () => {
    return {
        summaryMarkers: []
    }
}

export const state = () => defaultState();

export const mutations = {
    loadSummary(state, summary){
        // for (let i in summary){
        //     state.summaryMarkers.push({
                
        //     });
        // }

        console.log(sumary)
        state.summaryMarkers = summary
    }
}