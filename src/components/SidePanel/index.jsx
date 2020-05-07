import React, {useState, useEffect} from 'react';
import SidePanelProfile from '../SidePanelProfile';
import SidePanelMenu from '../SidePanelMenu';
import SidePanelProfileMore from '../SidePanelProfileMore';
import { CONST } from '../../assets/js/constants';

export default function SideMenu() {
  const [userMenu, toggleUserMenu] = useState(false);

  const toggleMenuHandler = () => {
    toggleUserMenu(!userMenu);
  };

  const onEscCloseMenu = ({keyCode}) => {
      if (keyCode === CONST.ESC_CODE) {
        toggleUserMenu(false);
      }
  };


  useEffect(() => {
    if(userMenu) {
      document.addEventListener('keydown', onEscCloseMenu);
    }
     return () => {
        document.removeEventListener('keydown', onEscCloseMenu);
     };
  }, [userMenu]);

  return (
    <header className='side-panel'>
        <SidePanelProfile isShowUserMenu={userMenu} showUserMenuHandler={toggleMenuHandler} />
        <SidePanelMenu />
        {userMenu && <SidePanelProfileMore/>}
    </header>
  )
}
