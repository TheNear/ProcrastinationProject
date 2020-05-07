import React, {useState, useEffect} from 'react';
import SidePanelProfile from '../SidePanelProfile';
import SidePanelMenu from '../SidePanelMenu';
import SidePanelProfileMore from '../SidePanelProfileMore';

export default function SideMenu() {
  const [userMenu, toggleUserMenu] = useState(false);

  const toggleMenuHandler = () => {
    toggleUserMenu(!userMenu);
  };

  useEffect(() => {

  }, [userMenu]);

  return (
    <header className='side-panel'>
        <SidePanelProfile isShowUserMenu={userMenu} showUserMenuHandler={toggleMenuHandler} />
        <SidePanelMenu />
        {userMenu && <SidePanelProfileMore/>}
    </header>
  )
}
