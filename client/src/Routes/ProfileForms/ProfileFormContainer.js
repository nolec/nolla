import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfileFormPresenter from "./ProfileFormPresenter";
import { createProfile } from "../../actions/profile";

const ProfileFormContainer = ({ history }) => {
  const [formData, setFormData] = useState({
    company: "",
    website: "",
    location: "",
    status: "",
    skills: "",
    githubusername: "",
    bio: "",
    youtube: ""
  });
  const {
    company,
    website,
    location,
    status,
    skills,
    githubusername,
    bio,
    youtube
  } = formData;

  const dispatch = useDispatch();
  const profile = useSelector(state => state.profile);
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(createProfile(formData, history));
  };
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  const handleProfile = e => {
    console.log(e);
  };

  return (
    <ProfileFormPresenter
      {...formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      displaySocialInputs={displaySocialInputs}
      toggleSocialInputs={toggleSocialInputs}
    ></ProfileFormPresenter>
  );
};

export default ProfileFormContainer;
