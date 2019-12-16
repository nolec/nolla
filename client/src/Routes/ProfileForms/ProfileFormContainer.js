import React, { useState } from "react";
import ProfileFormPresenter from "./ProfileFormPresenter";

const ProfileFormContainer = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData);
  };
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const [displaySocialInputs, toggleSocialInputs] = useState(false);
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
