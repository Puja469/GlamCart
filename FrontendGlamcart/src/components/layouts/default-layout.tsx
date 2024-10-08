import { Fragment, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

import Carousels from '../corousels';
import DownFooter from '../Footer/down-footer';
import Footer from '../Footer/Footer';
import Header from '../header';
import Meta from '../UI/meta';

type LayoutProvider = {
  children: ReactNode;
  title?: string;
  description?: string;
};

const DefaultLayout = ({
  title = '',
  description = '',
  children,
}: LayoutProvider) => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  return (
    <>
      <Meta title={title} description={description} />
      <Header />
      {isHome && <Carousels />}
      <main id='main' className='py-3'>
        {children}
      </main>
      {/* {isHome && <Brands />} */}
      <div id='footer'>
        {isHome && <DownFooter />}
        <Footer />
      </div>
    </>
  );
};

export default DefaultLayout;
