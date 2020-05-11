import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationTriangle,
  faExclamationCircle,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import WithAnimation from "../../HOCs/WithAnimation";
import { deleteEvenet } from "../../redux/modalPopup/action";
import CONST from "../../assets/js/constants";

const ModalPopup = ({ show, setShow, children, type, id, duration }) => {
  const dispatch = useDispatch();
  console.log("popupRedner");

  const typeIcon = {
    warn: faExclamationTriangle,
    error: faExclamationCircle,
    success: faThumbsUp,
  };

  useEffect(() => {
    const removeClass = setTimeout(() => {
      setShow(false);
      setTimeout(() => {
        dispatch(deleteEvenet(id));
      }, duration);
    }, CONST.POPUP_LIFETIME);
    return () => {
      clearTimeout(removeClass);
    };
  }, [id, dispatch, duration, setShow]);

  return (
    <div className={`modal-popup ${type}-popup ${show ? "active" : ""}`}>
      {type !== "base" && (
        <FontAwesomeIcon className="modal-popup__icon" icon={typeIcon[type]} />
      )}
      <p className="modal-popup__text">{children}</p>
    </div>
  );
};

ModalPopup.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
    PropTypes.number,
  ]),
  type: PropTypes.string,
  id: PropTypes.string,
  duration: PropTypes.number,
};

ModalPopup.defaultProps = {
  setShow: () => {},
  children: "string",
  type: "error",
  id: "123412414id",
  duration: 500,
};

export default WithAnimation(ModalPopup);
