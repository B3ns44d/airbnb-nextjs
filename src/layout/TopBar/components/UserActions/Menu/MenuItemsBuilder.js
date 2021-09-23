import { filter } from 'lodash';
import PropTypes from 'prop-types';

const MenuItemsBuilder = ({ data, withSelecters, selecters, items }) => {
  console.log('items :>> ', items);
  const me = selecters.forEach((part) => {
    const sss = data?.[part].map((item) => {
      const meee = filter(item, (i) => items.forEach((_item) => i === _item));
      return meee;
    });
    return sss;
  });
  console.log(`me`, me);
  //   if (!withSelecters) {
  //     const me = selecters.forEach((part) => {
  //       const sss = data?.[part].map((item) => {
  //         const meee = filter(item, (i) => items.forEach((_item) => i === _item));
  //         return meee;
  //       });
  //       return sss;
  //     });
  //     console.log(`me`, me);
  //   } else {
  //     Object.keys(data).forEach((part) => {
  //       console.log('part :>> ', part);
  //       data?.[part].map((item) => console.log('item :>> ', item));
  //     });
  //   }
  return <></>;
};

MenuItemsBuilder.propTypes = {
  data: PropTypes.shape({
    part: PropTypes.arrayOf(PropTypes.object),
  }),
  selecters: PropTypes.shape(PropTypes.array),
  items: PropTypes.shape(PropTypes.array),
  withSelecters: PropTypes.bool,
};

MenuItemsBuilder.defaultProps = {
  data: {},
  selecters: [],
  items: [],
  withSelecters: false,
};
export default MenuItemsBuilder;
