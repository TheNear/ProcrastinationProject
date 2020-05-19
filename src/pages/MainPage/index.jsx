import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import SidePanel from "../../components/SidePanel";
import { getUserProfile } from "../../redux/userProfile/action";

export default function MainPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);

  return (
    <div className="main-wrapper">
      <SidePanel />
      <div className="main-window" />
    </div>
  );
}
