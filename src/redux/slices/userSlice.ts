import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
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
         // .addCase(getAllUsers.pending, (state) => {
         //    state.status = true
         // })
         .addCase(getAllUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
            state.users = action.payload
            state.status = null
         })
         .addCase(getAllUsers.rejected, (state, action) => {
            state.status = false
            state.users = []
            state.error = action.error.message
         })

         .addDefaultCase((state, action) => {
            const [type] = action.type.split('/').splice(-1)
            if (type === 'pending'){
               state.status = true;
            } 
         })
      //    .addDefaultCase((state, action) => {
      //       const [type] = action.type.split('/').splice(-1);
      //       if (type === 'rejected') {
      //           console.log(action)
      //       } else {
      //           state.error = undefined
      //       }
      //   })
   },
})


const {reducer: userReducer, actions: {}} = userSlice;

const userActions = {getAllUsers};

export {userReducer, userActions};
