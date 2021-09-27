import PropTypes from 'prop-types';
import { useEffect, useState, memo } from 'react';
import { useSize } from 'ahooks';
import IMAGES from 'shared/constants/images';
import { PAGE_MAX_WIDTH } from 'shared/constants';
import { useRouter } from 'next/router';
import View from './View';

const Logo = ({ logo, smallLogo }) => {
  const [pageSize, setPageSize] = useState(null);
  const router = useRouter();

  useEffect(() => {
    setPageSize(document.querySelector('html'));
  }, []);

  const { width } = useSize(pageSize);

  const src = width > PAGE_MAX_WIDTH ? logo : smallLogo;

  const redirectUserToHome = () => router.push('/');

  return <View src={src} goHome={redirectUserToHome} />;
};
Logo.propTypes = {
  logo: PropTypes.string,
  smallLogo: PropTypes.string,
};
Logo.defaultProps = {
  logo: IMAGES.logo,
  smallLogo: IMAGES.smallLogo,
};

export default memo(Logo);
