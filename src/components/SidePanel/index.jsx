import React from 'react';
import SidePanelProfile from '../SidePanelProfile';
import SidePanelMenu from '../SidePanelMenu';

export default function SideMenu() {
  return (
    <header className='side-panel'>
        <SidePanelProfile />
        <SidePanelMenu />        
    </header>
  )
}
