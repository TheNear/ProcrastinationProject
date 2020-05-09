import React, { useEffect, useState } from "react";

export default function WithAnimation(Component) {
  const WithAnimationWrap = props => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {

      const timeout = setTimeout(
        () => setIsMounted(props.show),
        props.show ? 0 : props.duration
      );
      return () => clearTimeout(timeout);
    }, [props.show, props.duration]);

    return (
      (isMounted || props.show) && (
        <Component {...props} show={isMounted && props.show} />
      )
    );
  }
  return WithAnimationWrap;
}
