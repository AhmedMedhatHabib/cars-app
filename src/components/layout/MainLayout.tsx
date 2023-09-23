import { Outlet } from 'react-router-dom';
import { SideBar } from '../sideBar';
import { TopBar } from '../topBar';
import { SideBarLinkProps } from '../sideBar/SideBarLink.types';
import { faBorderAll, faCar } from '@fortawesome/free-solid-svg-icons';
import { MainRoutes } from '../../Routes';

const sideBarLinks: SideBarLinkProps[] = [
  { icon: faBorderAll, label: 'dashboard', path: MainRoutes.dashboard },
  { icon: faCar, label: 'cars', path: MainRoutes.cars },
];

function MainLayout() {
  return (
    <div className="flex w-full h-screen max-xs:flex-col-reverse max-xs:justify-between">
      <SideBar links={sideBarLinks} />
      <div className="flex flex-col w-full">
        <TopBar />
        <div className="flex w-full h-full bg-gray-200 overflow-y-auto p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
