import React, { FC } from 'react'
import './MenuItem.css'

interface MenuItemProps {
  icon?: JSX.Element
  title: string
}

export const MenuItem: FC<MenuItemProps> = ({ icon, title }) => {
  return (
    <div className='tab-content'>
      {icon && <span className='icon'>{icon}</span>}
      <span className='tab-title'>{title}</span>
    </div>
  );
}