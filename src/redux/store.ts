import { combineReducers, combineSlices, configureStore } from "@reduxjs/toolkit";
// import { userReducer } from "./slices";
import { userReducer2 } from "./slices/userSlice2";

// toolkit 2
export const rootReducer = combineSlices({
   // users: userReducer,
   users: userReducer2,
})

// toolkit 1
//
// let rootReducer = combineReducers({
//    users: userReducer,
// });

// const setupStore = () => configureStore({
//    reducer: rootReducer
// })

export const store = configureStore({
   reducer: rootReducer
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

// type RootState = ReturnType<typeof rootReducer>
// type AppStore = ReturnType<typeof setupStore>
// type AppDispatch = AppStore['dispatch']

export type { RootState, AppDispatch };
// export { setupStore };