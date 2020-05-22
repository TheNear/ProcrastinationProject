import React from "react";
import { useSelector } from "react-redux";
import ModalPopup from "../ModalPopup";

const ModalPopupGroup = () => {
  const modal = useSelector((state) => state.modalPopup);

  return (
    <div className="modal-popup__group">
      {modal.map((item) => (
        <ModalPopup
          key={item.id}
          id={item.id}
          show
          duration={item.duration}
          type={item.type}
        >
          {item.message}
        </ModalPopup>
      ))}
    </div>
  );
};

export default ModalPopupGroup;
