import React from 'react';
import { createPortal } from 'react-dom';
import WithAnimation from '../../HOCs/WithAnimation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle, faExclamationCircle, faThumbsUp} from '@fortawesome/free-solid-svg-icons'


const ModalPopup = ({show, children, type}) => {

  const typeIcon = {
    'warn' : faExclamationTriangle,
    'error' : faExclamationCircle,
    'good' : faThumbsUp
  }

  return (
    createPortal(
      <div className={`modal-popup ${type}-popup ${show ? 'active' : ''}`}>
          { type !== 'base' && <FontAwesomeIcon icon={typeIcon[type]}/>}
          { children }
      </div>,
      document.getElementById('root')
    )
  )
}

// export default WithAnimation(ModalPopup);
export default ModalPopup;