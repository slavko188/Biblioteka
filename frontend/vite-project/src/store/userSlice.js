import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
  },
  reducers: {
    loggedUser: (state, action) => {
      // state.user = action.payload;
      console.log(action);
    },
  },
});

export const { loggedUser } = userSlice.actions;
export default userSlice.reducer;
