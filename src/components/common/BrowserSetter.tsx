import isWebview from 'is-ua-webview';
import { useEffect } from 'react';

function BrowserSetter() {
  useEffect(() => {
    const agent = navigator.userAgent.toLowerCase();
    const isIOS = navigator.userAgent.match(/iPhone|iPad/i);
    const link = 'https://deliverble-event.netlify.app/';

    if (isIOS && isWebview(navigator.userAgent)) {
      alert('크롬 또는 사파리에서 접속해 주세요.');
      window.location.href = 'googlechrome://navigate?url=' + link;
    }

    if (!isIOS) {
      if (agent.indexOf('kakao') > -1 || agent.indexOf('instagram') > -1) {
        if (agent.includes('kakao')) {
          window.location.href = 'kakaotalk://inappbrowser/close';
        } else if (agent.includes('instagram')) {
          window.close();
        }

        window.location.href =
          'intent://' +
          window.location.href.replace(/https?:\/\//i, '') +
          '#Intent;scheme=http;package=com.android.chrome;end';
      }
    }
  }, []);

  return null;
}

export default BrowserSetter;
