import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTasks, faClipboardList, faAward, faComments, faHome } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';

export default function SidePanelMenu() {
  const navigation = [
    {
      icon: faHome,
      title: 'Домашняя',
      to: '/'
    },
    {
      icon: faClipboardList,
      title: 'Доступные задачи',
      to: '/taskshop',
    },
    {
      icon: faTasks,
      title: 'Мои задачи',
      to: '/mytask',
    },
    {
      icon: faAward,
      title: 'Таблица лидеров',
      to: '/scoreboard',
    }, 
    {
      icon: faAward,
      title: 'Достижения',
      to: '/achievements',
    },
    {
      icon: faComments,
      title: 'Доска сообщений',
      to: '/messagesboard',
    }
  ]



  return (
    <nav className='side-menu'>
      <ul className="side-menu__list">
        {navigation.map((link) => (
          <li className="side-menu__item">
            <div className="side-menu__icon"><FontAwesomeIcon icon={link.icon} /></div>
            <NavLink to={link.to} className="side-menu__link">{link.title}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
