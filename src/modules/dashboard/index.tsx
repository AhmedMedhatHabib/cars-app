import Card from '../../components/carCard';
import { useTranslation } from 'react-i18next';
import {
  faCookieBite,
  faDroplet,
  faBolt,
  faLocationArrow,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import {
  useGetUserRecommendationsByUserIdQuery,
  useGetUserUsageByUserIdQuery,
} from '../../service/queries/users';
import Gauge from '../../components/gaugeCard';

type Usage = {
  color: string;
  name: string;
  icon: IconDefinition;
  rotate: string;
};

const usages: Record<string, Usage> = {
  energy: {
    color: 'indigo',
    name: 'Energy',
    icon: faBolt,
    rotate: 'rotate-[calc(45deg-45deg)]',
  },
  range: {
    color: 'lime',
    name: 'Range',
    icon: faLocationArrow,
    rotate: 'rotate-[calc(135deg-45deg)]',
  },
  break_fluid: {
    color: 'cyan',
    name: 'Break Fluid',
    icon: faDroplet,
    rotate: 'rotate-[calc(10deg-45deg)]',
  },
  tire_wear: {
    color: 'pink',
    name: 'Tire Wear',
    icon: faCookieBite,
    rotate: 'rotate-[calc(30deg-45deg)]',
  },
};

const colors = ['bg-lime-100', 'bg-cyan-100', 'bg-pink-100'];

const DashboardPage = () => {
  const { t } = useTranslation();

  const { data: userUsage, isLoading: isLoadingUserUsage } =
    useGetUserUsageByUserIdQuery(1);
  const { data: userRecommendations, isLoading } =
    useGetUserRecommendationsByUserIdQuery(1);

  const { usage } = userUsage || {};
  const { recommendations } = userRecommendations || {};
  return (
    <div className="flex flex-col">
      <div className="w-full mb-16 max-h-80 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 gap-x-6">
        {usage &&
          Object.entries(usage)?.map(([key, value]) => {
            const info = usages[key];
            return (
              <Gauge
                key={usage.id}
                icon={info.icon}
                name={info.name}
                color={info.color}
                percentage={value}
                rotate={info.rotate}
              />
            );
          })}
      </div>

      <div className="w-full max-h-80 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 gap-x-6">
        {isLoading
          ? [1, 2, 3, 4, 5, 6].map((_, index) => (
              <Card key={index} isLoading={isLoading} />
            ))
          : recommendations?.map((userRecommendation, index) => {
              const { name, img, rentPrice, recommendation, distance } =
                userRecommendation || {};
              return (
                <Card
                  title={`${recommendation}% ${t('recommend')}`}
                  image={img}
                  description={name}
                  distance={distance}
                  rentPrice={rentPrice}
                  key={userRecommendation.id}
                  color={colors[index]}
                  shouldShowRecommendationsIcons
                />
              );
            })}
      </div>
    </div>
  );
};

export default DashboardPage;
