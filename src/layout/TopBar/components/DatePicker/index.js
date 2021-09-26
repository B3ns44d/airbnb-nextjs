import { DateRangePicker } from 'react-date-range';
import { useState } from 'react';
import { COLORS, RANGE_SELECTION } from 'shared/constants';
import { UsersIcon } from '@heroicons/react/solid';
import GuessesInput from 'shared/components/GuessesInput';
import ActionButton from 'shared/components/ActionButton/index';
import { useTopBarContext } from 'hooks/app/useTopBarContext';

const DatePicker = () => {
  const { setUserSearchInput } = useTopBarContext();

  const [date, setDate] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });

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
          textColor="gray"
          textColorOpacity="500"
          onClick={() => setUserSearchInput('')}
        />
        <ActionButton text="Search" textColor="red" textColorOpacity="400" />
      </div>
    </div>
  );
};

export default DatePicker;
