import { SideBarProps } from './SideBar.types';
import SideBarLink from './SideBarLink';

import reactLogo from '../../assets/react.svg';

function SideBar({ links }: SideBarProps) {
  return (
    <div className="flex flex-col w-1/6 max-lg:w-1/5 gap-2 px-3 relative shadow">
      <div className="flex p-2 h-16 items-center max-md:justify-center">
        <img src={reactLogo} className="me-2 max-md:me-0" alt="React logo" />
        <h1 className="font-bold max-md:hidden">Motiv.</h1>
      </div>
      {links.map(link => (
        <SideBarLink key={link.path} {...link} />
      ))}
      <div className="absolute bottom-4"></div>
    </div>
  );
}

export default SideBar;
