import React from 'react';
import maleimg from '../../assets/img/male.png';

export default function SidePanelProfile() {
  return (
    <div className="side-profile">
      <div className="side-profile__photo-wrap">
        <img className="side-profile__photo" src={maleimg} alt="profile icon"/>
      </div>
      <div className="side-profile__info">
        <p className="side-profile__name">@Andrey Bytilkin</p>
        <p className="side-profile__points"><span className="side-profile__points-color">14.582</span> caps</p>
        <p className="side-profile__points"><span className="side-profile__days-color">17</span> days in row</p>
      </div>
    </div>
  )
}
