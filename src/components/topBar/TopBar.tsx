import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useGetUserByIdQuery } from '../../service/queries/users';
import { faBell, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

function TopBar() {
  const { t } = useTranslation();
  const { data, isLoading } = useGetUserByIdQuery(1);

  function onGetUserInfo() {
    if (isLoading) {
      return (
        <div className="animate-pulse">
          <div className="h-10 w-10 bg-gray-400 rounded-full"></div>
        </div>
      );
    }

    return (
      <img
        className="h-10 w-10 rounded-full"
        src={data?.img}
        alt="profile woman"
      />
    );
  }

  return (
    <div className="px-6 flex justify-between bg-white h-16 shadow">
      <div className="flex items-center w-80">
        <div className="relative w-full text-gray-600 focus-within:text-gray-400">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <button
              type="submit"
              className="p-1 focus:outline-none focus:shadow-outline"
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </span>
          <input
            type="search"
            className="w-full py-2 text-sm bg-gray-100 text-gray-700 rounded-md pl-10 focus:outline-none focus:text-gray-900"
            placeholder={t('searchPlaceholder')}
            autoComplete="off"
          />
        </div>
      </div>

      <div className="flex justify-end items-center">
        <FontAwesomeIcon className="me-4 text-gray-700" icon={faBell} />

        {onGetUserInfo()}
      </div>
    </div>
  );
}

export default TopBar;
