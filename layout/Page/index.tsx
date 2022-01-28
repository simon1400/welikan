import { FC, useState } from 'react';
import Head from 'next/head'
import { useRouter } from 'next/router'

import Header from '../Header'
import Footer from '../Footer'

import PageProps from '../../interfaces/page';
import AdminSidebar from '../AdminSidebar';
import AdminHead from '../../components/AdminHead';
import SingUpModal from '../Modals/Auth/SingUp';
import Login from '../Modals/Auth/Login';
import Language from '../Modals/Localization/Language';

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
        {/*<script async src="https://www.googletagmanager.com/gtag/js?id=G-DJN3SG2FPF"></script>
        <script dangerouslySetInnerHTML={{__html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-DJN3SG2FPF');
          gtag('config', 'AW-465988455');`}} />*/}

        <meta charSet="utf-8" />

        <link href='https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.css' rel='stylesheet' />
        
        <link rel="icon" href="/favicon/favicon.ico" />

        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />

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

        {/*<!-- Facebook Pixel Code -->*/}
        {/*<script dangerouslySetInnerHTML={{__html: `!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '730771304229470');
          fbq('track', 'PageView');`}} />

        <noscript><img height="1" width="1" style={{display: 'none'}}
        src="https://www.facebook.com/tr?id=730771304229470&ev=PageView&noscript=1"
        /></noscript>*/}
        {/*<!-- End Facebook Pixel Code -->*/}

        {/*<!-- Hotjar Tracking Code for https://hurom.cz/ -->*/}
        {/*<script dangerouslySetInnerHTML={{__html: `(function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:2264926,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}} />*/}

      </Head>
      <Header />
      <main id={id} className={`${className}${admin ? " layout-admin" : ''}`}>
        {admin && <AdminSidebar />}
        {admin ? <div>
          <div className="content-layout">
            <AdminHead />
            {children}
          </div>
        </div> : children}
      </main>
      <Footer />
      <SingUpModal />
      <Login />
      <Language />
    </>
  );
}


export default Page
