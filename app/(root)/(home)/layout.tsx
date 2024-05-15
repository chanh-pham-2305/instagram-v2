import { Header } from '@/components/index';

function HomePageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default HomePageLayout;
