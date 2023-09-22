import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SideBarLinkProps } from './SideBarLink.types';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function SideBarLink({ icon, path, label }: SideBarLinkProps) {
  const { t } = useTranslation();

  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `hover:bg-gray-100 text-gray-700 p-2 rounded max-md:text-center ${
          isActive ? 'bg-gray-200' : 'bg-white'
        }`
      }
    >
      <FontAwesomeIcon className="me-2 max-md:me-0" icon={icon} />
      <p className="inline max-md:hidden md:max-lg:text-sm">{t(label)}</p>
    </NavLink>
  );
}

export default SideBarLink;
