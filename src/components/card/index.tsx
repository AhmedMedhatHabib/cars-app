import { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faRetweet } from '@fortawesome/free-solid-svg-icons';
import { Car } from '../../service/types/car';

const Card = ({
  car,
  isLoading,
}: {
  car?: Car;
  isLoading: boolean;
}): ReactElement => {
  const { name, brand, img, seats, transmission, rentPrice } = car || {};
  console.log(car);
  return (
    <div className="w-full max-w-sm bg-white max-h-80 px-6 py-8 border border-gray-200 rounded-lg">
      {isLoading ? (
        <div className="animate-pulse">
          <div className="h-6 w-60 mb-1 bg-gray-400 rounded-md" />
          <div className="h-4 w-40 bg-gray-400 rounded-md" />
          <div className="h-40 w-1000 my-4 bg-gray-400 rounded-lg" />
        </div>
      ) : (
        <>
          <a href="#">
            <h5 className="text-xl font-semibold mb-1 text-gray-900">{name}</h5>
          </a>
          <h6 className="text-md text-gray-400">{brand}</h6>
          <div className="content-center justify-center">
            <img className="my-4" src={img} alt={name} />
          </div>
          <div className="justify-between flex flex-row">
            <div className="flex flex-row">
              <div className="flex flex-row mx-4 justify-center items-center">
                <FontAwesomeIcon icon={faUser} className="text-violet-600" />
                <h6 className="text-md mx-2 text-gray-600">{seats}</h6>
              </div>
              <div className="flex flex-row justify-center items-center">
                <FontAwesomeIcon icon={faRetweet} className="text-violet-600" />
                <h6 className="text-md mx-2 text-gray-600">{transmission}</h6>
              </div>
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
