import { createSlice, Reducer } from '@reduxjs/toolkit';

type GlobalState = {
    appName: string
};

const initialState: GlobalState = {
    appName: '简历应用平台',
};

const mySlice = createSlice({
    name: 'globalSlice',
    initialState,
    reducers: {
        // ...添加 reducers...
    }
});

export const globalModel: Reducer<GlobalState> = mySlice.reducer;