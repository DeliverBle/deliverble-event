import { useEffect } from 'react';

function BrowserSetter() {
  useEffect(() => {
    const isInAppBrowser = navigator.userAgent.match(
      /inapp|NAVER|KAKAOTALK|Snapchat|Line|WirtschaftsWoche|Thunderbird|Instagram|everytimeApp|WhatsApp|Electron|wadiz|AliApp|zumapp|iPhone(.*)Whale|Android(.*)Whale|kakaostory|band|twitter|DaumApps|DaumDevice\/mobile|FB_IAB|FB4A|FBAN|FBIOS|FBSS|SamsungBrowser\/[^1]/i,
    );

    if (isInAppBrowser !== null) {
      const isIOS = navigator.userAgent.match(/iPhone|iPad/i);
      if (isIOS) {
        window.location.href = 'googlechrome://' + window.location.href.replace(/https?:\/\//i, '');
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
