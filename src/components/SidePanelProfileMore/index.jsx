import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import WithAnimation from "../../HOCs/WithAnimation";
import { useSelector, useDispatch } from "react-redux";

const SidePanelProfileMore = ({ changeRef, show }) => {
  const state = useSelector(store => store.firebase.auth);
  // const dispatch = useDispatch();
  const wrapRef = useRef(null);

  useEffect(() => {
    // console.log(state);
    changeRef(wrapRef);
  }, [wrapRef, changeRef]);

  return (
    <div ref={wrapRef} className={`side-more ${show ? "active" : ""}`}>
      <p>{state.displayName || "@YourName"}</p>
    </div>
  );
};

SidePanelProfileMore.propTypes = {
  changeRef: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};

export default WithAnimation(SidePanelProfileMore);
