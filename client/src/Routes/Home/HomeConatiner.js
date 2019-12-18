import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomePresenter from "./HomePresenter";
import { getMyProfile } from "../../actions/profile";

const HomeConatiner = () => {
  const getTime = () => {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    const now = `${hours < 10 ? `0${hours}` : hours}:${
      minutes < 10 ? `0${minutes}` : minutes
    }:${seconds < 10 ? `0${seconds}` : seconds}`;
    return now;
  };
  let [time, setTime] = useState(getTime());

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTime(getTime());
    }, 1000);
    dispatch(getMyProfile());
    return () => {
      window.clearInterval(timer);
    };
  }, []);
  //-----------------------------시간

  const dispatch = useDispatch();
  const myProfile = useSelector(state => state.profile.profile);

  return <HomePresenter myProfile={myProfile} time={time}></HomePresenter>;
};

export default HomeConatiner;
