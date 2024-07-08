import SideBar from '@/components/Sidebar/SideBar';
import DrawerContextProvider from '@/components/Sidebar/SideBarProvider';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex h-screen w-full flex-col md:flex-row overflow-y-scroll">
      <DrawerContextProvider>
        <SideBar />
      </DrawerContextProvider>

      <div className="flex-1 w-full px-2 mt-[70px] md:p-12 max-w-7xl mx-auto">{children}</div>
    </div>
  );
}
