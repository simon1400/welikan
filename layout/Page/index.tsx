import { FC, useState } from 'react';
import Head from 'next/head'
import { useRouter } from 'next/router'

import PageProps from '../../interfaces/page';
import AdminSidebar from '../AdminSidebar';
import AdminHead from '../../components/AdminHead';

const Page: FC<PageProps> = ({
  children,
  id,
  className,
  title,
  description,
  image,
  contentType,
  published,
  category,
  updated,
  noCrawl,
  tags,
  admin = false
}) => {
  const router = useRouter()
  const [global, setGlobal] = useState({
    site_url: process.env.NODE_ENV === 'development' ? 'http://localhost:3005' : 'https://welican.com',
    facebook_app_id: '',
    defaultTitle: 'WELIKAN',
    defaultDescription: 'Welikan',
    defaultImage: `${process.env.NODE_ENV === 'development' ? 'http://localhost:3005' : 'https://welikan.com'}`,
    defaultTwitter: '@cereallarceny',
    defaultSep: ' '
  })

  const theTitle: string = title ? (title + global.defaultSep + global.defaultTitle).substring(0, 60) : global.defaultTitle;
  const theDescription: string = description ? description : global.defaultDescription;
  const theImage: string = image ? image : global.defaultImage;

  return (
    <>
      <Head>
        <meta charSet="utf-8" />

        <link href='https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.css' rel='stylesheet' />
        
        {/* <link rel="icon" href="/favicon/favicon.ico" /> */}

        {/* <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" /> */}

        {/*<link rel="stylesheet preload prefetch" href="/fonts.css" as="style" type="text/css" crossOrigin="anonymous" />*/}
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#000" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{theTitle}</title>
        <link rel="canonical" href={global.site_url+router.asPath} />
        <meta itemProp="name" content={theTitle} />
        <meta itemProp="description" content={theDescription} />
        <meta itemProp="image" content={theImage} />
        <meta name="description" content={theDescription} />
        {/*<meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={global.defaultTwitter} />
        <meta name="twitter:title" content={theTitle} />
        <meta name="twitter:description" content={theDescription} />
        <meta name="twitter:creator" content={twitter || global.defaultTwitter} />
        <meta name="twitter:image:src" content={theImage} />*/}
        <meta property="og:title" content={theTitle} />
        <meta property="og:type" content={contentType || 'website'} />
        <meta property="og:url" content={global.site_url+router.asPath} />
        <meta property="og:image" content={theImage} />
        <meta property="og:description" content={theDescription} />
        <meta property="og:site_name" content="Kralovska pece" />
        <meta property="fb:app_id" content={global.facebook_app_id} />

        {published && <meta name="article:published_time" content={published} />}
        {category && <meta name="article:section" content={category} />}
        {updated && <meta name="article:modified_time" content={updated} />}
        {noCrawl && <meta name="robots" content="noindex, nofollow" />}
        {tags && <meta name="article:tag" content={tags} />}

      </Head>
      <main id={id} className={`${className}${admin ? " layout-admin" : ''}`}>
        {admin && <AdminSidebar />}
        {admin ? <div>
          <div className="content-layout">
            <AdminHead />
            {children}
          </div>
        </div> : children}
      </main>
    </>
  );
}


export default Page
