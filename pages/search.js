import Layout from 'layout';
import { useRouter } from 'next/router';
import SearchResultHeader from 'shared/components/SearchResultHeader';
import { query as apiQuery } from 'service/apiService';
import { HTTP_METHODS } from 'shared/constants';
import SearchFilters from 'containers/searchFilters/index';
import SearchWrapper from 'containers/searchFilters/components/SearchWrapper';
import SearchResultCard from 'shared/components/SearchCard';
import { apiHomePropType } from 'shared/common/propTypes';
import { uniqueId } from 'lodash';

const Search = ({ searchResult }) => {
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
          <SearchWrapper>
            <SearchFilters />
          </SearchWrapper>
          {searchResult?.map(
            ({
              img,
              title,
              location: _location,
              description,
              star,
              price,
              total,
            }) => (
              <SearchResultCard
                key={uniqueId(title)}
                image={img}
                title={title}
                location={_location}
                description={description}
                star={star}
                price={price}
                total={total}
              />
            )
          )}
        </section>
      </main>
    </Layout>
  );
};

Search.propTypes = {
  searchResult: apiHomePropType,
};
Search.defaultProps = {
  searchResult: [],
};
export default Search;

export const getServerSideProps = async () => {
  const searchResult = await apiQuery({
    method: HTTP_METHODS.GET,
    url: 'search',
  });

  return {
    props: {
      searchResult,
    },
  };
};
