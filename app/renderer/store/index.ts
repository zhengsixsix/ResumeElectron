import { configureStore } from '@reduxjs/toolkit'
import { globalModel } from './features/globalModel'
import { resumeModel } from './features/resumeModel'
import { templateModel } from './features/templateModel'
const store = configureStore({
    reducer: {
        globalModel: globalModel,
        resumeModel: resumeModel,
        templateModel: templateModel
    }
})
export default store