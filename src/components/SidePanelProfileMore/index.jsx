import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import WithAnimation from "../../HOCs/WithAnimation";
import TextInput from "../../componentHelpers/TextInput";

const SidePanelProfileMore = ({ changeRef, show }) => {
  const profile = useSelector((store) => store.firebase.auth);
  const [userName, changeUserName] = useState(profile.displayName);
  const dispatch = useDispatch();
  const wrapRef = useRef(null);

  useEffect(() => {
    if (profile.displayName !== userName) {
      console.log("CHANGED");
      // dispatch(changeName(userName));
    }
  }, [userName, profile.displayName]);

  useEffect(() => {
    changeRef(wrapRef);
  }, [wrapRef, changeRef]);

  return (
    <div ref={wrapRef} className={`side-more ${show ? "active" : ""}`}>
      {/* <p>{state.displayName || "@YourName"}</p> */}
      <TextInput
        value={userName || "Anonymous"}
        changeValue={changeUserName}
        className="side-more__username-input"
        max={20}
        min={3}
      />
    </div>
  );
};

SidePanelProfileMore.propTypes = {
  changeRef: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};

export default WithAnimation(SidePanelProfileMore);
