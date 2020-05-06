import React from 'react';
import maleimg from '../../assets/img/male.png';

export default function SidePanelProfile() {
  return (
    <div className="side-profile">
      <img className="side-profile__photo" src={maleimg} alt="profile icon"/>
      <div className="side-profile__info">
        <p className="side-profile__name">@Andrey Bublikov</p>
      </div>
    </div>
  )
}
