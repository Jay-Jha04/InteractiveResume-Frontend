import React, { useReducer } from "react";
import ProfileContext from "./profileContext";
import ProfileReducer from "./profileReducer";
import { SET_PROFILE } from "./profileActions";

const ProfileState = (props) => {
  const initialState = {
    profile: {},
  };

  const [state, dispatch] = useReducer(ProfileReducer, initialState);

  const setProfile = (profile) => {
    dispatch({
      type: SET_PROFILE,
      payload: profile,
    });
  };

  return (
    <ProfileContext.Provider
      value={{
        profile: state.profile,
        setProfile,
      }}
    >
      {props.children}
    </ProfileContext.Provider>
  );
};

export default ProfileState;
