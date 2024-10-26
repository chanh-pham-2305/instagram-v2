"use client"
import { createContext, useCallback, useContext, useState } from 'react';

export enum DRAWER {
  'Home'= 1,
  'Search',
  'Notification',
  'None',
  'Messenger'
}

type DrawerContextType = {
  drawer: DRAWER;
  handleDrawer: (drawer: DRAWER) => void;
};

export const DrawerContext = createContext<DrawerContextType>({} as DrawerContextType);

export default function DrawerContextProvider({ children }: { children: React.ReactNode }) {
  const [drawer, setDrawer] = useState<DRAWER>(DRAWER.Home);

  const handleDrawer = useCallback((d: DRAWER) => {
    // console.log(`rerender drawer: ${d} `);
    setDrawer(d);
  }, []);
  return (
    <DrawerContext.Provider value={{ drawer, handleDrawer }}>{children}</DrawerContext.Provider>
  );
}

export const useDrawer = () => useContext(DrawerContext);
