(self.webpackChunkportfolio_blog=self.webpackChunkportfolio_blog||[]).push([[438],{4316:function(e,t,n){var r=n(2767),o=n(9056),a=o;a.v1=r,a.v4=o,e.exports=a},2353:function(e){for(var t=[],n=0;n<256;++n)t[n]=(n+256).toString(16).substr(1);e.exports=function(e,n){var r=n||0,o=t;return[o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]]].join("")}},237:function(e){var t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(t){var n=new Uint8Array(16);e.exports=function(){return t(n),n}}else{var r=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),r[t]=e>>>((3&t)<<3)&255;return r}}},2767:function(e,t,n){var r,o,a=n(237),i=n(2353),l=0,c=0;e.exports=function(e,t,n){var d=t&&n||0,s=t||[],m=(e=e||{}).node||r,u=void 0!==e.clockseq?e.clockseq:o;if(null==m||null==u){var p=a();null==m&&(m=r=[1|p[0],p[1],p[2],p[3],p[4],p[5]]),null==u&&(u=o=16383&(p[6]<<8|p[7]))}var g=void 0!==e.msecs?e.msecs:(new Date).getTime(),f=void 0!==e.nsecs?e.nsecs:c+1,h=g-l+(f-c)/1e4;if(h<0&&void 0===e.clockseq&&(u=u+1&16383),(h<0||g>l)&&void 0===e.nsecs&&(f=0),f>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");l=g,c=f,o=u;var w=(1e4*(268435455&(g+=122192928e5))+f)%4294967296;s[d++]=w>>>24&255,s[d++]=w>>>16&255,s[d++]=w>>>8&255,s[d++]=255&w;var y=g/4294967296*1e4&268435455;s[d++]=y>>>8&255,s[d++]=255&y,s[d++]=y>>>24&15|16,s[d++]=y>>>16&255,s[d++]=u>>>8|128,s[d++]=255&u;for(var v=0;v<6;++v)s[d+v]=m[v];return t||i(s)}},9056:function(e,t,n){var r=n(237),o=n(2353);e.exports=function(e,t,n){var a=t&&n||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var i=(e=e||{}).random||(e.rng||r)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,t)for(var l=0;l<16;++l)t[a+l]=i[l];return t||o(i)}},9604:function(e,t,n){"use strict";n.d(t,{Z:function(){return k}});var r,o=n(7294),a=n(9),i=n(5761),l=(0,a.vJ)(r||(r=(0,i.Z)(["\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n"]))),c=n(4320),d=n(5444),s=n(1496),m=n.p+"static/epictetus-2a200291508b52c07e353a19246971d8.jpg",u=function(){var e=(0,d.useStaticQuery)("3434501458"),t={key:0,fluid:e.allFile.edges[0].node.childImageSharp.fluid,src:e.allFile.edges[0].node.childImageSharp.fluid.src,alt:"Epictetus writing code"};return o.createElement(p,null,o.createElement(g,{style:{backgroundImage:"url("+m+")",backgroundSize:"cover",backgroundAttachment:"fixed",backgroundPosition:"right center",backgroundRepeat:"no-repeat",backgroundColor:"transparent"}},o.createElement(f,null,o.createElement(h,null,"Learn with the Stoic ",o.createElement("span",{className:"gold-text"},"Programmer")))),o.createElement(w,null,o.createElement(y,{fluid:t.fluid,src:t.src,alt:t.alt,key:0}),o.createElement(v,null,"Learn with the Stoic ",o.createElement("span",{className:"gold-text"},"Programmer"))))},p=a.ZP.div.withConfig({displayName:"BlogHeader__HeaderContainer",componentId:"sc-14gluew-0"})(["width:80vw;height:35rem;margin-left:8.5rem;@media screen and (max-width:500px){margin:0 auto;width:100%;}"]),g=a.ZP.div.withConfig({displayName:"BlogHeader__WebContainer",componentId:"sc-14gluew-1"})(["width:100%;display:flex;flex:1;flex-wrap:nowrap;flex-direction:row;align-items:center;justify-content:center;background:rgba(255,255,255,0.2);height:100%;@media screen and (max-width:500px){display:none;}"]),f=a.ZP.div.withConfig({displayName:"BlogHeader__HeaderTextContainer",componentId:"sc-14gluew-2"})(["width:60%;margin:0 4rem 0 2rem;@media screen and (max-width:500px){margin:0 1rem;}"]),h=a.ZP.h1.withConfig({displayName:"BlogHeader__HeaderText",componentId:"sc-14gluew-3"})(["margin:0 auto;font-size:3.5rem;color:white;text-align:center;font-family:'Playfair Display',sans-serif;.gold-text{color:#fecc27;}"]),w=a.ZP.div.withConfig({displayName:"BlogHeader__MobileContainer",componentId:"sc-14gluew-4"})(["margin:0 auto;display:flex;flex-direction:column;align-items:center;justify-content:center;height:auto;@media only screen and (min-width:700px){display:none;}"]),y=(0,a.ZP)(s.Z).withConfig({displayName:"BlogHeader__Epictetus",componentId:"sc-14gluew-5"})(["display:none;@media screen and (max-width:500px){display:block;width:100%;}"]),v=a.ZP.h1.withConfig({displayName:"BlogHeader__MobileText",componentId:"sc-14gluew-6"})(["font-family:'Playfair Display',sans-serif;font-size:3rem;text-align:center;width:80%;.gold-text{color:#fecc27;display:block;}"]),x=n(3375),b=a.ZP.div.withConfig({displayName:"BlogLayout__BlogContainer",componentId:"gfem6x-0"})([""," width:100%;"],""),P=a.ZP.div.withConfig({displayName:"BlogLayout__BlogFooterContainer",componentId:"gfem6x-1"})(["margin:0 auto;width:100%;background-color:rgba(100,100,100,0.6);padding:0.5rem 0;"]),k=function(e){var t=e.children;return o.createElement(b,null,o.createElement(l,null),o.createElement(c.Z,null),o.createElement(u,null),o.createElement("main",null,t),o.createElement(P,null,o.createElement(x.Z,{theme:"dark"})))}},6916:function(e,t,n){"use strict";var r=n(7294),o=n(5444),a=n(1496),i=n(9);t.Z=function(){var e=(0,o.useStaticQuery)("2981069726").allFile.edges[0].node.childImageSharp;return r.createElement(l,{to:"/Brandon"},r.createElement(c,{fluid:e.fluid,alt:"A small picture of me wearing a suit."}))};var l=(0,i.ZP)(o.Link).withConfig({displayName:"MyIcon__IconLink",componentId:"sc-1ujpjf4-0"})([""]),c=(0,i.ZP)(a.Z).withConfig({displayName:"MyIcon__MyIconImage",componentId:"sc-1ujpjf4-1"})(["width:25px;display:inline-block;&:hover{transform:scale(1.05);}"])},4261:function(e,t,n){"use strict";var r=n(7294),o=n(9),a=n(5444),i=n(1521),l=(n(4316),n(6916));t.Z=function(e){var t=e.post,n=e.inTags,o=void 0!==n&&n,a=e.setTag,w=(0,r.useRef)(!1);return(0,r.useEffect)((function(){return function(){w.current=!1}}),[]),r.createElement(c,null,r.createElement(d,{to:t.path},t.title),r.createElement(s,null,"Posted by Brandon ",r.createElement(l.Z,null)," on ",t.date),r.createElement(m,null,o?r.createElement(u,null,t.tags.map((function(e,t){return r.createElement(p,{key:t},r.createElement(i._MD,{id:"puzzle"}),r.createElement(g,{onClick:function(){return a(e)}},e))}))):r.createElement(u,null,t.tags.map((function(e,t){return r.createElement(p,{key:t},r.createElement(i._MD,{id:"puzzle"}),r.createElement(f,{to:"/tags"},e))})))),r.createElement(h,null,t.excerpt))};var c=o.ZP.div.withConfig({displayName:"PostPreview__PostPreviewContainer",componentId:"pzssmc-0"})(["display:block;margin:0 auto;width:60%;text-align:left;margin:2rem auto;height:auto;@media screen and (max-width:500px){margin:1rem auto;width:80%;}"]),d=(0,o.ZP)(a.Link).withConfig({displayName:"PostPreview__PostLink",componentId:"pzssmc-1"})(["text-decoration:none;font-size:2.25rem;border-bottom:2px solid #0070B7;color:#0070B7;margin:1rem auto;font-family:'Roboto',sans-serif;transition:border-bottom 0.2s ease;&:link,&:visited{color:#0070B7;}&:hover{border-bottom:none;color:#95BCDE;}"]),s=o.ZP.span.withConfig({displayName:"PostPreview__PostInfo",componentId:"pzssmc-2"})(["display:block;margin:0.5rem auto;"]),m=o.ZP.div.withConfig({displayName:"PostPreview__TagContainer",componentId:"pzssmc-3"})(["display:block;margin:1rem auto;"]),u=o.ZP.div.withConfig({displayName:"PostPreview__PuzzlePieces",componentId:"pzssmc-4"})(["display:flex;flex-direction:row;flex:1;flex-wrap:wrap;align-items:center;"]),p=o.ZP.div.withConfig({displayName:"PostPreview__TagLinkContainer",componentId:"pzssmc-5"})(["border:1px solid #0070b7;border-radius:5px;padding:0.25rem 0;text-align:center;width:7rem;&:hover{color:#5ED3F3;border-color:#5ED3F3;}#puzzle{font-size:0.75rem;color:#0070b7;}#puzzle:hover{color:#5ed3f3;}"]),g=o.ZP.span.withConfig({displayName:"PostPreview__ActiveTag",componentId:"pzssmc-6"})(["text-decoration:none;color:#0070b7;font-size:0.75rem;margin:0 0.25rem;&:hover{color:#5ED3F3;}"]),f=(0,o.ZP)(a.Link).withConfig({displayName:"PostPreview__TagLink",componentId:"pzssmc-7"})(["text-decoration:none;color:#0070b7;font-size:0.75rem;margin:0 0.25rem;&:active,&:link{color:#0070b7;}&:hover{color:#5ED3F3;}"]),h=o.ZP.div.withConfig({displayName:"PostPreview__ContentPreviewContainer",componentId:"pzssmc-8"})(["display:block;"])},6179:function(e,t,n){"use strict";var r=n(7294),o=n(5414),a=n(5444);function i(e){var t,n,i=e.description,l=e.lang,c=e.meta,d=e.title,s=(0,a.useStaticQuery)("63159454").site,m=i||s.siteMetadata.description,u=null===(t=s.siteMetadata)||void 0===t?void 0:t.title;return r.createElement(o.q,{htmlAttributes:{lang:l},title:d,titleTemplate:u?"%s | "+u:null,meta:[{name:"description",content:m},{property:"og:title",content:d},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(n=s.siteMetadata)||void 0===n?void 0:n.author)||""},{name:"twitter:title",content:d},{name:"twitter:description",content:m}].concat(c)})}i.defaultProps={lang:"en",meta:[],description:""},t.Z=i},7110:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var r=n(7294),o=n(5444),a=n(4316),i=n(9604),l=n(5414),c=n(9),d=n(4261);function s(e){var t=e.data.filter((function(e){return e.frontmatter.title.length>0})).map((function(e){var t={title:e.frontmatter.title,path:e.frontmatter.path,date:e.frontmatter.date,excerpt:e.excerpt,tags:e.frontmatter.tags};return r.createElement(d.Z,{key:e.key,post:t})}));return r.createElement("div",{className:"blog-posts"},r.createElement(l.q,{title:"The Stoic Programmer | Brandon Zirulnikoff"}),r.createElement(m,null,r.createElement(u,null,r.createElement(p,{to:"/tags"},"Browse Tags")),r.createElement(g,null,t)))}var m=c.ZP.div.withConfig({displayName:"BlogIndex__IndexContainer",componentId:"sc-15zkolj-0"})(["border-radius:10px;width:100%;height:auto;padding:2rem 0 0 0;margin:0 auto;background:linear-gradient(0.25turn,transparent,rgba(255,255,255,1) );@media screen and (max-width:500px){padding:0;}"]),u=c.ZP.span.withConfig({displayName:"BlogIndex__TagHeader",componentId:"sc-15zkolj-1"})(["display:block;fontSize:1.5rem;margin:2rem auto;text-align:center;@media screen and (max-width:500px){margin:0 auto;}"]),p=(0,c.ZP)(o.Link).withConfig({displayName:"BlogIndex__TagsLink",componentId:"sc-15zkolj-2"})(["text-decoration:none;cursor:pointer;border-bottom:2px solid black;transition:border-bottom 0.3s ease 0s;color:black;text-align:center;font-size:1.75rem;&:hover{color:#828282;border-bottom:transparent;}"]),g=c.ZP.div.withConfig({displayName:"BlogIndex__InnerContainer",componentId:"sc-15zkolj-3"})(["border-radius:10px;width:90%;height:auto;padding:3rem 0;margin:0 auto;background:rgba(255,255,255,0.7);display:flex;flex-wrap:wrap;flex:1;flex-direction:column;align-items:center;justify-content:center;"]),f=n(6179),h=function(){var e=(0,o.useStaticQuery)("3894138085").allMarkdownRemark.edges.map((function(e){var t=e.node,n=t.html.slice(3,150)+"...",r=new RegExp("<br>","g"),o=n.replace(r," ");return Object.assign({},t,{key:(0,a.v4)(),excerpt:o})}));return r.createElement(i.Z,null,r.createElement(f.Z,{title:"Learn about the Best Full-stack Tech with the Stoic Programmer"}),r.createElement(s,{data:e}))}}}]);
//# sourceMappingURL=component---src-pages-learn-js-b12ac8d3275308ca4822.js.map