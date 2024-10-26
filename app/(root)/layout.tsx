import SideBar from '@/components/Sidebar/SideBar';
import DrawerContextProvider from '@/components/Sidebar/SideBarProvider';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-col h-screen w-full md:flex-row overflow-y-scroll">
      {/* <DrawerContextProvider>
        <SideBar />
      </DrawerContextProvider> */}
      <div className="h-full w-[72px] bg-white border border-r-1 flex justify-center items-center">
        sidebar
      </div>

      <div className="flex-auto mt-[70px] md:mt-0">{children}</div>
    </div>
  );
}
