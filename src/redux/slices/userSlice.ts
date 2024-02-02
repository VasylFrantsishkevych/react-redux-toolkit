import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { IUser } from "../../interfaces"
import { userService } from "../../servises"
import { AxiosError } from "axios"

interface IState {
   users: IUser[],
}

const initialState: IState = {
   users: [],
}

const getAllUsers = createAsyncThunk<IUser[]>(
   'userSlice/getAllUsers',
   async (_, {rejectWithValue}) => {
      try {
         const {data} = await userService.getAll();
         return data
      } catch (e) {
         const error = e as AxiosError
         return rejectWithValue(error.response?.data)
      }
   }
)

const userSlice = createSlice({
   name: 'userSlice',
   initialState,
   reducers: {},
   extraReducers: builder => {
      builder
         .addCase(getAllUsers.fulfilled, (state, action) => {
            state.users = action.payload
         })
   }
})

const {reducer: userReducer, actions: {}} = userSlice;

const userActions = {getAllUsers};

export {userReducer, userActions};