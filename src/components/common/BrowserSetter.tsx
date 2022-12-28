import isWebview from 'is-ua-webview';
import { useEffect } from 'react';

function BrowserSetter() {
  useEffect(() => {
    const agent = navigator.userAgent.toLowerCase();
    const isIOS = navigator.userAgent.match(/iPhone|iPad/i);

    if (isIOS && isWebview(navigator.userAgent)) {
      window.location.href = 'googlechrome://' + window.location.href.replace(/https?:\/\//i, '');
    }

    if (agent.indexOf('kakao') > -1 || agent.indexOf('instagram') > -1) {
      if (agent.includes('kakao')) {
        window.location.href = 'kakaotalk://inappbrowser/close';
      } else if (agent.includes('instagram')) {
        window.close();
      }

      if (isIOS) {
        alert('크롬 또는 사파리에서 접속해 주세요.');
      } else {
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
