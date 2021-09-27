import { DateRangePicker } from 'react-date-range';
import { COLORS, RANGE_SELECTION } from 'shared/constants';
import { UsersIcon } from '@heroicons/react/solid';
import GuessesInput from 'shared/components/GuessesInput';
import ActionButton from 'shared/components/ActionButton/index';
import { useTopBarContext } from 'hooks/app/useTopBarContext';
import { useRouter } from 'next/router';
import { dateToString } from 'shared/utils';

const DatePicker = () => {
  const { setUserSearchInput, userSearchInput, guessesNumber, date, setDate } =
    useTopBarContext();
  const router = useRouter();

  const selectionRange = {
    startDate: date.startDate,
    endDate: date.endDate,
    key: RANGE_SELECTION.KEY,
  };

  const handleDateRangeSelect = ({ selection }) => {
    const { startDate, endDate } = selection;
    setDate({
      startDate,
      endDate,
    });
  };
  const handleUserSearch = () => {
    // TODO: add validation
    if (guessesNumber === 0) {
      throw new Error('please add just one');
    }
    router.push({
      pathname: '/search',
      query: {
        location: userSearchInput,
        startDate: dateToString(date.startDate),
        endDate: dateToString(date.endDate),
        guessesNumber,
      },
    });
    setUserSearchInput('');
  };
  return (
    <div className="flex flex-col col-span-3 mx-auto mt-0">
      <DateRangePicker
        ranges={[selectionRange]}
        onChange={handleDateRangeSelect}
        rangeColors={[COLORS.PRIMARY]}
        minDate={new Date()}
      />
      <div className="flex items-center justify-between border-b mb-2 pb-1">
        <h2 className="text-2xl flex-grow font-semibold pt-2">
          Number of Guesses
        </h2>
        <UsersIcon className="h-5 pr-4" />
        <GuessesInput />
      </div>
      <div className="flex items-center">
        <ActionButton
          text="Cancel"
          textColor="text-gray-500"
          onClick={() => setUserSearchInput('')}
        />
        <ActionButton
          text="Search"
          textColor="text-red-400"
          onClick={handleUserSearch}
        />
      </div>
    </div>
  );
};

export default DatePicker;
