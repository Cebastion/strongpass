'use client'
import { useEffect } from 'react';

export default function YandexMetrika() {
  useEffect(() => {
    (function (m: any, e: Document, t: string, r: string, i: string, k?: HTMLScriptElement, a?: HTMLElement) {
      m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments) };
      m[i].l = 1 * new Date().getTime();
      for (let j = 0; j < e.scripts.length; j++) {
        if (e.scripts[j].src === r) { return; }
      }
      k = e.createElement(t) as HTMLScriptElement;
      a = e.getElementsByTagName(t)[0] as HTMLElement;
      k.async = true;
      k.src = r;
      a.parentNode?.insertBefore(k, a);
    })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

    // Инициализация Yandex Metrika
    (window as any).ym(98752603, "init", {
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      webvisor: true
    });
  }, []);

  return (
    <noscript>
      <div>
        <img src="https://mc.yandex.ru/watch/98752603" style={{ position: 'absolute', left: '-9999px' }} alt="" />
      </div>
    </noscript>
  );
}