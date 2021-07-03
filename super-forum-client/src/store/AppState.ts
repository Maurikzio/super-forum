import { combineReducers } from "redux";
import { UserProfileReducer } from "../services/User/Reducer";

export const rootReducer = combineReducers({
  user: UserProfileReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
