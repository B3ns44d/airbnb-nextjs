import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useSize } from 'ahooks';
import IMAGES from 'shared/constants/images';
import { PAGE_MAX_WIDTH } from 'shared/constants';
import View from './View';

const Logo = ({ logo, smallLogo }) => {
  const [pageSize, setPageSize] = useState(null);

  useEffect(() => {
    setPageSize(document.querySelector('html'));
  }, []);

  const { width } = useSize(pageSize);

  const src = width > PAGE_MAX_WIDTH ? logo : smallLogo;

  return <View src={src} />;
};
Logo.propTypes = {
  logo: PropTypes.string,
  smallLogo: PropTypes.string,
};
Logo.defaultProps = {
  logo: IMAGES.logo,
  smallLogo: IMAGES.smallLogo,
};

export default Logo;
