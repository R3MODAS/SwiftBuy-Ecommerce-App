import { createSlice } from '@reduxjs/toolkit'

interface toggleState {
    isSidebarOpen: boolean;
}

const initialState: toggleState = {
    isSidebarOpen: false
}

export const toggleSlice = createSlice({
    name: 'toggle',
    initialState: initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.isSidebarOpen = !state.isSidebarOpen
        }
    },
})

export const { toggleSidebar } = toggleSlice.actions
export default toggleSlice.reducer