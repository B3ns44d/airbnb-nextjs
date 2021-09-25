import { GlobeAltIcon } from '@heroicons/react/solid';
import { uniqueId } from 'lodash';
import Link from 'next/link';
import { links } from './utils';

const SocialLinks = () => (
  <div className="flex items-center mt-4 space-x-4 sm:mt-0 text-gray-500">
    <span className="flex items-center underline font-base cursor-pointer">
      <GlobeAltIcon className="block w-5 h-5 fill-current" />
      <span className="pl-1">English (US)</span>
    </span>
    <span className="mr-5 underline font-base cursor-pointer">MAD</span>
    {links?.map(({ icon: Icon, name, path }) => (
      <Link
        key={uniqueId(name)}
        passHref
        href={path}
        className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
      >
        <Icon className="hover:scale-105 transition transform duration-100 ease-out" />
      </Link>
    ))}
  </div>
);

export default SocialLinks;
