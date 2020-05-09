import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const WithAnimation = (Component) => {
  const WithAnimationWrap = (props) => {
    const { show, duration } = props;
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      const timeout = setTimeout(() => setIsMounted(show), show ? 0 : duration);
      return () => clearTimeout(timeout);
    }, [show, duration]);

    return (
      (isMounted || show) && (
        <Component {...props} show={isMounted && show} setShow={setIsMounted} />
      )
    );
  };

  WithAnimationWrap.propTypes = {
    show: PropTypes.bool.isRequired,
    duration: PropTypes.number.isRequired,
  };

  return WithAnimationWrap;
};

export default WithAnimation;
