(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{Nl4J:function(t,e,r){"use strict";function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t}).apply(this,arguments)}r.r(e);var s=r("ezi5"),n=t=>{var{headline:e,url:r,lead_art:a,readable_pub_date:n}=t;return Object(s.h)("article",{class:"story"},Object(s.h)("a",{class:"story-link dim",href:r,target:"_blank","ga-event-category":"read more","ga-event-action":"automated by tag","ga-event-label":"apps page"},Object(s.h)("div",{class:"story-media"},Object(s.h)("div",{class:"story-art"},Object(s.h)("img",{src:a.thumbnails.letterbox,alt:e})),Object(s.h)("div",{class:"story-text"},Object(s.h)("header",{class:"story-header"},Object(s.h)("h4",{class:"story-headline"},e),Object(s.h)("p",{class:"story-byline"},n))))))},o=r("xcSt");class i extends s.Component{constructor(){super(),this.state={stories:[]}}componentDidMount(){var{gutenTag:t,numberOfStories:e}=this.props;fetch(Object(o.a)({gutenTag:t,numberOfStories:e})).then(t=>t.json()).then(t=>{var{results:e}=t;return this.setState({stories:e})})}render(t,e){var{title:r}=t,{stories:o}=e;return Object(s.h)("section",{class:"related-stories"},Object(s.h)("p",{class:"related-content__title"},r),Object(s.h)("nav",{class:"stories"},o.map(t=>Object(s.h)(n,a({key:t.id},t)))))}}i.defaultProps={numberOfStories:4,title:"Read more"};e.default=i},xcSt:function(t,e,r){"use strict";r.d(e,"a",function(){return s}),r.d(e,"b",function(){return a});var a="https://www.texastribune.org/api/v1/content/most_viewed/?format=json&limit=5",s=t=>{var{gutenTag:e,numberOfStories:r=4}=t;return"https://www.texastribune.org/api/v1/content/?content_type=story,audio,video,pointer&tag=".concat(e,"&tag!=object-tribcast&fields=id,url,readable_pub_date,headline,short_summary,lead_art&limit=").concat(r,"&format=json")}}}]);
//# sourceMappingURL=RelatedContent.a705707559.mjs.map