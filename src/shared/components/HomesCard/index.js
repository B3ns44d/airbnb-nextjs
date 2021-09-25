import PropTypes from 'prop-types';

import Image from 'next/image';

const HomesCard = ({ name, image }) => (
  <div className="cursor-pointer hover:scale-105 transition transform duration-300 ease-out flex-grow">
    <div className="relative w-80 h-80 bg-white rounded-xl overflow-hidden sm:h-64">
      <Image src={image} alt={name} layout="fill" />
    </div>
    <h3 className="text-sm font-semibold mt-3 text-gray-900">{name}</h3>
  </div>
);

HomesCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
};
HomesCard.defaultProps = {
  name: '',
  image: '',
};
export default HomesCard;
