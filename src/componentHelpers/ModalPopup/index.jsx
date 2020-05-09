import React, { useEffect } from 'react';
import WithAnimation from '../../HOCs/WithAnimation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle, faExclamationCircle, faThumbsUp} from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux';
import { deleteEvenet } from '../../redux/modalPopup/action';
import { CONST } from '../../assets/js/constants';


const ModalPopup = ({show, showSet, children, type, id, delay}) => {

  const dispatch = useDispatch();

  const typeIcon = {
    'warn' : faExclamationTriangle,
    'error' : faExclamationCircle,
    'success' : faThumbsUp
  }

  useEffect(() => {
    const removeClass = setTimeout(() => {
      showSet(false);
      setTimeout(() => {
        dispatch(deleteEvenet(id));
      }, delay);
     }, CONST.POPUP_LIFETIME);    
    return () => {
      clearTimeout(removeClass);
    }
  }, [id, dispatch, delay, showSet])

  return (
      <div className={`modal-popup ${type}-popup ${(show)? 'active' : ''}`}>
        { type !== 'base' && <FontAwesomeIcon className="modal-popup__icon" icon={typeIcon[type]}/>}
        <p className="modal-popup__text">{ children }</p>
      </div>
    )
}

export default WithAnimation(ModalPopup);

