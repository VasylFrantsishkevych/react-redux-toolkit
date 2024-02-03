import { combineReducers, combineSlices, configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices";

// toolkit 2
export const rootReducer = combineSlices({
   users: userReducer,
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