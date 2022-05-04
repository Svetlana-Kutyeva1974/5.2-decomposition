const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;

/*
<div class="news__agency-icon news__agency-icon_image_yes" title="РИА Новости"
 style="background-image:url(&quot;https://avatars.mds.yandex.net/get-ynews-logo/135513/1002-1544074003449-square/logo-square&quot;)">
 </div>

 <div class="news__agency-icon news__agency-icon_image_yes" title="Газета.Ru" 
 style="background-image:url(&quot;https://avatars.mds.yandex.net/get-ynews-logo/41096/1040-1640775230584-square/logo-square&quot;)"></div>

 <div class="news__agency-icon news__agency-icon_image_yes" title="Российская газета" 
 style="background-image:url(&quot;https://avatars.mds.yandex.net/get-ynews-logo/26056/1116-1478692904205-square/logo-square&quot;)"></div>

 <div class="news__agency-icon news__agency-icon_image_yes" title="Коммерсантъ" 
 style="background-image:url(&quot;https://avatars.mds.yandex.net/get-ynews-logo/26056/1048-1478692902313-square/logo-square&quot;)"></div>
*/
