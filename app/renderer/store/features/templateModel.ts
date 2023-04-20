import { createSlice } from '@reduxjs/toolkit'
type GlobalState = {
    resumeToolbarKeys: string[]
};
const initialState: GlobalState = {
    resumeToolbarKeys: []
}
const mySlice = createSlice({
    name: 'templateSlice',
    initialState,
    reducers: {
        increment(state, action) {
            state.resumeToolbarKeys = action.payload
        }
    }
})
export const { increment } = mySlice.actions
export const templateModel = mySlice.reducer