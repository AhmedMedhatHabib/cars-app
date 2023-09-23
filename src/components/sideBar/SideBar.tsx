import { SideBarProps } from './SideBar.types';
import SideBarLink from './SideBarLink';

import reactLogo from '../../assets/react.svg';

function SideBar({ links }: SideBarProps) {
  return (
    <div className="flex flex-col w-1/6 max-lg:w-1/5 max-xs:w-full max-xs:h-12 max-xs:flex-row max-xs:justify-around gap-2 px-3 relative shadow">
      <div className="flex p-2 h-16 items-center max-md:justify-center max-xs:absolute max-xs:bottom-2 max-xs:bg-white max-xs:rounded-full max-xs:w-14 max-xs:h14">
        <img src={reactLogo} className="me-2 max-md:me-0" alt="React logo" />
        <h1 className="font-bold max-md:hidden">Motiv.</h1>
      </div>
      {links.map(link => (
        <SideBarLink key={link.path} {...link} />
      ))}
    </div>
  );
}

export default SideBar;
