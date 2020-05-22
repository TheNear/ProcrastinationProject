import { useDispatch } from "react-redux";
import { initPopupEvent } from "../redux/modalPopup/action";

const useModal = () => {
  const dispatch = useDispatch();

  const showError = (message, duration) => {
    dispatch(
      initPopupEvent({
        message: message || "Данная функция пока не реализована или отключена",
        type: "error",
        duration,
      })
    );
  };

  const showWarn = (message, duration) => {
    dispatch(
      initPopupEvent({
        message,
        type: "error",
        duration,
      })
    );
  };

  const showSuccess = (message, duration) => {
    dispatch(
      initPopupEvent({
        message,
        type: "error",
        duration,
      })
    );
  };

  return {
    showError,
    showWarn,
    showSuccess,
  };
};

export default useModal;
