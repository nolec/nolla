import React, { useEffect } from "react";
import ProfilePresenter from "./ProfilePresenter";
import { useDispatch, useSelector } from "react-redux";
import { getProfiles } from "../../actions/profile";

const ProfileContainer = () => {
  const dispatch = useDispatch();
  const profiles = useSelector(state => state.profile.profiles);
  console.log(profiles);
  useEffect(() => {
    dispatch(getProfiles());
  }, [getProfiles]);

  return <ProfilePresenter profiles={profiles}></ProfilePresenter>;
};

export default ProfileContainer;
