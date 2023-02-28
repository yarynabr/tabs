import React, { FC } from 'react';
import { TabsControl } from '../tabsControl/TabsControl'
import { TabPageContent } from '../tabPageContent/TabPageContent';
import { FaChild, FaCat, FaDog, FaSpider, } from 'react-icons/fa';

import './App.css';

const App: FC = () => {
  return (
    <div className='app'>
      <TabsControl defaultTab={2}>
        <TabPageContent id={1} title={'Man'}>
          <h1>Man content is here</h1>
        </TabPageContent>
        <TabPageContent id={2} title={'Woman'}>
          <h1>Woman content is here</h1>
        </TabPageContent>
        <TabPageContent id={3} title={'Child'} icon={<FaChild />}>
          <h1>Child content is here</h1>
        </TabPageContent>
        <TabPageContent id={4} title={'Dog'} icon={<FaDog />}>
          <h1>Dog content is here</h1>
        </TabPageContent>
        <TabPageContent id={5} title={'Cat'} icon={<FaCat />}>
          <h1>Cat content is here</h1>
        </TabPageContent>
        <TabPageContent id={6} title={'Parrot'}>
          <h1>Parrot content is here</h1>
        </TabPageContent>
        <TabPageContent id={7} title={'Hamster'}>
          <h1>Hamster content is here</h1>
        </TabPageContent>
        <TabPageContent id={8} title={'Spider'} icon={<FaSpider />}>
          <h1>Spider content is here</h1>
        </TabPageContent>
        <TabPageContent id={9} title={'Snake'}>
          <h1>Snake content is here</h1>
        </TabPageContent>
      </TabsControl>
    </div>
  );
};

export default App;
