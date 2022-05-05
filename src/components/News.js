import React from "react";
//import PropTypes from "prop-types";
import { nanoid } from 'nanoid';


const News = ({ listTitle, listNews }) => {
  return (
    <>
    <div>
      <div className="ui horizontal list">
        {listTitle.map(link => (
          <a href="/" className="item" key={nanoid()}>
            {link}
          </a>
        ))}
        {new Date(Date.now()).toLocaleString()}
        
      </div>
      
      <div className="ui vertikal list">
      {listNews.map(link => (
        <a href="/" className="item" key={nanoid()}>
          {link.text}
        </a>
      ))}

    </div>
  </div>
  </>
  );
};
/*
SearchList.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string.isRequired)
};
*/
export default News;

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

дата в js: new Date(Date.now()).toLocaleString().split(',')[0]; 
https://stackoverflow.com/questions/12409299/how-to-get-current-formatted-date-dd-mm-yyyy-in-javascript-and-append-it-to-an-i)
 */
