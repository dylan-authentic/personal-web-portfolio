import { AppProps } from 'next/app';
import '../styles/globals.css';
import '../styles/fonts.css';
import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
    applicationId: process.env.NEXT_PUBLIC_DD_APP_ID,
    clientToken: process.env.NEXT_PUBLIC_DD_CLIENT_TOKEN,
    site: 'us5.datadoghq.com',
    service: 'dylan.engineering-web-portfolio',
    env: 'production',
    version: '1.0.0', 
    sessionSampleRate: 100,
    sessionReplaySampleRate: 20,
    trackUserInteractions: true,
    trackResources: true,
    trackLongTasks: true,
    defaultPrivacyLevel: 'mask-user-input',
});

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
