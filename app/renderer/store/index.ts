import { configureStore } from '@reduxjs/toolkit'
import { globalModel } from './features/globalModel'
import { resumeModel } from './features/resumeModel'
const store = configureStore({
    reducer: {
        globalModel: globalModel,
        resumeModel: resumeModel
    }
})
export default store