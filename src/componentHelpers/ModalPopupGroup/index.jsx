import React from "react";
import { useSelector } from "react-redux";
import ModalPopup from "../ModalPopup";

export default function ModalPopupGroup() {
  const modal = useSelector((state) => state.modalPopupReducer);
  console.log("render");

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
}
