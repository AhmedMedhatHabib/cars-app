import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

const Gauge = ({
  color,
  rotate,
  name,
  icon,
  percentage,
}: {
  color: string;
  rotate: string;
  name: string;
  icon: IconDefinition;
  percentage?: string;
}) => {
  return (
    <div
      className={`w-full max-w-xs bg-${color}-200 max-h-80 px-6 py-8 border border-gray-200 rounded-lg`}
    >
      <div className="w-full flex mb-8 items-center justify-center">
        <FontAwesomeIcon icon={icon} className={`text-${color}-500 text-3xl`} />
      </div>

      <p className="w-full mb-8 truncate text-center text-3xl font-bold leading-none text-white">
        {name}
      </p>
      <div
        className={`relative flex aspect-[2] items-center justify-center overflow-hidden rounded-t-full bg-${color}-500`}
      >
        <div
          className={`absolute top-0 aspect-square w-full ${rotate} bg-gradient-to-tr from-transparent from-50% to-white to-50% transition-transform duration-500`}
        ></div>
        <div
          className={`absolute top-1/4 flex aspect-square w-3/4 justify-center rounded-full bg-${color}-200`}
        ></div>
        <p
          className={`absolute bottom-0 w-full truncate text-center text-3xl leading-none text-white`}
        >
          {percentage}%
        </p>
      </div>
    </div>
  );
};

export default Gauge;
