import { SideBarProps } from './SideBar.types';
import SideBarLink from './SideBarLink';

import reactLogo from '../../assets/react.svg';
import { useTranslation } from 'react-i18next';

function SideBar({ links }: SideBarProps) {
  const {
    t,
    i18n: { language, changeLanguage },
  } = useTranslation();

  function onChangeLanguage() {
    if (language === 'ar') {
      changeLanguage('en');
    } else {
      changeLanguage('ar');
    }
  }

  return (
    <div className="flex flex-col w-1/6 gap-2 ps-3 pt-3 relative shadow">
      <div className="flex p-2 h-14 items-center">
        <img src={reactLogo} className="me-2" alt="React logo" />
        <h1 className="font-bold">Motiv.</h1>
      </div>
      {links.map(link => (
        <SideBarLink {...link} />
      ))}
      <div className="absolute bottom-4">
        <button
          onClick={onChangeLanguage}
          className="flex items-center w-full bg-white hover:bg-gray-100 text-gray-700 rounded"
        >
          <span className="border-2 border-gray-700 rounded-md w-8 h-8">
            {t('crossLanguageID')}
          </span>
        </button>
      </div>
    </div>
  );
}

export default SideBar;
