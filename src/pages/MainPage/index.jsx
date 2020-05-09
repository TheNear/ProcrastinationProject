import React from 'react';
import SidePanel from '../../components/SidePanel';
import ModalPopup from '../../componentHelpers/ModalPopup';

export default function MainPage() {
  return (
    <div className="main-wrapper">
      <SidePanel />
      <main className="main">
        <ModalPopup type='warn' show={true} duration={500}> 
          <span>Функционал еще не реализован</span>
        </ModalPopup>
        <ModalPopup type='good' show={true} duration={500}> 
          <span>Хорошо, но выглядит плохо</span>
        </ModalPopup>
      </main>
    </div>
  )
};
