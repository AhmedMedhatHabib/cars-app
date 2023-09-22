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
        `bg-white hover:bg-gray-100 text-gray-700 py-2 px-4 rounded ${
          isActive ? 'bg-gray-200' : ''
        }`
      }
    >
      <FontAwesomeIcon className="me-2" icon={icon} />
      {t(label)}
    </NavLink>
  );
}

export default SideBarLink;
