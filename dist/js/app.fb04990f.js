(function(t){function e(e){for(var r,o,s=e[0],c=e[1],l=e[2],f=0,p=[];f<s.length;f++)o=s[f],i[o]&&p.push(i[o][0]),i[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(p.length)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(r=!1)}r&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},i={app:0},a=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0cfb":function(t,e,n){},"2e35":function(t,e,n){"use strict";var r=n("8a15"),i=n.n(r);i.a},3657:function(t,e,n){"use strict";var r=n("3ab9"),i=n.n(r);i.a},"3ab9":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("accordion",{attrs:{items:t.items}})],1)},a=[],o=n("bc3a"),s=n.n(o),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"accordion"},[n("accordion-header",{attrs:{title:t.title}}),n("section",{staticClass:"accordion__content"},[n("ol",{staticClass:"accordion__list",attrs:{role:"list"}},t._l(t.items,function(t,e){return n("list-item",{key:"list-item-"+e,attrs:{item:t}})}),1)])],1)},l=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"list-item",class:{"list-item--active":t.show},attrs:{role:"listitem"},on:{click:function(e){t.show=!t.show}}},[t._v(t._s(t.item.name)),n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"list-item__card"},[n("img",{staticClass:"list-item__img",attrs:{src:t.item.image_url,alt:t.item.name}}),n("p",{staticClass:"list-item__text"},[t._v(t._s(t.item.description))])])])},f=[],p={name:"list-item",props:{item:Object},data:function(){return{show:!1}}},d=p,m=(n("3657"),n("2877")),_=Object(m["a"])(d,u,f,!1,null,null,null),v=_.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"accordion__header"},[n("h1",{staticClass:"accordion__title"},[t._v(t._s(t.title))])])},b=[],w={name:"accordion-header",props:{title:String}},g=w,y=(n("2e35"),Object(m["a"])(g,h,b,!1,null,null,null)),O=y.exports,j={name:"accordion",components:{listItem:v,AccordionHeader:O},props:{items:Array},data:function(){return{title:"Beers"}}},x=j,C=(n("8e77"),Object(m["a"])(x,c,l,!1,null,null,null)),k=C.exports,P={name:"app",components:{Accordion:k},data:function(){return{items:[]}},created:function(){var t=this;s.a.get("https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6").then(function(e){t.items=e.data})}},S=P,$=(n("cf25"),Object(m["a"])(S,i,a,!1,null,null,null)),E=$.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(E)}}).$mount("#app")},7990:function(t,e,n){},"8a15":function(t,e,n){},"8e77":function(t,e,n){"use strict";var r=n("7990"),i=n.n(r);i.a},cf25:function(t,e,n){"use strict";var r=n("0cfb"),i=n.n(r);i.a}});
//# sourceMappingURL=app.fb04990f.js.map