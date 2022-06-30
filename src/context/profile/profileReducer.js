import { INITIALIZE_PROFILE, SET_PROFILE } from "./profileActions";

const ProfileReducer = (state, action) => {
  switch (action.type) {
    case SET_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    case INITIALIZE_PROFILE:
      return {
        ...action.payload,
        initialized: true,
      };
    default:
      return state;
  }
};

export default ProfileReducer;
