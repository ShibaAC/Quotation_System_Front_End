import React, { createContext, useContext } from 'react';
import useTabs from './useTabs';

const TabContext = createContext(null);

export function TabProvider({ children }) {
  const [state, tabDispatch] = useTabs();

  return (
    <TabContext.Provider value={{ state, tabDispatch }}>
      {children}
    </TabContext.Provider>
  );
}

export function useTabContext() {
  const context = useContext(TabContext);
  if (context === undefined) {
    throw new Error('useTabContext must be used within a TabProvider');
  }
  return context;
}