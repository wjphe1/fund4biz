import Head from 'next/head'

export default function Meta() {
    return (
        <Head>
            <meta name='application-name' content='PWA App' />
            <meta name='apple-mobile-web-app-capable' content='yes' />
            <meta name='apple-mobile-web-app-status-bar-style' content='default' />
            <meta name='apple-mobile-web-app-title' content='PWA App' />
            <meta name='description' content='Best PWA App in the world' />
            <meta name='format-detection' content='telephone=no' />
            <meta name='mobile-web-app-capable' content='yes' />
            <meta name='msapplication-config' content='/images/browserconfig.xml' />
            <meta name='msapplication-TileColor' content='#2B5797' />
            <meta name='msapplication-tap-highlight' content='no' />
            <meta name='theme-color' content='#000000' />
                    
            <link rel='apple-touch-icon' sizes='180x180' href='/images/apple-touch-icon.png' />
            <link rel='icon' type='image/png' sizes='32x32' href='/images/favicon-32x32.png' />
            <link rel='icon' type='image/png' sizes='16x16' href='/images/favicon-16x16.png' />
            <link rel='manifest' href='/static/manifest.json' />
            <link rel='mask-icon' href='/images/safari-pinned-tab.svg' color='#5bbad5' />
            <link rel='shortcut icon' href='/images/favicon.ico' />
            <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500' />
                
            <meta name='twitter:card' content='summary' />
            <meta name='twitter:url' content='https://yourdomain.com' />
            <meta name='twitter:title' content='PWA App' />
            <meta name='twitter:description' content='Best PWA App in the world' />
            <meta name='twitter:image' content='https://yourdomain.com/images/android-chrome-192x192.png' />
            <meta name='twitter:creator' content='@DavidWShadow' />
            <meta property='og:type' content='website' />
            <meta property='og:title' content='PWA App' />
            <meta property='og:description' content='Best PWA App in the world' />
            <meta property='og:site_name' content='PWA App' />
            <meta property='og:url' content='https://yourdomain.com' />
            <meta property='og:image' content='https://yourdomain.com/images/apple-touch-icon.png' />
        </Head>
    )
}