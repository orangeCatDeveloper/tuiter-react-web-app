import {createSlice} from "@reduxjs/toolkit";
import profile from './profile.json'

const profileSlice = createSlice({
                                     name: 'profile', initialState: profile, reducers: {
        updateProfile(state, action) {
            const updatedProfile = state.find(profile => profile._id === action.payload._id)
            if (updatedProfile) {
                Object.assign(updatedProfile, action.payload);
            }

        }
    }
});

export const {
    updateProfile
} = profileSlice.actions
export default profileSlice.reducer;