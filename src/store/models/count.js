// The model brings together state, reducers, async actions & action creators in one place

const count = {
    state: 0,
    reducers: { // handle state changes with pure function
        increment(state, payload) {
            return state + payload
        }
    },
    effects: (dispatch) => ({ // async actions
        async incrementAsync(payload, rootState) {
            await new Promise(resolve => setTimeout(resolve, 1000))
            dispatch.count.increment(payload)
        }
    })
}

export default count