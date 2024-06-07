import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", name: "Rudy" },
  { id: "2", name: "Budy" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
