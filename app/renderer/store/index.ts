import { configureStore } from '@reduxjs/toolkit'
import { globalModel } from './features/globalModel'
const store = configureStore({
    reducer: {
        globalModel: globalModel
    }
})
export default store