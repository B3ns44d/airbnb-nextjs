import React from 'react';
import { get, uniqueId } from 'lodash';
import FooterItem from 'shared/components/FooterItem';
import { items, footerLinks } from './utils';
import SocialLinks from './SocialLinks';

const Footer = () => (
  <div className="bg-gray-100 border pt-10 px-6 md:px-24 lg:px-8 ">
    <div className="max-w-[100rem] mx-auto ">
      <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
        <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
          {Object.keys(items).map((item) => (
            <div key={uniqueId(item)}>
              <p className="font-semibold tracking-wide text-gray-800">
                {item.toUpperCase()}
              </p>
              <ul className="mt-2 space-y-2">
                {get(items, item).map(({ title, path }) => (
                  <FooterItem key={uniqueId(title)} name={title} path={path} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-between pt-5 pb-10 border-t sm:flex-row">
        <p className="text-sm text-gray-600">
          © 2021 Airbnb, Inc. ·{' '}
          {footerLinks?.map(({ title, path }) => (
            <>
              <span key={uniqueId(title)} className="pl-1 pr-1 hover:underline">
                <a href={path}>{title}</a>
              </span>
            </>
          ))}
        </p>
        <SocialLinks />
      </div>
    </div>
  </div>
);

export default Footer;
