import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from './Layout.module.scss';
import Nav from 'shared/Nav';
import {useRouter} from 'next/router'

const Layout = ({children}) => {
  const router = useRouter();
  const meta = {
    title: 'Kalabars',
    description: 'Online audio & video on demand product that allows you to listen and view quality awesome content. We are sharing African narratives.',
    url: 'https://www.kalabars.com',
    type: 'website',
  };

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <link rel="icon" href="/logo1.jpg" />
        <meta name="description" content={meta.description} key="title" />
        <meta property="og:url" content={`http://localhost:3000${router.asPath}`} key="url" />
        <meta property="og:type" content={meta.type} key="og:type" />
        <meta property="og:title" content={meta.title} key="og:title" />
        <meta property="og:description" content={meta.description} key="og:description" />
        {/* {meta,date && <meta property="og:date" content={meta.date} key="og:date" />} */}
      </Head>
      <div className={styles.LayoutWrapper}>
        <Nav scrolling={scrolling}/>
        {children}
      </div>
    </>
  )
}

export default Layout;