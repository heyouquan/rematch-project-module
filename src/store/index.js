import { init } from '@rematch/core'
import count from './models/count'

const indexModel = { // 全局state
    state: {},
    reducers: {}
}

const store = init({
    models: {
        count,
        indexModel
    }
})

export default store