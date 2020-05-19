import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import WithAnimation from "../../HOCs/WithAnimation";

const SidePanelProfileMore = ({ changeRef, show }) => {
  const wrapRef = useRef(null);

  useEffect(() => {
    changeRef(wrapRef);
  }, [wrapRef, changeRef]);

  return (
    <div ref={wrapRef} className={`side-more ${show ? "active" : ""}`}>
      Some text
    </div>
  );
};

SidePanelProfileMore.propTypes = {
  changeRef: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};

export default WithAnimation(SidePanelProfileMore);
