import { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faRetweet,
  faBolt,
  faGear,
} from '@fortawesome/free-solid-svg-icons';
import { Transmission } from '../../service/types/car';

const Card = ({
  title,
  subTitle,
  description,
  image,
  seats,
  transmission,
  rentPrice,
  isLoading,
  distance,
  color,
  shouldShowRecommendationsIcons = false,
}: {
  title?: string;
  subTitle?: string;
  description?: string;
  image?: string;
  seats?: number;
  transmission?: Transmission;
  rentPrice?: number;
  isLoading?: boolean;
  distance?: string;
  color?: string;
  shouldShowRecommendationsIcons?: boolean;
}): ReactElement => {
  return (
    <div
      className={`w-full max-w-sm ${
        color || 'bg-white'
      } max-h-80 px-6 py-8 border border-gray-200 rounded-lg`}
    >
      {isLoading ? (
        <div className="animate-pulse">
          <div className="h-6 w-60 mb-1 bg-gray-400 rounded-md" />
          <div className="h-4 w-40 bg-gray-400 rounded-md" />
          <div className="h-40 w-1000 my-4 bg-gray-400 rounded-lg" />
          <div className="h-6 w-60 mb-1 bg-gray-400 rounded-md" />
          <div className="h-4 w-30 bg-gray-400 rounded-md" />
        </div>
      ) : (
        <>
          {!!title && (
            <a href="#">
              <h5 className="text-l font-semibold mb-1 text-gray-900">
                {title}
              </h5>
            </a>
          )}
          {!!subTitle && <h6 className="text-md text-gray-400">{subTitle}</h6>}
          <div className="content-center justify-center">
            <img className="my-4" src={image} alt={title || description} />
          </div>
          {!!description && (
            <h6 className="text-xl text-gray-800 mb-2">{description}</h6>
          )}
          <div className="justify-between flex flex-row">
            <div className="flex flex-row">
              {!!seats && (
                <div className="flex flex-row mx-4 justify-center items-center">
                  <FontAwesomeIcon icon={faUser} className="text-violet-600" />
                  <h6 className="text-md mx-2 text-gray-600">{seats}</h6>
                </div>
              )}
              <div className="flex flex-row justify-center items-center ltr:mr-2 rtl:ml-2">
                <FontAwesomeIcon icon={faRetweet} className="text-violet-600" />
                {!!transmission && (
                  <h6 className="text-md mx-2 text-gray-600">{transmission}</h6>
                )}
              </div>
              {!!distance && (
                <h6 className="text-md ltr:mr-2 rtl:ml-2 text-gray-600">
                  {distance}
                </h6>
              )}
              {shouldShowRecommendationsIcons && (
                <>
                  <div className="flex flex-row ltr:mr-2 rtl:ml-2 justify-center items-center">
                    <FontAwesomeIcon
                      icon={faBolt}
                      className="text-violet-600"
                    />
                  </div>
                  <div className="flex flex-row ltr:mr-2 rtl:ml-2 justify-center items-center">
                    <FontAwesomeIcon
                      icon={faGear}
                      className="text-violet-600"
                    />
                  </div>
                </>
              )}
            </div>
            <div className="flex flex-row justify-center items-center">
              <h6 className="text-md font-semibold text-gray-600">{`$${rentPrice}`}</h6>
              <h6 className="text-md font-semibold text-gray-400">/d</h6>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
