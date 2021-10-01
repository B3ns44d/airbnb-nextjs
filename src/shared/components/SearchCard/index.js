import PropTypes from 'prop-types';
import Image from 'next/image';
import { HeartIcon as OutlineHeartIcon } from '@heroicons/react/outline';
import { StarIcon, HeartIcon as SolidHeartIcon } from '@heroicons/react/solid';
import { useLocalStorageState } from 'ahooks';
import HeartIcon from './HeartIcon';

const SearchResultCard = ({
  image,
  title,
  location,
  description,
  star,
  price,
  total,
  ...rest
}) => {
  const [isFavorite, setIsFavorite] = useLocalStorageState(
    `isFavorite-${title}`,
    false
  );
  return (
    <div
      className="flex rounded-lg py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg pr-4 transition duration-200 ease-out first:border-t "
      {...rest}
    >
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0 bg-white rounded-2xl overflow-hidden">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="w-full h-full object-center object-cover"
        />
      </div>
      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between items-center">
          <p>{location}</p>
          <button type="button" onClick={() => setIsFavorite(!isFavorite)}>
            <HeartIcon icon={isFavorite ? SolidHeartIcon : OutlineHeartIcon} />
          </button>
        </div>
        <h4 className="text-xl">{title}</h4>
        <div className="border-b w-10 pt-2" />
        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>
        <div className="flex justify-between pt-5 items-end">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400" /> {star}
          </p>
          <div>
            <p className="text-xl font-semibold pb-2 lg:text-2xl inset-0">
              {price}
            </p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

SearchResultCard.propTypes = {
  description: PropTypes.string,
  image: PropTypes.string,
  location: PropTypes.string,
  price: PropTypes.string,
  star: PropTypes.number,
  title: PropTypes.string,
  total: PropTypes.string,
};
SearchResultCard.defaultProps = {
  description: '',
  image: '',
  location: '',
  price: '',
  star: 0,
  title: '',
  total: '',
};
export default SearchResultCard;
