import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import WithAnimation from "../../HOCs/WithAnimation";
import TextInput from "../../componentHelpers/TextInput";

const SidePanelProfileMore = ({ changeRef, show }) => {
  const state = useSelector((store) => store.firebase.auth);
  const [someTest, someChange] = useState("Oleg Denisov");
  // const dispatch = useDispatch();
  const wrapRef = useRef(null);

  useEffect(() => {
    changeRef(wrapRef);
  }, [wrapRef, changeRef]);

  return (
    <div ref={wrapRef} className={`side-more ${show ? "active" : ""}`}>
      {/* <p>{state.displayName || "@YourName"}</p> */}
      <TextInput value={someTest} changeValue={someChange} />
    </div>
  );
};

SidePanelProfileMore.propTypes = {
  changeRef: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};

export default WithAnimation(SidePanelProfileMore);
