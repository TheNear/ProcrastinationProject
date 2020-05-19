import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import maleimg from "../../assets/img/male.png";
import TextInput from "../../componentHelpers/TextInput";
import { changeUserNameDB } from "../../redux/userProfile/action";

const SidePanelProfile = ({ isShowUserMenu, showUserMenuHandler }) => {
  const userProfile = useSelector((state) => state.userProfile);
  const dispatch = useDispatch();

  const changeUserNameHandler = (user) => {
    dispatch(changeUserNameDB(user));
  };

  return (
    <div className="side-profile">
      <div className="side-profile__photo-wrap">
        <img
          className="side-profile__photo"
          src={maleimg}
          alt="profile icon"
          onClick={showUserMenuHandler}
        />
        <button
          type="button"
          className={`side-profile__more ${isShowUserMenu ? "active" : ""}`}
          onClick={showUserMenuHandler}
        >
          <FontAwesomeIcon
            className="side-profile__more-icon  "
            icon={faCog}
            size="2x"
          />
        </button>
      </div>
      <div className="side-profile__info">
        {/* <p className="side-profile__name">@{userProfile.username}</p>
         */}
        <TextInput
          value={userProfile.username}
          changeValue={changeUserNameHandler}
          className="side-profile__name"
          max={20}
          min={3}
        />
        <p className="side-profile__points">
          <span className="side-profile__points-color">{userProfile.caps}</span>{" "}
          caps
        </p>
        <p className="side-profile__points">
          <span className="side-profile__days-color">
            {userProfile.daysinrow}
          </span>{" "}
          days in row
        </p>
      </div>
    </div>
  );
};

SidePanelProfile.propTypes = {
  isShowUserMenu: PropTypes.bool.isRequired,
  showUserMenuHandler: PropTypes.func.isRequired,
};

export default SidePanelProfile;
