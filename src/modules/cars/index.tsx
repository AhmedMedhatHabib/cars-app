import { useGetCarsQuery } from '../../service/queries/cars';
import Card from '../../components/card';
import DropDown from '../../components/dropdown';

const CarsPage = () => {
  const { data: cars, isLoading } = useGetCarsQuery('');
  return (
    <div className="flex flex-col">
      <div className="flex mb-8 flex-row">
        <div className="ltr:mr-3 rtl:ml-3">
          <DropDown />
        </div>
        <DropDown />
      </div>
      <div className="w-full max-h-80 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 gap-x-6">
        {isLoading
          ? [1, 2, 3, 4, 5, 6].map((_, index) => (
              <Card key={index} isLoading={isLoading} />
            ))
          : cars?.map(car => (
              <Card car={car} key={car.id} isLoading={isLoading} />
            ))}
      </div>
    </div>
  );
};

export default CarsPage;
