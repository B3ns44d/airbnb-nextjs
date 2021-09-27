import { format } from 'date-fns';
import { isUndefined } from 'lodash';
import { DATE_FORMAT } from '../constants/index';

export const dateToString = (date) => {
  const isValidDate = date instanceof Date;
  if (!isValidDate || date === null || date === undefined) {
    throw new Error('you need to pass a valid date object');
  }
  return date.toISOString();
};

export const formatDate = ({ date, dateFormat = DATE_FORMAT.default }) =>
  format(new Date(date), dateFormat);

export const checkIfDateIsUndefined = (date) =>
  !isUndefined(date) ? date : new Date();

export const formatedDate = ({ startDate, endDate }) => {
  const formatedStartDate = formatDate({
    date: checkIfDateIsUndefined(startDate),
    dateFormat: DATE_FORMAT.startDate,
  });
  const formatedEndDate = formatDate({
    date: checkIfDateIsUndefined(endDate),
    dateFormat: DATE_FORMAT.endDate,
  });
  const dateRange = `${formatedStartDate} - ${formatedEndDate}`;
  return dateRange;
};
