import React from "react";
import { useSelector } from "react-redux";
import ModalPopup from "../ModalPopup";

const ModalPopupGroup = () => {
  const modal = useSelector((state) => state.modalPopupReducer);

  return (
    <div className="modal-popup__group">
      {modal.map((item) => (
        <ModalPopup
          key={item.id}
          id={item.id}
          show
          duration={500}
          type={item.type}
        >
          {item.message}
        </ModalPopup>
      ))}
    </div>
  );
};

export default ModalPopupGroup;
