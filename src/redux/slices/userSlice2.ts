import { PayloadAction, asyncThunkCreator, buildCreateSlice } from "@reduxjs/toolkit"
import { IUser } from "../../interfaces"
import { userService } from "../../servises"
import { AxiosError } from "axios"

interface IState {
   users: IUser[],
   status: boolean | null,
   error: string | undefined,
}

const initialState: IState = {
   users: [],
   status: null,
   error: undefined,
}


const createsSliceWithThunks = buildCreateSlice({
   creators: {asyncThunk: asyncThunkCreator}
})

const userSlice = createsSliceWithThunks({
   name: 'userSlice',
   initialState,
   selectors: {
      selectUsers: (state) => state
   },
   reducers: (create) => ({
      getAllUsers: create.asyncThunk(
         async (_, {rejectWithValue}) => {
            try {
               const {data} = await userService.getAll();
               return data
            } catch (e) {
               const error = e as AxiosError
               return rejectWithValue(error.response?.data)
            }
         }, {
            pending: (state) => {
               state.status = true
            },
            fulfilled: (state, action: PayloadAction<IUser[]>) => {
               state.users = action.payload
               state.status = null
            },
            rejected: (state, action) => {
               state.status = false
               state.users = []
               state.error = action.error.message
            }
         }
      )
   })
})


const {reducer: userReducer2, actions: {getAllUsers}, selectors: {selectUsers}} = userSlice;

const userActions = {getAllUsers};

export {userReducer2, userActions, selectUsers};