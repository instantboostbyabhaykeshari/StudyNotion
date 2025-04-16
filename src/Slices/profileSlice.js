import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    // firstName: localStorage.getItem("firstName") ? JSON.parse(localStorage.getItem("firstName")) : null,
    // lastName: localStorage.getItem("lastName") ? JSON.parse(localStorage.getItem("lastName")) : null,
    // accountType: localStorage.getItem("accountType") ? JSON.parse(localStorage.getItem("accountType")) : null
}

const profileSlice = createSlice({
    name: "profile",
    initialState: initialState,
    reducers: {
        setUser(state, value){
            state.user = value.payload
        },
        setFirstName(state, value){
            state.firstName = value.payload;
        },
        setLastName(state, value){
            state.lastName = value.payload;
        },
        setAccountType(state, value){
            state.accountType = value.payload;
        }
    }
});

export const {setUser, setFirstName, setLastName, setAccountType} = profileSlice.actions;
export default profileSlice.reducer;