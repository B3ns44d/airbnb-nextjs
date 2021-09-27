import Layout from 'layout';
import { useRouter } from 'next/router';
import FilterButton from 'shared/components/FilterButton';
import SearchResultHeader from 'shared/components/SearchResultHeader';

const Search = () => {
  const { query } = useRouter();
  const { location, startDate, endDate, guessesNumber } = query;

  return (
    <Layout>
      <main>
        <section className="flex-grow pt-14 px-6">
          <SearchResultHeader
            date={{ startDate, endDate }}
            guesses={guessesNumber}
            stays={300}
            location={location}
          />
          <div className="hidden lg:inline-flex mb-6 space-x-3 text-gray-800 whitespace-nowrap">
            <FilterButton name="Free cancellation" />
            <FilterButton name="Type of place" />
            <FilterButton name="Price" />
            <FilterButton name="Instant Book" />
            <FilterButton name="More filters" />
          </div>
        </section>
      </main>
    </Layout>
  );
};
export default Search;

export const getServerSideProps = async () => ({
  props: {},
});
