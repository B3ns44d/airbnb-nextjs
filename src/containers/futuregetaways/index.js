import SectionTitle from 'shared/components/SectionTitle';
import { apiHomePropType } from 'shared/common/propTypes';
import TabsGroup from 'shared/components/TabsGroup';

const FutureGetaways = ({ data }) => (
  <section className="pt-6 pb-8">
    <div className="pt-8">
      <SectionTitle title="Inspiration for future getaways" />
    </div>
    <div className="w-full py-1 sm:px-0 divide-y divide-light-blue-500">
      <TabsGroup data={data} />
    </div>
  </section>
);
FutureGetaways.propTypes = { data: apiHomePropType };
FutureGetaways.defaultProps = { data: [] };
export default FutureGetaways;
