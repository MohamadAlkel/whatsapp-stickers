import { TRIGGER_PIN, VERIFY_PIN, UPDATE_USER_ID } from "./constants";
import { InitialStateModule } from "../helper/typeHelper";


export const initialState: InitialStateModule = {
  userId: "",
  isFetchingTriggerPin: false,
  isFetchingVerifyPin: false
};

export default function userStateReducer(
  state = initialState,
  { type, payload }
) {

  switch (type) {
    case UPDATE_USER_ID:
      return {
        ...state,
        userId: payload.id,
      };
    case `${TRIGGER_PIN}_START`:
      return {
        ...state,
        isFetchingTriggerPin: true,
      };
    case `${TRIGGER_PIN}_SUCCESS`:
      return {
        ...state,
        isFetchingTriggerPin: false,
      };
    case `${TRIGGER_PIN}_ERROR`:
      return {
        ...state,
        isFetchingVerifyPin: false,
      };
      case `${VERIFY_PIN}_START`:
        return {
          ...state,
          isFetchingVerifyPin: true,
        };
      case `${VERIFY_PIN}_SUCCESS`:
        return {
          ...state,
          isFetchingVerifyPin: false,
        };
      case `${VERIFY_PIN}_ERROR`:
        return {
          ...state,
          isFetchingVerifyPin: false,
        };
  }
  return state;
}
