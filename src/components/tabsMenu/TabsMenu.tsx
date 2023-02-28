import React, { FC, Dispatch, SetStateAction} from 'react'
import { MenuItem } from './menuItem/MenuItem'

import './TabsMenu.css'

export interface menuElementProps {
  id: number
  icon?: JSX.Element
  title: string
}

interface TabsMenuProps {
  activeTab: number
  items: menuElementProps[]
  setActiveTab: Dispatch<SetStateAction<number>>
}

export const TabsMenu: FC<TabsMenuProps> = ({ activeTab, items, setActiveTab }) => {
  const menuElements = items.map((tab: menuElementProps)  => {
    const {id, ...menuProps} = tab

    let classNames = ['item'];

    if (activeTab === id) {
      classNames.push('active');
    }

    const handleClick = () => {
      setActiveTab(id)
    }

    return (
      <li className={classNames.join(' ')} key={id} onClick={handleClick}>
        <MenuItem {...menuProps} />
      </li>
    );
  });

  return (
    <ul className='tabsContainer'>
      {menuElements}
    </ul>
  );
}

