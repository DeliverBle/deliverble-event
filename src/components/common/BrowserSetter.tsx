import { useEffect } from 'react';

function BrowserSetter() {
  useEffect(() => {
    const agent = navigator.userAgent.toLowerCase();
    const isIOS = navigator.userAgent.match(/iPhone|iPad/i);

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
