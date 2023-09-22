import { Outlet } from 'react-router-dom';
import { SideBar } from '../sideBar';
import { TopBar } from '../topBar';
import { SideBarLinkProps } from '../sideBar/SideBarLink.types';
import { faBorderAll, faCar } from '@fortawesome/free-solid-svg-icons';
import { MainRoutes } from '../../Routes';

const sideBarLinks: SideBarLinkProps[] = [
  { icon: faBorderAll, label: 'dashboard', link: MainRoutes.dashboard },
  { icon: faCar, label: 'cars', link: MainRoutes.cars },
];

function MainLayout() {
  return (
    <div className="flex w-full h-screen gap-4">
      <SideBar links={sideBarLinks} />
      <div className="flex flex-col w-full">
        <TopBar />
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
