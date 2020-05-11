import React from "react";
import { useSelector } from "react-redux";
import ModalPopupGroup from "../componentHelpers/ModalPopupGroup";

const ModalPopupGroupContainer = () => {
  const modalsState = useSelector((state) => state.modalPopupReducer);
  // console.log(modalsState);

  return <ModalPopupGroup modal={modalsState} />;
};

export default ModalPopupGroupContainer;
