import React, {useState, useEffect} from 'react';
import SidePanelProfile from '../SidePanelProfile';
import SidePanelMenu from '../SidePanelMenu';
import SidePanelProfileMore from '../SidePanelProfileMore';
import { CONST } from '../../assets/js/constants';


export default function SideMenu() {
  const [userMenu, toggleUserMenu] = useState(false);
  const [refMenu, changeRefMenu] = useState(null);


  const toggleMenuHandler = () => {
    toggleUserMenu(!userMenu);
  };


  useEffect(() => {

    const onOutsideMenuClick = ({target}) => {
      if (refMenu.current && !refMenu.current.contains(target)) {
        toggleUserMenu(false);
      }
    }

    const onEscCloseMenu = ({keyCode}) => {
      if (keyCode === CONST.ESC_CODE) {
        toggleUserMenu(false);
      }
    };

    if(userMenu) {
      document.addEventListener('click', onOutsideMenuClick);
      document.addEventListener('keydown', onEscCloseMenu);
    }
  
    return () => {
       document.removeEventListener('click', onOutsideMenuClick);
       document.removeEventListener('keydown', onEscCloseMenu);
    };
  }, [userMenu, refMenu]);

  return (
    <header className='side-panel'>
        <SidePanelProfile isShowUserMenu={userMenu} showUserMenuHandler={toggleMenuHandler} />
        <SidePanelMenu />
        {userMenu && <SidePanelProfileMore changeRef={changeRefMenu}/>}
    </header>
  )
}
