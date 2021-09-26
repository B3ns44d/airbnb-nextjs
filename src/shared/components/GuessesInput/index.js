import clsx from 'clsx';
import { useTopBarContext } from 'hooks/app/useTopBarContext';

const GuessesInput = () => {
  const { guessesNumber, setGuessesNumber } = useTopBarContext();

  const decrement = () => setGuessesNumber(guessesNumber - 1);

  const increment = () => setGuessesNumber(guessesNumber + 1);

  const handleInputChnage = ({ target }) =>
    setGuessesNumber(Number(target.value));

  return (
    <div className="custom-number-input w-32">
      <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1 items-center justify-center">
        <button
          type="button"
          disabled={guessesNumber === 0}
          data-action="decrement"
          className={clsx([
            guessesNumber === 0
              ? 'guesses-btn-colors-disbled'
              : 'guesses-btn-colors-active',
            'guesses-btn',
          ])}
          onClick={decrement}
        >
          <span className="text-2xl font-thin">-</span>
        </button>
        <input
          value={guessesNumber}
          onChange={(e) => handleInputChnage(e)}
          type="number"
          className="outline-none focus:outline-none text-center w-full font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700 rounded-none"
          name="custom-input-number"
        />
        <button
          type="button"
          data-action="increment"
          className="guesses-btn guesses-btn-colors-active"
          onClick={increment}
        >
          <span className="text-2xl font-thin">+</span>
        </button>
      </div>
    </div>
  );
};

export default GuessesInput;
