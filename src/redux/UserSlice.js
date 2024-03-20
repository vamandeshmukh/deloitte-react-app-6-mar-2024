
import { createSlice } from "@reduxjs/toolkit";

console.log('UserSlice');

const UserSlice = createSlice({
    name: 'user',
    initialState: {
        userData: { username: '', password: '' }
    },
    reducers: {
        setUserData: (state, action) => {
            console.log(action);
            state.userData = action.payload;
        }
    }
});

export const { setUserData } = UserSlice.actions;

export default UserSlice.reducer;




