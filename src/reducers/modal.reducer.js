import { createSlice } from '@reduxjs/toolkit'

const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        isModal: false,
        isForm: false,
        isModalSubmit: false
    },
    reducers: {

        modalOpen(state) {
            state.isModal = true
        },
        modalClose(state) {
            state.isModal = false
        },
        formOpen(state) {
            state.isForm = true
        },
        formClose(state) {
            state.isForm = false
        },
        modalSubmitOpen(state) {
            state.isModalSubmit = true
        },
        modalSubmitClose(state) {
            state.isModalSubmit = false
        },

    },
})

export const { modalOpen, modalClose, formOpen, formClose, modalSubmitClose, modalSubmitOpen } = modalSlice.actions
export default modalSlice.reducer