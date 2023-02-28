import React, { FC, ReactElement, useState } from 'react';
import { menuElementProps } from '../tabsMenu/TabsMenu';
import { TabsMenu } from '../tabsMenu/TabsMenu';
import { TabContentProps } from '../tabPageContent/TabPageContent';

interface TabsControlProps {
  children: ReactElement<TabContentProps>[]
  defaultTab?: number
}

export const TabsControl: FC<TabsControlProps> = ({ defaultTab, children }) => {
  const [activeTab, setActiveTab] = useState<number>(defaultTab || 0);
  const tabsMenuItems = children || [];

  const items = tabsMenuItems.map(tab => {
    const {id, icon, title} = tab.props;

    return {
      id,
      icon,
      title
    } as menuElementProps;
  });

  const currentTabContent = tabsMenuItems.find(tab => tab.props.id === activeTab);

  return (
    <>
      <TabsMenu
        activeTab={activeTab}
        items={items}
        setActiveTab={setActiveTab}
      />
      {currentTabContent}
    </>
  )
}