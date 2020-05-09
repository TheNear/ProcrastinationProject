import React, { useEffect } from 'react';
// import { createPortal } from 'react-dom';
import WithAnimation from '../../HOCs/WithAnimation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle, faExclamationCircle, faThumbsUp} from '@fortawesome/free-solid-svg-icons'


const ModalPopup = ({show, children, type}) => {

  const typeIcon = {
    'warn' : faExclamationTriangle,
    'error' : faExclamationCircle,
    'success' : faThumbsUp
  }

  // useEffect(() => {
  //   const removeElement = setTimeout(() => {
  //     toggleShow(false)
  //   }, 2000)
  //   return () => {
  //     clearTimeout(removeElement);
  //   }
  // }, [toggleShow])

  return (
      <div className={`modal-popup ${type}-popup ${show ? 'active' : ''}`}>
        { type !== 'base' && <FontAwesomeIcon className="modal-popup__icon" icon={typeIcon[type]}/>}
        <p className="modal-popup__text">{ children }</p>
      </div>
    )
}

// export default WithAnimation(ModalPopup);
export default ModalPopup;
