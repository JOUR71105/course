(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{rKEY:function(t,e,n){"use strict";n.r(e);var r=n("ezi5");function o(t){return null==t}var i=" ",s=new RegExp(/\s+([^\s]*)\s*$/);var a=function(){var t=window.location;return"".concat(t.protocol,"//").concat(t.host).concat(t.pathname)};var c=n("xcSt");e.default=class extends r.Component{constructor(){super(),this.state={loadSucceeded:!1,scrollingDown:!1,stories:[]},this.previousYOffset=-1,this.onScroll=this.onScroll.bind(this),this.throttledOnScroll=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this,r=null,o=null,i=()=>{t.apply(n,o),r=null};return function(){r||(o=arguments,r=setTimeout(i,e))}}(this.onScroll,300)}onScroll(){var t,e=window.pageYOffset,n=this.previousYOffset;e>n?t=!0:e<n&&(t=!1),this.previousYOffset=e,this.setState({scrollingDown:t})}componentDidMount(){window.addEventListener("scroll",this.throttledOnScroll,!1),fetch(c.b).then(t=>t.json()).then(t=>{var e=t.results?t.results:t;this.setState({loadSucceeded:!0,stories:e})})}componentWillUnmount(){window.removeEventListener("scroll",this.throttledOnScroll,!1)}render(t,e){var{loadSucceeded:n,scrollingDown:c,stories:l}=e,u=c?"ribbon ribbon--inactive":"ribbon";n||(u+=" ribbon--hidden");var d=a();return l=l.filter(t=>t.url!==d),Object(r.h)("nav",{class:u},Object(r.h)("p",{class:"ribbon__title"},"Trending on"," ",Object(r.h)("a",{href:"https://www.texastribune.org/"},"The Texas Tribune")),Object(r.h)("ul",{class:"ribbon__stories"},l.slice(0,4).map((t,e)=>{var n="ribbon__story";return 2===e&&(n+=" ribbon__story--three"),3===e&&(n+=" ribbon__story--four"),Object(r.h)("li",{key:t.id,class:n,"ga-event-category":"read more","ga-event-action":"trending","ga-event-label":"apps page"},Object(r.h)("a",{href:t.url},function(t,e){return void 0===e&&(e=i),o(t)?"":String(t).replace(s,e+"$1")}(t.headline)))})))}}},xcSt:function(t,e,n){"use strict";n.d(e,"a",function(){return o}),n.d(e,"b",function(){return r});var r="https://www.texastribune.org/api/v1/content/most_viewed/?format=json&limit=5",o=t=>{var{gutenTag:e,numberOfStories:n=4}=t;return"https://www.texastribune.org/api/v1/content/?content_type=story,audio,video,pointer&tag=".concat(e,"&tag!=object-tribcast&fields=id,url,readable_pub_date,headline,short_summary,lead_art&limit=").concat(n,"&format=json")}}}]);
//# sourceMappingURL=Ribbon.e04a41b6b2.mjs.map