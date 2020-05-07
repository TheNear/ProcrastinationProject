import React from 'react';
import maleimg from '../../assets/img/male.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'

export default function SidePanelProfile({isShowUserMenu , showUserMenuHandler}) {
  return (
    <div className="side-profile">
      <div className="side-profile__photo-wrap">
        <img 
          className="side-profile__photo" 
          src={maleimg} alt="profile icon"
          onClick={showUserMenuHandler}
        />
        <button 
          className={`side-profile__more ${isShowUserMenu ? 'active' : ''}`} 
          onClick={showUserMenuHandler}
        >
            <FontAwesomeIcon 
              className="side-profile__more-icon  "
              icon={faCog} size="2x"
            />
        </button>
      </div>
      <div className="side-profile__info">
        <p className="side-profile__name">@Andrey Bytilkin</p>
        <p className="side-profile__points"><span className="side-profile__points-color">14.582</span> caps</p>
        <p className="side-profile__points"><span className="side-profile__days-color">17</span> days in row</p>
      </div>
    </div>
  )
}
